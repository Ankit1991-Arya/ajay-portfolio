const GetInTouch = require('../models/getintouch.model');

exports.saveContact = async (getInTouchData) => {
    try {
        console.log('Saving get in touch data:', getInTouchData);
        const getInTouch = await GetInTouch.create(getInTouchData);
        console.log('Get in touch saved successfully:', getInTouch);
        return getInTouch;
    } catch (error) {
        console.error('Error saving get in touch data:', error.message);
        throw error;
    }
};
