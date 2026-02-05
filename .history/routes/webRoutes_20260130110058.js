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

router.get('/why-deetech', (req, res) => {
  // serve existing blog details/listing page
  res.sendFile(path.join(__dirname, '../public/pages/why-deetech.html'));
});

// fallbacks for templates that link directly to filenames (served from public/pages)
router.get('/why-deetech.html', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/why-deetech.html'));
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

router.get('/faq', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/faq.html'));
});

router.get('/vision', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/pages/vision.html'));
});

//Contact API Route
router.post('/api/contact', (req, res) => {
  const { name, email, phone, service, message } = req.body;

  console.log('Contact Form Data:', { name, email, phone, service, message });

  // Later: save to DB / send email
  res.status(200).json({
    success: true,
    message: 'Thank you! We will contact you soon.'
  });
});

//Get in touch API Route
router.post('/api/get-in-touch', (req, res) => {
  const { name, email, phone, subject, message } = req.body;

  console.log('Get In Touch:', { name, email, phone, subject, message });

  // Future: save to DB / send email
  res.status(200).json({
    success: true,
    message: 'Thanks for reaching out! We’ll get back to you shortly.'
  });
});

module.exports = router;
