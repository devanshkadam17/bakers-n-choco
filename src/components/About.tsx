import React from 'react';
import { motion } from 'motion/react';

export const About: React.FC = () => {
  return (
    <section className="py-20 px-6 bg-brand-pink/30">
      <div className="max-w-4xl mx-auto text-center">
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-3xl md:text-4xl font-display font-bold mb-8 text-brand-brown">Our Story</h2>
          <div className="w-16 h-1 bg-brand-accent mx-auto mb-8 rounded-full"></div>
          <p className="text-lg md:text-xl text-brand-brown/80 leading-relaxed font-serif italic">
            “We are a home-based dessert brand specializing in rich, creamy cheesecakes and creative cupcake bouquets. Every dessert is freshly prepared in our kitchen with premium ingredients, ensuring that every bite feels like a warm hug.”
          </p>
          <p className="mt-8 font-medium text-brand-accent">— Anjum, Founder</p>
        </motion.div>
      </div>
    </section>
  );
};
