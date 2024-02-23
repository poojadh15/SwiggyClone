//import { dataObj } from "../utils/mockdata";
import { Card } from "./RestoCard";
import { useContext, useEffect, useState } from "react";
import ShimmerCards from "./shimmerUI";
import { Link } from "react-router-dom";
import useStatus from "../utils/useStatus";
import UserContext from "./UserContext";
import App from "./test";

const Body = () => {
    const status = useStatus();
    const [searchText, setsearchText] = useState([]);
    const [dataList, setdataList] = useState([]);
    const [filteredrest, setfilteredrest] = useState([]);
    const fecthdata = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/restaurants/list/v5?lat=18.5060533&lng=73.931139&is-seo-homepage-enabled=true&page_type=DESKTOP_WEB_LISTING");
        const json = await data.json();
        setdataList(json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants);
        setfilteredrest(json?.data?.cards[1]?.card?.card?.gridElements.infoWithStyle.restaurants)
    }
    useEffect(() => {
        fecthdata();
    }, []);
    if (status === false) return <h1>Looks Like you are offline</h1>
    const { loggedInUser, setuserName } = useContext(UserContext);
    // if (dataList.length === 0)
    //     return <ShimmerCards />
    //console.log(data);
    //const dataList = dataObj;
    return dataList.length === 0 ? <ShimmerCards /> : (
       
        <div className="body">
             <App />
            <div>
                <span>UserName</span>
                <input className="border border-black rounded-lg" value={loggedInUser}
                    onChange={(e) => setuserName(e.target.value)}/>
    
            </div>
            <div className="cardHead">
                <input className="m-6 w-1/5 h-[40px] rounded-md border border-solid border-blue-200 focus:ring-2 focus:ring-blue-500 focus:outline-none"
                    placeholder="Search your menu items" onChange={(e) => {
                        setsearchText(e.target.value);
                    }}></input>
                <button className="w-[80px] p-2 m-2 bg-green-100 rounded-lg dark:font-black" onClick={() => {
                    const filteredrest = dataList.filter(item => item.info.name.toLowerCase().includes(searchText.toLowerCase()));
                    setfilteredrest(filteredrest);
                }}>Search</button>

                <button className="w-[80px] p-2 bg-green-100 rounded-lg " onClick={() => {
                    const filteredLists = dataList.filter(item => item.info.avgRating > 4);
                    console.log("btn Clicked");
                    setdataList(filteredLists);
                }}>
                    Filter
                </button>

                <div className="w-full flex flex-wrap">
                    {
                        filteredrest?.map(restaurant => <Link className="hover:transition-transform" key={restaurant.info.id} to={"/restaurant/" + restaurant.info.id}><Card resData={restaurant} /></Link>)
                    }
                </div>
            </div>
        </div>
    );
}

export default Body;