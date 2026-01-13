"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Image from "next/image";

const certifications = [
  {
    title: "ISO 45001-2018",
    subtitle: "Health & Safety System",
  },
  {
    title: "ISO 9001-2015",
    subtitle: "Management System",
  },
  {
    title: "ISO 14001:2015",
    subtitle: "Environmental Management System",
  },
];

export function QualityAssurance() {
  return (
    <Section
      id="quality-assurance"
      className="py-20 bg-gradient-to-br from-custom_neutral-50 to-white relative overflow-hidden"
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
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-8 text-custom_neutral-900">
              Quality <span className="text-primary">Assurance</span>
            </h2>
            <div className="space-y-4 mb-8">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                  className="flex items-center gap-4 p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
                >
                  <div className="w-12 h-12 bg-primary-soft rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-primary font-bold text-lg">✓</span>
                  </div>
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
            <Button variant="default" size="lg">
              Know More →
            </Button>
          </motion.div>

          {/* Right Content - Certificates Visual */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="relative h-[400px] lg:h-[500px]"
          >
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="grid grid-cols-2 gap-4 w-full max-w-md">
                {[1, 2, 3, 4].map((i) => (
                  <div
                    key={i}
                    className="bg-white rounded-lg shadow-xl p-6 border-2 border-primary-soft transform rotate-[-5deg] hover:rotate-0 transition-transform"
                    style={{
                      transform: `rotate(${i % 2 === 0 ? "5deg" : "-5deg"})`,
                    }}
                  >
                    <div className="text-center">
                      <div className="w-16 h-16 bg-primary-soft rounded-full mx-auto mb-4 flex items-center justify-center">
                        <span className="text-2xl">📜</span>
                      </div>
                      <div className="text-xs text-custom_neutral-600">
                        Certificate
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </Section>
  );
}
