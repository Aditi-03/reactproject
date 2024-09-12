
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";

const RestaurantMenu=()=>{

const [resInfo,setResInfo] =useState(null);



useEffect(() => {
fetchMenu();
}, []);

const fetchMenu= async ()=>{
    // const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.24870&lng=77.40660&restaurantId="+Id+"&catalog_qa=undefined&submitAction=ENTER");
    const data= await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.24870&lng=77.40660&restaurantId=655&catalog_qa=undefined&submitAction=ENTER");

    const json= await data.json();
    console.log(json);
    setResInfo(json.data);
    
};


const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info|| "";

const { itemCards } = resInfo?.cards[4].groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card|| "";
console.log(itemCards,'items');


    return resInfo===null?(<Shimmer/>): (
        <div>
            <h1>{name}</h1>
            <h3>{cuisines}</h3>
            <h3>{costForTwoMessage}</h3>
           
                 {itemCards?.map((item)=>(<ul>
                    <li>{item?.card.info?.name}</li>
                    <li>{"Rs "+item?.card.info?.price/100}</li>
                <li>{item?.card.info?.ratings?.aggregatedRating?.rating}</li>
                <li>{item?.card.info?.description}</li></ul>
                    
                 ))
                    }
          
        </div>
    )
};

export default RestaurantMenu;