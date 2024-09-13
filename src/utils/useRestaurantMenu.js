import { useState,useEffect } from "react";

const useRestaurantMenu= ()=>{
    const [resInfo,setResInfo]= useState();

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
    return resInfo;
}
 
export default useRestaurantMenu;