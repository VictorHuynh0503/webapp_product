import React from 'react';

export const AboutPage: React.FC = () => {
  return (
    <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">About ShopNode</h1>
        <p className="text-xl text-gray-600">Your trusted partner for quality products and exceptional service</p>
      </div>

      {/* Company Story */}
      <div className="bg-white rounded-lg shadow-md p-8 mb-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">Our Story</h2>
        <p className="text-gray-600 leading-relaxed mb-4">
          Founded in 2024, ShopNode began with a simple mission: to provide customers with high-quality products 
          at competitive prices while delivering an exceptional shopping experience. What started as a small 
          online store has grown into a trusted destination for tech enthusiasts and everyday consumers alike.
        </p>
        <p className="text-gray-600 leading-relaxed">
          We believe that everyone deserves access to innovative technology and reliable accessories that enhance 
          their daily lives. That's why we carefully curate our product selection, working only with reputable 
          brands and manufacturers who share our commitment to quality and customer satisfaction.
        </p>
      </div>

      {/* Mission & Values */}
      <div className="grid md:grid-cols-2 gap-8 mb-8">
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Mission</h3>
          <p className="text-gray-600">
            To simplify the shopping experience by offering carefully selected, high-quality products 
            with transparent pricing and exceptional customer service.
          </p>
        </div>
        <div className="bg-white rounded-lg shadow-md p-6">
          <h3 className="text-xl font-bold text-gray-900 mb-3">Our Values</h3>
          <ul className="text-gray-600 space-y-2">
            <li>• Quality over quantity</li>
            <li>• Customer satisfaction first</li>
            <li>• Transparent and honest pricing</li>
            <li>• Continuous improvement</li>
          </ul>
        </div>
      </div>

      {/* Team */}
      <div className="bg-white rounded-lg shadow-md p-8">
        <h2 className="text-2xl font-bold text-gray-900 mb-6 text-center">Our Team</h2>
        <div className="grid md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👨‍💼</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">John Smith</h3>
            <p className="text-gray-600">Founder & CEO</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👩‍💻</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Sarah Johnson</h3>
            <p className="text-gray-600">Head of Operations</p>
          </div>
          <div className="text-center">
            <div className="w-24 h-24 bg-gray-200 rounded-full mx-auto mb-4 flex items-center justify-center">
              <span className="text-gray-500 text-2xl">👨‍🔧</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-900 mb-2">Mike Davis</h3>
            <p className="text-gray-600">Customer Support Lead</p>
          </div>
        </div>
      </div>
    </div>
  );
}; 