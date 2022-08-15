import "./Cart.css"
import CartComponent from "../../common/CartComponent/CartComponent";
import NeedHelp from "../../common/NeedHelp/NeedHelp";
import {useEffect,useState} from "react";
// import {useDispatch, useSelector} from "react-redux";
// import {useEffect} from "react";
// import {getTotals} from "../../slice/cartSlice";



function Cart() {
    const initialCart=JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empt
    const [userCart,setUserCart]=useState(initialCart)
    useEffect(()=>{
        document.getElementById('cartLength').innerText=String(userCart.length)

    })

    return(
        <div className="cart">

            <div className="cart-container">
                <h1>My Cart</h1>
            {userCart.map((item) => {
                return (
                    <CartComponent
                        item={item}
                        key={item.id}

                    />
                );
            })}
            </div>
            <NeedHelp/>
        </div>
    )
}
export default Cart;