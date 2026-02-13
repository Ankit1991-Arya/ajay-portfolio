const db = require('../config/mysql');

class GetInTouch {
  static async create(getInTouchData) {
    const { name, email, phone, subject, message } = getInTouchData;
    const status = 0;
    const created_at = new Date();
    
    console.log('Creating GetInTouch entry with data:', getInTouchData);
    const query = 'INSERT INTO information (name, email, phone, subject, message, status, created_at) VALUES (?, ?, ?, ?, ?, ?, ?)';
    const values = [name, email, phone, subject, message, status, created_at];

    try {
      const result = await db.execute(query, values);
      console.log('GetInTouch created successfully with ID:', result[0].insertId);
      return result;
    } catch (error) {
      console.error('Database error details:', error);
      throw new Error(`Database error: ${error.message}`);
    }
  }
}

module.exports = GetInTouch;
  