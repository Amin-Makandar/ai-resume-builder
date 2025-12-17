import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="home-container">
      
      {/* Hero Section */}
      <section className="hero-section text-center">
        <h1>Build Your Professional Resume in Minutes</h1>
        <p>Interactive, AI-Powered, and Fully Customizable Resume Builder</p>
        <Link to="/builder">
          <button className="get-started-btn mt-3">Get Started 🚀</button>
        </Link>
      </section>

      {/* Features Section */}
      <section className="features-section container my-5">
        <h2 className="text-center mb-4">Why Choose AI Resume Builder?</h2>
        <div className="row text-center">
          <div className="col-md-4 feature-card">
            <i className="bi bi-lightning-charge-fill feature-icon"></i>
            <h5>Fast & Easy</h5>
            <p>Create your resume quickly with live preview and ready-to-download templates.</p>
          </div>
          <div className="col-md-4 feature-card">
            <i className="bi bi-robot feature-icon"></i>
            <h5>AI-Powered</h5>
            <p>Generate professional summaries and skill suggestions with AI.</p>
          </div>
          <div className="col-md-4 feature-card">
            <i className="bi bi-palette-fill feature-icon"></i>
            <h5>Customizable</h5>
            <p>Choose from multiple templates, colors, and layouts to match your style.</p>
          </div>
        </div>
      </section>

      {/* How It Works Section */}
      <section className="how-section container my-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row text-center">
          <div className="col-md-3 step-card">
            <div className="step-number">1</div>
            <h6>Fill Info</h6>
            <p>Enter your personal, education, experience, and skills details.</p>
          </div>
          <div className="col-md-3 step-card">
            <div className="step-number">2</div>
            <h6>Choose Template</h6>
            <p>Select a beautiful template that fits your style.</p>
          </div>
          <div className="col-md-3 step-card">
            <div className="step-number">3</div>
            <h6>Live Preview</h6>
            <p>See your resume in real-time while making changes.</p>
          </div>
          <div className="col-md-3 step-card">
            <div className="step-number">4</div>
            <h6>Download</h6>
            <p>Download your resume as PDF or DOCX instantly.</p>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="cta-section text-center my-5">
        <h2>Ready to Build Your Resume?</h2>
        <Link to="/builder">
          <button className="get-started-btn mt-3">Start Building Now 🚀</button>
        </Link>
      </section>

    </div>
  );
};

export default Home;
