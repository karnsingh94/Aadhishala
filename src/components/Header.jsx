import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import { navItems } from '../data/siteData.js';
import { navigate } from '../utils.js';

function navButtonClass(isActive) {
  return isActive ? 'active' : '';
}

export default function Header({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  function goTo(path) {
    navigate(path);
    setIsMenuOpen(false);
  }

  return (
    <>
      <div className="top-ribbon">
        Aadishala - Smart ERP, LMS, fees, admissions, and parent app tools
      </div>

      <header className="site-header">
        <button
          className="logo-brand"
          type="button"
          onClick={() => goTo('/')}
          aria-label="Aadishala home"
        >
          <img
            src="/aadishala-logo-transparent.png"
            alt="Aadishala logo"
          />
          <span className="brand-text">Aadishala</span>
        </button>

        <nav
          className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}
        >
          {navItems.map((item) => (
            <button
              key={item.path}
              className={navButtonClass(page === item.path)}
              type="button"
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </button>
          ))}

          <button
            className={`demo-link ${page === '/contact' ? 'active' : ''}`}
            type="button"
            onClick={() => goTo('/contact')}
          >
            Book Demo
          </button>

          <button
            className="demo-link"
            type="button"
            onClick={() => window.open('https://api.aadishala.com/', '_blank')}
          >
            Login
          </button>
        </nav>

        <button
          className="menu-btn"
          type="button"
          aria-label="Toggle menu"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
