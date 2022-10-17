import './Button.css'
function Button({text, classBtn,onClick}) {
    return ( 
        <button className={`btn ${classBtn}`} onClick={onClick}>
            {text}
        </button>
     );
}

export default Button;