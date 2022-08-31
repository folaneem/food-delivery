import "./Menu.css"
import MenuComponent from "../../common/MenuComponent/MenuComponent";
import products from "../../data";
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import {IoIosArrowBack, IoIosArrowForward} from "react-icons/io";

const PreviousBtn = (props) => {
    // console.log(props);
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <IoIosArrowBack style={{color: "white", fontSize: "30px"}}/>
        </div>
    );
};
const NextBtn = (props) => {
    const {className, onClick} = props;
    return (
        <div className={className} onClick={onClick}>
            <IoIosArrowForward style={{color: "white", fontSize: "30px"}}/>
        </div>
    );
};

function Menu() {
    const settings = {
        infinite: true,
        arrows: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: true,
        autoplaySpeed: 3000,
        prevArrow: <PreviousBtn/>,
        nextArrow: <NextBtn/>,
        className: "slides",
    };
    return (

        <div className="menu">
            <h1>Delicious Meals</h1>
            <Slider {...settings}>
                {products.map((item) => {
                    return (
                        <MenuComponent

                            item={item}
                            key={item.id}

                        />
                    );
                })}
            </Slider>
        </div>
    )
}

export default Menu