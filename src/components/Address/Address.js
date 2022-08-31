import "./Address.css"
import AddressForm from "../AddressForm/AddressForm";
import PaymentDetails from "../PaymentDetails/PaymentDetails";
import NeedHelp from "../../common/NeedHelp/NeedHelp";
import button from "../../common/Button/Button";
import {HunelProvider} from "reactjs-credit-card";
import {useState} from "react";


function Address() {
    const initialCart = JSON.parse(localStorage.getItem("userCart")) || []//get user cart from local storage and if there is none initialise to empt
    const [userCart, setUserCart] = useState(initialCart)

    function getTotal() {
        if (userCart.length === 0) {
            return 0
        }

        const total = userCart.map((product) => product.count * product.price).reduce((previousValue, currentValue) => previousValue + currentValue, 0)
        return total
    }


    return (
        <div className="address">
            <div className="address-container">
                <div>
                    <AddressForm/>
                    <PaymentDetails/></div>

                <div className="cart-summary ">
                    <div className="cart-summary-total-order-container">
                        <h3>Subtotal</h3>
                        <p>${getTotal()}</p>
                    </div>
                    <hr/>
                    <div className="cart-summary-total-order-container">
                        <h3>Delivery Fee</h3>
                        <p>$3.20</p>
                    </div>
                    <hr/>
                    <div className="cart-summary-total-order-container">
                        <h3>Total Fee</h3>
                        <p>${getTotal() + 3.20}</p>
                    </div>
                    <a href="/sign-in">
                        <button>Continue To Checkout</button>
                    </a>
                </div>
            </div>
            <NeedHelp/>
        </div>
    )
}

export default Address