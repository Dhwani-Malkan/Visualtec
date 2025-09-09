import { FaWhatsapp, FaInstagram, FaPinterest, FaLinkedin, FaBehance } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div><img src="./assets/logo.svg" alt="VIZUALTEC Logo" className="footer-logo" /></div>
      <hr/>
      <div className="footer-container">
        {/* Address & Logo */}
        
        <div className="footer-section">
          <h2 className="footer-title">Address</h2>
          <p>Mumbai, Maharashtra</p>
          <p>Mumbai, Maharashtra</p>
          <p>Mumbai, Maharashtra</p>
        </div>

        {/* Quick Links */}
        {/* <div className="footer-section">
          <h2 className="footer-title">Quick Links</h2>
          <ul>
            <li><a href="#">Home page</a></li>
            <li><a href="#">Our projects</a></li>
            <li><a href="#">About us</a></li>
            <li><a href="#">Services</a></li>
          </ul>
        </div> */}

        {/* Contact Info */}
        <div className="footer-section right">
          <h2 className="footer-title">Contact No.</h2>
          <p>+91-8291451582</p>
          <p>+91-9029006455</p>

          <h2 className="footer-title">Email</h2>
          <p>vizualtec@gmail.com</p>
        </div>
      </div>

      {/* Social Media */}
      <div className="footer-social">
        <p>Follow us on</p>
        <div className="footer-icons">
          <a href="#"><FaWhatsapp /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaPinterest /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaBehance /></a>
        </div>
      </div>
<hr/>
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          ©2025 All rights reserved. <a href="#">Privacy Policy</a>
        </p>
      </div>
    </footer>
  );
}
