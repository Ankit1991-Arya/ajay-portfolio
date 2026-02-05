const mysql = require('mysql2');
require('dotenv').config();

// Create connection pool (BEST PRACTICE)
const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Close the pool when the application is terminated
process.on('SIGINT', () => {
  pool.end((err) => {
    if (err) {
      console.error('Error closing the database connection:', err);
    } else {
      console.log('Database connection closed.');
    }
    process.exit();
  });
});

module.exports = pool.promise();