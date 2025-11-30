import { Check } from 'lucide-react';
import React, { useMemo } from 'react';
import Link from 'next/link';
import { CardSpotlight } from './ui/card-spotlight';

const plans = [
  {
    name: 'AI Receptionist Setup',
    price: '$1,000',
    popular: true,
    oneTime: true,
    features: [
      'Requirements & workflow session',
      'Custom FAQ and knowledge base',
      'Dedicated number or call routing setup',
      'Scheduling integration',
      'Lead qualification logic',
      'Testing and launch'
    ]
  }
];

const ongoingPlans = [
  {
    name: 'Pay-as-you-go',
    price: '$0/month + usage',
    features: [
      'No monthly management fee',
      'You pay call and voice usage at pass-through cost',
      'Request changes and updates on an as-needed basis'
    ]
  },
  {
    name: 'Managed AI Receptionist',
    price: 'From $250/month + usage',
    popular: false,
    features: [
      'Ongoing script and FAQ updates',
      'Monitoring and light optimization of call flows',
      'Priority support',
      'Monthly summary of call performance and insights',
      'Vendor management for telephony and AI usage',
      'Multilingual support - AI receptionist can speak in many languages (additional cost included)'
    ]
  }
];

const generateRandomGradient = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = 300 + Math.random() * 500; // Increased size range
  const opacity = 0.2 + Math.random() * 0.4; // Increased opacity range
  
  return `radial-gradient(circle ${size}px at ${x}% ${y}%, rgba(59, 130, 246, ${opacity}) 0%, transparent 70%)`; // Increased gradient reach
};

export default function Pricing() {
  const cardGradients = useMemo(() => {
    return plans.map(() => {
      const numGradients = 1 + Math.floor(Math.random() * 3);
      const gradients = Array(numGradients).fill(0).map(generateRandomGradient);
      return gradients.join(', ');
    });
  }, []);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Simple, Transparent Pricing
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
            One-time $1,000 setup. Optional managed service from $250/month. Call and voice usage billed separately.
          </p>
        </div>

        <div className="grid md:grid-cols-1 gap-6 lg:gap-8 items-stretch max-w-2xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <CardSpotlight 
              key={index}
              className={`group flex flex-col p-6 md:p-8 backdrop-blur-sm backdrop-saturate-150 ${
                plan.popular 
                  ? 'ring-2 ring-blue-500/50 scale-105 shadow-lg shadow-blue-500/20' 
                  : 'hover:scale-[1.02] transition-transform duration-300'
              }`}
              style={{
                background: cardGradients[index]
              }}
              color={plan.popular ? "rgba(29, 78, 216, 0.55)" : "rgba(59, 130, 246, 0.45)"}
            >
              <div className="flex-1">
                {plan.popular && (
                  <span className="inline-block px-4 py-1 rounded-full bg-blue-500/20 text-blue-300 text-sm font-medium mb-4 border border-blue-500/20">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-semibold text-white mb-2">
                  {plan.name}
                </h3>
                <div className="mb-8 flex items-baseline">
                  <span className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">{plan.price}</span>
                  {plan.oneTime && <span className="text-blue-200/60 ml-2 text-lg">(one-time)</span>}
                </div>
                <ul className="space-y-4 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3">
                      <Check className="w-5 h-5 text-blue-500 shrink-0" />
                      <span className="text-blue-100/80">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <Link 
                  href="/get-started"
                  className={`w-full block text-center py-4 px-6 rounded-lg font-semibold transition-all duration-300 ${
                    plan.popular
                      ? 'bg-blue-600 hover:bg-blue-700 text-white shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40'
                      : 'bg-gray-800 text-white hover:bg-gray-700 hover:shadow-lg'
                  }`}
                >
                  Get Started
                </Link>
              </div>
            </CardSpotlight>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-16">
          <h3 className="text-2xl md:text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 text-center mb-8">
            Ongoing Options After Launch
          </h3>
          <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
            {ongoingPlans.map((plan, index) => (
              <CardSpotlight 
                key={index}
                className="group flex flex-col p-6 md:p-8 backdrop-blur-sm backdrop-saturate-150 hover:scale-[1.02] transition-transform duration-300"
                color="rgba(59, 130, 246, 0.45)"
              >
                <div className="flex-1">
                  <h3 className="text-xl font-semibold text-white mb-2">
                    {plan.name}
                  </h3>
                  <div className="mb-6 flex items-baseline">
                    <span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">{plan.price}</span>
                  </div>
                  <ul className="space-y-3">
                    {plan.features.map((feature, i) => (
                      <li key={i} className="flex items-start gap-3">
                        <Check className="w-5 h-5 text-blue-500 shrink-0 mt-0.5" />
                        <span className="text-blue-100/80 text-sm">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </CardSpotlight>
            ))}
          </div>
          <p className="text-center text-blue-200/60 text-sm mt-8 max-w-3xl mx-auto">
            All plans include pass-through billing for voice and telephony usage at cost.
          </p>
        </div>
      </div>
    </section>
  );
}