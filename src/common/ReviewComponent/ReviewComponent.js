import './ReviewComponent.css'
import {ImStarFull} from "react-icons/im";

function ReviewComponent(props) {
    const {name,img,description} = props

    return(
        <div className="review-component" >
            <p>{description}</p>
            <div className="review-component-container">
            <img width="40px" src={img}/>
            <h3>{name}</h3>
            <div className="review-star">
                <ImStarFull color="#FFBF00" fontSize="16px"/>
                <ImStarFull color="#FFBF00" fontSize="16px"/>
                <ImStarFull color="#FFBF00" fontSize="16px"/>
                <ImStarFull color="#FFBF00" fontSize="16px"/>
                <ImStarFull color="#FFBF00" fontSize="16px"/>
                <ImStarFull color="#FFBF00" fontSize="16px"/>
            </div>
            </div>

        </div>
    )
}
export default ReviewComponent