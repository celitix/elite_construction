"use client";
import { useEffect, useRef, useState } from "react";

const Service = () => {
  const sectionRef = useRef(null);
  const [activeStep, setActiveStep] = useState(0);

  const steps = [
    {
      title: "No-Code Chatbot Builder",
      points: [
        "Build intelligent, no-code WhatsApp chatbots.",
        "Automate routine and customer interactions.",
        "Send instant updates and notifications.",
        "No technical skills required to create chatbot.",
        "Perfect for E-Commerce stores and service brands.",
      ],
      image: "https://images.unsplash.com/photo-1551434678-e076c223a692?w=900",
    },
    {
      title: "Live Chat Across Channels",
      points: [
        "Connect WhatsApp, Instagram, Messenger.",
        "Manage all customer chats in one inbox.",
        "Assign chats to your team instantly.",
        "Track responses and customer satisfaction.",
        "Never miss an incoming message.",
      ],
      image:
        "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=900",
    },
    {
      title: "Smart Sales Automation",
      points: [
        "Auto reply to leads instantly.",
        "Recover abandoned carts automatically.",
        "Send offers and discount campaigns.",
        "Boost conversions with workflows.",
        "Grow revenue on autopilot.",
      ],
      image:
        "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=900",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      if (!sectionRef.current) return;

      const rect = sectionRef.current.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      const progress = (windowHeight - rect.top) / (rect.height + windowHeight);

      const step = Math.min(
        steps.length - 1,
        Math.max(0, Math.floor(progress * steps.length)),
      );

      setActiveStep(step);
    };

    window.addEventListener("scroll", handleScroll);
    handleScroll();

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <div>
      {/* HERO */}
      <section className="min-h-[45vh] lg:min-h-[50vh] flex items-end relative overflow-hidden pb-12 sm:pb-16 lg:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-white text-gray-900" />
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Large Watermark Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display text-[28vw] sm:text-[15vw] font-bold text-[#B8934A]/20 leading-none whitespace-nowrap pointer-events-none select-none">
          Service
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 relative z-10 pt-24 sm:pt-28">
          <div className="section-tag text-xs sm:text-sm">Our Service</div>

          <h1 className="font-display text-[clamp(2.2rem,7vw,5.5rem)] font-semibold text-gray-900 leading-tight max-w-4xl">
            Elite Buildcare
          </h1>
        </div>
      </section>

      {/* <section ref={sectionRef} className="relative h-[300vh] bg-blue-200">
        <div className="sticky top-0 h-screen flex items-center">
          <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-14 items-center w-full">
    
            <div className="transition-all duration-500">
              <h2 className="text-5xl font-bold text-gray-800 mb-8 leading-tight">
                {steps[activeStep].title}
              </h2>

              <ul className="space-y-4 text-gray-600 text-lg">
                {steps[activeStep].points.map((item, i) => (
                  <li key={i} className="flex gap-3">
                    <span className="mt-2 w-2 h-2 rounded-full bg-black"></span>
                    {item}
                  </li>
                ))}
              </ul>
            </div>


            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl bg-gradient-to-br from-purple-100 to-cyan-100 p-4">
                <img
                  src={steps[activeStep].image}
                  alt=""
                  className="w-full h-[400px] object-cover rounded-2xl transition-all duration-700"
                />
              </div>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Service;
