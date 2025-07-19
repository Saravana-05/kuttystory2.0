import React from "react";

// import FloatingBackground from "../styles/FloatingBackground";
import { colors, fonts } from "../styles/Theme";

// const fadeUp: Variants = {
//   hidden: { opacity: 0, y: 40 },
//   visible: {
//     opacity: 1,
//     y: 0,
//     transition: { duration: 0.6, ease: "easeOut" },
//   },
// };
const YourApp = () => {
  return (
    <section
      className="relative overflow-hidden px-4 pt-[90px] pb-6"
      style={{
        backgroundColor: colors.cream,
        fontFamily: fonts.body,
      }}
    >
      {/* <FloatingBackground /> */}
      <div className="max-w-6xl mx-auto text-center mb-10">
        {/* 📱 App Promo Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-16 text-left animate-float">
          {/* Left - Images */}
          <div className="relative flex justify-center md:justify-start">
            <div className="relative z-10 transform hover:scale-105 transition-transform duration-300 w-full max-w-sm sm:max-w-md md:max-w-lg">
              <div
                className="rounded-3xl shadow-2xl border-8 relative overflow-hidden"
                style={{
                  background: "#839FC5",
                  borderColor: colors.pinkmedium,
                }}
              >
                <div className="p-5">
                  <div className="relative mb-6">
                    <div
                      className="w-64 h-36 sm:w-80 sm:h-44 md:w-96 md:h-52 rounded-xl overflow-hidden border-4 mx-auto"
                      style={{
                        backgroundColor: colors.whites,
                        borderColor: colors.mauve,
                      }}
                    >
                      <img
                        src="https://kuttystory.com/media/default/Web_Mobile.jpg"
                        alt="Kutty Story Platform"
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black opacity-20" />
                    </div>
                    <div
                      className="w-64 sm:w-80 md:w-96 h-4 rounded-b-xl mx-auto"
                      style={{ backgroundColor: colors.mauve }}
                    ></div>
                  </div>

                  <div className="absolute -bottom-4 -right-4 z-10">
                    <div
                      className="w-20 h-32 sm:w-24 sm:h-36 md:w-28 md:h-44 rounded-2xl overflow-hidden border-4 shadow-xl"
                      style={{
                        backgroundColor: colors.whites,
                        borderColor: colors.pinkmedium,
                      }}
                    >
                      <img
                        src="https://kuttystory.com/media/default/Web_Mobile.jpg"
                        alt="Mobile App"
                        className="w-full h-full object-cover"
                      />
                    </div>
                  </div>

                  <div className="mt-6 flex justify-center">
                    <a
                      className="news-app-promo-subsection--link"
                      href="https://play.google.com/store/apps/details?id=com.skylimit.kuttystory"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <img
                        src="https://news.files.bbci.co.uk/include/newsspec/19854/assets/app-project-assets/google_play_store.svg"
                        alt="Get it on Google Play"
                        width="161"
                        style={{ border: 0 }}
                      />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Right - Description */}
          <div className="md:pl-4 text-center md:text-left max-w-xl mx-auto md:mx-0">
            <p className="text-[colors.greys] text-lg md:text-lg font-normal  leading-relaxed mb-4">
              A one-stop digital platform to share birth stories and capture the
              precious moments of your little ones in a memorable and meaningful
              way. Schedule photo shoots, create baby books, and order prints or
              photo frames—all in one place.
            </p>
            <p
              className="text-xl md:text-xl font-bold md:text-right"
              style={{
                fontFamily: fonts.heading,
                color: colors.purpledark,
              }}
            >
              — Kuttystory
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default YourApp;
