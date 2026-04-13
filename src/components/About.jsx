import React from "react";
import "./About.css";

function About() {
  return (
    <div className="about-page">
      <div className="about-container">
        <h1>About Us</h1>
        <p>We are a trusted financial platform dedicated to providing excellent services to our customers.</p>
        <div className="features">
            <div className="feature">
                <h3>Fast Approval</h3>
                <p>Get your loan approved quickly with our streamlined process.</p>
            </div>
            <div className="feature">
                <h3>No Hidden Fees</h3>
                <p>100% free to apply - no hidden costs.</p>
            </div>
            <div className="feature">
                <h3>Secure & Private</h3>
                <p>Your data is encrypted and never shared</p>
            </div>
        </div>
      </div>
    </div>
  );
}

export default About;