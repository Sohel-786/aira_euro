"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import { useState } from "react";
import Link from "next/link";
import { LuChevronRight, LuPhone, LuMail, LuMapPin, LuSend, LuUser, LuMessageSquare } from "react-icons/lu";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: ""
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      alert("Thank you for your message! We'll get back to you soon.");
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };


  const departments = [
    {
      title: "Sales & Marketing Department",
      phone: "+91 90994 77256",
      email: "mkt@airaindia.com",
      icon: LuPhone
    },
    {
      title: "Finance Department",
      phone: "+91 98250 78689",
      email: "accounts@airaindia.com",
      icon: LuPhone
    },
    {
      title: "Customer Technical Support",
      phone: "+91 70436 82683",
      email: "",
      icon: LuPhone
    },
    {
      title: "Export Inquiry",
      phone: "+91 90999 11754",
      email: "export@airaindia.com",
      icon: LuPhone
    },
    {
      title: "Purchase Department",
      phone: "+91 99251 78613",
      email: "Purchase2@airaindia.com",
      icon: LuPhone
    },
    {
      title: "Career",
      phone: "+91 75678 63977",
      email: "career@airaindia.com",
      icon: LuPhone
    }
  ];

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-primary/10 via-primary/5 to-white py-16 md:py-24 overflow-hidden">
        <div className="absolute inset-0 bg-grid-pattern opacity-5"></div>
        <div className="container mx-auto px-4 sm:px-6 lg:px-24 relative z-10 max-w-full">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-3xl"
          >
            <nav className="flex items-center gap-1 md:gap-2 text-xs md:text-sm text-custom_neutral-600 mb-6 overflow-x-auto scrollbar-hide">
              <Link href="/" className="hover:text-primary transition-colors whitespace-nowrap flex-shrink-0">
                Home
              </Link>
              <LuChevronRight className="w-3 h-3 md:w-4 md:h-4 text-custom_neutral-400 flex-shrink-0" />
              <span className="text-custom_neutral-900 font-medium flex-shrink-0">Contact Us</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-custom_neutral-900 mb-4">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-custom_neutral-600 leading-relaxed">
              Get in touch with our team. We're here to help you find the perfect valve automation solution.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Form and Map Section */}
      <Section className="py-16 md:py-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-8 lg:gap-12">
            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-2xl border border-custom_neutral-200 p-8 md:p-10 shadow-lg"
            >
              <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-6">
                Send us a Message
              </h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                    Full Name <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <LuUser className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom_neutral-400" />
                    <input
                      type="text"
                      id="name"
                      name="name"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="Enter your full name"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                    Email Address <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <LuMail className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom_neutral-400" />
                    <input
                      type="email"
                      id="email"
                      name="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="your.email@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="phone" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                    Phone Number
                  </label>
                  <div className="relative">
                    <LuPhone className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-custom_neutral-400" />
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                      placeholder="+91 12345 67890"
                    />
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                    Subject <span className="text-primary">*</span>
                  </label>
                  <input
                    type="text"
                    id="subject"
                    name="subject"
                    required
                    value={formData.subject}
                    onChange={handleChange}
                    className="w-full px-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none"
                    placeholder="What is this regarding?"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-semibold text-custom_neutral-900 mb-2">
                    Message <span className="text-primary">*</span>
                  </label>
                  <div className="relative">
                    <LuMessageSquare className="absolute left-3 top-3 w-5 h-5 text-custom_neutral-400" />
                    <textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      rows={6}
                      className="w-full pl-10 pr-4 py-3 border border-custom_neutral-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-primary transition-all outline-none resize-none"
                      placeholder="Tell us about your requirements..."
                    />
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary hover:bg-primary-dark text-white font-semibold py-3 px-6 rounded-lg transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed shadow-lg hover:shadow-xl"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <LuSend className="w-5 h-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>
              </form>
            </motion.div>

            {/* Contact Information & Map */}
            <div className="space-y-8">
              {/* Contact Info Cards */}
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                className="bg-white rounded-2xl border border-custom_neutral-200 p-8 shadow-lg"
              >
                <h2 className="text-2xl md:text-3xl font-bold text-custom_neutral-900 mb-6">
                  Get in Touch
                </h2>
                <div className="space-y-6">
                  {/* Address */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LuMapPin className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-custom_neutral-900 mb-2">Address</h3>
                      <p className="text-custom_neutral-600 leading-relaxed">
                        Aira Euro Automation Pvt Ltd<br />
                        Plot No.123-124, Aira Estate,<br />
                        B/h Security Estate, Near Kashiram Textile Mill,<br />
                        Narol, Ahmedabad – 382405,<br />
                        Gujarat, India.
                      </p>
                    </div>
                  </div>

                  {/* Phone */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LuPhone className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-custom_neutral-900 mb-2">Phone</h3>
                      <a href="tel:+919099477256" className="text-primary hover:text-primary-dark transition-colors">
                        +91 90994 77256
                      </a>
                    </div>
                  </div>

                  {/* Email */}
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                      <LuMail className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-custom_neutral-900 mb-2">Email</h3>
                      <a href="mailto:mkt@airaindia.com" className="text-primary hover:text-primary-dark transition-colors">
                        mkt@airaindia.com
                      </a>
                    </div>
                  </div>
                </div>
              </motion.div>

              {/* Map */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="bg-white rounded-2xl border border-custom_neutral-200 overflow-hidden shadow-lg"
              >
                <div className="h-[400px] md:h-[500px] w-full">
                  <iframe
                    src="https://www.google.com/maps?q=Aira+Euro+Automation+Pvt+Ltd+Plot+No.123-124+Aira+Estate+Narol+Ahmedabad+Gujarat+382405&output=embed"
                    width="100%"
                    height="100%"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    className="w-full h-full rounded-lg"
                    title="Aira Euro Automation Location - Plot No.123-124, Aira Estate, Narol, Ahmedabad"
                  ></iframe>
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </Section>

      {/* Department Contacts */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-4">
              Department Contacts
            </h2>
            <p className="text-lg text-custom_neutral-600">
              Reach out to the right department for faster assistance
            </p>
          </motion.div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-custom_neutral-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="font-bold text-custom_neutral-900 mb-4">
                    {dept.title}
                  </h3>
                  <div className="space-y-2">
                    <a
                      href={`tel:${dept.phone.replace(/\s/g, "")}`}
                      className="flex items-center gap-2 text-sm text-custom_neutral-600 hover:text-primary transition-colors"
                    >
                      <LuPhone className="w-4 h-4" />
                      <span>{dept.phone}</span>
                    </a>
                    {dept.email && (
                      <a
                        href={`mailto:${dept.email}`}
                        className="flex items-center gap-2 text-sm text-custom_neutral-600 hover:text-primary transition-colors"
                      >
                        <LuMail className="w-4 h-4" />
                        <span className="break-all">{dept.email}</span>
                      </a>
                    )}
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>
    </div>
  );
}
