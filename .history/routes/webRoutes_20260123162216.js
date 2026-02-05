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

router.get('/services', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/services.html'));
});

module.exports = router;
