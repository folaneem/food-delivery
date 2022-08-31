import "./MenuComponent.css"
import Button from "../Button/Button";
import {addToCart} from "../../test";

function MenuComponent({item}) {
    const {name, price, img} = item
    return (
        <div className="menu-component">
            <img src={img}/>
            <h3>{name}</h3>
            <p>${price}</p>
            <Button
                onClick={() => addToCart(item)}
                name={"Add To Cart"}
            />

        </div>
    )
}

export default MenuComponent