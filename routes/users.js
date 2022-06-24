const express = require('express');
const api = express.Router();
//require controller
const getUser = require('../controllers/users.js');

//endpoint to get user
api.get('/users', getUser);


module.exports = api;



  