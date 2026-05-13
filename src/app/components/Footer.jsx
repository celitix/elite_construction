import Link from "next/link";
import { LogoSVG } from "./Navbar";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-[#080808] border-t border-[#B8934A]/15 pt-14 sm:pt-16 lg:pt-20 text-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4  relative z-10">
        {/* Top Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 sm:gap-12 lg:gap-14 pb-12 sm:pb-14 lg:pb-16 border-b border-white/10">
          {/* Brand */}
          <div>
            <div className="mb-6">
              <Image
                src="/ELITE-buildcare-logo-white.png"
                alt="Logo"
                width={220}
                height={90}
                className="w-auto h-auto max-w-[180px] sm:max-w-[220px]"
              />
            </div>

            <p className="text-sm text-white/90 leading-7 max-w-[280px]">
              Building tomorrow's landmarks with precision craftsmanship and
              uncompromising quality since 2010.
            </p>

            {/* Social */}
            <div className="flex gap-3 mt-6">
              {["FB", "IG", "YT", "IN"].map((s) => (
                <div
                  key={s}
                  className="w-10 h-10 rounded-md border border-[#B8934A]/35 flex items-center justify-center text-[11px] font-bold tracking-wider text-[#B8934A] cursor-pointer hover:bg-[#B8934A]/10 hover:scale-105 transition"
                >
                  {s}
                </div>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <div className="section-tag mb-5">Navigation</div>

            {[
              ["Home", "/"],
              ["About Us", "/about"],
              ["Projects", "/projects"],
              ["Contact", "/contact"],
            ].map(([label, href]) => (
              <Link
                key={href}
                href={href}
                className="block text-sm text-white/90 hover:text-[#B8934A] mb-3 transition"
              >
                {label}
              </Link>
            ))}
          </div>

          {/* Services */}
          <div>
            <div className="section-tag mb-5">Services</div>

            {[
              "Residential",
              "Commercial",
              "Renovation",
              "Interior Design",
              "Consultation",
            ].map((s) => (
              <div key={s} className="text-sm text-white/90 mb-3">
                {s}
              </div>
            ))}
          </div>

          {/* Contact */}
          <div>
            <div className="section-tag mb-5">Contact</div>

            {[
              { icon: "📍", text: "Jaipur, Rajasthan, India" },
              { icon: "📞", text: "+91 98765 43210" },
              { icon: "✉️", text: "info@eliteinfra.in" },
              { icon: "⏰", text: "Mon–Sat: 9AM – 7PM" },
            ].map(({ icon, text }) => (
              <div key={text} className="flex gap-3 mb-4 items-start">
                <span className="text-sm mt-0.5">{icon}</span>

                <span className="text-sm text-white/90 leading-6">{text}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center text-center md:text-left gap-3 py-6">
          <p className="text-xs sm:text-sm text-white/90">
            © 2026 Elite Buildcare. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
