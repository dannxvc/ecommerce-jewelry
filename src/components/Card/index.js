import Button from '../../components/Button';
import './styles.css';
function Card({title,subtitle,price,img}) {
    return ( 
        <div className="card">
            {img}
            <div>
                <h3 className="card_title">{title}</h3>
                <p className="card_subtitle">{subtitle}</p>
            </div>
            <p>{price}</p>
            <Button
                text={"Add to cart"}
                classBtn={"btn_white"}
            />
        </div>
    );
}

export default Card;