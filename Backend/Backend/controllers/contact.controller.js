const contactService = require('../services/contact.service');
const Contact = require('../models/contact.model');

const addContact = async (req, res) => {
    const createContact = await contactService.createContact(req.body);
    res.status(200).send(createContact)
}

const getAllContacts = async (req, res) => {
    const Contacts = await contactService.getAll();
    res.status(200).send(Contacts);
}

module.exports = {
    addContact,
    getAllContacts,
}