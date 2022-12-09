import React, { useEffect, useState } from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Chat from './Pages/Chat';
import Login from './Pages/Login';
import Webdev from './Webdev';
import io from "socket.io-client";
const socket = io.connect("http://localhost:5000");

const App = ()=>{
      const [message, setMessage] = useState("");
      const [showmessage, setShowmessage] = useState("");
      const [room, setRoom] = useState();

      const sendMessage = ()=>{
        socket.emit('send_message',{message:message,room:room});
      }

      const joinRoom = ()=>{
       socket.emit('join_room',{room:room});
      }


      useEffect(() => {
       socket.on("recived_message",(data)=>{
            // alert(data.bkmessage);
            setShowmessage(data.bkmessage);
       });
      }, [socket]);
      
      return(
//       <BrowserRouter>
//       <Routes>
//       <Route path="/" exact element={<Webdev/>}></Route>
//       {/* <Route path="/" exact element={<Login/>}></Route> */}
//             {/* <Route path="/chat" element={<Chat/>}></Route> */}
//       </Routes>
// </BrowserRouter>
<div style={{marginLeft: '10rem',marginTop: '10rem'}}>
<input type="text" placeholder='Enter Room Number....' onChange={(e)=>{setRoom(e.target.value)}} />
      <button onClick={joinRoom}>Join Room</button>
      <br /> <br />

      <input type="text" placeholder='send a message' onChange={(e)=>{setMessage(e.target.value)}}/>
      <button onClick={sendMessage}>send message</button>
      <h2>MESSAGE:</h2>
      <p>{showmessage}</p>
</div>
      )
};

export default App;
