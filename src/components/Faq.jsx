import "./Faq.css";

export default function Faq() {
    return (
        <div className="faq-page">
            <div className="faq-container">
                <h1>Frequently Asked Questions</h1>
                <p className="faq-subtitle">Everything you need to know about our loan services</p>
                <div className="faq-list">
                    <details className="faq-item">
                        <summary>How fast can I get approved?</summary>
                        <p>We offer a 30-day return policy on all products. If you're not satisfied with your purchase, please contact our customer support team for assistance.</p>
                    </details>
                    <details className="faq-item">
                        <summary>Do you check credit history?</summary>
                        <p>Yes, we perform a credit check as part of our loan application process. This helps us assess your creditworthiness and determine the terms of your loan.</p>
                    </details>
                    <details className="faq-item">
                        <summary>What documents do I need to provide?</summary>
                        <p>To apply for a loan, you will typically need to provide identification documents, proof of income, and bank statements. Please refer to our loan application guidelines for a complete list of required documents.</p>
                    </details>
                    <details className="faq-item">
                        <summary>How can I contact customer support?</summary>
                        <p>You can reach our customer support team via email at support@company.com or through our contact form.</p>    
                    </details>
                    <details className="faq-item">
                        <summary>What payment methods do you accept?</summary>
                        <p>We accept various payment methods, including credit/debit cards, PayPal, and bank transfers. Please refer to our payment policy for more information.</p>
                    </details>
                </div>
            </div>
        </div>
    );
}