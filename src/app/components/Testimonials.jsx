"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

/* Sample testimonials — replace with real client reviews */
export const testimonials = [
  {
    quote:
      "From the first drawing to the day we got our keys, Elite handled everything. The site supervisor kept us updated daily and the house was delivered exactly on schedule.",
    name: "Rajesh Sharma",
    role: "Villa Owner, Vaishali Nagar",
    rating: 5,
  },
  {
    quote:
      "The live CCTV access gave us real peace of mind while we were living abroad. The finish quality on every floor is better than we imagined.",
    name: "Priya Mehta",
    role: "NRI Homeowner, Jagatpura",
    rating: 5,
  },
  {
    quote:
      "They built our showroom with zero compromise on structure or design, and stayed within budget. Our customers still compliment the space.",
    name: "Ankit Agarwal",
    role: "Director, Agarwal Textiles",
    rating: 5,
  },
  {
    quote:
      "Our 25-year-old home was renovated without any stress. Clear costing, clean work and a team that actually listens. Highly recommended.",
    name: "Sunita Gupta",
    role: "Renovation Client, Malviya Nagar",
    rating: 5,
  },
  {
    quote:
      "The interior team understood Vastu and our taste perfectly. The modular kitchen and bedrooms look straight out of a magazine.",
    name: "Vikram Singh Rathore",
    role: "Apartment Owner, C-Scheme",
    rating: 5,
  },
  {
    quote:
      "Transparent, professional and punctual. Elite delivered our office complex on time and the handover documentation was spotless.",
    name: "Neha Jain",
    role: "Partner, Jain & Associates",
    rating: 5,
  },
];

// Clones on each side; must be >= the most cards visible at once (3 on desktop)
const CLONES = 3;
const AUTOPLAY_MS = 4500;
const TRANSITION_MS = 700;
const SWIPE_THRESHOLD = 50;

