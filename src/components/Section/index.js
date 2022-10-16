import styles from './Section.module.css';
function Section({title,subtitle, children,id}) {
    return ( 
        <section id={id} className={`${title==="Contact"?styles.section+" bg-purple-transparent py-20":styles.section}`}>
            <h2 className={styles.title}>{title}</h2>
            <p className={styles.subtitle}>{subtitle}</p>
            {children}
        </section> 
    );
}

export default Section;