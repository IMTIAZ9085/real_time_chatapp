import React,{useState,useEffect} from 'react';

//help to get data feom the query string
import queryString from 'query-string';

import io from 'socket.io-client';
let socket;

const Chat = ({history}) => {
  const [user,setuser]=useState("");
  const [room,setroom]=useState("");
  const ENDPOINT = 'localhost:5000';

  useEffect(() =>{
    const {name,room} = queryString.parse(history);

    socket = io(ENDPOINT);
    setuser(name);
    setroom(room);
    console.log(name);
    // console.log(socket);

  },[ENDPOINT,history]);

  return (
    <div>
       
    </div>
  )
}

export default Chat;