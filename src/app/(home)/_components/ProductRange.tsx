"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";

const products = [
  {
    title: "Pneumatic Ball Valve",
    subtitle: "Automation Ball Valves, Manual Ball Valves",
    description: "A Complete Range of Automation & Manual Ball Valves in 1 Roof.",
    icon: "🔵",
  },
  {
    title: "Pneumatic Butterfly Valve",
    subtitle: "Automation Butterfly Valves, Manual Butterfly Valves",
    description: "Most Comprehensive Range of Butterfly Valves.",
    icon: "🦋",
  },
  {
    title: "Control Valve",
    subtitle: "Range Automation & Manual Control Valves",
    description: "Premium Range of Control Your Fluid with Our Range of Control Valves",
    icon: "🎛️",
  },
  {
    title: "Solenoid Valve",
    subtitle: "Quality Solenoid Valve for Every Applications",
    description: "Huge Range of Solenoid Valves in Every Application & Sizes",
    icon: "⚡",
  },
  {
    title: "Plug Valve",
    subtitle: "Wide Range of Automation & Manual Plug Valves",
    description: "Best Quality in Every Size of Our Plug Valves",
    icon: "🔌",
  },
  {
    title: "Drum type Valve",
    subtitle: "Exclusive & Quality Drum Type Control Valves",
    description: "Best Quality in Every Size of Our Drum type valve",
    icon: "🥁",
  },
];

export function ProductRange() {
  const router = useRouter();

  return (
    <Section
      id="product-range"
      className="py-20 bg-white relative overflow-hidden"
    >
      {/* Background Pattern */}
      <div className="absolute top-0 left-0 opacity-5">
        <Image
          src="/assets/images/landing_page/HomePageDesign.svg"
          alt="Background Pattern"
          width={403}
          height={1369}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <div>
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-custom_neutral-900"
            >
              Explore Our <span className="text-primary">Product Range</span>
            </motion.h2>
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="text-lg text-custom_neutral-600"
            >
              Valve Automation, Control Valve, Isolation Valves
            </motion.p>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="mt-4 sm:mt-0"
          >
            <div className="bg-primary-soft rounded-lg p-4 max-w-xs">
              <p className="text-sm text-custom_neutral-700">
                Our R&D Team would love to discuss a new products customized to your needs.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Product Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {products.map((product, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className="bg-white border-2 border-primary-soft rounded-xl p-6 hover:shadow-xl hover:border-primary transition-all cursor-pointer group"
            >
              <div className="text-5xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-bold text-custom_neutral-900 mb-2 group-hover:text-primary transition-colors">
                {product.title}
              </h3>
              <p className="text-sm text-primary font-semibold mb-2">
                {product.subtitle}
              </p>
              <p className="text-sm text-custom_neutral-600 mb-4">
                {product.description}
              </p>
              <Button
                variant="ghost"
                className="w-full group-hover:bg-primary group-hover:text-white"
                onClick={() => router.push("/products")}
              >
                Learn More →
              </Button>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
