require('dotenv').config();

const path = require("path");
const express = require('express');
const mongoose = require('mongoose');

const app = express();

//create server
const server = require('http').Server(app);
const port = process.env.PORT || 3000;

//create socket server
const io = require('socket.io')(server);

//create/connect to DB
require('./models/models.js')();




//require routes
const register = require('./routes/register.js');
const signin = require('./routes/signin.js');
//const auth = require('./routes/auth.js');

//middleware
//needed if running from public?
app.use(express.json());
// Set static folder for frontend
//app.use(express.static(path.join(__dirname, "public")));
app.use(express.static("./public"));
//app.use(cors);

app.use('/api',register);
app.use('/api', signin);
//app.use(auth);




//invalid route handling
app.use((req, res, next)=>{
    res.status(404).send({message:"Bad request: Route Not Found"});
  });

//requiering and executing sockets
//require('./utils/sockets')(io);

server.listen(port, () => {
    console.log(`Socket.IO server running at http://localhost:${port}/`);
  });
