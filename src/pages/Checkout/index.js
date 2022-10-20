import styles from "./Checkout.module.css";
import Modal from "../../components/Modal";
import CartItem from "../Cart/CartItem";
import Button from "../../components/Button";
import useShop from "../../services/ShopContext";
import { Link } from "react-router-dom";
import CheckoutInput from "./CheckoutInput";
import { useState } from "react";
function Checkout() {
    const { products, total, addClientData } = useShop();
    const [form, setForm] = useState({
        name:"",
        email:"",
        address:"",
        paymentmethod:"",
    });
    const {name,email,address,paymentmethod}=form;

    const onChange = (e, prop)=>{
        setForm(state =>({...state, [prop]:e.target.value}));
    }
    const handleClick = () => {
        const clientData = form;
        addClientData(clientData);
    };

    return ( 
        <Modal
            title="Check"
            title_purple="out"
        >
            <div className={styles.checkout_container}>
                 <ul className={styles.checkout_list}>
                    {
                        products.map((product,index)=> 
                            <CartItem
                                key={index}
                                name={product.name}
                                img={product.img}
                                price={product.price}
                                checkout={"true"}
                            />
                        )
                    }
                    <p className={styles.cart_total}>Total: {total}</p>
                </ul>
                <div className={styles.checkout_client_data}>
                    <form className={styles.form_client_data}>
                        <CheckoutInput 
                            name="Name"
                            value={name}
                            onChange={e=>onChange(e,'name')}
                        />
                        <CheckoutInput 
                            name="Email"
                            value={email}
                            onChange={e=>onChange(e,'email')}
                        />
                        <CheckoutInput 
                            name="Address"
                            value={address}
                            onChange={e=>onChange(e,'address')}
                        />
                        <CheckoutInput 
                            name="Payment Method"
                            value={paymentmethod}
                            onChange={e=>onChange(e,'paymentmethod')}
                        />
                    </form>
                    <Link to="/purcharse" className="w-full mx-auto flex">
                        <Button
                            text={"FINISH PROCESS"}
                            classBtn={"btn_black"}
                            onClick={handleClick}
                        />
                    </Link>
                </div>
            </div>
               
                
                
                
        </Modal>
     );
}

export default Checkout;