import React from "react";

const About = () => {
  return (
    <div className="about-container">

      {/* Hero Section */}
      <section className="about-hero text-center">
        <h1>About AI Resume Builder</h1>
        <p>Our mission is to help you create professional, interactive resumes in minutes using modern technology.</p>
      </section>

      {/* Features / Benefits */}
      <section className="about-features container my-5">
        <h2 className="text-center mb-4">Why Use Our Tool?</h2>
        <div className="row text-center">
          <div className="col-md-4 feature-card">
            <i className="bi bi-speedometer2 feature-icon"></i>
            <h5>Fast & Efficient</h5>
            <p>Build your resume quickly with easy-to-use forms and live preview.</p>
          </div>
          <div className="col-md-4 feature-card">
            <i className="bi bi-magic feature-icon"></i>
            <h5>AI-Powered</h5>
            <p>Generate professional summaries and skills suggestions with AI support.</p>
          </div>
          <div className="col-md-4 feature-card">
            <i className="bi bi-palette feature-icon"></i>
            <h5>Customizable</h5>
            <p>Choose templates, colors, and layouts that suit your style and career goals.</p>
          </div>
        </div>
      </section>

      {/* Team / Credits */}
      <section className="about-team container my-5 text-center">
        <h2 className="mb-4">Created By</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 team-card">
            {/* <img src="/assets/profile.png" alt="Amin Makandar" className="team-img" /> */}
            <h5>Amin Makandar</h5>
            <p>Full-Stack Developer | AI Resume Builder Creator</p>
          </div>
        </div>
      </section>

    </div>
  );
};

export default About;
