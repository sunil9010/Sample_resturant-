import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar, Utensils } from 'lucide-react';

const FloatingUtensil = ({ children, className, delay }) => (
  <motion.div
    className={`absolute ${className}`}
    animate={{ y: [0, -20, 0], rotate: [0, 10, -10, 0] }}
    transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut', delay }}
  >
    {children}
  </motion.div>
);

const Reservation = () => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "🚧 Booking System",
      description:
        "This feature isn't implemented yet — but you can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section
      id="reservation"
      className="relative py-32 bg-black text-white overflow-hidden"
    >
      {/* Dark red overlay gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-900/40 via-black/80 to-black/90" />

      {/* Floating utensils */}
      <FloatingUtensil
        className="top-1/4 left-[15%] text-red-700/30"
        delay={0}
      >
        <Utensils size={64} className="-rotate-45" />
      </FloatingUtensil>
      <FloatingUtensil
        className="bottom-1/4 right-[15%] text-red-500/30"
        delay={2}
      >
        <Utensils size={80} className="rotate-45" />
      </FloatingUtensil>

      {/* Content */}
      <div className="relative z-10 max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.8, type: 'spring' }}
        >
          <h2
            className="font-serif text-5xl md:text-7xl font-bold mb-6 text-white drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
            style={{ fontFamily: "'Merriweather', serif" }}
          >
            Reserve Your Table
          </h2>
          <p
            className="text-xl text-gray-300 mb-12 max-w-2xl mx-auto leading-relaxed"
            style={{ fontFamily: "'Lora', serif" }}
          >
            Secure your spot for a night filled with rich flavors, warm ambiance,
            and unforgettable dining.
          </p>
          <Button
            onClick={handleBooking}
            size="lg"
            className="bg-red-600 hover:bg-red-700 text-white font-bold px-12 py-8 text-2xl rounded-xl shadow-lg shadow-red-800/50 transition-transform hover:scale-105"
          >
            <Calendar className="w-8 h-8 mr-4 transform transition-transform duration-300 group-hover:rotate-12" />
            Book Now
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Reservation;
