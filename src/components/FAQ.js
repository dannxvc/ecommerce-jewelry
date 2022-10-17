import styles from './FAQ.module.css';
function FAQ() {
    let faqItems = [
        {
            question:"How much is the shipping?",
            answer: "All over Peru it's 1O dollars"
        },
        {
            question:"How much is the shipping??",
            answer: "All over Peru it's 1O dollars"
        },
        {
            question:"How much is the shipping???",
            answer: "All over Peru it's 1O dollars"
        },
        {
            question:"How much is the shipping",
            answer: "All over Peru it's 1O dollars"
        },
        {
            question:"How much is the shippin",
            answer: "All over Peru it's 1O dollars"
        }
    ];
    return ( 
        <div className={styles.faq_container}>
        {faqItems.map(item=>(
            <details key={item.question} className={styles.faq_item}>
                    <summary className={styles.faq_question}>
                        {item.question}
                    </summary>
                    <div className={styles.faq_answer_container}>
                        <p className={styles.faq_answer}>
                            {item.answer}
                        </p>  
                    </div>
            </details>
        ))}
        </div>
    );
}

export default FAQ;