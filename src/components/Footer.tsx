import React, { useEffect, useRef } from "react";
import { Mail, Phone } from "lucide-react";
import { Link } from "react-router-dom";
import {
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaWhatsapp,
  FaYoutube,
} from "react-icons/fa";

import { colors, fonts } from "../styles/Theme";

const socialLinks = [
  "https://web.whatsapp.com/",
  "https://www.instagram.com/kuttystoryindia/?hl=en",
  "https://www.facebook.com/61562672442380",
  "https://in.pinterest.com/kuttystorybabyphotography/",
];

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
                  href={socialLinks[idx]}
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ color: colors.whites }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.color = colors.pinkdark)
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.color = colors.whites)
                  }
                >
                  <Icon size={30} />
                </a>
              )
            )}
          </div>
        </div>

        {/* Main Footer */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 gap-10">
            {/* ABOUT US */}
            <div className="footer-section">
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
                company specializing in Baby & Product Photography
                <a href="http://prodshoot.com/">(prodshoot.com)</a>, In
                kuttystory, our focus is to create beautiful experiences that
                stand for ever. We provide high-quality and budget-conscious
                baby photography services. We are a team with Creative minds
                with Analytical heads – passionate in photography, fresh in
                thought, dynamic at work with ample industry experience. If
                you’re looking for something new for your child, you’re in the
                right place. We strive to be industrious and innovative,
                offering our customers something they really want, putting their
                desires at the top of our priority list and delivering them in a
                creative manner.
              </p>
            </div>

            {/* 2-column section for small screens */}
            <div className="grid grid-cols-2 gap-6 lg:grid-cols-4">
              {/* LINKS */}
              <div className="footer-section">
                <h4
                  className="text-lg font-semibold"
                  style={{ color: colors.whites }}
                >
                  LINKS
                </h4>
                <div className="flex mt-3 divide-x divide-white/30">
                  <ul className="flex-1 space-y-2 pr-4">
                    {["Home", "How It Works", "Album"].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                          className="hover-lift inline-block text-sm"
                          style={{ color: `${colors.whites}cc` }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                  <ul className="flex-1 space-y-2 pl-4">
                    {["Gallery", "Package", "FAQs"].map((item) => (
                      <li key={item}>
                        <a
                          href={`#${item.toLowerCase().replace(/ /g, "-")}`}
                          className="hover-lift inline-block text-sm"
                          style={{ color: `${colors.whites}cc` }}
                        >
                          {item}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* LEGAL */}
              <div className="footer-section">
                <h4
                  className="text-lg font-semibold"
                  style={{ color: colors.whites }}
                >
                  LEGAL
                </h4>
                <ul className="space-y-3 text-center md:text-left">
                  {[
                    { name: "Privacy Policy", path: "/privacy-policy" },
                    { name: "Terms & Conditions", path: "/term-condition" },
                  ].map(({ name, path }) => (
                    <li key={name}>
                      <Link
                        to={path}
                        className="hover-lift inline-block text-sm"
                        style={{ color: `${colors.whites}cc` }}
                      >
                        {name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>

              {/* APPS */}
              {/* APPS */}
              <div className="footer-section space-y-8 flex flex-col items-center text-center sm:items-start sm:text-left">
                <div>
                  <h4
                    className="text-lg font-semibold"
                    style={{ color: colors.whites }}
                  >
                    APPS
                  </h4>
                  <div className="space-y-4">
                    <div className="app-item flex items-center justify-center sm:justify-start space-x-3">
                      <div
                        className="rounded p-2 shadow"
                        style={{ backgroundColor: colors.whites }}
                      >
                        <a
                          href="https://play.google.com/store/apps/details?id=com.skylimit.kuttystory"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <img
                            src="/KuttyStory_logo_new.png"
                            alt="Kutty Story"
                            className="h-6 w-6"
                          />
                        </a>
                      </div>
                      <span
                        className="text-sm"
                        style={{ color: `${colors.whites}cc` }}
                      >
                        kuttystory
                      </span>
                    </div>

                    <a
                      href="https://www.youtube.com/channel/UCUXYslaWuY2VXbZ71V925Hw"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="app-item flex items-center justify-center sm:justify-start space-x-3">
                        <div
                          className="rounded p-2 shadow"
                          style={{ backgroundColor: colors.pinkmedium }}
                        >
                          <FaYoutube size={18} color={colors.whites} />
                        </div>
                        <span
                          className="text-sm "
                          style={{ color: `${colors.whites}cc` }}
                        >
                          YouTube
                        </span>
                      </div>
                    </a>
                  </div>
                </div>
              </div>

              {/* CONTACT */}
              {/* CONTACT */}
              <div className="footer-section flex flex-col items-center text-center sm:items-start sm:text-left space-y-4">
                <h4
                  className="text-lg font-semibold"
                  style={{ color: colors.whites }}
                >
                  CONTACT US
                </h4>
                <div className="space-y-4">
                  <div className="contact-item flex items-center justify-center sm:justify-start space-x-3">
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
                  <div className="contact-item flex items-center justify-center sm:justify-start space-x-3">
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

            {/* COPYRIGHT */}
            <div
              className="border-t mt-16 pt-6 text-center text-sm"
              style={{
                color: `${colors.whites}99`,
                borderColor: colors.whites,
              }}
            >
              <p>
                © 2025 All Rights Reserved | Powered by{" "}
                <span
                  className="font-semibold hover-lift"
                  style={{ color: colors.pinkmedium }}
                >
                  Skylimit Digital
                </span>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
};

export default Footer;
