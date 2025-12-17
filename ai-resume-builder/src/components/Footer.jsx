import React from "react";


const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-content">
        <p>© 2025 Amin Makandar | AI Resume Builder</p>
        <div className="social-icons">
          <a href="https://github.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-github"></i>
          </a>
          <a href="https://linkedin.com/" target="_blank" rel="noopener noreferrer">
            <i className="bi bi-linkedin"></i>
          </a>
          <a href="mailto:aminmakandar25@gmail.com">
            <i className="bi bi-envelope"></i>
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
