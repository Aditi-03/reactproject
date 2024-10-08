import { useContext, useEffect, useState } from "react";

import RestrauntCard,{withpromotedLabel} from "./RestrauntCard";
// import DummyCard from "./DummyCard";
import resList from "../utils/constants/mockData";
import Shimmer from "./Shimmer";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/useOnlineStatus";
import userContext from "../utils/userContext";


const Body= ()=>{
   const [list, setlist] = useState(resList);
   const [dummyData,setdummyData] = useState([]);
   const [searchText, setSearchText] = useState("");
   const [filterRestraunt, setFilteredRestraunt] = useState(resList);

   const PromotedRestaurant = withpromotedLabel(RestrauntCard);
   const {loggedInUser}= useContext(userContext);
   console.log(loggedInUser,"Userjjn")

   useEffect(() => {
  
    fetchData();
   }, []);
   
   const fetchData= async ()=>{
    const data =await fetch(
        // "https://www.swiggy.com/dapi/restaurants/list/v5?lat=19.9615398&lng=79.2961468&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING"
        "https://proxy.cors.sh/https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=23.24870&lng=77.40660&restaurantId=77949&catalog_qa=undefined&submitAction=ENTER"
        );
        const json = await data.json();
        const information= json?.data?.cards[2]?.card?.card?.info;
        setdummyData({
            avgRating: information.avgRating,
            id: information.id
        });

   }

   const onlineStatus= useOnlineStatus();
   if(onlineStatus===false) return <h1> Looks like you are offline!!</h1>

  
   if (dummyData.length === 0) {
    return <Shimmer/>; 
  }
    return (
        <div>
             {/* <DummyCard  dummyData={dummyData}/> */}
            <div className="filter"> 
            <div className="search">
                <input type="text" className="search_box" value={searchText} onChange={(e)=> setSearchText(e.target.value)}/>
                <p>{loggedInUser}</p>
                <button onClick={()=> 
                {console.log(searchText)

                let filteredlist= resList;

               
                filteredlist= resList.filter((res)=> res.resName.toLowerCase().includes(searchText.toLowerCase()))
               
                setFilteredRestraunt(filteredlist);
                }
                }> Search</button>
                
            </div>
            <button className="filter_btn" onClick={()=>{
                const list1= list.filter((res)=>res.rating>4);
                setlist(list1);
                
            }}>
                Top Rated Restaurant</button>
            </div>
            <div className="restaurantContainer">
                {
                    filterRestraunt.map((restaurant)=>(
                        restaurant.promoted?<PromotedRestaurant  resData={restaurant}/>:
                    <RestrauntCard key={restaurant.Id}  resData={restaurant}/>))
                }
    
            </div>
           
        </div>
    );
    };
    export default Body;