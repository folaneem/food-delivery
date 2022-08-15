import Hero from "../Hero/Hero"
import OrderProcess from "../OrderProcess/OrderProcess";
import "./LandingPage.css"
import PopularDishes from "../PopularDishes/PopularDishes";
import Discount from "../Discount/Discount";
import Footer from "../Footer/Footer";



function LandingPage({handleClick}){

    return(
        <div className="landing-page">

         <Hero/>
            <OrderProcess/>
            <PopularDishes handleClick={handleClick}/>
            <Discount/>
            <Footer/>

        </div>
    )
}
export default LandingPage