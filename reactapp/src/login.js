import React, { useState } from 'react';
// import './login.css';
// import login_image from './login_image.jpg';
// import background from './background.jpg';

function Login() {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleUsernameChange = (event) => {
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Username:', username);
    console.log('Password:', password);
  };

  return (
    <div >
      <h1 className="text-shadow">Online Tutoring App</h1>

    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          <input
            type="text"
            id="username"
            value={username}
            onChange={handleUsernameChange}
            />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <br/>
        <br/>
        <div className="btn">
        <button type="submit">Login</button>
        </div>
      </form>
     </div>
     </div>
  );
};

export default Login
