import "./FormInput.css"
import {useState} from "react";

function FormInput(props) {
    const [focused, setFocused] = useState(false)
    const {name, label, handleChange, placeholder, type, ...inputProps} = props;

    function handleFocus(e) {
        setFocused(true)

    }
    return(
        <div className="form-input">
            <label className="input-header-name">{label}</label>
            <div className="input-field-container">
                <input
                    className="input-field"
                name={name}
                type={type}
                onChange={handleChange}
                onBlur={handleFocus}
                placeholder={placeholder}
                onFocus={()=>
                name === "confirm Password" && setFocused(true)}
                focused={focused.toString()}
                />
            </div>
        </div>
    )
}
export default FormInput;