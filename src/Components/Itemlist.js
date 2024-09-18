const Itemlist=(items)=>{
    // console.log(items,'itemcards');
    // console.log(items.items[0].card.info.name)
    return (<div>
    
        
        {items?.items?.map((item)=>{
            // console.log(item,'aditi')
            // console.log(item?.card?.info?.name),
            return (<div  key={item?.card?.info?.id} className="p-4 m-2 border-solid border-b-2">
                <div>
                    <span className="mr-2">{item?.card?.info?.name}</span>
                    <span>Rs.{item?.card?.info?.price/100}</span>
                </div>
                <div className="text-sm text-slate-500"> {item?.card?.info?.description}</div>
                </div>)
            
        })}
    
    </div>);
};
export default Itemlist;