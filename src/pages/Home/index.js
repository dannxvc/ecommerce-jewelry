import Footer from '../../components/Footer';
import NavBar from '../../components/NavBar';
import Section from '../../components/Section';
function Home() {
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
            </Section>
            <Section
                title={"FAQ"} 
                subtitle={"Got a question? Check this out!"}   
            >
            </Section>
        </main>
        <Footer></Footer>
    </> 
    );
}

export default Home;