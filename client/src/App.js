import React from 'react';
import { BrowserRouter,Routes,Route} from 'react-router-dom';
import Chat from './Pages/Chat';
import Login from './Pages/Login';

const App = ()=>{
      return(
      <BrowserRouter>
      <Routes>
            <Route path="/" exact element={<Login/>}></Route>
            <Route path="/chat" element={<Chat/>}></Route>
      </Routes>
</BrowserRouter>
      )
};

export default App;
