import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Info, Image, Music, Mail, Menu, X } from 'lucide-react';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isNavbarVisible, setIsNavbarVisible] = useState(true); // State for controlling navbar visibility
  const [prevScrollPos, setPrevScrollPos] = useState(0);

  // Toggle menu visibility
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Handle scroll to hide/show navbar
  const handleScroll = () => {
    const currentScrollPos = window.pageYOffset;
    if (currentScrollPos > prevScrollPos) {
      setIsNavbarVisible(false); // Hide navbar when scrolling down
    } else {
      setIsNavbarVisible(true); // Show navbar when scrolling up
    }
    setPrevScrollPos(currentScrollPos);
  };

  // Add event listener for scroll
  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-white/20 backdrop-blur-sm shadow-lg p-4 z-50 transition-transform ${
        isNavbarVisible ? 'transform-none' : '-translate-y-full'
      }`}
      aria-label="Main Navigation"
    >
      <div className="max-w-4xl mx-auto flex justify-between items-center">
        {/* Logo or brand name (Links to the home page) */}
        <Link to="/" className="text-2xl font-bold text-purple-700" aria-label="Home">
          Neco Arc Zone
        </Link>

        {/* Hamburger Icon (Visible only on small screens) */}
        <button
          onClick={toggleMenu}
          className="block lg:hidden text-purple-700"
          aria-label="Toggle navigation menu"
        >
          {isMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Menu Links */}
        <div
          className={`lg:flex gap-8 items-center ${isMenuOpen ? 'block' : 'hidden'} lg:block`}
        >
          <Link
            to="/about"
            className="flex items-center gap-2 px-4 py-2 text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform"
            aria-label="About Neco Arc page"
          >
            <Info size={20} aria-hidden="true" />
            <span>About Neco Arc</span>
          </Link>

          {/* <Link
            to="/gallery-of-chaos"
            className="flex items-center gap-2 px-4 py-2 text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform"
            aria-label="Gallery of Chaos page"
          >
            <Image size={20} aria-hidden="true" />
            <span>Gallery of Chaos</span>
          </Link> */}

          <Link
            to="/soundtrack"
            className="flex items-center gap-2 px-4 py-2 text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform"
            aria-label="Soundtrack page"
          >
            <Music size={20} aria-hidden="true" />
            <span>Soundtrack</span>
          </Link>

          <Link
            to="/contact"
            className="flex items-center gap-2 px-4 py-2 text-purple-700 hover:text-purple-900 hover:scale-110 transition-transform"
            aria-label="Contact page"
          >
            <Mail size={20} aria-hidden="true" />
            <span>Contact</span>
          </Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
