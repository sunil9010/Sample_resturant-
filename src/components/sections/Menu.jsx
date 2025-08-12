import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useToast } from "@/components/ui/use-toast";

// Optimized images from Unsplash/Pexels (smaller file sizes & consistent style)
const menuData = {
  Starters: [
    { name: "Tandoori Paneer Tikka", price: "₹450", image: "https://images.unsplash.com/photo-1626082927389-bbcf556da67c?w=800&auto=format&fit=crop" },
    { name: "Hara Bhara Kebab", price: "₹380", image: "https://images.unsplash.com/photo-1607083206968-13611e3a40e3?w=800&auto=format&fit=crop" },
    { name: "Chicken Malai Tikka", price: "₹550", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop" },
  ],
  "Main Course": [
    { name: "Butter Chicken", price: "₹650", image: "https://images.unsplash.com/photo-1598514982655-d41b4d1c02a4?w=800&auto=format&fit=crop" },
    { name: "Dal Makhani", price: "₹500", image: "https://images.unsplash.com/photo-1599351431202-003cc64d5f1c?w=800&auto=format&fit=crop" },
    { name: "Mutton Rogan Josh", price: "₹750", image: "https://images.unsplash.com/photo-1640529869843-b4b4b934fe05?w=800&auto=format&fit=crop" },
  ],
  Biryani: [
    { name: "Hyderabadi Chicken Biryani", price: "₹700", image: "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?w=800&auto=format&fit=crop" },
    { name: "Lucknowi Veg Biryani", price: "₹600", image: "https://images.unsplash.com/photo-1565557623262-b51c2513a641?w=800&auto=format&fit=crop" },
    { name: "Kolkata Mutton Biryani", price: "₹780", image: "https://images.unsplash.com/photo-1589302168068-964664d93dc0?w=800&auto=format&fit=crop" },
  ],
  Breads: [
    { name: "Garlic Naan", price: "₹120", image: "https://images.unsplash.com/photo-1607746882042-944635dfe10e?w=800&auto=format&fit=crop" },
    { name: "Lachha Paratha", price: "₹100", image: "https://images.unsplash.com/photo-1668192165378-a34034f83556?w=800&auto=format&fit=crop" },
    { name: "Amritsari Kulcha", price: "₹150", image: "https://images.unsplash.com/photo-1643350924549-890b23f7e4e1?w=800&auto=format&fit=crop" },
  ],
  Desserts: [
    { name: "Gulab Jamun", price: "₹250", image: "https://images.unsplash.com/photo-1670390119514-e866a20bc2c9?w=800&auto=format&fit=crop" },
    { name: "Shahi Tukda", price: "₹350", image: "https://images.unsplash.com/photo-1668446191143-a2d85e276813?w=800&auto=format&fit=crop" },
    { name: "Kesar Pista Kulfi", price: "₹300", image: "https://images.unsplash.com/photo-1617524389436-70051a483e67?w=800&auto=format&fit=crop" },
  ],
};

const Menu = () => {
  const [activeCategory, setActiveCategory] = useState("Starters");
  const { toast } = useToast();

  const handleOrder = () => {
    toast({
      title: "Coming Soon!",
      description: "Ordering feature will be available shortly.",
      variant: "default",
    });
  };

  const menuItemVariants = {
    hidden: { opacity: 0, y: 20, scale: 0.95 },
    visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.4 } },
    exit: { opacity: 0, y: -20, scale: 0.95 },
  };

  return (
    <section id="menu" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="text-center mb-14"
        >
          <h2 className="font-serif text-5xl font-bold text-white">Our Culinary Canvas</h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Category Selector */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {Object.keys(menuData).map((category) => (
            <motion.button
              key={category}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => setActiveCategory(category)}
              className={`px-5 py-2 rounded-full border transition-all ${
                activeCategory === category
                  ? "bg-red-600 text-white border-red-600"
                  : "border-gray-600 text-gray-300 hover:bg-gray-800"
              }`}
            >
              {category}
            </motion.button>
          ))}
        </div>

        {/* Menu Items */}
        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
            initial="hidden"
            animate="visible"
            exit="exit"
            variants={{
              visible: { transition: { staggerChildren: 0.1 } }
            }}
          >
            {menuData[activeCategory].map((item) => (
              <motion.div
                key={item.name}
                variants={menuItemVariants}
                className="group relative rounded-xl overflow-hidden shadow-lg bg-gray-900 border border-gray-700"
              >
                <div className="overflow-hidden h-64">
                  <img
                    alt={item.name}
                    src={item.image}
                    loading="lazy"
                    className="w-full h-full object-cover transform transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition-opacity"></div>
                </div>
                <div className="p-5">
                  <h3 className="text-xl font-serif font-semibold text-white">{item.name}</h3>
                  <p className="text-lg font-bold text-red-400 mt-2">{item.price}</p>
                  <Button
                    onClick={handleOrder}
                    variant="outline"
                    className="mt-4 w-full border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    Order Now
                  </Button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>

      </div>
    </section>
  );
};

export default Menu;
