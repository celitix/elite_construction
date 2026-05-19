import Image from "next/image";
import Link from "next/link";
import React from "react";

const Page = () => {
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
      <section className="relative overflow-hidden bg-[#f7f3eb]">
        {/* TOP BACKGROUND IMAGE */}
        <div
          className="absolute top-0 left-0 w-full h-[25%] md:h-[30%] lg:h-[50%] xl:h-[60%] bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/ServiceBackground.jpg')",
          }}
        />

        {/* BIG WATERMARK */}
        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-[1] pointer-events-none select-none">
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
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 grid lg:grid-cols-2 gap-5 lg:gap-20 items-center">
            {/* LEFT BOX */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-[28px] sm:rounded-[42px] overflow-hidden bg-[#f3f3f3]">
                <Image
                  src="/Renovation/renovationHero.png"
                  alt="Hero Image"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <h3 className="text-2xl sm:text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
                Premium Renovation Services in Jaipur
              </h3>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.5] text-white/95 max-w-[600px] mx-auto lg:mx-0 mb-2 text-justify">
                Elite Construction offers premium renovation services in Jaipur
                designed to transform old and outdated spaces into modern,
                functional, and visually appealing environments. Whether you are
                planning home renovation, office remodeling, villa renovation,
                apartment upgrades, or complete commercial space transformation,
                our expert renovation team ensures high-quality execution at
                every stage. We focus on smart space planning, modern interiors,
                structural improvements, and premium finishing solutions to
                create stylish spaces that enhance comfort, functionality, and
                long-term property value.
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

      <section className="w-full bg-[#f3f3f3] py-10 md:py-16  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 2xl:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Renovation/renovationSOne.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Best Renovation Services in Jaipur
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 text-justify">
                Elite Builders is recognized for offering the best renovation
                services in Jaipur with modern designs, premium finishing, and
                high-quality workmanship. As trusted renovation builders in
                Jaipur, we specialize in home renovation, luxury villa
                remodeling, apartment renovation, office renovation, and
                complete property transformation services. Our expert renovation
                team focuses on smart space planning, elegant interiors,
                structural upgrades, and durable finishing solutions to create
                modern spaces that enhance comfort, functionality, and long-term
                property value.
              </p>
            </div>
          </div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Trusted Renovation Experts in Jaipur
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 text-justify">
                Elite Builders is known for delivering renovation projects that
                combine modern aesthetics, durable construction, and
                professional project execution. We understand that renovating
                your home is an important investment, which is why we focus on
                transparency, quality workmanship, and customer satisfaction at
                every stage.Our skilled renovation specialists maintain smooth
                communication throughout the project, keeping you updated from
                planning and design to execution and final finishing. Every
                renovation is carried out with careful attention to detail to
                ensure the final result matches your expectations perfectly.
              </p>
            </div>
            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Renovation/renovationSTwo.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4 mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Renovation/renovationSThree.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Complete Home Remodeling
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 text-justify">
                Our home remodeling services are designed for homeowners who
                want a complete lifestyle upgrade. We redesign spaces with
                modern layouts, contemporary interiors, premium materials, and
                customized detailing that reflect your personality and living
                needs. From concept planning to final execution, we manage every
                detail with precision to deliver homes that feel luxurious,
                functional, and timeless.
              </p>

              {/* <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mt-6">
                Praesent risus minim distinctio adipisci cubilia auctor sem
                felis, qui urna facilisis omnis erro.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f3f3f3] pb-10 md:pb-16">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-6">
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
            text-[28px]
            sm:text-[42px]
            md:text-[52px]
            font-bold
            text-black
            leading-tight
          "
            >
              What Makes Our Renovation Services Different?
            </h2>

            <div className="w-24 h-[2px] bg-[#B8934A] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-16 gap-y-6 md:gap-x-14 lg:gap-x-20 mt-5 md:mt-15">
            {/* Card 1 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Renovation/renovationTOne.png"
                  alt="Design Built"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3
                className="
              text-2xl
              font-semibold
              text-black
              mb-2
            "
              >
                Smart Renovation Planning
              </h3>

              <p
                className="
              text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                Our renovation solutions are designed to improve space
                utilization, comfort, and functionality while giving old spaces
                a modern and refreshed look for better everyday living.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Renovation/renovationTTwo.png"
                  alt="Design Built"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3
                className="
               text-2xl
              font-semibold
              text-black
              mb-2
            "
              >
                Complete Renovation Solutions
              </h3>

              <p
                className="
             text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                We provide complete home and commercial renovation services
                under one roof, including structural upgrades, remodeling,
                interior renovation, exterior finishing, and modern space
                transformation.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Renovation/renovationTThree.png"
                  alt="Design Built"
                  width={80}
                  height={80}
                  className="object-contain"
                />
              </div>

              <h3
                className="
               text-2xl
              font-semibold
              text-black
              mb-2
            "
              >
                Modern Renovation Design
              </h3>

              <p
                className="
              text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                We create stylish and practical renovation spaces with modern
                interiors, smart layouts, and premium finishes designed to
                improve comfort, property value, and overall living experience.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-5 md:py-16 bg-white">
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

export default Page;
