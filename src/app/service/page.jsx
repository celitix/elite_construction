"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const slides = [
  {
    image:
      "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1494526585095-c41746248156?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1523217582562-09d0def993a6?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1448630360428-65456885c650?q=80&w=1400",
  },
  {
    image:
      "https://images.unsplash.com/photo-1460317442991-0ec209397118?q=80&w=1400",
  },
];

const GOLD = "#B8962E";

const steps = [
  {
    id: 1,
    title: "Consultation",
    description: "We discuss your project goals, requirements, and budget.",
    side: "left",
  },
  {
    id: 2,
    title: "Consultation",
    description: "We discuss your project goals, requirements, and budget.",
    side: "right",
  },
  {
    id: 3,
    title: "Planning & Design",
    description: "We discuss your project goals, requirements, and budget.",
    side: "left",
  },
  {
    id: 4,
    title: "Project Execution",
    description: "We discuss your project goals, requirements, and budget.",
    side: "right",
  },
  {
    id: 5,
    title: "Project Execution",
    description: "We discuss your project goals, requirements, and budget.",
    side: "left",
  },
  {
    id: 6,
    title: "Project Execution",
    description: "We discuss your project goals, requirements, and budget.",
    side: "right",
  },
];

function Dot() {
  return (
    <div
      className="w-5 h-5 rounded-full flex-shrink-0"
      style={{
        backgroundColor: GOLD,
        boxShadow: `0 0 0 7px rgba(184,150,46,0.15)`,
      }}
    />
  );
}

function ConnectorLine({ fromX, toX, svgW = 600 }) {
  const height = 80; // vertical segment height in SVG units
  // Path: start at top of fromX, go straight down, then across to toX
  const d = `M ${fromX} 0 L ${fromX} ${height} L ${toX} ${height}`;

  return (
    <svg
      viewBox={`0 0 ${svgW} ${height}`}
      preserveAspectRatio="xMidYMid meet"
      className="w-full"
      style={{ height: 80, display: "block" }}
      aria-hidden="true"
    >
      <path
        d={d}
        fill="none"
        stroke={GOLD}
        strokeWidth="2.5"
        strokeLinejoin="miter"
      />
    </svg>
  );
}

function StepCard({ title, description, align }) {
  return (
    <div
      style={{
        textAlign: align,
        maxWidth: 190,
        display: "inline-block",
      }}
    >
      <h3 className="font-black text-gray-900 text-lg leading-snug mb-1">
        {title}
      </h3>
      <p className="text-gray-500 text-sm leading-relaxed">{description}</p>
    </div>
  );
}

// SVG layout constants
const SVG_W = 600;
const LEFT_X = 210; // x-position of left dots
const RIGHT_X = 390; // x-position of right dots
const ROW_H = 160; // vertical spacing between dots
const START_Y = 70;

