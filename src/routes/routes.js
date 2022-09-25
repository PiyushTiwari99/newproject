const express = require('express');
const { appendFile } = require('fs');
const { register } = require('../controller/userController');
const route = express.Router()
//const userRepo = require('../controller/userRepo');


route.get('/register', register)

module.exports = route;