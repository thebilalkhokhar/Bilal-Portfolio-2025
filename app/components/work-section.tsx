"use client";

import { motion } from "framer-motion";
import { Github, Calendar, Building2, Code2, Globe, Zap, Shield, Database, Smartphone } from "lucide-react";
import ButtonEffect from "./ui/button-effect";

export default function WorkSection() {
  return (
    <section
      id="work"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-white to-gray-50"
    >
      <div className="max-w-7xl mx-auto">
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
            Work Experience
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Building innovative solutions and delivering exceptional results
          </p>
        </motion.div>

        {/* Work Experience Cards */}
        <div className="space-y-8 mb-24">
          {/* Devsinc Internship */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="group relative"
          >
            <div
              className="rounded-3xl p-8 bg-white/50 backdrop-blur-md border border-gray-200/50 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(12px) saturate(180%)",
                WebkitBackdropFilter: "blur(12px) saturate(180%)",
                border: "1px solid rgba(138, 35, 135, 0.2)",
                boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px -5px rgba(233, 64, 87, 0.25), 0 10px 15px -6px rgba(138, 35, 135, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)";
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building2 className="w-6 h-6" style={{ color: "#E94057" }} />
                    <h3
                      className="text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Software Engineer Intern
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">Devsinc</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Nov 2025 - Present</span>
                  </div>
                </div>

              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Built a full-stack Job Portal with secure authentication, role-based access control (Admin/Applicant), job management (CRUD), resume uploads, and a complete application workflow",
                  "Implemented audit logs, email notifications, filters/pagination, and admin dashboards for jobs, applications, and system monitoring",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <Zap className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#E94057" }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                {[
                  "Node.js",
                  "Express.js",
                  "React.js",
                  "PostgreSQL",
                  "Sequelize",
                  "JWT",
                  "Cloudinary",
                  "Redux Toolkit",
                  "Nodemailer",
                ].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full text-sm font-medium"
                    style={{
                      background: "rgba(242, 113, 33, 0.1)",
                      color: "#8A2387",
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>

          {/* UI/UX Designer */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group relative"
          >
            <div
              className="rounded-3xl p-8 bg-white/50 backdrop-blur-md border border-gray-200/50 transition-all duration-300"
              style={{
                background: "rgba(255, 255, 255, 0.5)",
                backdropFilter: "blur(12px) saturate(180%)",
                WebkitBackdropFilter: "blur(12px) saturate(180%)",
                border: "1px solid rgba(138, 35, 135, 0.2)",
                boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.boxShadow = "0 20px 40px -5px rgba(233, 64, 87, 0.25), 0 10px 15px -6px rgba(138, 35, 135, 0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)";
              }}
            >
              <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4 mb-6">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Smartphone className="w-6 h-6" style={{ color: "#E94057" }} />
                    <h3
                      className="text-2xl font-bold text-gray-900"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      UI/UX Designer
                    </h3>
                  </div>
                  <p className="text-lg font-semibold text-gray-700 mb-2">Freelancer (Figma)</p>
                  <div className="flex items-center gap-2 text-sm text-gray-500">
                    <Calendar className="w-4 h-4" />
                    <span>Jan 2025 – Aug 2025</span>
                  </div>
                </div>
              </div>

              <ul className="space-y-3 mb-6">
                {[
                  "Designed 5+ responsive web & mobile interfaces, improving navigation efficiency by 35% and ensuring 100% cross-device compatibility",
                  "Created interactive prototypes in Figma, cutting design approval time by 50% and raising client satisfaction to 95%",
                ].map((point, idx) => (
                  <li key={idx} className="flex items-start gap-3 text-gray-700">
                    <Zap className="w-5 h-5 shrink-0 mt-0.5" style={{ color: "#E94057" }} />
                    <span>{point}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2">
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(242, 113, 33, 0.1)",
                    color: "#8A2387",
                  }}
                >
                  Figma
                </span>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(242, 113, 33, 0.1)",
                    color: "#8A2387",
                  }}
                >
                  UI/UX Design
                </span>
                <span 
                  className="px-3 py-1 rounded-full text-sm font-medium"
                  style={{
                    background: "rgba(242, 113, 33, 0.1)",
                    color: "#8A2387",
                  }}
                >
                  Prototyping
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Projects Section Header */}
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
            Featured Projects
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Innovative solutions built with modern technologies
          </p>
        </motion.div>

        {/* Projects Grid */}
        <div className="grid md:grid-cols-2 gap-8">
                {/* DevTinder Project */}
                <motion.div
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6 }}
                  className="group"
                >
                  <div
                    className="h-full rounded-3xl p-8 bg-white/50 backdrop-blur-md border border-gray-200/50 transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(12px) saturate(180%)",
                      WebkitBackdropFilter: "blur(12px) saturate(180%)",
                      border: "1px solid rgba(138, 35, 135, 0.2)",
                      boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 20px 40px -5px rgba(233, 64, 87, 0.25), 0 10px 15px -6px rgba(138, 35, 135, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)";
                    }}
                  >
              <div className="flex items-start justify-between mb-6">
                <div className="flex items-center gap-3">
                  <div 
                    className="w-12 h-12 rounded-xl flex items-center justify-center"
                    style={{
                      background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                    }}
                  >
                    <Code2 className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      DevTinder
                    </h3>
                    <p className="text-sm text-gray-600">Developer Networking Platform</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Built a full-stack developer networking platform (MERN) with an &quot;Interested / Ignore&quot; feed system and real-time chat using Socket.io.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Real-time chat with Socket.io",
                  "Razorpay payment integration",
                  "JWT-based authentication",
                  "Automated daily reminder emails with Cron Jobs + AWS SES",
                  "Deployed on AWS EC2",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Shield className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#E94057" }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["MERN", "Socket.io", "Razorpay", "JWT", "AWS", "Cron Jobs"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/80 text-xs font-medium"
                    style={{ color: "#8A2387" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <ButtonEffect
                  href="https://github.com/thebilalkhokhar/DevTinder-Backend"
                  target="_blank"
                  rel="noopener noreferrer"
                  Style="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
                  strength={2}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </ButtonEffect>
                <ButtonEffect
                  href="http://16.16.63.243/login"
                  target="_blank"
                  rel="noopener noreferrer"
                  Style="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white font-medium hover:shadow-lg"
                  strength={2}
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Demo</span>
                </ButtonEffect>
              </div>
            </div>
          </motion.div>

          {/* Food Ordering Platform */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="group"
          >
                  <div
                    className="h-full rounded-3xl p-8 bg-white/50 backdrop-blur-md border border-gray-200/50 transition-all duration-300"
                    style={{
                      background: "rgba(255, 255, 255, 0.5)",
                      backdropFilter: "blur(12px) saturate(180%)",
                      WebkitBackdropFilter: "blur(12px) saturate(180%)",
                      border: "1px solid rgba(138, 35, 135, 0.2)",
                      boxShadow: "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.boxShadow = "0 20px 40px -5px rgba(233, 64, 87, 0.25), 0 10px 15px -6px rgba(138, 35, 135, 0.25)";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.boxShadow = "0 10px 25px -5px rgba(138, 35, 135, 0.15), 0 8px 10px -6px rgba(233, 64, 87, 0.15)";
                    }}
                  >
                    <div className="flex items-start justify-between mb-6">
                      <div className="flex items-center gap-3">
                        <div
                          className="w-12 h-12 rounded-xl flex items-center justify-center"
                          style={{
                            background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                          }}
                        >
                          <Database className="w-6 h-6 text-white" />
                  </div>
                  <div>
                    <h3
                      className="text-xl font-bold text-gray-900 mb-1"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Multi-Restaurant Food Ordering
                    </h3>
                    <p className="text-sm text-gray-600">Final Year Project</p>
                  </div>
                </div>
              </div>

              <p className="text-gray-700 mb-6 leading-relaxed">
                Built a scalable food ordering platform (MERN) with real-time order tracking, an advanced Admin Dashboard, Role-Based Authentication, and secure Stripe-powered checkout.
              </p>

              <ul className="space-y-2 mb-6">
                {[
                  "Real-time order tracking",
                  "Advanced Admin Dashboard",
                  "Role-Based Authentication",
                  "Stripe payment integration",
                  "Customer reviews module",
                  "Optimized backend APIs",
                ].map((feature, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <Shield className="w-4 h-4 shrink-0 mt-0.5" style={{ color: "#E94057" }} />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <div className="flex flex-wrap gap-2 mb-6">
                {["MERN", "Stripe", "Real-time", "Admin Dashboard", "RESTful APIs"].map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 rounded-full bg-white/80 text-xs font-medium"
                    style={{ color: "#8A2387" }}
                  >
                    {tech}
                  </span>
                ))}
              </div>

              <div className="flex gap-3">
                <ButtonEffect
                  href="https://github.com/thebilalkhokhar/EATSONLINE-DEPLOY"
                  target="_blank"
                  rel="noopener noreferrer"
                  Style="flex items-center gap-2 px-4 py-2 rounded-full bg-white hover:bg-gray-50 text-gray-700 font-medium shadow-sm"
                  strength={2}
                >
                  <Github className="w-4 h-4" />
                  <span>GitHub</span>
                </ButtonEffect>
                <ButtonEffect
                  href="https://eatsonline-f3yo.onrender.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  Style="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-900 text-white font-medium hover:shadow-lg"
                  strength={2}
                >
                  <Globe className="w-4 h-4" />
                  <span>Live Demo</span>
                </ButtonEffect>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}

