import express from 'express';
import { body, validationResult } from 'express-validator';
import { supabase } from '../index.js';
import { authorizeExecutive } from '../middleware/auth.js';

const router = express.Router();

// Get dashboard stats
router.get('/stats', authorizeExecutive, async (req, res) => {
  try {
    const [
      { count: totalPartners },
      { count: activeLeads },
      { data: monthlyRevenue },
      { data: conversions },
    ] = await Promise.all([
      supabase.from('partners').select('*', { count: 'exact' }),
      supabase.from('leads').select('*', { count: 'exact' }).eq('status', 'inProgress'),
      supabase.from('commissions').select('amount').eq('status', 'paid'),
      supabase.from('leads').select('status'),
    ]);

    const totalRevenue = monthlyRevenue.reduce((sum, sale) => sum + sale.amount, 0);
    const totalLeads = conversions.length;
    const convertedLeads = conversions.filter(lead => lead.status === 'converted').length;
    const conversionRate = totalLeads > 0 ? (convertedLeads / totalLeads) * 100 : 0;

    res.json({
      totalPartners,
      activeLeads,
      monthlyRevenue: totalRevenue,
      conversionRate,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get pending partner approvals
router.get('/pending-approvals', authorizeExecutive, async (req, res) => {
  try {
    const { data: pendingPartners, error } = await supabase
      .from('partners')
      .select('*')
      .eq('status', 'pending');

    if (error) throw error;
    res.json(pendingPartners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Update partner approval status
router.patch(
  '/partner-approval/:partnerId',
  authorizeExecutive,
  [
    body('status').isIn(['approved', 'rejected']),
    body('notes').optional(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { partnerId } = req.params;
      const { status, notes } = req.body;

      const { data: partner, error } = await supabase
        .from('partners')
        .update({
          status,
          approvalNotes: notes,
          approvedBy: req.user.id,
          approvalDate: new Date().toISOString(),
        })
        .eq('id', partnerId)
        .select()
        
        .single();

      if (error) throw error;
      res.json(partner);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;