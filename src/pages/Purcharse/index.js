import Button from "../../components/Button";
import Modal from "../../components/Modal";
import useShop from "../../services/ShopContext";
import DetailsItem from "./DetailsItem";
import styles from './Purcharse.module.css';
function Purcharse() {
    const { products, client } = useShop();
    return ( 
        <Modal
            title="Thank "
            title_purple="you!"
        >
            <div className={styles.purcharse_container}>
                <div className="flex flex-col gap-[1.5rem]">
                    <h3><strong>Remember:</strong></h3>
                    <p>You have to send these details through <span className='text-purple'>Whatsapp</span>.</p>
                    <p>
                        We will assist you <span className='text-purple'>personally</span>, so you can
                        make your payment <span className='text-purple'>safety</span>!
                    </p>
                </div>
                <div>
                    <h3 className="my-2"><strong>Products</strong></h3>
                    {products.map(product=>
                        <DetailsItem
                            key={product.id}
                            subtitle={product.name}
                            description={product.price}
                        />
                    )}
                    <h3 className="mb-2 mt-4"><strong>Client's Data</strong></h3>
                    <DetailsItem
                        subtitle={"Name:"}
                        description={client.name}
                    />
                    <DetailsItem
                        subtitle={"Email"}
                        description={client.email}
                    />
                    <DetailsItem
                        subtitle={"Address:"}
                        description={client.address}
                    />
                    <DetailsItem
                        subtitle={"Payment Method"}
                        description={client.paymentmethod}
                    />

                </div>
            </div>
            <Button
                text={"SEND PURCHASE DETAILS"}
                classBtn={"btn_black"}
                // onClick={handleClick}
            />
        </Modal>
     );
}

export default Purcharse;