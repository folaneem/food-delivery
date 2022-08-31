import "./CartComponent.css"


function CartComponent({item,decreaseAmountInCart, increaseAmountInCart, removeFromCart}) {

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

            </div>
            <div className="cart-product-quantity">
                <button onClick={() => increaseAmountInCart(item)}>
                    +
                </button>
                <div id='itemCount'>{item.count}</div>
                <button onClick={() => decreaseAmountInCart(item)}>-</button>
            </div>
        </div>
    )

}

export default CartComponent