import styles from "./Cart.module.css";
import Modal from "../../components/Modal";
import CartItem from "./CartItem";
import Button from "../../components/Button";
import useShop from "../../services/ShopContext";
import { default as EmptyCart } from '../../img/icons/empty-cart.png';
import { Link } from "react-router-dom";
function Cart() {
    const { products, total } = useShop();
    return ( 
        <Modal
            title="Shopping "
            title_purple="Cart"
        >
            {total===0?
            <div className="flex flex-col items-center justify-center h-[70%]">
                <div className="flex items-center justify-center">
                    <img src={EmptyCart} className={styles.cart_empty_icon} alt="Empty Cart"/>
                    <h3 className={styles.cart_empty_description}>Your cart is empty.</h3>
                </div> 
                <Link to={"/products"} className="w-full mx-auto flex">
                    <Button
                        text={"Go to Products"}
                        classBtn={"btn_black"}
                    />
                </Link>
            </div>
            :
            <>
                <ul className={styles.container}>
                {
                    products.map((product,index)=> 
                        <CartItem
                            key={index}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                            checkout={"false"}
                        />
                    )
                }
                </ul>
                
                
                <div className={styles.cart_total_container}>
                    <p className={styles.cart_total}>Total: {total}</p>
                    <Link to="/checkout" className="w-full mx-auto flex">
                        <Button
                            text={"CHECKOUT"}
                            classBtn={"btn_black"}
                        />
                    </Link>
                </div>
            </>
            }
        </Modal>
     );
}

export default Cart;