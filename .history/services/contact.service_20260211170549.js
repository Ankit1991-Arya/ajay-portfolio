const Contact = require('../models/contact.model');

exports.saveContact = async (contactData) => {
    try {
        console.log('Saving contact data:', contactData);
        const contact = await Contact.create(contactData);

        return contact;
    } catch (error) {
        console.error('Error saving contact:', error);
        throw error;
    }
};
