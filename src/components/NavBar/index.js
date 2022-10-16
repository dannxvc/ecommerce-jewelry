import { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from'./Navbar.module.css';
function NavBar() {
    const [isNavBarOpen, setNavBarOpen] = useState(false);
    let navItems = [
        {
            title: "Home",
            type: "route",
            to:"/"  
        },
        {
            title: "Products",
            type: "route",
            to:"/products"  
        },
        {
            title: "FAQ",
            type: "landing",
            to:"/#faq"  
        },
        {
            title: "Contact",
            type: "landing",
            to:"/#contact"  
        }
    ];
    return ( 
        <nav className={styles.navbar}>
            <div>
                <p className="logo">RingRing</p>
            </div>
            <button 
                className={`${isNavBarOpen ? styles.hamburguer_open:styles.hamburguer}`}
                onClick={() => isNavBarOpen?setNavBarOpen(false):setNavBarOpen(true)}
            >
            </button>
            <ul className={`${isNavBarOpen ? styles.nav_items_open:styles.nav_items}`}>
            {navItems.map((item,i)=>(
                <li key={i}>
                    {item.type==="route"?
                    <Link to={item.to}>{item.title}</Link>
                    :
                    <a href={item.to}>{item.title}</a>
                    }
                    {isNavBarOpen&&<hr className={styles.separator}/>}
                </li>
            ))}
                <li>
                    <Link to={'/cart'}>
                        <svg className="icon" id="Flat" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 256 256">
                            <path d="M215.09766,146.50439l13.09082-72A14.00071,14.00071,0,0,0,214.41406,58H45.00781L39.8252,29.49561A13.9931,13.9931,0,0,0,26.05078,18H8A6,6,0,0,0,8,30H26.05078a1.99827,1.99827,0,0,1,1.96777,1.64209L54.7207,178.50439a13.97554,13.97554,0,0,0,1.74512,4.65894A26.00856,26.00856,0,1,0,93.8916,190h76.2168A25.98882,25.98882,0,1,0,192,178H68.49512a1.99828,1.99828,0,0,1-1.96778-1.64209L63.18945,158H201.32324A13.9931,13.9931,0,0,0,215.09766,146.50439ZM86,204a14,14,0,1,1-14-14A14.01572,14.01572,0,0,1,86,204Zm120,0a14,14,0,1,1-14-14A14.01572,14.01572,0,0,1,206,204ZM47.18945,70H214.41406a2.00028,2.00028,0,0,1,1.96778,2.35791l-13.09082,72A1.99828,1.99828,0,0,1,201.32324,146H61.00781Z"/>
                        </svg>
                    </Link>
                </li>
            </ul>
        </nav> 
    );
}

export default NavBar