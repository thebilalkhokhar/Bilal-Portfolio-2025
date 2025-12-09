"use client";

import React from "react";
import { motion } from "framer-motion";
import MagneticWrapper from "../gsap/magnetic";

interface ButtonEffectProps {
  children: React.ReactNode;
  Style?: string;
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  strength?: number;
  href?: string;
  target?: string;
  rel?: string;
  style?: React.CSSProperties;
  onMouseEnter?: (e: React.MouseEvent<HTMLButtonElement>) => void;
  onMouseLeave?: (e: React.MouseEvent<HTMLButtonElement>) => void;
}

function ButtonEffect({
  children,
  Style = "",
  type,
  disabled,
  strength = 3.5,
  href,
  target,
  rel,
  style,
  onMouseEnter,
  onMouseLeave,
}: ButtonEffectProps) {
  // Check if button has black background
  const hasBlackBg = Style.includes("bg-gray-900") || Style.includes("bg-black");
  
  // Check if button has white background (footer buttons)
  const hasWhiteBg = Style.includes("bg-white");
  
  // Get hover overlay based on button type
  const getHoverOverlay = () => {
    if (hasBlackBg) {
      // For black buttons, keep black background on hover
      return "bg-gray-900 text-white";
    }
    if (hasWhiteBg) {
      // For white buttons (footer), use gradient background on hover
      return "text-white";
    }
    // For other buttons, use white overlay
    return "bg-white/90";
  };
  
  // Get hover overlay style for gradient
  const getHoverOverlayStyle = () => {
    if (hasWhiteBg) {
      return {
        background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
      };
    }
    return {};
  };

  const buttonContent = (
    <motion.button
      type={type}
      disabled={disabled}
      initial="initial"
      whileHover="hovered"
      transition={{
        staggerChildren: 0.012,
      }}
      className={`${Style} cursor-pointer px-6 py-3 rounded-full relative overflow-hidden`}
      style={style}
      onMouseEnter={onMouseEnter}
      onMouseLeave={onMouseLeave}
    >
      <motion.div
        variants={{
          initial: { y: 0 },
          hovered: { y: "-130%" },
        }}
        transition={{
          duration: 0.4,
          ease: [0.22, 1, 0.36, 1],
        }}
        className="flex items-center justify-center gap-2"
      >
        {children}
      </motion.div>

      <motion.div
        variants={{
          initial: { y: "100%", scale: 0.3 },
          hovered: { y: 0, scale: 1 },
        }}
        transition={{
          duration: 0.5,
          ease: [0.22, 1, 0.36, 1],
        }}
        className={`flex items-center justify-center gap-2 rounded-full absolute inset-0 ${getHoverOverlay()} backdrop-blur-sm`}
        style={getHoverOverlayStyle()}
      >
        <MagneticWrapper strength={strength}>
          <div className="flex items-center justify-center gap-2">{children}</div>
        </MagneticWrapper>
      </motion.div>
    </motion.button>
  );

  if (href) {
    return (
      <a href={href} target={target} rel={rel} className="inline-block">
        {buttonContent}
      </a>
    );
  }

  return buttonContent;
}

export default ButtonEffect;

