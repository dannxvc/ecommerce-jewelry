import ProductCard from '../../components/ProductCard';
import Layout from '../../components/Layout';
import Section from '../../components/Section';
import { shopData } from '../../services/ShopData.js';
import styles from './Products.module.css';
function Products() {
    return ( 
    <>
        <Layout>
            <Section
                title={"Products"} 
                subtitle={"Choose you favorite ones!"}  
                className="p-32" 
            >
                <div className={styles.products_container}>
                    {shopData.map((product)=>(
                        <ProductCard
                            key={product.id}
                            name={product.name}
                            subtitle={product.description}
                            price={product.price}
                            img={product.img}
                        />
                    ))}
                </div>
            </Section>
        </Layout>
    </> 
    );
}

export default Products;