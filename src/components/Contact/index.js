import Button from "../Button";
import styles from './styles.module.css';
function Contact() {
    return ( 
        <form className={styles.contact_container}>
            <input className="input" type="text" placeholder="Full Name"/>
            <input className="input" type="text" placeholder="Email Address"/>
            <textarea className="textarea" type="text" placeholder="Message"/>
            <Button text={"Send"} classBtn={"btn_black"}/>
        </form>
     );
}

export default Contact;