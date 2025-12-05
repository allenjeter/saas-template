"use client";
import React from 'react';
import Link from 'next/link';
import { ContainerScroll } from './ui/container-scroll-animation';
import Image from "next/image";
import DashboardImage from "../../../public/alphait-image.jpg";

export default function Hero() {
  return (
    <div className="relative bg-gradient-to-b from-gray-900 to-gray-950 overflow-hidden pt-10 -mb-10">
      <div className="absolute inset-0 bg-black">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff33_1px,transparent_1px)] [mask-image:radial-gradient(circle_at_center,_black,transparent_90%)] [background-size:16px_16px]" />
      </div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[40rem] h-[40rem]">
        <div className="absolute inset-0 bg-blue-500/30 rounded-full blur-[128px]" />
      </div>
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="flex flex-col gap-12">
          <div className="mx-auto max-w-3xl text-center space-y-8">
            <div className="space-y-4">
              <h1 className="mt-56 text-5xl sm:text-6xl lg:text-7xl font-bold bg-gradient-to-r from-blue-300 to-blue-500 bg-clip-text text-transparent leading-tight">
                Finally, a 24/7 AI Receptionist for Small Service Businesses
              </h1>
              <p className="text-lg sm:text-xl max-w-3xl mx-auto font-light text-blue-200/90">
                Stop missing calls, leads, and appointments. Alpha IT builds a custom AI Receptionist that answers questions, schedules appointments, and qualifies leads for your business.
              </p>
              <p className="text-base sm:text-lg max-w-3xl mx-auto font-light text-blue-300/70">
                Perfect for dental offices, chiropractic clinics, medical practices, realtors, and other small service businesses.
              </p>
              <p className="text-sm sm:text-base max-w-3xl mx-auto font-light text-blue-400/60 pt-2">
                One-time $1,000 setup, plus optional managed service from $250/month. Pay a one-time setup fee to build your AI receptionist. Keep things lean with usage-based billing, or add a managed service plan from $250/month if you&apos;d like us to handle updates, tuning, and support.
              </p>
            </div>
            
            <div className="flex justify-center gap-4 flex-wrap items-center pt-4">
              <Link 
                href="/get-started" 
                className="relative inline-flex h-14 overflow-hidden rounded-full p-[1px] focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 focus:ring-offset-slate-50 transition-transform hover:scale-105"
              >
                <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#60A5FA_0%,#1D4ED8_50%,#60A5FA_100%)]" />
                <span className="inline-flex h-full w-full cursor-pointer items-center justify-center rounded-full bg-slate-950 px-10 text-lg font-bold text-white backdrop-blur-3xl relative z-10">
                  Get Started
                </span>
              </Link>
              <Link 
                href="/how-it-works" 
                className="inline-flex items-center justify-center h-14 rounded-full bg-transparent border-2 border-blue-500/50 px-10 text-lg font-semibold text-blue-300 hover:bg-blue-500/10 hover:border-blue-400 transition-all duration-300"
              >
                See How It Works
              </Link>
            </div>
          </div>

          <div className="flex flex-col overflow-hidden -mt-64">
            <ContainerScroll
              titleComponent={null}
            >
              <Image
                src={DashboardImage}
                alt="AI Receptionist Dashboard - Call Center Metrics and Analytics"
                height={600}
                width={1000}
                className="mx-auto rounded-2xl object-cover h-full object-left-top"
                draggable={false}
              />
            </ContainerScroll>
          </div>
        </div>
      </div>
    </div>
  );
}