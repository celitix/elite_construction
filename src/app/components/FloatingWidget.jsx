"use client";

import Image from "next/image";

export default function FloatingWidget({ onClick }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className="fixed bottom-6 right-6 z-[998] cursor-pointer group text-left"
      title="Book Free Expert Consultation"
      aria-label="Book free expert consultation"
    >
      <div className="relative w-[135px] md:w-[155px] rounded-[20px] border border-[#c9a55a] bg-white shadow-2xl overflow-visible transition-transform duration-200 group-hover:-translate-y-1">
        {/* Top Logo Badge */}
        <div className="absolute -top-5 left-1/2 -translate-x-1/2 z-20 w-[42px] h-[42px] rounded-full bg-white border-2 border-[#B8934A] flex items-center justify-center shadow-md">
          <Image
            src="/favicon.png"
            alt="Elite Construction Logo"
            width={28}
            height={28}
            className="object-contain"
          />
        </div>

        {/* Text Content */}
        <div className="pt-7 md:pt-9 px-3 pb-2 text-center bg-white rounded-t-[20px]">
          <span className="block text-[#B8934A] text-[15px] font-extrabold leading-tight uppercase tracking-wide">
            BOOK FREE
          </span>
          <span className="block text-gray-600 text-[11px] mt-0.5 font-medium">
            Expert Consultation!
          </span>
        </div>

        {/* House Image with Button overlaid */}
        <div className="relative h-[70px] md:h-[90px] w-full overflow-hidden rounded-b-[20px]">
          <Image
            src="/homehero.png"
            alt="Book Consultation"
            fill
            className="object-cover"
          />
          {/* subtle overlay so button is readable */}
          <div className="absolute inset-0 bg-black/10" />

          {/* Button sits centered on the image */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 w-[115px]">
            <span className="w-full h-[26px] rounded-sm bg-[#B8934A] text-white text-[9px] font-bold uppercase tracking-widest shadow-lg flex items-center justify-center gap-1">
              BOOK NOW →
            </span>
          </div>
        </div>
      </div>
    </button>
  );
}
