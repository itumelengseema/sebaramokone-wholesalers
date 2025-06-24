// src/app/products/page.tsx
'use client';

import { useState } from 'react';
import ProductCard from '@/components/sections/Products/ProductCard';

const allProducts = [
  {
    id: 1,
    name: 'Grilled Prawns',
    description: 'Succulent grilled prawns with garlic butter glaze.',
    price: 150,
    category: 'Shellfish',
    dateAdded: '2024-06-01',
    image: 'https://images.pexels.com/photos/128388/pexels-photo-128388.jpeg?auto=compress&cs=tinysrgb&h=300',
  },
  {
    id: 2,
    name: 'Seafood Platter',
    description: 'A mix of prawns, calamari, fish, and mussels.',
    price: 320,
    category: 'Platter',
    dateAdded: '2024-06-05',
    image: 'https://images.pexels.com/photos/960984/pexels-photo-960984.jpeg?auto=compress&cs=tinysrgb&h=300',
  },
  {
    id: 3,
    name: 'Calamari Rings',
    description: 'Crispy golden fried calamari served with tartar sauce.',
    price: 120,
    category: 'Shellfish',
    dateAdded: '2024-06-03',
    image: 'https://images.pexels.com/photos/65174/pexels-photo-65174.jpeg?auto=compress&cs=tinysrgb&h=300',
  },
  {
    id: 4,
    name: 'Line Fish Grilled',
    description: 'Fresh line fish grilled to perfection.',
    price: 180,
    category: 'Fish',
    dateAdded: '2024-06-08',
    image: 'https://images.pexels.com/photos/4106486/pexels-photo-4106486.jpeg?auto=compress&cs=tinysrgb&h=300',
  },
  {
    id: 5,
    name: 'Fried Hake',
    description: 'Golden fried hake with crispy batter.',
    price: 140,
    category: 'Fish',
    dateAdded: '2024-06-07',
    image: 'https://images.pexels.com/photos/1860200/pexels-photo-1860200.jpeg?auto=compress&cs=tinysrgb&h=300',
  },
];

export default function ProductsPage() {
  const [visibleCount, setVisibleCount] = useState(3);
  const [category, setCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState('latest');

  const filtered = allProducts
    .filter((p) => category === 'All' || p.category === category)
    .sort((a, b) => {
      if (sortOrder === 'asc') return a.price - b.price;
      if (sortOrder === 'desc') return b.price - a.price;
      if (sortOrder === 'latest')
        return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      return 0;
    })
    .slice(0, visibleCount);

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>

      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {['All', 'Fish', 'Shellfish', 'Platter'].map((cat) => (
          <button
            key={cat}
            onClick={() => setCategory(cat)}
            className={`px-4 py-2 rounded border ${
              category === cat ? 'bg-green-600 text-white' : 'bg-white text-gray-800'
            }`}
          >
            {cat}
          </button>
        ))}

        <select
          onChange={(e) => setSortOrder(e.target.value)}
          className="px-4 py-2 rounded border"
          value={sortOrder}
        >
          <option value="latest">Latest</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 justify-items-center">
        {filtered.map((product) => (
          <ProductCard key={product.id} product={{
            ...product,
            priceRange: `R${(product.price - 20).toFixed(2)} - R${(product.price + 30).toFixed(2)}`
          }} />
        ))}
      </div>

      <div className="mt-8 flex justify-center gap-4">
        {visibleCount < allProducts.length && (
          <button
            onClick={() => setVisibleCount((prev) => prev + 2)}
            className="bg-green-600 text-white px-4 py-2 rounded hover:bg-green-700"
          >
            Show More
          </button>
        )}

        {visibleCount > 3 && (
          <button
            onClick={() => setVisibleCount(3)}
            className="bg-gray-400 text-white px-4 py-2 rounded hover:bg-gray-500"
          >
            Show Less
          </button>
        )}
      </div>
    </main>
  );
}
