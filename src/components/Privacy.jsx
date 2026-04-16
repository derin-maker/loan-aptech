import "./Privacy.css";

export default function Privacy() {
  return (
    <div className="privacy-page">
      <div className="privacy-container">
        <h1>Privacy Policy</h1>
        <p className="updated">Last updated: January 1, 2025</p>

        <section>
          <h2>1. Information We Collect</h2>
          <p>We collect information you provide directly to us when you apply for a loan or create an account, including:</p>
          <ul>
            <li>Full name, email address, and phone number</li>
            <li>Financial information such as income and credit history</li>
            <li>Government-issued identification details</li>
            <li>Employment and residential information</li>
          </ul>
        </section>

        <section>
          <h2>2. How We Use Your Information</h2>
          <p>We use the information we collect to process your loan application, verify your identity, and communicate with you about your account.</p>
          <p>We may also use your data to improve our services, prevent fraud, and comply with legal obligations.</p>
        </section>

        <section>
          <h2>3. Sharing of Information</h2>
          <p>We do not sell your personal information to third parties. We may share your data with:</p>
          <ul>
            <li>Credit bureaus and financial institutions for loan processing</li>
            <li>Service providers who assist in operating our platform</li>
            <li>Law enforcement when required by law</li>
          </ul>
        </section>

        <section>
          <h2>4. Data Security</h2>
          <p>We implement industry-standard security measures to protect your personal information from unauthorized access, disclosure, or loss.</p>
        </section>

        <section>
          <h2>5. Cookies</h2>
          <p>We use cookies to enhance your browsing experience and analyze site traffic. You may disable cookies in your browser settings, though some features may not function properly.</p>
        </section>

        <section>
          <h2>6. Your Rights</h2>
          <p>You have the right to access, correct, or delete your personal data at any time. To make a request, contact us at support@loanaptech.com.</p>
        </section>

        <section>
          <h2>7. Changes to This Policy</h2>
          <p>We may update this Privacy Policy from time to time. We will notify you of significant changes by email or through a notice on our website.</p>
        </section>

        <section>
          <h2>8. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please reach out to us at:</p>
          <ul>
            <li>Email: support@loanaptech.com</li>
            <li>Phone: +1 (555) 123-4567</li>
            <li>Hours: Mon-Fri, 9AM-6PM EST</li>
          </ul>
        </section>
      </div>
    </div>
  );
}