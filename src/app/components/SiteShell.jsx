"use client";

import { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import FloatingWidget from "./FloatingWidget";
import ConsultationPopup from "./ConsultationPopup";

export default function SiteShell({ children }) {
  const [popupOpen, setPopupOpen] = useState(false);

  // Any page can trigger the popup via:
  // window.dispatchEvent(new CustomEvent("open-consultation"))
  useEffect(() => {
    const handler = () => setPopupOpen(true);
    window.addEventListener("open-consultation", handler);
    return () => window.removeEventListener("open-consultation", handler);
  }, []);

  return (
    <>
      <Navbar onConsultClick={() => setPopupOpen(true)} />

      <main className="flex-1">{children}</main>

      <FloatingWidget onClick={() => setPopupOpen(true)} />

      <ConsultationPopup
        isOpen={popupOpen}
        onClose={() => setPopupOpen(false)}
      />

      <Footer />
    </>
  );
}
