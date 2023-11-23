// Login.js
import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { GoogleLogin } from '@react-oauth/google';
import './login.css'; // Add this line to import the CSS file

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const history = useNavigate();

  const handleLogin = () => {
    // Validation
    if (!email || !password) {
      setError('Email and password are required.');
      return;
    }

    // Check for existing email and correct password (fake check, replace with backend check)
    const user = JSON.parse(localStorage.getItem(email));
    if (user && user.password === password) {
      history('/home');
    } else {
      setError('Invalid email or password. Please try again.');
    }
  };

  const handleGoogleLoginSuccess = (googleResponse) => {
    // Handle Google login success, you can use the information in googleResponse
    console.log('Google login successful:', googleResponse);
    history('/home');
  };

  const handleGoogleLoginError = (error) => {
    console.error('Google login failed:', error);
    // Handle Google login error if needed
  };

  return (
    <div className="login-container">
       <div className="signup-link">
        Don't have an account? <Link to="/register">Create one</Link>
      </div>
      <h2>Login</h2>
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
      <button onClick={handleLogin}>Login</button>&nbsp;&nbsp;

      <a href="/register" className="microsoft-signin">
        Sign in with Microsoft
      </a>

      {/* Add a button to trigger Google login */}
      <GoogleLogin onSuccess={handleGoogleLoginSuccess} onError={handleGoogleLoginError}>
        <button className="google-login">Login with Google</button>
      </GoogleLogin>

      <p className="error-message">{error}</p>

     
    </div>
  );
};

export default Login;
