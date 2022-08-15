import React from "react";
import "./Footer.css"
import {FaFacebook, FaInstagram, FaTwitter} from "react-icons/fa";

function Footer() {
    return (

            <div className="footer">
                <div className="footer-container row">
                    <div className="footer-text col-lg-3 col-sm-6">
                        <ul>
                            <li><h3>Company</h3></li>
                            <li><a>About</a></li>
                            <li><a>Services</a></li>
                            <li><a>Team</a></li>
                            <li><a>Chefs</a></li>
                        </ul>
                    </div>
                    <div className="footer-text col-lg-3 col-sm-6">

                        <ul>
                            <li><h3>Our Menu</h3></li>
                            <li><a>Delicious Meals</a></li>
                            <li><a>Drinks</a></li>
                            <li><a>Pastries</a></li>
                            <li><a>Yoghurts</a></li>
                            <li><a>Grills</a></li>
                            <li><a>Desserts</a></li>

                        </ul>
                    </div>
                    <div className="footer-text col-lg-3 col-sm-6">
                        <ul>
                            <li><h3>Resources</h3></li>
                            <li><a>Privacy Policy</a></li>
                            <li><a>FAQ's</a></li>
                            <li><a>Terms and Condition</a></li>
                            <li><a>Help</a></li>



                        </ul>
                    </div>
                    <div className="footer-text col-lg-3 col-sm-6">

                        <ul>
                            <li><h3>Contact Us</h3></li>
                            <li><a>yumme@gmail.com</a></li>
                            <li><a>+2349012345678</a></li>
                            <li><a>+2348087654321</a></li>
                            <div className="footer-icon">
                                <li><a><FaFacebook color="#fff"/></a></li>
                                <li><a><FaInstagram color="#fff"/></a></li>
                                <li><a><FaTwitter color="#fff"/></a></li>

                            </div>

                        </ul>
                    </div>
                </div>
            </div>

    )
}

export default Footer