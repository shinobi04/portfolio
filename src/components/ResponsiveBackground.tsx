"use client";

import { useEffect, useState } from "react";
import AnimatedBackground from "@/components/AnimatedBackground";
import DotsBackground from "@/components/DotsBackground";

// Renders AnimatedBackground on mobile and DotsBackground on md+ using dimension checks
export default function ResponsiveBackground({ breakpoint = 768 }: { breakpoint?: number }) {
  const [isMobile, setIsMobile] = useState<boolean | null>(null);

  useEffect(() => {
    const check = () => setIsMobile(window.innerWidth < breakpoint);
    check();
    window.addEventListener("resize", check);
    return () => window.removeEventListener("resize", check);
  }, [breakpoint]);

  if (isMobile === null) return null; // avoid hydration mismatch

  return isMobile ? <AnimatedBackground /> : <DotsBackground />;
}
