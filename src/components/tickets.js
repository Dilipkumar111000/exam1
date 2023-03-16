import React from "react";
import "../components/styles/ticket.css"

const Ticket = ()=>{
    return(
        <div>
           <div className="header">
            <div className="it">
                <p>Products</p>
                <p>Pricing</p>
                <p>Feauters</p>
                <p>About Us</p>
                <p>Login</p>
                <button className="btn">Get Started for free</button>
                    </div>
           </div>
           <div className="ticket">
             <h1>Ready to get Started</h1>
             <p>Choose a plan tailored to news</p>
           </div>
           <div className="card-cont">
           <div className="card">
              <h1>lite</h1>
              <p>perfect to start</p>
              <h1>$11</h1>
              <button className="btnt">Try for 7days free</button>
              <h4>Life includes</h4>
              <p>Cms integration</p>
              <p>Email & Sms remainders</p>
              <p>Customer support</p>
           </div>
           <div className="card">
              <h1>lite</h1>
              <p>perfect to start</p>
              <h1>$11</h1>
              <button className="btnt">Try for 7days free</button>
              <h4>Life includes</h4>
              <p>Cms integration</p>
              <p>Email & Sms remainders</p>
              <p>Customer support</p>
           </div>
           <div className="card">
              <h1>lite</h1>
              <p>perfect to start</p>
              <h1>$11</h1>
              <button className="btnt">Try for 7days free</button>
              <h4>Life includes</h4>
              <p>Cms integration</p>
              <p>Email & Sms remainders</p>
              <p>Customer support</p>
           </div>
           </div>
         
           
        </div>
    )
}
export default Ticket;