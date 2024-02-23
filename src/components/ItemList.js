import { useDispatch } from "react-redux";
import { addItems } from "../utils/cartSlice";


const List = ({props, str}) => {
    const dispatch = useDispatch();
    console.log(str)
    const handleClick = (str) => {
        dispatch(addItems(str));
    }
    //console.log(props);
    return (
        <>
            {
                <div className="border border-b-2 text-left p-4">
                    <div><span className="font-bold">{props.name} - {props.price}</span></div>
                    <div><span className="text=xs">{props.description}</span></div>
                    <button className="border-black p-3 border-solid border border-b-2" onClick={()=>{handleClick(props)}}>ADD+</button>
                </div>

            }
        </>

    )
}
export default List;