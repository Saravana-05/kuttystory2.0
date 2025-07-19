import React, { useState, useEffect } from "react";
import {
  Star,
  Heart,
  Quote,
  ChevronLeft,
  ChevronRight,
  Camera,
  Users,
  Award,
} from "lucide-react";
import Sparkles from "../styles/sparkle";

import babyCenter from "/src/assets/images/babycenter.jpg";
import image3 from "/src/assets/images/image3.jpg";
import babyShip from "/src/assets/images/babyship.jpeg";
import image6 from "/src/assets/images/image6.jpg";
import image7 from "/src/assets/images/image7.jpg";
import { colors, fonts } from "../styles/Theme";
import Button from "../styles/Button";
const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [isHovering, setIsHovering] = useState(false);

  const testimonials = [
    {
      name: "Sarah Johnson",
      role: "New Mom",
      image: babyCenter,
      rating: 5,
      text: "Kutty Story captured the most precious moments of our baby's first year. The photographers were so patient and gentle with our little one. The final album is absolutely stunning!",
      category: "Baby Photography",
      location: "New York",
      icon: <Camera className="h-6 w-6" />,
    },
    {
      name: "Michael & Emma",
      role: "Happy Parents",
      image: image3,
      rating: 5,
      text: "From maternity to first birthday, Kutty Story has been with us every step of the way. Their creativity and professionalism are unmatched. Highly recommended!",
      category: "Family Sessions",
      location: "California",
      icon: <Users className="h-6 w-6" />,
    },
    {
      name: "Priya Sharma",
      role: "Proud Mother",
      image: babyShip,
      rating: 5,
      text: "The team at Kutty Story made our photo session so comfortable and fun. They captured our baby's personality perfectly. The memories they created are priceless!",
      category: "Newborn Session",
      location: "Mumbai",
      icon: <Award className="h-6 w-6" />,
    },
    {
      name: "David & Lisa",
      role: "First Time Parents",
      image: image6,
      rating: 5,
      text: "We were nervous about our first baby photoshoot, but Kutty Story made it magical! The photos are breathtaking and we'll treasure them forever. Thank you!",
      category: "Milestone Photography",
      location: "Texas",
      icon: <Heart className="h-6 w-6" />,
    },
    {
      name: "Anjali Patel",
      role: "Mother of Two",
      image: image7,
      rating: 5,
      text: "Both my children's first year albums are from Kutty Story. The quality, creativity, and service are exceptional. They truly understand how to capture childhood magic!",
      category: "Children Photography",
      location: "London",
      icon: <Star className="h-6 w-6" />,
    },
  ];

  useEffect(() => {
    if (!isHovering) {
      const interval = setInterval(() => {
        setCurrentTestimonial((prev) =>
          prev === testimonials.length - 1 ? 0 : prev + 1
        );
      }, 5000);

      return () => clearInterval(interval);
    }
  }, [isHovering, testimonials.length]);

  const currentTest = testimonials[currentTestimonial];

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ backgroundColor: colors.pinkdull, fontFamily: fonts.body }}
    >
      <Sparkles />

      {/* Background animation */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div
          className="absolute top-20 left-20 rounded-full animate-pulse opacity-30"
          style={{
            width: "8rem",
            height: "8rem",
            backgroundColor: colors.pinklight,
          }}
        />
        <div
          className="absolute bottom-20 right-20 rounded-full animate-pulse opacity-20 delay-1000"
          style={{
            width: "10rem",
            height: "10rem",
            backgroundColor: colors.pinkdark,
          }}
        />
        <div
          className="absolute top-1/2 left-10 rounded-full animate-bounce opacity-40"
          style={{
            width: "4rem",
            height: "4rem",
            backgroundColor: colors.pinkmedium,
          }}
        />
        <div
          className="absolute top-1/3 right-1/4 rounded-full animate-pulse opacity-25 delay-500"
          style={{
            width: "5rem",
            height: "5rem",
            backgroundColor: colors.pinklight,
          }}
        />
      </div>

      <div className="max-w-6xl mx-auto px-4 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-4xl font-bold leading-snug"
            style={{ color: colors.purpledark, fontFamily: fonts.heading }}
          >
            Testimonials
            <span
              className="animate-pulse"
              style={{ color: colors.pinkmedium }}
            >
              {" "}
              ❤
            </span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto mt-4 font-medium"
            style={{ color: colors.purpledark }}
          >
            Real families, real moments, real love captured forever
          </p>
        </div>

        {/* Testimonial Card */}
        <div
          className="relative bg-white rounded-2xl shadow-2xl p-6 sm:p-10 lg:p-12 transition-all duration-300"
          onMouseEnter={() => setIsHovering(true)}
          onMouseLeave={() => setIsHovering(false)}
        >
          {/* Top Bar */}
          <div
            className="h-2 w-full mb-6 rounded-full"
            style={{ backgroundColor: colors.pinkmedium }}
          />

          {/* Content */}
          <div className="flex flex-col md:flex-row items-center gap-8">
            {/* Image */}
            <div className="flex-shrink-0">
              <img
                src={currentTest.image}
                alt={currentTest.name}
                className="w-40 h-40 sm:w-48 sm:h-48 rounded-xl object-cover shadow-lg border-4 border-white"
              />
            </div>

            {/* Text */}
            <div className="text-center md:text-left">
              <Quote
                className="w-6 h-6 mb-4 mx-auto md:mx-0"
                style={{ color: colors.pinkmedium }}
              />
              <p className="italic text-gray-700 text-base sm:text-lg mb-6">
                “{currentTest.text}”
              </p>
              <h3 className="text-xl font-bold text-gray-900">
                {currentTest.name}
              </h3>
              <p className="text-sm text-gray-600 mb-2">{currentTest.role}</p>

              {/* Stars */}
              <div className="flex justify-center md:justify-start">
                {[...Array(currentTest.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-4 w-4 text-yellow-400 fill-yellow-400"
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={() =>
              setCurrentTestimonial(
                currentTestimonial === 0
                  ? testimonials.length - 1
                  : currentTestimonial - 1
              )
            }
            className="absolute left-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronLeft style={{ color: colors.pinkmedium }} />
          </button>

          <button
            onClick={() =>
              setCurrentTestimonial(
                currentTestimonial === testimonials.length - 1
                  ? 0
                  : currentTestimonial + 1
              )
            }
            className="absolute right-4 top-1/2 transform -translate-y-1/2 w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center hover:scale-110 transition"
          >
            <ChevronRight style={{ color: colors.pinkmedium }} />
          </button>
        </div>

        {/* Dot Indicators */}
        <div className="flex justify-center mt-6 space-x-2">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentTestimonial(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentTestimonial
                  ? "scale-125 shadow-md"
                  : "opacity-50"
              }`}
              style={{
                backgroundColor:
                  index === currentTestimonial
                    ? colors.pinkmedium
                    : colors.pinklight,
              }}
            />
          ))}
        </div>

        {/* CTA */}
        <div className="text-center mb-10 mt-7">
          <div className="relative max-w-2xl mx-auto">
            <div className="absolute inset-0 bg-purple-600 rounded-2xl blur opacity-20"></div>
            <div
              className="relative backdrop-blur-xl rounded-2xl p-8 border border-white/20 shadow-2xl"
              style={{ backgroundColor: colors.cream }}
            >
              <h3
                className="text-2xl font-black mb-3 "
                style={{ color: colors.purpledark }}
              >
                Ready to Create Your Story?
              </h3>
              <p
                className="text-base mb-6 max-w-xl mx-auto leading-relaxed font-semibold "
                style={{ color: colors.lightmauve }}
              >
                Join hundreds of families who trust us with their precious
                memories
              </p>
              <Button variant="cta" to="/Register">
                Start Your Journey
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
