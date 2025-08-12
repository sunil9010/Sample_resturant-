import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { ChefHat } from 'lucide-react';

const Header = ({ scrollToSection }) => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
      const sections = ['home', 'menu', 'specials', 'offers', 'about', 'reservation'];
      const scrollPosition = window.scrollY + 150;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const { offsetTop, offsetHeight } = element;
          if (scrollPosition >= offsetTop && scrollPosition < offsetTop + offsetHeight) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { id: 'home', label: 'Home' },
    { id: 'menu', label: 'Menu' },
    { id: 'specials', label: 'Chef\'s Special' },
    { id: 'offers', label: 'Offers' },
    { id: 'about', label: 'About Us' },
    { id: 'reservation', label: 'Reservation' },
  ];

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 nav-glass ${isScrolled ? 'scrolled' : ''}`}
    >
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="flex items-center space-x-3 cursor-pointer"
            onClick={() => scrollToSection('home')}
          >
            <ChefHat className="h-8 w-8 text-secondary" />
            <span className="font-serif text-2xl font-bold text-white">Ginza Spice</span>
          </motion.div>
          
          <nav className="hidden lg:flex items-center space-x-8">
            {navLinks.map((link) => (
              <button
                key={link.id}
                onClick={() => scrollToSection(link.id)}
                className="relative capitalize text-md font-medium transition-colors text-gray-300 hover:text-secondary"
              >
                {link.label}
                {activeSection === link.id && (
                  <motion.div
                    className="absolute -bottom-2 left-0 right-0 h-0.5 bg-secondary"
                    layoutId="underline"
                    transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                  />
                )}
              </button>
            ))}
          </nav>
        </div>
      </div>
    </motion.header>
  );
};

export default Header;