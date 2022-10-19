import { Link } from 'react-router-dom';
import styles from './Modal.module.css';
function Modal({children,title,title_purple}) {
    return ( 
    <div className={styles.container}>
        <div className={styles.modal}>
            <h2 className={styles.title}>{title}<span className='text-purple'>{title_purple}</span></h2>
            <Link className={styles.close} to='/'><p>X</p></Link>
            {children}
        </div>
    </div> 
    );
}

export default Modal;