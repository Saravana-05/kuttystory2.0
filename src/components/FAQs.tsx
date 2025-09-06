import React, { useState } from "react";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";
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

      {/* FAQ List */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-x-6 gap-y-3 max-w-6xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <motion.div
              key={index}
              className="relative flex flex-col"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true, amount: 0.2 }}
              style={{ minHeight: '120px' }} // Set minimum height for consistency
            >
              {/* Card Top */}
              <div
                className="relative z-10 cursor-pointer flex-shrink-0"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div
                  className="px-6 py-4 text-white font-medium border shadow-md h-20 flex items-center" // Fixed height for question section
                  style={{
                    backgroundColor: colors.lightpurple,
                    borderColor: colors.pinkmedium,
                    clipPath:
                      "polygon(0 0, 60px 0, 70px 10px, calc(100% - 12px) 10px, 100% 24px, 100% calc(100% - 12px), calc(100% - 12px) 100%, 0 100%)",
                    borderTopRightRadius: 12,
                    borderBottomRightRadius: 12,
                    borderTopLeftRadius: 12,
                    borderBottomLeftRadius: 0,
                  }}
                >
                  <div className="flex justify-between items-center w-full">
                    <span
                      className="text-lg text-left leading-tight pr-4 flex-1" // Added flex-1 and padding-right for spacing
                      style={{ fontFamily: fonts.heading }}
                    >
                      {faq.question}
                    </span>
                    <span className="text-2xl leading-none select-none flex-shrink-0">
                      {isOpen ? (
                        <span className="transform rotate-45 inline-block">+</span>
                      ) : (
                        <span>+</span>
                      )}
                    </span>
                  </div>
                </div>
              </div>

              {/* Card Body */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="py-2 rounded-b-xl"
                  style={{ backgroundColor: colors.pinkdark, borderRadius: 16 }}
                >
                  <div
                    className="mx-3 mt-[-10px] mb-2 px-6 py-4 border shadow-md relative z-0 rounded-xl min-h-[80px] flex items-center" // Fixed minimum height for answer section
                    style={{
                      backgroundColor: colors.whites,
                      borderColor: colors.blue,
                      borderRadius: 16,
                    }}
                  >
                    <p
                      className="text-md leading-relaxed"
                      style={{
                        color: colors.blacks,
                        fontFamily: fonts.body,
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