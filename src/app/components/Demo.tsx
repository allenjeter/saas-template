"use client";
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';

const ELEVEN_LABS_SCRIPT_SRC = 'https://unpkg.com/@elevenlabs/convai-widget-embed';

export default function Demo() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const existingScript = document.querySelector(`script[src="${ELEVEN_LABS_SCRIPT_SRC}"]`);

    if (!existingScript) {
      const script = document.createElement('script');
      script.src = ELEVEN_LABS_SCRIPT_SRC;
      script.async = true;
      script.type = 'text/javascript';
      document.body.appendChild(script);
    }

    return () => {
      // Optional cleanup: leave the script in place since other components might reuse it.
    };
  }, []);

  return (
    <section className="relative bg-black py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 space-y-4">
          <h2 className="text-4xl md:text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-blue-600">
            Try Our AI Receptionist
          </h2>
          <p className="text-lg md:text-xl text-blue-200/80 max-w-2xl mx-auto">
            Experience how our AI Receptionist handles calls, answers questions, and schedules appointments. Give it a try below!
          </p>
          <Link 
            href="/demo" 
            className="inline-block mt-4 text-blue-400 hover:text-blue-300 transition-colors text-sm font-medium"
          >
            View full demo page →
          </Link>
        </div>

        <div ref={containerRef} className="flex justify-center items-center min-h-[600px] w-full">
          <div className="w-full max-w-4xl flex justify-center">
            {React.createElement('elevenlabs-convai', { 'agent-id': 'agent_1501kaez75y0e0hbjdhghq5mm5nb' })}
          </div>
        </div>
      </div>
    </section>
  );
}

