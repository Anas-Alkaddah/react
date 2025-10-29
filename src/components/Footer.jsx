import '../index.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer-modern">
      <div className="footer-grid">
        <div className="footer-col">
          <h4 className="footer-heading">Event & Bootcamp</h4>
          <ul className="footer-list">
            <li>Web Development</li>
            <li>Mobile Development</li>
            <li>UI Design</li>
            <li>UI Research</li>
            <li>Presentation</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">About Owlearn</h4>
          <ul className="footer-list">
            <li>Adminission Info</li>
            <li>Article</li>
            <li>Group & Referral Program</li>
            <li>Careers</li>
          </ul>
        </div>
        <div className="footer-col">
          <h4 className="footer-heading">Contact</h4>
          <div className="footer-contact">
            <a href="mailto:support@edtech.com" className="footer-link-accent">support@edtech.com</a>
            <a href="tel:+6285923935983" className="footer-link-accent">(+62) 85923935983</a>
            <p className="footer-desc">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
            <div className="footer-icons">
              <a href="#" aria-label="Instagram"><FaInstagram /></a>
              <a href="#" aria-label="Twitter"><FaTwitter /></a>
              <a href="#" aria-label="LinkedIn"><FaLinkedin /></a>
              <a href="#" aria-label="YouTube"><FaYoutube /></a>
              <a href="#" aria-label="Facebook"><FaFacebook /></a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;