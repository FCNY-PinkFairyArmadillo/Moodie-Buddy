// import React, { useState } from 'react';

// const LoginPage = () => {
//   const [email, setEmail] = useState('');
//   const [password, setPassword] = useState('');

//   //Event handler
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     console.log('Email:', email);
//     console.log('Password:', password);
//   };

//   return (
//     <div style={{ maxWidth: '400px', margin: 'auto' }}>
//       <h2>Login</h2>
//       {/* email, password, click button */}
//       <form onSubmit={handleSubmit}>
//         <div style={{ marginBottem: '1rem' }}>
//           <label htmlFor='email'>Email</label>
//           <input
//             type='email'
//             id='email'
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//             style={{ marginLeft: '0.5rem' }}
//           />
//         </div>

//         <div style={{ marginBottom: '1rem' }}>
//           <label htmlFor='password'>Password</label>
//           <input
//             type='password'
//             id='password'
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//             style={{ marginLeft: '0.5rem' }}
//           />
//         </div>
//         <button type='submit'>Submit</button>
//       </form>
//     </div>
//   );
// };

// export default LoginPage;






import React, { useState } from 'react';

function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        const response = await fetch('/api/users/login', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ username, password }),
        });

        const data = await response.json();
        console.log(data);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Login</h2>
            <label>
                Username:
                <input
                    type="text"
                    value={username}
                    onChange={(e) => setUsername(e.target.value)}
                />
            </label>
            <br />
            <label>
                Password:
                <input
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                />
            </label>
            <br />
            <button type="submit">Login</button>
        </form>
    );
}

export default Login;
