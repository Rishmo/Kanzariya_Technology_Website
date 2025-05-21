import express from 'express';
import multer from 'multer';
import { v4 as uuidv4 } from 'uuid';
import { supabase } from '../index.js';
import { authorizeExecutive } from '../middleware/auth.js';

const router = express.Router();
const upload = multer({ storage: multer.memoryStorage() });

// Get agreement by partner ID
router.get('/partner/:partnerId', async (req, res) => {
  try {
    const { partnerId } = req.params;
    
    // Check if user has permission to view this agreement
    if (req.user.role === 'partner' && req.user.partnerId !== partnerId) {
      return res.status(403).json({ error: 'Unauthorized' });
    }

    const { data: agreement, error } = await supabase
      .from('agreements')
      .select('*')
      .eq('partnerId', partnerId)
      .single();

    if (error) throw error;
    res.json(agreement);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
});

// Upload agreement (Executive/Admin only)
router.post(
  '/:partnerId',
  authorizeExecutive,
  upload.single('agreement'),
  async (req, res) => {
    try {
      const { partnerId } = req.params;
      const file = req.file;

      if (!file) {
        return res.status(400).json({ error: 'No file uploaded' });
      }

      // Upload file to Supabase Storage
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('agreements')
        .upload(`${partnerId}/${uuidv4()}.pdf`, file.buffer, {
          contentType: 'application/pdf',
        });

      if (uploadError) throw uploadError;

      // Create agreement record
      const { data: agreement, error: dbError } = await supabase
        .from('agreements')
        .insert([
          {
            id: uuidv4(),
            partnerId,
            fileUrl: uploadData.path,
            uploadedBy: req.user.id,
            uploadedAt: new Date().toISOString(),
            status: 'active',
          },
        ])
        .select()
        .single();

      if (dbError) throw dbError;
      res.status(201).json(agreement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

// Update agreement status (Executive/Admin only)
router.patch(
  '/:id/status',
  authorizeExecutive,
  async (req, res) => {
    try {
      const { id } = req.params;
      const { status } = req.body;

      if (!['active', 'expired', 'terminated'].includes(status)) {
        return res.status(400).json({ error: 'Invalid status' });
      }

      const { data: agreement, error } = await supabase
        .from('agreements')
        .update({ status })
        .eq('id', id)
        .select()
        .single();

      if (error) throw error;
      res.json(agreement);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
);

export default router;