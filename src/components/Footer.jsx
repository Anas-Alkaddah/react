import '../index.css';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin, FaYoutube, FaHeart } from 'react-icons/fa';
function Footer() {
  return (

    <footer className="footer">
      <div className="footer-content">
        <h3>TechEdu</h3>
        <p>
          منصة التعلم الرقمي المتطورة في الشرق الأوسط، نساعدك على اكتساب المهارات
          التقنية المطلوبة والانطلاق في عالم التكنولوجيا بثقة وتميز
        </p>

        <div className="social-links">
          <a href="#" className="social-link" title="فيسبوك">
            <FaFacebook />
          </a>
          <a href="#" className="social-link" title="تويتر">
            <FaTwitter />
          </a>
          <a href="#" className="social-link" title="إنستغرام">
            <FaInstagram />
          </a>
          <a href="#" className="social-link" title="لينكد إن">
            <FaLinkedin />
          </a>
          <a href="#" className="social-link" title="يوتيوب">
            <FaYoutube />
          </a>
        </div>

        <div className="footer-bottom">
          <p>© 2025 TechEdu — جميع الحقوق محفوظة</p>
          <p>صُنع بـ <FaHeart className="heart-icon" /> في الجمهورية العربية السورية</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;