import './Story.css'
import story from "../../images/story.png"

function Story() {
    return (
        <div className="story row ">
            <img src={story} alt="story" width="500px"  className="story-image col-lg-4   "/>
            <div className="our-story col-lg-6 ">
            <h1>Our Story</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse imperdiet neque ante, vel sagittis
                turpis laoreet quis. Fusce sed erat at lacus rhoncus cursus ut ut nisl. Aenean non sapien pharetra,
                blandit elit eu, tempus lorem. </p>
            <p>Cras tempus, ipsum at hendrerit lacinia, lectus nibh faucibus ante, nec cursus dui nisl fringilla neque.
                Cras ut scelerisque est, sit amet feugiat diam. Nulla vulputate dolor a ultricies pellentesque.
                Pellentesque commodo sit amet erat luctus rutrum.</p></div>
        </div>
    )
}

export default Story