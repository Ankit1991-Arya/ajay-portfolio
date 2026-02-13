const Contact = require('../models/getintouch.model');

exports.saveContact = async (contactData) => {
    try {
        console.log('Saving contact data:', contactData);
        const contact = await Contact.create(contactData);
        console.log('Contact saved successfully:', contact);
        return contact;
    } catch (error) {
        console.error('Error saving contact:', error.message);
        throw error;
    }
};
