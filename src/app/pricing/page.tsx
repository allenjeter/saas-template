"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import Pricing from '../components/Pricing';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <div className="pt-20">
          <Pricing />
        </div>
      </RevealLayout>
      <Footer />
    </div>
  );
}