const Service = () => {
  const [active, setActive] = useState(0);

  // AUTO SLIDE
  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 3000);

    return () => clearInterval(interval);
  }, [active]);

  const nextSlide = () => {
    setActive((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setActive((prev) => (prev - 1 + slides.length) % slides.length);
  };

  const services = [
    {
      id: "1",
      title: "Residential Construction Services",
      description:
        "We create stylish homes that offer a combination of beautiful architecture, robust construction, and practical interior design. Whether you prefer a lavish villa or want a customized home, we provide homes that suit your lifestyle and requirements at Elite Construction Jaipur.",
      points: [
        "New Home Construction",
        "Construction of Luxury Villas",
        "Home Renovation Services",
        "Kitchen and Bathroom Renovation",
        "Flooring, Ceilings, and Space Planning",
      ],
      url: "/residential",
      image: "/Services/ServicesTOne.png",
    },
    {
      id: "2",
      title: "Commercial Construction Services",
      description:
        "We provide commercial building services that aim to increase efficiency and promote growth. At Elite Construction Jaipur, our focus is on developing office spaces, shops, cafes, and other commercial buildings with high-quality materials and innovative designs.",
      points: [
        "Office Building Construction ",
        "Interior Design of Retail Shops and Showrooms",
        "Commercial Building Renovation",
        "Structural and Civil Work Solutions",
        "Workplace Design and Planning",
      ],
      url: "/commercial",
      image: "/Services/ServicesTTwo.png",
    },
    {
      id: "3",
      title: "Renovation Services",
      description:
        "Upgrade your property with our quality renovation services. The renovation experts at Elite Construction Jaipur ensure that you get aesthetically pleasing properties that have high property values along with good structural strength.",
      points: [
        "Full Home Renovation Services",
        "Interior & Exterior Renovation",
        "Modern Design Upgrade",
        "Repair & Restoration",
        "Space Optimizations",
      ],
      url: "/renovation",
      image: "/Services/ServicesTThree.png",
    },
    {
      id: "4",
      title: "Interior Design Services",
      description:
        "The interior design services offered by Elite Construction Jaipur provide the perfect combination of creativity and luxury in the interior decoration of any space. Be it home, office, or any other type of space, our professionals work with custom designs to create stylish interiors.",
      points: [
        "Modular Kitchen Designs",
        "Bedrooms & Living Room Interior Designs",
        "Office Interior Design Services",
        "Design Furniture and Decor Ideas",
        "Luxury Interior Styling",
      ],
      url: "/interior-design",
      image: "/Services/ServicesTFour.png",
    },
    {
      id: "5",
      title: "Construction Consultancy Services",
      description:
        "Consultants will offer expert guidance and consultancy services for your construction project in Jaipur, whether it is residential or commercial. They will assist you in achieving quality construction within your timeline and budget.",
      points: [
        "Construction Planning & Consultancy",
        "Budgeting & Material Selection",
        "Site Inspection & Assessment",
        "Architectural Guidance",
        "Construction Execution Support",
      ],
      url: "/consultation",
      image: "/Services/ServicesTFive.png",
    },
  ];

  // y of first dot

  const dotPositions = steps.map((s, i) => ({
    x: s.side === "left" ? LEFT_X : RIGHT_X,
    y: START_Y + i * ROW_H,
    side: s.side,
  }));

  const SVG_H = START_Y + (steps.length - 1) * ROW_H + START_Y;

  // L-shaped path: vertical down from dot[i].x to dot[i+1].y, then horizontal to dot[i+1].x
  const connectors = dotPositions.slice(0, -1).map((from, i) => {
    const to = dotPositions[i + 1];
    return `M ${from.x} ${from.y} L ${from.x} ${to.y} L ${to.x} ${to.y}`;
  });

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

  return (
    <div>
      <section className="relative overflow-hidden bg-[#f7f3eb] ">
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
          <div className="max-w-7xl mx-auto px-4 md:px-0 py-10 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">
            {/* LEFT BOX */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[380px] rounded-[28px] sm:rounded-[42px] overflow-hidden bg-[#f3f3f3]">
                <Image
                  src="/Services/ServicesHero.png"
                  alt="Hero Image"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-semibold mb-5">
                Professional Construction
                <br />& Interior Design Services In Jaipur
              </h3>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.5] text-white/95 max-w-[600px] mx-auto lg:mx-0 mb-2 text-justify">
                Elite Construction is an expert in offering residential
                construction, commercial construction, renovations, and interior
                design in Jaipur. The areas in which we excel include
                constructing modern residences, luxury villas, office buildings,
                and even interiors. The expertise we provide in our work
                includes durability, functionality, and timely completion of
                projects.
              </p>

              <div className="mt-6 relative z-10">
                <Link
                  href="/contact"
                  className="btn-outline-white text-center sm:w-auto"
                >
                  Get a free consultation
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f5f5f5] py-5 md:py-16 overflow-hidden">
        {/* TOP CONTENT */}
        <div className="max-w-6xl mx-auto text-center px-4 sm:px-6">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-900 leading-tight ">
            Your Trusted Partner For <br />
            <span className="text-[#b79043]">Modern Construction </span>
          </h2>

          <p className="mt-2 text-[16px] md:text-[19px] leading-[1.5] text-[#333] max-w-6xl mx-auto">
            Our firm, Elite Construction, provides all kinds of construction and
            interior design services for residential, commercial, and property
            development clients in Jaipur. Our experts will take care of
            everything from architectural design, civil construction,
            renovation, to modern interior design services. We are dedicated to
            providing high-quality construction services in Jaipur.
          </p>
        </div>

        {/* SLIDER */}
        <div className="relative mt-5 flex items-center justify-center">
          {/* LEFT BUTTON */}
          <button
            onClick={prevSlide}
            className="absolute left-2 sm:left-4 md:left-10 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaChevronLeft className="text-black text-sm sm:text-base md:text-lg" />
          </button>

          {/* RIGHT BUTTON */}
          <button
            onClick={nextSlide}
            className="absolute right-2 sm:right-4 md:right-10 z-30 w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-full bg-white shadow-xl flex items-center justify-center hover:scale-110 duration-300"
          >
            <FaChevronRight className="text-black text-sm sm:text-base md:text-lg" />
          </button>

          {/* SLIDES */}
          <div className="relative w-full max-w-7xl h-[260px] sm:h-[360px] md:h-[450px] lg:h-[500px] flex items-center justify-center">
            {slides.map((slide, index) => {
              const offset = (index - active + slides.length) % slides.length;

              let positionClass = "";

              // CENTER IMAGE
              if (offset === 0) {
                positionClass =
                  "translate-x-0 scale-100 opacity-100 z-20 w-[75%] sm:w-[55%] md:w-[40%] lg:w-[32%]";
              }

              // RIGHT IMAGE
              else if (offset === 1) {
                positionClass =
                  "translate-x-[55%] sm:translate-x-[70%] md:translate-x-[82%] scale-[0.82] opacity-40 z-10 w-[65%] sm:w-[50%] md:w-[45%] lg:w-[40%]";
              }

              // LEFT IMAGE
              else if (offset === slides.length - 1) {
                positionClass =
                  "-translate-x-[55%] sm:-translate-x-[70%] md:-translate-x-[82%] scale-[0.82] opacity-40 z-10 w-[65%] sm:w-[50%] md:w-[45%] lg:w-[40%]";
              }

              // HIDE OTHER IMAGES
              else {
                positionClass = "opacity-0 scale-50";
              }

              return (
                <div
                  key={index}
                  className={`absolute transition-all duration-700 ease-in-out ${positionClass}`}
                >
                  <div className="overflow-hidden rounded-[24px] sm:rounded-[36px] lg:rounded-[50px] bg-[#c29d50] shadow-2xl">
                    <img
                      src={slide.image}
                      alt={`slide-${index}`}
                      className="w-full h-[220px] sm:h-[300px] md:h-[360px] lg:h-[420px] object-cover"
                    />
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f4f4f4] py-5 md:pb-16 overflow-hidden">
        <div className="max-w-6xl mx-auto">
          {/* HEADING */}
          <div className="text-center mb-4 md:mb-8">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-900 ">
              Our Core <span className="text-[#bc9646]">Services</span>
            </h2>
          </div>

          {/* SERVICES */}
          <div className="space-y-5 md:space-y-10">
            {services.map((service, index) => {
              const reverse = index % 2 !== 0;

              return (
                <div
                  key={index}
                  className={`grid lg:grid-cols-2 gap-5 lg:gap-14 items-center ${
                    reverse ? "lg:[&>*:first-child]:order-2" : ""
                  }`}
                >
                  {/* CONTENT */}
                  <div className=" px-5">
                    {/* NUMBER + TITLE */}
                    <div className="flex items-center gap-4 mb-5">
                      <div className="w-10 h-10 rounded-full bg-[#bc9646] text-white text-lg font-bold flex items-center justify-center shrink-0">
                        {service.id}
                      </div>

                      <h3 className="text-xl md:text-3xl font-bold text-black leading-none">
                        {service.title}
                      </h3>
                    </div>

                    {/* DESCRIPTION */}
                    <p className="text-[#333] text-[15px] leading-[1.7] mb-2 md:mb-6">
                      {service.description}
                    </p>

                    {/* POINTS */}
                    <ul className="space-y-1 mb-6">
                      {service.points.map((item, i) => (
                        <li
                          key={i}
                          className="text-[15px] text-[#333] flex gap-2"
                        >
                          <span>•</span>
                          {item}
                        </li>
                      ))}
                    </ul>

                    {/* BUTTON */}
                    <Link href={service.url} className="btn-outline">
                      Learn More →
                    </Link>
                  </div>

                  {/* IMAGE SHAPE */}
                  <div className="flex justify-center w-full">
                    <div
                      className={`
      relative
      w-[360px]
      sm:w-[320px]
      md:w-[420px]
      lg:w-[550px]
      aspect-square
      overflow-hidden

      ${
        reverse
          ? "rounded-tr-[80px] sm:rounded-tr-[120px] rounded-bl-[80px] sm:rounded-bl-[120px] rounded-br-[80px] sm:rounded-br-[120px]"
          : "rounded-tl-[80px] sm:rounded-tl-[120px] rounded-br-[80px] sm:rounded-br-[120px] rounded-bl-[80px] sm:rounded-bl-[120px]"
      }
    `}
                    >
                      <Image
                        src={service.image}
                        alt="service image"
                        fill
                        className="object-cover"
                      />
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <section className="relative w-full overflow-hidden">
        {/* BG IMAGE */}
        <div
          className="absolute inset-0 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&w=2000')",
          }}
        />

        {/* DARK OVERLAY */}
        <div className="absolute inset-0 bg-black/70" />

        {/* CONTENT */}
        <div className="relative z-10 max-w-7xl mx-auto px-5 sm:px-6 lg:px-8 py-16 ">
          {/* HEADING */}
          <div className="text-center mb-15">
            <h2 className="text-white text-3xl md:text-5xl font-bold leading-tight max-w-5xl mx-auto">
              Our working process - how we
              <br className="hidden md:block" />
              Build Your Dream Space
            </h2>
          </div>

          {/* ================= DESKTOP ================= */}
          <div className="hidden lg:block relative ">
            {/* LINE */}
            <div className="absolute top-8 left-22 w-full border-t border-dashed border-white/40 max-w-3xl xl:max-w-5xl 2xl:max-w-5xl mx-auto" />

            <div className="grid grid-cols-6 gap-6 relative">
              {/* ITEM 1 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-10 relative z-10">
                  01
                </div>

                <h3 className="text-white text-[22px] font-bold leading-[1.5]">
                  Initial Consultation
                </h3>
              </div>

              {/* ITEM 2 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-10 relative z-10">
                  02
                </div>

                <h3 className="text-white text-[22px] font-bold leading-[1.5]">
                  Site Visiting & Inspection
                </h3>
              </div>

              {/* ITEM 3 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-10 relative z-10">
                  03
                </div>

                <h3 className="text-white text-[22px] font-bold leading-[1.5]">
                  Planning and Budget Discussion
                </h3>
              </div>

              {/* ITEM 4 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-10 relative z-10">
                  04
                </div>

                <h3 className="text-white text-[22px] font-bold leading-[1.5]">
                  Architectural Design & Project Development
                </h3>
              </div>

              {/* ITEM 5 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-10 relative z-10">
                  05
                </div>

                <h3 className="text-white text-[22px] font-bold leading-[1.5]">
                  Construction and Project Execution
                </h3>
              </div>

              {/* ITEM 6 */}
              <div className="flex flex-col items-center text-center">
                <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-10 relative z-10">
                  06
                </div>

                <h3 className="text-white text-[22px] font-bold leading-[1.5]">
                  Project Delivery & Client Satisfaction
                </h3>
              </div>
            </div>
          </div>

          {/* ================= TABLET ================= */}
          <div className="hidden sm:grid lg:hidden grid-cols-2 gap-y-20 gap-x-10 relative">
            {/* CENTER LINE */}
            <div className="absolute left-1/2 top-0 -translate-x-1/2 w-[2px] h-full bg-white/20" />

            {/* ITEM 1 */}
            <div className="relative flex flex-col items-end text-right">
              <div className="absolute top-8 right-0 h-[2px] bg-white/20 w-1/2" />

              <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                01
              </div>

              <h3 className="text-white text-[26px] font-bold">Call Us</h3>
            </div>

            {/* ITEM 2 */}
            <div className="relative flex flex-col items-start text-left">
              <div className="absolute top-8 left-0 h-[2px] bg-white/20 w-1/2" />

              <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                02
              </div>

              <h3 className="text-white text-[26px] font-bold">Site Visit</h3>
            </div>

            {/* ITEM 3 */}
            <div className="relative flex flex-col items-end text-right">
              <div className="absolute top-8 right-0 h-[2px] bg-white/20 w-1/2" />

              <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                03
              </div>

              <h3 className="text-white text-[26px] font-bold leading-[1.5]">
                Vision Brief &
                <br />
                Budgeting
              </h3>
            </div>

            {/* ITEM 4 */}
            <div className="relative flex flex-col items-start text-left">
              <div className="absolute top-8 left-0 h-[2px] bg-white/20 w-1/2" />

              <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                04
              </div>

              <h3 className="text-white text-[26px] font-bold leading-[1.5]">
                Design and
                <br />
                Planning
              </h3>
            </div>

            {/* ITEM 5 */}
            <div className="relative flex flex-col items-end text-right">
              <div className="absolute top-8 right-0 h-[2px] bg-white/20 w-1/2" />

              <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                05
              </div>

              <h3 className="text-white text-[26px] font-bold">Build</h3>
            </div>

            {/* ITEM 6 */}
            <div className="relative flex flex-col items-start text-left">
              <div className="absolute top-8 left-0 h-[2px] bg-white/20 w-1/2" />

              <div className="w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[24px] font-bold mb-6 relative z-10">
                06
              </div>

              <h3 className="text-white text-[26px] font-bold leading-[1.5]">
                Project Completion
                <br />
                and Handover
              </h3>
            </div>
          </div>

          {/* ================= MOBILE ================= */}
          <div className="sm:hidden relative max-w-sm mx-auto">
            {/* LINE */}
            <div className="absolute left-8 top-0 w-[2px] h-180 bg-white/20" />

            <div className="space-y-16">
              {/* ITEM 1 */}
              <div className="relative flex gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[22px] font-bold shrink-0">
                  01
                </div>

                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-bold">Call Us</h3>
                </div>
              </div>

              {/* ITEM 2 */}
              <div className="relative flex gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[22px] font-bold shrink-0">
                  02
                </div>

                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-bold">
                    Site Visit
                  </h3>
                </div>
              </div>

              {/* ITEM 3 */}
              <div className="relative flex gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[22px] font-bold shrink-0">
                  03
                </div>

                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-bold leading-[1.5]">
                    Vision Brief &
                    <br />
                    Budgeting
                  </h3>
                </div>
              </div>

              {/* ITEM 4 */}
              <div className="relative flex gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[22px] font-bold shrink-0">
                  04
                </div>

                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-bold leading-[1.5]">
                    Design and
                    <br />
                    Planning
                  </h3>
                </div>
              </div>

              {/* ITEM 5 */}
              <div className="relative flex gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[22px] font-bold shrink-0">
                  05
                </div>

                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-bold">Build</h3>
                </div>
              </div>

              {/* ITEM 6 */}
              <div className="relative flex gap-6">
                <div className="relative z-10 w-16 h-16 rounded-full bg-[#B8934A] flex items-center justify-center text-white text-[22px] font-bold shrink-0">
                  06
                </div>

                <div className="pt-2">
                  <h3 className="text-white text-[24px] font-bold leading-[1.5]">
                    Project Completion
                    <br />
                    and Handover
                  </h3>
                </div>
              </div>
            </div>
          </div>

          {/* BUTTON */}
          <div className="flex justify-center mt-16">
            <button className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase hover:bg-[#B8934A] hover:text-white hover:border-[#B8934A] border border-white bg-white text-black transition px-10 py-5">
              GET IN TOUCH
            </button>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-10 lg:py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          {/* Heading */}
          <div className="text-center mb-5 lg:mb-16">
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


      {/* CTA */}
      <section className="py-10 lg:py-20 bg-[#B8934A]/5 border-y border-[#B8934A]/15 relative overflow-hidden">
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
            className="btn-primary sm:w-auto inline-block text-center px-8 sm:px-10 py-4"
          >
            Contact Us Today
          </Link>
        </div>
      </section>
    </div>
  );
};

export default Service;
