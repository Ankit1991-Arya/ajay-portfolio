const db = require('../config/mysql');

class FAQ {
  static async create(faqData) {
    const { name, email, phone, subject, message } = faqData;
    const status = 0;
    const created_at = new Date();
    
    console.log('Creating FAQ entry with data:', faqData);
    const query = 'INSERT INTO support (name, email, phone, subject, message, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, phone, subject, message, status, created_at];

    try {
      const result = await db.execute(query, values);
      console.log('FAQ created successfully with ID:', result[0].insertId);
      return result;
    } catch (error) {
      console.error('Database error details:', error);
      throw new Error(`Database error: ${error.message}`);
    }
  }
}

module.exports = FAQ;
  