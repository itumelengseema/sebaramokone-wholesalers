import { useEffect, useState } from 'react';
import { sanityClient } from '@/sanity/lib/sanity';
import ProductCard from '@/components/sections/Products/ProductCard';

// Define proper types
type Product = {
  _id: string;
  name: string;
  description: string;
  price: number;
  dateAdded: string;
  image: string;
  category: string;
};

type Category = {
  name: string;
};

type SortOrder = 'latest' | 'asc' | 'desc';

export default function ProductsPage() {
  const [products, setProducts] = useState<Product[]>([]);
  const [categories, setCategories] = useState<string[]>([]);
  const [visibleCount, setVisibleCount] = useState(3);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [sortOrder, setSortOrder] = useState<SortOrder>('latest');
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        setLoading(true);
        setError(null);
        
        const prodQuery = `*[_type == "product"]{
          _id,
          name,
          description,
          price,
          dateAdded,
          "image": image.asset->url,
          "category": category->name
        }`;
        
        const catQuery = `*[_type == "category"]{
          name
        }`;

        const [productData, categoryData] = await Promise.all([
          sanityClient.fetch<Product[]>(prodQuery),
          sanityClient.fetch<Category[]>(catQuery),
        ]);

        setProducts(productData);
        setCategories(['All', ...categoryData.map(c => c.name)]);
      } catch (err) {
        setError('Failed to load products. Please try again later.');
        console.error('Fetch error:', err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const filteredProducts = products
    .filter(p => selectedCategory === 'All' || p.category === selectedCategory)
    .sort((a, b) => {
      switch (sortOrder) {
        case 'asc': return a.price - b.price;
        case 'desc': return b.price - a.price;
        case 'latest': 
        default: 
          return new Date(b.dateAdded).getTime() - new Date(a.dateAdded).getTime();
      }
    })
    .slice(0, visibleCount);

  if (loading) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
        <div className="text-xl">Loading products...</div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="p-8 bg-gray-50 min-h-screen flex justify-center items-center">
        <div className="text-xl text-red-500">{error}</div>
      </div>
    );
  }

  return (
    <main className="p-8 bg-gray-50 min-h-screen">
      <h1 className="text-4xl font-bold mb-6 text-center">Our Products</h1>

      {/* Filters */}
      <div className="flex flex-wrap gap-4 justify-center mb-6">
        {categories.map(cat => (
          <button
            key={cat}
            onClick={() => {
              setSelectedCategory(cat);
              setVisibleCount(3);
            }}
            className={`px-4 py-2 rounded border transition-colors ${
              selectedCategory === cat 
                ? 'bg-green-600 text-white border-green-600' 
                : 'bg-white text-gray-800 hover:bg-gray-100'
            }`}
          >
            {cat}
          </button>
        ))}
        
        <select
          onChange={(e) => {
            setSortOrder(e.target.value as SortOrder);
            setVisibleCount(3);
          }}
          value={sortOrder}
          className="px-4 py-2 border rounded bg-white focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          <option value="latest">Latest</option>
          <option value="asc">Price: Low to High</option>
          <option value="desc">Price: High to Low</option>
        </select>
      </div>

      {/* Products Grid */}
      {filteredProducts.length > 0 ? (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 justify-items-center">
          {filteredProducts.map(product => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      ) : (
        <div className="text-center py-12 text-gray-500">
          No products found in this category.
        </div>
      )}

      {/* Pagination Controls */}
      <div className="mt-8 flex justify-center gap-4">
        {visibleCount < products.length && (
          <button
            onClick={() => setVisibleCount(prev => Math.min(prev + 3, products.length))}
            className="bg-green-600 text-white px-6 py-2 rounded hover:bg-green-700 transition-colors"
          >
            Show More
          </button>
        )}
        {visibleCount > 3 && (
          <button
            onClick={() => setVisibleCount(3)}
            className="bg-gray-500 text-white px-6 py-2 rounded hover:bg-gray-600 transition-colors"
          >
            Show Less
          </button>
        )}
      </div>
    </main>
  );
}