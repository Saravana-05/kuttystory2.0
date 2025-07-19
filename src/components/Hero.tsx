import React, { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { motion } from "framer-motion";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";

// 📸 Import Hero Images
import babyRed from "../assets/images/babyred.webp";
import babyPink from "../assets/images/babypink.jpg";
import babyMurugan from "../assets/images/ks2.jpeg";
import babyKrish from "../assets/images/babykrish.jpeg";

const heroImages = [
  {
    url: babyRed,
    caption: "Sunshine in Tiny Toes",
    subtext:
      "Wrapped in red and wonder, he meets the world with sun-kissed cheeks and sparkly eyes.",
  },
  {
    url: babyPink,
    caption: "The Look That Stays Forever",
    subtext:
      "In her soft eyes, she gazes into your soul —a moment you’ll hold forever.",
  },
  {
    url: babyMurugan,
    caption: "Divine in Every Detail",
    subtext:
      "Draped in Murugan's charm, every smile feels sacred, every pose a blessing.",
  },
  {
    url: babyKrish,
    caption: "A Giggle from the Gods",
    subtext:
      "With a feathered crown and playful grin, he dances into your memories forever.",
  },
];

const pastelColors = [
  colors.pinkmedium,
  colors.blue,
  colors.pinklight,
  colors.lightpurple,
  colors.cream,
];

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  useEffect(() => {
    startAutoSlide();
    return () => stopAutoSlide();
  }, []);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) clearInterval(timerRef.current);
  };

  const handleManualChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
    startAutoSlide();
  };

  const sparkles = useMemo(
    () =>
      Array.from({ length: 30 }).map((_, i) => {
        const color =
          pastelColors[Math.floor(Math.random() * pastelColors.length)];
        const left = Math.random() * 100;
        const delay = Math.random() * 8;
        const duration = Math.random() * 8 + 5;
        const size = Math.random() * 8 + 6;

        return (
          <div
            key={i}
            className="absolute rounded-full animate-sparkless"
            style={{
              left: `${left}%`,
              top: "-20px",
              width: `${size}px`,
              height: `${size}px`,
              backgroundColor: color,
              opacity: 0.9,
              animationDelay: `${delay}s`,
              animationDuration: `${duration}s`,
              filter: "blur(0.6px) drop-shadow(0 0 3px rgba(255,255,255,0.4))",
              zIndex: 5,
            }}
          />
        );
      }),
    []
  );

  return (
    <section
      id="home"
      className="relative w-full overflow-visible flex items-center justify-center min-h-screen z-10"
      style={{ fontFamily: fonts.body, background: colors.pinkdark }}
    >
      <div className="absolute top-0 w-full h-[96px] sm:h-[112px] lg:h-[128px] z-[1] pointer-events-none" />

      <div
        className="absolute inset-0 z-0 shadow-lg"
        style={{
          background: colors.pinkdark,
        }}
      />

      {heroImages.map((image, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
          style={{
            backgroundImage: `url(${image.url})`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            // height: "700px", // ✅ This fixes the visual height
            // maxHeight: "100vh", // optional safety cap
          }}
        >
          <div className="absolute inset-0 bg-pink/20 " />
        </div>
      ))}

      {sparkles}

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-10 lg:px-16 text-white flex flex-col justify-center items-start text-left">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          className="max-w-2xl"
        >
          <div
            className="inline-block mb-4 px-4 sm:px-5 py-2 text-sm font-semibold shadow-sm animate-float rounded-full"
            style={{
              backgroundColor: colors.lightmauve,
              color: colors.cream,
            }}
          >
            {heroImages[currentIndex].caption}
          </div>
          <h1
            className="leading-tight mb-6 drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
            style={{
              fontFamily: fonts.heading,
              fontSize: "clamp(1.8rem, 4vw, 3.75rem)",
            }}
          >
            {heroImages[currentIndex].subtext}
          </h1>
          <Button
            to="/Register"
            className=" mt-4 inline-flex items-center px-5 sm:px-6 py-3 text-lg sm:text-base rounded-full font-medium shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
          >
            Book Your Session
            <ArrowRight className="ml-2 h-5 w-5" />
          </Button>
        </motion.div>
      </div>

      <button
        aria-label="Previous Slide"
        onClick={() =>
          handleManualChange(
            (currentIndex - 1 + heroImages.length) % heroImages.length
          )
        }
        className="absolute left-4 sm:left-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full z-20 transition opacity-80"
        style={{ backgroundColor: colors.pinkmedium }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = colors.purpledark)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = colors.pinkmedium)
        }
      >
        <ChevronLeft className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <button
        aria-label="Next Slide"
        onClick={() =>
          handleManualChange((currentIndex + 1) % heroImages.length)
        }
        className="absolute right-4 sm:right-6 top-1/2 transform -translate-y-1/2 p-2 sm:p-3 rounded-full z-20 transition opacity-80"
        style={{ backgroundColor: colors.pinkmedium }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = colors.purpledark)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = colors.pinkmedium)
        }
      >
        <ChevronRight className="text-white w-5 h-5 sm:w-6 sm:h-6" />
      </button>

      <div className="absolute bottom-4 sm:bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleManualChange(index)}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full ${
              index === currentIndex
                ? "bg-[#fb9ca6]"
                : "bg-[#ffcbcb]/80 hover:bg-[#3d0766ff]/80"
            }`}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
