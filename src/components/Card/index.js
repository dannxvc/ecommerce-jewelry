import Button from '../../components/Button';
function Card({title,subtitle,price,img}) {
    return ( 
        <div>
            {img}
            <h3>{title}</h3>
            <p>{subtitle}</p>
            <p>{price}</p>
            <Button
                text={"Add to cart"}
            />
        </div>
    );
}

export default Card;