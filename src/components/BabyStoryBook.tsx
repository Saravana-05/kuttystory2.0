import React, { useState } from "react";
import { BookOpen, Heart, Star } from "lucide-react";

const BabyStory: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState(
    "https://kuttystory.com/media/album/001_Kutty_Story_Front_Cover_transparent.png"
  );
  const [isTransitioning, setIsTransitioning] = useState(false);

  const bookFrames = [
    {
      img: "https://images.pexels.com/photos/1648377/pexels-photo-1648377.jpeg?auto=compress&cs=tinysrgb&w=150",
      gradient: "linear-gradient(135deg, #f999b7, #4a1c40)",
    },
    {
      img: "https://images.pexels.com/photos/1670770/pexels-photo-1670770.jpeg?auto=compress&cs=tinysrgb&w=150",
      gradient: "linear-gradient(135deg, #3f0968, #f999b7)",
    },
    {
      img: "https://images.pexels.com/photos/3763152/pexels-photo-3763152.jpeg?auto=compress&cs=tinysrgb&w=150",
      gradient: "linear-gradient(135deg, #4a1c40, #f999b7)",
    },
    {
      img: "https://images.pexels.com/photos/3737540/pexels-photo-3737540.jpeg?auto=compress&cs=tinysrgb&w=150",
      gradient: "linear-gradient(135deg, #f999b7, #3f0968)",
    },
  ];

  const handleImageClick = (clickedImageUrl: string) => {
    if (clickedImageUrl === selectedImage) return;

    setIsTransitioning(true);

    setTimeout(() => {
      setSelectedImage(clickedImageUrl);
      setIsTransitioning(false);
    }, 800);
  };

  return (
    <section
      id="album"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "rgba(249, 153, 183, 0.1)" }}
    >
      {/* Funky Background Elements
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-10 right-20 text-5xl animate-bounce">
          :books:
        </div>
        <div className="absolute bottom-20 left-10 text-4xl animate-pulse">
          :sparkles:
        </div>
        <div className="absolute top-1/2 right-10 text-3xl animate-spin">
          :art:
        </div>
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <div>
            <h2
              className="text-4xl font-bold mb-6 animate-pulse"
              style={{ color: "#4a1c40" }}
            >
              BABY'S STORY BOOK :book:
            </h2>
            <p
              className="text-lg mb-8 leading-relaxed"
              style={{ color: "#3f0968" }}
            >
              Create your own picture stories with kuttystory. Gorgeous paper
              finishes, customizable covers, and make your photos and your book
              epic! :sparkles:
            </p>

            <div className="space-y-4 mb-8">
              <div className="flex items-center space-x-3">
                <div
                  className="rounded-full p-2"
                  style={{ backgroundColor: "#f999b7" }}
                >
                  <BookOpen className="h-5 w-5" style={{ color: "#fafafa" }} />
                </div>
                <span style={{ color: "#4a1c40" }}>
                  Professional quality printing :printer:
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="rounded-full p-2"
                  style={{ backgroundColor: "#3f0968" }}
                >
                  <Heart className="h-5 w-5" style={{ color: "#fafafa" }} />
                </div>
                <span style={{ color: "#4a1c40" }}>
                  Customizable covers and layouts :art:
                </span>
              </div>
              <div className="flex items-center space-x-3">
                <div
                  className="rounded-full p-2"
                  style={{ backgroundColor: "#f999b7" }}
                >
                  <Star className="h-5 w-5" style={{ color: "#fafafa" }} />
                </div>
                <span style={{ color: "#4a1c40" }}>
                  Premium paper finishes :star:
                </span>
              </div>
            </div>

            <button
              className="inline-flex items-center px-8 py-4 rounded-full font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105 border-2"
              style={{
                backgroundColor: "#f999b7",
                color: "#fafafa",
                borderColor: "#3f0968",
              }}
            >
              Create Your Story Book :books:
              <BookOpen className="ml-2 h-5 w-5" />
            </button>
          </div>

          {/* Right Content - Unique Baby Story Book Collection */}
          <div className="relative flex items-center justify-center">
            {/* Main Featured Book in Center */}
            <div className="relative z-20 transform hover:scale-105 transition-all duration-500">
              <div
                className="w-80 h-96 rounded-2xl shadow-2xl border-8 relative overflow-hidden transform hover:rotate-2 transition-all duration-500"
                style={{
                  background: "linear-gradient(135deg, #f999b7, #3f0968)",
                  borderColor: "#fafafa",
                  boxShadow:
                    "0 25px 50px -12px rgba(0, 0, 0, 0.25), 0 0 0 1px rgba(255,255,255,0.1)",
                }}
              >
                <div
                  className="absolute inset-4 rounded-xl overflow-hidden"
                  style={{ backgroundColor: "#fafafa" }}
                >
                  <img
                    src={selectedImage}
                    alt="Baby Story Book Cover"
                    className={`w-full h-3/4 object-cover transition-all duration-800 ${
                      isTransitioning
                        ? "opacity-0 scale-110 blur-sm"
                        : "opacity-100 scale-100 blur-0"
                    }`}
                  />
                  <div
                    className="p-4"
                    style={{
                      background:
                        "linear-gradient(to right, rgba(249, 153, 183, 0.2), rgba(63, 9, 104, 0.2))",
                    }}
                  >
                    <h3
                      className="text-lg font-bold"
                      style={{ color: "#4a1c40" }}
                    ></h3>
                    <p className="text-sm" style={{ color: "#3f0968" }}>
                      kuttystory.....!!!
                    </p>
                  </div>
                </div>
                <div
                  className="absolute top-4 right-4 px-3 py-1 rounded-full text-xs font-bold animate-pulse"
                  style={{ backgroundColor: "#f999b7", color: "#fafafa" }}
                >
                  NEW :tada:
                </div>

                {/* Glow effect */}
                <div
                  className="absolute inset-0 rounded-2xl opacity-75 blur-xl animate-pulse"
                  style={{
                    background: "linear-gradient(135deg, #f999b7, #3f0968)",
                    zIndex: -1,
                  }}
                ></div>
              </div>
            </div>

            {/* Enhanced Colorful Popup Effects */}
            {isTransitioning && (
              <div className="absolute inset-0 z-30 pointer-events-none">
                {/* Sparkle Effects */}
                <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-yellow-300 rounded-full animate-ping"></div>
                <div className="absolute top-1/3 right-1/4 w-2 h-2 bg-pink-400 rounded-full animate-ping delay-100"></div>
                <div className="absolute bottom-1/4 left-1/3 w-4 h-4 bg-purple-400 rounded-full animate-ping delay-200"></div>
                <div className="absolute bottom-1/3 right-1/3 w-3 h-3 bg-blue-400 rounded-full animate-ping delay-300"></div>
                <div className="absolute top-1/2 left-1/2 w-5 h-5 bg-green-400 rounded-full animate-ping delay-400"></div>

                {/* Expanding Circles */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2">
                  <div className="w-20 h-20 border-4 border-pink-300 rounded-full animate-ping"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-40 h-40 border-4 border-purple-300 rounded-full animate-ping delay-200"></div>
                  <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-60 h-60 border-4 border-blue-300 rounded-full animate-ping delay-400"></div>
                </div>

                {/* Floating Hearts */}
                <div className="absolute top-10 left-10 text-2xl animate-bounce">
                  :sparkling_heart:
                </div>
                <div className="absolute top-20 right-20 text-xl animate-bounce delay-100">
                  :sparkles:
                </div>
                <div className="absolute bottom-20 left-20 text-2xl animate-bounce delay-200">
                  :star2:
                </div>
                <div className="absolute bottom-10 right-10 text-xl animate-bounce delay-300">
                  :dizzy:
                </div>

                {/* Gradient Overlay with Animation */}
                <div className="absolute inset-0 bg-gradient-to-br from-pink-200 via-purple-200 via-blue-200 to-green-200 opacity-40 animate-pulse"></div>

                {/* Rotating Stars */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin">
                  <div className="w-8 h-8 text-yellow-400 animate-pulse">
                    :star:
                  </div>
                </div>
                <div className="absolute top-1/3 left-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-spin delay-200">
                  <div className="w-6 h-6 text-pink-400 animate-pulse">
                    :star2:
                  </div>
                </div>
                <div className="absolute bottom-1/3 right-1/3 transform -translate-x-1/2 -translate-y-1/2 animate-spin delay-400">
                  <div className="w-7 h-7 text-purple-400 animate-pulse">
                    :sparkles:
                  </div>
                </div>

                {/* Magic Wand Effect */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 animate-spin">
                  <div className="w-1 h-20 bg-gradient-to-t from-pink-400 to-purple-400 rounded-full opacity-70"></div>
                </div>
              </div>
            )}

            {/* Small Frames Surrounding the Big Frame */}
            {/* Top Left */}
            <div className="absolute -top-8 -left-12 z-10">
              <div
                className="w-20 h-26 rounded-lg shadow-xl transform hover:scale-125 hover:rotate-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  background: bookFrames[0].gradient,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                onClick={() => handleImageClick(bookFrames[0].img)}
              >
                <div className="p-2 h-full flex flex-col">
                  <img
                    src={
                      selectedImage === bookFrames[0].img
                        ? "https://kuttystory.com/media/album/001_Kutty_Story_Front_Cover_transparent.png"
                        : bookFrames[0].img
                    }
                    alt="Frame 1"
                    className="w-full h-16 object-cover rounded transition-all duration-300 hover:brightness-110"
                  />
                  <div className="flex-1 flex items-center justify-center">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#fafafa" }}
                    >
                      Frame 1
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-pink-300 to-purple-300 rounded-lg opacity-0 hover:opacity-75 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Top Right */}
            <div className="absolute -top-8 -right-12 z-10">
              <div
                className="w-20 h-26 rounded-lg shadow-xl transform hover:scale-125 hover:-rotate-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  background: bookFrames[1].gradient,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                onClick={() => handleImageClick(bookFrames[1].img)}
              >
                <div className="p-2 h-full flex flex-col">
                  <img
                    src={
                      selectedImage === bookFrames[1].img
                        ? "https://kuttystory.com/media/album/001_Kutty_Story_Front_Cover_transparent.png"
                        : bookFrames[1].img
                    }
                    alt="Frame 2"
                    className="w-full h-16 object-cover rounded transition-all duration-300 hover:brightness-110"
                  />
                  <div className="flex-1 flex items-center justify-center">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#fafafa" }}
                    >
                      Frame 2
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-purple-300 to-blue-300 rounded-lg opacity-0 hover:opacity-75 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Bottom Left */}
            <div className="absolute -bottom-8 -left-12 z-10">
              <div
                className="w-20 h-26 rounded-lg shadow-xl transform hover:scale-125 hover:-rotate-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  background: bookFrames[2].gradient,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                onClick={() => handleImageClick(bookFrames[2].img)}
              >
                <div className="p-2 h-full flex flex-col">
                  <img
                    src={
                      selectedImage === bookFrames[2].img
                        ? "https://kuttystory.com/media/album/001_Kutty_Story_Front_Cover_transparent.png"
                        : bookFrames[2].img
                    }
                    alt="Frame 3"
                    className="w-full h-16 object-cover rounded transition-all duration-300 hover:brightness-110"
                  />
                  <div className="flex-1 flex items-center justify-center">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#fafafa" }}
                    >
                      Frame 3
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-blue-300 to-green-300 rounded-lg opacity-0 hover:opacity-75 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Bottom Right */}
            <div className="absolute -bottom-8 -right-12 z-10">
              <div
                className="w-20 h-26 rounded-lg shadow-xl transform hover:scale-125 hover:rotate-6 transition-all duration-300 cursor-pointer relative overflow-hidden"
                style={{
                  background: bookFrames[3].gradient,
                  boxShadow:
                    "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)",
                }}
                onClick={() => handleImageClick(bookFrames[3].img)}
              >
                <div className="p-2 h-full flex flex-col">
                  <img
                    src={
                      selectedImage === bookFrames[3].img
                        ? "https://kuttystory.com/media/album/001_Kutty_Story_Front_Cover_transparent.png"
                        : bookFrames[3].img
                    }
                    alt="Frame 4"
                    className="w-full h-16 object-cover rounded transition-all duration-300 hover:brightness-110"
                  />
                  <div className="flex-1 flex items-center justify-center">
                    <span
                      className="text-xs font-bold"
                      style={{ color: "#fafafa" }}
                    >
                      Frame 4
                    </span>
                  </div>
                </div>
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-0 hover:opacity-100 transition-opacity duration-300"></div>
                <div className="absolute -inset-1 bg-gradient-to-r from-green-300 to-pink-300 rounded-lg opacity-0 hover:opacity-75 blur-md transition-opacity duration-300 -z-10"></div>
              </div>
            </div>

            {/* Enhanced Decorative Elements */}
            <div
              className="absolute top-16 right-16 w-12 h-12 rounded-full opacity-60 animate-pulse"
              style={{
                backgroundColor: "#f999b7",
                boxShadow: "0 0 20px rgba(249, 153, 183, 0.5)",
              }}
            ></div>
            <div
              className="absolute bottom-32 right-4 w-8 h-8 rounded-full opacity-40 animate-pulse delay-1000"
              style={{
                backgroundColor: "#3f0968",
                boxShadow: "0 0 15px rgba(63, 9, 104, 0.4)",
              }}
            ></div>
            <div
              className="absolute top-32 left-4 w-6 h-6 rounded-full opacity-50 animate-pulse delay-500"
              style={{
                backgroundColor: "#4a1c40",
                boxShadow: "0 0 10px rgba(74, 28, 64, 0.3)",
              }}
            ></div>

            {/* Floating Particles */}
            <div className="absolute top-20 left-20 w-2 h-2 bg-pink-300 rounded-full animate-ping delay-1000"></div>
            <div className="absolute bottom-40 right-20 w-2 h-2 bg-purple-300 rounded-full animate-ping delay-1500"></div>
            <div className="absolute top-40 right-40 w-1 h-1 bg-blue-300 rounded-full animate-ping delay-2000"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BabyStory;
