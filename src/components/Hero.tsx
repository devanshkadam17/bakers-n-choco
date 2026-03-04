import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const Hero: React.FC = () => {
  const handleWhatsApp = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Anjum, I'd like to inquire about your cheesecakes!`, '_blank');
  };

  return (
    <section className="relative h-[85vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=1920" 
          alt="Cheesecake Background" 
          className="w-full h-full object-cover"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
      </div>

      <div className="relative z-10 text-center px-6 max-w-2xl">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <span className="inline-block px-4 py-1 rounded-full bg-brand-pink/20 backdrop-blur-md text-white border border-white/30 text-xs font-medium uppercase tracking-widest mb-6">
            Homemade with Love
          </span>
          <h1 className="text-5xl md:text-7xl text-white font-display font-bold leading-tight mb-6">
            Freshly Made <br />
            <span className="italic">Cheesecakes</span>
          </h1>
          <p className="text-white/90 text-lg md:text-xl font-light mb-10 max-w-lg mx-auto leading-relaxed">
            Premium ingredients. Prepared fresh on order. Delivered to your doorstep in Guntakal.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button 
              onClick={handleWhatsApp}
              className="bg-brand-accent hover:bg-brand-accent/90 text-white px-8 py-4 rounded-full font-medium flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-lg"
            >
              <MessageCircle size={20} />
              Order on WhatsApp
            </button>
            <a 
              href="#products"
              className="bg-white/10 backdrop-blur-md hover:bg-white/20 text-white border border-white/30 px-8 py-4 rounded-full font-medium transition-all"
            >
              View Menu
            </a>
          </div>
        </motion.div>
      </div>
      
      {/* Scroll Indicator */}
      <motion.div 
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 text-white/50"
      >
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center p-1">
          <div className="w-1 h-2 bg-white/50 rounded-full"></div>
        </div>
      </motion.div>
    </section>
  );
};
