import "./SignUp.css"
import axios from "axios";
import {Link,useNavigate} from "react-router-dom"
import {useState} from "react";
import {getToken} from "../../Utils/TokenUtils";
import {INPUTS, INPUT_REGEX} from "../../constants/InputValidation";
import {DEFAULT_ERROR_MESSAGE} from "../../constants/ErrorMessage";
import {SIGN_UP_ENDPOINT} from "../../constants/Endpoints";
import Background from "../../common/Background/Background";
import FormInput from "../../common/FormInput/FormInput";
import FormButton from "../../common/FormButton/FormButton";
import {FcGoogle} from "react-icons/fc";
import {SIGN_IN_PATH} from "../../constants/UrlPaths";

function SignUp() {
    let navigate = useNavigate();
    const [errorMessage, setErrorMessage] = useState(DEFAULT_ERROR_MESSAGE.SIGN_UP)
    const [canSubmitInput, setCanSubmitInput] = useState(true)
    const [values, setValues] = useState({
        email: "",
        password: "",
        confirmPassword: ""
    })

    const inputs = [
        INPUTS.EMAIL,
        INPUTS.PASSWORD,
        {...INPUTS.CONFIRM_PASSWORD, pattern: values.password}
    ]

    function handleChange(e) {
        console.log(getToken())
        setCanSubmitInput(true)
        e.preventDefault()
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    async function sendSignUpRequest(values) {
        try {
            const response = await axios.post(SIGN_UP_ENDPOINT,
                {
                    email: values.email,
                    username: values.username,
                    password: values.password
                })
            console.log(response)
            navigate(SIGN_IN_PATH);
        } catch (e) {
            setCanSubmitInput(false)
            const errorResponse = e.response
            if (errorResponse.status === 400) {
                setErrorMessage("Email already exists, please try again with another email address or Sign In by clicking on the link below")
            } else if (errorResponse.status === 500) {
                setErrorMessage("There was an issue signing you up to our service, please try again")
            } else {
                setErrorMessage("There was an issue signing you up to our service, please try again")
            }
        }
    }

    async function handleSignUp(e) {
        e.preventDefault()
        let validationPassed = validateSignUpInputs(values)
        if (validationPassed) {
            setCanSubmitInput(true)
            console.log(values)
            await sendSignUpRequest(values)
        } else {
            setErrorMessage(DEFAULT_ERROR_MESSAGE.SIGN_UP)
            setCanSubmitInput(false)
        }
    }

    const validateSignUpInputs = (values) => {
        const emailPassValidation = INPUT_REGEX.EMAIL_REGEX.regex.test(values.email)
        const passwordPassValidation = INPUT_REGEX.PASSWORD_REGEX.regex.test(values.password)
        const confirmPasswordPassValidation = values.confirmPassword === values.password

        return  emailPassValidation === true && passwordPassValidation === true && confirmPasswordPassValidation === true;
    }


    return(
        <div className='sign-up'>
            <div className="sign-up-logo-container">
                <Background/>
            </div>
            <div className="sign-up-container">
                <div className="sign-in-text">
                    <h1>Sign Up</h1>
                    <p> Sign up to create an account with us.</p>
                </div>
                <div className="sign-up-form-container">
                    {inputs.map((input) => (
                        <FormInput
                            key={input.id}
                            {...input}
                            value={values[input.name]}
                            handleChange={handleChange}
                        />
                    ))}

                    {canSubmitInput === false && (
                        <p className={"sign-up-submission-error"}>
                            {errorMessage}
                        </p>
                    )}
                    <div className="sign-up-button-container">
                        <FormButton
                            name={"Sign Up"}
                        />
                        <div className="sign-up-with-google-button-container">

                            <FormButton
                                img={<FcGoogle fontSize="30px"/>}
                                name={ " Sign Up With Google"}
                            />

                        </div>

                    </div>
                    <h4 className="sign-in-have-account">Already have an account?
                        <Link to={SIGN_IN_PATH}> Sign In</Link>
                    </h4>
                </div>
            </div>
        </div>
    )
}
export default SignUp