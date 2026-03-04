export interface Product {
  id: string;
  name: string;
  description: string;
  price: number;
  image: string;
  category: 'cheesecake' | 'cupcake';
}

export interface CartItem extends Product {
  quantity: number;
}
