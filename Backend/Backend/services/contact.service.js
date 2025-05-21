const Contact = require('../models/contact.model')

const createContact = async (contactBody) => {
    const contact = Contact.create(contactBody);
    return contact;
}

const getAll = async () => {
    let contact = await Contact.find();
    return contact;
}

const getContactById = async (_id) => {
    const contact = await Contact.findOne({ _id });
    if (!contact) {
        console.error(`Contact ${id} not found`);
    }
    return contact;
}


module.exports = {
    createContact,
    getAll,
    getContactById,
}