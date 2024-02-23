import { useContext, useEffect, useState } from "react";
import ShimmerRest from "./Shimmerrest";
import { useParams } from "react-router-dom";
import useResMenu from "../utils/useResMenu";
import RestaurantCategory from "./RestaurantCategory";
import UserContext from "./UserContext";

const RestaurantCOntent = () => {
    const data = useContext(UserContext);
    const str = "dummydata"
    //const [expand, setexpand] = useState(false);
    const params = useParams();
    const resID = params.resId;
    const resInfo = useResMenu(resID);
    const categories = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards.filter(c => c.card?.card?.["@type"] === "type.googleapis.com/swiggy.presentation.food.v2.ItemCategory");
    // const {
    //     title,
    // } = categories?.card?.card;
    if (resInfo === null) return <ShimmerRest />;
    const { name, cuisines, costForTwoMessage, avgRating } = resInfo?.cards[0].card?.card?.info;
    const { itemCards } = resInfo?.cards[2].groupedCard?.cardGroupMap?.REGULAR?.cards[1].card?.card;
    return (
        <div className="w-1/2 m-auto text-center p-auto">
            <div className="m-auto mb-8 text-center ">
                <div>
                    <h1 className="m-auto marker:font-black text-2xl">{name}</h1>
                    <span className="font-bold">You are logged in with {data.loggedInUser} user</span>
                    <h3>{cuisines.join(", ")}</h3>
                    <p>{costForTwoMessage}</p>
                </div>
                <h3 className="">{avgRating} Stars***</h3>
            </div>
            {/* {
                itemCards.map((item) => (
                    <li className="text-start" key={item.card.info.ide}>{item.card.info.name} - {item.card.info.price}</li>
                ))
            } */}
            {/* This is for accordian  */}
            {
                categories.map((category, index) => <RestaurantCategory key={index}
                    header={category?.card?.card?.title} data={category?.card?.card?.itemCards} expand={true} str={str}/>)
            }
        </div>
    );
}

export default RestaurantCOntent;