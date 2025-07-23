import React, { useState } from "react";
import { X } from "lucide-react";
import { colors, fonts } from "../styles/Theme"; // adjust as needed
import Button from "../styles/Button";
// import FloatingBackground from "./FloatingBackground";
// Image imports (Vite will resolve these correctly)
import babySleep from "/src/assets/images/Gallery1.jpg";
import ks2 from "/src/assets/images/Gallery2.jpg";
import pinkBaby from "/src/assets/images/pinkbaby.jpg";
import kuttyStory from "/src/assets/images/Gallery4.jpg";
import babyShip from "/src/assets/images/Gallery5.jpg";
import babyPink from "/src/assets/images/Gallery6.jpg";
import image6 from "/src/assets/images/Gallery7.jpg";
import image7 from "/src/assets/images/Gallery8.jpg";
import image8 from "/src/assets/images/Gallery9.jpg";
import image9 from "/src/assets/images/babyship.jpeg";

const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const galleryImages = [
    {
      url: babySleep,
      alt: "Capture baby memories with Kuttystory personalized photo books",
      title: "Kuttystory - Personalized Baby Photo Storybooks",
    },
    {
      url: ks2,
      alt: "1st birthday memory book",
      title: "baby album printing india",
    },
    {
      url: pinkBaby,
      alt: "Kuttystory baby memories",
      title: "turn baby photos into storybook",
    },
    {
      url: kuttyStory,
      alt: "baby photography",
      title: "subscription service for baby photo albums",
    },
    {
      url: babyShip,
      alt: "baby photo printing",
      title: "Choosing the Right Baby Album: Digital vs Print",
    },
    {
      url: babyPink,
      alt: "baby photo storage online",
      title: "Why Every Parent Needs a Baby Photo Storybook",
    },
    {
      url: image6,
      alt: "baby memory book",
      title: "best baby photo album for first year",
    },
    {
      url: image7,
      alt: "premium baby photoshoot",
      title: "how to preserve baby memories digitally",
    },
    {
      url: image8,
      alt: "newborn photography India",
      title: "How Kuttystory Turns Photos into Treasured Keepsakes",
    },
    {
      url: image9,
      alt: "maternity photoshoot",
      title: "How To Remember the bump to baby days",
    },
  ];

  const handleImageClick = (imageUrl: string) => {
    setSelectedImage(imageUrl);
  };

  const ImageBox = ({
    image,
    classes,
  }: {
    image: { url: string; title: string };
    classes: string;
  }) => (
    <div
      className={`group relative cursor-pointer overflow-hidden rounded-2xl shadow-[0_4px_30px_rgba(71,4,109,0.35)] ring-1 ring-gray-300 ${classes} transition-all duration-300 transform hover:scale-105`}
      onClick={() => handleImageClick(image.url)}
    >
      <div className="w-full h-full aspect-[4/3] bg-gray-200">
        <img
          src={image.url}
          alt={image.title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 "
        />
      </div>
      <div className="absolute inset-0 bg-black opacity-0 group-hover:opacity-20 transition-opacity duration-300" />
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300">
        <div
          className="rounded-full p-3 shadow-lg"
          style={{ backgroundColor: colors.whites }}
        >
          <svg
            className="h-6 w-6 text-gray-700"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0zM10 7v3m0 0v3m0-3h3m-3 0H7"
            />
          </svg>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="gallery"
      className="relative  "
      style={{
        backgroundColor: colors.cream,
        fontFamily: fonts.body,
      }}
    >
      {/* <FloatingBackground /> */}
      <div className="pb-1 pt-8 sm:pb-12 relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Header */}
          <div className="text-center mb-16">
            <h2
              className="text-3xl sm:text-4xl md:text-5xl font-bold mb-6 mt-0 leading-snug"
              style={{ color: colors.purpledark, fontFamily: fonts.heading }}
            >
              Gallery
            </h2>
            <p
              className="text-lg max-w-3xl mx-auto font-medium"
              style={{ color: colors.purpledark }}
            >
              Tiny beginnings, timeless memories — held forever in each
              photograph
            </p>
          </div>

          {/* Grid Layout */}
          <div className="grid grid-cols-12 gap-4 max-w-6xl mx-auto">
            <div className="col-span-3 row-span-2 ">
              <ImageBox image={galleryImages[0]} classes="bg-orange-200 h-80" />
            </div>
            <div className="col-span-4">
              <ImageBox image={galleryImages[1]} classes="bg-blue-200 h-36" />
            </div>
            <div className="col-span-5 row-span-2">
              <ImageBox image={galleryImages[2]} classes="bg-yellow-200 h-80" />
            </div>
            <div className="col-span-2">
              <ImageBox image={galleryImages[3]} classes="bg-green-200 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={galleryImages[8]} classes="bg-orange-300 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={galleryImages[5]} classes="bg-green-300 h-36" />
            </div>
            <div className="col-span-3">
              <ImageBox image={galleryImages[6]} classes="bg-blue-300 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={galleryImages[7]} classes="bg-teal-200 h-36" />
            </div>
            <div className="col-span-3">
              <ImageBox image={galleryImages[4]} classes="bg-pink-200 h-36" />
            </div>
            <div className="col-span-2">
              <ImageBox image={galleryImages[9]} classes="bg-green-300 h-36" />
            </div>
          </div>

          {/* CTA */}
          <div className="text-center mt-16">
            <Button
              variant="cta"
              href="https://www.instagram.com/kuttystoryindia/"
              target="_blank"
              rel="noopener noreferrer"
            >
              Join the Journey
            </Button>
          </div>
        </div>
      </div>

      {/* Image Modal */}
      {selectedImage && (
        <div
          className="fixed inset-0 bg-black bg-opacity-90 z-50 flex items-center justify-center p-4"
          onClick={() => setSelectedImage(null)}
        >
          <div
            className="relative max-w-6xl max-h-[90vh] rounded-2xl overflow-hidden shadow-2xl"
            style={{ backgroundColor: colors.whites }}
          >
            <div className="flex items-center justify-center max-h-[90vh]">
              <img
                src={selectedImage}
                alt="Enlarged view"
                className="max-w-full max-h-full object-contain"
              />
            </div>

            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-200 transform hover:scale-110"
              style={{ backgroundColor: colors.whites }}
            >
              <X className="h-6 w-6 text-gray-700" />
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default Gallery;
