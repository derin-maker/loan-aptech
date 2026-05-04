const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser'); 
require('dotenv').config();
const connectDB = require('./config/db');

const app = express();


connectDB();

// Middleware
app.use(cors({
  origin: [
    'https://project-eu3k3.vercel.app',  // your Vercel frontend
    'http://localhost:5173'               // local dev
  ],
  credentials: true
}));
app.use(express.json());
app.use(cookieParser()); 

// Routes
app.use('/api/auth', require('./routes/auth'));
app.use('/api/loans', require('./routes/loans'));

// Test route
app.get('/api/test', (req, res) => {
  res.json({ message: 'API is working!' });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(` Server running on port ${PORT}`);
});