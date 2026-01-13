"use client";

import { Section } from "@/components/Section";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { LuPhone } from "react-icons/lu";
import { Badge } from "@/components/TagPill";

export function Hero() {
  const router = useRouter();

  return (
    <Section
      id="hero"
      ariaLabel="Hero section"
      className="overflow-hidden w-full relative bg-gradient-to-br from-primary-soft via-white to-primary-soft/30 min-h-[90vh] flex items-center"
    >
      {/* Background Pattern */}
      <div className="absolute inset-0 opacity-10">
        <Image
          src="/assets/images/landing_page/HomePageDesign.svg"
          alt="Background Pattern"
          className="absolute top-0 left-0"
          width={403}
          height={1369}
          priority
        />
        <Image
          src="/assets/images/landing_page/HomePageDesign.svg"
          alt="Background Pattern"
          className="absolute top-0 right-0 scale-x-[-1]"
          width={403}
          height={1369}
        />
      </div>

      <div className="relative z-10 py-20">
        <div className="grid lg:grid-cols-2 lg:items-center gap-12">
          {/* Left Content */}
          <div className="w-full">
            {/* Badge */}
            <Badge text="Leading Valve Manufacturer & Exporter in India" />

            {/* Main Heading */}
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="text-4xl sm:text-5xl lg:text-6xl font-bold leading-[120%] mb-6 text-custom_neutral-900"
            >
              <span className="text-primary">Automation Experts</span>{" "}
              <span className="font-normal">in</span>{" "}
              <span className="font-bold">Valve Manufacturing</span>
            </motion.h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="text-lg sm:text-xl font-medium leading-[150%] text-custom_neutral-600 mb-8 pr-0 sm:pr-12"
            >
              Specializing in automation products, we have evolved into one of the
              largest manufacturing units in the industry, offering comprehensive
              "one-stop solutions" for all your valve automation needs.
            </motion.p>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.3 }}
              className="grid grid-cols-2 gap-4 mb-8"
            >
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  1000+
                </div>
                <div className="text-sm text-custom_neutral-600">
                  Product Range
                </div>
              </div>
              <div>
                <div className="text-3xl sm:text-4xl font-bold text-primary mb-1">
                  6-3000
                </div>
                <div className="text-sm text-custom_neutral-600">
                  Size Range (mm)
                </div>
              </div>
            </motion.div>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button
                variant="default"
                size="lg"
                onClick={() => router.push("/contact")}
              >
                Explore Products
              </Button>

              <Button
                variant="outline"
                size="lg"
                onClick={() => router.push("/contact")}
                icon={<LuPhone size={20} />}
                direction="ltr"
              >
                Contact Us
              </Button>
            </motion.div>
          </div>

          {/* Right Content - Industrial Image Placeholder */}
          <div className="relative w-full h-[500px] lg:h-[600px]">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/20 to-primary-soft/50 rounded-2xl flex items-center justify-center">
              <div className="text-center p-8">
                <div className="text-6xl mb-4">⚙️</div>
                <p className="text-custom_neutral-600 text-lg">
                  Industrial Valve Automation
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}
