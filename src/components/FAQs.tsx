import React, { useState } from "react";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";
// import Sparkles from "../styles/sparkle";

//import { useHeartTrail } from "../styles/HeartTrail";

import { motion } from "framer-motion";

const FAQs: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const faqs = [
    {
      question: "How do I upload photos?",
      answer:
        "Photos can be uploaded as memories by using the ADD MEMORY option in the navigation bar.",
    },
    {
      question: "How will my friends find my baby profile?",
      answer:
        "You can add your friends and family members from the Baby Profile page. They'll be sent an invite with login credentials.",
    },
    {
      question:
        "In what format do my photos need to be saved and is there a size limitation?",
      answer:
        "The photos you upload can be in JPG or JPEG or PNG format and image size should not exceed 15MB.",
    },
    {
      question: "Can I replace any of the photos I have uploaded at any time?",
      answer:
        "Yes, you can replace uploaded photos through the Edit Memory option available on each post.",
    },
    {
      question: "What forms of payment do you accept?",
      answer:
        "We accept UPI, Credit/Debit Cards, and Net Banking. For international payments, contact admin@kuttystory.com.",
    },
  ];

  return (
    <section
      id="faqs"
      className="py-20 px-4 relative"
      style={{ backgroundColor: colors.cream, fontFamily: fonts.body }}
    >
      {/* <Sparkles /> */}

      <div className="max-w-6xl mx-auto text-center mb-16">
        <h2
          className="text-4xl md:text-5xl font-bold mb-4"
          style={{ color: colors.purpledark, fontFamily: fonts.heading }}
        >
          Frequently Asked Questions
        </h2>
        <p className="text-lg" style={{ color: colors.purpledark }}>
          Everything you need to know about our baby photography services.
        </p>
      </div>

      {/* FAQ List - Modified grid gap and card sizing */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-7xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={`faq-${index}`}
              className="relative h-full flex flex-col w-full"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
            >
              {/* Folder Top - Consistent styling for all cards */}
              <div
                className="relative z-10 cursor-pointer flex-shrink-0 w-full"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div
                  className="w-full px-8 py-6 text-white font-medium border shadow-md flex items-center"
                  style={{
                    backgroundColor: colors.lightpurple,
                    borderColor: colors.pinkmedium,
                    clipPath:
                      "polygon(8px 0, 48px 0, 56px 8px, calc(100% - 8px) 8px, 100% 16px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
                    borderBottom: isOpen
                      ? "none"
                      : `1px solid ${colors.purpledark}`,
                    borderBottomLeftRadius: isOpen ? 0 : 12,
                    borderBottomRightRadius: isOpen ? 0 : 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                    minHeight: "120px", // Using inline style to ensure consistency
                  }}
                >
                  <div className="flex justify-between items-center w-full">
                    <span
                      className="text-left flex-1 pr-4"
                      style={{
                        fontFamily: fonts.heading,
                        fontSize: "1.25rem", // 20px equivalent to text-xl
                        lineHeight: "1.6",
                      }}
                    >
                      {faq.question}
                    </span>
                    <span
                      className="leading-none select-none flex-shrink-0"
                      style={{ fontSize: "1.875rem" }} // 30px equivalent to text-3xl
                    >
                      {isOpen ? (
                        <span className="transform rotate-45 inline-block">
                          +
                        </span>
                      ) : (
                        <span>+</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Folder Body - Consistent sizing for all answer cards */}
              <div
                className="transition-all duration-500 overflow-hidden w-full"
                style={{
                  maxHeight: isOpen ? "180px" : "0px", // Fixed height based on second FAQ
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div
                  className="py-3 w-full"
                  style={{
                    backgroundColor: colors.pinkdark,
                    height: "180px", // Fixed container height
                    clipPath:
                      "polygon(8px 0, calc(100% - 8px) 0, 100% 8px, 100% calc(100% - 8px), calc(100% - 8px) 100%, 8px 100%, 0 calc(100% - 8px), 0 8px)",
                  }}
                >
                  <div
                    className="mx-4 mt-[-10px] mb-3 border shadow-md rounded-b-lg relative z-0"
                    style={{
                      backgroundColor: colors.whites,
                      borderColor: colors.blue,
                      padding: "1.5rem 2rem",
                      height: "132px", // Fixed height for answer card (180px - padding)
                      display: "flex",
                      alignItems: "flex-start",
                    }}
                  >
                    <p
                      style={{
                        color: colors.blacks,
                        fontFamily: fonts.body,
                        fontSize: "1.125rem",
                        lineHeight: "1.6",
                        margin: 0,
                      }}
                    >
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      {/* Contact CTA */}
      <div className="text-center mt-24">
        <div className="relative max-w-2xl mx-auto">
          <div className="absolute inset-0 bg-purple-600 rounded-2xl blur opacity-20"></div>
          <div
            className="relative backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
            style={{
              backgroundColor: colors.pinkdull,
              borderColor: colors.pinkmedium,
            }}
          >
            <h3
              className="text-2xl font-black mb-3"
              style={{ color: colors.purpledark }}
            >
              Still have questions?
            </h3>
            <p
              className="text-base mb-6 max-w-xl mx-auto leading-relaxed font-semibold"
              style={{ color: colors.lightmauve }}
            >
              For more queries, email us at{" "}
              <strong>admin@kuttystory.com</strong> or call{" "}
              <strong className="whitespace-nowrap">+91 98418 88001</strong>
            </p>
            <Button
              variant="cta"
              href="https://wa.me/919841888001?text=Hi%20KuttyStory%2C%20I%20would%20like%20to%20know%20more%20about%20your%20baby%20photoshoot%20packages."
              target="_blank"
              rel="noopener noreferrer"
            >
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
