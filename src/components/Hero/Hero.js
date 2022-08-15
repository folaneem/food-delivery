import background from "../../images/background.png"
import './Hero.css'
import Button from "../../common/Button/Button";

function Hero(){
    return(
        <div className='hero-section'>
        <header>
            <h1>Experience the taste of our Delicious <br/> meals.</h1>
        <p>We always deliverLorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Curabitur nec eros mauris. Morbi bibendum .</p>
          <Button
          name={"Discover More"}/>
        </header>
            <div className="background-image-container">
            <img src={background} alt="background" width="1100px" className="background-image"/></div>
        </div>
    )
}
export default Hero