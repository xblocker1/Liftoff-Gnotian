import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const LoginPage = ({ onLogin }) => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      // Perform login validation here if needed
  
      if (username === 'admin' && password === 'password') {
      navigate('/profile'); // Redirect to the profile page
      // call to backend

    } else {
      alert('Invalid username or password');
    }

      // Send login data to the server
      const response = await axios.post('/api/login', { username, password });

      // Assuming the server responds with a token or user data upon successful login
      const token = response.data.token; // or response.data.user

      onLogin(token);

      navigate('/profile');
    } catch (error) {
      // Handle login error, show an error message, etc.
      console.error('Login failed:', error);
    }
  };

  return (
    <div className="container">
      <h1>Login Page</h1>
      <form onSubmit={handleLogin}>
        <div className="form-group">
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            className="form-control"
            id="username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            className="form-control"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit" className="btn btn-primary">Login</button>
      </form>
    </div>
  );
};

export default LoginPage;
