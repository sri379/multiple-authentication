
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

import './register.css';

const Register = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useNavigate();

  const handleRegister = () => {
    // Validation
    if (!firstName || !lastName || !email || !password) {
      setError('All fields are required.');
      return;
    }

    // Check for duplicate email (fake check, replace with backend check)
    if (localStorage.getItem(email)) {
      setError('Email address already exists. Please use a different email.');
      return;
    }

    // Assuming successful registration, store user data in local storage
    localStorage.setItem(email, JSON.stringify({ firstName, lastName, email, password }));
    history('/home');
  };

 

  return (
    <div className="register-container">
      <h2>Signup</h2>
      <input
        type="text"
        placeholder="First Name"
        value={firstName}
        onChange={(e) => setFirstName(e.target.value)}
      />
      <input
        type="text"
        placeholder="Last Name"
        value={lastName}
        onChange={(e) => setLastName(e.target.value)}
      />
      <input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />

      

      <button onClick={handleRegister}>Register</button>
      <p className="error-message">{error}</p>
    </div>
  );
};

export default Register;
