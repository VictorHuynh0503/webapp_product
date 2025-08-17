import React from 'react';
import { useParams, Link } from 'react-router-dom';

// Mock product data
const products = [
  {
    id: 1,
    name: 'Premium Headphones',
    price: 199,
    description: 'High-quality wireless headphones with noise cancellation technology. Perfect for music lovers and professionals who need to focus in noisy environments.',
    category: 'Electronics',
    features: [
      'Active Noise Cancellation',
      'Bluetooth 5.0',
      '40-hour battery life',
      'Premium audio drivers',
      'Comfortable over-ear design'
    ],
    specs: {
      'Connectivity': 'Bluetooth 5.0, 3.5mm jack',
      'Battery Life': 'Up to 40 hours',
      'Weight': '250g',
      'Material': 'Premium plastic and metal',
      'Warranty': '2 years'
    }
  },
  {
    id: 2,
    name: 'Smart Watch',
    price: 299,
    description: 'Feature-rich smartwatch with comprehensive health monitoring capabilities. Track your fitness goals and stay connected on the go.',
    category: 'Electronics',
    features: [
      'Heart rate monitoring',
      'GPS tracking',
      'Water resistant',
      'Sleep tracking',
      'Notifications'
    ],
    specs: {
      'Display': '1.4" AMOLED',
      'Battery Life': 'Up to 7 days',
      'Water Resistance': '5ATM',
      'Compatibility': 'iOS & Android',
      'Warranty': '1 year'
    }
  }
];

export const ProductDetailPage: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const product = products.find(p => p.id === parseInt(id || '0'));

  if (!product) {
    return (
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 text-center">
        <h1 className="text-2xl font-bold text-gray-900 mb-4">Product Not Found</h1>
        <p className="text-gray-600 mb-6">The product you're looking for doesn't exist.</p>
        <Link to="/products" className="bg-blue-600 text-white px-6 py-3 rounded-lg hover:bg-blue-700 transition-colors">
          Back to Products
        </Link>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Breadcrumb */}
      <nav className="mb-8">
        <ol className="flex items-center space-x-2 text-sm text-gray-500">
          <li><Link to="/" className="hover:text-blue-600">Home</Link></li>
          <li>/</li>
          <li><Link to="/products" className="hover:text-blue-600">Products</Link></li>
          <li>/</li>
          <li className="text-gray-900">{product.name}</li>
        </ol>
      </nav>

      <div className="grid lg:grid-cols-2 gap-12">
        {/* Product Image */}
        <div>
          <div className="h-96 bg-gray-200 rounded-lg flex items-center justify-center">
            <span className="text-gray-500 text-xl">Product Image</span>
          </div>
        </div>

        {/* Product Info */}
        <div>
          <div className="mb-4">
            <span className="text-sm text-blue-600 font-medium">{product.category}</span>
          </div>
          <h1 className="text-3xl font-bold text-gray-900 mb-4">{product.name}</h1>
          <div className="text-3xl font-bold text-blue-600 mb-6">${product.price}</div>
          <p className="text-gray-600 mb-6 leading-relaxed">{product.description}</p>
          
          {/* Features */}
          <div className="mb-6">
            <h3 className="text-lg font-semibold mb-3">Key Features</h3>
            <ul className="space-y-2">
              {product.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <span className="text-green-500 mr-2">✓</span>
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          {/* Add to Cart */}
          <div className="mb-8">
            <button className="w-full bg-blue-600 text-white py-3 px-6 rounded-lg font-semibold hover:bg-blue-700 transition-colors mb-3">
              Add to Cart
            </button>
            <button className="w-full bg-gray-100 text-gray-700 py-3 px-6 rounded-lg font-semibold hover:bg-gray-200 transition-colors">
              Add to Wishlist
            </button>
          </div>
        </div>
      </div>

      {/* Product Specifications */}
      <div className="mt-16">
        <h2 className="text-2xl font-bold text-gray-900 mb-6">Specifications</h2>
        <div className="bg-white rounded-lg shadow-md p-6">
          <div className="grid md:grid-cols-2 gap-6">
            {Object.entries(product.specs).map(([key, value]) => (
              <div key={key} className="border-b border-gray-200 pb-3">
                <dt className="text-sm font-medium text-gray-500">{key}</dt>
                <dd className="text-sm text-gray-900 mt-1">{value}</dd>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}; 