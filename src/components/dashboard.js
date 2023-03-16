import React from "react";
import "../components/styles/dashboard.scss";
import { useNavigate } from "react-router-dom";

const Dashboard = ()=>{
    const navigate = useNavigate();
    return(
        <div className="mi">
            <div className="login">
                    <h3>LOGIN</h3>
                    <input type='text' placeholder="UserName"/>
                    <input type='password' placeholder="password" />
                     <button className="btn" onClick={()=> navigate('/tickets')}>submit</button>
                    <p>have you created a account? Register </p>
                </div>
        </div>
    )
}
export default Dashboard;