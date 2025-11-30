"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import { CardSpotlight } from '../components/ui/card-spotlight';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';
import Link from 'next/link';

const industries = [
  {
    title: "Dental Offices",
    description: "Transform your dental practice with an AI Receptionist that handles new patient intake, answers insurance questions, and schedules appointments seamlessly.",
    typicalCalls: [
      "New patient inquiries and intake",
      "Insurance coverage questions",
      "Appointment scheduling and rescheduling",
      "Treatment information requests",
      "Emergency appointment requests"
    ],
    howItHelps: [
      "24/7 availability for new patient intake",
      "Instant answers to common insurance FAQs",
      "Automated appointment booking with your calendar",
      "Qualifies leads and collects patient information",
      "Routes urgent cases appropriately"
    ]
  },
  {
    title: "Chiropractors",
    description: "Streamline your chiropractic practice with an AI Receptionist that manages recurring visit scheduling, handles intake questions, and provides treatment information.",
    typicalCalls: [
      "Recurring visit scheduling",
      "Intake and health history questions",
      "Treatment plan inquiries",
      "Availability checks",
      "Insurance verification"
    ],
    howItHelps: [
      "Manages recurring appointment patterns",
      "Collects intake information before visits",
      "Answers treatment and technique questions",
      "Checks availability in real-time",
      "Qualifies new patients"
    ]
  },
  {
    title: "Medical Practices",
    description: "Enhance your medical practice with a HIPAA-aware AI Receptionist that handles triage-style questions, routes calls appropriately, and manages appointments.",
    typicalCalls: [
      "Appointment scheduling",
      "Triage and symptom questions",
      "Prescription refill requests",
      "Test results inquiries",
      "Urgent care routing"
    ],
    howItHelps: [
      "HIPAA-compliant call handling",
      "Triage-style questions to route appropriately",
      "Appointment scheduling with urgency levels",
      "Handles routine inquiries 24/7",
      "Immediate escalation for emergencies"
    ]
  },
  {
    title: "Realtors",
    description: "Never miss a lead with an AI Receptionist that schedules showings, provides property information, qualifies leads, and follows up with clients.",
    typicalCalls: [
      "Property showing requests",
      "Property information inquiries",
      "Lead qualification",
      "Client follow-ups",
      "Open house scheduling"
    ],
    howItHelps: [
      "Schedules showings based on availability",
      "Provides property details and pricing",
      "Qualifies leads with key questions",
      "Follows up with interested clients",
      "Manages multiple listing inquiries"
    ]
  },
  {
    title: "Other Small Businesses",
    description: "Custom AI Receptionist solutions for home services, salons, wellness centers, and any small service business that needs better call handling.",
    typicalCalls: [
      "Service inquiries",
      "Appointment scheduling",
      "Pricing questions",
      "Availability checks",
      "General information"
    ],
    howItHelps: [
      "Customized to your specific business needs",
      "Handles your unique FAQs and workflows",
      "Schedules appointments in your system",
      "Qualifies leads and collects information",
      "Provides consistent 24/7 service"
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

export default function IndustriesPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <section className="relative bg-black py-24 overflow-hidden pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
          
          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-16 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Who We Serve
              </h1>
              <p className="text-lg md:text-xl text-blue-200/80 max-w-3xl mx-auto">
                Custom AI Receptionist solutions tailored to your industry and business needs
              </p>
            </div>

            <div className="space-y-16">
              {industries.map((industry, index) => (
                <CardSpotlight
                  key={index}
                  className="group flex flex-col p-8 md:p-10 backdrop-blur-sm backdrop-saturate-150"
                  color="rgba(59, 130, 246, 0.45)"
                >
                  <div className="mb-6">
                    <h2 className="text-3xl font-bold text-white mb-4">
                      {industry.title}
                    </h2>
                    <p className="text-lg text-blue-200/90">
                      {industry.description}
                    </p>
                  </div>

                  <div className="grid md:grid-cols-2 gap-8">
                    <div>
                      <h3 className="text-xl font-semibold text-blue-300 mb-4">
                        Typical Calls
                      </h3>
                      <ul className="space-y-2">
                        {industry.typicalCalls.map((call, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">•</span>
                            <span className="text-blue-100/80">{call}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div>
                      <h3 className="text-xl font-semibold text-blue-300 mb-4">
                        How AI Receptionist Helps
                      </h3>
                      <ul className="space-y-2">
                        {industry.howItHelps.map((help, i) => (
                          <li key={i} className="flex items-start gap-2">
                            <span className="text-blue-500 mt-1">✓</span>
                            <span className="text-blue-100/80">{help}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </CardSpotlight>
              ))}
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

