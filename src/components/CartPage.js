import { useDispatch, useSelector } from "react-redux";
import cartSlice, { clearItem } from "../utils/cartSlice";
import List from "./ItemList";


const CartPage = () => {
    const dispatch = useDispatch();
    const data = useSelector((store)=>store.cart.items);
    console.log(data);
    const clearCart = ()=>{
         (clearItem())
    }
    return <>
    <div>Cart Page total {data.length} items to Checkout</div>
    <button className="border-black border-solid" onClick={clearCart}>Clear Cart</button>
    {
        data.length === 0 && <h1>Your cart is empty please add items</h1>
    }
    </>
}

export default CartPage;