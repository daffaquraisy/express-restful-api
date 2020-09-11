const express = require('express');
const app = express();
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
require('dotenv/config');
const cors = require('cors');

// middleware
app.use(cors());
app.use(bodyParser.json());

// import routes
const postRoute = require('./routes/post');
app.use('/posts', postRoute);

// connect to db
mongoose.connect(process.env.DB_CONNECTION, {
    useUnifiedTopology: true,
    useNewUrlParser: true
}, () => {
    console.log('Connected to db');
});

// listening to server
app.listen(3000);