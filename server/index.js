const express = require('express');
const cors = require('cors');
require('dotenv').config();

const connectDB = require('./db');
const translateRoute = require('./routes/translate');

const app = express();
const PORT = process.env.PORT || 5000;

connectDB();

app.use(cors());
app.use(express.json());

app.get('/api/health', (req, res) => {
  res.json({ status: 'Server is running' });
});

app.use('/api/translate', translateRoute);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
