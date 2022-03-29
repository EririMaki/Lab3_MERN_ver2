// app.js
require("dotenv").config({path: './config.env'});

const express = require('express');
const connectDB = require('./config/db');
const path = require("path");
var cors = require('cors');

const books = require('./routes/api/book');
const app = express();
//connect database
connectDB();

app.use(cors({ origin: true, credentials: true }));
app.use(express.json({  extended: false}));
app.use('/api/books',books);

if(process.env.Status === "production"){
    app.use(express.static(path.join(__dirname, "../mern/build")));
    app.get('*', (req,res) => {
        res.sendFile(path.join(__dirname,'mern','build','index.html'));
   });
}else{
   app.get('/', (req,res) => {
       res.send("API is working!");
   });
}

const port = process.env.PORT || 8082;

app.listen(port, () => console.log(`Server running on port ${port}`));