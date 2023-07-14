import { Link } from "react-router-dom";
import {useState} from 'react';
// import "./sidebar.css";
// import "./dashboard.css";
import "./c-course.css";
import Sidebar from "./sidebar";
function Sql4()
{return(
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
      <div>
     <div className="content-container">
        
                  <button id="p"><img id="g1"src={require("./tutor4.jpg")}alt="tutor"/></button><br/>  
                  <h1 id="content">Tutor Name: Mr.Kiran</h1>
                  <h1 id="content">Course Name: SQL</h1>
                  <h1 id="content">Rating: 4.6/5</h1>
                  <h1 id="content">Fees: $36</h1>   
                  <Link to="/payment"><button id="enroll" type="">Enroll</button></Link>
      </div>
      <div>
        <h1 id="modules">Modules</h1>
        <h2 id="modules">1.Basics</h2>
        <h2 id="modules">2.Cursors & Triggers</h2>
        {/* <h2 id="modules">3.</h2> */}
        {/* <h2 id="modules">4.Linked List</h2> */}
        {/* <h2 id="modules">5.Graph and Tree</h2> */}
      </div>
      </div>
     
        </div>
    );
}
export default Sql4