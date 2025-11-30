"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import { CardSpotlight } from '../components/ui/card-spotlight';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';
import Link from 'next/link';

const steps = [
  {
    number: "1",
    title: "Requirements & FAQ Session",
    description: "We'll schedule a comprehensive call to understand your business workflows, tone, rules, and specific needs. We'll collect your FAQs, common questions, and learn how you currently handle calls.",
    details: [
      "Understanding your business workflows and processes",
      "Collecting your FAQs and common questions",
      "Defining your tone and communication style",
      "Establishing rules for call handling and routing",
      "Identifying integration needs (calendars, CRM, etc.)"
    ]
  },
  {
    number: "2",
    title: "Build & Training",
    description: "We create your custom knowledge base, call scripts, and train the AI to sound natural and helpful for your specific business. The AI learns your services, pricing, policies, and how to handle different scenarios.",
    details: [
      "Creating your custom knowledge base",
      "Developing natural call scripts and flows",
      "Training the AI on your specific business",
      "Configuring scheduling integrations",
      "Setting up lead qualification logic"
    ]
  },
  {
    number: "3",
    title: "Testing",
    description: "We'll test the AI Receptionist with your actual call scenarios and iterate until it sounds perfect and handles everything correctly. You'll have the opportunity to review and request changes.",
    details: [
      "Testing with real call scenarios",
      "Reviewing AI responses and call flows",
      "Iterating based on your feedback",
      "Fine-tuning tone and accuracy",
      "Ensuring all edge cases are handled"
    ]
  },
  {
    number: "4",
    title: "Go Live",
    description: "We connect your dedicated phone number or route your existing number, and your AI Receptionist is ready to answer calls 24/7. You'll receive training on how to monitor and manage your AI Receptionist.",
    details: [
      "Setting up dedicated number or call routing",
      "Final testing with live phone system",
      "Going live with 24/7 availability",
      "Training on monitoring and management",
      "Ongoing support and optimization"
    ]
  }
];

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function HowItWorksPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <section className="relative bg-black py-24 overflow-hidden pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                How It Works
              </h1>
              <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto">
                A simple 4-step process to get your AI Receptionist up and running. We use modern AI technology and telephony integration to create a seamless experience for your callers.
              </p>
            </div>

            <div className="space-y-12 mb-16">
              {steps.map((step, index) => (
                <CardSpotlight
                  key={index}
                  className="group flex flex-col md:flex-row gap-8 p-8 md:p-10 backdrop-blur-sm backdrop-saturate-150"
                  color="rgba(59, 130, 246, 0.45)"
                >
                  <div className="flex-shrink-0">
                    <div className="text-8xl font-bold text-blue-500/30">
                      {step.number}
                    </div>
                  </div>
                  <div className="flex-1">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {step.title}
                    </h2>
                    <p className="text-lg text-blue-200/90 mb-6">
                      {step.description}
                    </p>
                    <ul className="space-y-2">
                      {step.details.map((detail, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <span className="text-blue-500 mt-1">•</span>
                          <span className="text-blue-100/80">{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </CardSpotlight>
              ))}
            </div>

            <div className="bg-blue-950/30 border border-blue-500/20 rounded-2xl p-8 md:p-10 backdrop-blur-sm">
              <h3 className="text-2xl font-bold text-white mb-4">
                Modern Technology, Simple Process
              </h3>
              <p className="text-blue-200/80 leading-relaxed">
                Our AI Receptionist uses cutting-edge artificial intelligence and natural language processing to understand and respond to callers just like a human receptionist would. We integrate with modern telephony systems to ensure reliable call handling, and we work with your existing scheduling and calendar systems for seamless appointment booking. The technology is sophisticated, but the process is straightforward—we handle all the technical details so you can focus on your business.
              </p>
            </div>

            <div className="text-center mt-16">
              <Link
                href="/get-started"
                className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold hover:opacity-90 transition-opacity shadow-[0_30px_80px_-15px_rgba(59,130,246,0.85)] hover:shadow-[0_40px_90px_-10px_rgba(59,130,246,1)]"
              >
                Get Started Today
              </Link>
            </div>
          </div>
        </section>
      </RevealLayout>
      <Footer />
    </div>
  );
}

