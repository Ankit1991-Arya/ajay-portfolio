const sequelize = require('sequelize');
const db = require('../config/mysql');

class Contact {
  static async create(contactData) {
    const { name, email, phone, service, message } = contactData;
    const created_at = new Date();
    const status = 0;

    const query = 'INSERT INTO contact (name, email, phone, service, message, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, phone, service, message, status, created_at];

    try {
      const result = await db.execute(query, values);
      return {
        id: result[0].insertId,
        name,
        email,
        phone,
        service,
        message,
        status,
        created_at
      };
    } catch (error) {
      throw new Error(`Database error: ${error.message}`);
    }
  }
}

module.exports = Contact;
  