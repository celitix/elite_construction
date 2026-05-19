"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { FiClock, FiHome, FiDollarSign, FiTrendingUp } from "react-icons/fi";
import { FiAward, FiTarget, FiTool, FiShield } from "react-icons/fi";
import {
  HiOutlineOfficeBuilding,
  HiOutlineUserGroup,
  HiOutlineViewGrid,
  HiOutlineClipboardList,
} from "react-icons/hi";
import Image from "next/image";

/* Counter Component */
const Counter = ({ end, suffix = "" }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 2000;
    const increment = end / (duration / 30);

    const timer = setInterval(() => {
      start += increment;

      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 30);

    return () => clearInterval(timer);
  }, [end]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
};

const statsData = [
  {
    icon: <HiOutlineOfficeBuilding />,
    end: 9,
    suffix: "",
    label: "Projects Delivered",
  },
  {
    icon: <HiOutlineUserGroup />,
    end: 2500,
    suffix: "+",
    label: "Happy Families",
  },
  {
    icon: <HiOutlineViewGrid />,
    end: 35,
    suffix: "",
    label: "Lac (Approx.) Sq. Ft. Delivered",
  },
  {
    icon: <HiOutlineClipboardList />,
    end: 10,
    suffix: "",
    label: "Lac Sq. Ft. Upcoming by 2025",
  },
];
const stats = [
  { num: "500+", label: "Projects Completed" },
  { num: "15+", label: "Years Experience" },
  { num: "2000+", label: "Happy Clients" },
  { num: "98%", label: "Client Satisfaction" },
];
const service = [
  {
    image: "/imageCCTV.png",
    title: "AI-BASED CCTV SURVEILLANCE",
    desc: "Personally oversee your project in real-time with 24/7 live CCTV on-site monitoring, ensuring security and adherence.",
  },
  {
    image: "/imageLongTerm.png",
    title: "LONG-TERM PERSPECTIVE",
    desc: "Our experience enables us to understand the long-term needs of our clients. We make our projects to last for centuries.",
  },
  {
    image: "/imageSupervisor.png",
    title: "DEDICATED SITE SUPERVISOR",
    desc: "Never underestimate the impact of expert leadership & informed direction. Assurance by a dedicated site supervisor.",
  },
  {
    image: "/imageVastu.png",
    title: "VASTU-INFORMED PLANNING",
    desc: "Practices that stand the test of time should be respected. With it, we can build spaces that radiate positivity & well-being.",
  },
];

const services = [
  {
    image: "/Home/homeResidentialConstruction.png",
    title: "Residential Construction",
    desc: "Custom homes built with precision and care, from foundation to finish.",
  },
  {
    image: "/Home/homeCommercialProjects.png",
    title: "Commercial Projects",
    desc: "Office complexes and retail spaces designed for modern business needs.",
  },
  {
    image: "/Home/homeRenovationRemodeling.png",
    title: "Renovation & Remodeling",
    desc: "Transform existing spaces with our expert renovation services.",
  },
  {
    image: "/Home/homeInteriorDesign.png",
    title: "Interior Design",
    desc: "Luxurious interiors that blend aesthetics with functionality.",
  },
  {
    image: "/Home/homeArchitecturePlanning.png",
    title: "Architecture & Planning",
    desc: "Innovative designs tailored to your vision and lifestyle.",
  },
  {
    image: "/Home/homeTurnkeySolutions.png",
    title: "Turnkey Solutions",
    desc: "Complete end-to-end property solutions under one roof.",
  },
];

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

const whyUs = [
  ["Time-Bound", "Delivery of Project"],
  [
    "Hassle-Free",
    "Construction from Planning to handing over the keys of your dream home",
  ],
  [
    "Save Costs",
    "because of our expertise in construction, bulk purchasing & experienced team",
  ],
  ["Expert Long-term Planning", "ensures sustainable solutions"],
];

const icons = {
  "Time-Bound": <FiClock className="text-[#B8934A] text-sm" />,
  "Hassle-Free": <FiHome className="text-[#B8934A] text-sm" />,
  "Save Costs": <FiDollarSign className="text-[#B8934A] text-sm" />,
  "Expert Long-term Planning": (
    <FiTrendingUp className="text-[#B8934A] text-sm" />
  ),
};

