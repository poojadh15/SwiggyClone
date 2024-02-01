import { useState } from "react";
import List from "./ItemList";

const RestaurantCategory = ({header, data, expand, str}) => {
    //console.log(props);
    const list = data;
    return (
        <>
            <div className="m-2 bg-gray-50 shadow-xl p-8">
                <div className="flex p-2 justify-between mx-auto my-3 h-8 text-center content-center cursor-pointer">
                    <h3 className="text-xl font-bold">{header}</h3>
                    <span className="">🔽</span>
                </div>
                {
                    expand && list.map((item, index)=> <List key={index} props={item?.card?.info}  str={str}/>)
                }
                
            </div>

        </>


    )
}
export default RestaurantCategory;