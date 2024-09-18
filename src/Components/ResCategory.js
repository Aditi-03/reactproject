import { useState } from "react";
import Itemlist from "./Itemlist";

const ResCategory= ( {data,showItems,setShowIndex})=>{

    return (<>
        <div className="w-6/12 mx-auto my-4 bg-slate-100 center  py-2 shadow-md ">
           <div className="flex justify-between cursor-pointer" onClick={setShowIndex}>
           <span className="font-bold px-2">{data.title} ({data.itemCards.length}) </span>
           <span className="font-bold px-2">↓</span>
           </div> 
           
        {showItems?(<div><Itemlist items={data.itemCards} /> </div>):null}
        </div>
    </>);
};
export default ResCategory;