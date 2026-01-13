"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const industries = [
  "POWER",
  "Refining",
  "Petrochemicals",
  "Cement",
  "Pulp & Paper",
  "LNG & Cryogenics",
  "Nuclear",
  "Pharma Industry",
];

export function Industries() {
  return (
    <Section
      id="industries"
      className="py-20 bg-white relative overflow-hidden"
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
          {/* Left Content - Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-custom_neutral-900">
              Corporate Film
            </h3>
            <motion.div
              whileHover={{ scale: 1.02 }}
              className="bg-gradient-to-br from-primary-soft via-white to-primary-soft/50 rounded-2xl p-8 mb-6 border-2 border-primary-soft hover:border-primary transition-all shadow-lg"
            >
              <div className="aspect-video bg-gradient-to-br from-custom_neutral-200 to-custom_neutral-300 rounded-xl flex items-center justify-center mb-4 overflow-hidden relative group">
                {/* Video Thumbnail Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-dark/20"></div>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  className="relative z-10 w-20 h-20 bg-primary rounded-full flex items-center justify-center shadow-2xl cursor-pointer group-hover:bg-primary-dark transition-colors"
                >
                  <motion.span
                    animate={{ scale: [1, 1.2, 1] }}
                    transition={{
                      duration: 2,
                      repeat: Infinity,
                    }}
                    className="text-white text-3xl ml-1"
                  >
                    ▶
                  </motion.span>
                </motion.button>
                <p className="absolute bottom-4 left-4 right-4 text-center text-sm text-white/90 font-medium">
                  Valve Manufacturer India | Aira Euro Automation Pvt Ltd
                </p>
              </div>
            </motion.div>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-custom_neutral-600 leading-relaxed"
            >
              Welcome to <span className="font-semibold text-primary">Aira</span>. We provide assurance to our clients by applying the latest technologies and designs. We have won the hearts of customers by developing a strong connection and contentment.
            </motion.p>
          </motion.div>

          {/* Right Content - Industries Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-custom_neutral-900"
            >
              We Work With Global <span className="text-primary">Industries!</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-custom_neutral-600 mb-8"
            >
              Dedicated Customer Teams & An Agile Services
            </motion.p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  whileHover={{
                    scale: 1.05,
                    y: -5,
                  }}
                  style={{ willChange: "transform" }}
                  className="bg-primary text-white px-6 py-4 rounded-xl text-center font-bold hover:bg-primary-dark transition-all cursor-pointer border-2 border-transparent hover:border-primary-light"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
            <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
              <Button variant="outline" size="lg">
                Know More →
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
