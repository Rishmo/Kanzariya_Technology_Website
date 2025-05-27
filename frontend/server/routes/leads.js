import express from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../index.js';
import { authorizeExecutive } from '../middleware/auth.js';

const router = express.Router();

// Get all leads (Executive/Admin only)
router.get('/', authorizeExecutive, async (req, res) => {
  try {
    const { data: leads, error } = await supabase
      .from('leads')
      .select('*');

    if (error) throw error;
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get leads by partner ID
router.get('/partner/:partnerId', async (req, res) => {
  try {
    const { partnerId } = req.params;
    
    // Check if user has permission to view these leads
    if (req.user.role === 'partner' && req.user.partnerId !== partnerId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { data: leads, error } = await supabase
      .from('leads')
      .select('*')
      .eq('partnerId', partnerId);

    if (error) throw error;
    res.json(leads);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Submit new lead
router.post(
  '/',
  [
    body('customerName').notEmpty(),
    body('customerEmail').isEmail(),
    body('customerPhone').notEmpty(),
    body('type').notEmpty(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        customerName,
        customerEmail,
        customerPhone,
        type,
        notes,
      } = req.body;

      const { data: lead, error } = await supabase
        .from('leads')
        .insert([
          {
            id: uuidv4(),
            partnerId: req.user.partnerId,
            customerName,
            customerEmail,
            customerPhone,
            type,
            notes,
            status: 'new',
            submissionDate: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;
      res.status(201).json(lead);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update lead status (Executive/Admin only)
router.patch(
  '/:id/status',
  authorizeExecutive,
  [
    body('status').isIn(['new', 'inProgress', 'converted', 'rejected']),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const { status } = req.body;

      const { data: lead, error } = await supabase
        .from('leads')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.json(lead);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;