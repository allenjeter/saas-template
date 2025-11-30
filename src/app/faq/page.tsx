"use client";
import React from 'react';
import Header from '../components/header';
import Footer from '../components/Footer';
import FAQ from '../components/FAQ';
import { RevealOnScroll } from '../components/ui/reveal-on-scroll';

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <div className="pt-20">
          <FAQ />
        </div>
      </RevealLayout>
      <Footer />
    </div>
  );
}

