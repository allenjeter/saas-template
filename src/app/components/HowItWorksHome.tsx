"use client";
import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';
import Link from 'next/link';

const steps = [
  {
    number: "1",
    title: "Requirements Session",
    description: "We'll schedule a call to understand your workflows, tone, rules, and specific needs for your AI receptionist."
  },
  {
    number: "2",
    title: "Build & Train Your AI Receptionist",
    description: "We create your custom knowledge base, call scripts, and train the AI to sound natural and helpful for your business."
  },
  {
    number: "3",
    title: "Test with Your Real Call Flows",
    description: "We'll test the AI with your actual call scenarios and iterate until it sounds perfect and handles everything correctly."
  },
  {
    number: "4",
    title: "Go Live with Your Phone Number",
    description: "We connect your dedicated phone number or route your existing number, and your AI receptionist is ready to answer calls 24/7."
  }
];

export default function HowItWorksHome() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            How It Works
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
            A simple 4-step process to get your AI Receptionist up and running
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 mb-12">
          {steps.map((step, index) => (
            <CardSpotlight
              key={index}
              className="group flex flex-col p-6 md:p-8 backdrop-blur-sm backdrop-saturate-150 hover:scale-[1.02] transition-transform duration-300 relative"
              color="rgba(59, 130, 246, 0.45)"
            >
              <div className="flex-1">
                <div className="text-6xl font-bold text-blue-500/30 mb-4">
                  {step.number}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">
                  {step.title}
                </h3>
                <p className="text-blue-200/80 text-sm leading-relaxed">
                  {step.description}
                </p>
              </div>
            </CardSpotlight>
          ))}
        </div>

        <div className="text-center">
          <Link
            href="/how-it-works"
            className="inline-flex items-center justify-center px-8 py-4 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-semibold hover:opacity-90 transition-opacity shadow-[0_30px_80px_-15px_rgba(59,130,246,0.85)] hover:shadow-[0_40px_90px_-10px_rgba(59,130,246,1)]"
          >
            Learn More About the Process
          </Link>
        </div>
      </div>
    </section>
  );
}

