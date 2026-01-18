"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";
import { categories } from "@/constants/products";

// Helper function to generate category slug from title
const getCategorySlug = (title: string): string => {
  const categoryMap: Record<string, string> = {
    "PNEUMATIC ACTUATORS": "pneumatic-actuators",
    "BALL VALVES": "ball-valves",
    "BUTTERFLY VALVES": "butterfly-valves",
    "CONTROL VALVES": "control-valves",
    ACCESSORIES: "accessories",
    "SOLENOID VALVES": "solenoid-valves",
    "LINED VALVES": "lined-valves",
    "PHARMACEUTICAL VALVES": "pharmaceutical-valves",
    "PRV SAFETY VALVES": "prv-safety-valves",
    "PLUG VALVES": "plug-valves",
    "KNIFE EDGE GATE VALVES": "knife-edge-gate-valves",
  };
  return (
    categoryMap[title] ||
    title.toLowerCase().replace(/\s+/g, "-").replace(/[()]/g, "")
  );
};

// Use categories directly from constants instead of hardcoded array
// Helper function to get product ID from product name - now uses actual product data
const getProductId = (
  productName: string,
  categorySlug: string,
): string | null => {
  const category = categories.find((cat) => cat.slug === categorySlug);
  if (!category) return null;

  // Find product by name in the category
  const product = category.products.find((prod) => prod.name === productName);
  return product ? product.id : null;
};

interface ProductDropdownProps {
  isOpen: boolean;
  headerHeight: number;
  onClose: () => void;
  onMouseEnter?: () => void;
  onMouseLeave?: () => void;
}

export function ProductDropdown({
  isOpen,
  headerHeight,
  onClose,
  onMouseEnter,
  onMouseLeave,
}: ProductDropdownProps) {
  useEffect(() => {
    if (isOpen) {
      // Prevent body scroll
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 0 }}
          transition={{ duration: 0.3, ease: "easeOut" }}
          className="product-dropdown fixed bg-white z-[101] overflow-y-auto"
          style={{
            top: `${headerHeight}px`,
            left: 0,
            right: 0,
            bottom: 0,
            width: "100%",
          }}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
        >
          {/* Content - Clean layout matching reference image */}
          <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 lg:px-24 py-12">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">
              {categories.map((category, categoryIndex) => (
                <motion.div
                  key={category.slug}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.05 }}
                  className="space-y-4"
                >
                  <Link
                    href={`/products/${category.slug}`}
                    onClick={() => onClose()}
                    className="block mb-4"
                  >
                    <h3 className="text-base font-bold text-primary uppercase tracking-wide hover:text-primary-dark transition-colors">
                      {category.title}
                    </h3>
                  </Link>
                  <ul className="space-y-2">
                    {category.products.map((product, productIndex) => {
                      const href = `/products/${category.slug}/${product.id}`;

                      return (
                        <li key={productIndex}>
                          <Link
                            href={href}
                            onClick={() => onClose()}
                            className="text-custom_neutral-700 hover:text-primary transition-colors text-sm leading-relaxed block py-1.5 hover:translate-x-1 transition-transform"
                          >
                            {product.name}
                          </Link>
                        </li>
                      );
                    })}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
