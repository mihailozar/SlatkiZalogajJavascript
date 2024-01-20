// Login.js
import React, { useState } from 'react';
import "../App.js"
import { useNavigate } from 'react-router-dom';
import { authenticateUser } from './AuthService.js';



const Login = ({ handleLogin }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = authenticateUser(username, password);

    if (user) {
      handleLogin(user);
      navigate('/pocetna');
    } else {
      alert('Invalid credentials');
    }
  };

  return (
    <div className="login-container">

      <h2>Prijavi se</h2>
      <form onSubmit={handleSubmit}>
        <input className="input-field"
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input className="input-field"
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button className="submit-btn" type="submit">Prijavi se</button>
      </form>
    </div>
  );
};

export default Login;
