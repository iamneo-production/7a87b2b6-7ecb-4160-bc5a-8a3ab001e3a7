import { Link } from "react-router-dom";
import {useState} from 'react';
// import "./sidebar.css";
// import "./dashboard.css";
import "./c-course.css";
import Sidebar from "./sidebar";
function Ccourse1()
{
  const [isHovering, setIsHovering] = useState(false);

  const handleMouseOver = () => {
    setIsHovering(true);
  };

  const handleMouseOut = () => {
    setIsHovering(false);
  };
    return(
          <div> 
            
       
             <div>
             <nav className="nav">
              {/* <img id="logo5"src={require("./photo.jpeg")} alt="logo"/>  */}
            <h1 id="title">Virtual Learn</h1>
        <div className="nav-menu">
         <ul>
           <li>
             <div class="dropdown">
                <button >Profile</button>
                <div class="dropdown-content">
                  <a><Link className='opo' to="/homepage">Home</Link></a>
                  <a><Link className='opo' to="/profile">My Profile</Link></a>
                  {/* <a ><Link className='opo' to="/edit">Edit Profile</Link></a> */}
                  <a><Link className='opo' to="/app">Sign Out</Link></a>
                </div>
            </div>
           </li> 
           <li>
             <button ><Link className='opo' to="/homepage">Home</Link></button>
           </li>
         </ul>
       </div> 
     </nav>
     </div>  

      <div className="App">
     <Sidebar  />
     </div> 
     <div className="content-container">
                  <button id="p"><img id="g1"src={require("./tutor2.jpeg")}alt="tutor"/></button> 
                  <h1 id="content">Tutor Name: Mr.Stark</h1>
                  <h1 id="content">Course Name: C</h1>
                  <h1 id="content">Rating: 4.2/5</h1>
                  <h1 id="content">Fees: $36</h1> 
                  <Link to="/payment"><button id="enroll" type="">Enroll</button></Link>  
                  
      </div>
      <div>
        <h1 id="modules">Modules</h1>
        <h2 id="modules">1.Mapping in C</h2>
        <h2 id="modules">2.Oops in C</h2>
        <h2 id="modules">3.Data Structures in C</h2>
      </div>
     
        </div>
    );
}
export default Ccourse1