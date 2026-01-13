"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";

const stats = [
  {
    number: "30+",
    label: "Years of Experience",
    icon: "👔",
  },
  {
    number: "200cr+",
    label: "Revenue in INR",
    icon: "📈",
  },
  {
    number: "300+",
    label: "CNC Machines",
    icon: "⚙️",
  },
  {
    number: "100+",
    label: "Domestic Outlets",
    icon: "📍",
  },
  {
    number: "1500+",
    label: "No. of Product Delivered",
    icon: "📦",
  },
  {
    number: "6-3000",
    label: "Size Range (mm)",
    icon: "📏",
  },
  {
    number: "2000+",
    label: "Our Family",
    icon: "👥",
  },
  {
    number: "1,50,000",
    label: "Square Meter Manufacturing Area",
    icon: "🏭",
  },
  {
    number: "1000+",
    label: "Product Range",
    icon: "🔧",
  },
  {
    number: "45+",
    label: "Export to Other Countries",
    icon: "🌍",
  },
];

export function Statistics() {
  return (
    <Section
      id="statistics"
      className="py-20 bg-gradient-to-br from-primary-soft to-white"
    >
      <div className="text-center mb-12">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-custom_neutral-900"
        >
          Our <span className="text-primary">Achievements</span>
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1 }}
          className="text-lg text-custom_neutral-600 max-w-2xl mx-auto"
        >
          Numbers that reflect our commitment to excellence and innovation
        </motion.p>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-6">
        {stats.map((stat, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-lg hover:shadow-xl transition-shadow text-center"
          >
            <div className="text-4xl mb-3">{stat.icon}</div>
            <div className="text-3xl sm:text-4xl font-bold text-primary mb-2">
              {stat.number}
            </div>
            <div className="text-sm text-custom_neutral-600 font-medium">
              {stat.label}
            </div>
          </motion.div>
        ))}
      </div>
    </Section>
  );
}
