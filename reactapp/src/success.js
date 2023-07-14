import "./success.css";
import { Link } from "react-router-dom";
function Success()
{
    return (
        <div>
            <div className="succ">
                <h1>Payment Successful !!!</h1>
            </div>
            <div className="port">
            <Link to="/dashboard"><button id="hum" type="submit">Go to Dashboard</button></Link>   
            </div>
        </div>
    );
}
export default Success