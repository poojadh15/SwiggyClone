import { LOGO } from "../utils/constants";

export const Card = (props) => {
    const resdata = props;
    const {
        name,
        id,
        costForTwo,
        avgRating,
        cuisines,
        cloudinaryImageId
    } =  resdata?.resData.info;
    return (
        <>
            <div className="w-[250px] m-5 p-2 whitespace-normal bg-gray-50 border border-solid border-x-gray-200 rounded-md" >
                <div className="cardHead">
                    <img src={"https://media-assets.swiggy.com/swiggy/image/upload/fl_lossy,f_auto,q_auto,w_660/" + cloudinaryImageId} alt="logo"></img>
                    <h3 className="font-bold text-lg">{name}</h3>
                </div>
                <p>{id}</p>
                <p>{costForTwo}</p>
                <p>{avgRating}</p>
                <p className="w-[100px] p-1 text-wrap">{cuisines} </p>
            </div>
        </>
    )
}

export default Card;

const cart = () => {
    return(
        <>
        </>
    );
}
