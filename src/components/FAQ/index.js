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
        <div>
        {faqItems.map(item=>(
            <details key={item.question}>
                    <summary>
                        {item.question}
                    </summary>
                    <div>
                        <p>
                            {item.answer}
                        </p>  
                    </div>
            </details>
        ))}
        </div>
    );
}

export default FAQ;