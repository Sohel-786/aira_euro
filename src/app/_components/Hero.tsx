"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LuPhone } from "react-icons/lu";
import { Badge } from "@/components/TagPill";
import { useRef, useMemo, useCallback } from "react";

export function Hero() {
  const router = useRouter();
  const containerRef = useRef<HTMLDivElement>(null);

  // Memoize floating elements to prevent re-renders
  const floatingElements = useMemo(() => [
    {
      className: "absolute top-20 right-20 w-32 h-32 opacity-20",
      duration: 6,
      delay: 0,
      initialY: 0,
      initialX: 0,
    },
    {
      className: "absolute top-40 left-10 w-48 h-48 opacity-15",
      duration: 8,
      delay: 1,
      initialY: 0,
      initialX: 0,
    },
    {
      className: "absolute bottom-32 right-1/4 w-40 h-40 opacity-25",
      duration: 7,
      delay: 2,
      initialY: 0,
      initialX: 0,
    },
  ], []);

  return (
    <Section
      id="hero"
      ariaLabel="Hero section"
      ref={containerRef}
      className="relative overflow-hidden w-full min-h-screen flex items-center bg-gradient-to-b from-custom_neutral-900 via-custom_neutral-800 to-custom_neutral-900"
    >
      {/* Static Background Grid - Using CSS instead of JS */}
      <div 
        className="absolute inset-0 opacity-10"
        style={{
          backgroundImage: `linear-gradient(rgba(53, 170, 255, 0.1) 1px, transparent 1px),
                           linear-gradient(90deg, rgba(53, 170, 255, 0.1) 1px, transparent 1px)`,
          backgroundSize: "50px 50px",
          willChange: "auto",
        }}
      />

      {/* Reduced Floating Elements - Only 2 instead of 3 */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        {floatingElements.slice(0, 2).map((element, index) => (
          <motion.div
            key={index}
            animate={{
              y: [element.initialY, element.initialY - 30, element.initialY],
              x: [element.initialX, element.initialX + 15, element.initialX],
            }}
            transition={{
              duration: element.duration,
              repeat: Infinity,
              ease: "easeInOut",
              delay: element.delay,
            }}
            className={element.className}
            style={{ willChange: "transform" }}
          >
            <div className="w-full h-full bg-primary/30 rounded-full blur-xl"></div>
          </motion.div>
        ))}
      </div>

      <div className="relative z-10 w-full py-20 lg:py-32">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            className="w-full"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <Badge text="Leading Valve Manufacturer & Exporter in India" />
            </motion.div>

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3 }}
              className="text-4xl sm:text-5xl lg:text-7xl font-bold leading-[110%] mb-6 text-white"
            >
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.4 }}
                className="block text-primary mb-2"
              >
                AUTOMATION EXPERTS
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.5 }}
                className="block"
              >
                IN VALVE
              </motion.span>
              <motion.span
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: 0.6 }}
                className="block text-primary"
              >
                MANUFACTURING
              </motion.span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.7 }}
              className="text-lg sm:text-xl text-white/80 leading-relaxed mb-8 pr-0 sm:pr-12"
            >
              Specializing in automation products, we have evolved into one of the
              largest manufacturing units offering comprehensive one-stop solutions
              for all your valve automation needs.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.8 }}
              className="grid grid-cols-2 gap-6 mb-10"
            >
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
                  1000+
                </div>
                <div className="text-sm text-white/70">Product Range</div>
              </div>
              <div className="bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/20">
                <div className="text-4xl sm:text-5xl font-bold text-primary mb-1">
                  6-3000
                </div>
                <div className="text-sm text-white/70">Size Range (mm)</div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.9 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => router.push("/contact")}
                className="bg-primary hover:bg-primary-dark text-white"
              >
                Explore Products
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/contact")}
                icon={<LuPhone size={20} />}
                direction="ltr"
                className="border-white/30 text-white hover:bg-white/10"
              >
                Contact Us
              </Button>
            </motion.div>
          </motion.div>

          {/* Right Content - Simplified Industrial Scene */}
          <motion.div
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="relative w-full h-[500px] lg:h-[700px]"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-transparent rounded-3xl backdrop-blur-sm border border-white/10 overflow-hidden">
              {/* Simplified floating elements */}
              <motion.div
                animate={{
                  y: [0, -20, 0],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                }}
                className="absolute top-10 left-10 w-24 h-24 bg-primary/30 rounded-full blur-2xl"
                style={{ willChange: "transform" }}
              />
              
              {/* Center Content */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center p-8">
                  <div className="text-8xl mb-6 filter drop-shadow-2xl">
                    ⚙️
                  </div>
                  <p className="text-white/90 text-xl font-semibold">
                    Industrial Valve Automation
                  </p>
                  <p className="text-white/60 text-sm mt-2">
                    Precision Engineering Excellence
                  </p>
                </div>
              </div>

              {/* Single decorative ring instead of multiple */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 20,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 border-2 border-primary/20 rounded-full"
                style={{ 
                  width: "80%", 
                  height: "80%", 
                  margin: "10%",
                  willChange: "transform",
                }}
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll Indicator - Simplified */}
      <motion.div
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 1.5, repeat: Infinity }}
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 pointer-events-none"
        style={{ willChange: "transform" }}
      >
        <div className="w-6 h-10 border-2 border-white/50 rounded-full flex items-start justify-center p-2">
          <motion.div
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 1.5, repeat: Infinity }}
            className="w-1.5 h-1.5 bg-white rounded-full"
            style={{ willChange: "transform" }}
          />
        </div>
      </motion.div>
    </Section>
  );
}
