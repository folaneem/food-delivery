import './About.css'
import AboutHero from "../AboutHero/AboutHero";
import Story from "../Story/Story";
import Chef from "../Chef/Chef";
import Review from "../Review/Review";
import Download from "../Download/Download";
import Footer from "../Footer/Footer";

function About() {
    return(
        <div className="about">
            <AboutHero/>
            <Story/>
            <Chef/>
            <Review/>
            <Download/>
            <Footer/>
        </div>
    )
}
export default About