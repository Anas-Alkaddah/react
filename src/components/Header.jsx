import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';
import useTheme from '../hooks/useTheme';
import useUser from '../hooks/useUser';

import '../index.css';

function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { user, logout } = useUser();

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
        <button
          className="mobile-menu-toggle"
          onClick={toggleMobileMenu}
          aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
        <nav className={`nav ${mobileMenuOpen ? 'nav-open' : ''}`}>
          <ul className="nav-links">

            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>الرئيسية</Link></li>
            <li><Link to="/courses" onClick={() => setMobileMenuOpen(false)}>الدورات</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>من نحن</Link></li>
            <li><Link to="/testimonials" onClick={() => setMobileMenuOpen(false)}>آراء الطلاب</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>اتصل بنا</Link></li>
            {!user ? (
              <>
                <li><Link to="/login" className="cta-button" onClick={() => setMobileMenuOpen(false)}>تسجيل الدخول</Link></li>
                <li><Link to="/signup" className="cta-button" onClick={() => setMobileMenuOpen(false)}>انشاء حساب</Link></li>
              </>
            ) : (
              <>
                <li style={{ paddingInline: '8px', alignSelf: 'center' }}>مرحباً، {user.name}</li>
                <li><button onClick={() => { logout(); setMobileMenuOpen(false); }} className="favorite-button">تسجيل الخروج</button></li>
              </>
            )}
            <li>
              <button onClick={() => { toggleTheme(); setMobileMenuOpen(false); }} className="favorite-button" aria-label="Toggle theme">
                {theme === 'light' ? 'Dark' : 'Light'}
              </button>
            </li>
          </ul>
        </nav>



      </div>
    </header>
  );
}

export default Header;