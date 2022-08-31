import './Button.css'

function Button(props) {
    const {className, name, onClick} = props
    return (
        <div className="button-container">
            <button className={`button ${className}`} onClick={onClick}>{name}</button>
        </div>
    )
}

export default Button