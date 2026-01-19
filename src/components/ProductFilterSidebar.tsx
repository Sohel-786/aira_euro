"use client";

import { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { 
  LuChevronRight, 
  LuFilter,
  LuX,
  LuSettings2
} from "react-icons/lu";
import { categories, Category } from "@/constants/products";
import { cn } from "@/lib/utils";

interface ProductFilterSidebarProps {
  currentCategorySlug?: string;
  currentProductId?: string;
  onClose?: () => void;
}

export default function ProductFilterSidebar({ 
  currentCategorySlug,
  currentProductId,
  onClose 
}: ProductFilterSidebarProps) {
  const [expandedCategories, setExpandedCategories] = useState<Set<string>>(
    new Set(currentCategorySlug ? [currentCategorySlug] : [])
  );

  const toggleCategory = (categorySlug: string) => {
    setExpandedCategories((prev) => {
      const newSet = new Set(prev);
      if (newSet.has(categorySlug)) {
        newSet.delete(categorySlug);
      } else {
        newSet.add(categorySlug);
      }
      return newSet;
    });
  };

  const isExpanded = (categorySlug: string) => expandedCategories.has(categorySlug);
  const isActiveCategory = (categorySlug: string) => categorySlug === currentCategorySlug;
  const isActiveProduct = (productId: string) => productId === currentProductId;

  return (
    <>
      {/* Mobile Overlay */}
      {onClose && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40 lg:hidden"
        />
      )}

      {/* Sidebar */}
      <motion.aside
        initial={onClose ? { x: -320 } : undefined}
        animate={{ x: 0 }}
        exit={onClose ? { x: -320 } : undefined}
        transition={{ type: "spring", damping: 25, stiffness: 200 }}
        className={cn(
          "bg-white border border-custom_neutral-200 rounded-xl",
          "w-full",
          "overflow-x-hidden overflow-y-auto",
          "scrollbar-thin scrollbar-thumb-primary/20 scrollbar-track-transparent",
          onClose 
            ? "fixed top-0 left-0 h-screen w-[320px] max-w-[85vw] z-50 shadow-xl border-r border-custom_neutral-200 rounded-none"
            : "lg:sticky lg:top-24 lg:h-full"
        )}
      >
        <div className="p-6 space-y-6 min-w-0">
          {/* Header */}
          <div className="flex items-center justify-between min-w-0">
            <div className="flex items-center gap-3 min-w-0 flex-shrink">
              <div className="p-2 bg-primary/10 rounded-lg">
                <LuFilter className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h2 className="text-lg font-bold text-custom_neutral-900">
                  Product Categories
                </h2>
                <p className="text-xs text-custom_neutral-600">
                  Browse by category
                </p>
              </div>
            </div>
            {onClose && (
              <button
                onClick={onClose}
                className="lg:hidden p-2 hover:bg-custom_neutral-100 rounded-lg transition-colors"
                aria-label="Close filter"
              >
                <LuX className="w-5 h-5 text-custom_neutral-600" />
              </button>
            )}
          </div>

          {/* Categories List */}
          <div className="space-y-2">
            {categories.map((category, index) => {
              const expanded = isExpanded(category.slug);
              const active = isActiveCategory(category.slug);
              const hasProducts = category.products.length > 0;

              return (
                <div
                  key={category.slug}
                  className={cn(
                    "rounded-xl border transition-all duration-200",
                    active
                      ? "border-primary bg-primary/5 shadow-sm"
                      : "border-custom_neutral-200 bg-white hover:border-primary/30 hover:shadow-sm"
                  )}
                >
                  {/* Category Header */}
                  <div className="flex items-center gap-2 min-w-0">
                    <Link
                      href={`/products/${category.slug}`}
                      className={cn(
                        "flex-1 flex items-center gap-3 p-4 text-left transition-colors rounded-l-xl min-w-0",
                        active && "bg-primary/5"
                      )}
                    >
                      {/* Category Icon */}
                      <div
                        className={cn(
                          "p-2 rounded-lg transition-colors flex-shrink-0",
                          active
                            ? "bg-primary text-white"
                            : "bg-custom_neutral-100 text-custom_neutral-600"
                        )}
                      >
                        <LuSettings2 className="w-4 h-4" />
                      </div>

                      {/* Category Info */}
                      <div className="flex-1 min-w-0 overflow-hidden">
                        <h3
                          className={cn(
                            "font-semibold text-sm transition-colors truncate",
                            active ? "text-primary" : "text-custom_neutral-900"
                          )}
                        >
                          {category.title}
                        </h3>
                        {hasProducts && (
                          <p className="text-xs text-custom_neutral-500 mt-0.5">
                            {category.products.length}{" "}
                            {category.products.length === 1 ? "product" : "products"}
                          </p>
                        )}
                      </div>
                    </Link>

                    {/* Expand/Collapse Button */}
                    {hasProducts && (
                      <button
                        onClick={() => toggleCategory(category.slug)}
                        className={cn(
                          "p-4 flex-shrink-0 rounded-r-xl transition-colors",
                          active && "bg-primary/5"
                        )}
                        aria-label={expanded ? "Collapse" : "Expand"}
                      >
                        <motion.div
                          animate={{ rotate: expanded ? 90 : 0 }}
                          transition={{ duration: 0.2 }}
                        >
                          <LuChevronRight
                            className={cn(
                              "w-5 h-5 transition-colors",
                              active ? "text-primary" : "text-custom_neutral-400"
                            )}
                          />
                        </motion.div>
                      </button>
                    )}
                  </div>

                  {/* Products Subcategories */}
                  <AnimatePresence>
                    {expanded && hasProducts && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="px-4 pb-3 space-y-1">
                          {category.products.map((product) => {
                            const isActive = isActiveProduct(product.id);
                            return (
                              <Link
                                key={product.id}
                                href={`/products/${category.slug}/${product.id}`}
                                className={cn(
                                  "flex items-center gap-3 px-3 py-2.5 rounded-lg",
                                  "text-sm transition-all duration-200",
                                  "hover:bg-primary/5 hover:translate-x-1",
                                  isActive
                                    ? "bg-primary/10 text-primary font-medium border-l-2 border-primary"
                                    : "text-custom_neutral-700 hover:text-primary"
                                )}
                              >
                                <div
                                  className={cn(
                                    "w-1.5 h-1.5 rounded-full transition-colors flex-shrink-0",
                                    isActive
                                      ? "bg-primary"
                                      : "bg-custom_neutral-300"
                                  )}
                                />
                                <span className="flex-1 truncate min-w-0">
                                  {product.name}
                                </span>
                              </Link>
                            );
                          })}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>

          {/* Quick Links */}
          <div className="pt-4 border-t border-custom_neutral-200">
            <Link
              href="/products"
              className="flex items-center gap-2 px-4 py-2.5 text-sm font-medium text-primary hover:bg-primary/5 rounded-lg transition-colors"
            >
              <LuSettings2 className="w-4 h-4" />
              <span>View All Products</span>
            </Link>
          </div>
        </div>
      </motion.aside>
    </>
  );
}
