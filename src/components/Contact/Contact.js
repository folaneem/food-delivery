import './Contact.css'
import {MdCall, MdEmail, MdLocationOn} from "react-icons/md";
import FormInput from "../../common/FormInput/FormInput";
import {INPUTS} from "../../constants/InputValidation";
import Button from "../../common/Button/Button";
import swal from "sweetalert";

function Contact() {


    const inputs = [
        INPUTS.FULL_NAME,
        INPUTS.PHONE_NUMBER
    ]




    return(
        <div className="contact">
            <div className="contact-container">
                <h1>Get in touch with us!</h1>
                <p>Contact us to make more enquiries</p>
                <div className="contact-details">
                    <div><MdLocationOn fontSize="30px" color="#e88f4e"/>
                    <p>112 Street Oluyole Ext</p></div>
                    <div><MdCall fontSize="30px" color="#e88f4e"/>
                        <p>+2349012345678</p></div>
                    <div><MdEmail fontSize="30px" color="#e88f4e"/>
                        <p>yumme@gmail.com</p></div>
                </div>
                <div className="contact-form">
                    <h3>Contact Form</h3>
                    <div>

                        {inputs.map((input)=>(
                            <FormInput
                                key={input.id}
                                {...input}
                            />
                        ))}
<div className="contact-message">
    <label htmlFor="freeform">Message</label>
    <br/>
    <textarea id="freeform" name="freeform" rows="4" cols="50" placeholder="Write a message...">
</textarea>
</div>

                    </div>
                    <Button
                        name={"Send Message"}/>

                </div>
            </div>

        </div>
    )
}
export default Contact