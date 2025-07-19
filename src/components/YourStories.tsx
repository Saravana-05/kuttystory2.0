import React from "react";
import { motion, Variants } from "framer-motion";

import FloatingBackground from "../styles/FloatingBackground";
import { BabyIcons } from "./BabyIcons";
import { colors, fonts } from "../styles/Theme";

import babyApple from "../assets/images/babyapple.jpeg";
import babySmile from "../assets/images/babysmile.jpg";
import babyJ from "../assets/images/babyj.jpeg";
import babyRainbow from "../assets/images/babyrainbow.jpeg";
import babyPose from "../assets/images/babypose.jpg";
import babyJingle from "../assets/images/babyjingle.jpg";

const fadeUp: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

const babyMoments = [
  {
    image: babyApple,
    text: "Tiny kicks, growing dreams — this journey is just beginning.",
  },
  {
    image: babySmile,
    text: "Glowing hearts and waiting motherhood is magic in motion.",
  },
  {
    image: babyJ,
    text: "Two hearts beating together — soon to meet, never to part.",
  },
  {
    image: babyRainbow,
    text: "The softest moments are the ones we never forget.",
  },
  {
    image: babyPose,
    text: "Every heartbeat heard is a promise of a lifetime of love.",
  },
  {
    image: babyJingle,
    text: "A tiny flutter today, a hug tomorrow.",
  },
];

const YourStories = () => {
  return (
    <section
      className="relative py-8 sm:pb-12 overflow-hidden px-4  pb-[90px]"
      style={{
        backgroundColor: colors.pinkdull,
        fontFamily: fonts.body,
      }}
    >
      <FloatingBackground />
      <div className="max-w-6xl mx-auto text-center mb-10">
        {/* ✍️ Story Section */}
        <div className="relative overflow-hidden">
          <FloatingBackground />
          <h3
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-10 leading-snug"
            style={{
              fontFamily: fonts.heading,
              color: colors.purpledark,
            }}
          >
            Write Your Baby's Story
          </h3>
          <p
            className="text-center text-lg font-medium max-w-6xl mx-auto mb-10"
            style={{ color: colors.purpledark }}
          >
            Share your most precious moments and inspire others. Each story is a
            celebration of new beginnings and pure love.
          </p>

          {/* 🖼️ Desktop Grid */}
          <div className="hidden md:grid grid-cols-6 gap-6 text-left">
            {[0, 1, 2].map((i) => (
              <React.Fragment key={`row1-${i}`}>
                <motion.div
                  className="col-span-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <img
                    src={babyMoments[i].image}
                    alt={`Moment ${i + 1}`}
                    className="w-full h-44 object-cover rounded-xl shadow border-4 hover:scale-105 transition-transform duration-500"
                    style={{ borderColor: colors.lightpurple }}
                  />
                </motion.div>

                <motion.div
                  className="col-span-1 flex items-center justify-center text-center p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div>
                    <div className="mb-2">
                      {BabyIcons[i % BabyIcons.length]}
                    </div>
                    <p
                      className="text-lg leading-relaxed font-medium"
                      style={{ color: colors.mauve }}
                    >
                      {babyMoments[i].text}
                    </p>
                  </div>
                </motion.div>
              </React.Fragment>
            ))}

            {[3, 4, 5].map((i) => (
              <React.Fragment key={`row2-${i}`}>
                <motion.div
                  className="col-span-1 flex items-center justify-center text-center p-4"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <div>
                    <div className="mb-2">
                      {BabyIcons[i % BabyIcons.length]}
                    </div>
                    <p
                      className=" text-lg leading-relaxed font-medium "
                      style={{ color: colors.mauve }}
                    >
                      {babyMoments[i].text}
                    </p>
                  </div>
                </motion.div>

                <motion.div
                  className="col-span-1"
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true }}
                  variants={fadeUp}
                >
                  <img
                    src={babyMoments[i].image}
                    alt={`Moment ${i + 1}`}
                    className="w-full h-44 object-cover rounded-xl shadow border-4 hover:scale-105 transition-transform duration-500"
                    style={{ borderColor: colors.lightpurple }}
                  />
                </motion.div>
              </React.Fragment>
            ))}
          </div>

          {/* 📱 Mobile Grid */}
          {/* 📱 Improved Mobile Grid - 2 Columns */}
          <div className="md:hidden grid grid-cols-2 gap-4">
            {babyMoments.map((moment, idx) => (
              <motion.div
                key={idx}
                className="rounded-xl shadow-md overflow-hidden flex flex-col"
                style={{ backgroundColor: colors.pinkmedium }}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
              >
                <img
                  src={moment.image}
                  alt={`Moment ${idx + 1}`}
                  className="w-full h-auto object-cover shadow rounded-xl transform-gpu hover:scale-105 transition-transform duration-1000 hover:border-3"
                  style={{
                    willChange: "transform",
                    borderColor: colors.lightpurple,
                    aspectRatio: "3/4", // consistent height/width
                  }}
                />
                <div className="p-2 text-center flex-1 flex flex-col items-center justify-center">
                  <div className="text-xl mb-1">
                    {BabyIcons[idx % BabyIcons.length]}
                  </div>
                  <p
                    className="text-md leading-snug"
                    style={{ color: colors.mauve }}
                  >
                    {moment.text}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourStories;
