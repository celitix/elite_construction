import Link from "next/link";

export const metadata = { title: "About Us | Elite Infra" };

const value = [
  {
    image: "/Excellence.png",
    title: "Excellence",
    desc: "in Service",
  },
  {
    image: "Precision.png",
    title: "Precision",
    desc: "An Engineer’s Approach",
  },
  {
    image: "Punctuality.png",
    title: "Punctuality",
    desc: "On-Time, Start to Finish",
  },
  {
    image: "/Professionalism.png",
    title: "Professionalism",
    desc: "Practices That Ensure Success",
  },
  {
    image: "/Trust.png",
    title: "Trust",
    desc: "Integrity + Transparency",
  },
];

const team = [
  { name: "Rajesh Sharma", role: "Founder & CEO", exp: "20+ years" },
  { name: "Priya Agarwal", role: "Chief Architect", exp: "15+ years" },
  { name: "Vikram Singh", role: "Head of Construction", exp: "18+ years" },
  { name: "Anita Meena", role: "Interior Design Lead", exp: "12+ years" },
];

const milestones = [
  { year: "2010", event: "Elite Infra founded in Jaipur with a team of 10" },
  { year: "2013", event: "Completed our 100th residential project" },
  { year: "2016", event: "Expanded to commercial construction segment" },
  { year: "2019", event: "Won Rajasthan Best Builder Award" },
  { year: "2022", event: "500+ projects milestone achieved" },
  { year: "2025", event: "Launched luxury villa segment across Rajasthan" },
];

