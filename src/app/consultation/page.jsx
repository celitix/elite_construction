"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FaArrowUp } from "react-icons/fa6";
const Page = () => {
  const [activeTab, setActiveTab] = useState(1);
  const projects = [
    {
      name: "Skyline Residences",
      type: "Luxury Apartments",
      loc: "Vaishali Nagar, Jaipur",
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    },
    {
      name: "The Heritage Villas",
      type: "Premium Villas",
      loc: "Jagatpura, Jaipur",
      img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    },
    {
      name: "Axis Business Park",
      type: "Commercial Complex",
      loc: "Sitapura, Jaipur",
      img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    },
  ];

  const cards = [
    {
      id: "01",
      title: "Residential Construction Consultation",
      description:
        "Now, as a break, to persuade our residential construction advisory customers into ideas that could evolve into expertly designed dwelling spaces. Whatever may be the kind of home you desire — a beautiful villa, a luxury apartment, a modern home, or even if you want to renovate an old space / optimizing spaces for making it optimal, we guide you on layouts & structural planning; right materials & budgets; execution methodologies, etc., to ensure not only is your dream home functional and beautiful but also built for eternity. That’s why we are the best Residential Construction Consultation service provider in Jaipur.",
      btnLabel: "Learn More",
      url: "/residential",
      img: "/Consultation/consultationSone.png",
      alt: "img1",
      stickyOffset: 80,
      zIndex: 10,
    },
    {
      id: "02",
      title: "Commercial Project Planning & Consultation",
      description:
        "By commercial construction consultation for office, retail shops, hotels, showrooms, and business infrastructure, we assist businesses with project feasibility planning, optimizing the flow of your space, and building these structures to be more effective while utilizing analytical methods to achieve minimal capital investment for execution. With industry experience of over years, we ensure that every commercial project is designed for performance scalability and enterprise-grade growth. That’s why we are the best Commercial Project Planning & Consultation service provider in Jaipur.",
      btnLabel: "Learn More",
      url: "/commercial",
      img: "/Consultation/consultationStwo.png",
      alt: "img2",
      stickyOffset: 140,
      zIndex: 20,
    },
    {
      id: "03",
      title: "Interior Design & Space Consultation",
      description:
        "A professional interior designer translates elegance and function into your interiors from Elite Construction & Interior Design. We guide clients to choose the top design ideas, furniture arrangements, lighting systems, and solutions, color schemes, textures, and how you are living in space or managing your business. At Jaipur's best interior consultants, we try to merge aesthetics with comfort and functionality so as to create spaces that will withstand the test of time. That’s why we are the best  Interior Design & Space Consultation service provider in Jaipur.",
      btnLabel: "Learn More",
      url: "/interior-design",
      img: "/Consultation/consultationSthree.png",
      alt: "img3",
      stickyOffset: 210,
      zIndex: 30,
    },
    {
      id: "04",
      title: "Renovation & Remodeling Consultation",
      description:
        "Our Home Renovation & Remodeling consultants in Jaipur Transform your space with our skills; be it home renovation, office renovation, kitchen remodeling, bathroom remodelling or even complete property refurbishment; you guide us to the dimensions of your area and we charge you with solutions for planning a modern design change as per building format, stylish designs that adapt with equipment upgrades using creativity implementation roadmap while laying down excellent quality standards within budget constraints. That’s why we are the best Renovation & Remodeling Consultation service provider in Jaipur.",
      btnLabel: "Learn More",
      url: "/renovation",
      img: "/Consultation/consultationSfour.png",
      alt: "img4",
      stickyOffset: 40,
      zIndex: 40,
    },
  ];
  return (
    <div>
      <section className="relative overflow-hidden bg-[#f7f3eb] pb-5 md:pb-16">
        {/* TOP BACKGROUND IMAGE */}
        <div
          className="absolute top-0 left-0 w-full h-[25%] md:h-[30%] lg:h-[50%] xl:h-[60%] bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/ServiceBackground.jpg')",
          }}
        />

        {/* BIG WATERMARK */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-[1] pointer-events-none select-none">
          <h1 className="text-[20vw] sm:text-[16vw] lg:text-[14vw] font-extrabold text-[#d9c7a0]/35 leading-none whitespace-nowrap">
            Service
          </h1>
        </div>

        {/* CONTAINER */}
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-12 pt-5 md:pt-15 lg:pt-15 xl:pt-25 mb-10">
          {/* SMALL TAG */}
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-[1px] bg-[#b69455]" />
            <p className="uppercase text-[10px] sm:text-[11px] tracking-[2px] text-[#b69455] font-semibold">
              Our Service
            </p>
          </div>

          {/* TITLE */}
          <h2 className="font-display text-[clamp(2.2rem,7vw,5.5rem)] font-semibold text-gray-900 leading-tight max-w-4xl">
            Elite Construction
          </h2>
        </div>

        {/* BOTTOM GOLD SECTION */}
        <div className="relative z-10 lg:mt-0 xl:mt-24 bg-[#ceb98a] rounded-t-[20px] min-h-[55vh]">
          <div className="max-w-7xl mx-auto px-4 md:px-0 py-20 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
            {/* LEFT BOX */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-[28px] sm:rounded-[42px] overflow-hidden bg-[#f3f3f3]">
                <Image
                  src="/Consultation/consultationHero.png"
                  alt="Hero Image"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white text-center lg:text-left">
               <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.1] mb-3">
                Dream Space With Expert Construction Consultation
              </h3>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.5] text-white/95 max-w-[600px] mx-auto lg:mx-0 mb-2 text-justify">
                Elite Construction & Interior Design provides expert
                construction consulting services in Jaipur to plan, develop a
                design, and execute your residential, commercial, and interior
                projects; all of which follow the Stress-free Path! Be it a
                newly constructed property, a refurbished home, renovations of a
                high-end interior, or even a commercial space looking for
                furniture layouts and assistance on the specifics, our
                professional technical team will support yours through each
                stage of the project, backed with extensive industry experience.
                We help you with Pricing, Concept Development, material
                selection, and more so that every aspect meets your standard of
                excellence.
              </p>

              <div className="mt-4 relative z-10">
                <Link
                  href="/contact"
                  className="btn-outline-white text-center w-full sm:w-auto"
                >
                  Get a free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="bg-[#edf0e7] py-12 sm:py-16 md:py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-6 sm:space-y-8 md:space-y-10">
          {cards.map((card, i) => (
            <motion.div
              key={card.id}
              initial={{ opacity: 0, y: 80 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.6, ease: "easeOut" }}
              style={{
                position: "sticky",
                top: card.stickyOffset,
                zIndex: card.zIndex,
              }}
            >
              <div className="bg-[#ffffff] border border-gray-200 rounded-[10px] md:rounded-[10px] overflow-hidden shadow-sm">
                {/* HEADER */}
                <div className="flex items-center gap-4 sm:gap-6 px-5 sm:px-8 md:px-10 py-4 sm:py-5 md:py-6 border-b border-gray-200 bg-[#b8934a]">
                  <span className="text-black  font-semibold text-sm sm:text-base shrink-0">
                    {card.id}
                  </span>
                  <h2 className="text-black text-sm md:text-lg font-semibold uppercase tracking-wide leading-tight">
                    {card.title}
                  </h2>
                </div>

                {/* CONTENT */}
                <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 md:gap-10 items-center px-5 sm:px-8 md:px-10 py-4 md:py-16">
                  {/* LEFT */}
                  <div className="flex flex-col">
                    <p className="text-gray-700 text-base leading-relaxed sm:leading-[1.8]">
                      {card.description}
                    </p>

                    <Link
                      href={card.url}
                      className="mt-4 md:mt-10 flex items-center self-start group"
                    >
                      <span className="bg-[#b8934a] text-black border border-[#B8934A] px-5 sm:px-7 md:px-8 py-2 sm:py-3 rounded-full font-semibold text-sm sm:text-base transition-all duration-300 group-hover:bg-[#c7a35c] group-hover:text-white">
                        {card.btnLabel}
                      </span>
                    </Link>
                  </div>

                  {/* RIGHT IMAGE */}
                  <div className="flex justify-center lg:justify-end mt-2 lg:mt-0">
                    <div className="relative w-[200px] h-[200px] sm:w-[280px] sm:h-[280px] md:w-[340px] md:h-[340px] lg:w-[380px] lg:h-[380px] rounded-full overflow-hidden">
                      <Image
                        src={card.img}
                        alt={card.alt}
                        fill
                        sizes="(max-width: 640px) 200px, (max-width: 768px) 280px, (max-width: 1024px) 340px, 380px"
                        className="object-cover"
                        priority={i === 0}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className=" py-10 md:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <div className="section-tag justify-center text-xs sm:text-sm">
              Our Portfolio
            </div>

            <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight">
              Featured Projects
            </h2>
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-5 sm:gap-6 lg:gap-7">
            {projects.map((p, i) => (
              <div
                key={i}
                className="relative overflow-hidden rounded-2xl cursor-pointer group shadow-md hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <img
                  src={p.img}
                  alt={p.name}
                  className="w-full h-72 sm:h-80 lg:h-[340px] object-cover transition-transform duration-700 brightness-75 group-hover:scale-110"
                />

                {/* Content */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 bg-gradient-to-t from-black/90 via-black/50 to-transparent">
                  <div className="text-[10px] sm:text-[0.62rem] font-bold tracking-[0.2em] uppercase text-[#B8934A] mb-1.5">
                    {p.type}
                  </div>

                  <h3 className="font-display text-xl sm:text-2xl text-white leading-tight">
                    {p.name}
                  </h3>

                  <div className="text-xs sm:text-sm text-white/70 mt-1">
                    📍 {p.loc}
                  </div>
                </div>

                {/* Hover Overlay */}
                <div className="absolute inset-0 bg-[#B8934A]/15 opacity-0 group-hover:opacity-100 transition duration-500 flex items-center justify-center">
                  <Link
                    href="/projects"
                    className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase text-white border border-white px-5 sm:px-7 py-3 hover:bg-white hover:text-black transition"
                  >
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>

          {/* Button */}
          <div className="text-center mt-10 sm:mt-12 lg:mt-14">
            <Link
              href="/projects"
              className="btn-primary w-full sm:w-auto inline-block text-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#B8934A]/5 border-y border-[#B8934A]/15 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          {/* Heading */}
          <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] font-bold text-gray-900 leading-tight mb-4">
            Let's Build Something{" "}
            <span className="text-[#B8934A]">Great Together</span>
          </h2>

          {/* Text */}
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 max-w-xl mx-auto leading-7">
            Reach out for a free consultation with our team.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="btn-primary w-full sm:w-auto inline-block text-center px-8 sm:px-10 py-4"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Page;
