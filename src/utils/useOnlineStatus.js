import { useState,useEffect} from "react";

const useOnlineStatus= ()=>{
    const [onlineStatus,setOnlineStatus]= useState(true);

    useEffect(() => {
        window.addEventListener("offline", () => {
            console.log("You are not connected to the network.");
            setOnlineStatus(false);
          });

          window.addEventListener("online", () => {
            console.log("You are connected to the network.");
            setOnlineStatus(true);
          });
    }, [])
    
    return onlineStatus;
}

export default useOnlineStatus;