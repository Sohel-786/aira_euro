"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

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
      {/* Background Pattern */}
      <div className="absolute top-0 right-0 opacity-5">
        <Image
          src="/assets/images/solution_page/work_with/workwith_background.svg"
          alt="Background Pattern"
          width={600}
          height={600}
        />
      </div>

      <div className="relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content - Video Section */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-bold mb-4 text-custom_neutral-900">
              Corporate Film
            </h3>
            <div className="bg-gradient-to-br from-primary-soft to-white rounded-xl p-8 mb-6">
              <div className="aspect-video bg-custom_neutral-200 rounded-lg flex items-center justify-center mb-4">
                <div className="text-center">
                  <div className="w-20 h-20 bg-primary rounded-full flex items-center justify-center mx-auto mb-4 cursor-pointer hover:scale-110 transition-transform">
                    <span className="text-white text-3xl">▶</span>
                  </div>
                  <p className="text-sm text-custom_neutral-600">
                    Valve Manufacturer India | Aira Euro Automation Pvt Ltd
                  </p>
                </div>
              </div>
            </div>
            <p className="text-custom_neutral-600 leading-relaxed">
              Welcome to <span className="font-semibold text-primary">Aira</span>. We provide assurance to our clients by applying the latest technologies and designs. We have won the hearts of customers by developing a strong connection and contentment.
            </p>
          </motion.div>

          {/* Right Content - Industries Grid */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-custom_neutral-900">
              We Work With Global <span className="text-primary">Industries!</span>
            </h2>
            <p className="text-lg text-custom_neutral-600 mb-8">
              Dedicated Customer Teams & An Agile Services
            </p>
            <div className="grid grid-cols-2 gap-4 mb-8">
              {industries.map((industry, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-primary text-white px-6 py-4 rounded-lg text-center font-bold hover:bg-primary-dark transition-colors cursor-pointer"
                >
                  {industry}
                </motion.div>
              ))}
            </div>
            <Button variant="outline" size="lg">
              Know More →
            </Button>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
