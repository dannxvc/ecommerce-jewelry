import Button from "../Button";

function Contact() {
    return ( 
        <form>
            <input type="text" placeholder="Full Name"/>
            <input type="text" placeholder="Email Address"/>
            <textarea type="text" placeholder="Message"/>
            <Button text={"Send"}/>
        </form>
     );
}

export default Contact;