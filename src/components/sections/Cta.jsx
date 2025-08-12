
import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import { Calendar } from 'lucide-react';

const Cta = () => {
  const { toast } = useToast();

  const handleBooking = () => {
    toast({
      title: "🚧 Booking System",
      description: "This feature isn't implemented yet—but don't worry! You can request it in your next prompt! 🚀",
      duration: 4000,
    });
  };

  return (
    <section id="book" className="relative py-24 bg-gray-800 text-white overflow-hidden">
      <div className="absolute inset-0">
        <img 
          alt="Elegant Indian restaurant interior with ambient lighting"
          className="w-full h-full object-cover opacity-20"
         src="https://images.unsplash.com/photo-1604431260482-1d2991bee347" />
        <div className="absolute inset-0 bg-gradient-to-r from-gray-900 via-gray-900/80 to-transparent" />
      </div>
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="max-w-xl"
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-6">
            Reserve Your Royal Seat
          </h2>
          <p className="text-lg text-gray-300 mb-8">
            Step into a world of regal flavors and impeccable service. Book your table now for an unforgettable dining experience at Maharaja's Palace.
          </p>
          <Button
            onClick={handleBooking}
            className="bg-amber-500 hover:bg-amber-600 text-gray-900 font-bold px-10 py-8 text-xl pulse-glow rounded-full group"
          >
            <Calendar className="w-6 h-6 mr-3 transform transition-transform duration-300 group-hover:rotate-12" />
            Book a Table
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default Cta;
