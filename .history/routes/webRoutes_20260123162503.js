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
  // serve existing blog details/listing page
  res.sendFile(path.join(__dirname, '../public/pages/blog.html'));
});

// fallbacks for templates that link directly to filenames (served from public/pages)
router.get('/blog.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/blog.html'));
});

router.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/services.html'));
});

router.get('/services.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/services.html'));
});

router.get('/index.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/home.html'));
});
router.get('/home.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/home.html'));
});

module.exports = router;
