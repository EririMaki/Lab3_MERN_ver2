// app.js

const express = require('express');
const connectDB = require('./config/db');
var cors = require('cors');

const books = require('./routes/api/book');
const app = express();
//connect database
connectDB();

app.get('/', (req, res) => res.send('Hello world!'));
app.use(cors({ origin: true, credentials: true }));
app.use(express.json({  extended: false}));
app.use('/api/books',books);
const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));