// app.js
require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');
const methodOverride = require('method-override');
const plantRoutes = require('./routes/plantRoutes');

const app = express();

/* ---------- STATIC FILES (forces correct folder) ---------- */
const staticPath = path.join(__dirname, 'public');
console.log('Serving static from:', staticPath);
app.use('/static', express.static(staticPath)); // use /static/... in links

/* ---------- VIEW ENGINE ---------- */
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views'));

/* ---------- MIDDLEWARE ---------- */
app.use(express.urlencoded({ extended: true })); // replaces body-parser
app.use(methodOverride('_method'));

// Optional: quick request logger while debugging
app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

/* ---------- DATABASE ---------- */
const MONGO_URI = process.env.MONGODB_URI || 'mongodb://127.0.0.1:27017/plantdb';
console.log('Connecting to MongoDB:', MONGO_URI);
mongoose
  .connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() => console.log('MongoDB Connected'))
  .catch(err => console.error('Mongo error:', err));

/* ---------- ROUTES ---------- */
app.use('/', plantRoutes);

/* ---------- 404 HANDLER ---------- */
app.use((req, res) => res.status(404).send('404 Not Found'));

/* ---------- START SERVER ---------- */
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server started at http://localhost:${PORT}`));
