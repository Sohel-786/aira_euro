"use client";

import Link from "next/link";
import { useRouter } from "next/navigation";
import { LuPhone, LuMail, LuMapPin } from "react-icons/lu";
import { Button } from "./ui/button";
import { useState, useEffect } from "react";

export function Footer() {
  const router = useRouter();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const footerLink =
    "group inline-flex items-center text-sm text-white/80 transition-colors duration-300 hover:text-white";

  return (
    <footer className="bg-custom_neutral-900 text-white pt-16 pb-8 overflow-hidden flex flex-col justify-center items-center gap-8 relative">
      {/* Background Pattern */}
      <div className="absolute bottom-0 right-0 opacity-10">
        <div className="w-[600px] h-[600px] bg-primary/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative z-20 w-full px-4 sm:px-6 lg:px-24">
        <div className="max-w-[1340px] mx-auto">
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-8 mb-12">
            {/* Leftmost Section - Quick Contact & Address */}
            <div className="flex flex-col">
              <Button
                variant="outline"
                className="mb-6 border-primary text-white hover:bg-primary w-fit"
              >
                Quick Contact
              </Button>
              <p className="text-white/80 mb-6 text-sm leading-relaxed">
                If you have any questions or need help, feel free to contact with our team.
              </p>
              <div className="flex items-center gap-3 mb-4">
                <LuPhone className="w-5 h-5 text-primary-light flex-shrink-0" />
                <a
                  href="tel:+919099477256"
                  className="text-lg font-bold text-white hover:text-primary-light transition-colors"
                >
                  +91 90994 77256
                </a>
              </div>
              <div className="flex items-start gap-3">
                <LuMapPin className="w-5 h-5 text-primary-light mt-1 flex-shrink-0" />
                <p className="text-sm text-white/80 leading-relaxed">
                  Aira Euro Automation Pvt Ltd Plot No.123-124, Aira Estate, B/h Security Estate, Near Kashiram Textile Mill, Narol, Ahmedabad – 382405, Gujarat, India.
                </p>
              </div>
            </div>

            {/* About AIRA Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold leading-[150%] text-base text-white">
                About AIRA
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "About Us",
                  "Quality Policy & Testing",
                  "Production capacity",
                  "Design Division",
                  "Career",
                  "Blogs",
                ].map((item, i) => (
                  <li key={i}>
                    <Link href="#" className={footerLink}>
                      <span className="text-primary-light mr-2 group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                      <span className="text-sm leading-[150%] text-white/80">
                        {item}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Products Section */}
            <div className="flex flex-col gap-4">
              <h3 className="font-bold leading-[150%] text-base text-white">
                Products
              </h3>
              <ul className="flex flex-col gap-3">
                {[
                  "Pneumatic Actuators",
                  "Ball Valves",
                  "Butterfly Valves",
                  "Solenoid Valves",
                  "Control Valves",
                  "Plug Valves",
                  "Accessories",
                  "Lined Valves",
                  "Knife Edge Gate Valves",
                  "Pharmaceutical Valves",
                ].map((product, i) => (
                  <li key={i}>
                    <Link href="#" className={footerLink}>
                      <span className="text-primary-light mr-2 group-hover:translate-x-1 transition-transform inline-block">
                        →
                      </span>
                      <span className="text-sm leading-[150%] text-white/80">
                        {product}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Departmental Contacts - Column 1 */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-sm mb-3 text-white">Sales & Marketing Department:</h4>
                <div className="flex items-center gap-2 mb-2">
                  <LuPhone className="w-4 h-4 text-primary-light" />
                  <a href="tel:+919099477256" className="text-sm text-white/80 hover:text-white">
                    +91 90994 77256
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail className="w-4 h-4 text-primary-light" />
                  <a href="mailto:mkt@airaindia.com" className="text-sm text-white/80 hover:text-white">
                    mkt@airaindia.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-3 text-white">Finance Department:</h4>
                <div className="flex items-center gap-2 mb-2">
                  <LuPhone className="w-4 h-4 text-primary-light" />
                  <a href="tel:+919825078689" className="text-sm text-white/80 hover:text-white">
                    +91 98250 78689
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail className="w-4 h-4 text-primary-light" />
                  <a href="mailto:accounts@airaindia.com" className="text-sm text-white/80 hover:text-white">
                    accounts@airaindia.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-3 text-white">For Customer Technical Support:</h4>
                <div className="flex items-center gap-2">
                  <LuPhone className="w-4 h-4 text-primary-light" />
                  <a href="tel:+917043682683" className="text-sm text-white/80 hover:text-white">
                    +91 70436 82683
                  </a>
                </div>
              </div>
            </div>

            {/* Departmental Contacts - Column 2 */}
            <div className="flex flex-col gap-6">
              <div>
                <h4 className="font-bold text-sm mb-3 text-white">For Export Inquiry:</h4>
                <div className="flex items-center gap-2 mb-2">
                  <LuPhone className="w-4 h-4 text-primary-light" />
                  <a href="tel:+919099911754" className="text-sm text-white/80 hover:text-white">
                    +91 90999 11754
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail className="w-4 h-4 text-primary-light" />
                  <a href="mailto:export@airaindia.com" className="text-sm text-white/80 hover:text-white">
                    export@airaindia.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-3 text-white">Purchase Department:</h4>
                <div className="flex items-center gap-2 mb-2">
                  <LuPhone className="w-4 h-4 text-primary-light" />
                  <a href="tel:+919925178613" className="text-sm text-white/80 hover:text-white">
                    +91 99251 78613
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail className="w-4 h-4 text-primary-light" />
                  <a href="mailto:Purchase2@airaindia.com" className="text-sm text-white/80 hover:text-white">
                    Purchase2@airaindia.com
                  </a>
                </div>
              </div>

              <div>
                <h4 className="font-bold text-sm mb-3 text-white">For Career:</h4>
                <div className="flex items-center gap-2 mb-2">
                  <LuPhone className="w-4 h-4 text-primary-light" />
                  <a href="tel:+917567863977" className="text-sm text-white/80 hover:text-white">
                    +91 75678 63977
                  </a>
                </div>
                <div className="flex items-center gap-2">
                  <LuMail className="w-4 h-4 text-primary-light" />
                  <a href="mailto:career@airaindia.com" className="text-sm text-white/80 hover:text-white">
                    career@airaindia.com
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* Social Media Icons */}
          <div className="flex items-center gap-4 mb-8">
            {[
              { name: "Instagram", icon: "📷" },
              { name: "Facebook", icon: "👤" },
              { name: "Twitter", icon: "🐦" },
              { name: "YouTube", icon: "▶️" },
              { name: "LinkedIn", icon: "💼" },
            ].map((social, i) => (
              <a
                key={i}
                href="#"
                className="w-12 h-12 rounded-full border-2 border-primary/50 flex items-center justify-center text-white hover:bg-primary hover:border-primary transition-all"
                aria-label={social.name}
              >
                <span className="text-xl">{social.icon}</span>
              </a>
            ))}
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-white/20 pt-8">
            <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
              {/* Logo */}
              <div className="flex items-center gap-3">
                <div className="bg-primary rounded-lg px-3 py-2">
                  <span className="text-white font-bold text-lg">aira</span>
                  <sup className="text-xs">®</sup>
                </div>
                <span className="text-white text-sm font-medium">VALVE AUTOMATION</span>
              </div>

              {/* Legal Links */}
              <div className="flex items-center gap-6 text-sm text-white/80">
                <Link href="#" className="hover:text-primary-light transition-colors">
                  Terms & Conditions
                </Link>
                <Link href="#" className="hover:text-primary-light transition-colors">
                  Privacy Policy
                </Link>
                <Link href="#" className="hover:text-primary-light transition-colors">
                  Sitemap
                </Link>
              </div>
            </div>
            <div className="mt-4 text-center sm:text-left">
              <p className="text-sm text-white/60">
                © airaindia, All Rights Reserved.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll to Top Button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 w-14 h-14 bg-primary rounded-full text-white shadow-2xl hover:bg-primary-dark transition-all z-50 flex items-center justify-center group"
          aria-label="Scroll to top"
        >
          <svg
            className="w-6 h-6 group-hover:-translate-y-1 transition-transform"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 10l7-7m0 0l7 7m-7-7v18"
            />
          </svg>
        </button>
      )}
    </footer>
  );
}
