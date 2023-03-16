
import { useNavigate } from "react-router-dom";
import "../components/styles/login.scss";



function Login(){
    const Navigate = useNavigate();
    return(
        <div className="main">
                <div className="container">
                    <h2>Registration</h2>
                   <input type='text' placeholder="Enter username" />
                   <input type='email' placeholder="Enter user Email" />
                   <input type='password' placeholder="Please enter password" />
                   <button className="sub" onClick={()=> Navigate("/dashboard")} >Register Now</button>
                </div>

           </div>
    )
}
export default Login;