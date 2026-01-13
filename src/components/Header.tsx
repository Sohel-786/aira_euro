"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPhone, LuMail } from "react-icons/lu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ProductDropdown } from "./ProductDropdown";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen || openDropdown === "products") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMenuOpen, openDropdown]);

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const productsSubmenu = [
    { label: "Pneumatic Actuators", href: "/products/actuators" },
    { label: "Ball Valves", href: "/products/ball-valves" },
    { label: "Butterfly Valves", href: "/products/butterfly-valves" },
    { label: "Control Valves", href: "/products/control-valves" },
    { label: "Solenoid Valves", href: "/products/solenoid-valves" },
    { label: "Plug Valves", href: "/products/plug-valves" },
  ];

  return (
    <>
      {/* Top Bar */}
      <div className="bg-custom_neutral-900 text-white px-4 sm:px-6 lg:px-24">
        <div className="h-[50px] mx-auto flex flex-col sm:flex-row items-center justify-between gap-2 text-xs sm:text-sm font-medium leading-[150%]">
          <div className="flex items-center gap-4 sm:gap-8">
            <a
              href="mailto:mkt@airaindia.com"
              className="hover:text-primary-light transition-colors flex items-center justify-center gap-1"
            >
              <LuMail className="w-4 h-4" />
              mkt@airaindia.com
            </a>
            <a
              href="tel:+919099477256"
              className="hover:text-primary-light transition-colors flex items-center justify-center gap-1"
            >
              <LuPhone className="w-4 h-4" />
              +91 90994 77256
            </a>
          </div>

          <div className="flex justify-center items-center gap-4 text-xs">
            <p>Working Days: Monday to Saturday</p>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <header className="bg-white shadow-sm sticky top-0 z-50 px-4 sm:px-6 lg:px-24 py-4">
        <nav className="mx-auto">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2">
              <div className="bg-primary rounded-lg px-3 py-2 border border-primary-light">
                <span className="text-white font-bold text-xl">aira</span>
              </div>
              <span className="text-custom_neutral-900 font-semibold text-xs sm:text-sm hidden sm:block">
                VALVE AUTOMATION
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center gap-8">
              <Link
                href="/"
                className="text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative"
                onMouseEnter={() => setOpenDropdown("products")}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
                >
                  Products
                  <span className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                    openDropdown === "products" ? "w-full" : "w-0 group-hover:w-full"
                  }`}></span>
                  <svg
                    className={`w-4 h-4 transition-transform ${
                      openDropdown === "products" ? "rotate-180" : ""
                    }`}
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M19 9l-7 7-7-7"
                    />
                  </svg>
                </button>
              </div>

              <Link
                href="/facilities"
                className="text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
              >
                Facilities
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/contact"
                className="text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
              >
                Contact Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
            </div>

            {/* Product Dropdown Full Screen */}
            <ProductDropdown
              isOpen={openDropdown === "products"}
              onClose={() => setOpenDropdown(null)}
              onMouseEnter={() => setOpenDropdown("products")}
              onMouseLeave={() => setOpenDropdown(null)}
            />

            {/* Right Side - Phone & CTA */}
            <div className="hidden lg:flex items-center gap-6">
              <div className="flex justify-center items-center gap-2">
                <a
                  href="tel:+919099477256"
                  className="flex items-center gap-2 text-sm font-medium text-custom_neutral-900"
                >
                  <div className="w-[37px] h-[37px] rounded-full bg-primary flex justify-center items-center hover:scale-105 transition-all duration-300">
                    <LuPhone size={14.5} className="text-white" />
                  </div>
                </a>
                <div className="flex flex-col justify-center items-center text-custom_neutral-500">
                  <p className="text-xs font-medium leading-[150%]">
                    Have Any Questions?
                  </p>
                  <p className="text-base font-bold leading-[150%] text-custom_neutral-900">
                    +91 90994 77256
                  </p>
                </div>
              </div>
              <Button 
                variant="default" 
                onClick={() => router.push("/contact")}
                className="border border-primary-light"
              >
                Get A Quote
              </Button>
            </div>

            {/* Mobile Menu Button */}
            <button
              type="button"
              className="lg:hidden p-2 text-custom_neutral-900"
              onClick={() => setIsMenuOpen(true)}
              aria-label="Toggle menu"
            >
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Sidebar */}
      <AnimatePresence>
        {isMenuOpen && (
          <>
            <motion.aside
              initial={{ x: "-100%" }}
              animate={{ x: 0 }}
              exit={{ x: "-100%" }}
              transition={{
                type: "tween",
                duration: 0.3,
                ease: [0.4, 0, 0.2, 1],
              }}
              className="fixed inset-0 w-full h-full bg-white z-[101] lg:hidden overflow-y-auto"
            >
              <div className="flex flex-col h-full bg-white">
                {/* Header with Logo and Close Button */}
                <div className="flex items-center justify-between p-6 border-b border-primary-soft/30">
                  <Link
                    href="/"
                    className="flex items-center gap-3"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    <div className="bg-primary rounded-lg px-3 py-2">
                      <span className="text-white font-bold text-xl">aira</span>
                    </div>
                  </Link>
                  <button
                    type="button"
                    onClick={() => setIsMenuOpen(false)}
                    className="h-10 w-10 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary-dark transition-colors"
                    aria-label="Close menu"
                  >
                    <svg
                      className="w-5 h-5"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2.5}
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </button>
                </div>

                {/* Navigation Links */}
                <nav className="flex-1 px-6 py-6">
                  <div className="flex flex-col gap-0 text-base font-bold">
                    <Link
                      href="/"
                      className="px-4 py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Home
                    </Link>
                    <Link
                      href="/about"
                      className="px-4 py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      About Us
                    </Link>

                    {/* Products with Submenu */}
                    <div>
                      <button
                        type="button"
                        onClick={() => toggleSubmenu("products")}
                        className="w-full px-4 py-3 hover:text-primary transition-colors flex items-center justify-between"
                      >
                        <span>Products</span>
                        <motion.svg
                          animate={{
                            rotate: expandedMenu === "products" ? 180 : 0,
                          }}
                          transition={{ duration: 0.2 }}
                          className="w-5 h-5 text-custom_neutral-900"
                          fill="none"
                          stroke="currentColor"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M19 9l-7 7-7-7"
                          />
                        </motion.svg>
                      </button>
                      <AnimatePresence>
                        {expandedMenu === "products" && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="overflow-hidden"
                          >
                            <div className="pl-4 space-y-0">
                              {productsSubmenu.map((item, index) => (
                                <Link
                                  key={index}
                                  href={item.href}
                                  className="block px-4 py-3 text-sm font-normal text-custom_neutral-600 hover:text-primary transition-colors border-b border-primary-soft/50 last:border-0"
                                  onClick={() => setIsMenuOpen(false)}
                                >
                                  {item.label}
                                </Link>
                              ))}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>

                    <Link
                      href="/facilities"
                      className="px-4 py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Facilities
                    </Link>
                    <Link
                      href="/contact"
                      className="px-4 py-3"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      Contact
                    </Link>
                  </div>
                </nav>

                {/* CTA Button */}
                <div className="px-6 py-6 border-t border-primary-soft/30">
                  <Link
                    href="/contact"
                    className="block w-full bg-primary text-white px-6 py-4 rounded-lg font-semibold text-center hover:bg-primary-dark transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    Get A Quote
                  </Link>
                </div>
              </div>
            </motion.aside>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
