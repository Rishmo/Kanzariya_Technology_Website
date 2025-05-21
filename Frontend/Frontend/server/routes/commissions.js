import express from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../index.js';
import { authorizeExecutive } from '../middleware/auth.js';

const router = express.Router();

// Get all commissions (Executive/Admin only)
router.get('/', authorizeExecutive, async (req, res) => {
  try {
    const { data: commissions, error } = await supabase
      .from('commissions')
      .select('*');

    if (error) throw error;
    res.json(commissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get commissions by partner ID
router.get('/partner/:partnerId', async (req, res) => {
  try {
    const { partnerId } = req.params;
    
    // Check if user has permission to view these commissions
    if (req.user.role === 'partner' && req.user.partnerId !== partnerId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { data: commissions, error } = await supabase
      .from('commissions')
      .select('*')
      .eq('partnerId', partnerId);

    if (error) throw error;
    res.json(commissions);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Create new commission (Executive/Admin only)
router.post(
  '/',
  authorizeExecutive,
  [
    body('partnerId').notEmpty(),
    body('leadId').notEmpty(),
    body('amount').isNumeric(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { partnerId, leadId, amount } = req.body;

      const { data: commission, error } = await supabase
        .from('commissions')
        .insert([
          {
            id: uuidv4(),
            partnerId,
            leadId,
            amount,
            status: 'pending',
            createdAt: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      res.status(201).json(commission);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update commission status (Admin only)
router.patch(
  '/:id/status',
  authorizeExecutive,
  [
    body('status').isIn(['pending', 'approved', 'paid']),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const { status } = req.body;

      const updateData = {
        status,
        ...(status === 'paid' && { paidAt: new Date().toISOString() }),
      };

      const { data: commission, error } = await supabase
        .from('commissions')
        .update(updateData)
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.json(commission);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;