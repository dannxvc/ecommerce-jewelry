import { default as RingHeader } from '../img/products/ring-white-silver.png';
import { default as Background } from '../img/background.png';
import styles from './Layout.module.css';
import Footer from './Footer';
import NavBar from './NavBar';
function Layout({children, page}) {
    return ( 
        <>
        <header>
            <NavBar></NavBar>
            {page==="home"&&
            <>
                <div className={styles.hero}>
                    <h1 className={styles.h1}>
                        <span className='text-purple'>Best </span>  
                        Quality
                        <span className='text-orange'> Rings </span>
                    </h1>
                    <img className={styles.img_header} src={RingHeader} alt="Diamond Engagement"/>
                </div>
                <img className={styles.img_bg} src={Background} alt="Diamond Engagement"/>
            </>
            }
        </header>
        <main>
            {children}
        </main>
        <Footer/>
        </>
     );
}

export default Layout;