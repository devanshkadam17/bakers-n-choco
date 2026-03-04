import React from 'react';
import { motion } from 'motion/react';
import { MessageCircle, Sparkles } from 'lucide-react';
import { WHATSAPP_NUMBER } from '../constants';

export const CupcakeBouquets: React.FC = () => {
  const handleCustomOrder = () => {
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=Hi Anjum, I'm interested in a custom cupcake bouquet!`, '_blank');
  };

  return (
    <section id="bouquets" className="py-24 px-6">
      <div className="max-w-6xl mx-auto">
        <div className="bg-brand-pink/50 rounded-[48px] overflow-hidden flex flex-col lg:flex-row items-center">
          <div className="w-full lg:w-1/2 h-[400px] lg:h-[600px]">
            <img 
              src="https://images.unsplash.com/photo-1519869325930-281384150729?auto=format&fit=crop&q=80&w=1000" 
              alt="Cupcake Bouquet" 
              className="w-full h-full object-cover"
              referrerPolicy="no-referrer"
            />
          </div>
          
          <div className="w-full lg:w-1/2 p-10 lg:p-20">
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="flex items-center gap-2 text-brand-accent font-bold uppercase tracking-widest text-xs mb-4">
                <Sparkles size={16} />
                Unique & Creative
              </div>
              <h2 className="text-4xl md:text-5xl font-display font-bold mb-6 leading-tight">
                Cupcake <br />
                <span className="italic">Bouquets</span>
              </h2>
              <p className="text-lg text-brand-brown/70 mb-8 leading-relaxed">
                Our signature cupcake bouquets are the perfect edible gift. Handcrafted to look like real flowers, they are as beautiful as they are delicious.
              </p>
              
              <div className="space-y-4 mb-10">
                <div className="flex items-center gap-3 text-brand-brown">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span className="font-medium">Custom Colors & Flavors</span>
                </div>
                <div className="flex items-center gap-3 text-brand-brown">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span className="font-medium">Perfect for Birthdays & Anniversaries</span>
                </div>
                <div className="flex items-center gap-3 text-brand-brown">
                  <div className="w-2 h-2 bg-brand-accent rounded-full"></div>
                  <span className="font-medium">Premium Packaging Included</span>
                </div>
              </div>

              <button 
                onClick={handleCustomOrder}
                className="bg-brand-brown hover:bg-brand-accent text-white px-10 py-4 rounded-full font-bold flex items-center justify-center gap-2 transition-all transform hover:scale-105 shadow-xl"
              >
                <MessageCircle size={20} />
                Inquire for Custom Order
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
