import "./PopularDishes.css"
import DishComponent from "../../common/DishComponent/DishComponent";
import products from "../../data";
import Button from "../../common/Button/Button";
import {MENU_PATH} from "../../constants/UrlPaths";

function PopularDishes({handleClick}) {

    return (
        <div className="popular-dishes">
            <h1>Our Popular Dishes</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {products.map((item) => {
                        return (
                            <DishComponent

                                item={item}
                                key={item.id}
                                handleClick={handleClick}

                            />
                        );
                    })}
                </div>
            </section>
            <div className="popular-dishes-button">
                <a href="/menu"> <Button
                    clasName="check-menu"
                    name={"Check Menu"}
                /></a>
               </div>

        </div>
    )
}

export default PopularDishes