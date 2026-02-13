const db = require('../config/mysql');

class GetInTouch {
  static async create(contactData) {
    const { name, email, phone, subject, service, message } = contactData;

    const query = 'INSERT INTO information (name, email, phone, subject, message) VALUES (?, ?, ?, ?, ?)';
    const values = [name, email, phone, subject, message];

    try {
      const result = await db.execute(query, values);
      return result;
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  }
}

module.exports = GetInTouch;
  