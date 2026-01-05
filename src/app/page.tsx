"use client";

import { Hero } from "@/components/sections/Hero";
import { BrandStory } from "@/components/sections/BrandStory"; // Scrollytelling
import { About } from "@/components/sections/About";
import { Artists } from "@/components/sections/Artists";
import { Footer } from "@/components/layout/Footer";
import { Business } from "@/components/sections/Business";
import { Subsidiaries } from "@/components/sections/Subsidiaries";
import { Partners } from "@/components/sections/Partners";

export default function Home() {
  return (
    <div className="bg-black min-h-screen text-white">
      <Hero />
      <BrandStory />
      <About />
      <Business />
      <Subsidiaries />
      <Partners />
      <Artists />
    </div>
  );
}
