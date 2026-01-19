"use client";

import { Section } from "@/components/Section";
import { motion } from "framer-motion";
import Link from "next/link";
import { LuChevronRight, LuFactory, LuTarget, LuUsers, LuAward, LuTrendingUp, LuShield, LuLightbulb, LuHeartHandshake } from "react-icons/lu";

export default function AboutPage() {
  const values = [
    {
      icon: LuTarget,
      title: "Excellence",
      description: "An integrated approach to providing engineering services allows our clients to benefit from the commercial logistical"
    },
    {
      icon: LuShield,
      title: "Responsibility",
      description: "We'll work with you on your portfolio, large or small. Together we'll fine-tune your new construction, remodeling or renovation"
    },
    {
      icon: LuLightbulb,
      title: "Innovation",
      description: "We enhance our industry operations by relieving you of the worries associated with freight forwarding."
    },
    {
      icon: LuUsers,
      title: "Team work",
      description: "We are one of the Nations largest automotive parts recyclers and a widely recognized leader utilizing advanced"
    }
  ];

  const coreValues = [
    {
      title: "Client Value Creation",
      description: "Improving our clients business performance, creating long-term relationships and focusing on execution excellence."
    },
    {
      title: "Integrity",
      description: "Inspiring trust by taking responsibility, acting ethically, and encouraging honest and open business discussions."
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
              <span className="text-custom_neutral-900 font-medium flex-shrink-0">About Us</span>
            </nav>
            <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-custom_neutral-900 mb-4">
              About Us
            </h1>
            <p className="text-lg md:text-xl text-custom_neutral-600 leading-relaxed">
              Flow Control and Automation Solutions with 'You' in mind.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Company Overview */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-6">
              Company Overview
            </h2>
            <p className="text-lg text-custom_neutral-600 leading-relaxed mb-8">
              <strong>Aira Euro Automation</strong> is the trailblazing leader in the Valve Manufacturing Industry based in the engineering hub of Ahmedabad, India. Working with modern technology and advanced production equipment, we have been in this industry for <strong>30 years</strong>, and our trajectory has been distinguished by <strong>relentless R&D, setting up robust infrastructure and systems, and an indestructible dedication to meet our customer's requirements</strong>. As a Proudly made startup in India, our presence highlights our commitment to encouraging indigenous manufacturing.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Company Infrastructure */}
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
              Company Infrastructure
            </h2>
            <h3 className="text-xl md:text-2xl text-custom_neutral-600 mb-8">
              Organization Factory Premises are Expanding Over
            </h3>
            <div className="inline-block bg-gradient-to-br from-primary to-primary-dark text-white rounded-2xl p-8 md:p-12 shadow-2xl">
              <div className="text-5xl md:text-7xl font-bold mb-2">80,000</div>
              <div className="text-lg md:text-xl font-medium">SQ. Mtr Area in Next 3 Years</div>
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Our Commitment */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-6">
              Our Commitment
            </h2>
            <p className="text-lg text-custom_neutral-600 leading-relaxed mb-8">
              Our commitment to excellence extends from the reverse integration procedure, encompassing casting foundry to rubber manufacturing. This comprehensive approach ensures that every component of our products is precisely crafted for overall performance. Over a long time, we have cultivated relationships with our customers, owning a hit ratio of repeat customers who rely on us for quality products and timely solutions.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Investment Casting Foundry */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
              <LuFactory className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-6">
              Our Own Investment Casting Foundry
            </h2>
            <p className="text-lg text-custom_neutral-600 leading-relaxed">
              At Aira Euro Automation, we pride ourselves on having our own dedicated casting foundry. This unique advantage allows us to maintain stringent quality control over the casting and raw materials used in our products.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Why Aira Section */}
      <Section className="py-16 md:py-24">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-4">
              Why <span className="text-primary">Aira!</span>
            </h2>
            <p className="text-lg text-custom_neutral-600 max-w-3xl mx-auto leading-relaxed">
              Our product development is based on our customer's approach and their specific requirements and challenges. Our expert engineers meticulously solve each query and problem of customers. We understand the gaps in the Indian market, and we pride offering a comprehensive range of Automation Valves, Manual Valves, High-Pressure Valves, Solenoid Valves, and Pneumatic Actuators all under one roof.
            </p>
          </motion.div>

          {/* Values Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-6 border border-custom_neutral-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="text-xl font-bold text-custom_neutral-900 mb-3">
                    {value.title}
                  </h3>
                  <p className="text-sm text-custom_neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </Section>

      {/* Mission, Vision, Values */}
      <Section className="py-16 md:py-24 bg-gradient-to-br from-primary/5 via-white to-primary/5">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8 mb-16">
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white rounded-xl p-8 border border-custom_neutral-200 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LuTarget className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-custom_neutral-900 mb-4">
                Our Mission
              </h3>
              <p className="text-custom_neutral-600 leading-relaxed">
                Our commitment to excellence encompasses the entire reverse integration procedure, from casting foundries to rubber manufacturing. We take pride in our high hit ratio of repeat customers who rely on us for quality products and timely solutions.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="bg-white rounded-xl p-8 border border-custom_neutral-200 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LuTrendingUp className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-custom_neutral-900 mb-4">
                Our Vision
              </h3>
              <p className="text-custom_neutral-600 leading-relaxed">
                With a commitment to quality and reliability, we aim to provide solutions that not only meet but exceed the needs of our customers, delivering excellence in everything we do.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white rounded-xl p-8 border border-custom_neutral-200 shadow-lg"
            >
              <div className="w-14 h-14 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                <LuAward className="w-7 h-7 text-primary" />
              </div>
              <h3 className="text-2xl font-bold text-custom_neutral-900 mb-4">
                Our Values
              </h3>
              <p className="text-custom_neutral-600 leading-relaxed">
                We strive to fulfill our customers' right to expect the best we can deliver at all times.
              </p>
            </motion.div>
          </div>

          {/* Core Values */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-12">
              Our Core Values
            </h2>
            <div className="grid md:grid-cols-2 gap-8">
              {coreValues.map((value, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  className="bg-white rounded-xl p-8 border border-custom_neutral-200 hover:border-primary/50 hover:shadow-lg transition-all duration-300"
                >
                  <h3 className="text-xl font-bold text-primary mb-4">
                    {value.title}
                  </h3>
                  <p className="text-custom_neutral-600 leading-relaxed">
                    {value.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </Section>

      {/* Certifications & Quality */}
      <Section className="py-16 md:py-24">
        <div className="max-w-4xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="inline-block p-4 bg-primary/10 rounded-2xl mb-6">
              <LuAward className="w-16 h-16 text-primary" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-custom_neutral-900 mb-6">
              Quality & Certifications
            </h2>
            <p className="text-lg text-custom_neutral-600 leading-relaxed mb-8">
              Aira Euro Automation holds ISO and other certifications for quality assurance. We are well-known for our quality products, affordable pricing, one-stop solutions, and the availability of spares. We have become synonymous with a competitive valve range all under one roof. Aira nurtures and values transparent relationships with clients across the globe.
            </p>
          </motion.div>
        </div>
      </Section>

      {/* Call to Action */}
      <section className="bg-gradient-to-r from-primary to-primary-dark py-12 md:py-16">
        <div className="container mx-auto px-4 sm:px-6 lg:px-24">
          <div className="max-w-3xl mx-auto text-center text-white">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ready to Work With Us?
            </h2>
            <p className="text-lg mb-8 opacity-90">
              Get in touch with our team to discuss your valve automation needs.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="px-8 py-3 bg-white text-primary font-semibold rounded-lg hover:bg-primary-soft transition-colors"
              >
                Contact Us
              </Link>
              <Link
                href="/products"
                className="px-8 py-3 bg-primary-dark text-white font-semibold rounded-lg border border-white/20 hover:bg-primary/80 transition-colors"
              >
                View Products
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
