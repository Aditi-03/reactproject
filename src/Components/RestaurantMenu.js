
import { useState,useEffect } from "react";
import Shimmer from "./Shimmer";
import useRestaurantMenu from "../utils/useRestaurantMenu"; 
import ResCategory from "./ResCategory";

const RestaurantMenu=()=>{
    
const[ showIndex,setShowIndex]=useState(0);

const resInfo= useRestaurantMenu();
if(resInfo===null) return <Shimmer/>
// console.log(resInfo,'res')


const {name,cuisines,costForTwoMessage}=resInfo?.cards[2]?.card?.card?.info|| "";

const { itemCards } = resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards[2].card.card|| "";

const categories= resInfo?.cards[4]?.groupedCard?.cardGroupMap?.REGULAR.cards.filter((c)=>c.card?.card?.["@type"]==="type.googleapis.com/swiggy.presentation.food.v2.ItemCategory")|| [];
// console.log(categories,'cat')


    return (
        <div className="text-center">
            <h1 className="font-bold my-6 text-2xl">{name}</h1>
            <h3 className="font-bold text-lg">{cuisines}</h3>
            <h3 className="font-bold text-lg">{costForTwoMessage}</h3>
            {categories.length>0?(categories?.map((category,index)=>
            <ResCategory
            key={category.card.card.title}
            data={category.card.card}
            showItems={index===showIndex?true:false}
            setShowIndex={()=>setShowIndex(index)}
            />)):
            
            (
                <p> no categories available</p>
            )}
        </div>
    )
};

export default RestaurantMenu;