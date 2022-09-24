function Section({title,subtitle, children}) {
    return ( 
        <section>
            <h2>{title}</h2>
            <p>{subtitle}</p>
            {children}
        </section> 
    );
}

export default Section;