import React from 'react';
import { Link } from 'react-router-dom';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199,
    description: 'High-quality wireless headphones with noise cancellation.',
    category: 'Electronics'
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299,
    description: 'Feature-rich smartwatch with health monitoring.',
    category: 'Electronics'
  },
  {
    id: 3,
    name: 'Laptop Stand',
    price: 49,
    description: 'Ergonomic laptop stand for better posture.',
    category: 'Accessories'
  },
  {
    id: 4,
    name: 'Wireless Mouse',
    price: 79,
    description: 'Ergonomic wireless mouse with precision tracking.',
    category: 'Accessories'
  },
  {
    id: 5,
    name: 'USB-C Hub',
    price: 39,
    description: 'Multi-port USB-C hub for laptops and tablets.',
    category: 'Accessories'
  },
  {
    id: 6,
    name: 'Bluetooth Speaker',
    price: 89,
    description: 'Portable Bluetooth speaker with amazing sound quality.',
    category: 'Electronics'
  }
];

export const ProductsPage: React.FC = () => {
  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-bold text-gray-900 mb-2">Our Products</h1>
        <p className="text-gray-600">Discover our collection of high-quality products</p>
      </div>

      {/* Products Grid */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product) => (
          <div key={product.id} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
            <div className="h-48 bg-gray-200 flex items-center justify-center">
              <span className="text-gray-500 text-lg">Product Image</span>
            </div>
            <div className="p-6">
              <div className="mb-2">
                <span className="text-sm text-blue-600 font-medium">{product.category}</span>
              </div>
              <h3 className="text-xl font-semibold mb-2">{product.name}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <div className="flex justify-between items-center">
                <span className="text-2xl font-bold text-blue-600">${product.price}</span>
                <div className="space-x-2">
                  <Link
                    to={`/products/${product.id}`}
                    className="bg-gray-100 text-gray-700 px-4 py-2 rounded hover:bg-gray-200 transition-colors"
                  >
                    View Details
                  </Link>
                  <button className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition-colors">
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}; 