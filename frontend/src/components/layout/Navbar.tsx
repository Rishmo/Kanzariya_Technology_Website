import { useState, useEffect } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Globe, Menu, X } from 'lucide-react';
import NavDropdown from './NavDropdown';
import { navItems } from '../../data/navigationData';
import { useTranslation } from 'react-i18next';

interface NavbarProps {
  scrolled: boolean;
}

const Navbar = ({ scrolled }: NavbarProps) => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const { i18n } = useTranslation();
  const [currentLanguage, setCurrentLanguage] = useState('en');

  const languages = [
    { code: 'en', name: 'English' },
    { code: 'es', name: 'Español' },
    { code: 'fr', name: 'Français' },
  ];

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : 'auto';

    const handleResize = () => {
      if (window.innerWidth >= 1024 && mobileMenuOpen) {
        setMobileMenuOpen(false);
      }
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, [mobileMenuOpen]);

  const handleLanguageChange = (langCode: string) => {
    i18n.changeLanguage(langCode);
    setCurrentLanguage(langCode);
  };

  const handleDropdownToggle = (key: string) => {
    setActiveDropdown(activeDropdown === key ? null : key);
  };

  const closeDropdowns = () => setActiveDropdown(null);
  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
    closeDropdowns();
  };

  const filteredNavItems = navItems.filter(item => item.key !== 'dashboard');

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-white text-primary-900 shadow-md py-2' : 'bg-transparent text-white py-4'
      }`}
    >
      <div className="container-custom">
        <div className="flex items-center justify-between h-16">
          <Link to="/" className="flex-shrink-0" onClick={closeDropdowns}>
            <div className="flex items-center">
              <span className={`ml-2 text-xl font-bold ${scrolled ? 'text-primary-900' : 'text-white'}`}>
                Kanzariya Technology
              </span>
            </div>
          </Link>

          {/* Desktop Navbar */}
          <nav className="hidden lg:flex lg:items-center lg:space-x-8">
            {filteredNavItems.map((item) => (
              <div
                key={item.key}
                className="relative"
                onMouseEnter={() => handleDropdownToggle(item.key)}
                onMouseLeave={closeDropdowns}
              >
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `navbar-link ${isActive ? 'navbar-active' : ''} ${
                      scrolled ? 'text-primary-800' : 'text-white'
                    }`
                  }
                >
                  {item.label}
                </NavLink>
                {item.dropdown && activeDropdown === item.key && (
                  <NavDropdown items={item.dropdown} />
                )}
              </div>
            ))}
          </nav>

          <div className="flex items-center space-x-4">
            {/* ✅ Become a Partner - Smaller text */}
            <a
              href="/partner"
              target="_blank"
              rel="noopener noreferrer"
              className={`hidden lg:inline-flex items-center px-3 py-1.5 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? 'bg-primary-100 text-primary-900 hover:bg-primary-200'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Become a Partner
            </a>

            <Link
              to="/login"
              className={`hidden sm:inline-flex items-center px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                scrolled
                  ? 'bg-primary-600 text-white hover:bg-primary-700'
                  : 'bg-white/10 text-white hover:bg-white/20'
              }`}
            >
              Sign In
            </Link>

            <div className="relative">
              <button
                aria-label="Language"
                className={`hidden sm:flex p-2 rounded-full transition-colors ${
                  scrolled ? 'hover:bg-gray-100 text-primary-800' : 'hover:bg-white/10 text-white'
                }`}
                onClick={() => handleDropdownToggle('language')}
              >
                <Globe className="h-5 w-5" />
              </button>
              {activeDropdown === 'language' && (
                <div className="absolute right-0 mt-2 w-48 rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5">
                  <div className="py-1">
                    {languages.map((lang) => (
                      <button
                        key={lang.code}
                        onClick={() => handleLanguageChange(lang.code)}
                        className={`block px-4 py-2 text-sm w-full text-left ${
                          currentLanguage === lang.code
                            ? 'bg-gray-100 text-primary-900'
                            : 'text-gray-700 hover:bg-gray-50'
                        }`}
                      >
                        {lang.name}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>

            <button
              aria-label="Menu"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className={`lg:hidden p-2 rounded-full transition-colors ${
                scrolled ? 'hover:bg-gray-100 text-primary-800' : 'hover:bg-white/10 text-white'
              }`}
            >
              {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white absolute top-full left-0 right-0 h-[calc(100vh-4rem)] overflow-y-auto">
          <div className="px-4 py-6 space-y-4">
            {filteredNavItems.map((item) => (
              <div key={item.key} className="border-b border-gray-200 pb-4">
                <div className="flex justify-between items-center">
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `text-lg font-medium ${
                        isActive ? 'text-accent-500' : 'text-primary-900'
                      }`
                    }
                    onClick={closeMobileMenu}
                  >
                    {item.label}
                  </NavLink>
                  {item.dropdown && (
                    <button
                      className="p-2"
                      onClick={() => handleDropdownToggle(item.key)}
                      aria-expanded={activeDropdown === item.key}
                    >
                      {activeDropdown === item.key ? (
                        <X className="h-5 w-5 text-gray-500" />
                      ) : (
                        <Plus className="h-5 w-5 text-gray-500" />
                      )}
                    </button>
                  )}
                </div>
                {item.dropdown && activeDropdown === item.key && (
                  <div className="mt-3 pl-4 space-y-3">
                    {item.dropdown.map((subItem) => (
                      <NavLink
                        key={subItem.key}
                        to={subItem.path}
                        className={({ isActive }) =>
                          `block text-base ${
                            isActive ? 'text-accent-500' : 'text-gray-700'
                          }`
                        }
                        onClick={closeMobileMenu}
                      >
                        {subItem.label}
                      </NavLink>
                    ))}
                  </div>
                )}
              </div>
            ))}

            {/* ✅ Become a Partner - Smaller text */}
            <div className="border-b border-gray-200 pb-4">
              <a
                href="/partner"
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-primary-900 block"
                onClick={closeMobileMenu}
              >
                Become a Partner
              </a>
            </div>

            {/* Sign In */}
            <div className="pt-4">
              <Link
                to="/login"
                className="btn-primary w-full justify-center"
                onClick={closeMobileMenu}
              >
                Sign In
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
};

const Plus = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

export default Navbar;
