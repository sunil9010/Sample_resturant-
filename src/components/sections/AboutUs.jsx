import React from 'react';
import { motion } from 'framer-motion';

const AboutUs = () => {
  return (
    <section id="about" className="py-24 bg-black relative overflow-hidden">
      {/* Decorative Borders */}
      <div className="absolute top-0 left-0 w-1/4 h-full border-r-2 border-red-500/20" />
      <div className="absolute top-0 right-0 w-1/4 h-full border-l-2 border-red-500/20" />
      
      <div className="max-w-screen-lg mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="font-serif text-5xl font-bold text-white mb-6">The Ginza Spice Experience</h2>
            <div className="w-20 h-1 bg-red-500 mb-8"></div>
            <p className="text-gray-300 leading-relaxed mb-4">
              At <span className="text-red-400 font-semibold">Ginza Spice</span>, we blend timeless Indian culinary traditions with a contemporary dining experience.  
              Our journey began with a passion for crafting dishes that celebrate India’s vibrant spices, colors, and aromas.
            </p>
            <p className="text-gray-300 leading-relaxed mb-4">
              From the smoky tandoors of Punjab to the delicate curries of the South, every recipe is prepared with handpicked ingredients, freshly ground spices, 
              and the love that transforms a meal into a memory.
            </p>
            <p className="text-gray-300 leading-relaxed">
              Step in, indulge, and let your senses travel through the heart of India — one plate at a time.
            </p>
          </motion.div>
          
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <img 
              src="https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=800" 
              alt="Indian Cuisine" 
              className="rounded-lg shadow-2xl w-full object-cover border-4 border-red-600"
            />
            <div className="absolute -bottom-4 -right-4 w-full h-full border-4 border-yellow-500 rounded-lg -z-10" />
            <div className="absolute top-1/2 left-1/2 w-40 h-40 steam-effect" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
