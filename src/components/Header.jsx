import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

import '../index.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 50;
      setScrolled(isScrolled);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className={`header ${scrolled ? 'scrolled' : ''}`}>
      <div className="header-content">
        <a href="#home" className="logo">TechEdu</a>
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">

            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>الرئيسية</Link></li>
            <li><Link to="/courses" onClick={() => setMobileMenuOpen(false)}>الدورات</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>من نحن</Link></li>
            <li><Link to="/testimonials" onClick={() => setMobileMenuOpen(false)}>آراء الطلاب</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</Link></li>
            <li><Link to="/login" className="cta-button">تسجيل الدخول</Link></li>
            <li><Link to="/signup" className="cta-button">انشاء حساب</Link></li>
          </ul>
        </nav>



      </div>
    </header>
  );
}

export default Header;