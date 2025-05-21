const mongoose = require('mongoose');

const partnerSchema = new mongoose.Schema({
    userId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'User'
    },
    status: {
        type: String,
        enum: ['pending', 'approved'],
        default: 'pending'
    }
}, { timestamps: true });

const Partner = mongoose.model('Partner', partnerSchema);

module.exports = Partner;