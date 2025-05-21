// components/TierPlans.jsx

import { Link } from "react-router-dom";

const tiers = [
  {
    name: "Basic",
    price: "$999",
    recommended: "(Recommended)",
    features: [
      "1-page custom-designed website",
      "Mobile responsive",
      "Contact form",
      "Basic SEO setup",
      "Fast loading & secure",
      "Up to 2 revision rounds",
    ],
    border: "border-blue-500",
  },
  {
    name: "Business",
    price: "$2,500",
    features: [
      "Everything in Starter",
      "Up to 5 pages",
      "Advanced layout components",
      "Scroll animations / storytelling",
      "On-page SEO",
      "1 hour post-launch support",
    ],
    border: "border-purple-500",
  },
  {
    name: "Premium",
    price: "$4,500+",
    features: [
      "Everything in Business",
      "Fully custom animation/scrollytelling",
      "Performance optimization",
      "Custom interactive components",
      "Ongoing update plan available",
      "1 month of support",
    ],
    border: "border-pink-500",
  },
];

export default function TierPlans() {
  return (
    <section className='w-full py-36 px-6 bg-gradient-to-b from-[#00001f] to-purple-900 text-white text-center'>
      <h2 className='text-4xl font-bold mb-4 text-blue-400'>
        Choose Your Plan
      </h2>
      <div className='max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8 mt-12'>
        {tiers.map((tier, index) => (
          <div
            key={index}
            className={`border ${tier.border} rounded-2xl p-8 py-20 bg-[#111827] shadow-lg hover:scale-105 transform transition`}
          >
            <h3 className='text-2xl font-semibold text-blue-300 mb-2'>
              {tier.name}
            </h3>
            <p className='text-4xl font-bold mb-6 text-white'>{tier.price}</p>
            <p className='text-md mb-1 text-gray-300'>{tier.recommended}</p>
            <ul className='space-y-2 mb-6'>
              {tier.features.map((feature, i) => (
                <li key={i} className='text-gray-300'>
                  ✓ {feature}
                </li>
              ))}
            </ul>
            <Link to={`/contact?tier=${tier.name.toLowerCase()}`}>
              <button className='mt-auto bg-gradient-to-r from-blue-500 to-purple-500 text-white py-2 px-6 rounded-full hover:from-blue-400 hover:to-purple-400 transition'>
                Get Started
              </button>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}
