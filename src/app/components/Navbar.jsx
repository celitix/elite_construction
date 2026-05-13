'use client'
import { useState, useEffect } from 'react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import Image from 'next/image'

export function LogoSVG({ size = 48 }) {
  return (
    <svg width={size} height={size} viewBox="0 0 285 285" fill="none" xmlns="http://www.w3.org/2000/svg">
      <rect width="285" height="285" fill="#0A0A0A"/>
      <path d="M72 160 L72 70 L55 70 L55 160" stroke="#B8934A" strokeWidth="10" fill="none"/>
      <path d="M72 100 L55 100" stroke="#B8934A" strokeWidth="10"/>
      <path d="M120 160 L120 40 L165 40 L165 160" stroke="#B8934A" strokeWidth="10" fill="none"/>
      <path d="M185 160 L185 85 L215 85 L215 160" stroke="#B8934A" strokeWidth="10" fill="none"/>
      <path d="M135 160 L135 55 L150 55 L150 160" fill="#B8934A"/>
      <path d="M142.5 248 L58 168 L84 168 L84 148 L100 148 L100 168 L185 168 L185 148 L201 148 L201 168 L227 168 Z" fill="#B8934A"/>
    </svg>
  )
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [menuOpen, setMenuOpen] = useState(false)
  const pathname = usePathname()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const navLinks = [
    { href: '/', label: 'Home' },
    { href: '/about', label: 'About' },
    { href: '/service', label: 'Service' },
    { href: '/projects', label: 'Projects' },
    { href: '/contact', label: 'Contact' },
  ]

  return (
    <>
      <nav className={`sticky top-0 left-0 right-0 z-50 transition-all duration-400 bg-white text-gray-900 ${
        scrolled
          ? ' py-3 bg-[#0A0A0A]/97 border-b border-gold/20 backdrop-blur-xl'
          : 'py-5 bg-transparent'
      }`}>
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 no-underline">
            <Image src="/ELITE-builcare-logo-black.png" alt="Logo" width={250} height={80} />
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center gap-10">
            {navLinks.map(link => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative font-sans text-sm font-semibold tracking-[0.2em] uppercase pb-1 transition-colors duration-300 ${
                  pathname === link.href ? 'text-[#B8934A]' : 'text-gray-900 hover:text-gray-900/70'
                }`}
              >
                {link.label}
                {pathname === link.href && (
                  <span className="absolute bottom-0 left-0 right-0 h-px bg-[#B8934A]" />
                )}
              </Link>
            ))}
            <Link href="/contact" className="btn-primary !py-3 !px-6 !text-[0.62rem]">
              Free Consultation
            </Link>
          </div>

          {/* Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden flex flex-col gap-1.5 p-2 bg-transparent border-none cursor-pointer"
            aria-label="Menu"
          >
            {[0, 1, 2].map(i => (
              <span
                key={i}
                className="block w-6 h-[1.5px] bg-[#B8934A] transition-all duration-300"
                style={{
                  opacity: menuOpen && i === 1 ? 0 : 1,
                  transform: menuOpen
                    ? i === 0 ? 'rotate(45deg) translate(5px,5px)'
                    : i === 2 ? 'rotate(-45deg) translate(5px,-5px)'
                    : '' : '',
                }}
              />
            ))}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="fixed inset-0 z-40 bg-[#0A0A0A]/98 flex flex-col items-center justify-center gap-9">
          {navLinks.map(link => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMenuOpen(false)}
              className={`font-display text-[2.2rem] font-semibold tracking-wide transition-colors ${
                pathname === link.href ? 'text-[#B8934A]' : 'text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <Link href="/contact" className="btn-primary mt-4" onClick={() => setMenuOpen(false)}>
            Free Consultation
          </Link>
        </div>
      )}
    </>
  )
}
