import express from 'express';
import { body, validationResult } from 'express-validator';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../index.js';
import { authorizeExecutive } from '../middleware/auth.js';

const router = express.Router();

// Get all partners (Executive/Admin only)
router.get('/', authorizeExecutive, async (req, res) => {
  try {
    const { data: partners, error } = await supabase
      .from('partners')
      .select('*');

    if (error) throw error;
    res.json(partners);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Get partner by ID
router.get('/:id', async (req, res) => {
  try {
    const { id } = req.params;
    const { data: partner, error } = await supabase
      .from('partners')
      .select('*')
      .eq('id', id)
      .single();

    if (error) throw error;
    if (!partner) {
      return res.status(404).json({ error: 'Partner not found' });
    }

    // Check if user has permission to view this partner
    if (req.user.role === 'partner' && req.user.id !== partner.userId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    res.json(partner);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Register new partner
router.post(
  '/register',
  [
    body('businessName').notEmpty(),
    body('email').isEmail(),
    body('phone').notEmpty(),
    body('address').notEmpty(),
    body('bankDetails').isObject(),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const {
        businessName,
        email,
        phone,
        address,
        bankDetails,
      } = req.body;

      // Generate reference number
      const referenceNumber = `KZ-PTR-${new Date().getFullYear()}-${String(Math.floor(Math.random() * 100000)).padStart(5, '0')}`;

      const { data: partner, error } = await supabase
        .from('partners')
        .insert([
          {
            id: uuidv4(),
            referenceNumber,
            businessName,
            email,
            phone,
            address,
            bankDetails,
            userId: req.user.id,
            status: 'pending',
            kycStatus: 'pending',
            registrationDate: new Date().toISOString(),
          },
        ])
        .select()
        .single();

      if (error) throw error;

      res.status(201).json(partner);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update partner status (Executive/Admin only)
router.patch(
  '/:id/status',
  authorizeExecutive,
  [
    body('status').isIn(['pending', 'approved', 'rejected']),
  ],
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({ errors: errors.array() });
      }

      const { id } = req.params;
      const { status } = req.body;

      const { data: partner, error } = await supabase
        .from('partners')
        .update({ status })
        .eq('id', id)
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