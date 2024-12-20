/* 
Jocelyn R. 
12/18/24 - Sign up page created.  
12/18/24 - Imported signup page to the App.js file 
12/18/24 - Create Routes in the App.js file for the sign up page 

Technical Challenges: N/A
*/

import React, { useState } from 'react';

//Create a function for the sign up page
function SignUp() {
  // react - set email
  const [email, setEmail] = useState('');
  // react - set password
  const [password, setPassword] = useState('');


  //create an async function
  const handleSubmit = (e) => {
    let formData = {
      "email": email,
      "password": password
    }
    e.preventDefault();
      fetch('http://localhost:5001/api/users/signup', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        console.log(`data: ${data.message}`);
        if (data.message === "User already exists") {
          alert(`${data.message}`);
        } 
       
      })
      .catch((error) => {
        console.log(`error: ${error}`);
      })
  };

  //return statement for the login page
  return (
    <div style={{
      maxWidth: '400px',
      margin: '2rem auto',
      padding: '1.5rem',
      border: '1px solid #ccc',
      borderRadius: '8px',
      boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
      backgroundColor: '#f9f9f9'
    }}>
      <h2 style={{
        textAlign: 'center',
        marginBottom: '1.5rem',
        color: '#333',
        fontFamily: 'Arial, sans-serif'
      }}>Sign Up Page</h2>
  
      {/* email area created */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor='email' style={{
            display: 'inline-block',
            width: '80px',
            fontWeight: 'bold',
            color: '#555'
          }}>Email:</label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: 'calc(100% - 90px)', // adjusts for label width
              boxSizing: 'border-box'
            }}
          />
        </div>
  
        {/* password area created */}
        <div style={{ marginBottom: '1.5rem' }}>
          <label htmlFor='password' style={{
            display: 'inline-block',
            width: '80px',
            fontWeight: 'bold',
            color: '#555'
          }}>Password:</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{
              padding: '0.5rem',
              border: '1px solid #ccc',
              borderRadius: '4px',
              width: 'calc(100% - 90px)', // adjusts for label width
              boxSizing: 'border-box'
            }}
          />
        </div>
  
        <button type='submit' style={{
          display: 'block',
          width: '100%',
          padding: '0.75rem',
          backgroundColor: '#007bff',
          color: '#fff',
          border: 'none',
          borderRadius: '4px',
          fontWeight: 'bold',
          cursor: 'pointer',
          fontSize: '1rem',
          textAlign: 'center'
        }}>Submit</button>
      </form>
    </div>
  );
  
}

export default SignUp;
