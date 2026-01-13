"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const certifications = [
  {
    title: "ISO 45001-2018",
    subtitle: "Health & Safety System",
    icon: "🛡️",
  },
  {
    title: "ISO 9001-2015",
    subtitle: "Management System",
    icon: "✅",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
    icon: "🌱",
  },
];

export function QualityAssurance() {
  return (
    <Section
      id="quality-assurance"
      className="py-20 bg-gradient-to-br from-custom_neutral-50 via-primary-soft/20 to-white relative overflow-hidden"
    >
      {/* Static Background Pattern */}
      <div className="absolute top-0 right-0 opacity-5 pointer-events-none">
        <div 
          className="w-[600px] h-[600px]"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(53, 170, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-custom_neutral-900"
            >
              Quality <span className="text-primary">Assurance</span>
            </motion.h2>
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{ x: 10, scale: 1.02 }}
                  className="flex items-center gap-4 p-5 bg-white rounded-xl shadow-md hover:shadow-xl transition-all border-l-4 border-primary"
                >
                  <motion.div
                    animate={{
                      rotate: [0, 10, -10, 0],
                    }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                      delay: index * 0.3,
                    }}
                    className="w-14 h-14 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0 text-2xl"
                  >
                    {cert.icon}
                  </motion.div>
                  <div>
                    <h3 className="font-bold text-lg text-custom_neutral-900">
                      {cert.title}
                    </h3>
                    <p className="text-sm text-custom_neutral-600">
                      {cert.subtitle}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="default" size="lg">
                Know More →
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Certificates Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[1, 2, 3, 4].map((i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, scale: 0.8, rotate: -10 }}
                    whileInView={{ opacity: 1, scale: 1, rotate: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -5,
                  }}
                  style={{ willChange: "transform" }}
                    className="bg-white rounded-xl shadow-2xl p-6 border-2 border-primary-soft hover:border-primary transition-all cursor-pointer"
                    style={{
                      transform: `rotate(${i % 2 === 0 ? "5deg" : "-5deg"})`,
                    }}
                  >
                    <div className="text-center">
                      <motion.div
                        animate={{
                          scale: [1, 1.1, 1],
                        }}
                        transition={{
                          duration: 2,
                          repeat: Infinity,
                          delay: i * 0.2,
                        }}
                        className="w-16 h-16 bg-gradient-to-br from-primary-soft to-primary/20 rounded-full mx-auto mb-4 flex items-center justify-center"
                      >
                        <span className="text-2xl">📜</span>
                      </motion.div>
                      <div className="text-xs text-custom_neutral-600 font-semibold">
                        Certificate
                      </div>
                      <div className="text-xs text-primary mt-1">ISO Certified</div>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
