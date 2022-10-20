import styles from "./DetailsItem.module.css";
function DetailsItem({key,subtitle, description}) {
    return ( 
        <div className={styles.item_container}>
            <div className={styles.item_description}>
                <p>{subtitle}</p>
                <p className={styles.item_data}>{description}</p>
            </div>
            <hr className="border-purple"/>
        </div>
     );
}

export default DetailsItem;