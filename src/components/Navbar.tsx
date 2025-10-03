"use client";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("");
  const [isAtTop, setIsAtTop] = useState(true);

  // Détection du scroll pour savoir si on est tout en haut
  useEffect(() => {
    const handleScroll = () => {
      setIsAtTop(window.scrollY === 0);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      {
        rootMargin: "-50% 0px -50% 0px", // Considère la section active quand elle est à mi-chemin de l'écran
      }
    );

    // Observer toutes les sections
    const sections = document.querySelectorAll("section[id]");
    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <>
      {/* Mobile header with logo and hamburger */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-1 md:hidden bg-[#111111]/80 backdrop-blur-lg z-50">
        <a
          href="#"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <Image
            src="/icons/kmlogo.svg"
            alt="KillianCodes"
            width={50}
            height={50}
            className=""
          />
        </a>
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="text-white p-2"
        >
          {isMenuOpen ? (
            // X icon for close
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M18 6L6 18M6 6l12 12" />
            </svg>
          ) : (
            // Hamburger icon
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`fixed inset-0 bg-[#111111]/80 backdrop-blur-lg z-40 transition-transform duration-300 md:hidden ${
          isMenuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="pt-24 px-6">
          <div
            className={`text-md font-light mb-6 ${
              isAtTop || activeSection === "home"
                ? "text-white"
                : "text-white/20"
            }`}
          >
            KillianCodes
          </div>
          <div className="space-y-4">
            <a
              href="#projects"
              className={`block text-md font-light ${
                !isAtTop && activeSection === "projects"
                  ? "text-white"
                  : "text-white/20"
              } hover:text-white/60 transition-all duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              Projects
            </a>
            <a
              href="#cv"
              className={`block text-md font-light ${
                !isAtTop &&
                (activeSection === "cv" || activeSection === "contact")
                  ? "text-white"
                  : "text-white/20"
              } hover:text-white/60 transition-all duration-300`}
              onClick={() => setIsMenuOpen(false)}
            >
              CV + Contact
            </a>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="fixed top-12 left-12 md:top-52 md:left-24 hidden md:block">
        <div className="max-w-[180px]">
          <a
            href="#"
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          >
            <Image
              src="/icons/kmlogotest.png"
              alt="KillianCodes"
              width={50}
              height={50}
              className="object-cover w-15 h-5 ml-[-18px]"
            />
          </a>
          <a
            href="#home"
            className={`block text-md font-light ${
              isAtTop || activeSection === "home"
                ? "text-white"
                : "text-white/20"
            } hover:text-white/60 transition-all duration-300`}
          >
            KillianCodes
          </a>
          <a
            href="#projects"
            className={`block text-md font-light ${
              !isAtTop && activeSection === "projects"
                ? "text-white"
                : "text-white/20"
            } hover:text-white/60 transition-all duration-300`}
          >
            Projects
          </a>
          <a
            href="#cv"
            className={`block text-md font-light ${
              !isAtTop &&
              (activeSection === "cv" || activeSection === "contact")
                ? "text-white"
                : "text-white/20"
            } hover:text-white/60 transition-all duration-300`}
          >
            CV + Contact
          </a>
        </div>
      </div>
    </>
  );
}
