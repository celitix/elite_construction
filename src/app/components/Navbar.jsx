// 'use client'
// import { useState, useEffect } from 'react'
// import Link from 'next/link'
// import { usePathname } from 'next/navigation'
// import Image from 'next/image'

// export function LogoSVG({ size = 48 }) {
//   return (
//     <svg width={size} height={size} viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg">
//       <rect width="285" height="285" fill="#0A0A0A"/>
//       <path d="M72 160 L72 70 L55 70 L55 160" stroke="#B8934A" strokeWidth="10" fill="none"/>
//       <path d="M72 100 L55 100" stroke="#B8934A" strokeWidth="10"/>
//       <path d="M120 160 L120 40 L165 40 L165 160" stroke="#B8934A" strokeWidth="10" fill="none"/>
//       <path d="M185 160 L185 85 L215 85 L215 160" stroke="#B8934A" strokeWidth="10" fill="none"/>
//       <path d="M135 160 L135 55 L150 55 L150 160" fill="#B8934A"/>
//       <path d="M142.5 248 L58 168 L84 168 L84 148 L100 148 L100 168 L185 168 L185 148 L201 148 L201 168 L227 168 Z" fill="#B8934A"/>
//     </svg>
//   )
// }

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false)
//   const [menuOpen, setMenuOpen] = useState(false)
//   const pathname = usePathname()

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50)
//     window.addEventListener('scroll', onScroll)
//     return () => window.removeEventListener('scroll', onScroll)
//   }, [])

//   const navLinks = [
//     { href: '/', label: 'Home' },
//     { href: '/about', label: 'About' },
//     { href: '/service', label: 'Service' },
//     { href: '/projects', label: 'Projects' },
//     { href: '/contact', label: 'Contact' },
//   ]

//   return (
//     <>
//       <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 bg-white text-gray-900 ${
//         scrolled
//           ? ' py-3 bg-[#0A0A0A]/97 border-b border-gold/20 backdrop-blur-xl'
//           : 'py-5 bg-transparent'
//       }`}>
//         <div className="max-w-7xl mx-auto flex items-center justify-between">

//           {/* Logo */}
//           <Link href="/" className="flex items-center gap-3 no-underline">
//             <Image src="/ELITE-builcare-logo-black.png" alt="Logo" width={250} height={80} />
//           </Link>

//           {/* Desktop Nav */}
//           <div className="hidden md:flex items-center gap-10">
//             {navLinks.map(link => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`relative font-sans text-sm font-semibold tracking-[0.2em] uppercase pb-1 transition-colors duration-300 ${
//                   pathname === link.href ? 'text-[#B8934A]' : 'text-gray-900 hover:text-gray-900/70'
//                 }`}
//               >
//                 {link.label}
//                 {pathname === link.href && (
//                   <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B8934A]" />
//                 )}
//               </Link>
//             ))}
//             <Link href="/contact" className="btn-primary !py-3 !px-6 !text-[0.62rem]">
//               Free Consultation
//             </Link>
//           </div>

//           {/* Hamburger */}
//           <button
//             onClick={() => setMenuOpen(!menuOpen)}
//             className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
//             aria-label="Menu"
//           >
//             {[0, 1, 2].map(i => (
//               <span
//                 key={i}
//                 className="block w-6 h-[1.5px] bg-[#B8934A] transition-all duration-300"
//                 style={{
//                   opacity: menuOpen && i === 1 ? 0 : 1,
//                   transform: menuOpen
//                     ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
//                     : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
//                     : '' : '',
//                 }}
//               />
//             ))}
//           </button>
//         </div>
//       </nav>

//       {/* Mobile Menu */}
//       {menuOpen && (
//         <div className="fixed inset-0 z-40 bg-[#0A0A0A]/98 flex flex-col items-center justify-center gap-9">
//           {navLinks.map(link => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className={`font-display text-[2.2rem] font-semibold tracking-wide transition-colors ${
//                 pathname === link.href ? 'text-[#B8934A]' : 'text-white'
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}
//           <Link href="/contact" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>
//             Free Consultation
//           </Link>
//         </div>
//       )}
//     </>
//   )
// }

