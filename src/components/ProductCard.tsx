import React, { useState } from 'react';
import { Plus, Minus, ShoppingCart } from 'lucide-react';
import { motion } from 'motion/react';
import { Product } from '../types';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, quantity: number) => void;
}

export const ProductCard: React.FC<ProductCardProps> = ({ product, onAddToCart }) => {
  const [quantity, setQuantity] = useState(1);

  const increment = () => setQuantity(prev => prev + 1);
  const decrement = () => setQuantity(prev => (prev > 1 ? prev - 1 : 1));

  return (
    <motion.div 
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="bg-white rounded-3xl overflow-hidden instagram-shadow group"
    >
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={product.image} 
          alt={product.name}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
          referrerPolicy="no-referrer"
        />
        <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-sm px-3 py-1 rounded-full text-xs font-bold text-brand-accent">
          ₹{product.price}
        </div>
      </div>
      
      <div className="p-6">
        <h3 className="text-xl font-display font-bold mb-2">{product.name}</h3>
        <p className="text-sm text-brand-brown/60 mb-6 line-clamp-2 leading-relaxed">
          {product.description}
        </p>
        
        <div className="flex items-center justify-between gap-4">
          <div className="flex items-center bg-brand-cream rounded-full px-3 py-1 border border-brand-brown/10">
            <button 
              onClick={decrement}
              className="p-1 text-brand-brown hover:text-brand-accent transition-colors"
            >
              <Minus size={16} />
            </button>
            <span className="w-8 text-center font-bold text-sm">{quantity}</span>
            <button 
              onClick={increment}
              className="p-1 text-brand-brown hover:text-brand-accent transition-colors"
            >
              <Plus size={16} />
            </button>
          </div>
          
          <button 
            onClick={() => onAddToCart(product, quantity)}
            className="flex-1 bg-brand-brown hover:bg-brand-accent text-white py-3 rounded-full text-sm font-medium flex items-center justify-center gap-2 transition-all active:scale-95"
          >
            <ShoppingCart size={16} />
            Add to Cart
          </button>
        </div>
      </div>
    </motion.div>
  );
};
