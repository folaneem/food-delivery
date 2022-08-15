import {INPUTS} from "../../constants/InputValidation";
import FormButton from "../../common/FormButton/FormButton";
import "./PaymentDetails.css"
import FormInput from "../../common/FormInput/FormInput";
import cvv from "../../images/cvv.png"

function PaymentDetails() {
    const inputs = [
        INPUTS.NAME_ON_CARD,
        INPUTS.CARD_NUMBER
    ]

    return(
        <div className="payment-form">
            <h1>Payment Details</h1>
            <div className="payment-form-container">
                {inputs.map((input)=>(
                    <FormInput
                        key={input.id}
                        {...input}
                    />
                ))}
                <div className="payment-month-cvv">


                    <FormInput
                        placeholder={"MM/YY"}
                    />

                    <div className="payment-cvv">
                        <FormInput
                            className={"cvv"}
                            placeholder={"CVV"}
                        />
                    </div>
                </div>
                <div className="payment-form-button">
                    <FormButton
                        name={"Save Details"}/>
                </div>

            </div>

        </div>
    )
}
export default PaymentDetails