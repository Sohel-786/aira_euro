"use client";

import { motion, AnimatePresence } from "framer-motion";
import Link from "next/link";
import { useEffect } from "react";

const productCategories = [
  {
    title: "PNEUMATIC ACTUATORS",
    products: [
      "Double Acting Actuators",
      "Single Acting Actuators",
      "Rack And Pinion (S.S)",
      "Diaphragm Actuators",
      "Scotch And Yoke Actuators",
    ],
  },
  {
    title: "BALL VALVES",
    products: [
      "V- Knotch Ball Valves",
      "2 Piece Ball Valves",
      "Single Piece Ball Valves",
      "High Pressure Ball Valves",
      "Trunnion Mounted Ball Valves",
      "Multi Port (3 Way/ 4 Way / 5 Way)",
      "Metal To Metal Ball Valves",
      "3 Piece Ball Valves",
      "Wafer Type Ball Valves",
    ],
  },
  {
    title: "BUTTERFLY VALVES",
    products: [
      "Centric Butterfly Valves",
      "Double Offset Butterfly Valves",
      "High Performance (Double Offset Butterfly Valves)",
      "Damper Butterfly Valves",
      "Tripple Offset Butterfly Valves",
    ],
  },
  {
    title: "CONTROL VALVES",
    products: [
      "3 Way Diaphragm Control Valves",
      "Globe Type",
      "Non Return Valve",
      "2 Way Diaphragm Control Valves",
      "Y Type",
      "Needle Valves",
    ],
  },
  {
    title: "ACCESSORIES",
    products: [
      "Connector",
      "Air Filter + Regulator + Lubricator",
      "Limit Switch Box",
      "Namur Solenoid Valves",
      "Pneumatic Positioners",
    ],
  },
  {
    title: "SOLENOID VALVES",
    products: [
      "Pulse Type",
      "Pilot Operated Piston Type Sov",
      "Low Pressure",
      "Direct Acting",
      "Pilot Operated Diaphragm Type SOV",
    ],
  },
  {
    title: "LINED VALVES",
    products: [
      "Lined Control Valves",
      "Lined Diaphragm Valves",
      "Lined Non Return Valves",
      "Lined Butterfly Valves",
      "Lined Plug Valves",
      "Lined Ball Valve",
    ],
  },
  {
    title: "PHARMACEUTICAL VALVES",
    products: [
      "Flush Bottom Ball Valves",
      "Pharmaceutical Butterfly Valves",
      "Pharmaceutical Control Valves",
    ],
  },
  {
    title: "PRV SAFETY VALVES",
    products: [
      "Drum Valves",
      "Pressure Reducing Valves",
      "Safety Valves",
      "Float Valves",
    ],
  },
  {
    title: "PLUG VALVES",
    products: [
      "Metal To Metal Plug Valves",
      "2 Way Plug Valves",
      "3 Way Plug Valves",
      "Jacketed Plug Valve",
    ],
  },
  {
    title: "KNIFE EDGE GATE VALVES",
    products: ["Uni-Directional", "By Directional"],
  },
];

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
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
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
              {productCategories.map((category, categoryIndex) => (
                <motion.div
                  key={category.title}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: categoryIndex * 0.05 }}
                  className="space-y-4"
                >
                  <h3 className="text-base font-bold text-primary uppercase tracking-wide">
                    {category.title}
                  </h3>
                  <ul className="space-y-2">
                    {category.products.map((product, productIndex) => (
                      <li key={productIndex}>
                        <Link
                          href="#"
                          onClick={(e) => {
                            e.preventDefault();
                            onClose();
                          }}
                          className="text-custom_neutral-700 hover:text-primary transition-colors text-sm leading-relaxed block py-1.5 hover:translate-x-1 transition-transform"
                        >
                          {product}
                        </Link>
                      </li>
                    ))}
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
