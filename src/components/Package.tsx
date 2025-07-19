import React, { useState } from "react";
import { Check, Star, Gift, Crown, Diamond } from "lucide-react";
import { colors, fonts } from "../styles/Theme"; // Adjust path as needed
import Button from "../styles/Button";
import FloatingBackground from "../styles/FloatingBackground";
import { useHeartTrail } from "../styles/HeartTrail";

// import Sparkles from "../styles/sparkle";
const Package: React.FC = () => {
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  type Tier = "starter" | "premium" | "luxury" | "ultimate";

  interface PackageType {
    name: string;
    icon: React.ElementType;
    price: string;
    originalPrice: string | null;
    description: string;
    features: string[];
    solidColor: string;
    lightColor: string;
    popularBadge: boolean;
    tier: Tier;
  }

  const packages: PackageType[] = [
    {
      name: "FREE",
      icon: Gift,
      price: "No Cost",
      originalPrice: null,
      description: "Upload your little ones photos and memories upto 3GB",
      features: [
        "No shoots for this pack",
        "Unlimited Memories with compressed images",
        "High Resolution Image Storage Upto 3 GB for 5 Years Validity",
        "No Album",
      ],
      solidColor: colors.greys,
      lightColor: colors.cream,
      popularBadge: false,
      tier: "starter",
    },
    {
      name: "SILVER",
      icon: Star,
      price: "₹6800",
      originalPrice: "₹8500",
      description:
        "Write your little ones Kutty story and get a printed photo book - 12inches",
      features: [
        "No shoots for this pack",
        "Unlimited Memories with compressed images",
        "High Resolution Image Storage Upto 5 GB for 15 Years Validity",
        "12x10 Inches 60 Pages Album",
      ],

      solidColor: colors.pinkdull,
      lightColor: colors.pinkmedium,
      popularBadge: false,
      tier: "premium",
    },
    {
      name: "GOLD",
      icon: Crown,
      price: "₹18675",
      originalPrice: "₹22000",
      description:
        "One professional baby shoot plus your uploaded memories, all compiled into a high-quality photo album for your baby's first birthday.",
      features: [
        "1 shoots for this pack",
        "Unlimited Memories with compressed images",
        "High Resolution Image Storage Upto 8 GB for 15 years Validity",
        "12x10 Inches 60 Pages Album",
      ],
      solidColor: colors.pinkdark,
      lightColor: colors.pinkhome,
      popularBadge: true,
      tier: "luxury",
    },
    {
      name: "PLATINUM",
      icon: Diamond,
      price: "₹48470",
      originalPrice: "₹55000",
      description:
        "Three baby photo shoots and your favorite memories combined into a premium album for your child’s first birthday.",
      features: [
        "3 shoots for this pack",
        "Unlimited Memories with compressed images",
        "High Resolution Image Storage Upto 20 GB for 25 Years Validity",
      ],
      solidColor: colors.pinkhome,
      lightColor: colors.lightmauve,
      popularBadge: false,
      tier: "ultimate",
    },
  ];

  const getTierStyles = (tier: string) => {
    switch (tier) {
      case "starter":
        return "border-gray-300";
      case "premium":
        return "border-pink-300";
      case "luxury":
        return "border-sky-300";
      case "ultimate":
        return "border-purple-300";
      default:
        return "border-gray-300";
    }
  };

  const getTextColor = (tier: string) => {
    return tier === "luxury" || tier === "ultimate"
      ? colors.cream
      : colors.blacks;
  };
  const handleMouseMove = useHeartTrail();

  return (
    <section
      id="package"
      className="py-12 relative overflow-hidden "
      onMouseMove={handleMouseMove} // ✅ hooked up
      style={{ backgroundColor: colors.pinkdull, fontFamily: fonts.body }}
    >
      {/* <Sparkles /> */}
      <FloatingBackground />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-12">
          <h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold font-monkey mb-6 leading-snug"
            style={{ color: colors.purpledark, fontFamily: fonts.heading }}
          >
            Package
          </h2>
          <p
            className="text-lg max-w-3xl mx-auto leading-relaxed font-medium"
            style={{ color: colors.purpledark }}
          >
            Capture every precious moment with our beautifully crafted packages
            designed for your little one's journey
          </p>
        </div>

        {/* Package Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16 items-stretch">
          {packages.map((pkg, index) => {
            const IconComponent = pkg.icon;
            const textColor = getTextColor(pkg.tier);

            return (
              <article
                key={index}
                className="relative group h-full"
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
              >
                <div
                  className={`h-full flex flex-col rounded-2xl overflow-hidden transition-all duration-500 ease-out transform
                    ${hoveredCard === index ? "scale-105" : "scale-100"}
                    border-3 ${getTierStyles(
                      pkg.tier
                    )} shadow-xl hover:shadow-2xl backdrop-blur-sm`}
                  style={{
                    backgroundColor: pkg.lightColor,
                  }}
                >
                  {/* Solid Color Header */}
                  <div
                    className="h-20 relative overflow-hidden"
                    style={{ backgroundColor: pkg.lightColor }}
                  >
                    <div className="text-center pt-7 pb-4">
                      <h3
                        className="text-xl font-black mb-2 tracking-wide"
                        style={{ color: textColor }}
                      >
                        {pkg.name}
                      </h3>
                    </div>
                    <div className="absolute inset-0 bg-black/5"></div>
                    <div className="absolute top-2 right-2">
                      <div className="w-8 h-8 bg-white/90 rounded-full flex items-center justify-center backdrop-blur-sm shadow-lg">
                        <IconComponent
                          className="w-4 h-4"
                          style={{ color: pkg.solidColor }}
                        />
                      </div>
                    </div>
                    <div className="absolute inset-0">
                      <div
                        className="w-1.5 h-1.5 rounded-full absolute top-4 left-4 animate-ping"
                        style={{ backgroundColor: pkg.solidColor + "40" }}
                      />
                      <div
                        className="w-1 h-1 rounded-full absolute top-8 left-8 animate-pulse delay-1000"
                        style={{ backgroundColor: pkg.solidColor + "60" }}
                      />
                      <div
                        className="w-2 h-2 rounded-full absolute top-6 right-8 animate-bounce delay-2000"
                        style={{ backgroundColor: pkg.solidColor + "30" }}
                      />
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-6 flex flex-col flex-grow">
                    <div className="text-center mb-4">
                      <div className="flex items-center justify-center mb-3">
                        <span
                          className="text-3xl font-black"
                          style={{ color: textColor }}
                        >
                          {pkg.price}
                        </span>
                        {pkg.originalPrice && (
                          <span
                            className="ml-2 font-medium text-base line-through"
                            style={{ color: colors.blue }}
                          >
                            {pkg.originalPrice}
                          </span>
                        )}
                      </div>
                      <p
                        className="text-base  font-medium text-justify leading-relaxed mb-4 min-h-[5rem]"
                        style={{ color: textColor }}
                      >
                        {pkg.description}
                      </p>
                    </div>

                    {/* Key Features */}
                    <div className="mb-6 flex-grow">
                      <ul className="space-y-3 flex flex-col justify-start">
                        {pkg.features.map((feature, featureIndex) => (
                          <li
                            key={featureIndex}
                            className="flex items-start group"
                          >
                            <div
                              className="rounded-full p-1 mr-3 mt-0.5 transition-all duration-300 shadow-lg group-hover:scale-110 group-hover:shadow-xl flex-shrink-0"
                              style={{ backgroundColor: pkg.solidColor }}
                            >
                              <Check className="h-4 w-4 text-black" />
                            </div>
                            <span
                              className="text-base font-medium leading-relaxed"
                              style={{ color: textColor }}
                            >
                              {feature}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* CTA Button */}
                    <div className="flex justify-center mt-6">
                      <Button to="/register" variant={pkg.tier}>
                        Choose {pkg.name}
                      </Button>
                    </div>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Consultation CTA */}
        <div className="text-center mb-12">
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
                Still Deciding?
              </h3>
              <p
                className="text-base mb-6 max-w-xl mx-auto leading-relaxed font-semibold "
                style={{ color: colors.lightmauve }}
              >
                Let our experts help you choose the perfect package for your
                precious memories!
              </p>
              <Button
                href="https://wa.me/919841888001?text=Hi%20KuttyStory%2C%20I%20would%20like%20to%20know%20more%20about%20your%20baby%20photoshoot%20packages.
"
              >
                Book Free Consultation
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Package;
