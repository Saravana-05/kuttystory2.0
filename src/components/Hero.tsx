import React, { useState, useEffect, useRef, useMemo } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";

// 📸 Import Hero Images
import babyRed from "../assets/images/bluebaby.webp";
import babyPink from "../assets/images/babyheader.webp";
import babyMurugan from "../assets/images/murganbaby.webp";
import babyKrish from "../assets/images/little_krishna.webp"

const heroImages = [
  {
    url: babyRed,
    caption: "Sunshine in Tiny Toes",
    subtext:
      "In the gentle embrace of dreams, he rests with innocence, a tiny heart glowing beside his furry friend.",
    alt: "Baby boy in blue with tiny toes and soft dreams",
    title: "Sunshine in Tiny Toes - KuttyStory Baby Photography",
  },
  {
    url: babyPink,
    caption: "The Look That Stays Forever",
    subtext:
      "In her soft eyes, she gazes into your soul — a moment you'll hold forever.",
    alt: "Baby girl in pink gazing softly with innocent eyes",
    title: "The Look That Stays Forever - KuttyStory Baby Portrait",
  },
  {
    url: babyMurugan,
    caption: "Divine in Every Detail",
    subtext:
      "Draped in Murugan's charm, every smile feels sacred, every pose a blessing.",
    alt: "Baby dressed as Lord Murugan with divine charm",
    title: "Divine in Every Detail - KuttyStory Themed Baby Shoot",
  },
  {
    url: babyKrish,
    caption: "A Giggle from the Gods",
    subtext:
      "With a feathered crown and playful grin, he dances into your memories forever.",
    alt: "Baby dressed as Little Krishna with a playful smile",
    title: "A Giggle from the Gods - KuttyStory Krishna Baby Shoot",
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
  const [isLoaded, setIsLoaded] = useState(false);
  const timerRef = useRef<ReturnType<typeof setInterval> | null>(null);

  // 🔄 Auto Slide
  useEffect(() => {
    // Only start auto-slide after first image loads
    if (isLoaded) {
      startAutoSlide();
    }
    return () => stopAutoSlide();
  }, [isLoaded]);

  const startAutoSlide = () => {
    stopAutoSlide();
    timerRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % heroImages.length);
    }, 5000);
  };

  const stopAutoSlide = () => {
    if (timerRef.current) {
      clearInterval(timerRef.current);
      timerRef.current = null;
    }
  };

  const handleManualChange = (newIndex: number) => {
    setCurrentIndex(newIndex);
    startAutoSlide();
  };

  // Handle first image load
  const handleFirstImageLoad = () => {
    setIsLoaded(true);
  };

  // ✨ Sparkles - Only render after images load
  const sparkles = useMemo(
    () =>

      isLoaded ? Array.from({ length: 10 }).map((_, i) => {

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
              filter:
                "blur(0.6px) drop-shadow(0 0 3px rgba(255,255,255,0.4))",
              zIndex: 5,
            }}
          />
        );
      }) : [],
    [isLoaded]
  );

  return (
    <section
      id="home"
      className="relative w-full overflow-visible flex items-center justify-center min-h-screen z-10"
      style={{ fontFamily: fonts.body, background: colors.pinkdark }}
    >
      {/* Header Offset */}
      <div className="absolute top-0 w-full h-[96px] sm:h-[112px] lg:h-[128px] z-[1] pointer-events-none" />

      {/* Dark Overlay */}
      <div
        className="absolute inset-0 z-0 shadow-lg"
        style={{ background: colors.blacks }}
      />


      {/* Background Images - Optimized */}
      {heroImages.map((image, index) => (
        <img
          key={index}
          src={image.url}
          alt={image.caption}
          title={image.title}
          className={`absolute inset-0 w-full h-full object-cover ${
            index === currentIndex ? "opacity-100 z-0" : "opacity-0"
          }`}
          loading={index === 0 ? "eager" : "lazy"}
          fetchPriority={index === 0 ? "high" : "auto"}
          onLoad={index === 0 ? handleFirstImageLoad : undefined}
          style={{
            transition: index === currentIndex ? 'opacity 0.8s ease-in-out' : 'none',
            willChange: index === currentIndex ? 'opacity' : 'auto'
          }}
        />
      ))}
      <div className="absolute inset-0 bg-pink/20" />


      {/* Sparkles - Only render when loaded */}
      {sparkles}

      {/* Text + CTA - Responsive layout with proper spacing for controls */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-16 sm:px-20 md:px-24 lg:px-32 text-white flex flex-col justify-center items-start text-left" style={{ marginTop: '-8vh' }}>
        <div
          key={currentIndex}
          className="max-w-xs sm:max-w-sm md:max-w-xl lg:max-w-2xl space-y-3 sm:space-y-4"
          style={{
            opacity: isLoaded ? 1 : 0,
            transform: isLoaded ? 'translateY(0)' : 'translateY(30px)',
            transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'
          }}
        >
          {/* Caption */}
          <div
            className="inline-block mb-2 sm:mb-3 px-3 sm:px-4 md:px-5 py-1.5 sm:py-2 text-xs sm:text-sm font-semibold shadow-sm animate-float rounded-full"
            style={{ backgroundColor: colors.lightmauve, color: colors.cream }}
          >
            {heroImages[currentIndex].caption}
          </div>

          {/* Subtext - Updated with smaller text sizes */}
          <div
            className="py-4 sm:py-5 md:py-6 px-3 sm:px-4 rounded-lg shadow-md"
            style={{ backgroundColor: "rgba(72, 37, 52, 0.35)" }}
          >
            <h1
              className="leading-tight drop-shadow-[0_4px_6px_rgba(0,0,0,0.4)]"
              style={{
                fontFamily: fonts.heading,
                fontSize: "clamp(1rem, 2.5vw, 2rem)", // Reduced from clamp(1.2rem, 3.5vw, 3.75rem)
                lineHeight: "1.3", // Slightly increased line height for better readability
              }}
            >
              {heroImages[currentIndex].subtext}
            </h1>
          </div>

          {/* CTA Button */}
          <div className="pt-2 sm:pt-3">
            <Button
              to="/Register"
              title="Book your KuttyStory baby photography session"
              className="inline-flex items-center px-4 sm:px-5 md:px-6 py-2.5 sm:py-3 text-sm sm:text-base md:text-lg rounded-full font-medium shadow-lg transition-all duration-300 ease-in-out hover:scale-105"
            >
              Book Your Session
              <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </div>
        </div>
      </div>

      {/* Prev Button - Improved mobile positioning */}
      <button
        aria-label="Previous Slide"
        title="Previous baby photo"
        onClick={() =>
          handleManualChange(
            (currentIndex - 1 + heroImages.length) % heroImages.length
          )
        }
        className="absolute left-2 sm:left-4 md:left-6 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition opacity-80 shadow-lg"
        style={{ backgroundColor: colors.pinkmedium }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = colors.purpledark)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = colors.pinkmedium)
        }
      >
        <ChevronLeft className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Next Button - Improved mobile positioning */}
      <button
        aria-label="Next Slide"
         title="Next baby photo"
        onClick={() =>
          handleManualChange((currentIndex + 1) % heroImages.length)
        }
        className="absolute right-2 sm:right-4 md:right-6 top-1/2 transform -translate-y-1/2 p-1.5 sm:p-2 md:p-3 rounded-full z-20 transition opacity-80 shadow-lg"
        style={{ backgroundColor: colors.pinkmedium }}
        onMouseEnter={(e) =>
          (e.currentTarget.style.backgroundColor = colors.purpledark)
        }
        onMouseLeave={(e) =>
          (e.currentTarget.style.backgroundColor = colors.pinkmedium)
        }
      >
        <ChevronRight className="text-white w-4 h-4 sm:w-5 sm:h-5 md:w-6 md:h-6" />
      </button>

      {/* Slide Dots - Better mobile spacing */}
      <div className="absolute bottom-16 sm:bottom-20 md:bottom-24 left-1/2 transform -translate-x-1/2 flex space-x-3 sm:space-x-4 z-20">
        {heroImages.map((_, index) => (
          <button
            key={index}
            aria-label={`Go to slide ${index + 1}`}
            onClick={() => handleManualChange(index)}
            className="flex items-center justify-center w-10 h-10 sm:w-12 sm:h-12 rounded-full transition-all duration-200"
          >
            <span
              className={`w-3 h-3 sm:w-4 sm:h-4 rounded-full transition-all duration-200 ${
                index === currentIndex
                  ? "bg-[#fb9ca6] scale-125"
                  : "bg-[#ffcbcb]/80 hover:bg-[#fb9ca6]/80 hover:scale-110"
              }`}
            />
          </button>
        ))}
      </div>

      {/* Google Play Badge - Responsive positioning */}
      <div className="absolute bottom-4 right-4 sm:bottom-6 sm:right-6 md:bottom-8 md:right-8 z-20">
        <a
          href="https://play.google.com/store/apps/details?id=com.skylimit.kuttystory"
          target="_blank"
          rel="noopener noreferrer"
          title="Download KuttyStory app on Google Play"
          className="block"
        >
          <img
            src="https://news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg"
            alt="Get KuttyStory app on Google Play"
            title="KuttyStory App - Google Play Store"

            className="w-[100px] sm:w-[130px] md:w-[150px] lg:w-[161px] transition-transform duration-200 hover:scale-105"
            loading="lazy"

          />
        </a>
      </div>
    </section>
  );
};

export default Hero;