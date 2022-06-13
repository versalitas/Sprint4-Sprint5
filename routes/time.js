const express = require('express');
const api = express.Router();

const getTime = require('../controllers/time.js');
const cors = require('cors');
const noCache = require('../middlewares/noCache.js');

//adding middleware








//endpoint to get time
api.post('/api',
    cors(),
    noCache,                         
    //checkAuth,
  getTime);





module.exports = api;