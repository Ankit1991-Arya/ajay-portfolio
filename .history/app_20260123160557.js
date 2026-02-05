const express = require('express');
const path = require('path');

const app = express();
app.use(express.static(path.join(__dirname, 'public')));

const webRoutes = require('./routes/webRoutes');
app.use('/', webRoutes);
app.use('/blog', webRoutes);

app.listen(8000, () => {
  console.log('Server running on http://localhost:8000');
});
