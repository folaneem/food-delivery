import './Download.css'
import playstore from "../../images/playstore.png"
import appstore from "../../images/appstore.png"

function Download() {
    return (
        <div className='download'>
            <div className="download-background"></div>
            <div className="download-container">
                <h1> Download our app for easier and more <br/> Comfortable experience</h1>
                <div className="download-button-container">
                    <div className="btn btn-playstore">
                        <img src={playstore} width="30px"/>
                    <button >
                        Get it on <br/><strong>Play Store</strong>
                    </button></div>
                    <div className="btn btn-appstore ">
                        <img src={appstore} width="30px"/>
                        <button >
                            Download on <br/><strong>App Store</strong>
                        </button></div>


                </div>

            </div>

        </div>


    )
}

export default Download