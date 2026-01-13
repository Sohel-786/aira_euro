"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import Image from "next/image";

export function CompanyIntro() {
  return (
    <Section
      id="company-intro"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 opacity-5">
        <Image
          src="/assets/images/about_page/core_values/background_pattern.svg"
          alt="Background Pattern"
          width={600}
          height={600}
        />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-6">
              Introducing{" "}
              <span className="text-primary">Aira</span> - A{" "}
              <span className="text-primary">Leading Valve Manufacturer</span>{" "}
              & Exporter in India
            </h2>
            <p className="text-lg text-custom_neutral-600 leading-relaxed mb-6">
              Our journey began in <span className="font-semibold text-primary">1993</span> as a modest shop in Ahmedabad, and by 1995, we expanded to a 2000 sq ft workshop, laying the foundation for our growth. Spearheaded by the entrepreneurial spirit of{" "}
              <span className="font-semibold text-primary">Mr. M F Kagdi</span>, we swiftly rose to prominence, driven by our passion for innovation.
            </p>
            <p className="text-lg text-custom_neutral-600 leading-relaxed mb-6">
              Today, we boast a floor space area of over{" "}
              <span className="font-bold text-primary">1,50,000 sq mtrs</span>, a testament to our exponential growth and scale.
            </p>
            <p className="text-lg text-custom_neutral-600 leading-relaxed">
              Specializing in <span className="font-semibold">automation products</span>, we have evolved into one of the{" "}
              <span className="font-semibold">largest manufacturing</span> units in the industry, offering comprehensive "one-stop solutions."
            </p>
          </motion.div>

          {/* Right Content - DUNS Badge */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="flex justify-center lg:justify-end"
          >
            <div className="bg-white rounded-2xl shadow-xl p-8 border-2 border-primary-soft max-w-md">
              <div className="text-center">
                <div className="mb-6">
                  <div className="w-24 h-24 mx-auto bg-primary-soft rounded-full flex items-center justify-center mb-4">
                    <span className="text-4xl font-bold text-primary">D&B</span>
                  </div>
                  <div className="bg-primary text-white px-4 py-2 rounded-lg mb-2">
                    <p className="text-sm font-bold">D-U-N-S® REGISTERED™</p>
                  </div>
                  <p className="text-sm text-custom_neutral-600">
                    D-U-N-S NUMBER: 862621860
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