const values = [
  {
    icon: "🏆",
    title: "Quality First",
    desc: "We use only premium materials and follow international construction standards on every project.",
  },
  {
    icon: "🤝",
    title: "Client Trust",
    desc: "Transparent communication and honest pricing have earned us 2000+ satisfied clients.",
  },
  {
    icon: "⚡",
    title: "Timely Delivery",
    desc: "Our project management ensures on-time delivery with zero compromise on quality.",
  },
  {
    icon: "🌱",
    title: "Sustainability",
    desc: "Eco-friendly construction practices that protect the environment for future generations.",
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

export default function AboutPage() {
  return (
    <>
      {/* HERO */}
      <section className="min-h-[20vh] flex items-end relative overflow-hidden pb-12 lg:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-white text-gray-900" />
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Large Watermark Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0 font-display text-[28vw] sm:text-[15vw] font-bold text-[#B8934A]/20 leading-none whitespace-nowrap pointer-events-none select-none">
          ABOUT
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 relative z-10 pt-24 sm:pt-28">
          <div className="section-tag text-xs sm:text-sm">Our Story</div>

          <h1 className="font-display text-[clamp(2.2rem,7vw,5.5rem)] font-semibold text-gray-900 leading-tight max-w-4xl">
            Elite Construction
          </h1>
        </div>
      </section>

      {/* MISSION */}
      <section className="py-10 lg:py-16 bg-white text-gray-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 sm:gap-14 lg:gap-20 items-center">
            <div className="relative order-1">
              <div className="absolute -inset-3 sm:-inset-4 bg-[#B8934A]/10 rounded-2xl rotate-2" />

              <img
                src="https://images.unsplash.com/photo-1486325212027-8081e485255e?w=700&q=80"
                alt="Building"
                className="relative z-10 w-full h-[280px] sm:h-[420px] lg:h-[520px] object-cover rounded-2xl shadow-xl"
              />
            </div>

            <div className="order-2">
              <div className="section-tag text-xs sm:text-sm">Who We Are</div>

              <h2 className="font-display text-[clamp(1.8rem,5vw,3rem)] mb-5 font-bold text-gray-900 leading-tight">
                Trusted Construction & 
                <br />
                <span className="text-[#B8934A]">
                  Design Experts
                </span>
              </h2>

              <p className="text-sm sm:text-[0.95rem] text-gray-600 text-justify leading-6">
                Elite Construction is an expert turn-key construction & design
                company based in Jaipur. Committed to delivering sustainable
                solutions, our service focuses on quality, excellence &
                assurance.
              </p>

              <p className="text-sm sm:text-[0.95rem] text-gray-600 text-justify leading-6">
                Our 20 years of experience allow us to deliver high-quality
                results, whether you are constructing a dream home, commercial
                space, garden or industry.
              </p>
              <p className="text-sm sm:text-[0.95rem] text-gray-600 leading-6 text-justify mb-5">
                We are the multi-disciplinary firm in Jaipur offering such a
                comprehensive & reliable package of end-to-end services.
                Future-proof your construction project, Consult our expert
                engineers with decades of combined experience.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 sm:gap-6 mb-6">
                {[
                  [
                    "Our Mission",
                    "To deliver exceptional construction that stands the test of time.",
                  ],
                  [
                    "Our Vision",
                    "To be India's most trusted real estate partner by 2030.",
                  ],
                ].map(([t, d]) => (
                  <div
                    key={t}
                    className="p-5 sm:p-6 border border-[#B8934A]/20 bg-[#B8934A]/5 rounded-xl hover:shadow-lg transition"
                  >
                    <div className="text-[#B8934A] text-[11px] sm:text-[0.62rem] font-bold tracking-[0.2em] uppercase mb-2.5">
                      {t}
                    </div>

                    <p className="text-sm text-gray-600 leading-6">{d}</p>
                  </div>
                ))}
              </div>

              <Link
                href="/contact"
                className="btn-primary w-full sm:w-auto text-center inline-block"
              >
                Talk to Our Team
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="w-full bg-gradient-to-b from-[#fafafa] via-white to-[#f8f8f8] py-16 px-6 md:px-16 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          {/* Heading */}
          <div className="text-center mb-10 md:mb-20">
            <p className="text-[#B8934A] uppercase tracking-[5px] font-semibold mb-3 text-sm">
              What We Believe
            </p>

            <h2 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
              Our <span className="text-[#B8934A]">Values</span>
            </h2>

            <div className="w-24 h-[2px] bg-[#B8934A] mx-auto mt-5 rounded-full"></div>
          </div>

          {/* Values */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-y-16 gap-x-8">
            {value.map((item, index) => (
              <div
                key={index}
                className="group text-center relative px-3 transition duration-500 hover:-translate-y-2"
              >
                {/* Vertical Decorative Line */}
                <div className="hidden lg:block absolute -right-4 top-8 h-24 w-px bg-gradient-to-b from-transparent via-[#B8934A]/30 to-transparent last:hidden"></div>

                {/* Image Circle */}
                <div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <div className="absolute inset-0 rounded-full bg-[#B8934A]/10 group-hover:scale-125 transition duration-500"></div>

                  <div className="absolute inset-2 rounded-full border border-[#B8934A]/20 group-hover:rotate-12 transition duration-500"></div>

                  <img
                    src={item.image}
                    alt={item.title}
                    className="relative w-14 h-14 object-contain group-hover:scale-110 transition duration-500"
                  />
                </div>

                {/* Number */}
                <span className="text-xs tracking-[3px] text-[#B8934A] font-semibold">
                  0{index + 1}
                </span>

                {/* Title */}
                <h3 className="text-xl font-bold text-gray-900 mt-2 mb-2 group-hover:text-[#B8934A] transition">
                  {item.title}
                </h3>

                {/* Line */}
                <div className="w-10 h-[2px] bg-[#B8934A] mx-auto mb-4 group-hover:w-16 transition-all duration-500"></div>

                {/* Description */}
                <p className="text-gray-600 text-sm leading-7 max-w-[220px] mx-auto">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-10 lg:py-20 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute top-0 left-0 w-72 h-72 bg-[#B8934A]/10 blur-3xl rounded-full" />
        <div className="absolute bottom-0 right-0 w-72 h-72 bg-black/5 blur-3xl rounded-full" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Heading */}
          <div className="text-center mb-14 lg:mb-16">
            <div className="section-tag justify-center text-xs sm:text-sm">
              Core Values
            </div>

            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-gray-900 leading-tight">
              What Drives Us
            </h2>

            <p className="mt-4 text-gray-600 max-w-2xl mx-auto leading-7">
              The principles that inspire every design, decision and delivery we
              make.
            </p>
          </div>

          {/* Values Layout */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <div key={i} className="group text-center relative">
                {/* Icon Circle */}
                <div className="relative mx-auto w-20 h-20 rounded-full bg-[#B8934A]/10 border border-[#B8934A]/20 flex items-center justify-center text-4xl text-[#B8934A] group-hover:scale-110 group-hover:bg-[#B8934A] group-hover:text-white transition-all duration-500 shadow-lg">
                  {v.icon}
                </div>

                {/* Connector Line */}
                {i !== values.length - 1 && (
                  <div className="hidden lg:block absolute top-10 left-[60%] w-full h-[2px] bg-gradient-to-r from-[#B8934A]/40 to-transparent" />
                )}

                {/* Number */}
                <div className="mt-6 text-sm font-semibold tracking-[0.2em] text-[#B8934A]">
                  0{i + 1}
                </div>

                {/* Title */}
                <h3 className="font-display text-2xl text-gray-900 mt-3 mb-3 group-hover:text-[#B8934A] transition-colors duration-300">
                  {v.title}
                </h3>

                {/* Description */}
                <p className="text-sm text-gray-600 leading-7 max-w-xs mx-auto">
                  {v.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TEAM */}
      <section className="py-16 sm:py-20 lg:py-24 bg-gradient-to-b from-[#fafafa] via-white to-[#f8f8f8] relative overflow-hidden">
        {/* Background Glow */}
        <div className="absolute top-0 left-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          {/* Heading */}
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <div className="section-tag justify-center text-xs sm:text-sm">
              Meet the Experts
            </div>

            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-gray-900 leading-tight">
              Our Leadership
            </h2>
          </div>

          {/* Team Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 sm:gap-7">
            {team.map((t, i) => (
              <div
                key={i}
                className="group text-center bg-gray-50 border border-gray-200 rounded-2xl p-5 sm:p-6 hover:-translate-y-2 hover:shadow-2xl hover:border-[#B8934A]/40 transition-all duration-500"
              >
                {/* Image Box */}
                <div className="relative w-full aspect-square rounded-2xl bg-gradient-to-br from-[#f3f3f3] to-[#e5e5e5] mb-5 overflow-hidden">
                  {/* Avatar */}
                  <div className="absolute inset-0 flex items-center justify-center text-[3.5rem] sm:text-[4rem] group-hover:scale-110 transition duration-500">
                    👤
                  </div>

                  {/* Bottom Accent */}
                  <div className="absolute bottom-0 left-0 right-0 h-[3px] bg-gradient-to-r from-[#B8934A] to-[#D4A85A]" />
                </div>

                {/* Name */}
                <h3 className="font-display text-xl sm:text-2xl text-gray-900 mb-1.5 group-hover:text-[#B8934A] transition-colors duration-300">
                  {t.name}
                </h3>

                {/* Role */}
                <div className="text-[11px] sm:text-xs font-bold tracking-[0.15em] uppercase text-[#B8934A] mb-1">
                  {t.role}
                </div>

                {/* Experience */}
                <div className="text-sm text-gray-500">{t.exp} Experience</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="py-10 lg:py-20 bg-white text-gray-900 relative overflow-hidden">
        <div className="absolute top-0 right-0 w-64 sm:w-80 h-64 sm:h-80 rounded-full bg-[radial-gradient(circle,rgba(184,147,74,0.08)_0%,transparent_70%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="text-center mb-12 sm:mb-14 lg:mb-16">
            <div className="section-tag justify-center text-xs sm:text-sm">
              Our Journey
            </div>

            <h2 className="font-display text-[clamp(2rem,5vw,3.2rem)] font-bold text-gray-900 leading-tight">
              Milestones
            </h2>
          </div>

          <div className="relative max-w-[900px] mx-auto">
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-[#B8934A]/20 -translate-x-1/2" />

            <div className="md:hidden absolute left-4 top-0 bottom-0 w-px bg-[#B8934A]/20" />

            {milestones.map((m, i) => (
              <div
                key={i}
                className={`relative flex md:items-center gap-5 md:gap-10 mb-10 sm:mb-12 ${
                  i % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                <div
                  className={`flex-1 pl-12 md:pl-0 ${
                    i % 2 === 0 ? "md:text-right" : "md:text-left"
                  }`}
                >
                  <div className="font-display text-3xl sm:text-4xl font-bold text-[#B8934A] mb-2">
                    {m.year}
                  </div>

                  <p className="text-sm sm:text-base text-gray-600 leading-7 max-w-md">
                    {m.event}
                  </p>
                </div>

                <div className="absolute left-0 top-2 md:static w-4 h-4 rounded-full bg-[#B8934A] shrink-0 z-10 ring-4 ring-[#B8934A]/20" />

                <div className="hidden md:block flex-1" />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED PROJECTS ── */}
      <section className="py-10 lg:py-20 bg-white">
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
    </>
  );
}
