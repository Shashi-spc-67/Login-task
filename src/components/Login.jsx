

import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import "../css/Login.css";
import Logout from './Logout'; // Import the Logout component

const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsLoggedIn(true);
    }
  }, []);

 
  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/api/users/login', { email, password });
      localStorage.setItem('token', response.data.token);
      alert('Login successful');
      setIsLoggedIn(true);
      navigate('/users'); // Redirect to User Management page after successful login
    } catch (err) {
      alert('Error logging in');
    }
  };

  return (
    <div className="login-container">
      <h1>Login</h1>
      {isLoggedIn ? (
        <Logout /> // Show Logout button if the user is logged in
      ) : (
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Email"
              required
            />
          </div>
          <div className="form-group">
            <label>Password</label>
            <input
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              placeholder="Password"
              required
            />
          </div>
          <button type="submit">Login</button>
          {/* <button onClick={handleLogout}>Logout</button> */}
        </form>
      )}
    </div>
  );
};

export default Login;

