import { useEffect, useState } from "react";

 const useResMenu = (resId)=>{
    //fetchData
    const [resData, setresData] = useState(null);
    const fetchMenu = async () => {
        const data = await fetch("https://www.swiggy.com/dapi/menu/pl?page-type=REGULAR_MENU&complete-menu=true&lat=28.4986092&lng=77.3999054&restaurantId=" + resId)
        const resInfo = await data.json();
        setresData(resInfo.data)
    }
    useEffect(()=>{
        console.log("called")
        fetchMenu();
    },[])

    return resData;
}
export default useResMenu;