/* 
Jocelyn R. 
12/18/24 - Sign up page created.  
12/18/24 - Imported signup page to the App.js file 
12/18/24 - Create Routes in the App.js file for the sign up page 

Technical Challenges: N/A
*/

import { useState } from 'react';

//Create a function for the sign up page
function SignUp() {
  // react - set email
  const [email, setEmail] = useState('');
  // react - set password
  const [password, setPassword] = useState('');
  // react - set password again for retyping
  const [retypePassword, setRetypePassword] = useState('');

  //create an async function
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Email:', email);
    console.log('Password:', password);
    console.log('Retype Password', retypePassword);
  };

  //return statement for the login page
  return (
    <div style={{ maxWidth: '400px', margin: 'auto' }}>
      <h2>Sign Up Page </h2>

      {/* email area created */}
      <form onSubmit={handleSubmit}>
        <div style={{ marginBottem: '1rem' }}>
          <label htmlFor='email'> Email </label>
          <input
            type='email'
            id='email'
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </div>

        {/* password area created*/}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='password'>Password</label>
          <input
            type='password'
            id='password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </div>

        {/* retype password area created */}
        <div style={{ marginBottom: '1rem' }}>
          <label htmlFor='RetypePassword'>Password</label>
          <input
            type='RetypePassword'
            id='Retype Password'
            value={retypePassword}
            onChange={(e) => setRetypePassword(e.target.value)}
            required
            style={{ marginLeft: '0.5rem' }}
          />
        </div>

        {/*  submit button created */}
        <button type='submit'>Submit</button>
      </form>
    </div>
  );
}

export default SignUp;
