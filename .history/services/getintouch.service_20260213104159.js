const GetInTouch = require('../models/getintouch.model');

exports.saveContact = async (contactData) => {
    try {
        console.log('Saving get in touch data:', contactData);
        const contact = await GetInTouch.create(contactData);
        console.log('Get in touch saved successfully:', contact);
        return contact;
    } catch (error) {
        console.error('Error saving get in touch data:', error.message);
        throw error;
    }
};
