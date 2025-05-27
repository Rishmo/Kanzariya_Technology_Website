import { Outlet } from 'react-router-dom';
import { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import SearchOverlay from './SearchOverlay';

const Layout = () => {
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const isScrolled = window.scrollY > 20;
      if (isScrolled !== scrolled) {
        setScrolled(isScrolled);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrolled]);

  const toggleSearch = () => {
    setIsSearchOpen(!isSearchOpen);
    // Prevent body scroll when search is open
    if (!isSearchOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'auto';
    }
  };

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar scrolled={scrolled} toggleSearch={toggleSearch} />
      <main className="flex-grow">
        <Outlet />
      </main>
      <Footer />
      {isSearchOpen && <SearchOverlay onClose={toggleSearch} />}
    </div>
  );
};

export default Layout;