export default function HomePage() {
  return (
    <>
      {/* ── HERO ── */}
      <section className="relative w-full flex items-center justify-start min-h-screen overflow-hidden bg-[#f8f8f8]">
        {/* Background Image */}
        <img
          src="/homehero.png"
          alt="Elite Construction"
          className="absolute inset-0 w-full h-full object-cover"
        />
        <div className="grid lg:grid-cols-2 grid-cols-1 w-full items-center justify-center mb-10 md:mb-0 px-2 md:px-0">
          {/* Content Area */}
          <div className="z-20 min-h-screen w-full flex items-center justify-center lg:justify-start py-2 md:py-16 mb-2 md:mb-0">
            {/* White Box */}
            <div className="bg-white/95 backdrop-blur-sm w-full md:max-w-lg lg:max-w-xl xl:max-w-2xl 2xl:max-w-4xl shadow-2xl ">
              {/* Logo Center */}
              <div className="flex justify-center mb-6 h-20">
                <img
                  src="/favicon.png"
                  alt="Elite Construction"
                  className="w-35 h-35 rounded-full absulute top-10 left-1/2  -translate-y-1/2"
                />
              </div>

              {/* Brand Name */}
              <div className="text-center">
                <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold text-[#B8934A] leading-none">
                  Elite
                </h1>

                <h2 className="text-5xl sm:text-6xl md:text-7xl font-bold text-black mt-2 leading-none">
                  Construction
                </h2>
              </div>
              <div className="max-w-md mx-auto text-center my-4 md:my-8">
                {/* Subtitle */}
                <p className="mt-2 md:mt-8 text-sm sm:text-base md:text-lg text-gray-600">
                  Turn-key Construction & Design Solutions
                </p>

                {/* Divider */}
                <div className="w-24 h-[3px] mx-auto bg-[#B8934A] my-4 my-8"></div>

                {/* Tagline */}
                <p className="text-2xl sm:text-3xl md:text-4xl font-semibold text-gray-900">
                  From Land to Legacy
                </p>
              </div>

              {/* Button */}
              <div className="flex justify-center mb-10">
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/projects"
                    className="btn-outline text-center sm:w-auto"
                  >
                    Explore Projects
                  </Link>
                  <Link
                    href="/contact"
                    className="btn-primary text-center w-full sm:w-auto"
                  >
                    Free Consultation →
                  </Link>
                </div>
              </div>
            </div>
          </div>

          <div className=" w-full">
            <div className="max-w-lg mx-auto lg:ml-auto">
              <div className="relative bg-[#B8934A] py-2 text-center">
                <div className="absolute left-0 top-full w-0 h-0 border-t-[16px] border-t-[#8e6f34] border-r-[16px] border-r-transparent rotate-93"></div>

                <div className="absolute right-0 top-full w-0 h-0 border-t-[16px] border-t-[#8e6f34] border-l-[16px] border-l-transparent rotate-270"></div>

                <h2 className="text-white text-xl sm:text-2xl font-bold px-4">
                  Book a Free Consultation
                </h2>
              </div>
              <div className="relative bg-white text-[#B8934A] border border-[#B8934A]/30 shadow-2xl rounded-sm overflow-hidden mx-3">
                <div className="p-5 space-y-3">
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Verify Mobile (OTP)
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button className="h-8 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                        SEND OTP
                      </button>

                      <input
                        type="text"
                        placeholder="Enter OTP"
                        className="sm:col-span-1 h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                      />

                      <button className="h-8 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                        VERIFY
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  {/* <div>
                  <label className="block text-sm font-semibold mb-1">
                    Current Location
                  </label>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="country" defaultChecked />
                      India
                    </label>

                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="country" />
                      Outside India
                    </label>
                  </div>
                </div> */}

                  {/* <div>
                  <label className="block text-sm font-semibold mb-1">
                    Select City
                  </label>

                  <select className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none ">
                    <option disabled>Select City</option>
                    <option>Jaipur</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Ahmedabad</option>
                  </select>
                </div> */}

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Enquiry Message
                    </label>

                    <textarea
                      rows="3"
                      placeholder="Write your message..."
                      className="w-full px-4 py-1 border border-gray-300 focus:border-[#B8934A] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button className="w-full sm:w-auto px-10 h-10 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <section className="relative overflow-hidden bg-white text-gray-900 px-4 sm:px-6 lg:px-8 py-16 sm:py-20 lg:py-24">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
          <div className=" pt-2 lg:pt-10">
            <div className="section-tag mb-5">
              Premium Real Estate Since 2010
            </div>

            <h1 className="text-[clamp(2.2rem,8vw,4.6rem)] font-semibold leading-tight sm:leading-[1.05] mb-6 font-display">
              Building <span className="text-[#B8934A] italic">Dreams</span>
              <br />
              Creating <span className="text-[#B8934A] italic">Legacies</span>
            </h1>

            <p className="text-sm sm:text-base max-w-[560px] leading-7 sm:leading-8 mb-8 text-gray-600">
              Elite Construction is an expert turn-key construction & design
              company based in Jaipur. Committed to delivering sustainable
              solutions, our service focuses on quality, excellence & assurance.
              Our 20 years of experience allow us to deliver high-quality
              results, whether you are constructing a dream home, commercial
              space, garden or industry.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/projects"
                className="btn-primary text-center w-full sm:w-auto"
              >
                Explore Projects
              </Link>

              <Link
                href="/contact"
                className="btn-outline text-center sm:w-auto"
              >
                Free Consultation →
              </Link>
            </div>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 mt-12 pt-8 border-t border-black/10">
              {stats.map((s, i) => (
                <div key={i}>
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#B8934A] leading-none">
                    {s.num}
                  </div>

                  <div className="text-[10px] sm:text-xs font-bold tracking-[0.15em] uppercase mt-2 text-gray-500">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className=" w-full mt-5">
            <div className="max-w-xl mx-auto lg:ml-auto">
              <div className="relative bg-[#B8934A] py-2 text-center">
                <div className="absolute left-0 top-full w-0 h-0 border-t-[16px] border-t-[#8e6f34] border-r-[16px] border-r-transparent rotate-93"></div>

                <div className="absolute right-0 top-full w-0 h-0 border-t-[16px] border-t-[#8e6f34] border-l-[16px] border-l-transparent rotate-270"></div>

                <h2 className="text-white text-xl sm:text-2xl font-bold px-4">
                  Book a Free Consultation
                </h2>
              </div>
              <div className="relative bg-white border border-[#B8934A]/30 shadow-2xl rounded-sm overflow-hidden mx-3">
                <div className="p-5 lg:p-6 space-y-3">
                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Name
                    </label>
                    <input
                      type="text"
                      placeholder="Enter your name"
                      className="w-full h-10 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      placeholder="Contact Number"
                      className="w-full h-10 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Verify Mobile (OTP)
                    </label>

                    <p className="text-sm text-gray-500 mb-4 leading-6">
                      Enter your mobile number with country code.
                    </p>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                      <button className="h-10 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                        SEND OTP
                      </button>

                      <input
                        type="text"
                        placeholder="Enter OTP"
                        className="sm:col-span-1 h-10 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                      />

                      <button className="h-10 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                        VERIFY
                      </button>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Email
                    </label>
                    <input
                      type="email"
                      placeholder="Email Address"
                      className="w-full h-10 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-3">
                      Current Location
                    </label>

                    <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="country" defaultChecked />
                        India
                      </label>

                      <label className="flex items-center gap-2 text-sm cursor-pointer">
                        <input type="radio" name="country" />
                        Outside India
                      </label>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Select City
                    </label>

                    <select className="w-full h-10 px-4 border border-gray-300 focus:border-[#B8934A] outline-none">
                      <option>Jaipur</option>
                      <option>Delhi</option>
                      <option>Mumbai</option>
                      <option>Ahmedabad</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-2">
                      Enquiry Message
                    </label>

                    <textarea
                      rows="4"
                      placeholder="Write your message..."
                      className="w-full px-4 py-1 border border-gray-300 focus:border-[#B8934A] outline-none resize-none"
                    ></textarea>
                  </div>

                  <div className="pt-2">
                    <button className="w-full sm:w-auto px-10 h-10 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                      SUBMIT
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}

      <section className="relative w-full bg-gradient-to-b from-[#fafafa] via-white to-[#f8f8f8] py-10 md:py-16 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B8934A]/5 blur-3xl rounded-full"></div>

        <div className="relative max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-8 md:mb-16">
            <p className="text-[#B8934A] uppercase tracking-[5px] text-sm font-semibold mb-3">
              Our Achievements
            </p>

            <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#B8934A] to-transparent mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Stats Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {statsData.map((item, index) => (
              <div
                key={index}
                className="group relative bg-white/80 backdrop-blur-sm border border-[#B8934A]/10 rounded-3xl p-5 text-center shadow-lg hover:shadow-2xl transition duration-500 hover:-translate-y-3 overflow-hidden"
              >
                {/* Corner Decoration */}
                <div className="absolute top-0 right-0 w-16 h-16 bg-[#B8934A]/5 rounded-bl-full"></div>

                {/* Icon */}
                <div className="relative w-20 h-20 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-gradient-to-br from-[#B8934A]/15 to-[#B8934A]/5 group-hover:scale-110 transition duration-500"></div>

                  <div className="relative text-[#B8934A] text-4xl group-hover:scale-110 transition duration-500">
                    {item.icon}
                  </div>
                </div>

                {/* Counter */}
                <h3 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-3">
                  <Counter end={item.end} suffix={item.suffix} />
                </h3>

                {/* Divider */}
                <div className="w-10 h-[2px] bg-[#B8934A] mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>

                {/* Text */}
                <p className="text-sm text-gray-600 leading-6 max-w-[220px] mx-auto">
                  {item.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-5 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-14 lg:gap-20 items-center">
          {/* Left Content */}
          <div className="relative">
            {/* Small Tag */}
            <div className="section-tag justify-start text-xs sm:text-sm">
              About Us
            </div>
            {/* Sub Heading */}
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 mb-6 relative z-10">
              Dreams Into Reality
            </h2>

            {/* Paragraph */}
            <p className="text-gray-600 text-base sm:text-lg leading-8 max-w-2xl relative text-justify z-10">
              Elite Construction is Jaipur’s premium turnkey construction and
              design company delivering dream homes, commercial spaces,
              interiors, and renovations with unmatched quality, expert
              planning, and on-time execution. From concept to handover, we
              handle everything with precision, transparency, and complete peace
              of mind.
            </p>

            {/* Button */}
            <div className="mt-5 md:mt-10 relative z-10">
              <Link
                href="/projects"
                className="btn-outline text-center sm:w-auto"
              >
                Learn More →
              </Link>
            </div>
          </div>

          {/* Right Image */}
          <div className="relative">
            {/* Border Box */}
            <div className="absolute -top-6 -left-6 w-full h-full border border-gray-300"></div>

            {/* Main Image */}
            <div className="relative bg-white p-4 shadow-xl">
              <img
                src="/homeabout.png"
                alt="Elite Construction Building"
                className="w-full h-[450px]  object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center mb-6 lg:mb-16">
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
              className="btn-primary sm:w-auto inline-block text-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f7f7f7] py-10 md:py-20 px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-5 md:mb-10">
            <div className="section-tag justify-center text-xs sm:text-sm">
              Our Expertise
            </div>
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight mb-2 relative z-10">
              Expertise In Our Service
            </h2>

            <p className=" text-lg sm:text-xl text-gray-800 max-w-5xl mx-auto leading-relaxed">
              We ensure an outstanding experience with comprehensive services
              that go Above & Beyond. Our methods have evolved with the times
              through our professional journey.
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {service.map((item, index) => (
              <div
                key={index}
                className="group bg-[#f3eee7] rounded-[2rem] border border-[#d9b98a] p-6 text-center shadow-md hover:shadow-xl hover:-translate-y-2 transition-all duration-500 overflow-hidden"
              >
                {/* Image Wrapper */}
                <div className="relative overflow-hidden rounded-sm mb-6">
                  {/* Image */}
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-64 object-cover transition-all duration-500 group-hover:scale-105"
                  />

                  {/* Description Overlay */}
                  <div className="absolute inset-0 bg-black/60 flex items-center justify-center px-5 opacity-0 translate-y-full group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                    <p className="text-white text-base leading-8">
                      {item.desc}
                    </p>
                  </div>
                </div>

                {/* Title */}
                <h3 className="text-2xl font-semibold text-[#1c2d44] uppercase leading-tight">
                  {item.title}
                </h3>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── SERVICES ── */}
      <section className="py-10 md:py-20 bg-white text-gray-900 relative overflow-hidden">
        <div className="absolute bottom-0 left-0 w-72 h-72 bg-black/5 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Heading */}
          <div className="flex flex-col lg:flex-row items-center lg:items-end justify-center lg:justify-between gap-6 mb-5 md:mb-14">
            <div>
              <div className="section-tag text-xs sm:text-sm">What We Do</div>

              <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 leading-tight">
                Our Services
              </h2>
            </div>

            <Link
              href="/service"
              className="btn-outline w-56 md:w-auto text-center"
            >
              View All Services
            </Link>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 gap-6">
            {services.map((s, i) => (
              <div
                key={i}
                className="group relative bg-white border border-gray-200 rounded-3xl p-7 sm:p-8 overflow-hidden hover:-translate-y-3 hover:shadow-2xl hover:border-[#B8934A]/40 transition-all duration-500"
              >
                {/* Corner Glow */}
                <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#B8934A]/10 rounded-full blur-2xl group-hover:scale-125 transition duration-700" />

                {/* Top Line */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B8934A] via-[#d2b06b] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

                {/* Icon */}
                <div className="w-18 h-18 rounded-2xl bg-gradient-to-br from-[#B8934A]/15 to-[#B8934A]/5 border border-[#B8934A]/20 flex items-center justify-center mb-6 group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
                  <Image
                    src={s.image}
                    alt={s.title}
                    width={40}
                    height={40}
                    className="object-contain"
                  />
                </div>

                {/* Number */}
                <div className="absolute top-6 right-6 text-5xl font-bold text-gray-100 group-hover:text-[#B8934A]/10 transition duration-500">
                  0{i + 1}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl mb-4 relative z-10 group-hover:text-[#B8934A] transition-colors duration-300">
                  {s.title}
                </h3>

                {/* Description */}
                <p className="text-sm sm:text-[15px] text-gray-500 leading-7 relative z-10">
                  {s.desc}
                </p>

                {/* Bottom Arrow */}
                <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-[#B8934A] opacity-100 lg:opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  Learn More →
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── WHY US ── */}
      <section className="pb-10 lg:pb-20 bg-white relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 right-0 w-56 sm:w-72 lg:w-96 h-56 sm:h-72 lg:h-96 rounded-full bg-[radial-gradient(circle,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-20 items-center">
            {/* Left Content */}
            <div>
              <div className="section-tag text-xs sm:text-sm">
                Why Choose Us
              </div>

              <h2 className="font-display text-3xl md:text-5xl font-bold text-gray-900 mb-2 md::mb-6 leading-tight">
                Excellence Is Our
                <br />
                <span className="text-[#B8934A]">Foundation</span>
              </h2>

              <p className="text-sm sm:text-[0.95rem] text-gray-600 leading-7 sm:leading-8 mb-4 md:mb-8 sm:mb-10 max-w-xl">
                We offer over 20 years of expertise in planning & design. More
                than builders—we’re your long-term partners, committed to your
                vision.
              </p>

              {/* Features */}
              <div className="space-y-5 sm:space-y-6">
                {whyUs.map(([title, desc]) => (
                  <div key={title} className="flex gap-4 items-start group">
                    <div className="w-10 h-10 rounded-md bg-[#B8934A]/15 border border-[#B8934A]/40 flex items-center justify-center flex-shrink-0 mt-0.5 group-hover:scale-110 transition">
                      {icons[title]}
                    </div>

                    <div>
                      <h4 className="text-sm sm:text-base font-semibold text-gray-900 tracking-wide">
                        {title}
                      </h4>

                      <p className="text-xs sm:text-sm text-gray-500 leading-6">
                        {desc}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Image */}
            <div className="relative mt-6 lg:mt-0">
              {/* Decorative Layer */}
              <div className="absolute -inset-3 sm:-inset-5 bg-[#B8934A]/10 rotate-2 rounded-xl" />

              <img
                src="https://images.unsplash.com/photo-1504307651254-35680f356dfd?w=700&q=80"
                alt="Construction"
                className="relative z-10 w-full h-[320px] sm:h-[420px] lg:h-[500px] object-cover rounded-xl shadow-xl"
              />

              {/* Counter Card */}
              <div className="absolute -bottom-4 sm:-bottom-5 left-4 sm:-left-5 bg-[#B8934A] px-5 sm:px-7 py-4 sm:py-5 z-20 rounded-lg shadow-lg">
                <div className="font-display text-3xl sm:text-[2.5rem] font-bold text-[#0A0A0A] leading-none">
                  500+
                </div>

                <div className="text-[10px] sm:text-[0.62rem] font-bold tracking-[0.15em] uppercase text-[#0A0A0A]/70 mt-1">
                  Projects Done
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── CTA BANNER ── */}
      <section className="py-10 md:py-20 bg-[#B8934A]/5 border-y border-[#B8934A]/15 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 grid-bg-dense opacity-60" />

        {/* Gold Glow */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10 text-center">
          {/* Tag */}
          <div className="section-tag justify-center text-xs sm:text-sm">
            Get Started Today
          </div>

          {/* Heading */}
          <h2 className="font-display text-[clamp(2rem,6vw,4rem)] mb-4 sm:mb-5 font-bold text-gray-900 leading-tight">
            Ready to Build Your <span className="text-[#B8934A]">Dream?</span>
          </h2>

          {/* Description */}
          <p className="text-sm sm:text-base text-gray-600 mb-8 sm:mb-11 max-w-[480px] mx-auto leading-7">
            Schedule a free consultation with our experts and take the first
            step towards your dream property.
          </p>

          {/* Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link
              href="/contact"
              className="btn-primary sm:w-auto text-center text-sm px-8 sm:px-11 py-4 sm:py-[18px]"
            >
              Book Free Consultation
            </Link>

            <a
              href="tel:+919876543210"
              className="btn-outline  sm:w-auto text-center text-sm px-8 sm:px-11 py-4"
            >
              Call: +91 98765 43210
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
