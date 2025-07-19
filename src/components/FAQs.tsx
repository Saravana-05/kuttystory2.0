import React, { useState } from "react";
import { colors, fonts } from "../styles/Theme"; // Adjust path as needed
import Button from "../styles/Button";
// import Sparkles from "../styles/sparkle";
import { useHeartTrail } from "../styles/HeartTrail";

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
  const handleMouseMove = useHeartTrail();

  return (
    <section
      id="faqs"
      className="py-20 px-4 relative"
      onMouseMove={handleMouseMove} // ✅ hooked up
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

      {/* Two Column Folder Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-6xl mx-auto">
        {faqs.map((faq, index) => {
          const isOpen = openIndex === index;

          return (
            <div key={index} className="relative">
              {/* Folder Style Top */}
              <div
                className="relative z-10 cursor-pointer"
                onClick={() => setOpenIndex(isOpen ? null : index)}
              >
                <div
                  className="px-6 py-4 text-white font-medium border shadow-md"
                  style={{
                    backgroundColor: colors.lightpurple,
                    borderColor: colors.pinkmedium,
                    clipPath:
                      "polygon(0 0, 60px 0, 70px 10px, 100% 10px, 100% 100%, 0 100%)",
                    borderBottom: isOpen
                      ? "none"
                      : `1px solid ${colors.purpledark}`,
                    borderBottomLeftRadius: isOpen ? 0 : 12,
                    borderBottomRightRadius: isOpen ? 0 : 12,
                    borderTopLeftRadius: 12,
                    borderTopRightRadius: 12,
                  }}
                >
                  <div className="flex justify-between items-center">
                    <span
                      className="text-lg text-left"
                      style={{ fontFamily: fonts.heading }}
                    >
                      {faq.question}
                    </span>
                    <span className="text-2xl leading-none select-none">
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

              {/* File Content */}
              <div
                className={`transition-all duration-500 overflow-hidden ${
                  isOpen ? "max-h-[300px] opacity-100" : "max-h-0 opacity-0"
                }`}
              >
                <div
                  className="py-2 rounded-b-xl"
                  style={{ backgroundColor: colors.pinkdark }}
                >
                  <div
                    className="mx-3 mt-[-10px] mb-2 px-6 py-4 border shadow-md rounded-b-lg relative z-0"
                    style={{
                      backgroundColor: colors.whites,
                      borderColor: colors.blue,
                    }}
                  >
                    {/* <div
                      className="absolute top-0 left-2 w-full h-1 rounded-t-xl"
                      style={{ backgroundColor: colors.cream }}
                    /> */}
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
            </div>
          );
        })}
      </div>

      {/* Contact Section */}
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
              className="text-2xl font-black mb-3 "
              style={{ color: colors.purpledark }}
            >
              Still have questions?{" "}
            </h3>
            <p
              className="text-base mb-6 max-w-xl mx-auto leading-relaxed font-semibold "
              style={{ color: colors.lightmauve }}
            >
              For more queries, email us at{" "}
              <strong>admin@kuttystory.com</strong> or call{" "}
              <strong>+91 98418 88001</strong>.
            </p>
            <Button variant="cta" to="/Register">
              Contact us
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQs;
