"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { LuPhone, LuMail } from "react-icons/lu";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";
import { ProductDropdown } from "./ProductDropdown";
import { categories } from "@/constants/products";

export function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [expandedMenu, setExpandedMenu] = useState<string | null>(null);
  const [expandedCategory, setExpandedCategory] = useState<string | null>(null);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);
  const closeTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const [headerHeight, setHeaderHeight] = useState(115); // Default: top bar (50px) + main nav (~80px)
  const [showTopBar, setShowTopBar] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  const router = useRouter();

  useEffect(() => {
    if (isMenuOpen || openDropdown === "products") {
      // Prevent body scroll when menu or dropdown is open
      const scrollY = window.scrollY;
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.left = "0";
      document.body.style.right = "0";
      document.body.style.width = "100%";
      document.body.style.overflow = "hidden";
      
      // Store scroll position for restoration
      document.body.setAttribute('data-scroll-y', scrollY.toString());
    } else {
      // Restore body scroll
      const scrollY = document.body.getAttribute('data-scroll-y');
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.removeAttribute('data-scroll-y');
      
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
      }
    }
    return () => {
      // Cleanup: restore scroll on unmount
      const scrollY = document.body.getAttribute('data-scroll-y');
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.left = "";
      document.body.style.right = "";
      document.body.style.width = "";
      document.body.style.overflow = "";
      document.body.removeAttribute('data-scroll-y');
      if (scrollY) {
        window.scrollTo(0, parseInt(scrollY, 10));
      }
    };
  }, [isMenuOpen, openDropdown]);

  // Track scroll position to hide/show topbar and adjust header height for dropdown positioning
  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      // Hide topbar when scrolling down past 50px OR when dropdown is open, show when at top and dropdown is closed
      if (currentScrollY > 50 || openDropdown === "products") {
        setShowTopBar(false);
        setHeaderHeight(58); // Only main nav visible (fixed header)
      } else {
        setShowTopBar(true);
        setHeaderHeight(113); // Top bar (50px) + main nav (80px) visible
      }
      
      setLastScrollY(currentScrollY);
    };

    // Set initial state
    handleScroll();

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [openDropdown]);

  const toggleSubmenu = (menu: string) => {
    setExpandedMenu(expandedMenu === menu ? null : menu);
  };

  const toggleCategory = (categorySlug: string) => {
    setExpandedCategory(
      expandedCategory === categorySlug ? null : categorySlug,
    );
  };

  // Generate products submenu from categories
  const productsSubmenu = categories.map((category) => ({
    label: category.title,
    href: `/products/${category.slug}`,
  }));

  // Helper function to get product ID from product name and category
  const getProductId = (
    productName: string,
    categorySlug: string,
  ): string | null => {
    const category = categories.find((cat) => cat.slug === categorySlug);
    if (!category) return null;

    const product = category.products.find((prod) => prod.name === productName);
    return product ? product.id : null;
  };

  return (
    <>
      {/* Top Bar - Hidden when scrolling down or when dropdown is open, visible at top */}
      <motion.div
        initial={{ y: 0, opacity: 1 }}
        animate={{ 
          y: showTopBar && openDropdown !== "products" ? 0 : -50, 
          opacity: showTopBar && openDropdown !== "products" ? 1 : 0 
        }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="bg-custom_neutral-900 text-white px-3 sm:px-4 md:px-6 lg:px-24 fixed top-0 left-0 right-0 z-[106]"
        style={{ pointerEvents: showTopBar && openDropdown !== "products" ? "auto" : "none" }}
      >
        <div className="min-h-[44px] sm:h-[50px] mx-auto flex flex-col sm:flex-row items-center justify-center sm:justify-between gap-1.5 sm:gap-2 py-1.5 sm:py-0">
          {/* Contact Info - Left Side */}
          <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2.5 sm:gap-4 md:gap-6 text-[10px] sm:text-xs md:text-sm font-medium leading-tight sm:leading-[150%]">
            <a
              href="mailto:mkt@airaindia.com"
              className="hover:text-primary-light transition-colors flex items-center gap-1.5 sm:gap-2"
            >
              <LuMail className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="hidden sm:inline whitespace-nowrap">mkt@airaindia.com</span>
              <span className="sm:hidden whitespace-nowrap text-[10px]">Email</span>
            </a>
            <a
              href="tel:+919099477256"
              className="hover:text-primary-light transition-colors flex items-center gap-1.5 sm:gap-2"
            >
              <LuPhone className="w-3.5 h-3.5 sm:w-4 sm:h-4 flex-shrink-0" />
              <span className="text-[10px] sm:text-xs whitespace-nowrap">+91 90994 77256</span>
            </a>
          </div>

          {/* Working Days - Right Side */}
          <div className="flex justify-center items-center text-[10px] sm:text-xs font-medium leading-tight sm:leading-[150%]">
            <p className="whitespace-nowrap">
              <span className="hidden sm:inline">Working Days: </span>
              <span>Mon-Sat</span>
            </p>
          </div>
        </div>
      </motion.div>

      {/* Main Navigation - Fixed on top, always visible */}
      <header 
        className="bg-white fixed left-0 right-0 z-[105] px-4 sm:px-6 shadow-sm"
        style={{
          top: showTopBar && openDropdown !== "products" ? "50px" : "0px",
          transition: "top 0.3s ease-in-out"
        }}
      >
        <nav className="mx-auto">
          <div className="flex justify-between h-full">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-2 lg:px-24 py-4">
              <div className="bg-primary rounded-lg px-3 py-2 border border-primary-light">
                <span className="text-white font-bold text-xl">aira</span>
              </div>
              <span className="text-custom_neutral-900 font-semibold text-xs sm:text-sm hidden sm:block">
                VALVE AUTOMATION
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden lg:flex items-center justify-center gap-8">
              <Link
                href="/"
                className="text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
              >
                Home
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>
              <Link
                href="/about"
                className="text-base font-bold leading-[150%] hover:text-primary transition-colors relative group z-[200]"
              >
                About Us
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"></span>
              </Link>

              {/* Products Dropdown */}
              <div
                className="relative py-3"
                onMouseEnter={() => {
                  if (closeTimeoutRef.current) {
                    clearTimeout(closeTimeoutRef.current);
                    closeTimeoutRef.current = null;
                  }
                  setOpenDropdown("products");
                }}
                onMouseLeave={() => {
                  closeTimeoutRef.current = setTimeout(() => {
                    setOpenDropdown(null);
                  }, 100);
                }}
              >
                <button
                  type="button"
                  className="flex items-center gap-1 text-base font-bold leading-[150%] hover:text-primary transition-colors relative group"
                >
                  Products
                  <span
                    className={`absolute bottom-0 left-0 h-0.5 bg-primary transition-all duration-300 ${
                      openDropdown === "products"
                        ? "w-full"
                        : "w-0 group-hover:w-full"
                    }`}
                  ></span>
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
              headerHeight={headerHeight}
              onClose={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setOpenDropdown(null);
              }}
              onMouseEnter={() => {
                if (closeTimeoutRef.current) {
                  clearTimeout(closeTimeoutRef.current);
                  closeTimeoutRef.current = null;
                }
                setOpenDropdown("products");
              }}
              onMouseLeave={() => {
                closeTimeoutRef.current = setTimeout(() => {
                  setOpenDropdown(null);
                }, 100);
              }}
            />

            {/* Right Side - Phone & CTA */}
            <div className="hidden lg:flex items-center gap-6 lg:px-24 py-4">
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
              className="fixed inset-0 w-full h-full bg-white z-[200] lg:hidden overflow-y-auto"
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
                              {categories.map((category) => {
                                const isCategoryExpanded =
                                  expandedCategory === category.slug;
                                return (
                                  <div
                                    key={category.slug}
                                    className="border-b border-primary-soft/50 last:border-0"
                                  >
                                    {/* Category Header - Clickable Link with Expand Button */}
                                    <div className="flex items-center">
                                      <Link
                                        href={`/products/${category.slug}`}
                                        className="flex-1 px-4 py-3 text-sm font-semibold text-custom_neutral-900 hover:text-primary transition-colors"
                                        onClick={(e) => {
                                          // Don't close menu if clicking expand button area
                                          if (
                                            (e.target as HTMLElement).closest(
                                              ".expand-button",
                                            )
                                          ) {
                                            e.preventDefault();
                                            return;
                                          }
                                          setIsMenuOpen(false);
                                        }}
                                      >
                                        {category.title}
                                      </Link>
                                      <button
                                        type="button"
                                        onClick={(e) => {
                                          e.stopPropagation();
                                          toggleCategory(category.slug);
                                        }}
                                        className="expand-button px-4 py-3 flex items-center justify-center hover:bg-primary-soft/20 transition-colors"
                                        aria-label={
                                          isCategoryExpanded
                                            ? "Collapse"
                                            : "Expand"
                                        }
                                      >
                                        <motion.svg
                                          animate={{
                                            rotate: isCategoryExpanded
                                              ? 180
                                              : 0,
                                          }}
                                          transition={{ duration: 0.2 }}
                                          className="w-4 h-4 text-custom_neutral-600"
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
                                    </div>

                                    {/* Products List - Expandable */}
                                    <AnimatePresence>
                                      {isCategoryExpanded && (
                                        <motion.div
                                          initial={{ height: 0, opacity: 0 }}
                                          animate={{
                                            height: "auto",
                                            opacity: 1,
                                          }}
                                          exit={{ height: 0, opacity: 0 }}
                                          transition={{ duration: 0.2 }}
                                          className="overflow-hidden"
                                        >
                                          <div className="pl-6 space-y-0">
                                            {category.products.map(
                                              (product) => {
                                                const productHref = `/products/${category.slug}/${product.id}`;
                                                return (
                                                  <Link
                                                    key={product.id}
                                                    href={productHref}
                                                    className="block px-4 py-2.5 text-sm font-normal text-custom_neutral-600 hover:text-primary transition-colors border-b border-primary-soft/30 last:border-0"
                                                    onClick={() =>
                                                      setIsMenuOpen(false)
                                                    }
                                                  >
                                                    {product.name}
                                                  </Link>
                                                );
                                              },
                                            )}
                                          </div>
                                        </motion.div>
                                      )}
                                    </AnimatePresence>
                                  </div>
                                );
                              })}
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
                      Contact Us
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

      {/* Spacer to prevent content from being hidden behind fixed header */}
      <motion.div
        animate={{ height: showTopBar && openDropdown !== "products" ? "130px" : "80px" }}
        transition={{ duration: 0.3, ease: "easeInOut" }}
        className="w-full"
        aria-hidden="true"
      />
    </>
  );
}
