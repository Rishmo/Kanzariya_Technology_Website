const mongoose = require('mongoose');

const contactSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        trim: true,
    },
    lastName: {
        type: String,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        lowercase: true,
        trim: true,
    },
    phone: {
        type: String,
        trim: true,
    },
    company: {
        type: String,
        trim: true,
    },
    jobTitle: {
        type: String,
        trim: true,
    },
    country: {
        type: String,
        trim: true,
    },
    message: {
        type: String,
        trim: true,
    },
    reason: {
        type: String,
        enum: ['Sales Inquiry', 'Technical Support', 'Partnership', 'Press Inquiry', 'Other'],
        default: 'Sales Inquiry',
    },
});


const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;

