import React, { useState } from 'react';
import { Link } from 'react-router-dom';

interface PricingTier {
  name: string;
  price: number;
  period: string;
  description: string;
  features: string[];
  popular?: boolean;
  cta: string;
  ctaLink: string;
}

const pricingTiers: PricingTier[] = [
  {
    name: 'Starter',
    price: 29,
    period: 'month',
    description: 'Perfect for small businesses getting started',
    features: [
      'Up to 100 products',
      'Basic analytics',
      'Email support',
      'Mobile responsive',
      'SSL certificate',
      'Basic SEO tools'
    ],
    cta: 'Get Started',
    ctaLink: '/contact'
  },
  {
    name: 'Professional',
    price: 79,
    period: 'month',
    description: 'Ideal for growing businesses',
    popular: true,
    features: [
      'Up to 1000 products',
      'Advanced analytics',
      'Priority support',
      'Custom domain',
      'Advanced SEO tools',
      'Inventory management',
      'Multiple payment gateways',
      'Abandoned cart recovery'
    ],
    cta: 'Start Free Trial',
    ctaLink: '/contact'
  },
  {
    name: 'Enterprise',
    price: 199,
    period: 'month',
    description: 'For large-scale operations',
    features: [
      'Unlimited products',
      'Custom analytics dashboard',
      '24/7 phone support',
      'Multiple stores',
      'Advanced automation',
      'Custom integrations',
      'Dedicated account manager',
      'White-label options'
    ],
    cta: 'Contact Sales',
    ctaLink: '/contact'
  }
];

export const PricingPage: React.FC = () => {
  const [billingPeriod, setBillingPeriod] = useState<'month' | 'year'>('month');

  const getPrice = (basePrice: number) => {
    return billingPeriod === 'year' ? Math.round(basePrice * 10) : basePrice;
  };

  const getPeriod = () => {
    return billingPeriod === 'year' ? 'year' : 'month';
  };

  return (
    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
      {/* Page Header */}
      <div className="text-center mb-16">
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Simple, Transparent Pricing</h1>
        <p className="text-xl text-gray-600 max-w-3xl mx-auto">
          Choose the perfect plan for your business. All plans include our core features 
          with no hidden fees or surprises.
        </p>
      </div>

      {/* Billing Toggle */}
      <div className="flex justify-center mb-12">
        <div className="bg-gray-100 rounded-lg p-1">
          <button
            onClick={() => setBillingPeriod('month')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingPeriod === 'month'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Monthly
          </button>
          <button
            onClick={() => setBillingPeriod('year')}
            className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
              billingPeriod === 'year'
                ? 'bg-white text-gray-900 shadow-sm'
                : 'text-gray-600 hover:text-gray-900'
            }`}
          >
            Yearly
            <span className="ml-1 text-xs text-green-600">Save 20%</span>
          </button>
        </div>
      </div>

      {/* Pricing Cards */}
      <div className="grid lg:grid-cols-3 gap-8 mb-16">
        {pricingTiers.map((tier) => (
          <div
            key={tier.name}
            className={`relative bg-white rounded-2xl shadow-lg border-2 p-8 ${
              tier.popular
                ? 'border-blue-500 scale-105'
                : 'border-gray-200'
            }`}
          >
            {tier.popular && (
              <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                <span className="bg-blue-500 text-white px-4 py-2 rounded-full text-sm font-medium">
                  Most Popular
                </span>
              </div>
            )}

            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-2">{tier.name}</h3>
              <p className="text-gray-600 mb-6">{tier.description}</p>
              <div className="mb-4">
                <span className="text-4xl font-bold text-gray-900">${getPrice(tier.price)}</span>
                <span className="text-gray-600">/{getPeriod()}</span>
              </div>
            </div>

            <ul className="space-y-4 mb-8">
              {tier.features.map((feature, index) => (
                <li key={index} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-3 flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  <span className="text-gray-700">{feature}</span>
                </li>
              ))}
            </ul>

            <Link
              to={tier.ctaLink}
              className={`block w-full text-center py-3 px-6 rounded-lg font-semibold transition-colors ${
                tier.popular
                  ? 'bg-blue-600 text-white hover:bg-blue-700'
                  : 'bg-gray-100 text-gray-900 hover:bg-gray-200'
              }`}
            >
              {tier.cta}
            </Link>
          </div>
        ))}
      </div>

      {/* FAQ Section */}
      <div className="bg-gray-50 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
          Frequently Asked Questions
        </h2>
        <div className="grid md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Can I change my plan anytime?
            </h3>
            <p className="text-gray-600">
              Yes, you can upgrade or downgrade your plan at any time. Changes take effect 
              immediately and are prorated.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Is there a setup fee?
            </h3>
            <p className="text-gray-600">
              No setup fees! All plans include free setup and migration assistance from our team.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              What payment methods do you accept?
            </h3>
            <p className="text-gray-600">
              We accept all major credit cards, PayPal, and bank transfers for annual plans.
            </p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-gray-900 mb-3">
              Do you offer refunds?
            </h3>
            <p className="text-gray-600">
              Yes, we offer a 30-day money-back guarantee. If you're not satisfied, 
              we'll refund your payment.
            </p>
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="text-center mt-16">
        <h2 className="text-3xl font-bold text-gray-900 mb-4">
          Ready to Get Started?
        </h2>
        <p className="text-xl text-gray-600 mb-8">
          Join thousands of businesses already using ShopNode to grow their online presence.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            to="/contact"
            className="bg-blue-600 text-white px-8 py-3 rounded-lg font-semibold text-lg hover:bg-blue-700 transition-colors"
          >
            Start Your Free Trial
          </Link>
          <Link
            to="/products"
            className="bg-gray-100 text-gray-900 px-8 py-3 rounded-lg font-semibold text-lg hover:bg-gray-200 transition-colors"
          >
            View Our Products
          </Link>
        </div>
      </div>
    </div>
  );
}; 