import React, { useState, useEffect, useRef } from "react";
import { colors, fonts } from "../styles/Theme";
import babyFront from "/src/assets/images/image4.jpg";
import babyBack from "/src/assets/images/registerimage.jpg";
import { useHeartTrail } from "../styles/HeartTrail";

const pastelColors = [colors.pinkmedium, colors.blue, colors.purpledark];

const StorySection: React.FC = () => {
  const [flipped, setFlipped] = useState(false);
  const flipAudioRef = useRef<HTMLAudioElement | null>(null);

  useEffect(() => {
    flipAudioRef.current = new Audio("/src/assets/audio/pageTurn.mp3");
    flipAudioRef.current.load();
    flipAudioRef.current.volume = 0.4;
  }, []);

  const handleImageClick = () => {
    flipAudioRef.current?.play();
    setFlipped(!flipped);
  };

  const handleMouseMove = useHeartTrail();

  return (
    <section
      className="relative z-15 pt-[90px] pb-16 overflow-hidden"
      style={{ backgroundColor: colors.pinkdull }}
      onMouseMove={handleMouseMove}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-10 lg:px-20 flex flex-col md:flex-row items-center gap-12 relative z-10">
        {/* ── Left Content ── */}
        <div className="md:w-1/2 text-left pr-6">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ color: colors.purpledark, fontFamily: fonts.heading }}
          >
            A Story That Should Be Told
          </h2>
          <p
            className="text-base sm:text-lg leading-relaxed text-justify"
            style={{ color: colors.mauve }}
          >
            We all know, there will be jam-packed memories from the day a baby
            gets conceived till their first birthday.&nbsp;
            <span
              className="font-semibold"
              style={{ color: colors.purpledark }}
            >
              Kuttystory
            </span>
            &nbsp;helps record these memories creatively — even scheduling
            professional photo shoots!
            <br />
            <br />
            By the end of the first year, the story gets printed in a premium
            album with a&nbsp;
            <span
              className="font-semibold"
              style={{ color: colors.purpledark }}
            >
              100-year print guarantee
            </span>
            . A timeless treasure for your little one.
          </p>
        </div>

        {/* ── Right Flip Album ── */}
        <div
          className="w-full md:w-1/2 max-w-md relative rounded-3xl shadow-2xl border-8 overflow-hidden group cursor-pointer perspective mx-auto"
          style={{ borderColor: colors.cream }}
          onClick={handleImageClick}
        >
          {/* Heart Badge */}
          <div
            className="absolute bottom-3 right-3 z-20 flex items-center justify-center w-20 h-8 bg-pink-500 text-white text-xs font-semibold rounded-full shadow-lg animate-bounce"
            style={{ fontFamily: fonts.body, backgroundColor: colors.pinkdark }}
          >
            ❤️ Click Me
          </div>

          <div
            className={`relative aspect-[4/3] w-full transition-transform duration-700 transform-style preserve-3d ${
              flipped ? "rotate-y-180" : ""
            }`}
          >
            {/* Front */}
            <div className="absolute w-full h-full backface-hidden">
              <img
                src={babyFront}
                alt="baby front"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>

            {/* Back */}
            <div className="absolute w-full h-full backface-hidden rotate-y-180">
              <img
                src={babyBack}
                alt="baby back"
                className="w-full h-full object-cover rounded-3xl"
              />
            </div>
          </div>

          {/* ── Snowflakes ── */}
          {[...Array(30)].map((_, i) => {
            const color =
              pastelColors[Math.floor(Math.random() * pastelColors.length)];
            const size = Math.random() * 6 + 4;
            const delay = Math.random() * 10;
            const left = Math.random() * 100;
            const duration = Math.random() * 10 + 5;

            return (
              <span
                key={i}
                className="absolute top-0 rounded-full animate-snowfall pointer-events-none"
                style={{
                  left: `${left}%`,
                  width: `${size}px`,
                  height: `${size}px`,
                  backgroundColor: color,
                  opacity: 0.7,
                  animationDelay: `${delay}s`,
                  animationDuration: `${duration}s`,
                  zIndex: 0,
                }}
              />
            );
          })}
        </div>
      </div>

      {/* Global Styles */}
      <style>{`
        .perspective {
          perspective: 1000px;
        }
        .transform-style {
          transform-style: preserve-3d;
        }
        .rotate-y-180 {
          transform: rotateY(180deg);
        }
        .backface-hidden {
          backface-visibility: hidden;
        }

        .heart-trail {
          position: fixed;
          width: 12px;
          height: 12px;
          background: ${colors.pinkdark};
          top: 0;
          left: 0;
          transform: rotate(45deg);
          animation: floatHeart 1s ease-out forwards;
          pointer-events: none;
          z-index: 9999;
          border-radius: 50% 50% 0 0;
        }

        .heart-trail::before,
        .heart-trail::after {
          content: "";
          position: absolute;
          width: 12px;
          height: 12px;
          background: ${colors.pinkdark};
          border-radius: 50%;
        }

        .heart-trail::before {
          top: -6px;
          left: 0;
        }

        .heart-trail::after {
          top: 0;
          left: -6px;
        }

        @keyframes floatHeart {
          0% {
            opacity: 1;
            transform: translateY(0) scale(1);
          }
          100% {
            opacity: 0;
            transform: translateY(-30px) scale(0.8);
          }
        }

        @keyframes snowfall {
          0% {
            transform: translateY(-10%);
            opacity: 1;
          }
          100% {
            transform: translateY(110vh);
            opacity: 0;
          }
        }

        .animate-snowfall {
          animation-name: snowfall;
          animation-timing-function: linear;
          animation-iteration-count: infinite;
          position: absolute;
        }
      `}</style>
    </section>
  );
};

export default StorySection;
