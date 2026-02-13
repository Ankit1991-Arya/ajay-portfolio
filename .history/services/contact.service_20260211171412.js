const { sequelize } = require('../config/mysql'); // Adjust the path as necessary
const Contact = require('../models/contact.model')(sequelize, require('sequelize').DataTypes);

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
