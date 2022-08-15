import "./CartComponent.css"
import {Card} from "react-bootstrap";
import {decreaseAmountInCart, increaseAmountInCart, removeFromCart} from "../../test";

function CartComponent({item}) {

    const {name, price, img} = item


    return (
        <div className="cart-card">
            <div><img src={img} width="100px"/></div>
            <div className="cart-card-container">
                <div>
                    <h1>{name}  </h1></div>

                <div className="cart-card-price-delete">
                    <p>${price}</p>
                    <button onClick={() => removeFromCart(item)}>Delete</button>
                </div>
                <div className="cart-product-quantity">
                    <button onClick={() => decreaseAmountInCart(item)}>
                        -
                    </button>
                    <div>{item.count}</div>
                    <button onClick={() => increaseAmountInCart(item)}>+</button>
                </div>
            </div>
        </div>
    )

}

export default CartComponent