import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { ChevronLeft, ChevronRight } from "lucide-react";

const specialDishes = [
  {
    name: "Royal Kashmiri Gushtaba",
    description:
      "Hand-minced mutton balls simmered in a yogurt and saffron-infused gravy, finished with a drizzle of almond cream.",
    image:
      "https://images.unsplash.com/photo-1631515243349-e0cb75fb8d3a?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Charcoal Smoked Salmon Tikka",
    description:
      "Fresh Atlantic salmon marinated in tandoori spices, grilled over charcoal, and finished with lemon butter.",
    image:
      "https://images.unsplash.com/photo-1625944022826-229a1a8398c2?q=80&w=800&auto=format&fit=crop",
  },
  {
    name: "Zafrani Pista Kulfi Dome",
    description:
      "Creamy saffron kulfi encased in a chocolate dome, melted open at the table with warm pistachio sauce.",
    image:
      "https://images.unsplash.com/photo-1617524389436-70051a483e67?q=80&w=800&auto=format&fit=crop",
  },
];

const floatingItems = [
  { src: "/images/chilli.png", className: "top-0 -left-10" },
  { src: "/images/leaf.png", className: "bottom-0 -right-10" },
  { src: "/images/spoon.png", className: "top-10 right-20" },
  { src: "/images/herb.png", className: "bottom-10 left-20" },
];

const FloatingSpice = ({ src, className, delay = 0 }) => (
  <motion.img
    src={src}
    alt="decor"
    className={`absolute w-12 h-12 opacity-80 ${className}`}
    initial={{ opacity: 0, scale: 0 }}
    animate={{
      opacity: 1,
      scale: 1,
      y: [0, -8, 0],
      rotate: [0, 12, -12, 0],
    }}
    transition={{
      duration: 9,
      repeat: Infinity,
      ease: "easeInOut",
      delay,
    }}
  />
);

const ChefsSpecial = () => {
  const [index, setIndex] = useState(0);

  // Auto-slide every 5s
  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % specialDishes.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const handleNext = () => setIndex((prev) => (prev + 1) % specialDishes.length);
  const handlePrev = () => setIndex((prev) => (prev - 1 + specialDishes.length) % specialDishes.length);

  return (
    <section id="specials" className="py-24 bg-gradient-to-b from-black via-gray-900 to-black overflow-hidden">
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
            Chef’s Signature Creations
          </h2>
          <div className="w-20 h-1 bg-red-500 mx-auto mt-4"></div>
        </motion.div>

        {/* Carousel */}
        <div className="relative h-[500px] flex items-center justify-center" style={{ perspective: "1200px" }}>
          <AnimatePresence initial={false} mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 200, scale: 0.9, rotateY: -45 }}
              animate={{ opacity: 1, x: 0, scale: 1, rotateY: 0 }}
              exit={{ opacity: 0, x: -200, scale: 0.9, rotateY: 45 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
              className="absolute w-full max-w-5xl"
            >
              <div className="grid md:grid-cols-2 gap-8 items-center">
                
                {/* Image with Shine Effect */}
                <div className="relative overflow-hidden rounded-xl">
                  <motion.div
                    className="relative group rounded-xl shadow-2xl"
                    initial={{ scale: 1 }}
                    whileHover={{ scale: 1.03 }}
                  >
                    <img
                      src={specialDishes[index].image}
                      alt={specialDishes[index].name}
                      className="w-full h-80 object-cover rounded-xl"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/40 to-transparent"></div>
                    <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      <div className="absolute -top-1/2 w-full h-full bg-gradient-to-r from-transparent via-white/20 to-transparent rotate-12 translate-x-[-150%] group-hover:translate-x-[150%] transition-transform duration-700"></div>
                    </div>
                  </motion.div>

                  {/* Floating items */}
                  {floatingItems.map((item, i) => (
                    <FloatingSpice key={i} src={item.src} className={item.className} delay={i * 0.4} />
                  ))}
                </div>

                {/* Text */}
                <div className="text-white">
                  <h3 className="font-serif text-4xl font-bold text-red-400 mb-4">
                    {specialDishes[index].name}
                  </h3>
                  <p className="text-lg text-gray-300 leading-relaxed mb-6">
                    {specialDishes[index].description}
                  </p>
                  <Button
                    variant="outline"
                    className="border-red-500 text-red-400 hover:bg-red-500 hover:text-white"
                  >
                    Reserve Now
                  </Button>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>

          {/* Nav Buttons */}
          <Button
            onClick={handlePrev}
            variant="outline"
            size="icon"
            className="absolute left-0 z-10 bg-black/50 hover:bg-black border-red-500 text-red-400"
          >
            <ChevronLeft />
          </Button>
          <Button
            onClick={handleNext}
            variant="outline"
            size="icon"
            className="absolute right-0 z-10 bg-black/50 hover:bg-black border-red-500 text-red-400"
          >
            <ChevronRight />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ChefsSpecial;
