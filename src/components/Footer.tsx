import React from 'react';
import { motion } from 'motion/react';
import { Instagram, Phone, MapPin, MessageCircle } from 'lucide-react';
import { WHATSAPP_NUMBER, INSTAGRAM_URL, LOCATION } from '../constants';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-brand-brown text-white py-20 px-6 rounded-t-[48px]">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-12">
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-10 h-10 bg-brand-accent rounded-full flex items-center justify-center text-white font-display font-bold text-xl">
              B
            </div>
            <span className="font-display font-bold text-2xl tracking-tight">Bakes & Choco</span>
          </div>
          <p className="text-white/60 leading-relaxed mb-8">
            Handcrafted cheesecakes and creative cupcake bouquets made fresh in our home kitchen. Bringing sweetness to Guntakal.
          </p>
          <div className="flex gap-4">
            <a href={INSTAGRAM_URL} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
              <Instagram size={20} />
            </a>
            <a href={`https://wa.me/${WHATSAPP_NUMBER}`} target="_blank" rel="noopener noreferrer" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent transition-colors">
              <MessageCircle size={20} />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display font-bold text-xl mb-6">Quick Links</h3>
          <ul className="space-y-4 text-white/60">
            <li><a href="#products" className="hover:text-white transition-colors">Cheesecakes</a></li>
            <li><a href="#bouquets" className="hover:text-white transition-colors">Cupcake Bouquets</a></li>
            <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
            <li><a href="#contact" className="hover:text-white transition-colors">Contact Us</a></li>
          </ul>
        </div>

        <div id="contact">
          <h3 className="font-display font-bold text-xl mb-6">Contact Info</h3>
          <ul className="space-y-6 text-white/60">
            <li className="flex items-start gap-4">
              <MapPin className="text-brand-accent shrink-0" size={20} />
              <span>{LOCATION}</span>
            </li>
            <li className="flex items-center gap-4">
              <Phone className="text-brand-accent shrink-0" size={20} />
              <span>+91 94944 81554</span>
            </li>
            <li className="flex items-center gap-4">
              <Instagram className="text-brand-accent shrink-0" size={20} />
              <span>@bakesandchoco</span>
            </li>
          </ul>
        </div>
      </div>

      <div className="max-w-6xl mx-auto mt-20 pt-8 border-t border-white/10 flex flex-col md:row justify-between items-center gap-4 text-white/40 text-sm">
        <p>© 2024 Bakes & Choco by Anjum. All rights reserved.</p>
        <p>Made with love in Guntakal</p>
      </div>
    </footer>
  );
};
