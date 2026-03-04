import React from 'react';
import { motion } from 'motion/react';
import { Star, Quote } from 'lucide-react';
import { REVIEWS } from '../constants';

export const Reviews: React.FC = () => {
  return (
    <section className="py-24 px-6 bg-brand-cream overflow-hidden">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-4">What Our Customers Say</h2>
          <p className="text-brand-brown/60">Real reviews from our dessert lovers</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {REVIEWS.map((review, index) => (
            <motion.div
              key={review.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white p-8 rounded-[32px] instagram-shadow relative"
            >
              <Quote className="absolute top-6 right-8 text-brand-pink" size={40} />
              
              <div className="flex gap-1 mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} size={16} className="fill-brand-accent text-brand-accent" />
                ))}
              </div>
              
              <p className="text-brand-brown/80 italic mb-6 leading-relaxed">
                "{review.comment}"
              </p>
              
              <div className="flex items-center justify-between">
                <span className="font-bold text-brand-brown">{review.name}</span>
                <span className="text-xs text-brand-brown/40 uppercase tracking-widest">{review.date}</span>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
