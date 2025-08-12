import React from "react";
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const featuredItems = [
  {
    id: 1,
    name: "Grilled Beef with Potatoes",
    description: "Meat, Potatoes, Rice, Tomato",
    image:
      "https://images.unsplash.com/photo-1600891964599-f61ba0e24092?q=80&w=300",
  },
  {
    id: 2,
    name: "Paneer Tikka Masala",
    description: "Paneer, Yogurt, Tomato, Spices",
    image:
      "https://images.unsplash.com/photo-1626076022616-8e6b7a5cb582?q=80&w=300",
  },
  {
    id: 3,
    name: "Chicken Biryani",
    description: "Rice, Chicken, Saffron, Herbs",
    image:
      "https://images.unsplash.com/photo-1622445275641-b7b8d9e85bb3?q=80&w=300",
  },
  {
    id: 4,
    name: "Tandoori Lamb Skewers",
    description: "Lamb, Spices, Mint Chutney",
    image:
      "https://images.unsplash.com/photo-1606755962773-c48f2d090d94?q=80&w=300",
  },
];

const Hero = () => {
  return (
    <section
      id="home"
      className="relative h-screen overflow-hidden bg-background"
    >
      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute z-0 w-auto min-w-full min-h-full max-w-none object-cover"
      >
        <source
          src="https://b.zmtcdn.com/data/file_assets/2627bbed9d6c068e50d2aadcca11ddbb1743095925.mp4"
          type="video/mp4"
        />
        Your browser does not support the video tag.
      </video>

      {/* Darker Overlay */}
      <div className="absolute inset-0 bg-black/50 z-[1]" /> 
      <div className="absolute inset-0 steam-effect z-[2]" />

      {/* Main Hero Content */}
      <div className="relative z-10 h-full flex flex-col justify-center items-center text-center px-4">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, ease: "easeOut" }}
          className="max-w-4xl"
        >
          <h1
            className="font-extrabold text-5xl md:text-7xl tracking-tight text-white drop-shadow-[0_4px_15px_rgba(0,0,0,0.8)]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Savor Authentic Indian Flavors
          </h1>

          <p
            className="text-lg md:text-2xl text-gray-200 mt-6 mb-10 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            From the fiery streets of Delhi to the royal kitchens of Hyderabad —
            every bite tells a story of tradition, spice, and passion.
          </p>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.5 }}
        >
          <Button
            onClick={() => scrollToSection('menu')}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-10 py-7 text-xl rounded-xl shadow-lg shadow-red-800/50 transition-transform hover:scale-105"
          >
            Explore Our Menu
          </Button>
        </motion.div>

        {/* Featured Items at Bottom */}
        {/* <div className="absolute bottom-0 w-full pb-8">
         
          <hr className="border-t-2 border-gray w-3/4 mx-auto mb-6 opacity-80" />

          
          <div className="max-w-6xl mx-auto px-6">
            
            <div className="hidden md:grid grid-cols-4 gap-6">
              {featuredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="text-center"
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-red-500 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                </motion.div>
              ))}
            </div>

           
            <div className="flex gap-6 overflow-x-auto md:hidden scrollbar-hide">
              {featuredItems.map((item) => (
                <motion.div
                  key={item.id}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                  className="flex-shrink-0 w-40 text-center"
                >
                  <div className="w-28 h-28 mx-auto rounded-full overflow-hidden border-4 border-red-500 shadow-lg">
                    <img
                      src={item.image}
                      alt={item.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <h3 className="mt-4 text-lg font-semibold text-white">
                    {item.name}
                  </h3>
                </motion.div>
              ))}
            </div>
          </div>
        </div> */}
      </div>
    </section>
  );
};

export default Hero;
