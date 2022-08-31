export const INPUT_REGEX =
    {
        EMAIL_REGEX:
            {
                regex: /[a-z0-9]+@[a-z]+\.[a-z]{2,3}/,
                regexString: "[a-z0-9]+@[a-z]+\\.[a-z]{2,3}"
            },
        PASSWORD_REGEX:
            {
                regex: /.{6,}/,
                regexString: ".{6,}"
            }
    };


export const INPUTS = {

    EMAIL:
        {
            id: 1,
            name: "email",
            type: "email",
            label: "email",
            errorMessage: "Invalid email address",
            placeholder:"Enter your email",
            required: true

        },
    PASSWORD:
        {
            id: 2,
            name: "password",
            type: "password",
            label: "password",
            errorMessage: "Password should be minimum six characters",
            placeholder: "Password",
            required: true
        },
    CONFIRM_PASSWORD:
        {
            id: 3,
            name: "confirmPassword",
            type: "password",
            label: "confirm password",
            errorMessage: "Passwords don't match!",
            placeholder:"Confirm Password",
            required: true
        },
    FULL_NAME:
        {
            id: 4,
            name: "full name",
            type: "text",
            placeholder:"Full Name",
            required: true

        },
    DELIVERY_ADDRESS:
        {
            id: 5,
            name: "delivery address",
            type: "text",
            placeholder:"Delivery Address",
            required: true

        },
    PHONE_NUMBER:
        {
            id: 6,
            name: "phone number",
            type: "tel",
            placeholder:"Phone Number e.g +234********",
            required: true

        },
    NAME_ON_CARD:
        {
            id:7,
            name:"name on card",
            type: "text",
            placeholder:"Name on Card",
            required: true
        },
    CARD_NUMBER:
        {
            id:8,
            name:"card number",
            type:"tel",
            placeholder:"Card Number",
            required: true
        }
};
