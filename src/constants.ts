import { Product } from './types';

export const PRODUCTS: Product[] = [
  {
    id: 'vanilla-cheesecake',
    name: 'Vanilla Cheesecake',
    description: 'Classic creamy vanilla cheesecake with a buttery crust.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1533134242443-d4fd215305ad?auto=format&fit=crop&q=80&w=800',
    category: 'cheesecake'
  },
  {
    id: 'chocolate-cheesecake',
    name: 'Chocolate Cheesecake',
    description: 'Rich Belgian chocolate cheesecake for true cocoa lovers.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1606313564200-e75d5e30476c?auto=format&fit=crop&q=80&w=800',
    category: 'cheesecake'
  },
  {
    id: 'strawberry-cheesecake',
    name: 'Strawberry Cheesecake',
    description: 'Refreshing cheesecake topped with fresh strawberry compote.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=800',
    category: 'cheesecake'
  },
  {
    id: 'biscoff-cheesecake',
    name: 'Biscoff Cheesecake',
    description: 'The viral favorite! Lotus Biscoff spread and cookie crunch.',
    price: 149,
    image: 'https://images.unsplash.com/photo-1626803775151-61d756612f97?auto=format&fit=crop&q=80&w=800',
    category: 'cheesecake'
  }
];

export const REVIEWS = [
  {
    id: 1,
    name: 'Sarah J.',
    rating: 5,
    comment: 'The Biscoff cheesecake is out of this world! So creamy and fresh.',
    date: '2 days ago'
  },
  {
    id: 2,
    name: 'Priya K.',
    rating: 5,
    comment: 'Ordered a cupcake bouquet for my sister\'s birthday. It looked beautiful and tasted even better!',
    date: '1 week ago'
  },
  {
    id: 3,
    name: 'Rahul M.',
    rating: 5,
    comment: 'Best homemade cheesecakes in Guntakal. Highly recommend the chocolate one.',
    date: '2 weeks ago'
  }
];

export const WHATSAPP_NUMBER = '919494481554'; // Updated with user provided number
export const INSTAGRAM_URL = 'https://instagram.com/bakesandchoco';
export const LOCATION = 'Guntakal, Andhra Pradesh';
