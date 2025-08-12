import React from 'react';
import { motion } from 'framer-motion';
import { Star, UtensilsCrossed } from 'lucide-react';

const testimonials = [
  {
    name: 'Sofia Martinez',
    review: 'Every bite was a celebration of flavor. The Butter Chicken melted in my mouth and the spices danced on my palate. A true culinary gem!',
    rating: 5,
  },
  {
    name: 'Liam O’Connor',
    review: 'The ambiance is warm, inviting, and simply breathtaking. Their Garlic & Cheese Naan is the best I have ever had. Perfect for date nights.',
    rating: 5,
  },
  {
    name: 'Ananya Sharma',
    review: 'This place captures the soul of Indian cuisine. The Paneer Tikka had the perfect char, and the service made us feel like royalty.',
    rating: 5,
  },
];

const Reviews = () => {
  return (
    <section id="reviews" className="py-24 bg-black relative overflow-hidden">
      {/* Large Decorative Icon */}
      <UtensilsCrossed className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/5 text-[20rem] -rotate-12" />
      
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">Guest Impressions</h2>
          <div className="w-24 h-1 bg-red-500 mx-auto my-6"></div>
          <p className="text-gray-400 max-w-xl mx-auto">
            See what our guests have to say about their Ginza Spice experience.
          </p>
        </motion.div>

        {/* Reviews */}
        <div className="grid md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className="bg-gradient-to-b from-gray-900 to-black p-8 rounded-xl border border-red-500/20 shadow-lg hover:shadow-red-500/20 transition-shadow duration-300"
            >
              <div className="flex mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 text-yellow-400 fill-yellow-400" />
                ))}
              </div>
              <p className="text-gray-300 italic mb-6 leading-relaxed">"{testimonial.review}"</p>
              <p className="font-bold text-red-400 text-right">- {testimonial.name}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Reviews;
