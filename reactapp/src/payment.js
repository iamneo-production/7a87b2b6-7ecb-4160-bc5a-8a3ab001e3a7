import "./payment.css";

import { Link } from "react-router-dom";
function Payment()
{
    return(
        <div>
            <div>
             <nav className="nav">
              <img id="logo5"src={require("./photo.png")} alt="logo"/> 
            <h1 id="title">Virtual Learn</h1>
        <div className="nav-menu">
         <ul>
           <li>
             <div class="dropdown">
                <button >Profile</button>
                <div class="dropdown-content">
                  <a><Link className='opo' to="/homepage">Home</Link></a>
                  <a><Link className='opo' to="/profile">My Profile</Link></a>
                  <a ><Link className='opo' to="/edit">Edit Profile</Link></a>
                  <a><Link className='opo' to="/app">Sign Out</Link></a>
                </div>
            </div>
           </li> 
         </ul>
       </div> 
     </nav>
     </div>  
     <div>
      <div>
        
      <h1 id="card1">Card Details</h1>
      </div>
      
    <div className="payment">
      <div >
      <label id="tag">Card Number:</label><br/>
      <input  className='text1' type="text" id="card"/> <br/> 
      </div>
      <br/>
      <div>
      <label id="tag">Expiry Date:</label><br/>
      <input  className='text1' type="text" id="card"/><br/>
      </div>
      <br/>
      <div>
      <label id="tag">CVV:</label><br/>
      <input  className='text1' type="text" id="card"/><br/>
      </div>
      <br/>
      <div>
      <label id="tag">Name on Card:</label><br/>
      <input  className='text1' type="text" id="card"/><br/>
     </div>
     </div>
     <div>
      <Link to="/success"><button id="hu" type="submit">Pay</button></Link>
     </div> 
     </div>
        </div>
    );
}
export default Payment