"use client";
import Image from "next/image";
import { useState } from "react";
import Separator from "./Separator";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      {/* Mobile header with logo and hamburger */}
      <div className="fixed top-0 left-0 right-0 flex justify-between items-center px-6 py-1 md:hidden bg-[#111111]/80 backdrop-blur-lg z-50">
        <Image
          src="/icons/kmlogo.svg"
          alt="KillianCodes"
          width={50}
          height={50}
          className=""
        />
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
          <div className="text-md text-white/60 font-light mb-6">
            KillianCodes
          </div>
          <div className="space-y-4">
            <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
              Projects
            </div>
            <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
              Curriculum
            </div>
            <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
              Contact
            </div>
            <Separator className="my-4" />
            <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
              Overview
            </div>
          </div>
        </div>
      </div>

      {/* Desktop navigation */}
      <div className="fixed top-12 left-12 md:top-52 md:left-24 hidden md:block">
        <div className="max-w-[180px]">
          <Image
            src="/icons/kmlogotest.png"
            alt="KillianCodes"
            width={50}
            height={50}
            className="object-cover w-15 h-5 ml-[-18px]"
          />
          <div className="text-md text-white/60 font-light">KillianCodes</div>
          <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
            Projects
          </div>
          <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
            Curriculum
          </div>
          <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300">
            Contact
          </div>
          <Separator className="mt-2 mb-2" />
          <div className="text-md font-light text-white/20 hover:text-white/60 transition-all duration-300 mt-0">
            Overview
          </div>
        </div>
      </div>
    </>
  );
}
