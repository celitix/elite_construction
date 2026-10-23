"use client";

import Image from "next/image";
import Link from "next/link";
import { Clock, Mail, MapPin, Phone } from "lucide-react";

const navLinks = [
  ["Home", "/"],
  ["About Us", "/about"],
  ["Projects", "/projects"],
  ["Contact", "/contact"],
];

const services = [
  ["Residential", "/residential"],
  ["Commercial", "/commercial"],
  ["Renovation", "/renovation"],
  ["Interior Design", "/interior-design"],
  ["Consultation", "/consultation"],
];

const contactItems = [
  { icon: MapPin, text: "Jaipur, Rajasthan, India" },
  { icon: Phone, text: "+91 98765 43210" },
  { icon: Mail, text: "info@eliteinfra.in" },
  { icon: Clock, text: "Mon-Sat: 9AM - 7PM" },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-[#B8934A]/15 bg-[#080808] pt-12 pb-24 text-white sm:pt-16 sm:pb-0 lg:pt-20">
      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Top Grid */}
        <div className="grid grid-cols-1 gap-8 border-b border-white/10 pb-8 sm:grid-cols-2 sm:gap-x-8 sm:gap-y-10 sm:pb-10 lg:grid-cols-[1.1fr_0.75fr_0.9fr_1.15fr] lg:gap-12 lg:pb-12">
          {/* Brand */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <Image
              src="/ELITE-buildcare-logo-white.png"
              alt="Elite Construction Logo"
              width={150}
              height={40}
              className="h-auto w-[140px] max-w-full sm:w-[155px]"
            />
          </div>

          {/* Navigation */}
          <div className="min-w-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#B8934A] sm:mb-5">
              Navigation
            </p>
            <div className="space-y-3">
              {navLinks.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm leading-6 text-white/70 transition duration-200 hover:text-[#B8934A]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Services */}
          <div className="min-w-0">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#B8934A] sm:mb-5">
              Services
            </p>
            <div className="space-y-3">
              {services.map(([label, href]) => (
                <Link
                  key={href}
                  href={href}
                  className="block text-sm leading-6 text-white/70 transition duration-200 hover:text-[#B8934A]"
                >
                  {label}
                </Link>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div className="min-w-0 sm:col-span-2 lg:col-span-1">
            <p className="mb-4 text-xs font-semibold uppercase tracking-[0.15em] text-[#B8934A] sm:mb-5">
              Contact
            </p>
            <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-1">
              {contactItems.map(({ icon: Icon, text }) => (
                <div key={text} className="flex min-w-0 items-start gap-3">
                  <Icon size={15} className="mt-1 shrink-0 text-[#B8934A]" />
                  <span className="min-w-0 break-words text-sm leading-6 text-white/70">
                    {text}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col items-start gap-3 py-5 text-left sm:flex-row sm:items-center sm:justify-between sm:gap-6 sm:py-6">
          <p className="w-full text-xs leading-5 text-white/50 sm:w-auto">
            Copyright 2026 Elite Construction. All rights reserved.
          </p>
          <p className="w-full text-xs leading-5 text-white/50 sm:w-auto sm:text-right">
            Designed by{" "}
            <Link
              href="https://www.proactivedigital.in"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block break-words font-medium text-[#B8934A] transition-colors hover:text-white"
            >
              Proactive Professional Services Pvt Ltd
            </Link>
          </p>
        </div>
      </div>
    </footer>
  );
}
