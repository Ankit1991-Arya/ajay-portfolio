const contactModel = require('../models/contact.model');

exports.saveContact = async (contactData) => {
    try {
        const contact = await contactModel.create(contactData);

        return contact;
    } catch (error) {
        console.error('Error saving contact:', error);
        throw error;
    }
};
