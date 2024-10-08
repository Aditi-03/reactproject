import {Suspense, lazy,suspense, useState} from "react";
import ReactDOM from "react-dom";
import { createBrowserRouter,RouterProvider,Outlet } from "react-router-dom";

import Header from "./Components/Header";
import Body from "./Components/Body";
import About from "./Components/About";
import Error from "./Components/Error";
import RestaurantMenu from "./Components/RestaurantMenu";
import userContext from "./utils/userContext";
// import Grocery from "./Components/Grocery";
import { Provider } from 'react-redux'

const Grocery= lazy(()=> import("./Components/Grocery"));

const AppLayout= ()=>{

    const [userName,setUserName]= useState("A");
    return (
        <Provider>
        <userContext.Provider value={{loggedInUser: userName}}>
            <div className="app">
            <Header/>
            <Outlet/>
            
            </div>

        </userContext.Provider>
        </Provider>
       
    )
}
const appRouter=createBrowserRouter([
    {   path: "/",
        element: <AppLayout/>,
        children:[{
            path: "/",
            element:<Body/>
    
        },{
            path: "/about",
            element:<About/>
    
        },{
            path: "/restaurant/:Id",
            element:<RestaurantMenu/>
    
        },{
            path: "/grocery",
            element:<Suspense fallback={<h1>Loading..
            </h1>}><Grocery/></Suspense>
    
        }
    ],
        errorElement:< Error/>
    },
    
])

const root= ReactDOM.createRoot(document.getElementById("root"));

root.render(<RouterProvider router={appRouter}/>);