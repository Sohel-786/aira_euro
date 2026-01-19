"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useKeenSlider } from "keen-slider/react";
import "keen-slider/keen-slider.min.css";
import { FaArrowLeftLong, FaArrowRightLong } from "react-icons/fa6";

const stats = [
  { number: "30+", label: "Years of Experience", icon: "👔" },
  { number: "200cr+", label: "Revenue in INR", icon: "📈" },
  { number: "300+", label: "CNC Machines", icon: "⚙️" },
  { number: "100+", label: "Domestic Outlets", icon: "📍" },
  { number: "1500+", label: "No. of Product Delivered", icon: "📦" },
  { number: "6-3000", label: "Size Range (mm)", icon: "📏" },
  { number: "2000+", label: "Our Family", icon: "👥" },
  { number: "1,50,000", label: "Square Meter Manufacturing Area", icon: "🏭" },
  { number: "1000+", label: "Product Range", icon: "🔧" },
  { number: "45+", label: "Export to Other Countries", icon: "🌍" },
];

export function StatisticsCarousel() {
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
      id="statistics"
      className="py-20 bg-gradient-to-br from-white via-primary-soft/30 to-white relative overflow-visible"
    >
      {/* Background Pattern */}
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
        {/* Desktop: Flex layout with heading and buttons aligned */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-8 sm:mb-12"
        >
          {/* Desktop Layout: Heading and buttons side by side */}
          <div className="hidden lg:flex items-start justify-between gap-6 mb-4">
            <div className="flex-1 text-center lg:text-left">
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 text-custom_neutral-900">
                Our <span className="text-primary">Achievements</span>
              </h2>
              <p className="text-lg text-custom_neutral-600 max-w-2xl mx-auto lg:mx-0">
                Numbers that reflect our commitment to excellence and innovation
              </p>
            </div>
            
            {/* Desktop Navigation Arrows - Aligned with heading */}
            <div className="flex gap-3 flex-shrink-0 pt-2">
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
          </div>

          {/* Mobile Layout: Centered heading and description */}
          <div className="lg:hidden text-center">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-custom_neutral-900">
              Our <span className="text-primary">Achievements</span>
            </h2>
            <p className="text-base sm:text-lg text-custom_neutral-600 max-w-2xl mx-auto px-4">
              Numbers that reflect our commitment to excellence and innovation
            </p>
          </div>
        </motion.div>

        {/* Mobile Navigation Arrows - Positioned below heading */}
        <div className="flex lg:hidden justify-center gap-3 mb-6">
          <button
            onClick={() => instanceRef.current?.prev()}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white border border-custom_neutral-200 shadow-[0_0_25px_0_#00000014] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Previous slide"
          >
            <FaArrowLeftLong className="text-sm sm:text-base" />
          </button>
          <button
            onClick={() => instanceRef.current?.next()}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full flex items-center justify-center bg-white border border-custom_neutral-200 shadow-[0_0_25px_0_#00000014] hover:bg-primary hover:text-white hover:border-primary transition-all duration-300"
            aria-label="Next slide"
          >
            <FaArrowRightLong className="text-sm sm:text-base" />
          </button>
        </div>

        {/* Carousel Container - Added padding for hover effects */}
        <div className="relative py-8 -my-8">

          {/* Slider - Added padding to allow hover scale */}
          <div ref={sliderRef} className="keen-slider cursor-grab active:cursor-grabbing py-4">
            {stats.map((stat, index) => (
              <div
                key={index}
                className="keen-slider__slide"
                style={{ minWidth: "280px" , overflow : 'visible'}}
              >
                <motion.div
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.05 }}
                  whileHover={{ 
                    scale: 1.05,
                    y: -10,
                    transition: { duration: 0.3 }
                  }}
                  className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all h-full border-2 border-transparent hover:border-primary/20"
                  style={{ willChange: "transform" }}
                >
                  <div className="text-5xl mb-4 text-center">{stat.icon}</div>
                  <div className="text-4xl sm:text-5xl font-bold text-primary mb-3 text-center">
                    {stat.number}
                  </div>
                  <div className="text-sm text-custom_neutral-600 font-medium text-center">
                    {stat.label}
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
