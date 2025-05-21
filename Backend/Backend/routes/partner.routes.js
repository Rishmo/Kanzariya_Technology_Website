const express = require('express');
const partnerController = require('../controllers/partner.controller');
const { protect, authorize } = require('../middlewares/auth');
const router = express.Router();

router.post('/', protect, partnerController.createPartnerRequest);
router.patch('/:id/approve', protect, authorize('admin'), partnerController.approvePartner);
router.get('/getPartner', protect, partnerController.getAll)

module.exports = router;