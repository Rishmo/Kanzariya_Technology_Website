const Partner = require('../models/partner.model');
const User = require('../models/user.model');

const getAll = async (req,res) => {
    const partner = await Partner.find().populate('userId');
    res.status(200).send(partner);
}

const createPartnerRequest = async (req, res) => {
    try {
        const request = new Partner({ userId: req.user.id });
        await request.save();
        res.status(201).send({ message: 'Partner request submitted' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

const approvePartner = async (req, res) => {
    try {
        const request = await Partner.findByIdAndUpdate(req.params.id, { status: 'approved' }, { new: true });
        if (!request) return res.status(404).json({ error: 'Request not found' });
        await User.findByIdAndUpdate(request.userId, { role: req.body.role });
        res.json({ message: 'Partner approved and role updated' });
    } catch (err) {
        res.status(400).json({ error: err.message });
    }
};

module.exports = {
    getAll,
    createPartnerRequest,
    approvePartner
}