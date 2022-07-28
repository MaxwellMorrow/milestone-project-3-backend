// dependencies
const express = require('express');
const cors = require('cors');
const app = express();

// configuration
require('dotenv').config();
const PORT = process.env.PORT;

// const path = require('path');
const bodyParser = require("body-parser");
const defineCurrentUser = require("./middleware/defineCurrentUser")


// middleware
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
// app.use(express.static(path.resolve(__dirname, "../frontend/build"))); 
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(defineCurrentUser)



// root route
app.get('/', (req, res) => {
    res.send('Welcome to the Kula Lodge App! YOOOOO!!!')
});

// Auth routes
app.use('/users', require('./controllers/users'))
app.use('/authentication', require('./controllers/authentication'))



// server listen
app.listen(PORT, () => {
    console.log('We up in here on port ', PORT)
});

