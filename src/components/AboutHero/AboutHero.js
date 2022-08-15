import './AboutHero.css'
import herobackground from "../../images/herobackground.png"
function AboutHero() {
    return(
        <div className="about-hero">
            <header>
                <h1>We are here to give you nothing but <br/>good and healthy delicious meals.</h1>
                <p>We always deliverLorem ipsum dolor sit amet, consectetur adipiscing elit. <br/>Curabitur nec eros mauris. Morbi bibendum .</p>
            </header>
            <div className="hero-background-image-container">
                <img src={herobackground} alt="herobackground" width="1100px" className="hero-background-image"/></div>
        </div>
    )
}
export default AboutHero;