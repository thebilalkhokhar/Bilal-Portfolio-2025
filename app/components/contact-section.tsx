"use client";

import { motion } from "framer-motion";
import { useState } from "react";
import { Mail, Send, User, MessageSquare, CheckCircle, Loader2 } from "lucide-react";
import ButtonEffect from "./ui/button-effect";

export default function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Failed to send message");
      }

      setIsSubmitting(false);
      setIsSubmitted(true);
      
      // Reset form after 3 seconds
      setTimeout(() => {
        setIsSubmitted(false);
        setFormData({ name: "", email: "", message: "" });
      }, 3000);
    } catch (error) {
      console.error("Error submitting form:", error);
      setIsSubmitting(false);
      alert(error instanceof Error ? error.message : "Failed to send message. Please try again.");
    }
  };

  return (
    <section
      id="contact"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2
            className="text-4xl sm:text-5xl md:text-6xl font-black mb-4 text-gray-900"
            style={{ fontFamily: "var(--font-space-grotesk)" }}
          >
            Get In Touch
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Have a project in mind or want to collaborate? Let&apos;s talk!
          </p>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="relative"
        >
          <div
            className="rounded-3xl p-8 md:p-12 bg-white/50 backdrop-blur-md border border-gray-200/50"
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(12px) saturate(180%)",
              WebkitBackdropFilter: "blur(12px) saturate(180%)",
              boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)",
            }}
          >
            {isSubmitted ? (
              <motion.div
                initial={{ scale: 0.8, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                className="text-center py-12"
              >
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: "spring", stiffness: 200, damping: 15 }}
                  className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-gradient-to-r from-green-500 to-emerald-500 mb-6"
                >
                  <CheckCircle className="w-10 h-10 text-white" />
                </motion.div>
                <h3
                  className="text-2xl font-bold text-gray-900 mb-2"
                  style={{ fontFamily: "var(--font-space-grotesk)" }}
                >
                  Message Sent!
                </h3>
                <p className="text-gray-600">
                  I&apos;ll get back to you as soon as possible.
                </p>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                {/* Name Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.1 }}
                  className="relative"
                >
                  <label
                    htmlFor="name"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Name
                  </label>
                  <div className="relative">
                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="Your name"
                    />
                  </div>
                </motion.div>

                {/* Email Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.2 }}
                  className="relative"
                >
                  <label
                    htmlFor="email"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <div className="relative">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 placeholder-gray-400"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </motion.div>

                {/* Message Field */}
                <motion.div
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.3 }}
                  className="relative"
                >
                  <label
                    htmlFor="message"
                    className="block text-sm font-semibold text-gray-700 mb-2"
                  >
                    Message
                  </label>
                  <div className="relative">
                    <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      className="w-full pl-12 pr-4 py-4 rounded-xl bg-white/80 border-2 border-gray-200 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-500/20 transition-all duration-300 text-gray-900 placeholder-gray-400 resize-none"
                      placeholder="Tell me about your project or just say hello..."
                    />
                  </div>
                </motion.div>

                {/* Submit Button */}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: 0.4 }}
                  className="pt-4"
                >
                  <ButtonEffect
                    type="submit"
                    disabled={isSubmitting}
                    Style="w-full px-8 py-4 rounded-full bg-gray-900 text-white font-semibold flex items-center justify-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                  style={{
                    boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.3), 0 8px 10px -6px rgba(138, 35, 135, 0.3)",
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = "0 20px 35px -5px rgba(233, 64, 87, 0.4), 0 10px 15px -6px rgba(138, 35, 135, 0.4)";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(138, 35, 135, 0.3), 0 8px 10px -6px rgba(138, 35, 135, 0.3)";
                  }}
                    strength={2}
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>Sending...</span>
                      </>
                    ) : (
                      <>
                        <Send className="w-5 h-5" />
                        <span>Send Message</span>
                      </>
                    )}
                  </ButtonEffect>
                </motion.div>
              </form>
            )}
          </div>

          {/* Decorative Elements */}
          <div className="absolute -top-4 -right-4 w-24 h-24 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full blur-3xl opacity-20 -z-10" />
          <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-3xl opacity-20 -z-10" />
        </motion.div>


      </div>
    </section>
  );
}

