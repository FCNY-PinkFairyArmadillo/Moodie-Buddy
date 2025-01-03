import React from 'react';
import Login from './login';
import SignUp from './signup';
import Journal from './journal';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
const App = () => {
  return (
    <Router>
      <div className='app-container'>
        <header>
          <h1>Welcome to Moodie Buddy</h1>
        </header>
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/journal' element={< Journal/>} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
