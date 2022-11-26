import { MdLocalPizza as icon } from 'react-icons/md';
import PriceInput from '../components/PriceInput';

export default {
  name: 'pizza',
  title: 'Pizzas',
  type: 'document',
  icon,
  fields: [
    {
      name: 'name',
      title: 'Pizza Name',
      type: 'string',
      description: 'Name of the pizza',
    },
    {
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 100,
      },
    },
    {
      name: 'image',
      title: 'Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
    {
      name: 'price',
      title: 'Price',
      type: 'number',
      inputComponent: PriceInput,
      description: 'Price of the pizza in cents',
      validation: (Rule) => Rule.min(1000).max(50000),
      // TODO: Add custom input component
    },
    {
      name: 'toppings',
      title: 'Toppings',
      type: 'array',
      of: [{ type: 'reference', to: [{ type: 'topping' }] }],
    },
  ],

  preview: {
    select: {
      title: 'name',
      media: 'image',
      topping0: 'toppings.0.topping',
      topping1: 'toppings.1.topping',
      topping2: 'toppings.2.topping',
      topping3: 'toppings.3.topping',
    },
    prepare: ({ title, media, ...toppings }) =>
      // 1. Filter undefined toppings out
      // 2. return the preview object for the pizza
      ({
        title,
        media,
        subtitle: Object.values(toppings).join(', '),
      }),
  },
};
