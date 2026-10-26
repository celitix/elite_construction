"use client";

import { useState, useEffect } from "react";

const WHATSAPP_NUMBER = process.env.NEXT_PUBLIC_WHATSAPP_NUMBER || "919610008866";

export default function ConsultationPopup({ isOpen, onClose }) {
  const [form, setForm] = useState({ name: "", phone: "", email: "", message: "" });
  const [messageError, setMessageError] = useState("");

  // Close on Escape key
  useEffect(() => {
    const handler = (e) => {
      if (e.key === "Escape") onClose();
    };
    if (isOpen) document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, [isOpen, onClose]);

  // Lock body scroll when open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((current) => ({ ...current, [name]: value }));
    if (name === "message" && value.trim()) setMessageError("");
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!form.message.trim()) {
      setMessageError("Please enter your enquiry message.");
      return;
    }

    const whatsappMessage = [
      "Hello, I would like to book a free consultation.",
      `Name: ${form.name.trim()}`,
      `Mobile: ${form.phone.trim()}`,
      form.email.trim() ? `Email: ${form.email.trim()}` : null,
      `Enquiry: ${form.message.trim()}`,
    ].filter(Boolean).join("\n");

    window.open(
      `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(whatsappMessage)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/60 px-4"
      onClick={(e) => e.target === e.currentTarget && onClose()}
    >
      <div className="relative w-full max-w-[460px] max-h-[90vh] overflow-y-auto animate-popup">
        {/* Header */}
        <div className="relative bg-[#B8934A] py-2 px-6 flex items-center justify-between">
          {/* Corner folds */}
          <div className="absolute left-0 top-full w-0 h-0 border-t-[16px] border-t-[#8e6f34] border-r-[16px] border-r-transparent rotate-93"></div>

                <div className="absolute right-0 top-full w-0 h-0 border-t-[16px] border-t-[#8e6f34] border-l-[16px] border-l-transparent rotate-270"></div>

          <h2 className="text-white font-bold text-xl tracking-wide font-serif">
            Book a Free Consultation
          </h2>
          <button
            onClick={onClose}
            className="text-white/80 hover:text-white text-2xl leading-none w-8 h-8 flex items-center justify-center hover:bg-white/20 transition-colors"
            aria-label="Close"
          >
            &times;
          </button>
        </div>

        {/* Body */}
        <div className="relative bg-white text-[#B8934A] border border-[#B8934A]/30 shadow-2xl rounded-sm overflow-hidden mx-3">
                <form className="p-5 space-y-3" onSubmit={handleSubmit}>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Name
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                      className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Mobile
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      required
                      placeholder="Contact Number"
                      className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                      {/* <button type="button" className="h-8 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                        SEND OTP
                      </button>
                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Verify Mobile (OTP)
                    </label>

                    <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">

                      <input
                        type="text"
                        placeholder="Enter OTP"
                        className="sm:col-span-1 h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                      />

                      <button type="button" className="h-8 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                        VERIFY
                      </button>
                    </div>
                  </div> */}

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Email
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="Email Address"
                      className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none"
                    />
                  </div>

                  {/* <div>
                  <label className="block text-sm font-semibold mb-1">
                    Current Location
                  </label>

                  <div className="flex flex-col sm:flex-row gap-4 sm:gap-6">
                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="country" defaultChecked />
                      India
                    </label>

                    <label className="flex items-center gap-2 text-sm cursor-pointer">
                      <input type="radio" name="country" />
                      Outside India
                    </label>
                  </div>
                </div> */}

                  {/* <div>
                  <label className="block text-sm font-semibold mb-1">
                    Select City
                  </label>

                  <select className="w-full h-8 px-4 border border-gray-300 focus:border-[#B8934A] outline-none ">
                    <option disabled>Select City</option>
                    <option>Jaipur</option>
                    <option>Delhi</option>
                    <option>Mumbai</option>
                    <option>Ahmedabad</option>
                  </select>
                </div> */}

                  <div>
                    <label className="block text-sm font-semibold mb-1">
                      Enquiry Message
                    </label>

                    <textarea
                      rows="3"
                      name="message"
                      value={form.message}
                      onChange={handleChange}
                      required
                      aria-invalid={Boolean(messageError)}
                      aria-describedby={messageError ? "enquiry-message-error" : undefined}
                      placeholder="Write your message..."
                      className={`w-full px-4 py-1 border outline-none resize-none ${messageError ? "border-red-500 focus:border-red-500" : "border-gray-300 focus:border-[#B8934A]"}`}
                    />
                    {messageError && (
                      <p id="enquiry-message-error" className="mt-1 text-sm text-red-600" role="alert">
                        {messageError}
                      </p>
                    )}
                  </div>

                  <div className="pt-2 flex justify-center">
                    <button type="submit" className="w-full sm:w-auto px-10 h-10 bg-[#B8934A] text-white font-semibold hover:bg-[#9c7734] transition">
                      Send Message 
                    </button>
                  </div>
                </form>
              </div>
      </div>

      <style jsx>{`
        @keyframes popup-in {
          from {
            opacity: 0;
            transform: translateY(24px) scale(0.97);
          }
          to {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
        }
        .animate-popup {
          animation: popup-in 0.22s ease-out;
        }
      `}</style>
    </div>
  );
}
