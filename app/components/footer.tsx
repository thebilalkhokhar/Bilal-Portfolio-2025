"use client";

import React, { useEffect, useRef } from "react";
import Link from "next/link";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Spline from "@splinetool/react-spline";
import FlipLink from "./ui/flip-link";
import ButtonEffect from "./ui/button-effect";
import useLocalTime from "../hooks/useLocalTime";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

gsap.registerPlugin(ScrollTrigger);

export default function Footer() {
  const nameRef = useRef<HTMLHeadingElement>(null);
  const footerRef = useRef<HTMLDivElement>(null);
  const splineRef = useRef<any>(null);
  const localTime = useLocalTime();

  const links = [
    {
      title: "LINKS",
      links: [
        { text: "Home", link: "#home" },
        { text: "Work", link: "#work" },
        { text: "Skills", link: "#skills" },
        { text: "Contact", link: "#contact" },
      ],
    },
    {
      title: "SOCIALS",
      links: [
        { text: "Email", link: "mailto:your@email.com", isSocial: true },
        { text: "LinkedIn", link: "https://linkedin.com", isSocial: true },
        { text: "GitHub", link: "https://github.com", isSocial: true },
      ],
    },
    {
      title: "LOCAL TIME",
      infos: [{ p: localTime }],
    },
    {
      title: "VERSION",
      infos: [{ p: "2025 © Edition" }],
    },
  ];

  useEffect(() => {
    if (!nameRef.current) return;

    const letters = nameRef.current.querySelectorAll(".char");

    gsap.set(letters, {
      yPercent: 100,
    });

    gsap.to(letters, {
      yPercent: 0,
      duration: 1,
      ease: "expo.out",
      stagger: {
        amount: 0.1,
        from: "start",
      },
      scrollTrigger: {
        trigger: nameRef.current,
        start: "top 60%",
        toggleActions: "play none none reverse",
      },
    });

    // Footer text animation
    gsap.fromTo(
      ".footer-text",
      { y: 115, rotate: 20 },
      {
        y: 0,
        stagger: 0.04,
        delay: 0.2,
        rotate: 0,
        duration: 0.5,
        ease: "power1.out",
        scrollTrigger: {
          trigger: footerRef.current,
          start: "top 80%",
          toggleActions: "play none none reverse",
        },
      }
    );
  }, []);


  const name = "BILAL";

  // Handle mouse movement for 3D model
  useEffect(() => {
    if (typeof window === "undefined") return;

    const handleMouseMove = (e: MouseEvent) => {
      if (!splineRef.current) return;

      const { clientX, clientY } = e;
      const { innerWidth, innerHeight } = window;
      
      // Normalize mouse position to -1 to 1 range
      const x = (clientX / innerWidth) * 2 - 1;
      const y = (clientY / innerHeight) * 2 - 1;

      // Update Spline object rotation based on mouse position
      try {
        const spline = splineRef.current;
        if (spline && spline.find) {
          // Find the object in Spline scene (adjust name based on your Spline scene)
          const object = spline.find("Cube") || spline.find("Mesh") || spline.find("Group");
          if (object) {
            // Rotate object based on mouse position
            object.rotation.x = y * 0.3;
            object.rotation.y = x * 0.3;
          }
        }
      } catch (error) {
        // Spline API might vary - this is a fallback
        console.log("Spline mouse tracking:", error);
      }
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  const handleSplineLoad = (spline: any) => {
    splineRef.current = spline;
  };

  return (
    <div ref={footerRef} className="footer-section relative overflow-hidden z-[30] bg-gray-900">
      <div className="h-[80vh] z-30 lg:h-[100vh] flex flex-col justify-between text-white lg:pt-24 pt-8 px-4 lg:px-8 relative bg-gray-900">
        <div className="flex flex-col lg:flex-row justify-between w-full">
          <div className="flex justify-between">
            {/* Links */}
            <div className="lg:text-lg z-50 flex flex-wrap lg:gap-10 gap-6">
              {links.map((item, index) => (
                <div key={index} className="flex flex-col gap-2">
                  <div className="overflow-hidden">
                    <h1 className="footer-text opacity-50 text-sm">{item.title}</h1>
                  </div>
                  <div className="flex gap-1 flex-col whitespace-nowrap leading-6">
                    {item.links?.map((linkItem, linkIndex) => (
                      <div key={linkIndex} className="overflow-hidden">
                        <Link
                          href={linkItem.link}
                          target={"isSocial" in linkItem && linkItem.isSocial ? "_blank" : undefined}
                          rel={"isSocial" in linkItem && linkItem.isSocial ? "noopener noreferrer" : undefined}
                        >
                          <h1 className="footer-text text-[0.95rem] cursor-pointer hover:text-gray-400 text-gray-300">
                            <FlipLink>{linkItem.text}</FlipLink>
                          </h1>
                        </Link>
                      </div>
                    ))}
                    {item.infos?.map((infoItem, infoIndex) => (
                      <div key={infoIndex} className="overflow-hidden">
                        <p className="footer-text text-[0.95rem]">{infoItem.p}</p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="lg:flex-row lg:w-fit w-full lg:px-0 px-4 md:items-start items-center flex-col flex gap-5 pt-10">
            <div className="w-full">
              <ButtonEffect
                strength={3.5}
                Style="bg-gray-900 lg:w-fit w-full hover:text-gray-900 border-white hover:border-white border-[1px] text-white"
                href="tel:+1234567890"
              >
                <div className="flex items-center gap-2">
                  <Phone className="w-4 h-4" />
                  <span>+1234567890</span>
                </div>
              </ButtonEffect>
            </div>
            <div className="w-full">
              <ButtonEffect
                strength={3.5}
                Style="bg-gray-900 border-white lg:w-fit w-full hover:border-white border-[1px] text-white"
                href="mailto:your@email.com"
              >
                <div className="flex items-center gap-2">
                  <Mail className="w-4 h-4" />
                  <span>your@email.com</span>
                </div>
              </ButtonEffect>
            </div>
          </div>
        </div>

        {/* Big text and 3D model */}
        <div className="flex flex-col items-center justify-center w-full relative">
          {/* Spline 3D Model */}
          <div className="hidden lg:block absolute -top-[15em] scale-90 translate-x-1/2 right-1/2 lg:w-[450px] lg:h-[450px] w-[300px] h-[300px] rounded-lg z-10">
            {/* 
              IMPORTANT: Add your Spline scene here!
              
              Option 1: Local file - Put your .splinecode file in public/ folder
              scene="/scene (1).splinecode"
              
              Option 2: Spline URL - Get from spline.design after exporting
              scene="https://prod.spline.design/YOUR_SCENE_URL.splinecode"
              
              To get a Spline scene:
              1. Go to https://spline.design
              2. Create/export your 3D model
              3. Copy the scene URL or download the .splinecode file
            */}
            <Spline
              scene="/scene (1).splinecode"
              onLoad={handleSplineLoad}
              style={{ width: "100%", height: "100%" }}
            />
          </div>

          <div
            className="font-black lg:leading-[28rem] leading-[10rem] lg:text-[30rem] text-[8rem] flex flex-col text-center"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            <h1
              ref={nameRef}
              className="name-text -mb-[5rem] flex overflow-hidden text-white"
            >
              {name.split("").map((char, i) => (
                <span key={i} className="char inline-block">
                  {char}
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
}

