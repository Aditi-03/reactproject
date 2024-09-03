import RestrauntCard from "./RestrauntCard";
import { useState } from "react";
import resList from "../constants/mockData";

const Body= ()=>{
   const [list, setlist] = useState(resList);
    return (
        <div>
            <div className="filter"> 
            <button className="filter_btn" onClick={()=>{
                const list1= list.filter((res)=>res.rating>4);
                setlist(list1);
                
            }}>
                Top Rated Restaurant</button>
            </div>
            <div className="restaurantContainer">
                {
                    list.map((restaurant)=>(
                    <RestrauntCard key={restaurant.Id}  resData={restaurant}/>))
                }
    
            </div>
        </div>
    );
    };
    export default Body;