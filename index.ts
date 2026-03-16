import type { Product, Category, Testimonial, Feature } from '@/types';

export const products: Product[] = [
  {
    id: 1,
    name: 'Tough Armor Case',
    price: 29.99,
    originalPrice: 39.99,
    image: '/images/product-tough-armor.jpg',
    category: 'Phone Cases',
    rating: 4.8,
    reviews: 256,
    badge: 'Bestseller',
    description: 'Military-grade protection with reinforced corners',
  },
  {
    id: 2,
    name: 'Clear View Cover',
    price: 24.99,
    image: '/images/product-clear-view.jpg',
    category: 'Phone Cases',
    rating: 4.6,
    reviews: 189,
    badge: 'New',
    description: 'Crystal clear protection that shows your phone',
  },
  {
    id: 3,
    name: 'Leather Wallet Case',
    price: 34.99,
    originalPrice: 44.99,
    image: '/images/product-leather-wallet.jpg',
    category: 'Phone Cases',
    rating: 4.9,
    reviews: 312,
    badge: 'Premium',
    description: 'Genuine leather with card slots',
  },
  {
    id: 4,
    name: 'MagSafe Charger',
    price: 39.99,
    image: '/images/product-magsafe-charger.jpg',
    category: 'Chargers',
    rating: 4.7,
    reviews: 428,
    description: 'Fast wireless charging with magnetic alignment',
  },
];

export const categories: Category[] = [
  {
    id: 1,
    name: 'Phone Cases',
    description: 'Protect in Style',
    image: '/images/category-cases.jpg',
  },
  {
    id: 2,
    name: 'Screen Protectors',
    description: 'Crystal Clear',
    image: '/images/category-screen-protectors.jpg',
  },
  {
    id: 3,
    name: 'Chargers',
    description: 'Power Up',
    image: '/images/category-chargers.jpg',
  },
  {
    id: 4,
    name: 'Accessories',
    description: 'Complete Your Setup',
    image: '/images/category-accessories.jpg',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Sarah M.',
    avatar: '/images/avatar-sarah.jpg',
    rating: 5,
    text: 'Best phone case I\'ve ever bought! The protection is amazing and it looks so stylish. I\'ve dropped my phone multiple times and not a single scratch!',
  },
  {
    id: 2,
    name: 'John D.',
    avatar: '/images/avatar-john.jpg',
    rating: 5,
    text: 'Amazing quality and fast shipping. Ordered on Monday, got it by Wednesday. The MagSafe charger works perfectly with my iPhone.',
  },
  {
    id: 3,
    name: 'Emily R.',
    avatar: '/images/avatar-emily.jpg',
    rating: 5,
    text: 'Love the design options! I got the clear case and everyone asks where I bought it. Will definitely be ordering more for my family.',
  },
  {
    id: 4,
    name: 'Michael K.',
    avatar: '/images/avatar-michael.jpg',
    rating: 5,
    text: 'Great customer service. Had an issue with my order and they resolved it within hours. The leather wallet case is top quality.',
  },
  {
    id: 5,
    name: 'Lisa T.',
    avatar: '/images/avatar-lisa.jpg',
    rating: 5,
    text: 'Perfect fit for my phone! The screen protector was so easy to apply with no bubbles. Highly recommend this store to everyone.',
  },
];

export const features: Feature[] = [
  {
    id: 1,
    title: 'Premium Quality',
    description: 'Made with durable materials for long-lasting protection',
    icon: 'shield',
  },
  {
    id: 2,
    title: 'Fast Shipping',
    description: 'Free delivery on orders over $50, arrives in 2-3 days',
    icon: 'truck',
  },
  {
    id: 3,
    title: 'Easy Returns',
    description: '30-day hassle-free return policy',
    icon: 'refresh',
  },
  {
    id: 4,
    title: '24/7 Support',
    description: 'Our team is always here to help you',
    icon: 'headset',
  },
];
