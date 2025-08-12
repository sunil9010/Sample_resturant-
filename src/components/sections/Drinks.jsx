import React from "react";
import { motion } from "framer-motion";

const drinks = [
  { name: "Royal Mango Lassi", image: "https://images.unsplash.com/photo-1627662386235-4659745f8dba?q=80&w=600" },
  { name: "Masala Chai Elixir", image: "https://images.unsplash.com/photo-1597318181409-cf64d0b544b2?q=80&w=600" },
  { name: "Sparkling Virgin Mojito", image: "https://images.unsplash.com/photo-1551538850-62a7a7914331?q=80&w=600" },
  { name: "Tangy Jaljeera", image: "https://images.unsplash.com/photo-1615994638299-63e383892a0a?q=80&w=600" },
  { name: "Sweet Rose Lassi", image: "https://images.unsplash.com/photo-1559841374-394459c31953?q=80&w=600" },
  { name: "Fresh Lime Fizz", image: "https://images.unsplash.com/photo-1622524807829-55013455534a?q=80&w=600" },
];

const Drinks = () => {
  return (


    <section id="drinks" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">
            Thirst Quenchers
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </motion.div>
        
        {/* Drinks Gallery */}
        <div
          className="flex overflow-x-auto space-x-8 pb-4 -mx-4 px-4 hide-scrollbar"
        >
          {drinks.map((drink, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="flex-shrink-0 w-64 group"
            >
              <div className="relative rounded-lg overflow-hidden p-1 border border-transparent group-hover:border-red-500 transition-all duration-300">
                
                {/* Image with Shine Effect */}
                <div className="relative overflow-hidden rounded-md">
                  <img
                    src={drink.image}
                    alt={drink.name}
                    className="w-full h-80 object-cover rounded-md transform group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/30" />
                  <div className="absolute -top-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                </div>

                {/* Drink Name */}
                <h3 className="absolute bottom-4 left-4 font-serif text-2xl font-bold text-white drop-shadow-lg">
                  {drink.name}
                </h3>
              </div>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Hide Scrollbar Style */}
      <style jsx>{`
        .hide-scrollbar {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
        .hide-scrollbar::-webkit-scrollbar {
          display: none;
        }
      `}</style>
    </section>
  );
};

export default Drinks;
