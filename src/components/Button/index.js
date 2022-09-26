import './styles.css'
function Button({text, classBtn}) {
    return ( 
        <button className={`btn ${classBtn}`}>
            {text}
        </button>
     );
}

export default Button;