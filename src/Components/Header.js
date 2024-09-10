import { useState } from "react";
import { Link } from "react-router-dom";
const Header= ()=>{
const [content, setContent] = useState("Login");
    return (

<div className="header">
<div className="logoContainer">
      <img src="https://www.shutterstock.com/image-vector/vector-food-delivery-icons-logo-260nw-552182422.jpg" alt="logo"/>
       </div>
       <div className="navItems">
       <ul className="list">
          
          <li className="login_btn"><Link to="/">Home</Link></li>
          <li className="login_btn"><Link to="/about">About Us</Link></li>
          <li className="login_btn">Contact Us</li>
          <li className="login_btn">Cart</li>
        </ul>
        <button 
        className="login_btn" 
        onClick={() => setContent(content === "Login" ? "Logout" : "Login")}
        >
          {content}
        </button>
    
        </div>
        </div>
    );
   };
   
    export default Header;