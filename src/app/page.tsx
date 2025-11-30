"use client";
import Hero from "./components/Hero";
import Footer from "./components/Footer";
import FAQ from "./components/FAQ";
import { RevealOnScroll } from "./components/ui/reveal-on-scroll";
import Header from "./components/header";
import React from "react";
import WhoWeServe from "./components/WhoWeServe";
import WhatYouGet from "./components/WhatYouGet";
import HowItWorksHome from "./components/HowItWorksHome";
import FinalCTA from "./components/FinalCTA";

function RevealLayout({ children }: { children: React.ReactNode }) {
  return React.Children.map(children, (child) => (
    <RevealOnScroll width="100%">
      {child}
    </RevealOnScroll>
  ));
}

export default function Home() {
  return (
    <div className="min-h-screen bg-black">
      <Header />
      <RevealLayout>
        <Hero />
        <WhoWeServe />
        <WhatYouGet />
        <HowItWorksHome />
        <FAQ />
        <FinalCTA />
        <Footer />
      </RevealLayout>
    </div>
  );
}