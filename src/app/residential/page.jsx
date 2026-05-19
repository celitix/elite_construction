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
          <div className="max-w-7xl mx-auto px-4 py-10 md:py-20 grid lg:grid-cols-2 gap-10 lg:gap-20 items-center">
            {/* LEFT BOX */}
            <div className="flex justify-center lg:justify-start">
              <div className="relative w-full h-[260px] sm:h-[320px] md:h-[400px] rounded-[28px] sm:rounded-[42px] overflow-hidden bg-[#f3f3f3]">
                <Image
                  src="/Residential/residentialHero.png"
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
                Premium Residential Construction Services in Jaipur
              </h3>

              <p className="text-[16px] sm:text-[17px] md:text-[18px] leading-[1.5] text-white/95 max-w-[600px] mx-auto lg:mx-0 mb-2 text-justify">
                Elite Construction enables the creation of modern and
                comfortable houses that last forever through the best
                residential construction service in Jaipur. It doesn’t matter
                whether you are building an elegant villa, duplex house, or
                independent house because Elite Construction will do it all for
                you.
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
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-10 2xl:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Residential/residentialSOne.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Building Homes That Match Your Lifestyle
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 text-justify">
                Elite Construction visualizes a home that is personal,
                purposeful, and future-facing. We offer home construction
                services in Jaipur as one of the reputed home builders in
                Jaipur, aiming to create modern residential homes with fast
                construction and effective use. <br />
                With us, realize every element of your dream, whether you need
                luxury villas, duplex independent houses, or custom-made
                residential buildings. We cover all aspects of the construction
                process, including foundations, structure, interior decoration,
                and so on. <br />
                We pride ourselves on delivering beautifully crafted and
                constructed residential spaces using special and unique exterior
                finishes.
              </p>
            </div>
          </div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                End-To-End Residential Construction Services
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] mt-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 text-justify">
                Building a home is easy to say, but difficult to get done, which
                is why we brought you the whole package of residential
                construction services in Jaipur under one roof through Elite
                Construction. We handle everything from planning, design,
                construction, project supervision, and material coordination to
                interior work, so you can experience smooth sailing with a
                stress-free process. <br />
                With our skilled residential building contractors, every project
                is done with the right quality norms and construction methods,
                and is completed promptly. Primarily, create homes that are
                stylish, spacious, energy-efficient, and focused on your
                lifestyle requirements. <br />
                You need a contemporary family home or high-end luxury
                residence. Rest assured that all aspects of every build from
                start to finish are professionally managed.
              </p>
            </div>
            {/* RIGHT CONTENT */}
             <div className="relative flex justify-center items-center h-100 md:h-130 lg:h-150 2xl:h-160 w-full">
              <Image
                src="/Residential/residentialSTwo.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>
          </div>
        </div>
      
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 lg:gap-24 items-center">
            {/* LEFT IMAGE DESIGN */}
            <div className="relative flex justify-center items-center h-100 md:h-10 lg:h-160 w-full">
              <Image
                src="/Residential/residentialSThree.png"
                alt="residentialSOne"
                fill
                className="object-fill"
                priority
              />
            </div>

            {/* RIGHT CONTENT */}
            <div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-black">
                Trusted Residential Construction Experts
              </h2>

              {/* Green Line */}
              <div className="w-24 h-[2px] bg-[#5ba164] my-3 md:my-6 mx-auto lg:mx-0"></div>

              {/* Paragraph */}
              <p className="text-gray-600 text-base sm:text-lg leading-7 text-justify">
                When it comes to building, Elite Construction goes above and
                beyond with modern designs, quality construction, and
                professionalism. We know building a home is one of the biggest
                investments for your family, so we aim for honesty, care, and
                consideration in every aspect. <br />
                Our experienced, customer-focused team keeps your project
                flowing with seamless communication — always updating you on
                where the project is going, what stage of the build it is
                currently in, and how timely quality execution will come to pass
                over each phase of the build. Right from the planning stage and
                throughout final handover, we are in constant touch with clients
                to ensure execution is as per requirements. <br />
                With our years of experience, we offer a home that won't just
                give you peace and comfort but will stand the test of time to
                provide premium living. With us, you get trusted residential
                construction services in Jaipur.
              </p>

              {/* <p className="text-gray-600 text-base sm:text-lg leading-7 sm:leading-8 mt-6">
                Praesent risus minim distinctio adipisci cubilia auctor sem
                felis, qui urna facilisis omnis erro.
              </p> */}
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-[#f3f3f3] pb-5 md:pb-16 ">
        <div className="max-w-[1200px] mx-auto px-6 sm:px-10 lg:px-6">
          {/* Heading */}
          <div className="text-center">
            <h2
              className="
            text-[32px]
            sm:text-[42px]
            md:text-[52px]
            font-bold
            text-black
            leading-tight
          "
            >
              What Makes Our Homes Different
            </h2>

            <div className="w-24 h-[2px] bg-[#B8934A] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 md:gap-y-16 gap-y-6 md:gap-x-14 lg:gap-x-20 mt-5 md:mt-20">
            {/* Card 1 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Residential/residentialTOne.png"
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
                Modern Architecture
              </h3>

              <p
                className="
              text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                Elegant and modern residential designs built to match your
                lifestyle and future needs.
              </p>
            </div>

            {/* Card 2 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Residential/residentialTTwo.png"
                  alt="Eco Friendly"
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
                Strong Construction Quality
              </h3>

              <p
                className="
             text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                Every project is built with attention to detail, quality
                workmanship, and durable construction standards.
              </p>
            </div>

            {/* Card 3 */}
            <div className="text-center md:text-left">
              <div className="flex justify-center md:justify-start mb-7">
                <Image
                  src="/Residential/residentialTThree.png"
                  alt="Modern Amenities"
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
                Complete Transparency
              </h3>

              <p
                className="
              text-lg
              leading-[1.3]
              text-[#444]
              text-justify
            "
              >
                We communicate at every stage from planning and budgeting
                through to execution and delivery.
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
              className="btn-primary  sm:w-auto inline-block text-center"
            >
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-10 lg:py-24 bg-[#B8934A]/5 border-y border-[#B8934A]/15 relative overflow-hidden">
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
