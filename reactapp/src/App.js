import React, { useState } from 'react';
import './App.css';
import { Link } from 'react-router-dom';
import { useDispatch } from 'react-redux';
import { login } from './redux/user';

const Login = () => {
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
  const [pname, setPname] = useState('');
  const dispatch = useDispatch();


  const handleChange = (e) => {
    setPname(e.target.value);
  }

  return (
    
      <div className="bg">
        <h1 id='text-shadow' >Online Tutoring Platform</h1>
    <div className="login-container">

      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Sign In</h2>
        <div className="form-group">
          <label htmlFor="username">Username</label>
          {/* <br/> */}
          <input className='text1'
            type="text"
            id="username"
            value={pname} onChange={handleChange} 
            />
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input className='text1'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <br/>
        <br/>
        <Link className='opo' to='/homepage'><button id="btn" type="submit" onClick={() => dispatch(login({ name: pname }))}>Login</button></Link>
      </form>
        <div/>
      </div>
      </div>
      // </div>
  
  );
};

export default Login