"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FaChevronDown, FaTimes } from "react-icons/fa";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [serviceOpen, setServiceOpen] = useState(false);
  const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

  const pathname = usePathname();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);

    window.addEventListener("scroll", onScroll);

    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Prevent body scroll when mobile menu open
  useEffect(() => {
    if (menuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [menuOpen]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/projects", label: "Projects" },
  ];

  const services = [
    { label: "Residential", href: "/residential" },
    { label: "Commercial", href: "/commercial" },
    { label: "Renovation", href: "/renovation" },
    { label: "Interior Design", href: "/interior-design" },
    { label: "Consultation", href: "/consultation" },
  ];

  return (
    <>
      {/* NAVBAR */}
      <nav
        className={`sticky top-0 z-50 w-full transition-all duration-300 ${
          scrolled ? "bg-white shadow-md py-3" : "bg-white py-5"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/ELITE-builcare-logo-black.png"
              alt="Logo"
              width={220}
              height={70}
              className="w-[170px] sm:w-[210px] h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden lg:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative text-[13px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
                  pathname === link.href
                    ? "text-[#B8934A]"
                    : "text-black hover:text-[#B8934A]"
                }`}
              >
                {link.label}
              </Link>
            ))}

            {/* SERVICES DROPDOWN */}
            <div
              className="relative"
              onMouseEnter={() => setServiceOpen(true)}
              onMouseLeave={() => setServiceOpen(false)}
            >
              <Link
                href="/service"
                className={`flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
                  pathname === "/services"
                    ? "text-[#B8934A]"
                    : "text-black hover:text-[#B8934A]"
                }`}
              >
                Services
                <FaChevronDown
                  className={`text-[12px] transition-transform duration-300 ${
                    serviceOpen ? "rotate-180" : ""
                  }`}
                />
              </Link>

              {/* DROPDOWN */}
              <div
                className={`absolute left-0 top-full mt-5 w-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-300 origin-top ${
                  serviceOpen
                    ? "opacity-100 visible translate-y-0"
                    : "opacity-0 invisible -translate-y-3"
                }`}
              >
                {services.map((service) => (
                  <Link
                    key={service.href}
                    href={service.href}
                    className="block px-6 py-4 text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-[#B8934A] hover:text-white transition-all duration-300"
                  >
                    {service.label}
                  </Link>
                ))}
              </div>
            </div>

            {/* CONTACT */}
            <Link
              href="/contact"
              className={`relative text-[13px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
                pathname === "/contact"
                  ? "text-[#B8934A]"
                  : "text-black hover:text-[#B8934A]"
              }`}
            >
              Contact
            </Link>

            {/* BUTTON */}
            <Link
              href="/contact"
              className="btn-primary !py-3 !px-6 !text-[0.62rem]"
            >
              Free Consultation
            </Link>
          </div>

          {/* MOBILE TOGGLE */}
          <button
            onClick={() => setMenuOpen(true)}
            className="lg:hidden flex flex-col gap-[5px]"
          >
            <span className="w-7 h-[2px] bg-[#B8934A]"></span>
            <span className="w-7 h-[2px] bg-[#B8934A]"></span>
            <span className="w-7 h-[2px] bg-[#B8934A]"></span>
          </button>
        </div>
      </nav>

      {/* OVERLAY */}
      <div
        onClick={() => setMenuOpen(false)}
        className={`fixed inset-0 bg-black/50 z-[98] transition-opacity duration-300 lg:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      />

      {/* MOBILE SIDEBAR */}
      <div
        className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[420px] bg-white z-[99] transition-transform duration-500 ease-in-out lg:hidden shadow-2xl ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* HEADER */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <Image
            src="/ELITE-builcare-logo-black.png"
            alt="Logo"
            width={160}
            height={60}
          />

          <button onClick={() => setMenuOpen(false)}>
            <FaTimes className="text-2xl text-[#B8934A]" />
          </button>
        </div>

        {/* MENU */}
        <div className="flex flex-col p-6">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`py-4 border-b border-gray-100 text-[15px] font-semibold uppercase tracking-[0.12em] ${
                pathname === link.href ? "text-[#B8934A]" : "text-black"
              }`}
            >
              {link.label}
            </Link>
          ))}

          {/* MOBILE SERVICES */}
          <div className="border-b border-gray-100">

  <div className="w-full flex items-center justify-between py-4">

    <Link
      href="/service"
      className="text-[15px] text-black font-semibold uppercase tracking-[0.12em]"
      onClick={() => setMenuOpen(false)}
    >
      Services
    </Link>

    <button
      onClick={() => setMobileServiceOpen(!mobileServiceOpen)}
    >
      <FaChevronDown
        className={`transition-transform duration-300 ${
          mobileServiceOpen ? "rotate-180" : ""
        }`}
      />
    </button>

  </div>

  {/* DROPDOWN */}
  <div
    className={`overflow-hidden transition-all duration-500 ${
      mobileServiceOpen
        ? "max-h-[500px] pb-4"
        : "max-h-0"
    }`}
  >
    {services.map((service) => (
      <Link
        key={service.href}
        href={service.href}
        onClick={() => setMenuOpen(false)}
        className="block pl-4 py-3 text-sm text-gray-600 hover:text-[#B8934A] transition"
      >
        {service.label}
      </Link>
    ))}
  </div>

</div>

          {/* CONTACT */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className={`py-4 border-b border-gray-100 text-[15px] font-semibold uppercase tracking-[0.12em] ${
              pathname === "/contact" ? "text-[#B8934A]" : "text-black"
            }`}
          >
            Contact
          </Link>

          {/* BUTTON */}
          <Link
            href="/contact"
            onClick={() => setMenuOpen(false)}
            className="mt-8 bg-[#B8934A] hover:bg-[#a8853f] text-white text-center text-sm uppercase tracking-[0.15em] font-semibold px-6 py-4 rounded-full transition-all duration-300"
          >
            Free Consultation
          </Link>
        </div>
      </div>
    </>
  );
}

// "use client";

// import { useState, useEffect } from "react";
// import Link from "next/link";
// import { usePathname } from "next/navigation";
// import Image from "next/image";
// import { FaChevronDown, FaTimes } from "react-icons/fa";

// export default function Navbar() {
//   const [scrolled, setScrolled] = useState(false);
//   const [menuOpen, setMenuOpen] = useState(false);
//   const [serviceOpen, setServiceOpen] = useState(false);
//   const [mobileServiceOpen, setMobileServiceOpen] = useState(false);

//   const pathname = usePathname();

//   useEffect(() => {
//     const onScroll = () => setScrolled(window.scrollY > 50);

//     window.addEventListener("scroll", onScroll);

//     return () => window.removeEventListener("scroll", onScroll);
//   }, []);

//   // LOCK BODY SCROLL
//   useEffect(() => {
//     if (menuOpen) {
//       document.body.style.overflow = "hidden";
//     } else {
//       document.body.style.overflow = "auto";
//     }
//   }, [menuOpen]);

//   const navLinks = [
//     { href: "/", label: "Home" },
//     { href: "/about", label: "About" },
//     { href: "/projects", label: "Projects" },
//   ];

//   const services = [
//     { label: "Residential", href: "/residential" },
//     { label: "Commercial", href: "/commercial" },
//     { label: "Renovation", href: "/renovation" },
//     { label: "Interior Design", href: "/interior-design" },
//     { label: "Consultation", href: "/consultation" },
//   ];

//   return (
//     <>
//       {/* NAVBAR */}
//       <nav
//         className={`sticky top-0 z-50 w-full transition-all duration-300 ${
//           scrolled
//             ? "bg-white shadow-md py-3"
//             : "bg-white py-5"
//         }`}
//       >
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">

//           {/* LOGO */}
//           <Link href="/" className="flex items-center">
//             <Image
//               src="/ELITE-builcare-logo-black.png"
//               alt="Logo"
//               width={220}
//               height={70}
//               className="w-[170px] sm:w-[210px] h-auto"
//             />
//           </Link>

//           {/* DESKTOP MENU */}
//           <div className="hidden lg:flex items-center gap-10">

//             {/* NAV LINKS */}
//             {navLinks.map((link) => (
//               <Link
//                 key={link.href}
//                 href={link.href}
//                 className={`relative group text-[13px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
//                   pathname === link.href
//                     ? "text-[#B8934A]"
//                     : "text-black hover:text-[#B8934A]"
//                 }`}
//               >
//                 {link.label}

//                 {/* SMOOTH BOTTOM EFFECT */}
//                 <span
//                   className={`
//                     absolute left-1/2 -translate-x-1/2 top-[28px]
//                     flex items-end gap-[3px]
//                     transition-all duration-500 ease-out
//                     ${
//                       pathname === link.href
//                         ? "opacity-100 translate-y-0"
//                         : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
//                     }
//                   `}
//                 >
//                   <span className="w-[2px] h-5 bg-black"></span>
//                   <span className="w-[2px] h-7 bg-black"></span>
//                   <span className="w-[2px] h-5 bg-black"></span>
//                 </span>
//               </Link>
//             ))}

//             {/* SERVICES DROPDOWN */}
//             <div
//               className="relative"
//               onMouseEnter={() => setServiceOpen(true)}
//               onMouseLeave={() => setServiceOpen(false)}
//             >

//               {/* SERVICES BUTTON */}
//               <button
//                 className={`relative group flex items-center gap-2 text-[13px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
//                   pathname.includes("/services")
//                     ? "text-[#B8934A]"
//                     : "text-black hover:text-[#B8934A]"
//                 }`}
//               >
//                 Services

//                 <FaChevronDown
//                   className={`text-[12px] transition-transform duration-500 ${
//                     serviceOpen ? "rotate-180" : ""
//                   }`}
//                 />

//                 {/* SMOOTH BOTTOM EFFECT */}
//                 <span
//                   className={`
//                     absolute left-1/2 -translate-x-1/2 top-[38px]
//                     flex items-end gap-[3px]
//                     transition-all duration-500 ease-out
//                     ${
//                       pathname.includes("/services")
//                         ? "opacity-100 translate-y-0"
//                         : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
//                     }
//                   `}
//                 >
//                   <span className="w-[2px] h-5 bg-black"></span>
//                   <span className="w-[2px] h-7 bg-black"></span>
//                   <span className="w-[2px] h-5 bg-black"></span>
//                 </span>
//               </button>

//               {/* DROPDOWN */}
//               <div
//                 className={`absolute left-0 top-full mt-5 w-[280px] bg-white rounded-2xl shadow-2xl overflow-hidden transform transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] origin-top ${
//                   serviceOpen
//                     ? "opacity-100 visible translate-y-0 scale-y-100"
//                     : "opacity-0 invisible -translate-y-5 scale-y-95"
//                 }`}
//               >
//                 {services.map((service) => (
//                   <Link
//                     key={service.href}
//                     href={service.href}
//                     className="block px-6 py-4 text-sm font-medium text-gray-700 border-b border-gray-100 hover:bg-[#B8934A] hover:text-white transition-all duration-300"
//                   >
//                     {service.label}
//                   </Link>
//                 ))}
//               </div>
//             </div>

//             {/* CONTACT */}
//             <Link
//               href="/contact"
//               className={`relative group text-[13px] font-semibold uppercase tracking-[0.18em] transition duration-300 ${
//                 pathname === "/contact"
//                   ? "text-[#B8934A]"
//                   : "text-black hover:text-[#B8934A]"
//               }`}
//             >
//               Contact

//               {/* SMOOTH BOTTOM EFFECT */}
//               <span
//                 className={`
//                   absolute left-1/2 -translate-x-1/2 top-[38px]
//                   flex items-end gap-[3px]
//                   transition-all duration-500 ease-out
//                   ${
//                     pathname === "/contact"
//                       ? "opacity-100 translate-y-0"
//                       : "opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0"
//                   }
//                 `}
//               >
//                 <span className="w-[2px] h-5 bg-black"></span>
//                 <span className="w-[2px] h-7 bg-black"></span>
//                 <span className="w-[2px] h-5 bg-black"></span>
//               </span>
//             </Link>

//             {/* BUTTON */}
//             <Link
//               href="/contact"
//               className="bg-[#B8934A] hover:bg-[#a8853f] text-white text-[11px] uppercase tracking-[0.18em] font-semibold px-7 py-3 rounded-full transition-all duration-300"
//             >
//               Free Consultation
//             </Link>
//           </div>

//           {/* MOBILE TOGGLE */}
//           <button
//             onClick={() => setMenuOpen(true)}
//             className="lg:hidden flex flex-col gap-[5px]"
//           >
//             <span className="w-7 h-[2px] bg-[#B8934A]"></span>
//             <span className="w-7 h-[2px] bg-[#B8934A]"></span>
//             <span className="w-7 h-[2px] bg-[#B8934A]"></span>
//           </button>
//         </div>
//       </nav>

//       {/* OVERLAY */}
//       <div
//         onClick={() => setMenuOpen(false)}
//         className={`fixed inset-0 bg-black/50 z-[98] transition-opacity duration-500 lg:hidden ${
//           menuOpen
//             ? "opacity-100 visible"
//             : "opacity-0 invisible"
//         }`}
//       />

//       {/* MOBILE SIDEBAR */}
//       <div
//         className={`fixed top-0 right-0 h-screen w-[85%] sm:w-[420px] bg-white z-[99] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] lg:hidden shadow-2xl ${
//           menuOpen
//             ? "translate-x-0"
//             : "translate-x-full"
//         }`}
//       >

//         {/* HEADER */}
//         <div className="flex items-center justify-between p-6 border-b border-gray-200">

//           <Image
//             src="/ELITE-builcare-logo-black.png"
//             alt="Logo"
//             width={160}
//             height={60}
//           />

//           <button onClick={() => setMenuOpen(false)}>
//             <FaTimes className="text-2xl text-[#B8934A]" />
//           </button>
//         </div>

//         {/* MOBILE MENU */}
//         <div className="flex flex-col p-6">

//           {/* NAV LINKS */}
//           {navLinks.map((link) => (
//             <Link
//               key={link.href}
//               href={link.href}
//               onClick={() => setMenuOpen(false)}
//               className={`py-4 border-b border-gray-100 text-[15px] font-semibold uppercase tracking-[0.12em] ${
//                 pathname === link.href
//                   ? "text-[#B8934A]"
//                   : "text-black"
//               }`}
//             >
//               {link.label}
//             </Link>
//           ))}

//           {/* MOBILE SERVICES */}
//           <div className="border-b border-gray-100">

//             <button
//               onClick={() =>
//                 setMobileServiceOpen(!mobileServiceOpen)
//               }
//               className="w-full flex items-center justify-between py-4 text-[15px] font-semibold uppercase tracking-[0.12em]"
//             >
//               Services

//               <FaChevronDown
//                 className={`transition-transform duration-500 ${
//                   mobileServiceOpen ? "rotate-180" : ""
//                 }`}
//               />
//             </button>

//             {/* MOBILE DROPDOWN */}
//             <div
//               className={`overflow-hidden transition-all duration-500 ease-in-out ${
//                 mobileServiceOpen
//                   ? "max-h-[500px] opacity-100"
//                   : "max-h-0 opacity-0"
//               }`}
//             >
//               <div className="pb-4">

//                 {services.map((service) => (
//                   <Link
//                     key={service.href}
//                     href={service.href}
//                     onClick={() => setMenuOpen(false)}
//                     className="block pl-4 py-3 text-sm text-gray-600 hover:text-[#B8934A] transition"
//                   >
//                     {service.label}
//                   </Link>
//                 ))}

//               </div>
//             </div>
//           </div>

//           {/* CONTACT */}
//           <Link
//             href="/contact"
//             onClick={() => setMenuOpen(false)}
//             className={`py-4 border-b border-gray-100 text-[15px] font-semibold uppercase tracking-[0.12em] ${
//               pathname === "/contact"
//                 ? "text-[#B8934A]"
//                 : "text-black"
//             }`}
//           >
//             Contact
//           </Link>

//           {/* BUTTON */}
//           <Link
//             href="/contact"
//             onClick={() => setMenuOpen(false)}
//             className="mt-8 bg-[#B8934A] hover:bg-[#a8853f] text-white text-center text-sm uppercase tracking-[0.15em] font-semibold px-6 py-4 rounded-full transition-all duration-300"
//           >
//             Free Consultation
//           </Link>
//         </div>
//       </div>
//     </>
//   );
// }
