
import React from "react";
import "./Footerr.css"; // Import the external CSS file

export default function Footerr() {
  return (
    <div>
      <hr />
      <footer className="footer-container">
        <div className="footer-content">
          
          {/* Quick Links Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Quick Links</h3>
            <ul className="footer-links">
              <li><a href="#">Terms of Service</a></li>
              <li><a href="#">Privacy Policy</a></li>
            </ul>
          </div>

          {/* Contact Information Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Contact Us</h3>
            <p>Email: support@website.com</p>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Address: 123 Main Street, City, Country</p>
          </div>

          {/* Social Media Section */}
          <div className="footer-section">
            <h3 className="footer-heading">Follow Us</h3>
            <div className="social-icons">
              <a href="#"><i className="ri-facebook-fill"></i></a>
              <a href="#"><i className="ri-twitter-fill"></i></a>
              <a href="#"><i className="ri-instagram-fill"></i></a>
              <a href="#"><i className="ri-linkedin-fill"></i></a>
            </div>
          </div>

        </div>

        {/* Bottom Copyright Section */}
        <div className="footer-bottom">
          © 2025 YourWebsiteName. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
