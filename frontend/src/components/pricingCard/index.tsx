// components/PricingCard.tsx
import React from 'react';

interface PricingCardProps {
  title: string;
  price: string;
  description: string;
  features: string[];
  isPopular?: boolean;
}

const PricingCard: React.FC<PricingCardProps> = ({ title, price, description, features, isPopular }) => {
  return (
    <div className={`rounded-xl border shadow-md p-6 bg-white text-red-600 relative max-w-md w-full hover:shadow-xl transition-all duration-300`}>
      {isPopular && (
        <div className="absolute top-0 right-0 bg-red-600 text-white text-sm px-3 py-1 rounded-bl-xl font-semibold">
          Most Popular
        </div>
      )}
      <h3 className="text-2xl font-bold mb-2 text-red-700">{title}</h3>
      <p className="text-4xl font-extrabold text-red-600 mb-4">{price}</p>
      <p className="text-sm mb-6 text-gray-600">{description}</p>
      <ul className="mb-6 space-y-2">
        {features.map((feature, idx) => (
          <li key={idx} className="flex items-center text-gray-700">
            ✅ <span className="ml-2">{feature}</span>
          </li>
        ))}
      </ul>
      <button className="w-full bg-red-600 text-white py-2 px-4 rounded-lg font-semibold hover:bg-red-700 transition">
        Get Started
      </button>
    </div>
  );
};

export default PricingCard;
