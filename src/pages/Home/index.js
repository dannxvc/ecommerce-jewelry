import Card from '../../components/Card';
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
import Layout from '../../components/Layout/Layout';
function Home() {

    const products = [
        {
            id:"1",
            title: "Diamond Engagement",
            description: "18k white gold & 0.23 TCW",
            price:"PEN 3,342,50",
            img:<img src={ProductOne} className="card_img" alt="Diamond Engagement"/>
        },
        {
            id:"2",
            title: "Diamond Aqua",
            description: "18k white gold & 0.23 TCW",
            price:"PEN 3,342,50",
            img:<img src={ProductTwo} className="card_img" alt="Diamond Engagement"/>
        },
        {
            id:"3",
            title: "Gold Pink",
            description: "24k gold & 0.23 TCW",
            price:"PEN 3,342,50",
            img:<img src={ProductThree} className="card_img" alt="Diamond Engagement"/>
        }
    ];
    return ( 
        <Layout
            textPurple={"Best"}
            textBlack={"Quality"}
            textOrange={"Rings"}
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
                        <Card
                            key={product.id}
                            title={product.title}
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