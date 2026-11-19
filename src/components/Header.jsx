import { Building2, ChevronDown, Landmark, Menu, School, X } from 'lucide-react';
import { useEffect, useRef, useState } from 'react';
import { navItems, panelItems } from '../data/siteData.js';
import { navigate } from '../utils.js';

function navButtonClass(isActive) {
  return isActive ? 'active' : '';
}

export default function Header({ page }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isPanelsHovered, setIsPanelsHovered] = useState(false);
  const [isPanelsOpen, setIsPanelsOpen] = useState(false);
  const [isMobilePanelsOpen, setIsMobilePanelsOpen] = useState(true);

  const headerRef = useRef(null);
  const menuRef = useRef(null);

  const isPanelActive =
    page === '/school-erp' ||
    page === '/college-erp' ||
    page === '/university-erp';

  useEffect(() => {
    const desktop = window.matchMedia('(min-width: 1280px)');
    function closeOnResize() {
      if (desktop.matches) setIsMenuOpen(false);
    }
    function closeOnEscape(event) {
      if (event.key === 'Escape') {
        setIsMenuOpen(false);
        setIsPanelsOpen(false);
        setIsPanelsHovered(false);
        menuRef.current?.focus();
      }
    }
    function closeOutside(event) {
      if (!headerRef.current?.contains(event.target)) {
        setIsMenuOpen(false);
        setIsPanelsOpen(false);
        setIsPanelsHovered(false);
      }
    }
    function closeOnNavigation() {
      setIsMenuOpen(false);
      setIsPanelsOpen(false);
      setIsPanelsHovered(false);
    }
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
    setIsPanelsOpen(false);
    setIsPanelsHovered(false);
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
          {/* Home button */}
          <button
            className={navButtonClass(page === '/')}
            aria-current={page === '/' ? 'page' : undefined}
            type="button"
            onClick={() => goTo('/')}
          >
            Home
          </button>

          {/* Desktop Panels Hover Dropdown */}
          <div
            className="hidden xl:block relative"
            onMouseEnter={() => setIsPanelsHovered(true)}
            onMouseLeave={() => setIsPanelsHovered(false)}
          >
            <button
              type="button"
              className={`inline-flex items-center gap-1.5 ${navButtonClass(isPanelActive)}`}
              onClick={() => setIsPanelsOpen((current) => !current)}
              aria-expanded={isPanelsHovered || isPanelsOpen}
              aria-haspopup="true"
            >
              <span>Panels</span>
              <ChevronDown
                size={16}
                className={`transition-transform duration-200 ${
                  isPanelsHovered || isPanelsOpen ? 'rotate-180 text-school-700' : ''
                }`}
              />
            </button>

            {/* Dropdown Card */}
            <div
              className={`absolute left-0 top-full pt-2 transition-all duration-200 z-50 ${
                isPanelsHovered || isPanelsOpen
                  ? 'opacity-100 pointer-events-auto translate-y-0 visible'
                  : 'opacity-0 pointer-events-none -translate-y-2 invisible'
              }`}
            >
              <div className="w-[330px] rounded-2xl border border-school-100 bg-white p-3 shadow-2xl ring-1 ring-slate-900/5 backdrop-blur-lg">
                <div className="px-3 py-2 border-b border-slate-100">
                  <p className="text-[11px] font-black uppercase tracking-wider text-school-700">
                    Institutional ERP Panels
                  </p>
                </div>

                <div className="mt-2 space-y-1">
                  {panelItems.map((panel) => {
                    const isItemActive = page === panel.path;
                    return (
                      <button
                        key={panel.path}
                        type="button"
                        onClick={() => goTo(panel.path)}
                        className={`w-full text-left rounded-xl p-2.5 transition flex items-start gap-3 ${
                          isItemActive
                            ? 'bg-school-50 text-school-700'
                            : 'hover:bg-slate-50 text-slate-800'
                        }`}
                      >
                        <div className="mt-0.5 grid h-9 w-9 shrink-0 place-items-center rounded-xl bg-school-100 text-school-700">
                          {panel.label === 'School ERP' && <School size={18} />}
                          {panel.label === 'College ERP' && <Building2 size={18} />}
                          {panel.label === 'University ERP' && <Landmark size={18} />}
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center justify-between">
                            <span className="text-sm font-bold text-slate-900">
                              {panel.label}
                            </span>
                            <span className="text-[10px] font-black uppercase text-school-600 bg-school-50 px-2 py-0.5 rounded">
                              {panel.badge}
                            </span>
                          </div>
                          <p className="mt-0.5 text-xs text-slate-500 leading-snug line-clamp-1">
                            {panel.tagline}
                          </p>
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Panels Accordion */}
          <div className="block xl:hidden w-full">
            <button
              type="button"
              className={`w-full flex items-center justify-between ${navButtonClass(isPanelActive)}`}
              onClick={() => setIsMobilePanelsOpen((current) => !current)}
            >
              <span>Panels</span>
              <ChevronDown
                size={18}
                className={`transition-transform duration-200 ${
                  isMobilePanelsOpen ? 'rotate-180 text-school-700' : ''
                }`}
              />
            </button>

            {isMobilePanelsOpen && (
              <div className="pl-3 pr-1 py-1.5 space-y-1 bg-slate-50/80 rounded-xl mt-1 border border-school-100">
                {panelItems.map((panel) => {
                  const isItemActive = page === panel.path;
                  return (
                    <button
                      key={panel.path}
                      type="button"
                      onClick={() => goTo(panel.path)}
                      className={`w-full text-left py-2.5 px-3 rounded-lg text-sm font-bold transition flex items-center justify-between ${
                        isItemActive
                          ? 'bg-school-100 text-school-700'
                          : 'text-slate-700 hover:text-school-700 hover:bg-white'
                      }`}
                    >
                      <div className="flex items-center gap-2">
                        {panel.label === 'School ERP' && <School size={16} className="text-school-700" />}
                        {panel.label === 'College ERP' && <Building2 size={16} className="text-school-700" />}
                        {panel.label === 'University ERP' && <Landmark size={16} className="text-school-700" />}
                        <span>{panel.label}</span>
                      </div>
                      <span className="text-[10px] font-semibold text-slate-500">
                        {panel.badge}
                      </span>
                    </button>
                  );
                })}
              </div>
            )}
          </div>

          {/* Other Nav items: Solutions, Why Us, Onboarding, Reviews */}
          {navItems.filter((i) => i.path !== '/').map((item) => (
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
