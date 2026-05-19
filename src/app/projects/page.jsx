"use client";
import { useState } from "react";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Skyline Residences",
    type: "Residential",
    status: "Completed",
    loc: "Vaishali Nagar, Jaipur",
    area: "4,200 sq ft",
    year: "2024",
    img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?w=600&q=80",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
  },
  {
    id: 2,
    name: "The Heritage Villas",
    type: "Residential",
    status: "Completed",
    loc: "Jagatpura, Jaipur",
    area: "8,500 sq ft",
    year: "2023",
    img: "https://images.unsplash.com/photo-1613977257363-707ba9348227?w=600&q=80",
    desc: "Exclusive gated community of 12 luxury villas with private gardens.",
  },
  {
    id: 3,
    name: "Axis Business Park",
    type: "Commercial",
    status: "Completed",
    loc: "Sitapura, Jaipur",
    area: "22,000 sq ft",
    year: "2023",
    img: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
  },
  {
    id: 4,
    name: "Pearl Heights",
    type: "Residential",
    status: "Ongoing",
    loc: "Malviya Nagar, Jaipur",
    area: "3,800 sq ft",
    year: "2025",
    img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
    desc: "Luxury high-rise with 72 units and panoramic city views.",
  },
  {
    id: 5,
    name: "Emerald Mall",
    type: "Commercial",
    status: "Ongoing",
    loc: "Tonk Road, Jaipur",
    area: "55,000 sq ft",
    year: "2025",
    img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
    desc: "A modern retail and entertainment destination for the city.",
  },
  {
    id: 6,
    name: "Aryan Farmhouse",
    type: "Renovation",
    status: "Completed",
    loc: "Amer, Jaipur",
    area: "12,000 sq ft",
    year: "2024",
    img: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&q=80",
    desc: "Complete renovation of a historic farmhouse into a luxury retreat.",
  },
  {
    id: 7,
    name: "Tech Hub Jaipur",
    type: "Commercial",
    status: "Upcoming",
    loc: "RIICO Area, Jaipur",
    area: "35,000 sq ft",
    year: "2026",
    img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
    desc: "Next-gen tech campus designed for innovation and collaboration.",
  },
  {
    id: 8,
    name: "Golden Gate Apartments",
    type: "Residential",
    status: "Upcoming",
    loc: "Mansarovar, Jaipur",
    area: "2,900 sq ft",
    year: "2026",
    img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80",
    desc: "Affordable luxury apartments for the modern family.",
  },
  {
    id: 9,
    name: "Lotus Interiors",
    type: "Renovation",
    status: "Completed",
    loc: "C-Scheme, Jaipur",
    area: "3,200 sq ft",
    year: "2023",
    img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
    desc: "Full interior transformation of a luxury penthouse duplex.",
  },
];

const filters = ["All", "Residential", "Commercial", "Renovation"];
const statusStyle = {
  Completed: { dot: "bg-green-500", border: "border-green-500/60" },
  Ongoing: { dot: "bg-amber-400", border: "border-amber-400/60" },
  Upcoming: { dot: "bg-indigo-400", border: "border-indigo-400/60" },
};

