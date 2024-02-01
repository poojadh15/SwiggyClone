
import { LOGO } from "../utils/constants";
import { useEffect, useState, useContext, useDeferredValue } from "react";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "./UserContext";

export const Header = () => {
    const data = useContext(UserContext);
    console.log(data)
    const status = useStatus();
    let [btnlogin, setbtnlogin] = useState("LOGIN");
    useEffect(() => {
        //console.log("use effect called");
    }, [btnlogin])
    //let btnLogin =  "LOGIN";
    return (
        <>
            <div className="flex h-40 w-auto justify-between bg-slate-100 m-3 sm:bg-yellow-300 md:bg-blue-50">
                <img className="shadow-lg" src={LOGO}></img>
                <ul className="flex m-8 font-medium align-middle">
                    <div className="px-5"> {status ? "🟢" : "🔴"}</div>
                    <Link className="px-5" to="/home">Home</Link>
                    <Link  className="px-5" to="/about"><button>About</button></Link>
                    <li className="px-5" ><button>Contact Us</button></li>
                    <Link className="px-5"to="/grocery"><button>Checkout New Store</button></Link>
                    <li className="px-5"><button onClick={() => {
                        btnlogin == "LOGIN" ? setbtnlogin("LOGOUT") : setbtnlogin("LOGIN");
                        console.log("Buton clicks")
                    }}>{btnlogin}</button></li>
                     <li className="font-bold" >{data.loggedInUser}</li>
                </ul>
            </div>
        </>
    )
}

export default Header;