import React from 'react';
import { motion } from 'framer-motion';
import { Button } from '@/components/ui/button';

const offers = [
  {
    title: 'Royal Feast Combo',
    description: '1 Biryani, 1 Curry, 2 Naans & 2 Soft Drinks',
    price: '₹1499',
    image: 'https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&w=800',
  },
  {
    title: 'Tandoori Platter',
    description: 'Assortment of our best tandoori kebabs.',
    price: '₹1299',
    image: 'https://images.unsplash.com/photo-1626700051124-7520395854b3?q=80&w=800',
  },
];

const Sparkle = ({ style }) => <motion.div className="sparkle" style={style} />;

const SpecialOffers = () => {
  return (
    <section id="offers" className="py-24 bg-background">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">Exclusive Offers</h2>
          <div className="w-24 h-1 bg-primary mx-auto my-6"></div>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12">
          {offers.map((offer, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative rounded-lg overflow-hidden border border-border group"
            >
              <img src={offer.image} alt={offer.title} className="w-full h-80 object-cover transition-transform duration-500 group-hover:scale-105" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/50 to-transparent" />
              <div className="absolute bottom-0 left-0 p-8 w-full">
                <h3 className="font-serif text-3xl font-bold text-white">{offer.title}</h3>
                <p className="text-gray-300 mt-2">{offer.description}</p>
                <div className="mt-4 relative inline-block">
                  <span className="text-4xl font-bold neon-text">{offer.price}</span>
                  <Sparkle style={{ top: '5px', left: '-10px', animationDelay: '0s' }} />
                  <Sparkle style={{ top: '50%', right: '-20px', animationDelay: '0.5s' }} />
                  <Sparkle style={{ bottom: '0px', left: '50%', animationDelay: '1s' }} />
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SpecialOffers;