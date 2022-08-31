import "./Cart.css"
import CartComponent from "../../common/CartComponent/CartComponent";
import NeedHelp from "../../common/NeedHelp/NeedHelp";
import {useEffect, useState} from "react";
import Button from "../../common/Button/Button";

// import button from "../../common/Button/Button";


function Cart() {
    const initialCart = JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empt
    const [userCart, setUserCart] = useState(initialCart)
    useEffect(() => {
        document.getElementById('cartLength').innerText = String(userCart.length)

    })


    function removeFromCart(product) {

        console.log(product)
        const cartInLocalStorage = JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
        const idInUserCart = cartInLocalStorage.map((item) => item.id) //get all menu id in user cart
        //if product.id is in user cart already do nothing
        const positionInCart = idInUserCart.indexOf(product.id)
        if (positionInCart !== -1) {
            cartInLocalStorage.splice(positionInCart, 1)//remove product from array
            localStorage.setItem("userCart", JSON.stringify(cartInLocalStorage))//save to user local storage
            console.log(cartInLocalStorage)
            setUserCart(cartInLocalStorage)

            return true
        } else {
            return 'Product is not in cart'
        }
    }

    function increaseAmountInCart(product) {
        console.log(product)
        const cartInLocalStorage = JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
        const idInUserCart = cartInLocalStorage.map((item) => item.id) //get all menu id in user cart
        //if product.id is in user cart already do nothing
        const positionInCart = idInUserCart.indexOf(product.id)
        console.log((positionInCart))
        if (positionInCart !== -1) {
            const newCount = cartInLocalStorage[positionInCart].count + 1
            console.log(newCount)
            console.log(cartInLocalStorage[positionInCart].count)
            cartInLocalStorage[positionInCart] = {...product, count: newCount}
            localStorage.setItem("userCart", JSON.stringify(cartInLocalStorage))//save to user local storage
            setUserCart(cartInLocalStorage)
            return true
        } else {
            return 'Product is not in cart'
        }
    }


    function decreaseAmountInCart(product) {
        console.log(product)
        const cartInLocalStorage = JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empty array
        const idInUserCart = cartInLocalStorage.map((item) => item.id) //get all menu id in user cart
        //if product.id is in user cart already do nothing
        const positionInCart = idInUserCart.indexOf(product.id)

        if (positionInCart !== -1) {
            const newCount = cartInLocalStorage[positionInCart].count - 1
            if (newCount < 1) {
                return true
            }
            cartInLocalStorage[positionInCart] = {...product, count: newCount}
            console.log(newCount)
            console.log(cartInLocalStorage[positionInCart].count)
            localStorage.setItem("userCart", JSON.stringify(cartInLocalStorage))//save to user local storage
            console.log(cartInLocalStorage)
            setUserCart(cartInLocalStorage)
            return true
        } else {
            return 'Product is not in cart'
        }
    }

    function getTotal() {
        if (userCart.length === 0) {
            return 0
        }

        const total = userCart.map((product) => product.count * product.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return total

    }

    function getLength() {
        const amount = userCart.map((product) => product.count).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return amount
    }

    return (
        <div className="cart row">
            <div className="cart-container ">
                <div className="cart-products-container  ">
                    <h1>My Cart</h1>
                    {userCart.length === 0 ?
                        <div className="cart-empty">
                            <p>YOUR CART IS EMPTY</p>
                            <Button
                                name={"Check Menu"}
                            />
                        </div>


                        : userCart.map((item) => {
                            return (


                                <CartComponent
                                    item={item}
                                    key={item.id}
                                    removeFromCart={removeFromCart}
                                    increaseAmountInCart={increaseAmountInCart}
                                    decreaseAmountInCart={decreaseAmountInCart}

                                />


                            );
                        })}
                </div>
                <div className="cart-summary  "><h1>Cart Summary</h1>
                    <hr/>
                    <div className="cart-summary-total-order-container">
                        <div className="cart-summary-total-order">
                            <h3>Total Order({getLength()})</h3>
                            <span>Delivery fee not included</span></div>
                        <div><p>${getTotal()}</p></div>
                    </div>
                    <hr/>
                    <div className="cart-summary-subtotal"><h3>Subtotal</h3>
                        <p>${getTotal()}</p></div>
                    <a href="/address">
                        <button>Checkout</button>
                    </a>

                </div>
            </div>
            <NeedHelp/>
        </div>
    )
}

export default Cart;