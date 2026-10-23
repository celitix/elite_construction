"use client";
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";

const projects = [
  {
    id: 1,
    name: "Elegant Heights",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/ElegantHeights.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 2,
    name: "Elite Pride",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/ElitePride.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 3,
    name: "Elite Prime",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/ElitePrime.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 4,
    name: "Ram Ratna",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/RamRatna.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 5,
    name: "Elegant Gaurav",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/ElegantGaurav.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 6,
    name: "Elite Umang",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/EliteUmang.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 7,
    name: "Elite Luxury",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/EliteLuxory.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 8,
    name: "Shopping Complex",
    type: "Our Projects",
    status: "Completed",
    img: "/Projects/OurProjects/ShoppingComplex.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 9,
    name: "Laxmi Nagar",
    type: "Residential",
    status: "Completed",
    img: "/Projects/Residential/laxmiNagar.png",
    desc: "A collection of 48 premium 3 & 4 BHK apartments with rooftop amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 10,
    name: "Surya Nagar",
    type: "Residential",
    status: "Completed",
    img: "/Projects/Residential/suryaNagar.png",
    desc: "Exclusive gated community of 12 luxury villas with private gardens.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 11,
    name: "Nirman Nagar",
    type: "Residential",
    status: "Completed",
    img: "/Projects/Residential/nirmanNagar.png",
    desc: "Exclusive gated community of 12 luxury villas with private gardens.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 12,
    name: "Ram Nagar",
    type: "Residential",
    status: "Completed",
    img: "/Projects/Residential/ramNagar.png",
    desc: "Exclusive gated community of 12 luxury villas with private gardens.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 13,
    name: "Ram Nagar",
    type: "Residential",
    status: "Completed",
    img: "/Projects/Residential/ramNagartwo.png",
    desc: "Exclusive gated community of 12 luxury villas with private gardens.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 14,
    name: "Florence Villas",
    type: "Residential",
    status: "Completed",
    img: "/Projects/Residential/florenceVillas.png",
    desc: "Exclusive gated community of 12 luxury villas with private gardens.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 15,
    name: "Modern Wall Designs",
    type: "Interiors",
    status: "Completed",
    img: "/Projects/Interiors/ModernWallDesign.png",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 16,
    name: "Stunning Washrooms",
    type: "Interiors",
    status: "Completed",
    img: "/Projects/Interiors/StunningWashrooms.png",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 17,
    name: "Personalized Bedrooms",
    type: "Interiors",
    status: "Completed",
    img: "/Projects/Interiors/PersonalizedBedrooms.png",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 18,
    name: "Vastu-Informed Placement",
    type: "Interiors",
    status: "Completed",
    img: "/Projects/Interiors/VastuInformedPlacement.png",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 19,
    name: "Modular Kitchens",
    type: "Interiors",
    status: "Completed",
    img: "/Projects/Interiors/ModularKitchens.png",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  {
    id: 20,
    name: "Apartment Interiors",
    type: "Interiors",
    status: "Completed",
    img: "/Projects/Interiors/ApartmentInteriors.png",
    desc: "Grade A office complex with 15 floors and world-class amenities.",
    location: "Jaipur, Rajasthan", // add
  },
  // {
  //   id: 4,
  //   name: "Pearl Heights",
  //   type: "Residential",
  //   status: "Ongoing",

  //   img: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&q=80",
  //   location: "Jaipur, Rajasthan", // add
  // },
  // {
  //   id: 5,
  //   name: "Emerald Mall",
  //   type: "Interiors",
  //   status: "Ongoing",
  //   loc: "Tonk Road, Jaipur",
  //   area: "55,000 sq ft",
  //   year: "2025",
  //   img: "https://images.unsplash.com/photo-1519167758481-83f550bb49b3?w=600&q=80",
  //   location: "Jaipur, Rajasthan", // add
  // },
  // {
  //   id: 6,
  //   name: "Aryan Farmhouse",
  //   type: "Renovation",
  //   status: "Completed",

  //   img: "https://images.unsplash.com/photo-1598928636135-d146006ff4be?w=600&q=80",
  //   location: "Jaipur, Rajasthan", // add
  // },
  // {
  //   id: 7,
  //   name: "Tech Hub Jaipur",
  //   type: "Interiors",
  //   status: "Upcoming",
  //   img: "https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80",
  //   location: "Jaipur, Rajasthan", // add
  // },
  // {
  //   id: 8,
  //   name: "Golden Gate Apartments",
  //   type: "Residential",
  //   status: "Upcoming",
  //   img: "https://images.unsplash.com/photo-1574362848149-11496d93a7c7?w=600&q=80",
  //   location: "Jaipur, Rajasthan", // add
  // },
  // {
  //   id: 9,
  //   name: "Lotus Interiors",
  //   type: "Renovation",
  //   status: "Completed",
  //   img: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=600&q=80",
  //   location: "Jaipur, Rajasthan", // add
  // },
];

const filters = ["All", "Our Projects", "Residential", "Interiors"];
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
      <section className="relative flex min-h-[260px] items-end overflow-hidden bg-white pb-10 pt-28 sm:min-h-[320px] sm:pb-14 lg:min-h-[380px] lg:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-[linear-gradient(135deg,#ffffff_0%,#ffffff_52%,rgba(184,147,74,0.16)_100%)]" />
        <div className="absolute inset-0 grid-bg opacity-60" />

     
        <div className="pointer-events-none absolute left-1/2 top-1/2 z-0 -translate-x-1/2 -translate-y-1/2 select-none whitespace-nowrap font-display text-[6rem] font-bold leading-none text-[#B8934A]/15 sm:text-[15vw]">
          PROJECTS
        </div>

        
        <div className="relative z-10 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-10">
          <div className="section-tag text-xs sm:text-sm">Our Portfolio</div>

          <h1 className="max-w-4xl font-display text-[clamp(2.25rem,7vw,5.5rem)] font-semibold leading-tight text-gray-900">
            Our <span className="text-[#B8934A] ">Projects</span>
          </h1>

          <p className="mt-4 max-w-[540px] text-sm leading-7 text-gray-600 sm:text-base">
            500+ projects delivered across residential, commercial, and
            renovation verticals.
          </p>
        </div>
      </section>

     
      <div className="bg-[#B8934A] py-8 sm:py-9 lg:py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-2 gap-6 text-center sm:gap-8 lg:grid-cols-4 lg:gap-5">
            {[
              ["9+", "Featured Projects"],
              ["3", "Ongoing Projects"],
              ["500+", "Total Delivered"],
              ["100%", "Client Satisfaction"],
            ].map(([n, l]) => (
              <div key={l} className="group">
                {/* Number */}
                <div className="font-display text-3xl font-bold leading-none text-[#0A0A0A] transition duration-300 group-hover:scale-105 sm:text-4xl lg:text-[2.35rem]">
                  {n}
                </div>

                {/* Label */}
                <div className="mt-2 text-[10px] font-bold uppercase leading-4 tracking-[0.14em] text-[#0A0A0A]/70 sm:text-xs lg:text-[0.68rem]">
                  {l}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* FILTER + GRID */}
      <section className="bg-white py-14 pb-20 sm:py-16 sm:pb-24 lg:py-20 lg:pb-28">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Filter Buttons */}
          <div className="mx-auto mb-10 flex w-fit max-w-full flex-wrap justify-center gap-2 rounded-lg border border-[#B8934A]/20 bg-white p-2 shadow-sm sm:mb-12 lg:mb-14">
            {filters.map((f) => (
              <button
                key={f}
                onClick={() => setActive(f)}
                className={`min-h-10 rounded-md px-4 py-2.5 text-[10px] font-bold uppercase tracking-[0.12em] transition-all duration-300 sm:px-6 sm:text-xs ${
                  active === f
                    ? "bg-[#B8934A] text-[#0A0A0A] shadow-md"
                    : "text-gray-500 hover:bg-[#B8934A]/10 hover:text-gray-900"
                }`}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Projects Grid */}
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3">
            {filtered.map((p) => (
              <div
                key={p.id}
                className="group overflow-hidden rounded-lg border border-[#B8934A]/30 bg-white shadow-[0_16px_45px_rgba(10,10,10,0.08)] transition-all duration-300 hover:-translate-y-2 hover:border-[#B8934A] hover:shadow-[0_22px_60px_rgba(10,10,10,0.14)]"
              >
                
                <div className="relative aspect-[4/3] w-full overflow-hidden bg-[#f5f1e8] sm:aspect-[16/11]">
                  <Image
                    src={p.img}
                    alt={p.name}
                    fill
                    sizes="(min-width: 1280px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />

                
                  <div
                    className={`absolute right-4 top-4 flex items-center gap-1.5 rounded-md border bg-black/80 px-3 py-1.5 backdrop-blur-sm ${statusStyle[p.status]?.border}`}
                  >
                    <div
                      className={`h-1.5 w-1.5 rounded-full ${statusStyle[p.status]?.dot}`}
                    />
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-white">
                      {p.status}
                    </span>
                  </div>

         
                  <div className="absolute left-4 top-4 max-w-[calc(100%-9rem)] rounded-md bg-[#B8934A] px-3 py-1.5 shadow-sm">
                    <span className="text-[10px] font-bold tracking-[0.12em] uppercase text-[#0A0A0A]">
                      {p.type}
                    </span>
                  </div>
                </div>

        
                <div className="relative bg-[#422d23] p-4 text-center sm:p-5">
                  <div className="absolute left-1/2 top-0 h-1 w-20 -translate-x-1/2 bg-[#B8934A] transition-all duration-300 group-hover:w-32" />
                  <div className="pt-2">
                    <p className="mb-2 text-[10px] font-bold uppercase tracking-[0.22em] text-[#ffffff]">
                      {p.type}
                    </p>
                    <h3 className="font-display text-xl font-bold leading-snug text-[#dab05c] transition-colors group-hover:text-white sm:text-2xl">
                      {p.name}
                    </h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden border-y border-[#B8934A]/15 bg-[#B8934A]/5 py-16 sm:py-20 lg:py-24">
   
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-10 text-center relative z-10">
          
          <div className="section-tag justify-center text-xs sm:text-sm">
            Start Your Project
          </div>

      
          <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-gray-900 mb-4 leading-tight">
            Want to See Your Project Here?
          </h2>

        
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-10 max-w-[440px] mx-auto leading-7">
            Let&apos;s discuss your vision and turn it into a landmark.
          </p>

     
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
