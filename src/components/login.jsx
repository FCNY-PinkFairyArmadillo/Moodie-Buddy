import React, { useState } from 'react';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');
  const [successMessage, setSuccessMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Make a POST request to your backend login API
      const response = await fetch('/api/users/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password }),
      });

      const data = await response.json();

      if (response.ok) {
        setSuccessMessage('Login successful!');
        setErrorMessage('');
        console.log('User data:', data);
      } else {
        setErrorMessage(data.message || 'Login failed');
        setSuccessMessage('');
      }
    } catch (error) {
      setErrorMessage('An error occurred while logging in.');
      setSuccessMessage('');
      console.error('Login error:', error);
    }
  };

  return
};

export default LoginPage;
