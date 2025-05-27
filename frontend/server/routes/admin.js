import express from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../index.js';
import { authorizeAdmin } from '../middleware/auth.js';

const router = express.Router();

// Get dashboard stats
router.get('/stats', authorizeAdmin, async (req, res) => {
  try {
    const [
      { count: executiveCount },
      { count: partnerCount },
      { data: totalSales },
      { count: pendingApprovals },
    ] = await Promise.all([
      supabase.from('users').select('*', { count: 'exact' }).eq('role', 'executive'),
      supabase.from('partners').select('*', { count: 'exact' }),
      supabase.from('commissions').select('amount').eq('status', 'paid'),
      supabase.from('partners').select('*', { count: 'exact' }).eq('status', 'pending'),
    ]);

    const totalSalesAmount = totalSales.reduce((sum, sale) => sum + sale.amount, 0);

    res.json({
      totalExecutives: executiveCount,
      totalPartners: partnerCount,
      totalSales: totalSalesAmount,
      pendingApprovals: pendingApprovals,
    });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get all executives
router.get('/executives', authorizeAdmin, async (req, res) => {
  try {
    const { data: executives, error } = await supabase
      .from('users')
      .select('*')
      .eq('role', 'executive');

    if (error) throw error;
    res.json(executives);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create executive account
router.post(
  '/executives',
  authorizeAdmin,
  [
    body('email').isEmail(),
    body('password').isLength({ min: 6 }),
    body('name').notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { email, password, name } = req.body;

      const { data: executive, error } = await supabase.auth.signUp({
        email,
        password,
        options: {
          data: {
            role: 'executive',
            name,
          },
        },
      });

      if (error) throw error;
      res.status(201).json(executive);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Delete executive account
router.delete('/executives/:id', authorizeAdmin, async (req, res) => {
  try {
    const { id } = req.params;

    const { error } = await supabase
      .from('users')
      .delete()
      .eq('id', id)
      .eq('role', 'executive');

    if (error) throw error;
    res.status(204).send();
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

export default router;