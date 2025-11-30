"use client";
import React from 'react';
import { CardSpotlight } from './ui/card-spotlight';

const industries = [
  {
    title: "Dental Offices",
    description: "New patient intake, insurance FAQs, appointment booking, and treatment information.",
    features: [
      "New patient intake",
      "Insurance FAQs",
      "Appointment booking",
      "Treatment information"
    ]
  },
  {
    title: "Chiropractors",
    description: "Recurring visit scheduling, intake questions, treatment plan inquiries, and availability checks.",
    features: [
      "Recurring visit scheduling",
      "Intake questions",
      "Treatment plan inquiries",
      "Availability checks"
    ]
  },
  {
    title: "Medical Practices",
    description: "HIPAA-aware call flows, triage-style questions, appointment routing, and urgent call handling.",
    features: [
      "HIPAA-aware call flows",
      "Triage-style questions",
      "Appointment routing",
      "Urgent call handling"
    ]
  },
  {
    title: "Realtors",
    description: "Showing scheduling, property information, lead qualifying, and client follow-ups.",
    features: [
      "Showing scheduling",
      "Property information",
      "Lead qualifying",
      "Client follow-ups"
    ]
  },
  {
    title: "Other Small Businesses",
    description: "Home services, salons, wellness centers, and more. Customized to your specific needs.",
    features: [
      "Home services",
      "Salons & spas",
      "Wellness centers",
      "Custom solutions"
    ]
  }
];

export default function WhoWeServe() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Who We Serve
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
            Custom AI Receptionist solutions tailored to your industry
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {industries.map((industry, index) => (
            <CardSpotlight
              key={index}
              className="group flex flex-col p-6 md:p-8 backdrop-blur-sm backdrop-saturate-150 hover:scale-[1.02] transition-transform duration-300"
              color="rgba(59, 130, 246, 0.45)"
            >
              <div className="flex-1">
                <h3 className="text-xl font-semibold text-white mb-3">
                  {industry.title}
                </h3>
                <p className="text-blue-200/80 mb-4">
                  {industry.description}
                </p>
                <ul className="space-y-2">
                  {industry.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      <span className="text-blue-100/70 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </CardSpotlight>
          ))}
        </div>
      </div>
    </section>
  );
}

