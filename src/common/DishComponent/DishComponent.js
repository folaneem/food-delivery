import "./DishComponent.css"
import {ImStarFull} from "react-icons/im";
import {Card} from "react-bootstrap";
import Button from "../Button/Button";
import {addToCart} from "../../test"
function DishComponent({item}) {

    const {img, name, description, price} = item
    return (
        <Card className="card">
            <div className="image-box"><Card.Img src={img} />
            </div>

            <div className="details">
                <div className="name-star-container">
                    <Card.Title>{name}</Card.Title>
                    <div className="star">
                        <ImStarFull color="#FFBF00" fontSize="20px"/>
                        <ImStarFull color="#FFBF00" fontSize="20px"/>
                        <ImStarFull color="#FFBF00" fontSize="20px"/>
                        <ImStarFull color="#FFBF00" fontSize="20px"/>
                        <ImStarFull color="#FFBF00" fontSize="20px"/>
                        <ImStarFull color="#FFBF00" fontSize="20px"/>
                    </div>
                </div>
                <Card.Text>{description}</Card.Text>

<div className="price-button-container">
    <p>${price}</p>
    <Button
        onClick={() => addToCart(item)}
        name={"Add To Cart"}
    />


</div>


            </div>


        </Card>
    )
}

export default DishComponent;