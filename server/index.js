const express = require('express');
const app = express();
const socketio = require('socket.io');
const http = require('http');

const server = http.createServer(app);
const io = socketio(server);

const PORT  = process.env.PORT || 5000;

server.listen(PORT,()=>{
      console.log(`server is running on port ${PORT}`);
})