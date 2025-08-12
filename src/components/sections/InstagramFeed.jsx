import React from 'react';
import { motion } from 'framer-motion';
import { Instagram } from 'lucide-react';

const posts = [
  { id: 1, image: 'https://images.unsplash.com/photo-1589302168068-964664d93dc0?q=80&w=600' },
  { id: 2, image: 'https://images.unsplash.com/photo-1626700051124-7520395854b3?q=80&w=600' },
  { id: 3, image: 'https://images.unsplash.com/photo-1604329760661-e71dc83f8f26?q=80&w=600' },
  { id: 4, image: 'https://images.unsplash.com/photo-1567188041720-337c837905af?q=80&w=600' },
];

const InstagramFeed = () => {
  return (
    <section id="feed" className="py-24 bg-black relative overflow-hidden">
      {/* Large decorative background icon */}
      <Instagram className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-red-500/5 text-[18rem] -rotate-12" />

      <div className="max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.8 }}
          className="text-center mb-16"
        >
          <h2 className="font-serif text-5xl md:text-6xl font-bold text-white">#GinzaSpice</h2>
          <a
            href="#"
            className="flex items-center justify-center space-x-2 text-red-400 hover:text-red-300 transition-colors mt-4 text-lg"
          >
            <Instagram />
            <span>Follow us on Instagram</span>
          </a>
          <p className="text-gray-400 mt-3 max-w-lg mx-auto">
            A peek into our kitchen creations and unforgettable dining moments.
          </p>
        </motion.div>

        {/* Image grid */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          {posts.map((post, index) => (
            <motion.a
              key={post.id}
              href="#"
              target="_blank"
              rel="noopener noreferrer"
              initial={{ opacity: 0, scale: 0.85 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="relative rounded-xl overflow-hidden group"
            >
              <img
                src={post.image}
                alt={`Instagram post ${post.id}`}
                className="w-full h-full object-cover rounded-xl border border-red-500/20 shadow-lg"
              />
              {/* Overlay */}
              <div className="absolute inset-0 flex items-center justify-center bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <Instagram className="w-12 h-12 text-red-400" />
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default InstagramFeed;
