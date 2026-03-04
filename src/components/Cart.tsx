import React from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { X, ShoppingBag, MessageCircle, Trash2, Plus, Minus } from 'lucide-react';
import { CartItem } from '../types';
import { WHATSAPP_NUMBER } from '../constants';

interface CartProps {
  isOpen: boolean;
  onClose: () => void;
  items: CartItem[];
  onUpdateQuantity: (id: string, delta: number) => void;
  onRemove: (id: string) => void;
}

export const Cart: React.FC<CartProps> = ({ isOpen, onClose, items, onUpdateQuantity, onRemove }) => {
  const total = items.reduce((sum, item) => sum + item.price * item.quantity, 0);

  const handleCheckout = () => {
    if (items.length === 0) return;

    const orderDetails = items
      .map(item => `- ${item.name} x${item.quantity} (₹${item.price * item.quantity})`)
      .join('\n');
    
    const message = encodeURIComponent(
      `Hi Anjum! I'd like to place an order:\n\n${orderDetails}\n\n*Total: ₹${total}*\n\nPlease confirm my order. Thank you!`
    );
    
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${message}`, '_blank');
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[60]"
          />
          
          {/* Cart Panel */}
          <motion.div
            initial={{ y: '100%' }}
            animate={{ y: 0 }}
            exit={{ y: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed bottom-0 left-0 right-0 bg-brand-cream rounded-t-[32px] z-[70] max-h-[85vh] flex flex-col shadow-2xl"
          >
            <div className="p-6 flex justify-between items-center border-b border-brand-brown/10">
              <div className="flex items-center gap-2">
                <ShoppingBag className="text-brand-accent" size={24} />
                <h2 className="text-2xl font-display font-bold">Your Order</h2>
              </div>
              <button onClick={onClose} className="p-2 hover:bg-brand-brown/5 rounded-full transition-colors">
                <X size={24} />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto p-6">
              {items.length === 0 ? (
                <div className="text-center py-20">
                  <div className="w-20 h-20 bg-brand-pink/50 rounded-full flex items-center justify-center mx-auto mb-4">
                    <ShoppingBag size={32} className="text-brand-brown/30" />
                  </div>
                  <p className="text-brand-brown/50 font-medium">Your cart is empty</p>
                  <button 
                    onClick={onClose}
                    className="mt-4 text-brand-accent font-bold underline"
                  >
                    Start Shopping
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex gap-4 items-center">
                      <img 
                        src={item.image} 
                        alt={item.name} 
                        className="w-20 h-20 rounded-2xl object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="flex-1">
                        <h3 className="font-bold text-lg">{item.name}</h3>
                        <p className="text-brand-accent font-bold">₹{item.price * item.quantity}</p>
                        
                        <div className="flex items-center gap-4 mt-2">
                          <div className="flex items-center bg-white rounded-full px-2 py-1 border border-brand-brown/10">
                            <button 
                              onClick={() => onUpdateQuantity(item.id, -1)}
                              className="p-1 text-brand-brown hover:text-brand-accent"
                            >
                              <Minus size={14} />
                            </button>
                            <span className="w-6 text-center text-sm font-bold">{item.quantity}</span>
                            <button 
                              onClick={() => onUpdateQuantity(item.id, 1)}
                              className="p-1 text-brand-brown hover:text-brand-accent"
                            >
                              <Plus size={14} />
                            </button>
                          </div>
                          <button 
                            onClick={() => onRemove(item.id)}
                            className="text-brand-brown/30 hover:text-red-500 transition-colors"
                          >
                            <Trash2 size={18} />
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {items.length > 0 && (
              <div className="p-6 bg-white border-t border-brand-brown/10 rounded-t-[32px] shadow-inner">
                <div className="flex justify-between items-center mb-6">
                  <span className="text-brand-brown/60 font-medium">Subtotal</span>
                  <span className="text-2xl font-display font-bold">₹{total}</span>
                </div>
                <button 
                  onClick={handleCheckout}
                  className="w-full bg-brand-accent hover:bg-brand-accent/90 text-white py-4 rounded-full font-bold flex items-center justify-center gap-3 transition-all transform active:scale-95 shadow-lg"
                >
                  <MessageCircle size={22} />
                  Place Order on WhatsApp
                </button>
                <p className="text-center text-[10px] text-brand-brown/40 mt-4 uppercase tracking-widest">
                  Order will be confirmed via WhatsApp
                </p>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
};
