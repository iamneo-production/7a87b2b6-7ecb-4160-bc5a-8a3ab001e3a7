import React, { useState } from 'react';
import './student.css';
import { Link } from 'react-router-dom';

function TutorRegister() {
  const [firstname, setFirstname] = useState('');
  const [lastname, setLastname] = useState('');
  const [email, setEmail] = useState('');
  const [age, setAge] = useState('');
  const [qualification, setQualification] = useState('');
  const [interestedin, setSubject] = useState('');
  const [password, setPassword] = useState('');
  const[confirmpassword,setConfirmPassword]=useState('');

  const handleFirstnameChange = (event) => {
    setFirstname(event.target.value);
  };
  const handleLastnameChange = (event) => {
    setLastname(event.target.value);
  };
  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };
  const handleAgeChange = (event) => {
    setAge(event.target.value);
  };
  const handleQualificationChange = (event) => {
    setQualification(event.target.value);
  };
  const handleSubjectChange = (event) => {
    setSubject(event.target.value);
  };
  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };
  const handleConfirmpasswordChange=(event) => {
    setConfirmPassword(event.target.value);
  }
  const handleSubmit = (event) => {
    event.preventDefault();
    // Add your login logic here
    console.log('Firstname:', firstname);
    console.log('Password:', password);
  };

  return (
    <div className='bg3'>
      <h1 id='text'>Online Tutoring App</h1>    

    <div className="register-container">

      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Tutor Registeration</h2>
        <div className='form1'>
            
        
        <div className="form-groups">
          <label id="text3" htmlFor="firstname">First Name</label>
          <input className='text1'
            type="text"
            id="firstname"
            value={firstname}
            onChange={handleFirstnameChange}
            />
        </div>

        <div className="form-groups">
          <label id="text3"htmlFor="lastname">Last name</label>
          <input className='text1'
            type="text"
            id="lastname"
            value={lastname}
            onChange={handleLastnameChange}
            />
        </div>

        <div className="form-groups">
          <label id="text3"htmlFor="email">E-Mail</label>
          <input className='text1'
            type="text"
            id="email"
            value={email}
            onChange={handleEmailChange}
            />
        </div>
        <div className="form-groups">
          <label id="text3"htmlFor="age">Age</label>
          <input className='text1'
            type="text"
            id="age"
            value={age}
            onChange={handleAgeChange}
            />
        </div>
        </div>
            
        <div className='form2'>

        <div className="form-groups">
          <label id="text3"htmlFor="qualification">Qualification</label>
          <select className='text2'>
          <option value="sel">--select--</option>
          <option value="ug">Under-Graduate</option>
          <option value="pg">Post-Graduate</option>
          <option value="phd">Phd</option>
          </select>
          {/* <input className='text1'
            type="text"
            id="qualification"
            value={qualification}
            onChange={handleQualificationChange}
            /> */}
        </div>

        <div className="form-groups">
          <label id="text3"htmlFor="subject">Subject</label>
          <select className='text2'>
          <option value="sel">--select--</option>
          <option value="c">C</option>
          <option value="c++">C++</option>
          <option value="dsa">Data Structures</option>
          <option value="algo">Algorithms</option>
          <option value="python">Python</option>
          <option value="sql">SQL</option>
          </select>
          {/* <input className='text1'
            type="text"
            id="subject"
            value={interestedin}
            onChange={handleSubjectChange}
            /> */}
        </div>

        <div className="form-groups">
          <label id="text3"htmlFor="password">Password</label>
          <input className='text1'
            type="password"
            id="password"
            value={password}
            onChange={handlePasswordChange}
            />
        </div>
        <div className="form-groups">
          <label id="text3"htmlFor="password">Confirm Password</label>
          <input className='text1'
            type="password"
            id="fonfirmpassword"
            value={confirmpassword}
            onChange={handleConfirmpasswordChange}
            />
        </div>
        </div>
        <Link className='opo' to="/app"><button id='qwerty' type="submit">Already Registered? Sign In</button></Link>
        <br/>
        <br/>
        <Link className='opo' to='/app'><button id='btns' type="submit">Register</button></Link>
      </form>
     </div>
     </div>

  );
};

export default TutorRegister