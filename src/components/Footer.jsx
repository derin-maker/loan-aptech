import React from "react";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-grid">
          <div className="footer-brand">
            <h2>LoanAptech</h2>
            <p>
              Your trusted partner for fast,
              <br /> transparent, and affordable loan
              <br /> solutions
            </p>
          </div>
          <div className="footer-links">
            <h3>Quick Links</h3>
            <ul>
              <li>
                <a href="#">Home</a>
              </li>
              <li>
                <a href="#">Loan Products</a>
              </li>
              <li>
                <a href="#">Apply Now</a>
              </li>
              <li>
                <a href="#">About Us</a>
              </li>
            </ul>
          </div>
          <div className="footer-links">
            <h3>Support</h3>
            <ul>
              <li>
                <a href="/contact">Contact Us</a>
              </li>
              <li>
                <a href="/faq">FAQs</a>
              </li>
              <li>
                <a href="/privacy">Privacy Policy</a>
              </li>
              <li>
                <a href="/terms">Terms of Service</a>
              </li>
            </ul>
          </div>
          <div className="footer-contact">
            <h3>Get in Touch</h3>
            <ul>
              <li>
                <a href="#">support@loanaptech.com</a>
              </li>
              <li>
                <a href="#">+1 (555) 123-4567</a>
              </li>
              <li>
                <a href="#">Mon-Fri: 9AM-6PM EST</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>© 2025 LoanAptech. All rights reserved.</p>
      </div>
    </footer>
  );
}
