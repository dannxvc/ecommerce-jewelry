import { useEffect, useState } from 'react';
import useShop from '../../services/ShopContext';
import './CartItem.css';
function CartItem({checkout,img,name,price}) {
    const { products, addToCart, removeFromCart} = useShop();
    const [isInCart, setIsInCart] = useState(false);

    useEffect(()=>{
        const productIsInCart = products.find((product)=>product.name === name);

        if(productIsInCart){
            setIsInCart(true);
        }else{
            setIsInCart(false);
        }
    },[products, name]);

    const handleClick = () => {
        const product = {img,name,price}
        if(isInCart){
            removeFromCart(product);
        }else{
            addToCart(product);
        };
    };

    return ( 
        <>
            <li className={`cart_item ${checkout==="true"&&"cart_item_checkout"}`}>
                <div className='cart-item-center'>
                    <img src={img} className="cart_product_icon" alt={name}/>
                </div>
                <div className='cart-item-left cart-item-description'>{name}</div>
                <div className='cart-item-center cart-item-description'>PEN {price}</div>
                {checkout==="false"&&<div className='cart-item-center cart-item-description'>
                    <button onClick={handleClick}>
                        <svg className="icon" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path fill="#F27D85" d="M127.99951,26.00012a102,102,0,1,0,102,102A102.1153,102.1153,0,0,0,127.99951,26.00012Zm0,192a90,90,0,1,1,90-90A90.10218,90.10218,0,0,1,127.99951,218.00012ZM164.2417,100.2428l-27.75732,27.75732,27.75732,27.75733a5.99971,5.99971,0,1,1-8.48438,8.48535L127.99951,136.485,100.2417,164.2428a5.99971,5.99971,0,0,1-8.48438-8.48535l27.75733-27.75733L91.75732,100.2428a5.99971,5.99971,0,1,1,8.48438-8.48535l27.75781,27.75781,27.75781-27.75781a5.99971,5.99971,0,0,1,8.48438,8.48535Z"/>
                        </svg>
                    </button>
                </div>}
            </li>
            <hr className='border-purple'/>
        </>
     );
}

export default CartItem;