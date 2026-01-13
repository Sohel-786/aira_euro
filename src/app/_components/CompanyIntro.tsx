"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

export function CompanyIntro() {
  return (
    <Section
      id="company-intro"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Static Background Pattern - No animation */}
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
            transition={{ duration: 0.6 }}
          >
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6"
            >
              Introducing{" "}
              <span className="text-primary">Aira</span> - A{" "}
              <span className="text-primary">Leading Valve Manufacturer</span>{" "}
              & Exporter in India
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-custom_neutral-600 leading-relaxed mb-6"
            >
              Our journey began in <span className="font-semibold text-primary">1993</span> as a modest shop in Ahmedabad, and by 1995, we expanded to a 2000 sq ft workshop, laying the foundation for our growth. Spearheaded by the entrepreneurial spirit of{" "}
              <span className="font-semibold text-primary">Mr. M F Kagdi</span>, we swiftly rose to prominence, driven by our passion for innovation.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="text-lg text-custom_neutral-600 leading-relaxed mb-6"
            >
              Today, we boast a floor space area of over{" "}
              <span className="font-bold text-primary">1,50,000 sq mtrs</span>, a testament to our exponential growth and scale.
            </motion.p>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="text-lg text-custom_neutral-600 leading-relaxed"
            >
              Specializing in <span className="font-semibold">automation products</span>, we have evolved into one of the{" "}
              <span className="font-semibold">largest manufacturing</span> units in the industry, offering comprehensive "one-stop solutions."
            </motion.p>
          </motion.div>

          {/* Right Content - DUNS Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <motion.div
              whileHover={{ scale: 1.05, y: -10 }}
              className="bg-white rounded-2xl shadow-2xl p-8 border-2 border-primary-soft max-w-md hover:border-primary transition-all"
            >
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-gradient-to-br from-primary-soft to-primary/20 rounded-full flex items-center justify-center mb-4 border-4 border-primary/20">
                    <span className="text-4xl font-bold text-primary">D&B</span>
                  </div>
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    className="bg-primary text-white px-4 py-2 rounded-lg mb-2 inline-block"
                  >
                    <p className="text-sm font-bold">D-U-N-S® REGISTERED™</p>
                  </motion.div>
                  <p className="text-sm text-custom_neutral-600 font-medium">
                    D-U-N-S NUMBER: 862621860
                  </p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
