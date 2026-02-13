const GetInTouch = require('../models/faq.model');

exports.saveFAQ = async (faqData) => {
    try {
        console.log('Saving FAQ data:', faqData);
        const faq = await FAQ.create(faqData);
        console.log('FAQ saved successfully:', faq);
        return faq;
    } catch (error) {
        console.error('Error saving FAQ data:', error.message);
        throw error;
    }
};
