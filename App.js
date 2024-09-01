import React from "react";
import ReactDOM from "react-dom";


const resList = [
    {
        "resName": "KFC",
        "cuisine": "Fast Food",
        "rating": 4.2,
        "eta": "15 mins",
        "image": "https://b.zmtcdn.com/data/pictures/chains/5/90195/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        "resName": "Pizza Hut",
        "cuisine": "Italian",
        "rating": 4.0,
        "eta": "20 mins",
        "image": "https://b.zmtcdn.com/data/pictures/chains/5/90195/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        "resName": "Sushi Express",
        "cuisine": "Japanese",
        "rating": 4.5,
        "eta": "25 mins",
        "image": "https://b.zmtcdn.com/data/pictures/chains/5/90195/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        "resName": "Burger King",
        "cuisine": "Fast Food",
        "rating": 3.9,
        "eta": "10 mins",
        "image": "https://b.zmtcdn.com/data/pictures/chains/5/90195/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|960:500&crop=960:500;*,*"
    },
    {
        "resName": "Taco Bell",
        "cuisine": "Mexican",
        "rating": 4.1,
        "eta": "18 mins", 
        "image": "https://b.zmtcdn.com/data/pictures/chains/5/90195/93776f3249312397e2c2ba274b4812ec.jpg?fit=around|960:500&crop=960:500;*,*"
    }
];



const Header= ()=>{
 return (
    <div className="header">
    <div className="logoContainer">
   <img src="https://www.shutterstock.com/image-vector/vector-food-delivery-icons-logo-260nw-552182422.jpg" alt="logo"/>
    </div>
    <div className="navItems">
        <ul>Home</ul>
        <ul>About Us</ul>
        <ul>Contact Us</ul>
        <ul>Cart</ul>
    </div>
     </div>
 );
};

const RestrauntCard=(props)=>{
    const {resData}= props;
    const {resName,cuisine,rating,eta}=resData;
return (
    <div className="resCard">
       
        <img className="resLogo" src="https://images.app.goo.gl/zVbrLJ2Mp3mcZror9" alt="logo"/>
        <h3> {resName}</h3>
        <h4> {cuisine}</h4>
        <h4> {rating}</h4>
        <h4> {eta}</h4>
    </div>
);
};


const Body= ()=>{
return (
    <div>
        <div className="search"> Search</div>
        <div className="restaurantContainer">
            {
                resList.map((restaurant)=>(<RestrauntCard resData={restaurant}/>))
            }

        </div>
    </div>
);
};

const AppLayout= ()=>{
    return (
        <div className="app">
            <Header/>
            <Body/>
        </div>
    )
}



    



const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<AppLayout />);