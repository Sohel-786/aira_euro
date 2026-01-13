"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import Image from "next/image";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const products = [
  {
    title: "Pneumatic Ball Valve",
    subtitle: "Automation Ball Valves, Manual Ball Valves",
    description: "A Complete Range of Automation & Manual Ball Valves in 1 Roof.",
    icon: "🔵",
    gradient: "from-blue-500 to-blue-700",
  },
  {
    title: "Pneumatic Butterfly Valve",
    subtitle: "Automation Butterfly Valves, Manual Butterfly Valves",
    description: "Most Comprehensive Range of Butterfly Valves.",
    icon: "🦋",
    gradient: "from-cyan-500 to-blue-600",
  },
  {
    title: "Control Valve",
    subtitle: "Range Automation & Manual Control Valves",
    description: "Premium Range of Control Your Fluid with Our Range of Control Valves",
    icon: "🎛️",
    gradient: "from-primary to-primary-dark",
  },
  {
    title: "Solenoid Valve",
    subtitle: "Quality Solenoid Valve for Every Applications",
    description: "Huge Range of Solenoid Valves in Every Application & Sizes",
    icon: "⚡",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    title: "Plug Valve",
    subtitle: "Wide Range of Automation & Manual Plug Valves",
    description: "Best Quality in Every Size of Our Plug Valves",
    icon: "🔌",
    gradient: "from-purple-500 to-indigo-600",
  },
  {
    title: "Drum type Valve",
    subtitle: "Exclusive & Quality Drum Type Control Valves",
    description: "Best Quality in Every Size of Our Drum type valve",
    icon: "🥁",
    gradient: "from-red-500 to-pink-600",
  },
];

export function ProductRange() {
  const router = useRouter();
  
  const [sliderRef, instanceRef] = useKeenSlider({
    loop: true,
    mode: "snap",
    slides: {
      perView: "auto",
      spacing: 30,
    },
    breakpoints: {
      "(max-width: 1024px)": {
        slides: { perView: 1.2, spacing: 20 },
      },
      "(max-width: 640px)": {
        slides: { perView: 1.2, spacing: 15 },
      },
    },
  });

  return (
    <Section
      id="product-range"
      className="py-20 bg-white relative overflow-visible"
    >
      {/* Static Background */}
      <div className="absolute inset-0 opacity-5 pointer-events-none overflow-hidden">
        <div 
          className="absolute inset-0"
          style={{
            backgroundImage: `radial-gradient(circle, rgba(53, 170, 255, 0.1) 1px, transparent 1px)`,
            backgroundSize: "40px 40px",
          }}
        />
      </div>

      <div className="relative z-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-12">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-2 text-custom_neutral-900">
              Explore Our <span className="text-primary">Product Range</span>
            </h2>
            <p className="text-lg text-custom_neutral-600">
              Valve Automation, Control Valve, Isolation Valves
            </p>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="mt-4 sm:mt-0"
          >
            <div className="bg-primary-soft rounded-xl p-5 max-w-xs border-l-4 border-primary mb-4">
              <p className="text-sm text-custom_neutral-700 font-medium">
                Our R&D Team would love to discuss a new products customized to your needs.
              </p>
            </div>
            {/* Navigation Arrows - Moved here below R&D message */}
            <div className="flex gap-3 justify-end">
              <button
                onClick={() => instanceRef.current?.prev()}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-custom_neutral-200 shadow-[0_0_25px_0_#00000014] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Previous slide"
              >
                <FaArrowLeftLong />
              </button>
              <button
                onClick={() => instanceRef.current?.next()}
                className="w-14 h-14 rounded-full flex items-center justify-center bg-white border border-custom_neutral-200 shadow-[0_0_25px_0_#00000014] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
                aria-label="Next slide"
              >
                <FaArrowRightLong />
              </button>
            </div>
          </motion.div>
        </div>

        {/* Carousel Container - Added padding for hover effects */}
        <div className="relative py-8 -my-8">
          {/* Slider - Added padding to allow hover scale */}
          <div ref={sliderRef} className="keen-slider cursor-grab active:cursor-grabbing py-4">
            {products.map((product, index) => (
              <div
                key={index}
                className="keen-slider__slide"
                style={{ minWidth: "350px" , overflow : 'visible' }}
          
              >
                <motion.div
                  whileHover={{ y: -10, scale: 1.02 }}
                  className="bg-white border-2 border-primary-soft rounded-2xl p-8 h-full hover:shadow-2xl hover:border-primary transition-all relative overflow-hidden group"
                  style={{ willChange: "transform" }}
                >
                  {/* Gradient Background on Hover */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${product.gradient} opacity-0 group-hover:opacity-5 transition-opacity`}></div>
                  
                  <div className="text-6xl mb-6 relative z-10">{product.icon}</div>
                  
                  <h3 className="text-2xl font-bold text-custom_neutral-900 mb-3 group-hover:text-primary transition-colors relative z-10">
                    {product.title}
                  </h3>
                  <p className="text-sm text-primary font-semibold mb-3 relative z-10">
                    {product.subtitle}
                  </p>
                  <p className="text-sm text-custom_neutral-600 mb-6 relative z-10">
                    {product.description}
                  </p>
                  <Button
                    variant="ghost"
                    className="w-full group-hover:bg-primary group-hover:text-white relative z-10"
                    onClick={() => router.push("/products")}
                  >
                    Learn More →
                  </Button>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
