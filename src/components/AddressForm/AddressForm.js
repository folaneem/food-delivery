import "./AddressForm.css"
import FormInput from "../../common/FormInput/FormInput";
import {INPUTS} from "../../constants/InputValidation";
import FormButton from "../../common/FormButton/FormButton";

function AddressForm() {

    const inputs = [
        INPUTS.FULL_NAME,
        INPUTS.DELIVERY_ADDRESS,
        INPUTS.PHONE_NUMBER
    ]


    return (
        <div className="address-form">
            <h1>Add An Address</h1>
            <div className="address-form-container">
                {inputs.map((input)=>(
                    <FormInput
                        key={input.id}
                        {...input}
                        // value={values[input.name]}
                    />
                ))}
                <div className="address-form-button">
                    <FormButton
                        name={"Save Address"}/>
                </div>

            </div>
        </div>
    )
}
export default AddressForm