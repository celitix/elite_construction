"use client";
import Link from "next/link";
import React from "react";

export default function NotFound() {
  return (
    <section className="min-h-screen bg-white flex items-center justify-center relative overflow-hidden px-4">
      {/* Background Grid */}
      <div className="absolute inset-0 grid-bg opacity-50" />
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display text-[28vw] sm:text-[15vw] font-bold text-[#B8934A]/20 leading-none whitespace-nowrap pointer-events-none select-none">
        404
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-2xl text-center">
        {/* Tag */}
        <div className="section-tag justify-center text-xs sm:text-sm mb-5">
          Page Not Found
        </div>

        {/* Heading */}
        <h2 className="font-display text-[clamp(2.2rem,7vw,5rem)] text-gray-900 leading-tight mb-5">
          Lost in the <span className="text-[#B8934A] italic">Blueprint?</span>
        </h2>

        {/* Description */}
        <p className="text-sm sm:text-base text-gray-600 leading-7 max-w-xl mx-auto mb-8">
          The page you're looking for doesn’t exist or may have been moved.
          Let’s guide you back to something beautifully built.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="btn-primary px-8 py-4 text-center w-full sm:w-auto"
          >
            Back to Home
          </Link>

          <Link
            href="/contact"
            className="border border-[#B8934A]/30 hover:border-[#B8934A] text-gray-900 px-8 py-4 rounded-md font-semibold transition-all duration-300 w-full sm:w-auto"
          >
            Contact Us
          </Link>
        </div>
      </div>
    </section>
  );
}
