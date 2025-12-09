"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Github, Linkedin, Mail, Download, ArrowDown, MessageCircle } from "lucide-react";
import ButtonEffect from "./ui/button-effect";

export default function HeroSection() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 py-20"
    >
      <div className="max-w-7xl mx-auto w-full">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Left Side - Text Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
            className="text-center lg:text-left"
          >
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="inline-block mb-4"
            >
              <span 
                className="px-4 py-2 rounded-full text-sm font-semibold tracking-wide uppercase" 
                style={{ 
                  fontFamily: "var(--font-space-grotesk)",
                  background: "rgba(242, 113, 33, 0.1)",
                  color: "#8A2387",
                }}
              >
                👋 Hello, I&apos;m
              </span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black mb-6 leading-[0.9] tracking-tight"
              style={{ fontFamily: "var(--font-space-grotesk)" }}
            >
              <span className="text-gray-900 block">Bilal Ahmad</span>
              <span 
                className="bg-clip-text text-transparent block"
                style={{
                  background: "#8A2387",
                  background: "-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)",
                  background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                  WebkitBackgroundClip: "text",
                  WebkitTextFillColor: "transparent",
                }}
              >
                Full Stack Developer
              </span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
              className="text-lg sm:text-xl text-gray-600 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed"
              style={{ fontFamily: "var(--font-inter)" }}
            >
              Software Engineer, Full Stack Developer & UI/UX Designer passionate about creating
              innovative solutions and building exceptional digital experiences.
              I transform ideas into reality through clean code and modern
              technologies.
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start mb-8"
            >
              <ButtonEffect
                href="#contact"
                Style="px-8 py-4 rounded-full bg-gray-900 text-white font-semibold flex items-center justify-center gap-2"
                strength={2}
                style={{
                  boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.3), 0 8px 10px -6px rgba(138, 35, 135, 0.3)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(233, 64, 87, 0.4), 0 10px 15px -6px rgba(138, 35, 135, 0.4)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(138, 35, 135, 0.3), 0 8px 10px -6px rgba(138, 35, 135, 0.3)";
                }}
              >
                <Mail className="w-5 h-5" />
                Get In Touch
              </ButtonEffect>
              <ButtonEffect
                href="#work"
                Style="px-8 py-4 rounded-full bg-white text-gray-900 font-semibold border-2 border-gray-200 hover:border-gray-300 flex items-center justify-center gap-2"
                strength={2}
                style={{
                  boxShadow: "0 4px 6px -1px rgba(242, 113, 33, 0.2), 0 2px 4px -2px rgba(233, 64, 87, 0.2)",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(233, 64, 87, 0.3), 0 4px 6px -4px rgba(138, 35, 135, 0.3)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(242, 113, 33, 0.2), 0 2px 4px -2px rgba(233, 64, 87, 0.2)";
                }}
              >
                <Download className="w-5 h-5" />
                View My Work
              </ButtonEffect>
            </motion.div>

            {/* Social Links */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6, duration: 0.6 }}
              className="flex gap-4 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: "https://github.com/thebilalkhokhar", label: "GitHub" },
                { icon: Linkedin, href: "https://linkedin.com/in/thebilalkhokhar", label: "LinkedIn" },
                { icon: Mail, href: "mailto:bilalkhokhar228@gmail.com", label: "Email" },
                { icon: MessageCircle, href: "https://wa.me/923134432915", label: "WhatsApp" },
              ].map((social) => (
                <motion.a
                  key={social.label}  
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.1, y: -2 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-12 h-12 rounded-full bg-white border-2 flex items-center justify-center transition-all duration-300"
                  style={{
                    borderColor: "rgba(138, 35, 135, 0.3)",
                    color: "#8A2387",
                    boxShadow: "0 4px 6px -1px rgba(138, 35, 135, 0.12), 0 2px 4px -2px rgba(233, 64, 87, 0.12)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.borderColor = "#E94057";
                    e.currentTarget.style.color = "#E94057";
                    e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(233, 64, 87, 0.2), 0 4px 6px -4px rgba(138, 35, 135, 0.2)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.borderColor = "rgba(138, 35, 135, 0.3)";
                    e.currentTarget.style.color = "#8A2387";
                    e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(138, 35, 135, 0.12), 0 2px 4px -2px rgba(233, 64, 87, 0.12)";
                  }}
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5" />
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          {/* Right Side - Profile Image */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.2 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="relative">
              {/* Glow Effect */}
              <div 
                className="absolute inset-0 rounded-full blur-3xl opacity-30 animate-pulse"
                style={{
                  background: "#8A2387",
                  background: "-webkit-linear-gradient(to right, #F27121, #E94057, #8A2387)",
                  background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                }}
              />
              
              {/* Image Container */}
              <motion.div
                whileHover={{ scale: 1.05, rotate: 2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="relative w-64 h-64 sm:w-80 sm:h-80 lg:w-96 lg:h-96 rounded-full overflow-hidden border-4 border-white shadow-2xl"
              >
                <Image
                  src="/profile.png"
                  alt="Bilal - Full Stack Developer"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>

              {/* Floating Badge */}
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.8, duration: 0.5 }}
                className="absolute -bottom-4 -right-4 lg:-right-8 bg-white rounded-full px-6 py-3 shadow-xl border border-gray-200"
              >
                <div className="flex items-center gap-2">
                  <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse" />
                  <span className="text-sm font-semibold text-gray-900">
                    Available for work
                  </span>
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1, duration: 0.6 }}
          className="flex justify-center mt-16 lg:mt-20"
        >
          <motion.a
            href="#work"
            animate={{ y: [0, 10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            className="flex flex-col items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
          >
            <span className="text-sm font-medium">Scroll to explore</span>
            <ArrowDown className="w-6 h-6" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
}

