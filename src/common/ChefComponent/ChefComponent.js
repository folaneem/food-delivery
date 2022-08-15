import './ChefComponent.css'
import {Carousel} from "react-bootstrap";


function ChefComponent(props) {
    const {img, name, description} = props;

 return(
     <div className="chef-component row">
<div className="chef-story col-lg-6"><h1>{name}</h1>
    <p>{description}</p></div>

                 <img width="200px" src={img} className="col-lg-4" />

     </div>
 )
}
export default ChefComponent