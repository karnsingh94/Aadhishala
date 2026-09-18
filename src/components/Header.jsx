import { Menu, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navItems } from '../data/siteData.js';
import { navigate } from '../utils.js';

function navButtonClass(isActive) {
  return isActive ? 'active' : '';
}

export default function Header({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    function closeOnResize() {
      if (desktop.matches) setIsMenuOpen(false);
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape' && headerRef.current?.querySelector('.mobile-open')) {
        setIsMenuOpen(false);
        menuRef.current?.focus();
      }
    }
    function closeOutside(event) {
      if (!headerRef.current?.contains(event.target)) setIsMenuOpen(false);
    }
    function closeOnNavigation() { setIsMenuOpen(false); }
    desktop.addEventListener('change', closeOnResize);
    document.addEventListener('keydown', closeOnEscape);
    document.addEventListener('pointerdown', closeOutside);
    window.addEventListener('popstate', closeOnNavigation);
    return () => {
      desktop.removeEventListener('change', closeOnResize);
      document.removeEventListener('keydown', closeOnEscape);
      document.removeEventListener('pointerdown', closeOutside);
      window.removeEventListener('popstate', closeOnNavigation);
    };
  }, []);

  function goTo(path) {
    navigate(path);
    setIsMenuOpen(false);
  }

  return (
    <>
      <header className="site-header" ref={headerRef}>
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
          id="primary-navigation"
          aria-label="Main navigation"
          className={`nav ${isMenuOpen ? 'mobile-open' : ''}`}
        >
          {navItems.map((item) => (
            <button
              key={item.path}
              className={navButtonClass(page === item.path)}
              aria-current={page === item.path ? 'page' : undefined}
              type="button"
              onClick={() => goTo(item.path)}
            >
              {item.label}
            </button>
          ))}

          <button
            className={`demo-link ${page === '/contact' ? 'active' : ''}`}
            type="button"
            aria-current={page === '/contact' ? 'page' : undefined}
            onClick={() => goTo('/contact')}
          >
            Book Demo
          </button>

          <button
            className="demo-link"
            type="button"
            onClick={() => window.open('https://api.aadishala.com/', '_blank', 'noopener,noreferrer')}
          >
            Login
          </button>
        </nav>

        <button
          className="menu-btn"
          type="button"
          ref={menuRef}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
          aria-expanded={isMenuOpen}
          aria-controls="primary-navigation"
          onClick={() => setIsMenuOpen((current) => !current)}
        >
          {isMenuOpen ? <X /> : <Menu />}
        </button>
      </header>
    </>
  );
}
