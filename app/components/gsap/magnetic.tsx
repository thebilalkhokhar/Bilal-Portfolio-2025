"use client";

import React, { useEffect, useRef } from "react";
import gsap from "gsap";

interface MagneticWrapperProps {
  children: React.ReactElement;
  style?: React.CSSProperties;
  strength?: number;
}

export default function MagneticWrapper({ children, style, strength = 2 }: MagneticWrapperProps) {
  const magnetic = useRef<HTMLElement>(null);

  useEffect(() => {
    if (window.innerWidth >= 1024 && magnetic.current) {
      const xTo = gsap.quickTo(magnetic.current, "x", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });
      const yTo = gsap.quickTo(magnetic.current, "y", {
        duration: 1,
        ease: "elastic.out(1, 0.3)",
      });

      const handleMouseMove = (e: MouseEvent) => {
        if (!magnetic.current) return;
        const { clientX, clientY } = e;
        const { height, width, left, top } = magnetic.current.getBoundingClientRect();
        const x = (clientX - (left + width / 2)) / strength;
        const y = (clientY - (top + height / 2)) / strength;
        xTo(x);
        yTo(y);
      };

      const handleMouseLeave = () => {
        xTo(0);
        yTo(0);
      };

      magnetic.current.addEventListener("mousemove", handleMouseMove);
      magnetic.current.addEventListener("mouseleave", handleMouseLeave);

      return () => {
        if (magnetic.current) {
          magnetic.current.removeEventListener("mousemove", handleMouseMove);
          magnetic.current.removeEventListener("mouseleave", handleMouseLeave);
        }
      };
    }
  }, [strength]);

  return React.cloneElement(children, {
    ref: magnetic,
    style: {
      ...children.props.style,
      ...style,
      willChange: "transform",
      backfaceVisibility: "hidden",
    },
  });
}

