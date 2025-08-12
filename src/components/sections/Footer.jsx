import React from 'react';
import { motion } from 'framer-motion';
import { ChefHat, Phone, MapPin, Clock, Instagram, Facebook, Twitter } from 'lucide-react';

const Footer = ({ scrollToSection }) => {
    return (
        <footer className="bg-black text-white pt-16 pb-8 border-t-2 border-primary">
            <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12">
                    <div className="space-y-4">
                        <div className="flex items-center space-x-2">
                            <ChefHat className="h-8 w-8 text-secondary" />
                            <span className="font-serif text-2xl font-bold">Ginza Spice</span>
                        </div>
                        <p className="text-gray-400">An immersive culinary journey into the heart of India.</p>
                        <div className="flex space-x-4 pt-2">
                           <motion.a href="#" whileHover={{ scale: 1.2, color: '#FFD700' }} className="text-gray-400 transition-colors"><Instagram /></motion.a>
                           <motion.a href="#" whileHover={{ scale: 1.2, color: '#FFD700' }} className="text-gray-400 transition-colors"><Facebook /></motion.a>
                           <motion.a href="#" whileHover={{ scale: 1.2, color: '#FFD700' }} className="text-gray-400 transition-colors"><Twitter /></motion.a>
                        </div>
                    </div>
                    
                    <div className="space-y-4">
                        <h3 className="font-serif text-xl font-semibold text-secondary">Contact Us</h3>
                        <p className="flex items-start space-x-3 text-gray-300"><MapPin className="w-5 h-5 text-primary mt-1" /> <span>123 Ginza Avenue, Tokyo, Japan</span></p>
                        <p className="flex items-center space-x-3 text-gray-300"><Phone className="w-5 h-5 text-primary" /> <span>(123) 456-7890</span></p>
                         <p className="flex items-center space-x-3 text-gray-300"><Clock className="w-5 h-5 text-primary" /> <span>Mon-Sun: 12pm - 11pm</span></p>
                    </div>

                    <div className="space-y-4">
                        <h3 className="font-serif text-xl font-semibold text-secondary">Quick Links</h3>
                         <ul className="space-y-2">
                            <li><button onClick={() => scrollToSection('home')} className="text-gray-300 hover:text-secondary transition-colors">Home</button></li>
                            <li><button onClick={() => scrollToSection('menu')} className="text-gray-300 hover:text-secondary transition-colors">Menu</button></li>
                            <li><button onClick={() => scrollToSection('specials')} className="text-gray-300 hover:text-secondary transition-colors">Chef's Special</button></li>
                            <li><button onClick={() => scrollToSection('reservation')} className="text-gray-300 hover:text-secondary transition-colors">Reservation</button></li>
                        </ul>
                    </div>

                    <div>
                        <h3 className="font-serif text-xl font-semibold text-secondary mb-4">Location</h3>
                        <div className="rounded-lg overflow-hidden border-2 border-primary">
                            <iframe
                                src="https://www.openstreetmap.org/export/embed.html?bbox=139.76,35.67,139.77,35.68&layer=mapnik"
                                width="100%"
                                height="150"
                                style={{ border: 0 }}
                                allowFullScreen=""
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                            ></iframe>
                        </div>
                    </div>
                </div>
                <div className="border-t border-gray-800 mt-12 pt-8 text-center text-gray-500">
                    <p>&copy; 2024 Ginza Spice. Crafted with passion. All Rights Reserved.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;