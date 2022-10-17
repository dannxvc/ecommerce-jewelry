import Button from './Button';
import './ProductCard.css';
import useShop from '../services/ShopContext';
import { useEffect, useState } from 'react';

function ProductCard({name,subtitle,price,img}) {
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
        <div className="card">
            <img src={img} className="card_img" alt={name}/>
            <div>
                <h3 className="card_title">{name}</h3>
                <p className="card_subtitle">{subtitle}</p>
            </div>
            <p>PEN {price}</p>
            <Button
                isInCart={isInCart}
                onClick={handleClick}
                text={`${isInCart?"Remove from cart":"Add to cart"}`}
                classBtn={"btn_white"}
            />
        </div>
    );
}

export default ProductCard;