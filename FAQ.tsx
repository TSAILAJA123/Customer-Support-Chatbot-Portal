import React, { useEffect, useState } from 'react';
import { fetchFAQs } from '../services/nlpService';

const FAQ: React.FC = () => {
    const [faqs, setFaqs] = useState([]);

    useEffect(() => {
        const getFAQs = async () => {
            const data = await fetchFAQs();
            setFaqs(data);
        };
        getFAQs();
    }, []);

    return (
        <div className="faq-container">
            <h2>Frequently Asked Questions</h2>
            <ul>
                {faqs.map((faq, index) => (
                    <li key={index}>
                        <strong>{faq.question}</strong>
                        <p>{faq.answer}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default FAQ;