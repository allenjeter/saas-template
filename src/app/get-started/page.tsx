"use client";
import React, { useState } from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';
import { CardSpotlight } from '../components/ui/card-spotlight';

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function GetStartedPage() {
  const [formData, setFormData] = useState({
    name: '',
    businessName: '',
    industry: '',
    email: '',
    phone: '',
    currentPhoneProvider: '',
    biggestProblem: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Handle form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    // In a real app, you would send this to your backend
  };

  if (submitted) {
    return (
      <div className="min-h-screen bg-black">
        <Header />
        <div className="pt-32 pb-24">
          <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <div className="bg-blue-950/30 border border-blue-500/20 rounded-2xl p-12 backdrop-blur-sm">
              <div className="text-6xl mb-6">✓</div>
              <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Thank You!
              </h1>
              <p className="text-lg text-blue-200/80 mb-8">
                We've received your information and will contact you soon to schedule your requirements session.
              </p>
              <p className="text-base text-blue-200/60">
                You'll receive a confirmation email shortly with next steps.
              </p>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <section className="relative bg-black py-24 overflow-hidden pt-32">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
          
          <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12 space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
                Get Started with Your AI Receptionist
              </h1>
              <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
                Fill out the form below and we'll use your answers to prepare for your requirements call. We'll schedule a time that works for you to discuss your needs and get started.
              </p>
            </div>

            <CardSpotlight
              className="p-8 md:p-10 backdrop-blur-sm backdrop-saturate-150"
              color="rgba(59, 130, 246, 0.45)"
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-blue-200 mb-2">
                    Your Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    required
                    value={formData.name}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="John Doe"
                  />
                </div>

                <div>
                  <label htmlFor="businessName" className="block text-sm font-medium text-blue-200 mb-2">
                    Business Name *
                  </label>
                  <input
                    type="text"
                    id="businessName"
                    name="businessName"
                    required
                    value={formData.businessName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="ABC Dental Practice"
                  />
                </div>

                <div>
                  <label htmlFor="industry" className="block text-sm font-medium text-blue-200 mb-2">
                    Industry *
                  </label>
                  <select
                    id="industry"
                    name="industry"
                    required
                    value={formData.industry}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                  >
                    <option value="">Select an industry</option>
                    <option value="dental">Dental</option>
                    <option value="chiropractic">Chiropractic</option>
                    <option value="medical">Medical Practice</option>
                    <option value="real-estate">Real Estate</option>
                    <option value="other">Other Small Business</option>
                  </select>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-blue-200 mb-2">
                    Email *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    required
                    value={formData.email}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="john@example.com"
                  />
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-medium text-blue-200 mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    name="phone"
                    required
                    value={formData.phone}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="(555) 123-4567"
                  />
                </div>

                <div>
                  <label htmlFor="currentPhoneProvider" className="block text-sm font-medium text-blue-200 mb-2">
                    Current Phone Provider or Main Phone Number
                  </label>
                  <input
                    type="text"
                    id="currentPhoneProvider"
                    name="currentPhoneProvider"
                    value={formData.currentPhoneProvider}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20"
                    placeholder="Verizon, AT&T, or your main number"
                  />
                </div>

                <div>
                  <label htmlFor="biggestProblem" className="block text-sm font-medium text-blue-200 mb-2">
                    What's your biggest problem with call handling right now? *
                  </label>
                  <textarea
                    id="biggestProblem"
                    name="biggestProblem"
                    required
                    rows={4}
                    value={formData.biggestProblem}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-blue-950/30 border border-blue-500/20 text-white placeholder:text-blue-200/50 focus:outline-none focus:border-blue-500/50 focus:ring-2 focus:ring-blue-500/20 resize-none"
                    placeholder="Tell us about missed calls, after-hours inquiries, scheduling challenges, or any other issues you're facing..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-4 px-6 rounded-lg bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold hover:opacity-90 transition-opacity shadow-[0_30px_80px_-15px_rgba(59,130,246,0.85)] hover:shadow-[0_40px_90px_-10px_rgba(59,130,246,1)]"
                >
                  Submit & Get Started
                </button>
              </form>
            </CardSpotlight>

            <div className="mt-8 text-center text-blue-200/60 text-sm">
              <p>By submitting this form, you agree to be contacted by Alpha IT about your AI Receptionist setup.</p>
            </div>
          </div>
        </section>
      </RevealLayout>
      <Footer />
    </div>
  );
}

