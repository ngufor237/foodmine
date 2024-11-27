import { Food } from './app/shared/models/food';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Pizza',
    price: 10.99,
    tags: ['Italian', 'Cheese', 'Vegetarian'],
    favourite: true,
    stars: 4,
    imageUrl: 'https://example.com/pizza.jpg',
    origins: ['Italy', 'France'],
    cookTime: '15-20 minutes',
  },
  {
    id: '2',
    name: 'Burger',
    price: 7.99,
    tags: ['Fast food', 'Healthy', 'Gluten-free'],
    favourite: false,
    stars: 5,
    imageUrl: 'https://example.com/burger.jpg',
    origins: ['USA', 'Canada'],
    cookTime: '5-10 minutes',
  },
  {
    id: '3',
    name: 'Salad',
    price: 5.99,
    tags: ['Vegetarian', 'Gluten-free', 'Dairy-free'],
    favourite: true,
    stars: 3,
    imageUrl: 'https://example.com/salad.jpg',
    origins: ['USA', 'Canada'],
    cookTime: '10-15 minutes',
  },
  // Add more food items here...
];
