import React, { useState, useEffect } from "react";
import { BookOpen, Heart, Star } from "lucide-react";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";
import Sparkles from "../styles/sparkle";
import kuttystoryone from "../assets/images/001_Kutty_Story_Front_Cover_transparent.png";
import kuttystorytwo from "../assets/images/002_Kutty_Story_Inside.png";
import kuttystorythree from "../assets/images/003_Kutty_Story_Cover_bothSides.png";
import pageTurnMp3 from "../assets/audio/pageTurn.mp3";

const Album = () => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [isFlipping, setIsFlipping] = useState(false);

  const images = [kuttystoryone, kuttystorytwo, kuttystorythree];

  useEffect(() => {
    const interval = setInterval(() => {
      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
        setIsFlipping(false);
      }, 300);
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  const handleImageClick = (index: number) => {
    if (index !== currentImageIndex) {
      const audio = new Audio(pageTurnMp3);
      audio.currentTime = 0;
      audio.play();

      setIsFlipping(true);
      setTimeout(() => {
        setCurrentImageIndex(index);
        setIsFlipping(false);
      }, 300);
    }
  };

  return (
    <section
      id="album"
      className="pt-14 sm:pb-11 relative overflow-hidden "
      style={{ backgroundColor: colors.pinkdull, fontFamily: fonts.body }}
    >
      <Sparkles />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Unified Heading */}
        <div className="w-full text-center lg:text-left mb-10">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold leading-snug"
            style={{
              color: colors.purpledark,
              fontFamily: fonts.heading,
            }}
          >
            Baby Story Book
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Book Preview */}
          <div className="relative flex justify-center lg:order-2 order-2">
            <div className="relative">
              <div
                className="absolute -bottom-6 left-1/2 transform -translate-x-1/2 w-96 h-8 bg-300 rounded-full shadow-lg"
                style={{ backgroundColor: colors.blue }}
              ></div>

              <div
                className={`relative transform transition-all duration-500 hover:scale-110 ${
                  isFlipping ? "rotateY-180" : ""
                }`}
              >
                <div
                  className="absolute top-4 left-4 w-80 h-96 bg-400 rounded-3xl opacity-50"
                  style={{ backgroundColor: colors.blue }}
                ></div>
                <div
                  className="absolute top-2 left-2 w-80 h-96 bg-white rounded-3xl shadow-lg border-4 border-200"
                  style={{ borderColor: colors.blue }}
                ></div>

                <div
                  className="relative w-80 h-96 bg-white rounded-3xl shadow-2xl border-4 border-200 overflow-hidden"
                  style={{ borderColor: colors.blue }}
                >
                  {/* Ribbons */}
                  <div
                    className="absolute top-0 right-0 w-0 h-0 border-l-[40px] border-l-transparent border-t-[40px]"
                    style={{ borderTopColor: colors.pinkdark }}
                  ></div>
                  <div
                    className="absolute top-0 left-0 w-0 h-0 border-r-[40px] border-r-transparent border-t-[40px]"
                    style={{ borderTopColor: colors.pinklight }}
                  ></div>

                  <div className="p-6 h-full">
                    <div
                      className="w-full h-full bg-slate-50 rounded-2xl shadow-inner overflow-hidden border-4 border-200 relative"
                      style={{ borderColor: colors.blue }}
                    >
                      <img
                        src={images[currentImageIndex]}
                        alt={`Baby Story Book ${currentImageIndex + 1}`}
                        className="w-full h-full object-contain transition-all duration-500 bg-white"
                        style={{
                          imageRendering: "crisp-edges",
                          filter:
                            "contrast(1.1) brightness(1.05) saturate(1.1)",
                          opacity: isFlipping ? 0 : 1,
                        }}
                        loading="eager"
                      />
                      <div className="absolute inset-0 border-8 border-white rounded-2xl pointer-events-none"></div>
                    </div>
                  </div>

                  {/* Binding */}
                  <div
                    className="absolute left-6 top-6 bottom-6 w-1 rounded-full bg-300"
                    style={{ backgroundColor: colors.blue }}
                  ></div>
                  <div
                    className="absolute left-8 top-6 bottom-6 w-px bg-300"
                    style={{ backgroundColor: colors.blue }}
                  ></div>
                </div>
              </div>
            </div>

            {/* Image Bubbles */}
            <div className="absolute -bottom-12 left-1/2 transform -translate-x-1/2 flex space-x-4">
              {images.map((_, index) => (
                <button
                  key={index}
                  onClick={() => handleImageClick(index)}
                  className={`w-12 h-12 rounded-full transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-125 ${
                    index === currentImageIndex
                      ? `bg-[${colors.pinklight}] ring-4 ring-[colors.blue]-300 scale-125 animate-pulse`
                      : "bg-white border-2 border-slate-200 hover:border-[colors.blue]-300"
                  }`}
                >
                  <div className="w-full h-full flex items-center justify-center">
                    <div
                      className={`w-4 h-4 rounded-full ${
                        index === currentImageIndex
                          ? "bg-white"
                          : "bg-slate-400"
                      }`}
                    ></div>
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Description & Features */}
          <div className="space-y-8 lg:order-1 order-3">
            <div
              className="relative p-6 rounded-3xl shadow-lg border-l-8"
              style={{
                borderColor: colors.pinkdark,
                backgroundColor: colors.cream,
              }}
            >
              <p
                className="text-lg leading-relaxed font-medium"
                style={{
                  color: colors.purpledark,
                  backgroundColor: colors.cream,
                }}
              >
                Create your own picture stories with kuttystory. Gorgeous paper
                finishes, customizable covers, and make your photos and your
                book epic.
              </p>
              <div
                className="absolute -left-3 top-8 w-6 h-6 rounded-full"
                style={{ backgroundColor: colors.pinkdark }}
              ></div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center space-x-4">
                <BookOpen className="h-8 w-8 text-slate-600" />
                <span className="text-slate-700 font-semibold text-lg">
                  Professional quality printing
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Heart className="h-8 w-8 text-slate-600" />
                <span className="text-slate-700 font-semibold text-lg">
                  Customizable covers and layouts
                </span>
              </div>
              <div className="flex items-center space-x-4">
                <Star className="h-8 w-8 text-slate-600" />
                <span className="text-slate-700 font-semibold text-lg">
                  Premium paper finishes
                </span>
              </div>
            </div>

            <div className="pt-4 flex justify-start lg:justify-start justify-center">
              <Button variant="cta">Create your Story Book</Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Album;
