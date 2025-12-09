"use client";

import { useState } from "react";
import Navbar from "./components/navbar";
import HeroSection from "./components/hero-section";
import WorkSection from "./components/work-section";
import SkillsSection from "./components/skills-section";
import ContactSection from "./components/contact-section";
import Footer from "./components/footer";
import { AppleHelloEnglishEffect } from "./components/ui/shadcn-io/apple-hello-effect";
import SmoothScroll from "./components/smooth-scroll";

export default function Home() {
  const [showSplash, setShowSplash] = useState(true);

  const handleAnimationComplete = () => {
    // Hide splash screen after animation completes (add small delay for smooth transition)
    setTimeout(() => {
      setShowSplash(false);
    }, 500);
  };

  return (
    <SmoothScroll>
      {/* Splash Screen */}
      {showSplash && (
        <div className="fixed inset-0 z-[100] bg-white flex items-center justify-center">
          <div className="flex w-full h-screen flex-col justify-center items-center">
            <AppleHelloEnglishEffect speed={1.1} onAnimationComplete={handleAnimationComplete} className="h-32 md:h-40" />
          </div>
        </div>
      )}

      {/* Main Content */}
      <div className={`min-h-screen bg-gradient-to-br from-gray-50 via-white to-gray-100 ${showSplash ? 'opacity-0' : 'opacity-100 transition-opacity duration-500'}`}>
        <div className="fixed inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(120,119,198,0.1),transparent_50%)] pointer-events-none" />
        <Navbar />
        <main className="pt-24 md:pt-28 relative z-10">
          {/* Hero Section */}
          <HeroSection />

          {/* Work Section */}
          <WorkSection />

          {/* Skills Section */}
          <SkillsSection />

          {/* Contact Section */}
          <ContactSection />
        </main>
        <Footer />
      </div>
    </SmoothScroll>
  );
}
