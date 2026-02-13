const GetInTouch = require('../models/faq.model');

exports.saveGetInTouch = async (getInTouchData) => {
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
