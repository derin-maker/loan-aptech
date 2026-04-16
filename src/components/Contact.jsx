import "./Contact.css";

 function Contact() {
  return (
    <div className="contact-page">
      <div className="contact-container">
        <h1>Contact Us</h1>
        <p>We're Here to help! Reach out anytime.</p>
        <div className="contact-info">
          <div className="info-item">
            <p>
              <strong>Email:</strong> support@loanaptech.com
            </p>
            <p>
              <strong>Phone:</strong> +1(555)123-4567
            </p>
            <p>
              <strong>Hours:</strong> Mon-Fri 9AM-6PM EST
            </p>
          </div>
        </div>
        <div className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message"></textarea>
          <button>Send Message</button>
        </div>
      </div>
    </div>
  );
}

export default Contact;