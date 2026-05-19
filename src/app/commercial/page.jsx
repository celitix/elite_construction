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
      <section className="relative overflow-hidden bg-[#f7f3eb] pb-5 md:pb-16">
        {/* TOP BACKGROUND IMAGE */}
        <div
          className="absolute top-0 left-0 w-full h-[25%] md:h-[30%] lg:h-[50%] xl:h-[60%] bg-cover bg-center opacity-40"
          style={{
            backgroundImage: "url('/ServiceBackground.jpg')",
          }}
        />

        {/* BIG WATERMARK */}
        <div className="absolute -top-2 left-1/2 -translate-x-1/2 z-[1] pointer-events-none select-none">
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
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 grid lg:grid-cols-2 gap-8 lg:gap-20 items-center">
            {/* LEFT BOX */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[420px] rounded-[28px] sm:rounded-[42px] overflow-hidden bg-[#f3f3f3]">
                <Image
                  src="/Commercial/commercialHero.png"
                  alt="Hero Image"
                  fill
                  className="object-fill"
                  priority
                />
              </div>
            </div>

            {/* RIGHT CONTENT */}
            <div className="text-white text-center lg:text-left">
              <h3 className="text-3xl md:text-5xl font-bold leading-[1.1] mb-5">
                Premium Commercial Construction Services in Jaipur
              </h3>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.5] text-white/95 max-w-[600px] mx-auto lg:mx-0 mb-2 text-justify">
                Elite Construction offers premium commercial construction
                services in Jaipur designed to create modern, functional, and
                future-ready business spaces. Whether you are planning to build
                office buildings, showrooms, retail outlets, hotels,
                restaurants, hospitals, or commercial complexes, our expert
                construction team ensures high-quality execution at every stage.
                We focus on durable construction, smart space utilization,
                modern architectural design, and premium finishing to deliver
                commercial spaces that support business growth, productivity,
                and long-term value.
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

      <section className="w-full bg-[#f3f3f3] py-5 md:py-16  overflow-hidden">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-10 2xl:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Commercial/commercialSone.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl md:text-5xl font-bold leading-tight text-black">
                Commercial Construction & Structural Development Services
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 text-justify">
                We are the best commercial construction company that specializes
                in complete construction and structural development services.
                For offices, corporate buildings, showrooms, hotels, hospitals,
                schools, retail establishments, and major business
                infrastructure structures, we are the top commercial
                construction firm that specializes in full construction and
                structural development services. With a team of skilled
                professionals and a wealth of industry expertise, we create
                contemporary, durable, and future-ready commercial spaces that
                meet strict quality and functional requirements.Our experience
                in commercial construction helps us carry out projects with
                precision, strong engineering methods, and high-quality
                materials. We handle everything from foundation work and
                structural framing to the entire project execution.
              </p>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-5 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Project Management & Commercial Construction Implementation
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 text-justify">
                Every project is executed efficiently, simply, and successfully
                from start to finish thanks to our commercial construction and
                project management services. We maintain complete collaboration
                between architects, engineers, consultants, contractors, and
                clients in order to achieve outstanding solutions. From project
                planning, budgeting, scheduling, procurement, and resource
                management to onsite monitoring and quality control, our
                knowledgeable project managers concentrate on every aspect.We
                use modern construction techniques while adhering to stringent
                quality requirements and safety regulations.
              </p>
            </div>
            {/* RIGHT CONTENT */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Commercial/commercialStwo.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-5 px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Commercial/commercialSthree.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Interior & Exterior Finishing Services
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 text-justify">
                We offer superior exterior and interior finishing solutions that
                enhance business premises' appearance, usefulness, and
                professional image. Our talented staff creates eye-catching
                exteriors and contemporary commercial interiors to match your
                brand and business requirements. <br />
                Premium flooring installation, false ceiling design, workstation
                setup, contemporary lighting solutions, wall finishing,
                integration of modular furniture, reception area design,
                conference room setup, and full interior enhancement are all
                included in our business interior finishing services. Our main
                goal is to design elegant, cozy, and extremely productive
                business spaces that enhance customer satisfaction and worker
                productivity.
              </p>

              {/* <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mt-6">
                Praesent risus minim distinctio adipisci cubilia auctor sem
                felis, qui urna facilisis omnis erro.
              </p> */}
            </div>
          </div>
        </div>

        <div className="max-w-[1200px] mx-auto px-6 md:px-6 py-5">
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
            text-3xl
            md:text-5xl
            font-bold
            text-black
            leading-tight
          "
            >
              What Makes Our Commercial Construction Different?
            </h2>

            <div className="w-24 h-[2px] bg-[#B8934A] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Content */}
          <div
            className="
          grid
          grid-cols-1
          md:grid-cols-3
          gap-y-16
          md:gap-x-14
          lg:gap-x-20
          my-10
          md:mt-20
        "
          >
            {/* Card 1 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Commercial/commercialTthree.png"
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
                Smart Space Planning
              </h3>

              <p
                className="
              text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                Our commercial layouts are built to improve future scalability,
                operational efficiency, and space use.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Commercial/commercialTtwo.png"
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
                Complete construction solutions
              </h3>

              <p
                className="
             text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                We offer full commercial construction services under one roof,
                from site development and structural building to outside
                elevation and interior finishing.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Commercial/commercialTthree.png"
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
                Innovative Commercial Design
              </h3>

              <p
                className="
              text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                Commercial rooms that are contemporary and practical and
                intended to improve customer satisfaction, business expansion,
                and productivity
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className=" py-10 md:py-20 bg-white">
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
      <section className="py-10 md:py-20 bg-[#B8934A]/5 border-y border-[#B8934A]/15 relative overflow-hidden">
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
