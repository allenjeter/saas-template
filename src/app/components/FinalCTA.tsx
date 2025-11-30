"use client";
import React from 'react';
import Link from 'next/link';

export default function FinalCTA() {
  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-blue-500/20 rounded-full blur-[128px]" />
      </div>
      
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600 mb-6">
          Ready to stop missing calls?
        </h2>
        <p className="text-xl md:text-2xl text-blue-200/90 mb-8">
          Get started today and never miss another lead or appointment.
        </p>
        <Link
          href="/get-started"
          className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-gradient-to-r from-blue-500 to-blue-700 text-white text-lg font-bold hover:opacity-90 transition-opacity shadow-[0_30px_80px_-15px_rgba(59,130,246,0.85)] hover:shadow-[0_40px_90px_-10px_rgba(59,130,246,1)]"
        >
          Get Started
        </Link>
      </div>
    </section>
  );
}

