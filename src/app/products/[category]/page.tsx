"use client";

import { useState } from "react";
import Link from "next/link";
import { getCategoryBySlug, getProductsByCategory } from "@/constants/products";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowRight, LuChevronRight, LuFilter } from "react-icons/lu";
import ProductFilterSidebar from "@/components/ProductFilterSidebar";

interface PageProps {
  params: { category: string };
}

export default function ProductCategoryPage({ params }: PageProps) {
  const { category: categorySlug } = params;
  const category = getCategoryBySlug(categorySlug);
  const products = getProductsByCategory(categorySlug);
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  if (!category) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-custom_neutral-900 mb-4">
            Category Not Found
          </h1>
          <Link href="/" className="text-primary hover:underline">
            Return to Home
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white overflow-x-hidden max-w-full">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-white py-12 sm:py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-3 sm:px-4 md:px-6 lg:px-24 relative z-10 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl w-full"
          >
            <nav className="flex items-center gap-0.5 sm:gap-1 md:gap-2 text-[10px] sm:text-xs md:text-sm text-custom_neutral-600 mb-4 sm:mb-6 overflow-x-auto scrollbar-hide -mx-3 sm:-mx-4 md:mx-0 px-3 sm:px-4 md:px-0">
              <Link
                href="/"
                className="hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
              >
                Home
              </Link>
              <LuChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-custom_neutral-400 flex-shrink-0" />
              <Link
                href="/products"
                className="hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
              >
                Products
              </Link>
              <LuChevronRight className="w-2.5 h-2.5 sm:w-3 sm:h-3 md:w-4 md:h-4 text-custom_neutral-400 flex-shrink-0" />
              <span
                className="text-custom_neutral-900 font-medium truncate max-w-[100px] sm:max-w-[150px] md:max-w-[200px] lg:max-w-none flex-shrink-0"
                title={category.title}
              >
                {category.title}
              </span>
            </nav>
            <h1 className="text-xl sm:text-2xl md:text-4xl lg:text-5xl xl:text-6xl font-bold text-custom_neutral-900 mb-3 sm:mb-4 break-words leading-tight">
              {category.title}
            </h1>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-custom_neutral-600 mb-6 sm:mb-8 leading-relaxed">
              {category.description}
            </p>
          </motion.div>
        </div>
      </section>

      {/* Products Grid */}
      <section className="py-16 md:py-24 overflow-x-hidden">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 max-w-full">
          {products.length === 0 ? (
            <div className="text-center py-16">
              <p className="text-lg text-custom_neutral-600">
                No products available in this category.
              </p>
            </div>
          ) : (
            <div className="flex flex-col lg:flex-row lg:items-stretch gap-8 min-w-0">
              {/* Filter Sidebar - 30% width on desktop */}
              <div className="lg:w-[30%] lg:flex-shrink-0 min-w-0">
                {/* Mobile: Show overlay and sidebar when open */}
                <AnimatePresence>
                  {isFilterOpen && (
                    <ProductFilterSidebar
                      currentCategorySlug={categorySlug}
                      onClose={() => setIsFilterOpen(false)}
                    />
                  )}
                </AnimatePresence>
                {/* Desktop: Always show sidebar */}
                <div className="hidden lg:block h-full">
                  <ProductFilterSidebar currentCategorySlug={categorySlug} />
                </div>
              </div>

              {/* Products Content - 70% width on desktop */}
              <div className="flex-1 min-w-0 flex flex-col">
                <div className="flex items-center justify-between mb-8">
                  <div className="flex items-center gap-4">
                    <button
                      onClick={() => setIsFilterOpen(!isFilterOpen)}
                      className="lg:hidden p-2 hover:bg-custom_neutral-100 rounded-lg transition-colors"
                      aria-label="Toggle filter"
                    >
                      <LuFilter className="w-5 h-5 text-custom_neutral-600" />
                    </button>
                    <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900">
                      Our {category.title}
                    </h2>
                  </div>
                  <div className="text-sm text-custom_neutral-600">
                    {products.length}{" "}
                    {products.length === 1 ? "Product" : "Products"}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 md:gap-8">
                  {products.map((product, index) => (
                    <motion.div
                      key={product.id}
                      initial={{ opacity: 0, y: 20 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.5, delay: index * 0.1 }}
                    >
                      <Link
                        href={`/products/${categorySlug}/${product.id}`}
                        className="group block bg-white rounded-xl border border-custom_neutral-200 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-xl"
                      >
                        {/* Product Image */}
                        <div className="relative h-64 bg-gradient-to-br from-primary/5 to-primary/10 overflow-hidden">
                          {product.imageUrl ? (
                            <img
                              src={product.imageUrl}
                              alt={product.name}
                              className="w-full h-full object-contain p-4 transition-transform duration-300 group-hover:scale-105"
                              onError={(e) => {
                                // Fallback to icon if image fails to load
                                const target = e.currentTarget;
                                target.style.display = "none";
                                const parent = target.parentElement;
                                if (parent) {
                                  const fallback =
                                    document.createElement("div");
                                  fallback.className =
                                    "absolute inset-0 flex items-center justify-center";
                                  fallback.innerHTML = `
                                  <div class="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                                    <svg class="w-12 h-12 text-primary opacity-50" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                      <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 4v16m8-8H4"></path>
                                    </svg>
                                  </div>
                                `;
                                  parent.appendChild(fallback);
                                }
                              }}
                            />
                          ) : (
                            <div className="absolute inset-0 flex items-center justify-center">
                              <div className="w-32 h-32 bg-primary/10 rounded-full flex items-center justify-center">
                                <LuArrowRight className="w-12 h-12 text-primary opacity-50 group-hover:opacity-100 group-hover:scale-110 transition-all duration-300" />
                              </div>
                            </div>
                          )}
                          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                        </div>

                        {/* Product Info */}
                        <div className="p-6">
                          <h3 className="text-xl font-bold text-custom_neutral-900 mb-3 group-hover:text-primary transition-colors">
                            {product.name}
                          </h3>
                          <p className="text-custom_neutral-600 mb-4 line-clamp-2 leading-relaxed">
                            {product.description}
                          </p>

                          {/* Specifications Preview */}
                          {product.specifications && (
                            <div className="flex flex-wrap gap-2 mb-4">
                              {product.specifications.pressureRating && (
                                <span className="px-3 py-1 bg-primary/10 text-primary text-xs font-medium rounded-full">
                                  {product.specifications.pressureRating}
                                </span>
                              )}
                              {product.specifications.material && (
                                <span className="px-3 py-1 bg-custom_neutral-100 text-custom_neutral-700 text-xs font-medium rounded-full">
                                  {
                                    product.specifications.material.split(
                                      ",",
                                    )[0]
                                  }
                                </span>
                              )}
                            </div>
                          )}

                          {/* View Details Link */}
                          <div className="flex items-center text-primary font-semibold group-hover:gap-3 transition-all duration-300">
                            <span>View Details</span>
                            <LuArrowRight className="w-5 h-5 ml-2 group-hover:translate-x-1 transition-transform" />
                          </div>
                        </div>
                      </Link>
                    </motion.div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Choosing the Right Product?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our experts are here to help you find the perfect solution for
              your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-primary-soft transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="tel:+919099477256"
                className="px-8 py-3 bg-primary-dark text-white font-semibold rounded-lg border border-white/20 hover:bg-primary/80 transition-colors"
              >
                Call Now: +91 90994 77256
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
