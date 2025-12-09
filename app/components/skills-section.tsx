"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const skills = [
  // Frontend
  { name: "React", icon: "/skills/react.svg", category: "Frontend" },
  { name: "Next.js", icon: "/skills/nextjs.svg", category: "Frontend" },
  { name: "TypeScript", icon: "/skills/typescript.svg", category: "Frontend" },
  { name: "JavaScript", icon: "/skills/javascript.svg", category: "Frontend" },
  { name: "Tailwind CSS", icon: "/skills/tailwind.svg", category: "Frontend" },
  { name: "Redux", icon: "/skills/redux.svg", category: "Frontend" },
  
  // Backend
  { name: "Node.js", icon: "/skills/nodejs.svg", category: "Backend" },
  { name: "Express", icon: "/skills/express.svg", category: "Backend" },
  { name: "PostgreSQL", icon: "/skills/postgresql.svg", category: "Backend" },
  { name: "MongoDB", icon: "/skills/mongodb.svg", category: "Backend" },
  { name: "Prisma", icon: "/skills/prisma.svg", category: "Backend" },
  { name: "Socket.io", icon: "/skills/socketio.svg", category: "Backend" },
  
  // Tools & Services
  { name: "Git", icon: "/skills/git.svg", category: "Tools" },
  { name: "GitHub", icon: "/skills/github.svg", category: "Tools" },
  { name: "Docker", icon: "/skills/docker.svg", category: "Tools" },
  { name: "Postman", icon: "/skills/postman.svg", category: "Tools" },
  { name: "VS Code", icon: "/skills/vscode.svg", category: "Tools" },
  { name: "Figma", icon: "/skills/figma.svg", category: "Tools" },
  
  // Cloud & Deployment
  { name: "AWS", icon: "/skills/aws.svg", category: "Cloud" },
  { name: "Stripe", icon: "/skills/stripe.svg", category: "Cloud" },
  { name: "Netlify", icon: "/skills/netlify.svg", category: "Cloud" },
  { name: "Render", icon: "/skills/render.svg", category: "Cloud" },
  { name: "Cloudflare", icon: "/skills/cloudflare.svg", category: "Cloud" },
  { name: "Nginx", icon: "/skills/nginx.svg", category: "Cloud" },
];

const categories = [
  { name: "Frontend" },
  { name: "Backend" },
  { name: "Tools" },
  { name: "Cloud" },
];

export default function SkillsSection() {
  const getSkillsByCategory = (category: string) => {
    return skills.filter((skill) => skill.category === category);
  };

  return (
    <section
      id="skills"
      className="min-h-screen px-4 sm:px-6 lg:px-8 py-20 bg-gradient-to-b from-gray-50 to-white"
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
            Skills & Technologies
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Technologies I work with to build amazing digital experiences
          </p>
        </motion.div>

        {/* Skills by Category */}
        <div className="space-y-12">
          {categories.map((category, categoryIndex) => {
            const categorySkills = getSkillsByCategory(category.name);
            
            return (
              <motion.div
                key={category.name}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
                className="mb-12"
              >
                {/* Category Header */}
                <div className="flex items-center gap-4 mb-6">
                  <div 
                    className="h-1 w-16 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                    }}
                  />
                  <h3
                    className="text-2xl sm:text-3xl font-bold text-gray-900"
                    style={{ fontFamily: "var(--font-space-grotesk)" }}
                  >
                    {category.name}
                  </h3>
                  <div 
                    className="flex-1 h-1 rounded-full"
                    style={{
                      background: "linear-gradient(to right, #F27121, #E94057, #8A2387)",
                      opacity: 0.2,
                    }}
                  />
                </div>

                {/* Skills Grid */}
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {categorySkills.map((skill, index) => (
                    <motion.div
                      key={skill.name}
                      initial={{ opacity: 0, scale: 0.8 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{
                        duration: 0.4,
                        delay: index * 0.05,
                        type: "spring",
                        stiffness: 200,
                      }}
                      whileHover={{
                        scale: 1.1,
                        y: -8,
                        transition: { duration: 0.2 },
                      }}
                      className="group relative"
                    >
                      <div
                        className="relative rounded-2xl p-6 bg-white/50 backdrop-blur-md border border-gray-200/50 transition-all duration-300 cursor-pointer"
                        style={{
                          background: "rgba(255, 255, 255, 0.5)",
                          backdropFilter: "blur(12px) saturate(180%)",
                          WebkitBackdropFilter: "blur(12px) saturate(180%)",
                          boxShadow: "0 4px 6px -1px rgba(138, 35, 135, 0.12), 0 2px 4px -2px rgba(233, 64, 87, 0.12)",
                        }}
                        onMouseEnter={(e) => {
                          e.currentTarget.style.boxShadow = "0 10px 15px -3px rgba(233, 64, 87, 0.2), 0 4px 6px -4px rgba(138, 35, 135, 0.2)";
                        }}
                        onMouseLeave={(e) => {
                          e.currentTarget.style.boxShadow = "0 4px 6px -1px rgba(138, 35, 135, 0.12), 0 2px 4px -2px rgba(233, 64, 87, 0.12)";
                        }}
                      >
                        {/* Hover Glow Effect */}
                        {/* <div
                          className={`absolute inset-0 bg-gradient-to-br ${category.color} opacity-0 group-hover:opacity-10 rounded-2xl transition-opacity duration-300`}
                        /> */}
                        
                        {/* Icon Container */}
                        <div className="relative z-10 flex flex-col items-center gap-3">
                          <div className="relative w-16 h-16 sm:w-20 sm:h-20">
                            <Image
                              src={skill.icon}
                              alt={skill.name}
                              fill
                              className="object-contain group-hover:scale-110 transition-transform duration-300"
                            />
                          </div>
                          
                          {/* Skill Name */}
                          <span className="text-sm font-semibold text-gray-700 group-hover:text-gray-900 transition-colors text-center">
                            {skill.name}
                          </span>
                        </div>

                        {/* Animated Border on Hover */}
                        {/* <div
                          className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-20 transition-opacity duration-300 -z-10 blur-xs`}
                        /> */}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Infinite Slider */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-16 overflow-hidden"
        >
          <div
            className="rounded-2xl p-6 bg-white/50 backdrop-blur-md "
            style={{
              background: "rgba(255, 255, 255, 0.5)",
              backdropFilter: "blur(12px) saturate(180%)",
              WebkitBackdropFilter: "blur(12px) saturate(180%)",
            }}
          >
            <div className="relative overflow-hidden">
              <div className="flex animate-infinite-scroll whitespace-nowrap">
                {/* First set */}
                <div className="flex items-center gap-8">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={`first-${i}`}
                      className="text-gray-700 font-medium text-lg flex items-center gap-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Continuously learning and exploring new technologies to stay at the forefront of development
                      {/* <ArrowRight className="w-5 h-5 text-gray-500" /> */}
                    </span>
                  ))}
                </div>
                {/* Duplicate set for seamless loop */}
                <div className="flex items-center gap-8 ml-8">
                  {[...Array(3)].map((_, i) => (
                    <span
                      key={`second-${i}`}
                      className="text-gray-700 font-medium text-lg flex items-center gap-2"
                      style={{ fontFamily: "var(--font-space-grotesk)" }}
                    >
                      Continuously learning and exploring new technologies to stay at the forefront of development
                      {/* <ArrowRight className="w-5 h-5 text-gray-500" /> */}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

