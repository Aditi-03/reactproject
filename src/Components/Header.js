import { useState,useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";
import {useSelector} from "react-redux"


const Header= ()=>{
const [content, setContent] = useState("Login");
const onlineStatus= useOnlineStatus();
const { loggedInUser}= useContext(userContext);

const cartItems= useSelector((store)=> store.cart.items);

   return (

<div className="header">
<div className="logoContainer">
<img src="https://www.shutterstock.com/image-vector/vector-food-delivery-icons-logo-260nw-552182422.jpg" alt="logo"/>
</div>
       <div className="navItems">
   
    <div className={onlineStatus === true ? "online" : "offline"}>  </div>

    <ul className="list">
          
          <li className="login_btn"><Link to="/grocery">Grocery</Link></li>
          <li className="login_btn"><Link to="/">Home</Link></li>
          <li className="login_btn"><Link to="/about">About Us</Link></li>
          <li className="login_btn">Contact Us</li>
          <li className="login_btn">Cart- {cartItems.length}</li>
          <li className="login_btn font-bold">{loggedInUser}</li>
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