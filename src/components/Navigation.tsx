import { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import logo from '@/assets/logo.jpg';

const Navigation = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { to: '/', label: 'Home' },
    { to: '/about', label: 'About' },
    { to: '/gallery', label: 'Gallery' },
    { to: '/packages', label: 'Packages' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? 'bg-background/95 backdrop-blur-md shadow-lg' : 'bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <Link to="/" className="flex items-center space-x-3">
            <img src={logo} alt="Gift of Memories" className="h-12 w-12 rounded-full object-cover" />
            <span className="text-xl font-bold text-foreground">
              {["G", "i", "f", "t", " ", "o", "f", " ", "M", "e", "m", "o", "r", "i", "e", "s"].map((letter, index) => (
                <span
                  key={index}
                  className="inline-block hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300 cursor-default"
                >
                  {letter === " " ? "\u00A0" : letter}
                </span>
              ))}
            </span>
          </Link>

          <div className="hidden md:flex items-center space-x-8">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`text-sm font-medium ${
                  location.pathname === link.to ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </Link>
            ))}
            <Button variant="default" asChild>
              <Link to="/contact">Book a Session</Link>
            </Button>
          </div>

          <button
            className="md:hidden text-foreground"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {isMobileMenuOpen && (
          <div className="md:hidden mt-4 pb-4 space-y-4 animate-fade-in">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsMobileMenuOpen(false)}
                className={`block py-2 text-sm font-medium ${
                  location.pathname === link.to ? 'text-primary' : 'text-foreground'
                }`}
              >
                {link.label.split('').map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block hover:text-primary hover:scale-110 hover:-translate-y-1 transition-all duration-300"
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </Link>
            ))}
            <Button variant="default" asChild className="w-full">
              <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)}>
                Book a Session
              </Link>
            </Button>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navigation;
