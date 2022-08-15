import "./PopularDishes.css"
import DishComponent from "../../common/DishComponent/DishComponent";
import products from "../../data";
import Button from "../../common/Button/Button";

function PopularDishes({handleClick}) {

    return(
        <div className="popular-dishes">
            <h1>Our Popular Dishes</h1>
            <section className="py-4 container">
                <div className="row justify-content-center">
                    {products.map((item) => {
                        return (
                            <DishComponent
                                // img={item.img}
                                // price={item.price}
                                // name={item.name}
                                // description={item.description}
                                item={item}
                                key={item.id}
                                handleClick={handleClick}

                            />
                        );
                    })}
                </div>
            </section>
            <div className="popular-dishes-button"><Button
                clasName="check-menu"
                name={"Check Menu"}/></div>

        </div>
    )
}
export default PopularDishes