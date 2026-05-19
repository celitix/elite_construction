"use client";
import { useState } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import {
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlineMail,
  HiOutlineClock,
} from "react-icons/hi";

const contactItems = [
  {
    icon: <HiOutlineLocationMarker className="text-[#B8934A] text-3xl" />,
    title: "Office Address",
    val: "12-B, Malviya Nagar Jaipur, Rajasthan 302017",
  },
  {
    icon: <HiOutlinePhone className="text-[#B8934A] text-3xl" />,
    title: "Phone Number",
    val: "+91 98765 43210, +91 98765 09990",
  },
  {
    icon: <HiOutlineMail className="text-[#B8934A] text-3xl" />,
    title: "Email Address",
    val: "info@eliteinfra.in, support@eliteinfra.in",
  },
  {
    icon: <HiOutlineClock className="text-[#B8934A] text-3xl" />,
    title: "Working Hours",
    val: "Monday – Saturday\n9:00 AM – 7:00 PM",
  },
];

const services = [
  "Residential Construction",
  "Commercial Construction",
  "Renovation & Remodeling",
  "Interior Design",
  "Architecture & Planning",
  "Turnkey Solution",
  "Other",
];

export default function ContactPage() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });
  const [sent, setSent] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) =>
    setForm((f) => ({ ...f, [e.target.name]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
      setSent(true);
    }, 1800);
  };

  return (
    <>
      {/* HERO */}
      <section className="min-h-[20vh] flex items-end relative overflow-hidden pb-12 lg:pb-20">
        {/* Background */}
        <div className="absolute inset-0 bg-white" />
        <div className="absolute inset-0 grid-bg opacity-60" />

        {/* Watermark Text */}
        <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 font-display text-[22vw] sm:text-[15vw] font-bold text-[#B8934A]/20 leading-none whitespace-nowrap pointer-events-none select-none px-10">
          CONTACT US
        </div>

        {/* Content */}
        <div className="max-w-7xl mx-auto w-full px-4 sm:px-6 lg:px-10 relative z-10 pt-24 sm:pt-28">
          <div className="section-tag text-xs sm:text-sm">Get In Touch</div>

          <h1 className="font-display text-[clamp(2.3rem,7vw,5.5rem)] font-semibold text-gray-900 leading-tight">
            Let's <span className="text-[#B8934A] italic">Connect</span>
          </h1>
        </div>
      </section>

      {/* MAIN */}
      <section className="py-16 sm:py-20 lg:py-24 pb-20 sm:pb-24 lg:pb-28 bg-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(184,147,74,0.07)_0%,transparent_35%),radial-gradient(circle_at_bottom_left,rgba(184,147,74,0.05)_0%,transparent_30%)]" />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_1.6fr] gap-10 sm:gap-14 lg:gap-20 items-start">
            {/* LEFT INFO */}
            <div>
              <div className="section-tag text-xs sm:text-sm">Contact Info</div>

              <h2 className="font-display text-[clamp(2rem,5vw,3rem)] text-gray-900 mb-3 leading-tight">
                Visit Our Office or
                <br />
                <span className="text-[#B8934A] italic">Drop Us a Message</span>
              </h2>

              <p className="text-sm sm:text-base text-gray-600 leading-7 sm:leading-8 mb-5 max-w-md">
                Our team of experts is ready to guide you through every step of
                your construction journey.
              </p>

              {/* Contact Cards */}
              <div className="space-y-5">
                {contactItems.map(({ icon, title, val }) => (
                  <div
                    key={title}
                    className="group flex gap-4 items-start p-4 rounded-2xl bg-white border border-gray-200 hover:border-[#B8934A]/40 hover:shadow-xl transition-all duration-300"
                  >
                    <div className="w-12 h-12 rounded-xl bg-[#B8934A]/10 border border-[#B8934A]/25 flex items-center justify-center text-xl shrink-0 group-hover:scale-110 transition">
                      {icon}
                    </div>

                    <div>
                      <div className="text-[10px] sm:text-[11px] font-bold tracking-[0.18em] uppercase text-[#B8934A] mb-1">
                        {title}
                      </div>

                      {val.split("\n").map((line) => (
                        <div
                          key={line}
                          className="text-sm text-gray-600 leading-6"
                        >
                          {line}
                        </div>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* RIGHT FORM */}
            <div className="relative">
              {/* Glow */}
              <div className="absolute -inset-2 bg-[#B8934A]/10 blur-2xl rounded-3xl" />

              <div className="relative bg-white border border-gray-200 rounded-3xl p-6 sm:p-8 lg:p-10 shadow-2xl">
                {sent ? (
                  <div className="text-center py-10 sm:py-16">
                    <div className="text-5xl mb-5">✅</div>

                    <h3 className="font-display text-3xl sm:text-[2rem] text-gray-900 mb-3">
                      Message Sent!
                    </h3>

                    <p className="text-sm sm:text-base text-gray-600 mb-8">
                      Thank you for reaching out. Our team will contact you
                      within 24 hours.
                    </p>

                    <button
                      onClick={() => {
                        setSent(false);
                        setForm({
                          name: "",
                          email: "",
                          phone: "",
                          service: "",
                          message: "",
                        });
                      }}
                      className="btn-outline w-full sm:w-auto"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h3 className="font-display text-2xl sm:text-[1.8rem] text-gray-900 mb-2">
                      Book Free Consultation
                    </h3>

                    <p className="text-sm text-gray-500 mb-8 sm:mb-10">
                      Fill out the form and we'll get back to you within 24
                      hours.
                    </p>

                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                        <div>
                          <label className="block text-sm font-bold tracking-[0.2em] uppercase text-[#B8934A] mb-2">
                            Full Name *
                          </label>
                          <input
                            name="name"
                            value={form.name}
                            onChange={handleChange}
                            required
                            placeholder="Your Name"
                            className="input-field text-gray-700 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B8934A]"
                          />
                        </div>

                        <div>
                          <label className="block text-sm font-bold tracking-[0.2em] uppercase text-[#B8934A] mb-2">
                            Phone Number *
                          </label>
                          <input
                            name="phone"
                            value={form.phone}
                            onChange={handleChange}
                            required
                            placeholder="+91 00000 00000"
                            className="input-field text-gray-700 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B8934A]"
                          />
                        </div>
                      </div>

                      <div>
                        <label className="block text-sm font-bold tracking-[0.2em] uppercase text-[#B8934A] mb-2">
                          Email Address *
                        </label>
                        <input
                          name="email"
                          type="email"
                          value={form.email}
                          onChange={handleChange}
                          required
                          placeholder="you@example.com"
                          className="input-field text-gray-700 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B8934A]"
                        />
                      </div>

                      <div>
                        <label className="block text-sm font-bold tracking-[0.2em] uppercase text-[#B8934A] mb-2">
                          Service Required
                        </label>
                        <select
                          name="service"
                          value={form.service}
                          onChange={handleChange}
                          className="input-field appearance-none cursor-pointer text-gray-700 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B8934A]"
                          placeholder="Select a service..."
                        >
                          <option value="" disabled>
                            Select a service...
                          </option>

                          {services.map((s) => (
                            <option key={s} value={s}>
                              {s}
                            </option>
                          ))}
                        </select>
                      </div>

                      <div>
                        <label className="block text-sm font-bold tracking-[0.2em] uppercase text-[#B8934A] mb-2">
                          Your Message
                        </label>

                        <textarea
                          name="message"
                          value={form.message}
                          onChange={handleChange}
                          rows={3}
                          placeholder="Tell us about your project requirements, budget, timeline..."
                          className="input-field resize-y w-full text-gray-700 w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-[#B8934A]"
                        />
                      </div>

                      <button
                        type="submit"
                        className="btn-primary w-full justify-center text-sm py-4 disabled:opacity-60"
                        disabled={loading}
                      >
                        {loading ? "Sending..." : "Send Message →"}
                      </button>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MAP */}
      <div className="h-[340px] sm:h-96 bg-[#B8934A]/5 text-gray-900 flex items-center justify-center border-t border-[#B8934A]/10 relative overflow-hidden">
        {/* Grid Pattern */}
        <div className="absolute inset-0 grid-bg-dense opacity-50" />

        {/* Gold Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-72 sm:w-96 h-72 sm:h-96 rounded-full bg-[radial-gradient(circle,rgba(184,147,74,0.12)_0%,transparent_70%)]" />

        {/* Decorative Ring */}
        <div className="absolute w-56 sm:w-72 h-56 sm:h-72 rounded-full border border-[#B8934A]/10 animate-pulse" />

        {/* Content */}
        <div className="relative z-10 text-center px-4 sm:px-6 max-w-xl">
          {/* Icon */}
          <div className="w-16 h-16 sm:w-20 sm:h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-[#B8934A]/20 to-[#B8934A]/5 border border-[#B8934A]/30 flex items-center justify-center shadow-lg group hover:scale-110 transition duration-500">
            <HiOutlineLocationMarker className="text-[#B8934A] text-3xl sm:text-4xl group-hover:-translate-y-1 transition duration-500" />
          </div>

          {/* Title */}
          <p className="font-display text-2xl sm:text-3xl text-[#B8934A] mb-2">
            Elite Infra Office
          </p>

          {/* Address */}
          <p className="text-sm sm:text-base  mt-1 leading-7">
            12-B, Malviya Nagar, Jaipur, Rajasthan
          </p>

          {/* Button */}
          <a
            href="https://maps.google.com"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center mt-6 px-8 py-4 border border-[#B8934A]/40 text-sm font-semibold tracking-wide rounded-full hover:bg-[#B8934A] hover:text-black transition-all duration-300 shadow-lg"
          >
            Open in Maps →
          </a>
        </div>
      </div>
    </>
  );
}
