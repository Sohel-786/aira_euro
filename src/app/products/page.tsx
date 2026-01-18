"use client";

import Link from "next/link";
import { categories } from "@/constants/products";
import { motion } from "framer-motion";
import { LuArrowRight } from "react-icons/lu";

export default function ProductsPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-2 text-sm text-custom_neutral-600 mb-6">
              <Link href="/" className="hover:text-primary transition-colors">
                Home
              </Link>
              <span>/</span>
              <span className="text-custom_neutral-900 font-medium">Products</span>
            </nav>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-custom_neutral-900 mb-4">
              Our Product Range
            </h1>
            <p className="text-lg md:text-xl text-custom_neutral-600 mb-8 leading-relaxed">
              Explore our comprehensive range of industrial valves, actuators, and automation solutions designed for reliability and performance.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categories Grid */}
      <section className="py-16 md:py-24">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {categories.map((category, index) => (
              <motion.div
                key={category.key}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
              >
                <Link
                  href={`/products/${category.slug}`}
                  className="group block bg-white rounded-xl border-2 border-custom_neutral-200 hover:border-primary overflow-hidden transition-all duration-300 hover:shadow-xl h-full"
                >
                  {/* Category Header */}
                  <div className="bg-gradient-to-br from-primary/10 to-primary/5 p-6">
                    <h3 className="text-xl md:text-2xl font-bold text-custom_neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {category.title}
                    </h3>
                    <p className="text-custom_neutral-600 text-sm mb-4 line-clamp-2">
                      {category.description}
                    </p>
                    <div className="flex items-center justify-between">
                      <span className="text-sm text-custom_neutral-500">
                        {category.products.length} {category.products.length === 1 ? "Product" : "Products"}
                      </span>
                      <LuArrowRight className="w-5 h-5 text-primary group-hover:translate-x-2 transition-transform" />
                    </div>
                  </div>

                  {/* Product Preview List */}
                  <div className="p-6">
                    <ul className="space-y-2">
                      {category.products.slice(0, 4).map((product, productIndex) => (
                        <li
                          key={productIndex}
                          className="text-sm text-custom_neutral-600 flex items-center gap-2"
                        >
                          <div className="w-1.5 h-1.5 bg-primary rounded-full flex-shrink-0"></div>
                          <span className="line-clamp-1">{product.name}</span>
                        </li>
                      ))}
                      {category.products.length > 4 && (
                        <li className="text-sm text-primary font-medium pt-2">
                          +{category.products.length - 4} more products
                        </li>
                      )}
                    </ul>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Need Help Finding the Right Product?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Our technical experts are here to help you select the perfect solution for your application.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-primary-soft transition-colors"
              >
                Contact Us
              </Link>
              <a
                href="tel:+919099477256"
                className="px-8 py-3 bg-primary-dark text-white font-semibold rounded-lg border border-white/20 hover:bg-primary/80 transition-colors"
              >
                Call: +91 90994 77256
              </a>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
