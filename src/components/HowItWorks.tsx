import React from "react";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";
import { motion } from "framer-motion";
import { useHeartTrail } from "../styles/HeartTrail";

// ✅ Import all images manually
import imgsubscribe from "/src/assets/images/subscribebaby.jpg";
// import image1 from "/src/assets/images/image3.jpg";
import parentcam from "/src/assets/images/parentcam.jpg";

// import image2 from "/src/assets/images/image 2.png";
import image3 from "/src/assets/images/image4.jpg";
import angel from "/src/assets/images/angelbaby.jpg";
// import image4 from "/src/assets/images/image5.jpg";
// import image5 from "/src/assets/images/kuttystorybook.png";
import kuttybook from "/src/assets/images/bookheld.png";

const HowItWorks: React.FC = () => {
  const steps = [
    {
      image: imgsubscribe,
      title: "SUBSCRIBE TO KUTTYSTORY",
      description:
        "Provide the expected/actual baby delivery date and add family members who can be the part of kuttystory. Choose a package you would wish to. You can start free too.",
      emoji: "🩷",
    },
    {
      image: angel,
      title: "CAPTURE MOMENTS TO BE CHERISHED",
      description:
        "Record all small and sweet moments as photos and writeups as details as possible. Our Intelligent notification engine will also prompt you to the moments that has to be captured.",
      emoji: "🩶",
    },
    {
      image: image3,
      title: "SCHEDULE A SHOOT",
      description:
        "Schedule a professional photo shoot for maternity, new born, first birthday or any baby event (in our studio or at any location which is convenient for you).",
      emoji: "🤎",
    },
    {
      image: parentcam,
      title: "COLLABORATE AND TELL YOUR LITTLE ONE'S STORY",
      description:
        "You can add any of your family members to contribute to the story. They can create memories and share their view and experience about your little one.",
      emoji: "🩵",
    },
    {
      image: kuttybook,
      title: "PRINT KUTTYSTORY",
      description:
        "After the child's first birthday all your captured moments will be collated into a kuttystory and get printed. We guarantee 100 years of print.",
      emoji: "💜",
    },
  ];
  const handleMouseMove = useHeartTrail();

  return (
    <section
      id="how-it-works"
      className="pt-6 pb-14 sm:pb-12 min-h-[80vh] relative overflow-x-hidden"
      onMouseMove={handleMouseMove} // ✅ hooked up
      style={{
        backgroundColor: colors.cream,
        fontFamily: fonts.body,
      }}
    >
      {/* Background Shapes */}

      <div className="max-w-7xl mx-auto px-3 sm:px-4 md:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2
            className="text-4xl md:text-5xl font-bold mb-6 mt-10 leading-snug"
            style={{
              color: colors.purpledark,
              fontFamily: fonts.heading,
            }}
          >
            How It Works
          </h2>
          <p
            className="text-lg  max-w-3xl mx-auto leading-relaxed px-4 font-medium"
            style={{ color: colors.purpledark }}
          >
            Transform your baby's precious moments into lasting memories with
            our professional storytelling process
          </p>
        </div>
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="relative mb-12 max-w-6xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.6,
              delay: index * 0.15,
              ease: "easeOut",
            }}
            viewport={{ once: false, amount: 0.3 }}
          >
            {/* Connector */}
            {index < steps.length - 1 && (
              <motion.div
                className="hidden md:block absolute left-1/2 top-[8rem] w-[4px] -ml-[2px] origin-top z-0 rounded-full"
                initial={{ scaleY: 0, opacity: 0 }}
                whileInView={{ scaleY: 1, opacity: 1 }}
                transition={{ duration: 0.7, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.3 }}
                style={{
                  height: "4.5rem",
                  background: `linear-gradient(to bottom, ${colors.pinkmedium}, ${colors.pinkdull})`,
                }}
              >
                {/* Animated Dot */}
                <motion.div
                  className="absolute top-full left-1/2 w-4 h-4 -ml-2 rounded-full border-2 shadow-md"
                  initial={{ scale: 0 }}
                  whileInView={{ scale: 1 }}
                  transition={{ delay: 0.5, type: "spring", stiffness: 100 }}
                  viewport={{ once: false }}
                  style={{
                    backgroundColor: colors.whites,
                    borderColor: colors.purpledark,
                  }}
                />
              </motion.div>
            )}

            {/* Step Row */}
            <div
              className={`relative flex flex-col md:flex-row items-center gap-8 ${
                index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
              }`}
            >
              {/* Image + Number + Emoji */}
              <div className="flex-shrink-0 relative group">
                <div className="relative">
                  {/* Step number */}
                  <div
                    className="absolute -top-4 -right-4 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 z-20"
                    style={{
                      backgroundColor: colors.pinkdull,
                      borderColor: colors.lightmauve,
                    }}
                  >
                    <span
                      className="font-bold text-lg"
                      style={{ color: colors.lightpurple }}
                    >
                      {index + 1}
                    </span>
                  </div>

                  {/* Step image */}
                  <div
                    className="w-32 h-32 rounded-3xl overflow-hidden shadow-xl border-4"
                    style={{ borderColor: colors.pinkdull }}
                  >
                    <img
                      src={step.image}
                      alt={step.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                    />
                  </div>

                  {/* Emoji */}
                  <div
                    className="absolute -bottom-2 -left-2 w-12 h-12 rounded-full flex items-center justify-center shadow-lg border-2 transition-transform duration-300"
                    style={{
                      backgroundColor: colors.pinklight,
                      borderColor: colors.pinklight,
                    }}
                  >
                    <span className="text-2xl">{step.emoji}</span>
                  </div>
                </div>
              </div>

              {/* Step Text */}
              <div className="flex-1 group w-full">
                <div
                  className="rounded-3xl p-6 shadow-xl border transition-all duration-500 hover:shadow-2xl hover:-translate-y-2"
                  style={{
                    backgroundColor: colors.pinklight,
                    borderColor: colors.pinkdark,
                  }}
                >
                  <h3
                    className="text-2xl font-bold mb-3"
                    style={{ color: colors.mauve }}
                  >
                    {step.title}
                  </h3>
                  <p
                    className="text-base leading-relaxed mb-4"
                    style={{ color: colors.blacks }}
                  >
                    {step.description}
                  </p>
                  <div
                    className="w-full h-2 rounded-full overflow-hidden"
                    style={{ backgroundColor: colors.pinklight }}
                  >
                    <div
                      className="h-full scale-x-75 group-hover:scale-x-100 transform origin-left transition-transform duration-1000"
                      style={{ backgroundColor: colors.pinkdark }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        ))}

        {/* CTA */}
        <div className="flex justify-center items-center mt-12">
          <Button to="/register">Start Your Magical Journey</Button>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
