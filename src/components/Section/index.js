import styles from './styles.module.css';
function Section({title,subtitle, children}) {
    return ( 
        <section className={styles.section}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            {children}
        </section> 
    );
}

export default Section;