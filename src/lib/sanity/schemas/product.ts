import { defineType, defineField } from 'sanity';

export const product = defineType({
  name: 'product',
  title: 'Product',
  type: 'document',
  fields: [
    defineField({
      name: 'name',
      title: 'Product Name',
      type: 'string',
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'slug',
      title: 'Slug',
      type: 'slug',
      options: {
        source: 'name',
        maxLength: 96,
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'image',
      title: 'Product Image',
      type: 'image',
      options: {
        hotspot: true,
      },
      fields: [
        {
          name: 'alt',
          type: 'string',
          title: 'Alternative Text',
        },
      ],
    }),
    defineField({
      name: 'category',
      title: 'Category',
      type: 'string',
      options: {
        list: [
          { title: 'Fresh Produce', value: 'fresh-produce' },
          { title: 'Seafood', value: 'seafood' },
          { title: 'Meat', value: 'meat' },
          { title: 'Dairy', value: 'dairy' },
          { title: 'Grains & Cereals', value: 'grains' },
          { title: 'Other', value: 'other' },
        ],
      },
      validation: (Rule) => Rule.required(),
    }),
    defineField({
      name: 'description',
      title: 'Description',
      type: 'text',
      rows: 4,
    }),
    defineField({
      name: 'price',
      title: 'Price (ZAR)',
      type: 'number',
      description: 'Price in South African Rand',
    }),
    defineField({
      name: 'unit',
      title: 'Unit',
      type: 'string',
      description: 'e.g., per kg, per piece, per box',
      placeholder: 'per kg',
    }),
    defineField({
      name: 'availability',
      title: 'Availability',
      type: 'string',
      options: {
        list: [
          { title: 'In Stock', value: 'in-stock' },
          { title: 'Out of Stock', value: 'out-of-stock' },
          { title: 'Seasonal', value: 'seasonal' },
        ],
      },
      initialValue: 'in-stock',
    }),
    defineField({
      name: 'featured',
      title: 'Featured Product',
      type: 'boolean',
      description: 'Display this product on the homepage',
      initialValue: false,
    }),
  ],
  preview: {
    select: {
      title: 'name',
      subtitle: 'category',
      media: 'image',
    },
  },
});
