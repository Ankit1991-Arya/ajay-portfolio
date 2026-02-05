const express = require('express');
const path = require('path');
const router = express.Router();

router.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/home.html'));
});

router.get('/about', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/about.html'));
});

router.get('/contact', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/contact.html'));
});

router.get('/blog', (req, res) => {
  // serve the blog listing / single-post page available in the pages folder
  res.sendFile(path.join(__dirname, '../public/pages/blog-details.html'));
});

// fallback for templates that link to blog.html directly
router.get('/blog.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/blog-details.html'));
});

router.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/services.html'));
});

// fallback for templates that link to services.html directly
router.get('/services.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/services.html'));
});

module.exports = router;
