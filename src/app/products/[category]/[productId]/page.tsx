"use client";

import React, { useState } from "react";
import Link from "next/link";
import { getCategoryBySlug, getProductById, getProductsByCategory } from "@/constants/products";
import { motion, AnimatePresence } from "framer-motion";
import { LuArrowLeft, LuCheck, LuPhone, LuMail, LuChevronDown, LuChevronUp, LuDownload, LuFileText, LuPlay, LuArrowRight, LuChevronRight } from "react-icons/lu";
import { Button } from "@/components/ui/button";
import Product3DViewer from "@/components/Product3DViewer";

interface PageProps {
  params: { category: string; productId: string };
}

interface InquiryFormData {
  name: string;
  company: string;
  email: string;
  phone: string;
  message: string;
  productInterest: string;
}

export default function ProductDetailPage({ params }: PageProps) {
  const { category: categorySlug, productId } = params;
  const category = getCategoryBySlug(categorySlug);
  const product = getProductById(categorySlug, productId);
  const relatedProducts = getProductsByCategory(categorySlug).filter(p => p.id !== productId).slice(0, 3);
  
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(null);
  const [formData, setFormData] = useState<InquiryFormData>({
    name: "",
    company: "",
    email: "",
    phone: "",
    message: "",
    productInterest: product?.name || ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<"idle" | "success" | "error">("idle");

  if (!category || !product) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-4xl font-bold text-custom_neutral-900 mb-4">Product Not Found</h1>
          <Link href={`/products/${categorySlug}`} className="text-primary hover:underline">
            Return to {category?.title || "Category"}
          </Link>
        </div>
      </div>
    );
  }

  const handleFaqToggle = (index: number) => {
    setOpenFaqIndex(openFaqIndex === index ? null : index);
  };

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setSubmitStatus("idle");
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus("success");
      setFormData({
        name: "",
        company: "",
        email: "",
        phone: "",
        message: "",
        productInterest: product.name
      });
      setTimeout(() => setSubmitStatus("idle"), 5000);
    }, 1000);
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="bg-custom_neutral-50 py-3 md:py-4 border-b border-custom_neutral-200">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-custom_neutral-600 overflow-x-auto scrollbar-hide">
            <Link 
              href="/" 
              className="hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
            >
              Home
            </Link>
            <LuChevronRight className="w-3 h-3 md:w-4 md:h-4 text-custom_neutral-400 flex-shrink-0" />
            <Link 
              href="/products" 
              className="hover:text-primary transition-colors whitespace-nowrap flex-shrink-0"
            >
              Products
            </Link>
            <LuChevronRight className="w-3 h-3 md:w-4 md:h-4 text-custom_neutral-400 flex-shrink-0" />
            <Link 
              href={`/products/${categorySlug}`} 
              className="hover:text-primary transition-colors whitespace-nowrap flex-shrink-0 max-w-[120px] md:max-w-none truncate"
              title={category.title}
            >
              {category.title}
            </Link>
            <LuChevronRight className="w-3 h-3 md:w-4 md:h-4 text-custom_neutral-400 flex-shrink-0" />
            <span 
              className="text-custom_neutral-900 font-medium truncate max-w-[150px] md:max-w-none flex-shrink-0" 
              title={product.name}
            >
              {product.name}
            </span>
          </nav>
        </div>
      </section>

      {/* Hero Section */}
      <section className="py-12 md:py-16 lg:py-20 bg-gradient-to-br from-custom_neutral-50 via-white to-custom_neutral-50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <Link
            href={`/products/${categorySlug}`}
            className="inline-flex items-center text-primary hover:text-primary-dark mb-8 transition-colors font-medium"
          >
            <LuArrowLeft className="w-5 h-5 mr-2" />
            Back to {category.title}
          </Link>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
            {/* Product Info - Left Side */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="flex flex-col"
            >
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-custom_neutral-900 mb-6 leading-tight">
                {product.name}
              </h1>

              <p className="text-lg text-custom_neutral-600 mb-8 leading-relaxed">
                {product.description}
              </p>

              {/* Key Specifications */}
              {product.specifications && (
                <div className="grid grid-cols-2 gap-4 mb-8">
                  {product.specifications.pressureRating && (
                    <div className="p-5 bg-white rounded-xl border border-custom_neutral-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-custom_neutral-600 mb-2 font-medium">Pressure Rating</div>
                      <div className="text-xl font-bold text-custom_neutral-900">
                        {product.specifications.pressureRating}
                      </div>
                    </div>
                  )}
                  {product.specifications.temperatureRange && (
                    <div className="p-5 bg-white rounded-xl border border-custom_neutral-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-custom_neutral-600 mb-2 font-medium">Temperature Range</div>
                      <div className="text-xl font-bold text-custom_neutral-900">
                        {product.specifications.temperatureRange}
                      </div>
                    </div>
                  )}
                  {product.specifications.material && (
                    <div className="p-5 bg-white rounded-xl border border-custom_neutral-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-custom_neutral-600 mb-2 font-medium">Material</div>
                      <div className="text-lg font-semibold text-custom_neutral-900 line-clamp-2">
                        {product.specifications.material.split(',')[0]}
                      </div>
                    </div>
                  )}
                  {product.specifications.sizeRange && (
                    <div className="p-5 bg-white rounded-xl border border-custom_neutral-200 shadow-sm hover:shadow-md transition-shadow">
                      <div className="text-sm text-custom_neutral-600 mb-2 font-medium">Size Range</div>
                      <div className="text-xl font-bold text-custom_neutral-900">
                        {product.specifications.sizeRange}
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-wrap gap-3 mt-6">
                <button
                  onClick={() => {
                    const formSection = document.getElementById('inquiry-form');
                    if (formSection) {
                      formSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
                    }
                  }}
                  className="group flex items-center justify-center gap-2 px-6 py-3 bg-primary text-white font-semibold rounded-lg hover:bg-primary-dark transition-all duration-300 hover:shadow-lg"
                >
                  <span>Inquiry Now</span>
                  <LuArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </button>
                <button
                  onClick={() => {
                    alert('Catalog download will be available soon');
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-soft transition-all duration-300"
                >
                  <LuDownload className="w-5 h-5" />
                  <span>Download Catalog</span>
                </button>
                <button
                  onClick={() => {
                    alert('Manual download will be available soon');
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-soft transition-all duration-300"
                >
                  <LuFileText className="w-5 h-5" />
                  <span>Download Manual</span>
                </button>
                <button
                  onClick={() => {
                    alert('Video will be available soon');
                  }}
                  className="flex items-center justify-center gap-2 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-soft transition-all duration-300"
                >
                  <LuPlay className="w-5 h-5" />
                  <span>Watch Video</span>
                </button>
              </div>
            </motion.div>

            {/* Product Image/3D Model - Right Side */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
              className="relative flex items-center justify-center"
            >
              {product.model3D ? (
                <Product3DViewer modelPath={product.model3D} fallbackImage={product.imageUrl} />
              ) : (
                <div className="w-[480px] max-w-full h-[600px] bg-gradient-to-br from-primary/10 to-primary/5 rounded-xl overflow-hidden flex items-center justify-center shadow-xl">
                  {product.imageUrl ? (
                    <img
                      src={product.imageUrl}
                      alt={product.name}
                      className="w-full h-full object-contain p-8"
                      onError={(e) => {
                        const target = e.currentTarget;
                        target.style.display = 'none';
                        const parent = target.parentElement;
                        if (parent) {
                          const fallback = document.createElement('div');
                          fallback.className = 'text-6xl text-primary opacity-20';
                          fallback.textContent = '⚙️';
                          parent.appendChild(fallback);
                        }
                      }}
                    />
                  ) : (
                    <div className="text-6xl text-primary opacity-20">⚙️</div>
                  )}
                </div>
              )}
            </motion.div>
          </div>
        </div>
      </section>

      {/* Product Description Section */}
      <section className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-4xl"
          >
            <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-6">Product Description</h2>
            <p className="text-lg text-custom_neutral-600 leading-relaxed mb-8">
              {product.detailedDescription}
            </p>

            {/* Applications */}
            {product.applications && product.applications.length > 0 && (
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-custom_neutral-900 mb-4">Applications</h3>
                <div className="flex flex-wrap gap-3">
                  {product.applications.map((app, index) => (
                    <span
                      key={index}
                      className="px-4 py-2 bg-primary/10 text-primary text-sm font-medium rounded-full border border-primary/20"
                    >
                      {app}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {/* Quick Contact */}
            <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  onClick={() => {
                    const formSection = document.getElementById("inquiry-form");
                    formSection?.scrollIntoView({ behavior: "smooth" });
                  }}
                  className="flex-1"
                >
                  Request Quote
                </Button>
                <a
                  href="tel:+919099477256"
                  className="flex-1 px-6 py-3 bg-white border-2 border-primary text-primary font-semibold rounded-lg hover:bg-primary-soft transition-colors flex items-center justify-center"
                >
                  <LuPhone className="w-5 h-5 mr-2" />
                  Call Now
                </a>
              </div>
            </motion.div>
          </div>
      </section>

      {/* Detailed Specifications */}
      {product.specifications && (
        <section className="py-12 md:py-16 bg-white">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24">
            <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-8">Specifications</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {Object.entries(product.specifications).map(([key, value]) => (
                value && (
                  <div key={key} className="p-6 bg-custom_neutral-50 rounded-lg">
                    <div className="text-sm text-custom_neutral-600 mb-2 capitalize">
                      {key.replace(/([A-Z])/g, ' $1').trim()}
                    </div>
                    <div className="text-lg font-semibold text-custom_neutral-900">{value}</div>
                  </div>
                )
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FAQ Section */}
      {product.faqs && product.faqs.length > 0 && (
        <section className="py-12 md:py-16 bg-custom_neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24">
            <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-8">
              Frequently Asked Questions
            </h2>
            <div className="max-w-3xl space-y-4">
              {product.faqs.map((faq, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg border border-custom_neutral-200 overflow-hidden"
                >
                  <button
                    onClick={() => handleFaqToggle(index)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left hover:bg-custom_neutral-50 transition-colors"
                  >
                    <span className="font-semibold text-custom_neutral-900 pr-4">{faq.question}</span>
                    {openFaqIndex === index ? (
                      <LuChevronUp className="w-5 h-5 text-primary flex-shrink-0" />
                    ) : (
                      <LuChevronDown className="w-5 h-5 text-primary flex-shrink-0" />
                    )}
                  </button>
                  <AnimatePresence>
                    {openFaqIndex === index && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <div className="px-6 pb-4 text-custom_neutral-600 leading-relaxed">
                          {faq.answer}
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ))}
            </div>
          </div>
        </section>
      )}

      {/* Inquiry Form Section */}
      <section id="inquiry-form" className="py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-4">
                Request a Quote or Inquiry
              </h2>
              <p className="text-lg text-custom_neutral-600">
                Fill out the form below and our team will get back to you shortly.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              {/* Contact Info */}
              <div className="lg:col-span-1">
                <div className="bg-gradient-to-br from-primary to-primary-dark rounded-xl p-6 text-white h-full">
                  <h3 className="text-xl font-bold mb-6">Get in Touch</h3>
                  <div className="space-y-6">
                    <div>
                      <div className="flex items-center mb-2">
                        <LuPhone className="w-5 h-5 mr-3" />
                        <span className="font-semibold">Phone</span>
                      </div>
                      <a href="tel:+919099477256" className="text-white/90 hover:text-white">
                        +91 90994 77256
                      </a>
                    </div>
                    <div>
                      <div className="flex items-center mb-2">
                        <LuMail className="w-5 h-5 mr-3" />
                        <span className="font-semibold">Email</span>
                      </div>
                      <a href="mailto:mkt@airaindia.com" className="text-white/90 hover:text-white">
                        mkt@airaindia.com
                      </a>
                    </div>
                    <div className="pt-6 border-t border-white/20">
                      <p className="text-sm text-white/80">
                        Our sales team is available Monday to Saturday, 9 AM to 6 PM IST.
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Inquiry Form */}
              <div className="lg:col-span-2">
                <form onSubmit={handleSubmit} className="bg-white border border-custom_neutral-200 rounded-xl p-6 md:p-8">
                  <div className="space-y-6">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                          Name *
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          required
                          value={formData.name}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Your Name"
                        />
                      </div>
                      <div>
                        <label htmlFor="company" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                          Company *
                        </label>
                        <input
                          type="text"
                          id="company"
                          name="company"
                          required
                          value={formData.company}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="Company Name"
                        />
                      </div>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div>
                        <label htmlFor="email" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          required
                          value={formData.email}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="your.email@company.com"
                        />
                      </div>
                      <div>
                        <label htmlFor="phone" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                          Phone *
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          required
                          value={formData.phone}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                          placeholder="+91 12345 67890"
                        />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="productInterest" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                        Product of Interest
                      </label>
                      <input
                        type="text"
                        id="productInterest"
                        name="productInterest"
                        value={formData.productInterest}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all"
                        placeholder="Product Name"
                      />
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                        Message *
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        required
                        rows={5}
                        value={formData.message}
                        onChange={handleInputChange}
                        className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all resize-none"
                        placeholder="Tell us about your requirements, specifications, quantity, or any other details..."
                      />
                    </div>

                    {submitStatus === "success" && (
                      <div className="p-4 bg-green-50 border border-green-200 rounded-lg text-green-800">
                        Thank you for your inquiry! We'll get back to you shortly.
                      </div>
                    )}

                    {submitStatus === "error" && (
                      <div className="p-4 bg-red-50 border border-red-200 rounded-lg text-red-800">
                        Something went wrong. Please try again or contact us directly.
                      </div>
                    )}

                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full py-6 text-lg"
                    >
                      {isSubmitting ? "Submitting..." : "Submit Inquiry"}
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Related Products */}
      {relatedProducts.length > 0 && (
        <section className="py-12 md:py-16 bg-custom_neutral-50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-24">
            <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {relatedProducts.map((relatedProduct) => (
                <Link
                  key={relatedProduct.id}
                  href={`/products/${categorySlug}/${relatedProduct.id}`}
                  className="bg-white rounded-lg border border-custom_neutral-200 hover:border-primary/50 overflow-hidden transition-all duration-300 hover:shadow-lg group"
                >
                  <div className="h-48 bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center">
                    <div className="text-4xl text-primary opacity-50 group-hover:opacity-100 transition-opacity">⚙️</div>
                  </div>
                  <div className="p-6">
                    <h3 className="font-semibold text-custom_neutral-900 mb-2 group-hover:text-primary transition-colors">
                      {relatedProduct.name}
                    </h3>
                    <p className="text-sm text-custom_neutral-600 line-clamp-2 mb-4">
                      {relatedProduct.description}
                    </p>
                    <div className="flex items-center text-primary font-medium">
                      <span>View Details</span>
                      <LuArrowLeft className="w-4 h-4 ml-2 rotate-180 group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>
      )}
    </div>
  );
}
