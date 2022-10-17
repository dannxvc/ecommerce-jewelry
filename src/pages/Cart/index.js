import styles from "./Cart.module.css";
import Modal from "../../components/Modal";
import CartItem from "./CartItem";
import Button from "../../components/Button";
import useShop from "../../services/ShopContext";
function Cart() {
    const { products, total } = useShop();
    return ( 
        <Modal>
                <ul className={styles.container}>
                {
                    products.map((product,index)=> 
                        <CartItem
                            key={index}
                            name={product.name}
                            img={product.img}
                            price={product.price}
                        />
                    )
                }
                </ul>
                <div className={styles.cart_total_container}>
                    <p className={styles.cart_total}>Total: {total}</p>
                    <Button
                        text={"CHECKOUT"}
                        classBtn={"btn_black"}
                    />
                </div>
        </Modal>
     );
}

export default Cart;