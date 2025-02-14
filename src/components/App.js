import React from 'react';
import Login from './login';
import SignUp from './signup';
import Journal from './journal';
import Dashboard from './dashboard';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <header>
          <h1>Welcome to Moodie Buddy</h1>
        </header>
   
        <Routes>
          <Route path='/' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/journal' element={< Journal/>} />
          <Route path='/dashboard' element={< Dashboard />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
