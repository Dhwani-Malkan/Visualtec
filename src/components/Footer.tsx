import { FaWhatsapp, FaInstagram, FaPinterest, FaLinkedin, FaBehance } from "react-icons/fa";
import "./Footer.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div><a href="#home"><img src="./assets/logo.svg" alt="VIZUALTEC Logo" className="footer-logo" /></a></div>
      <hr/>
      <div className="footer-container">
        {/* Address & Logo */}
        
        <div className="footer-section">
          <h2 className="footer-title">Address</h2>
          <p>Mumbai, Maharashtra</p>
          <p>Mumbai, Maharashtra</p>
          <p>Mumbai, Maharashtra</p>
        </div>

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
          <a href="https://wa.me/918291451582?text=Hi%20I%20want%20to%20know%20more!"><FaWhatsapp /></a>
          <a href="https://www.instagram.com/vizual.tec?igsh=azNjaTFpZG4xejZr"><FaInstagram /></a>
          <a href="#"><FaPinterest /></a>
          <a href="https://www.linkedin.com/in/ar-vishal-kokul-292a51145?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app"><FaLinkedin /></a>
          <a href="https://www.behance.net/vizual-tec"><FaBehance /></a>
        </div>
      </div>
<hr/>
      {/* Bottom Bar */}
      <div className="footer-bottom">
        <p>
          ©2025 All rights reserved. <br/>
          Designed by <a href="http://linkedin.com/in/dhwani-malkan-485209180"> <b>Dhwani Malkan</b></a>.
        </p>
      </div>
    </footer>
  );
}
