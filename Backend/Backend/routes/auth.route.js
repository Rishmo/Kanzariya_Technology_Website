const express = require('express');
const authController = require('../controllers/auth.controller');
const { protect, authorize } = require('../middlewares/auth');

const router = express.Router();

router.route('/signup').post(authController.signup);
router.route('/login').post(authController.login);
router.get('/users', protect, authorize('admin'), authController.getAllUsers)

module.exports = router;