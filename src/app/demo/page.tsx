"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Demo from '../components/Demo';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';
import Link from 'next/link';

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function DemoPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <div className="pt-20">
          <Demo />
        </div>
        <div className="relative bg-black py-12">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <p className="text-lg text-blue-200/80 mb-6">
              Ready to get your own AI Receptionist?
            </p>
            <Link
              href="/get-started"
              className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold hover:opacity-90 transition-opacity shadow-[0_30px_80px_-15px_rgba(59,130,246,0.85)] hover:shadow-[0_40px_90px_-10px_rgba(59,130,246,1)]"
            >
              Get Started
            </Link>
          </div>
        </div>
      </RevealLayout>
      <Footer />
    </div>
  );
}

