import ProductCard from '../../components/ProductCard';
import Button from '../../components/Button';
import Section from '../../components/Section';
import { default as ProductOne } from '../../img/products/ring-white-small-diamonds-silver.png';
import { default as ProductTwo } from '../../img/products/ring-green-small-silver.png';
import { default as ProductThree } from '../../img/products/ring-red-gold.png';
import FAQ from '../../components/FAQ';
import '../../App.css';
import styles from './Home.module.css';
import Contact from '../../components/Contact';
import { Link, Outlet } from 'react-router-dom';
import Layout from '../../components/Layout';
function Home() {

    const products = [
        {
            id:"1",
            name: "Diamond Engagement",
            description: "18k white gold & 0.23 TCW",
            price:4342.50,
            img:ProductOne
        },
        {
            id:"2",
            name: "Diamond Aqua",
            description: "18k white gold & 0.23 TCW",
            price:3142.50,
            img:ProductTwo
        },
        {
            id:"3",
            name: "Gold Pink",
            description: "24k gold & 0.23 TCW",
            price:7341.50,
            img:ProductThree
        }
    ];
    return ( 
        <Layout
            page={"home"}
        >
            <Section
                title={"Best Sellers"} 
                subtitle={"Our best rings"}   
            >
                <Link to="/products">
                    <Button text={"See all products"} classBtn={"btn_black"}/>
                </Link>
                <div className={styles.cards_container}>
                    {products.map((product)=>(
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
            <Section
                id={"faq"}
                title={"FAQ"} 
                subtitle={"Got a question? Check this out!"}   
            >
                <FAQ/>
            </Section>
            <Section
                id={"contact"}
                title={"Contact"} 
                subtitle={"Let’s get in touch, send us an email!"}
            >
                <Contact/>
            </Section>
            <Outlet/>
        </Layout> 
    );
}

export default Home;