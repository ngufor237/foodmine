import { Food } from './app/shared/models/food';
import { Tag } from './app/shared/models/tag';

export const sample_foods: Food[] = [
  {
    id: '1',
    name: 'Chicken',
    price: 10.99,
    tags: ['Italian', 'Cheese', 'Vegetarian'],
    favourite: true,
    stars: 4,
    imageUrl: 'chicken.jpg',
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
    imageUrl: 'hamburger.jpg',
    origins: ['USA', 'Canada'],
    cookTime: '5-10 minutes',
  },
  {
    id: '3',
    name: 'Fried Irish',
    price: 5.99,
    tags: ['Vegetarian', 'Gluten-free', 'Dairy-free', 'Fast food'],
    favourite: true,
    stars: 3,
    imageUrl: 'irish.jpg',
    origins: ['USA', 'France'],
    cookTime: '10-15 minutes',
  },
  {
    id: '4',
    name: 'Rice',
    price: 12.99,
    tags: ['Italian', 'Healthy', 'Vegetarian'],
    favourite: false,
    stars: 5,
    imageUrl: 'rice.jpg',
    origins: ['Italy', 'Thailand'],
    cookTime: '20-25 minutes',
  },

  // Add more food items here...
];

export const sample_tags: Tag[] = [
  { count: 10, name: 'All' },
  { count: 4, name: 'Fast food' },
  { count: 3, name: 'Vegetarian' },
  { count: 7, name: 'Healthy' },
  { count: 5, name: 'Cheese' },
  { count: 8, name: 'Rice' },
];
