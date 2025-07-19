import React, { useState, useEffect } from "react";
import {
  Baby,
  Smile,
  Calendar,
  Globe,
  TrendingUp,
  Star,
  Users,
  Award,
} from "lucide-react";
// import FloatingBackground from "../styles/FloatingBackground";
// import Button from "../styles/Button"; //CTA Button Path
import { colors, fonts } from "../styles/Theme"; // Make sure this path is correct

const Statistics: React.FC = () => {
  const [counts, setCounts] = useState({
    babies: 0,
    clients: 0,
    events: 0,
    countries: 0,
  });

  const finalCounts = {
    babies: 1000,
    clients: 1200,
    events: 50,
    countries: 6,
  };

  useEffect(() => {
    const duration = 2000;
    const steps = 60;
    const stepDuration = duration / steps;

    const intervals = Object.keys(finalCounts).map((key) => {
      const finalValue = finalCounts[key as keyof typeof finalCounts];
      const increment = finalValue / steps;
      let currentValue = 0;

      return setInterval(() => {
        currentValue += increment;
        if (currentValue >= finalValue) {
          currentValue = finalValue;
          clearInterval(
            intervals.find(
              (interval) =>
                interval === intervals[Object.keys(finalCounts).indexOf(key)]
            )
          );
        }
        setCounts((prev) => ({
          ...prev,
          [key]: Math.floor(currentValue),
        }));
      }, stepDuration);
    });

    return () => intervals.forEach((interval) => clearInterval(interval));
  }, []);

  const stats = [
    {
      icon: <Baby className="h-12 w-12" />,
      count: counts.babies,
      label: "BABIES CAPTURED",
      accentIcon: <Star className="h-6 w-6" />,
      solidColor: colors.lightmauve,
      textColor: colors.pinkdark,
    },
    {
      icon: <Smile className="h-12 w-12" />,
      count: counts.clients,
      label: "HAPPY CLIENTS",
      accentIcon: <Users className="h-6 w-6" />,
      solidColor: colors.mauve,
      textColor: colors.pinkmedium,
    },
    {
      icon: <Calendar className="h-12 w-12" />,
      count: counts.events,
      label: "EVENTS",
      accentIcon: <Award className="h-6 w-6" />,
      solidColor: colors.lightpurple,
      textColor: colors.pinkmedium,
    },
    {
      icon: <Globe className="h-12 w-12" />,
      count: counts.countries,
      label: "COUNTRIES ACROSS",
      accentIcon: <TrendingUp className="h-6 w-6" />,
      solidColor: colors.purpledark,
      textColor: colors.purpledark,
    },
  ];

  return (
    <section
      className="py-12 relative overflow-hidden"
      style={{ backgroundColor: colors.cream, fontFamily: fonts.body }}
    >
      {/* <FloatingBackground /> */}
      {/* Background Icons */}
      {/* <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <Star
          className="absolute top-16 left-16 h-12 w-12 animate-pulse"
          style={{ opacity: 0.2, color: colors.pinkmedium }}
        />
        <Users
          className="absolute top-24 right-24 h-10 w-10 animate-pulse"
          style={{
            opacity: 0.2,
            color: colors.pinkmedium,
            animationDelay: "500ms",
          }}
        />
        <Award
          className="absolute bottom-24 left-24 h-10 w-10 animate-pulse"
          style={{
            opacity: 0.2,
            color: colors.pinkmedium,
            animationDelay: "1000ms",
          }}
        />
        <TrendingUp
          className="absolute bottom-16 right-16 h-12 w-12 animate-pulse"
          style={{
            opacity: 0.2,
            color: colors.pinkmedium,
            animationDelay: "1500ms",
          }}
        />
        <Star
          className="absolute top-1/2 left-1/4 h-8 w-8 animate-pulse"
          style={{
            opacity: 0.15,
            color: colors.pinkmedium,
            animationDelay: "700ms",
          }}
        />
        <Users
          className="absolute top-1/3 right-1/3 h-8 w-8 animate-pulse"
          style={{
            opacity: 0.15,
            color: colors.pinkmedium,
            animationDelay: "300ms",
          }}
        />
      </div> */}

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 leading-snug"
            style={{ color: colors.purpledark, fontFamily: fonts.heading }}
          >
            Our Amazing Journey
            <span
              className="animate-pulse"
              style={{ color: colors.pinkmedium }}
            >
              {" "}
            </span>
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto font-medium"
            style={{ color: colors.purpledark }}
          >
            Numbers that tell our story of capturing precious moments
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="relative group">
              <div
                className="rounded-3xl p-8 text-center shadow-2xl hover:shadow-3xl transition-all duration-300 border-4 hover:scale-105 transform relative overflow-hidden"
                style={{
                  backgroundColor: colors.pinkdull,
                  borderColor: colors.lightmauve,
                }}
              >
                {/* Accent Icon */}
                <div className="absolute top-4 right-4 opacity-60 group-hover:opacity-100 transition-opacity duration-300">
                  <div style={{ color: stat.solidColor }}>
                    {stat.accentIcon}
                  </div>
                </div>

                {/* Main Icon */}
                <div className="mb-6 flex justify-center">
                  <div
                    className="rounded-full p-4 shadow-lg group-hover:rotate-6 transition-transform duration-300"
                    style={{ backgroundColor: colors.purpledark }}
                  >
                    <div style={{ color: colors.blue }}>{stat.icon}</div>
                  </div>
                </div>

                {/* Count */}
                <div className="mb-4">
                  <span
                    className="text-5xl font-black"
                    style={{ color: colors.mauve }}
                  >
                    {stat.count.toLocaleString()}
                  </span>
                  {stat.count >=
                    finalCounts[
                      Object.keys(finalCounts)[
                        index
                      ] as keyof typeof finalCounts
                    ] && (
                    <span
                      className="text-2xl ml-2 animate-bounce"
                      style={{ color: colors.mauve }}
                    >
                      +
                    </span>
                  )}
                </div>

                {/* Label */}
                <p
                  className="font-bold text-center text-sm tracking-wider"
                  style={{ color: colors.purpledark }}
                >
                  {stat.label}
                </p>

                {/* Decorative Dots */}
                {/*<div
                  className="absolute bottom-6 left-6 w-6 h-6 rounded-full opacity-40 group-hover:opacity-60 transition-opacity duration-300"
                  style={{ backgroundColor: colors.lightpurple }}
                />
                <div
                  className="absolute top-6 left-6 w-3 h-3 rounded-full opacity-30 group-hover:opacity-50 transition-opacity duration-300"
                  style={{ backgroundColor: colors.pinkmedium }}
                />*/}
              </div>
            </div>
          ))}
        </div>

        {/* CTA Button */}
        {/* <div className="text-center mt-12">
          <Button variant="cta">Start Your Journey</Button>
        </div> */}
      </div>
    </section>
  );
};

export default Statistics;
