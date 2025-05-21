const express = require('express')
const contactController = require('../controllers/contact.controller');
const { protect, authorize } = require('../middlewares/auth');


const router = express.Router();

router
    .route('/')
    .post(contactController.addContact)
    .get(protect, authorize('admin'), contactController.getAllContacts);

module.exports = router;