export default function ProjectsPage() {
  const [active, setActive] = useState("All");
  const filtered =
    active === "All" ? projects : projects.filter((p) => p.type === active);

  return (
    <>

      {/* HERO */}
      <section className="min-h-[20vh] flex items-end relative overflow-hidden pb-12 lg:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Watermark Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display text-[26vw] sm:text-[15vw] font-bold text-[#B8934A]/20 leading-none whitespace-nowrap pointer-events-none select-none">
          PROJECTS
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 relative z-10 pt-24 sm:pt-28">
          <div className="section-tag text-xs sm:text-sm">Our Portfolio</div>

          <h1 className="font-display text-[clamp(2.2rem,7vw,5.5rem)] font-semibold text-gray-900 leading-tight max-w-4xl">
            Our <span className="text-[#B8934A] ">Projects</span>
          </h1>

          <p className="text-sm sm:text-base text-gray-600 mt-4 max-w-[500px] leading-7">
            500+ projects delivered across residential, commercial, and
            renovation verticals.
          </p>
        </div>
      </section>

      {/* STATS BAR */}
      <div className="bg-[#B8934A] py-10 sm:py-8 lg:py-15">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 lg:gap-5 text-center">
            {[
              ["9+", "Featured Projects"],
              ["3", "Ongoing Projects"],
              ["500+", "Total Delivered"],
              ["100%", "Client Satisfaction"],
            ].map(([n, l]) => (
              <div key={l} className="group">
                {/* Number */}
                <div className="font-display text-3xl sm:text-4xl lg:text-[2rem] font-bold text-[#0A0A0A] leading-none group-hover:scale-110 transition duration-300">
                  {n}
                </div>

                {/* Label */}
                <div className="text-[10px] sm:text-sm lg:text-[0.6rem] font-bold tracking-[0.18em] uppercase text-[#0A0A0A]/70 mt-2 leading-4">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FILTER + GRID */}
      <section className="py-14 sm:py-16 lg:py-20 pb-20 sm:pb-24 lg:pb-28 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filter Buttons */}
          <div className="flex flex-wrap gap-3 mb-10 sm:mb-12 lg:mb-14 justify-center lg:justify-start">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`text-[11px] sm:text-xs font-bold tracking-[0.18em] uppercase py-3 px-5 sm:px-6 border rounded-md transition-all duration-300 ${
                  active === f
                    ? "bg-[#B8934A] text-[#0A0A0A] border-[#B8934A]"
                    : "bg-transparent text-gray-500 border-gray-300 hover:border-[#B8934A]/50 hover:text-gray-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-7">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group bg-white border border-gray-200 rounded-2xl overflow-hidden hover:border-[#B8934A]/40 hover:-translate-y-2 hover:shadow-2xl transition-all duration-500"
              >
                {/* Image */}
                <div className="relative overflow-hidden">
                  <img
                    src={p.img}
                    alt={p.name}
                    className="w-full h-56 sm:h-60 object-cover transition-transform duration-700 group-hover:scale-110"
                  />

                  {/* Status Badge */}
                  <div
                    className={`absolute top-4 right-4 px-3 py-1.5 bg-black/75 border ${statusStyle[p.status].border} flex items-center gap-1.5 rounded-md`}
                  >
                    <div
                      className={`w-1.5 h-1.5 rounded-full ${statusStyle[p.status].dot}`}
                    />
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-white">
                      {p.status}
                    </span>
                  </div>

                  {/* Type Badge */}
                  <div className="absolute top-4 left-4 px-3 py-1.5 bg-[#B8934A] rounded-md">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0A0A0A]">
                      {p.type}
                    </span>
                  </div>
                </div>

                {/* Content */}
                <div className="p-5 sm:px-6 sm:pt-6 sm:pb-7">
                  <h3 className="font-display text-xl sm:text-2xl text-gray-900 mb-2 group-hover:text-[#B8934A] transition-colors">
                    {p.name}
                  </h3>

                  <p className="text-sm text-gray-500 leading-7 mb-5">
                    {p.desc}
                  </p>

                  {/* Meta */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {[
                      ["📍", p.loc],
                      ["📐", p.area],
                      ["📅", p.year],
                    ].map(([icon, val]) => (
                      <div key={val} className="flex gap-2 items-center">
                        <span className="text-sm">{icon}</span>

                        <span className="text-sm text-gray-500">{val}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 sm:py-20 lg:py-24 bg-[#B8934A]/5 border-y border-[#B8934A]/15 relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          {/* Tag */}
          <div className="section-tag justify-center text-xs sm:text-sm">
            Start Your Project
          </div>

          {/* Heading */}
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-gray-900 mb-4 leading-tight">
            Want to See Your Project Here?
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 max-w-[440px] mx-auto leading-7">
            Let's discuss your vision and turn it into a landmark.
          </p>

          {/* Button */}
          <Link
            href="/contact"
            className="btn-primary w-full sm:w-auto inline-block text-center px-8 sm:px-10 py-4"
          >
            Get in Touch
          </Link>
        </div>
      </section>


    </>
  );
}
