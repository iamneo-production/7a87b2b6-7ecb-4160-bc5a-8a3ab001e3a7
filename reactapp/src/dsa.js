import { Link } from "react-router-dom";
import "./dsa.css";
import {useState} from 'react';
function Dsa()
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
             <nav className="navigation">
              <img id="logo5"src={require("./photo.png")} alt="logo"/>
            <h1 id="title">Virtual Learn</h1>
        <div className="navigation-menu">
         <ul>
            
           <li>
             <div class="dropdown">
                {/* <button class="dropbtn">Dropdown</button> */}
                <button >Profile</button>
                <div class="dropdown-content">
                  <a><Link className='opo' to="/profile">My Profile</Link></a>
                  {/* <a ><Link className='opo' to="/edit">Edit Profile</Link></a> */}
                  <a><Link className='opo' to="/dashboard">Dashboard</Link></a>
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
            <div className="gal-wrap">
            <div class="gal"> 
            <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <Link to="/dsa2"><button id="p"><img id="g1"src={require("./tutor2.jpeg")}alt="tutor"/></button><br/></Link>  
                  {isHovering && (
                    <div className="tutor-name" >
                      <h2>Mr.Stark</h2>
                      <h2>4.2 Out Of 5</h2>
                    </div>
                  )}
                  </div>
                  <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                    <Link to="/dsa1"><button id="p"><img id="g1"src={require("./tutor1.png")}alt="tutor"/></button></Link>
                  {isHovering && (
                    <div className="tutor-name" >
                      <h2>Mr.Hastings</h2>
                      <h2>4 Out Of 5</h2>
                    </div>
                  )}
                  </div>
                   <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                   <Link to='/dsa6'><button id="p"><img id="g1"src={require("./tutor6.jpeg")}alt="tutor"/></button></Link>
                    
                  {isHovering && (
                    <div className="tutor-name" >
                      <h2>Ms.Elena</h2>
                      <h2>4.9 Out Of 5</h2>
                    </div>
                  )} 
                  </div>
                
                {/* <div className="part2"> */}
                <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <Link to='/dsa5'><button id="p"><img id="g1"src={require("./tutor5.jpeg")}alt="tutor"/></button></Link>
                  {isHovering && (
                    <div className="tutor-name" >
                      <h2>Ms.Daphne</h2>
                      <h2>4.8 Out of 5</h2>
                    </div>
                  )}
                  </div>
                  <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <Link to='/dsa3'><button id="p"><img id="g1"src={require("./tutor3.png")}alt="tutor"/></button></Link>
                  
                  {isHovering && (
                    <div className="tutor-name" >
                      <h2>Mr.Morgan</h2>
                      <h2>4.4 Out Of 5</h2>
                    </div>
                  )}
                  </div>
                  <div onMouseOver={handleMouseOver} onMouseOut={handleMouseOut}>
                  <Link to='/dsa4'><button id="p"><img id="g1"src={require("./tutor4.jpg")}alt="tutor"/></button></Link>
                  {isHovering && (
                    <div className="tutor-name" >
                      <h2>Mr.Kiran</h2>
                      <h2>4.6 Out Of 5</h2>
                    </div>
                  )}
                  </div>
         
          </div>
        </div>
        </div>
    );
}
export default Dsa