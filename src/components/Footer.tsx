import React, { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
} from "react-icons/fa";
import { colors, fonts } from "../styles/Theme";

const Footer: React.FC = () => {
  const footerRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const sectionRefs = document.querySelectorAll(".footer-section");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("animate-fadeInUp");
          }
        });
      },
      {
        threshold: 0.1,
        rootMargin: "0px 0px -50px 0px",
      }
    );

    sectionRefs.forEach((ref) => observer.observe(ref));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <style>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .animate-fadeInUp {
          animation: fadeInUp 0.6s ease-out forwards;
        }

        .footer-section {
          opacity: 0;
          transform: translateY(30px);
          transition: all 0.6s ease-out;
        }

        .footer-section h4 {
          border-bottom: 2px solid ${colors.pinkmedium};
          display: inline-block;
          padding-bottom: 4px;
          margin-bottom: 1rem;
        }

        .hover-lift {
          transition: all 0.3s ease;
        }

        .hover-lift:hover {
          transform: translateY(-2px);
          text-shadow: 0 4px 8px ${colors.pinkmedium}33;
        }

        .contact-item:hover {
          transform: translateX(5px);
          color: ${colors.pinkmedium} !important;
        }

        .app-item:hover {
          transform: scale(1.05);
        }

        @media (max-width: 640px) {
          .footer-section {
            text-align: center;
          }
        }

        @keyframes scroll-left-to-right {
          0% {
            transform: translateX(-100%);
          }
          100% {
            transform: translateX(80%);
          }
        }

        .icon-marquee {
          white-space: nowrap;
          display: flex;
          gap: 2rem;
          animation: scroll-left-to-right 20s linear infinite;
        }

        .icon-marquee:hover {
          animation-play-state: paused;
          cursor: pointer;
        }
      `}</style>

      <footer
        ref={footerRef}
        style={{
          backgroundColor: colors.purpledark,
          fontFamily: fonts.body,
        }}
        className="relative scroll-smooth"
      >
        {/* Marquee Section */}
        <div className="overflow-hidden pt-5 pb-0">
          <div className="icon-marquee px-4" style={{ color: colors.whites }}>
            {[FaWhatsapp, FaInstagram, FaFacebook, FaPinterest].map(
              (Icon, idx) => (
                <a
                  key={idx}
                  href="#"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.whites }}
                  className="hover:text-pink-300"
                >
                  <Icon size={30} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-10">
            {/* About Section */}
            <div className="footer-section col-span-1 lg:col-span-2">
              <h4
                className="text-lg font-semibold tracking-wide"
                style={{ color: colors.whites }}
              >
                ABOUT US
              </h4>
              <p
                className="text-sm leading-relaxed text-justify"
                style={{ color: `${colors.whites}cc` }}
              >
                kuttystory is the unit of Skylimit Digital, a young motivated
                company specializing in Baby & Product Photography. In
                kuttystory, our focus is to create beautiful experiences that
                stand forever. We provide high-quality and budget-conscious baby
                photography services.
              </p>
            </div>

            {/* Links Section */}
            <div className="footer-section col-span-1">
              <h4
                className="text-lg font-semibold tracking-wide"
                style={{ color: colors.whites }}
              >
                LINKS
              </h4>
              <ul className="space-y-3">
                {["Home", "How It Works", "Album", "Package", "FAQs"].map(
                  (item) => (
                    <li key={item}>
                      <a
                        href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                        className="hover-lift inline-block text-sm"
                        style={{ color: `${colors.whites}cc` }}
                      >
                        {item}
                      </a>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* Legal Section */}
            <div className="footer-section col-span-1">
              <h4
                className="text-lg font-semibold tracking-wide"
                style={{ color: colors.whites }}
              >
                LEGAL
              </h4>
              <ul className="space-y-3">
                {["Privacy Policy", "Terms & Conditions"].map((item) => (
                  <li key={item}>
                    <a
                      href="#"
                      className="hover-lift inline-block text-sm"
                      style={{ color: `${colors.whites}cc` }}
                    >
                      {item}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Apps & Contact */}
            <div className="footer-section col-span-1 space-y-8">
              <div>
                <h4
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: colors.whites }}
                >
                  APPS
                </h4>
                <div className="space-y-4">
                  <div className="app-item flex items-center space-x-3">
                    <div
                      className="rounded p-2 shadow"
                      style={{ backgroundColor: colors.whites }}
                    >
                      <img
                        src="/public/KuttyStory_logo_new.png"
                        alt="Kutty Story"
                        className="h-6 w-6"
                      />
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: `${colors.whites}cc` }}
                    >
                      kuttystory
                    </span>
                  </div>
                  <div className="app-item flex items-center space-x-3">
                    <div
                      className="rounded p-2 shadow"
                      style={{ backgroundColor: colors.pinkmedium }}
                    >
                      <span
                        className="text-sm font-bold"
                        style={{ color: colors.whites }}
                      >
                        ▶
                      </span>
                    </div>
                    <span
                      className="text-sm"
                      style={{ color: `${colors.whites}cc` }}
                    >
                      youtube
                    </span>
                  </div>
                </div>
              </div>

              <div>
                <h4
                  className="text-lg font-semibold tracking-wide"
                  style={{ color: colors.whites }}
                >
                  CONTACT US
                </h4>
                <div className="space-y-4">
                  <div className="contact-item flex items-center space-x-3">
                    <Phone
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: colors.pinkmedium }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: `${colors.whites}cc` }}
                    >
                      +91-9841888001
                    </span>
                  </div>
                  <div className="contact-item flex items-center space-x-3">
                    <Mail
                      className="h-5 w-5 flex-shrink-0"
                      style={{ color: colors.pinkmedium }}
                    />
                    <span
                      className="text-sm"
                      style={{ color: `${colors.whites}cc` }}
                    >
                      admin@kuttystory.com
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Copyright */}
          <div
            className="border-t mt-16 pt-6 text-center text-sm"
            style={{
              color: `${colors.whites}99`,
              borderColor: colors.whites,
            }}
          >
            <p>
              © 2025 All Rights Reserved | Powered by{" "}
              <a
                href="https://skylimitdigital.com"
                target="_blank"
                rel="noopener noreferrer"
                className="font-semibold hover-lift"
                style={{ color: colors.pinkmedium }}
              >
                Skylimit Digital
              </a>
            </p>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
