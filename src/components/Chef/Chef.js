import './Chef.css'
import ChefComponent from "../../common/ChefComponent/ChefComponent";
import chefs from "../../datachef";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"

function Chef() {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return (
        <div className="chef"><h1>Our Chef</h1>
            <Slider {...settings}>
            {chefs.map((chef)=>(
                <ChefComponent
                    name={chef.name}
                    description={chef.description}
img={chef.img}
                />

            ) )}
            </Slider>
        </div>
    )
}

export default Chef;