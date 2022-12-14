import "./FormButton.css"

function FormButton(props) {
    return (
        <div className="form-button-container">
            <button className="form-button" onClick={props.onClick}>{props.img}{props.name}</button>
        </div>
    )
}

export default FormButton