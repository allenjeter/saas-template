"use client";
import React, { useMemo } from 'react';
import { motion } from 'framer-motion';

const faqs = [
  {
    question: "Is this a one-time fee or a subscription?",
    answer: "There is a one-time $1,000 setup fee to design, train, and launch your AI receptionist. After that, you can either stay on a simple pay-as-you-go model (no monthly management fee, just usage costs) or choose an optional managed plan starting at $250/month if you&apos;d like us to handle updates, tuning, and support."
  },
  {
    question: "What ongoing costs should I expect?",
    answer: "Every call has underlying usage fees (for telephony and AI voice) through providers like Twilio, ElevenLabs, and Cal.com. These are billed as pass-through voice/usage costs. If you choose the managed plan, there&apos;s also a flat monthly fee starting at $250/month for ongoing support and optimization."
  },
  {
    question: "Do I have to pay the monthly managed fee?",
    answer: "No. The managed plan is optional. Many clients start with the one-time setup and pay only the underlying usage fees. The managed plan is for teams who want us to continuously update scripts, monitor performance, and handle changes for them."
  },
  {
    question: "Can I switch into or out of the managed plan later?",
    answer: "Yes. You can start on pay-as-you-go and upgrade to a managed plan later, or downgrade out of the managed plan if you prefer to handle updates yourself."
  },
  {
    question: "How do you work with my existing phone number?",
    answer: "We can either set up a dedicated phone number for your AI Receptionist, or configure call forwarding from your existing number. During the requirements session, we&apos;ll discuss which option works best for your business."
  },
  {
    question: "Will callers know they're speaking with AI?",
    answer: "The AI Receptionist is designed to sound natural and professional. While we recommend transparency, the AI can be configured to introduce itself however you prefer. Many businesses find that callers appreciate the 24/7 availability and consistent service."
  },
  {
    question: "How do you handle urgent or emergency calls?",
    answer: "During setup, we&apos;ll configure your AI Receptionist with specific protocols for urgent situations. It can immediately transfer emergency calls, route urgent medical calls to on-call staff, or escalate based on your business rules."
  },
  {
    question: "What schedules/calendars do you integrate with?",
    answer: "We integrate with popular scheduling systems including Calendly, Google Calendar, and many practice management systems. During the requirements session, we&apos;ll confirm which system you use and ensure seamless integration."
  },
  {
    question: "How long does setup take?",
    answer: "Typically, setup takes 2-4 weeks from the initial requirements session to going live. This includes gathering requirements, building and training the AI, testing, and final deployment. We&apos;ll work at your pace to ensure everything is perfect."
  }
];

const generateRandomGradient = () => {
  const x = Math.random() * 100;
  const y = Math.random() * 100;
  const size = 50 + Math.random() * 100; // Reduced size for more subtle effect
  const opacity = 0.05 + Math.random() * 0.1; // Much lower opacity
  
  return `radial-gradient(circle ${size}px at ${x}% ${y}%, rgba(59, 130, 246, ${opacity}) 0%, transparent 100%)`;
};

export default function FAQ() {
  const [openIndex, setOpenIndex] = React.useState<number | null>(null);

  const cardGradients = useMemo(() => {
    return faqs.map(() => {
      const baseGradient = 'linear-gradient(to bottom, rgba(30, 58, 138, 0.1), rgba(30, 58, 138, 0.05))';
      const numGradients = 2 + Math.floor(Math.random() * 2); // 2-3 gradients
      const overlayGradients = Array(numGradients).fill(0).map(generateRandomGradient);
      return [baseGradient, ...overlayGradients].join(', ');
    });
  }, []);

  return (
    <section className="relative overflow-hidden bg-black py-24">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_#ffffff0a_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(circle_at_center,_black,transparent_75%)]" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-5xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 via-blue-500 to-blue-600 py-8">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-lg text-blue-200/80">
            Everything you need to know about AI Receptionist
          </p>
        </div>

        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="group rounded-2xl border border-blue-500/20 backdrop-blur-sm overflow-hidden transition-all duration-300"
              style={{
                background: cardGradients[index]
              }}
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="flex justify-between items-center w-full px-6 py-4 text-left group-hover:bg-blue-500/5 transition-colors duration-300"
              >
                <span className="text-lg font-medium text-white group-hover:text-blue-400 transition-colors duration-300">
                  {faq.question}
                </span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.2 }}
                  className="w-6 h-6 flex items-center justify-center rounded-full bg-blue-500/10 group-hover:bg-blue-500/20"
                >
                  <span className="text-blue-400">↓</span>
                </motion.div>
              </button>
              <motion.div
                initial={false}
                animate={{
                  height: openIndex === index ? "auto" : 0,
                }}
                transition={{
                  duration: 0.2,
                  ease: "linear"
                }}
                className="overflow-hidden bg-gradient-to-b from-transparent to-blue-950/20"
              >
                <div className="px-6 pb-4 pt-2">
                  <p className="text-blue-200/80">
                    {faq.answer}
                  </p>
                </div>
              </motion.div>
            </div>
          ))}
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-32 -bottom-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
      <div className="absolute -right-32 -top-32 w-64 h-64 bg-blue-500 rounded-full filter blur-[128px] opacity-20" />
    </section>
  );
}