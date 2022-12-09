import React,{useState} from 'react';
import './Login.css';
import {Link} from 'react-router-dom';
const Login = () => {
  const [user,setuser]=useState("");
  const [room,setroom]=useState("");

const setDetails1 =(event)=>{
  setuser(event.target.value);
}
const setDetails2 =(event)=>{
  setroom(event.target.value);
}

  return (
    <div className="joinOuterContainer">
      <div className="joinInnerContainer">
        <h1 className="heading">Login</h1>
        <div> <input placeholder="Name" type="text" className="joinInput" onChange={setDetails1}/> </div>
        <div> <input placeholder="Room" type="text" className="joinInput mt-20" onChange={setDetails2}/> </div>
        <Link onClick={e=>(!user || !room)?e.preventDefault():null} to={`/chat?name=${user}&room=${room}`}>
          <button className="button mt-20" type="submit">Login</button>
        </Link>
      </div>
    </div>
  )
}

export default Login;