import './Review.css'
import review from "../../datareview";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import ReviewComponent from "../../common/ReviewComponent/ReviewComponent";

function Review() {
    const settings = {
        infinite: true,
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,

    };
    return(
        <div className="review row">
           <h1>Reviews</h1>

            <Slider {...settings}  >
            {review.map((reviews)=>(
                <ReviewComponent
                name={reviews.name}
                description={reviews.description}
                img={reviews.img}/>
            ))
            }

            </Slider>
        </div>
    )
}
export default Review