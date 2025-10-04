"use client";

import Lenis from "@studio-freight/lenis";
import { useEffect } from "react";

export default function SmoothScroll() {
  useEffect(() => {
    // Détecte si c'est Chrome
    const isChrome = navigator.userAgent.indexOf("Chrome") > -1;

    // Ne pas initialiser Lenis sur Chrome
    if (isChrome) return;
    const lenis = new Lenis({
      duration: 1.2,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      wheelMultiplier: 1,
      touchMultiplier: 2,
      orientation: "vertical",
    });

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return null;
}
