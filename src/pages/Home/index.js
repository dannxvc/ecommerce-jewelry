import Card from '../../components/Card';
import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Button from '../../components/Button';
import Section from '../../components/Section';
import { default as ProductOne } from '../../img/products/ring-white-small-diamonds-silver.png';
import { default as ProductTwo } from '../../img/products/ring-green-small-silver.png';
import { default as ProductThree } from '../../img/products/ring-red-gold.png';
function Home() {
    const products = [
        {
            id:"1",
            title: "Diamond Engagement",
            description: "18k white gold & 0.23 TCW",
            price:"PEN 3,342,50",
            img:<img src={ProductOne} alt="Diamond Engagement"/>
        },
        {
            id:"2",
            title: "Diamond Aqua",
            description: "18k white gold & 0.23 TCW",
            price:"PEN 3,342,50",
            img:<img src={ProductTwo} alt="Diamond Engagement"/>
        },
        {
            id:"3",
            title: "Gold Pink",
            description: "24k gold & 0.23 TCW",
            price:"PEN 3,342,50",
            img:<img src={ProductThree} alt="Diamond Engagement"/>
        }
    ];
    return ( 
    <>
        <header>
            <NavBar></NavBar>
            <h1>Best quality Rings</h1> 
        </header>
        <main>
            <Section
                title={"Best Sellers"} 
                subtitle={"Our best rings"}   
            >
                <Button text={"See all products"}/>
                {products.map((product)=>(
                    <Card
                        key={product.id}
                        title={product.title}
                        subtitle={product.description}
                        price={product.price}
                        img={product.img}
                    />
                ))}
            </Section>
            <Section
                title={"FAQ"} 
                subtitle={"Got a question? Check this out!"}   
            >
            </Section>
        </main>
        <Footer/>
    </> 
    );
}

export default Home;