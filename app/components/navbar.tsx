"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Home, Briefcase, Code, Mail } from "lucide-react";
import Link from "next/link";

const navItems = [
  { name: "Home", href: "#home", icon: Home },
  { name: "Work", href: "#work", icon: Briefcase },
  { name: "Skills", href: "#skills", icon: Code },
  { name: "Contact", href: "#contact", icon: Mail },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4 sm:px-6 lg:px-8 pointer-events-none">
      <motion.nav
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
        className={`w-full max-w-4xl xl:max-w-5xl pointer-events-auto ${
          isOpen ? "rounded-4xl" : "rounded-full"
        }`}
        style={{
          background: "rgba(255, 255, 255, 0.5)",
          backdropFilter: "blur(12px) saturate(180%)",
          WebkitBackdropFilter: "blur(12px) saturate(180%)",
          border: "1px solid rgba(255, 255, 255, 0.3)",
          boxShadow: "0 8px 32px 0 rgba(138, 35, 135, 0.15), 0 4px 16px 0 rgba(233, 64, 87, 0.15), inset 0 1px 0 0 rgba(255, 255, 255, 0.5)",
        }}
      >
        <div className="flex items-center justify-between h-14 md:h-16 px-4 md:px-6 lg:px-8">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ type: "spring", stiffness: 400, damping: 17 }}
            className="shrink-0"
          >
            <Link
              href="#home"
              className="text-lg md:text-xl font-semibold bg-clip-text text-transparent block"
              style={{
                background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                WebkitBackgroundClip: "text",
                WebkitTextFillColor: "transparent",
              }}
            >
              &lt;BILAL /&gt;
            </Link>
          </motion.div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center justify-end flex-1">
            <div className="flex items-center gap-1 lg:gap-2">
              {navItems.map((item, index) => (
                <motion.div
                  key={item.name}
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.05 + 0.2, duration: 0.4 }}
                >
                  <Link
                    href={item.href}
                    className="relative block px-4 py-2 text-sm font-medium rounded-full transition-all duration-300 group"
                    style={{ color: "#8A2387" }}
                  >
                    <motion.span
                      className="absolute inset-0 rounded-full"
                      initial={{ backgroundColor: "rgba(0, 0, 0, 0)" }}
                      whileHover={{ 
                        background: "linear-gradient(to right, rgba(242, 113, 33, 0.15), rgba(233, 64, 87, 0.15), rgba(138, 35, 135, 0.15))"
                      }}
                      transition={{ duration: 0.2, ease: "easeOut" }}
                    />
                    <motion.span
                      className="relative flex items-center gap-2 z-10"
                      whileHover={{ scale: 1.05 }}
                      transition={{ type: "spring", stiffness: 400, damping: 17 }}
                    >
                      <motion.div
                        whileHover={{ 
                          color: "#E94057",
                          scale: 1.1 
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        <item.icon className="w-4 h-4" style={{ color: "inherit" }} />
                      </motion.div>
                      <motion.span 
                        className="whitespace-nowrap"
                        whileHover={{ 
                          color: "#E94057",
                        }}
                        transition={{ duration: 0.2 }}
                      >
                        {item.name}
                      </motion.span>
                    </motion.span>
                  </Link>
                </motion.div>
              ))}
            </div>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center shrink-0 md:hidden">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 17 }}
              onClick={toggleMenu}
              className="p-2 rounded-full transition-all duration-300"
              style={{
                background: "rgba(242, 113, 33, 0.1)",
                color: "#8A2387",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "rgba(233, 64, 87, 0.15)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "rgba(242, 113, 33, 0.1)";
              }}
              aria-label="Toggle menu"
            >
              <div className="relative w-5 h-5">
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isOpen ? 90 : 0,
                    scale: isOpen ? 0 : 1,
                    opacity: isOpen ? 0 : 1,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <Menu className="w-5 h-5" />
                </motion.div>
                <motion.div
                  initial={false}
                  animate={{
                    rotate: isOpen ? 0 : -90,
                    scale: isOpen ? 1 : 0,
                    opacity: isOpen ? 1 : 0,
                  }}
                  transition={{
                    duration: 0.3,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="absolute inset-0 flex items-center justify-center"
                >
                  <X className="w-5 h-5" />
                </motion.div>
              </div>
            </motion.button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              exit={{ opacity: 0, height: 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
              className="md:hidden overflow-hidden border-t border-gray-200/50 rounded-b-2xl"
            >
              <div className="px-4 pt-2 pb-4 space-y-1">
                {navItems.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, x: -20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: index * 0.05, duration: 0.3 }}
                  >
                    <Link
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-300 group"
                      style={{ color: "#8A2387" }}
                      onMouseEnter={(e) => {
                        e.currentTarget.style.background = "rgba(242, 113, 33, 0.1)";
                      }}
                      onMouseLeave={(e) => {
                        e.currentTarget.style.background = "transparent";
                      }}
                    >
                      <item.icon className="w-5 h-5" style={{ color: "#8A2387" }} />
                      <span className="font-medium">{item.name}</span>
                    </Link>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.nav>
    </div>
  );
}

