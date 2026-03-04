import React from 'react';
import { ShoppingBag, Instagram, Phone } from 'lucide-react';
import { motion } from 'motion/react';

interface NavbarProps {
  cartCount: number;
  onCartClick: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ cartCount, onCartClick }) => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass-card px-4 py-3 flex justify-between items-center">
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 bg-brand-accent rounded-full flex items-center justify-center text-white font-display font-bold">
          B
        </div>
        <span className="font-display font-bold text-lg tracking-tight">Bakes & Choco</span>
      </div>
      
      <div className="flex items-center gap-4">
        <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-brand-brown hover:text-brand-accent transition-colors">
          <Instagram size={20} />
        </a>
        <button 
          onClick={onCartClick}
          className="relative p-2 text-brand-brown hover:text-brand-accent transition-colors"
        >
          <ShoppingBag size={22} />
          {cartCount > 0 && (
            <motion.span 
              initial={{ scale: 0 }}
              animate={{ scale: 1 }}
              className="absolute top-0 right-0 bg-brand-accent text-white text-[10px] font-bold w-4 h-4 rounded-full flex items-center justify-center"
            >
              {cartCount}
            </motion.span>
          )}
        </button>
      </div>
    </nav>
  );
};
