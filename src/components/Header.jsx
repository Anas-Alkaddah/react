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
            <li><Link to="/" onClick={() => setMobileMenuOpen(false)}>Home</Link></li>
            <li><Link to="/courses" onClick={() => setMobileMenuOpen(false)}>Courses</Link></li>
            <li><Link to="/about" onClick={() => setMobileMenuOpen(false)}>About</Link></li>
            <li><Link to="/testimonials" onClick={() => setMobileMenuOpen(false)}>Testimonials</Link></li>
            <li><Link to="/contact" onClick={() => setMobileMenuOpen(false)}>Contact</Link></li>
            {!user ? (
              <>
                <li><Link to="/login" className="cta-button" onClick={() => setMobileMenuOpen(false)}>Sign In</Link></li>
                <li><Link to="/signup" className="cta-button" onClick={() => setMobileMenuOpen(false)}>Create Account</Link></li>
              </>
            ) : (
              <>
                <li style={{ paddingInline: '8px', alignSelf: 'center' }}>Hello, {user.name}</li>
                <li><button onClick={() => { logout(); setMobileMenuOpen(false); }} className="favorite-button">Sign Out</button></li>
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