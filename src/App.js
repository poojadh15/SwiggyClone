import React, {UserContext, lazy, Suspense, useState, useEffect} from "react";
import ReactDOM from "react-dom/client";
import { Header } from "./components/Header"
import Body from "./components/Body";
import { RouterProvider, createBrowserRouter, Outlet } from "react-router-dom";
import About from "./components/About"
import Error from "./components/error"
import RestaurantCOntent from "./components/RestautrantContent";
//import Grocery from "./components/Grocery";
import UserContext from "./components/UserContext";
import { Provider } from 'react-redux';
import appStore from "./utils/appstore";
import CartPage from "./components/CartPage";


//not using key(not acceptable) <<<<< use index as a key <<<<<< use unique ID as a key 
const Grocery = lazy(()=>import("./components/Grocery"))
const AppLayout = () => {
    const [userName, setuserName] = useState("");
    useEffect(()=> {
        //API call
       // let userName = "Pooja Dh";
        setuserName(userName)
    })
    return (
        <Provider store={appStore}>
        <UserContext.Provider value={{loggedInUser: userName, setuserName}}>
        <div className="app">
            
            <Header />
            
            <Outlet />
        </div>
        </UserContext.Provider>
        </Provider>
        
    )
}

const AppRouter = createBrowserRouter([
    {
        path: "/",
        element: <AppLayout/>,
        children: [
            {
                path: "/",
                element:  <Body />,
            },
            {
                path: "/about",
                element:  <About />,
            },
            {
                path: "/grocery",
                element:  <Suspense fallback={<>Loading.....</>}><Grocery /></Suspense>,
            },
            {
                path: "/restaurant/:resId",
                element: <RestaurantCOntent/>
            },
            {
                path: "/cart",
                element: <CartPage/>
            }
        ],
        errorElement: <Error />
    },
])

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={AppRouter} />);