function TestimonialCard({ item }) {
  return (
    <article className="group relative h-full flex flex-col bg-white border border-gray-200 rounded-3xl p-7 sm:p-8 overflow-hidden shadow-sm hover:shadow-2xl hover:border-[#B8934A]/40 hover:-translate-y-2 transition-all duration-500">
      {/* Corner Glow */}
      <div className="absolute -top-10 -right-10 w-28 h-28 bg-[#B8934A]/10 rounded-full blur-2xl group-hover:scale-125 transition duration-700" />

      {/* Top Line */}
      <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#B8934A] via-[#d2b06b] to-transparent scale-x-0 group-hover:scale-x-100 origin-left transition-transform duration-500" />

      {/* Quote Icon + Rating */}
      <div className="relative z-10 flex items-center justify-between mb-6">
        <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#B8934A]/15 to-[#B8934A]/5 border border-[#B8934A]/20 flex items-center justify-center group-hover:rotate-6 group-hover:scale-110 transition-all duration-500">
          <FaQuoteLeft className="text-[#B8934A] text-xl" />
        </div>

        <div
          className="flex gap-1"
          role="img"
          aria-label={`Rated ${item.rating} out of 5`}
        >
          {Array.from({ length: 5 }).map((_, i) => (
            <FaStar
              key={i}
              className={`text-sm ${
                i < item.rating ? "text-[#B8934A]" : "text-gray-200"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Quote */}
      <p className="relative z-10 flex-1 text-[15px] sm:text-base text-gray-600 leading-8 italic">
        &ldquo;{item.quote}&rdquo;
      </p>

      {/* Divider */}
      <div className="relative z-10 w-10 h-[2px] bg-[#B8934A] mt-7 mb-5 group-hover:w-16 transition-all duration-500" />

      {/* Client */}
      <div className="relative z-10">
        <h3 className="font-display text-xl font-semibold text-gray-900 leading-tight group-hover:text-[#B8934A] transition-colors duration-300">
          {item.name}
        </h3>
        <p className="mt-1 text-[11px] sm:text-xs font-semibold uppercase tracking-[0.15em] text-[#B8934A]">
          {item.role}
        </p>
      </div>
    </article>
  );
}

export default function Testimonials({ items = testimonials }) {
  const count = items.length;
  const reduceMotion = useReducedMotion();

  // Index into the extended (cloned) list; real slides start at CLONES
  const [index, setIndex] = useState(CLONES);
  const [animate, setAnimate] = useState(true);
  const [paused, setPaused] = useState(false);
  const [dragX, setDragX] = useState(0);
  const [dragging, setDragging] = useState(false);

  const busy = useRef(false);
  const dragStart = useRef(null);
  const dragDelta = useRef(0);

  const slides = [
    ...items.slice(-CLONES),
    ...items,
    ...items.slice(0, CLONES),
  ];
  const active = (((index - CLONES) % count) + count) % count;

  const go = useCallback(
    (delta) => {
      if (busy.current) return;
      if (reduceMotion) {
        // No transition, so jump straight to the wrapped position
        setAnimate(false);
        setIndex((i) => CLONES + ((((i - CLONES + delta) % count) + count) % count));
        return;
      }
      busy.current = true;
      setAnimate(true);
      setIndex((i) => i + delta);
    },
    [count, reduceMotion]
  );

  const goTo = (target) => {
    if (busy.current || target === active) return;
    go(target - active);
  };

  // Once a slide finishes, unlock and silently snap off any clone back to
  // the matching real slide (timer instead of transitionend, which can be
  // skipped when the tab is hidden)
  useEffect(() => {
    if (!animate || reduceMotion) return;
    const id = setTimeout(() => {
      busy.current = false;
      if (index >= CLONES + count || index < CLONES) {
        setAnimate(false);
        setIndex(CLONES + ((((index - CLONES) % count) + count) % count));
      }
    }, TRANSITION_MS);
    return () => clearTimeout(id);
  }, [index, animate, count, reduceMotion]);

  // Re-enable the transition on the frame after a silent snap
  useEffect(() => {
    if (animate || reduceMotion) return;
    let inner;
    const outer = requestAnimationFrame(() => {
      inner = requestAnimationFrame(() => setAnimate(true));
    });
    return () => {
      cancelAnimationFrame(outer);
      cancelAnimationFrame(inner);
    };
  }, [animate, reduceMotion]);

  // Autoplay (off for reduced motion, while hovered/focused, dragging or tab hidden)
  useEffect(() => {
    if (reduceMotion || paused || dragging) return;
    const id = setInterval(() => {
      if (!document.hidden) go(1);
    }, AUTOPLAY_MS);
    return () => clearInterval(id);
  }, [go, paused, dragging, reduceMotion, index]);

  /* Swipe / drag */
  const onPointerDown = (e) => {
    if (busy.current || (e.pointerType === "mouse" && e.button !== 0)) return;
    dragStart.current = e.clientX;
    dragDelta.current = 0;
    setDragging(true);
  };

  const onPointerMove = (e) => {
    if (dragStart.current === null) return;
    const dx = e.clientX - dragStart.current;
    if (Math.abs(dx) > 5 && !e.currentTarget.hasPointerCapture(e.pointerId)) {
      try {
        e.currentTarget.setPointerCapture(e.pointerId);
      } catch {
        // pointer already released
      }
    }
    dragDelta.current = dx;
    setDragX(dx);
  };

  const endDrag = () => {
    if (dragStart.current === null) return;
    const dx = dragDelta.current;
    dragStart.current = null;
    setDragging(false);
    setDragX(0);
    if (dx <= -SWIPE_THRESHOLD) go(1);
    else if (dx >= SWIPE_THRESHOLD) go(-1);
  };

  const onKeyDown = (e) => {
    if (e.key === "ArrowRight") go(1);
    if (e.key === "ArrowLeft") go(-1);
  };

  const fade = reduceMotion
    ? {}
    : {
        initial: { opacity: 0, y: 40 },
        whileInView: { opacity: 1, y: 0 },
        viewport: { once: true, amount: 0.2 },
      };

  return (
    <section className="relative py-10 lg:py-20 bg-gradient-to-b from-white via-[#B8934A]/[0.04] to-white overflow-hidden">
      {/* Background Glow */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[500px] h-[500px] bg-[#B8934A]/5 blur-3xl rounded-full pointer-events-none" />

      {/* Watermark Quote */}
      <FaQuoteLeft
        aria-hidden="true"
        className="absolute top-6 left-4 sm:left-10 text-[9rem] sm:text-[13rem] text-[#B8934A]/[0.06] pointer-events-none select-none"
      />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-10">
        {/* Heading */}
        <motion.div
          {...fade}
          transition={{ duration: 0.7, ease: "easeOut" }}
          className="text-center mb-8 lg:mb-14"
        >
          <div className="section-tag justify-center text-xs sm:text-sm">
            Testimonials
          </div>

          <h2 className="font-display text-[clamp(2rem,5vw,3.5rem)] font-bold text-gray-900 leading-tight">
            What Our <span className="text-[#B8934A] italic">Clients</span> Say
          </h2>

          <p className="mt-4 text-sm sm:text-base text-gray-600 leading-7 max-w-2xl mx-auto">
            Real experiences, lasting relationships, and the trust we&apos;ve
            built through every project.
          </p>

          <div className="w-24 h-[3px] bg-gradient-to-r from-transparent via-[#B8934A] to-transparent mx-auto mt-6 rounded-full" />
        </motion.div>

        {/* Slider */}
        <motion.div
          {...fade}
          transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          role="region"
          aria-roledescription="carousel"
          aria-label="Client testimonials"
          onMouseEnter={() => setPaused(true)}
          onMouseLeave={() => setPaused(false)}
          onFocus={() => setPaused(true)}
          onBlur={(e) => {
            if (!e.currentTarget.contains(e.relatedTarget)) setPaused(false);
          }}
          onKeyDown={onKeyDown}
          className="relative"
        >
          <div
            className="overflow-hidden -mx-3 px-0 py-4 cursor-grab active:cursor-grabbing select-none"
            style={{ touchAction: "pan-y" }}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={endDrag}
            onPointerCancel={endDrag}
            onPointerLeave={endDrag}
          >
            <div
              className="flex [--visible:1] md:[--visible:2] lg:[--visible:3]"
              style={{
                transform: `translate3d(calc(${-index} * 100% / var(--visible) + ${dragX}px), 0, 0)`,
                transition:
                  animate && !dragging && !reduceMotion
                    ? `transform ${TRANSITION_MS}ms cubic-bezier(0.22, 1, 0.36, 1)`
                    : "none",
              }}
            >
              {slides.map((item, i) => {
                const isClone = i < CLONES || i >= CLONES + count;
                return (
                  <div
                    key={i}
                    className="shrink-0 basis-full md:basis-1/2 lg:basis-1/3 px-3"
                    aria-hidden={isClone || undefined}
                    inert={isClone || undefined}
                    role={isClone ? undefined : "group"}
                    aria-roledescription={isClone ? undefined : "slide"}
                    aria-label={
                      isClone ? undefined : `${i - CLONES + 1} of ${count}`
                    }
                  >
                    <TestimonialCard item={item} />
                  </div>
                );
              })}
            </div>
          </div>

          {/* Controls */}
          <div className="mt-8 flex items-center justify-center gap-6">
            <button
              type="button"
              onClick={() => go(-1)}
              aria-label="Previous testimonial"
              className="w-11 h-11 flex items-center justify-center border border-[#B8934A] text-[#B8934A] hover:bg-[#B8934A] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <FiChevronLeft className="text-xl" />
            </button>

            <div className="flex items-center gap-2">
              {items.map((_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => goTo(i)}
                  aria-label={`Go to testimonial ${i + 1}`}
                  aria-current={i === active}
                  className={`h-[3px] rounded-full transition-all duration-500 ${
                    i === active
                      ? "w-8 bg-[#B8934A]"
                      : "w-4 bg-[#B8934A]/25 hover:bg-[#B8934A]/50"
                  }`}
                />
              ))}
            </div>

            <button
              type="button"
              onClick={() => go(1)}
              aria-label="Next testimonial"
              className="w-11 h-11 flex items-center justify-center border border-[#B8934A] text-[#B8934A] hover:bg-[#B8934A] hover:text-white transition-all duration-300 hover:-translate-y-0.5"
            >
              <FiChevronRight className="text-xl" />
            </button>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
