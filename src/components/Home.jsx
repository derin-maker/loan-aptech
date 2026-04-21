import React from "react";
import { Link } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div className="home-container">
      <section className="hero-section">
        <h1 className="hero-title">Welcome to the LoanAptech</h1>
        <p className="hero-subtitle">Get instant personal loans up to $50,000 with interest rates and no hidden fees.</p>
        <Link to="/apply" className="hero-cta-btn">
          Apply Now, It's Free
        </Link>
        <div className="features-grid">
          <div className="feature-card">
            <div className="feature-icon">Lightning Fast⚡</div>
            <h3>Lightning Fast Approval</h3>
            <p>We prioritize your financial security with robust encryption and compliance.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">Lightning Fast⚡</div>
            <h3>Lightning Fast Approval</h3>
            <p>We prioritize your financial security with robust encryption and compliance.</p>
          </div>

          <div className="feature-card">
            <div className="feature-icon">Lightning Fast⚡</div>
            <h3>Lightning Fast Approval</h3>
            <p>We prioritize your financial security with robust encryption and compliance.</p>
          </div>
        </div>
        <div className="home-links">
          <Link to="/status" className="home-link">Check Loan Status</Link>
          {'-'}
          <Link to="/dashboard" className="home-link">Go to Dashboard</Link>
        </div>
      </section>
    </div>
  );
}