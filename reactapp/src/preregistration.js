import './preregistration.css';
import { Link } from 'react-router-dom';

function Preregister() {
  return (
    <div className="bg1">

    <div className='prepage'>
      <div>
        <h1 id="register_prepage">Are you a . . .</h1>
      </div>
      <div className='prepage_btnbox'>
        <Link className="opo"to="/studentregister"><button id='student_regbtn'>Student</button></Link> 
        <Link className='opo' to="/tutorregister"><button id='tutor_regbtn'>Tutor</button></Link>
      </div>
    </div>
     </div>
  );
}

export default Preregister