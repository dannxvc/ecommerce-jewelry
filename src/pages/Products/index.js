import Layout from '../../components/Layout/Layout';
import Section from '../../components/Section';

function Products() {
    return ( 
    <>
        <Layout
           textPurple={"All"}
           textBlack={"Our"}
           textOrange={"Rings"} 
        >
            <Section
                title={"Products"} 
                subtitle={"Choose you favorite ones!"}   
            >
                
            </Section>
        </Layout>
    </> 
    );
}

export default Products;