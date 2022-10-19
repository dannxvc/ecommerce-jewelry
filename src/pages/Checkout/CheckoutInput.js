import styles from "./CheckoutInput.module.css";
function CheckoutInput({value,name,onChange}) {
    return ( 
        <div className={styles.general_container}>
            <div className={styles.input_container}>
                <label htmlFor={name}>{name}</label>
                <input className={styles.input} id={name} value={value} onChange={onChange}/>
            </div>
            <hr className={styles.input_separator}/>
        </div>
     );
}

export default CheckoutInput;