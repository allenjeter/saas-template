"use client";
import React from 'react';
import { Check } from 'lucide-react';
import { CardSpotlight } from './ui/card-spotlight';

const packageItems = [
  {
    title: "Requirements & Workflow Session",
    description: "We&apos;ll understand your business workflows, tone, and specific rules to create the perfect AI receptionist."
  },
  {
    title: "Custom FAQ & Knowledge Base",
    description: "Your AI will be trained on your specific FAQs, services, pricing, and business information."
  },
  {
    title: "Dedicated Phone Number or Call Routing",
    description: "We&apos;ll set up a dedicated phone number or configure call forwarding from your existing number."
  },
  {
    title: "Scheduling Integration",
    description: "Connect with Calendly, Google Calendar, or your practice management system for seamless appointment booking."
  },
  {
    title: "Lead Qualification Logic",
    description: "Custom logic to qualify leads, ask the right questions, and route urgent calls appropriately."
  },
  {
    title: "Testing & Launch",
    description: "We&apos;ll test with your real call flows, iterate until it&apos;s perfect, and then go live."
  }
];

export default function WhatYouGet() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            What You Get
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
            Everything included in your $1,000 one-time setup fee
          </p>
          <div className="mt-8 inline-block px-6 py-3 rounded-full bg-blue-500/20 border border-blue-500/30">
            <p className="text-2xl font-bold text-blue-300">
              One-time setup fee: <span className="text-white">$1,000</span>
            </p>
            <p className="text-sm text-blue-200/70 mt-1">No surprise monthly contracts</p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {packageItems.map((item, index) => (
            <CardSpotlight
              key={index}
              className="group flex flex-col p-6 md:p-8 backdrop-blur-sm backdrop-saturate-150 hover:scale-[1.02] transition-transform duration-300"
              color="rgba(59, 130, 246, 0.45)"
            >
              <div className="flex-1">
                <div className="flex items-start gap-3 mb-4">
                  <Check className="w-6 h-6 text-blue-500 shrink-0 mt-1" />
                  <h3 className="text-xl font-semibold text-white">
                    {item.title}
                  </h3>
                </div>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}

