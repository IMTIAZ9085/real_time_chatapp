// const express = require('express');
// const app = express();
// const http = require('http').Server(app);

// const socketio = require('socket.io');
// const io = require('socket.io')(http);

// const server = http.createServer(app);
// const io = socketio(server);

// const PORT  = process.env.PORT || 5000;

// const router = require('./router');

// //when a user enter into the socket server or join chat 
// io.on('connection',(socket)=>{
//       console.log("NEW USER/SOCKET ENTER INTO THE CHAT ROOM");

//       //this socket is for the particular socket connection that just got connected
//       socket.on('disconnect',()=>{
//             console.log("user just disconnect from the chat");
//       })
// })

// app.use(router);


//create a new connection


// app.listen(PORT,()=>{
//       console.log(`server is running on port ${PORT}`);
// })


////////////////socket io pedrotech/////////////////
const express = require('express');
const app = express();
const http = require('http');
const {
      Server
} = require('socket.io');
const cors = require('cors');

const server = http.createServer(app);

const io = new Server(server, {
      cors: {
            origin: "http://localhost:3000",
            methods: ["GET", "POST"],
      }
});


io.on('connection',(socket) => {
      console.log(`user got connected: ${socket.id}`);

      socket.on('join_room',(data) => {
        socket.join(data.room);
      })

      socket.on('send_message',(data)=>{
            console.log(data.message);
            // socket.broadcast.emit('recived_message',{bkmessage:`from backend ${data.message}`});
            socket.to(data.room).emit("recived_message",{bkmessage:data.message});

      })

      socket.on('disconnect',()=>{
            console.log('a user got disconnected');
      })
})

server.listen(5000, () => {
      console.log("listening on port 5000...........");
})