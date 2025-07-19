import React from "react";
// import { Camera, Heart, Star } from 'lucide-react';

const Studio: React.FC = () => {
  return (
    <section
      id="studio"
      className="py-20 relative overflow-hidden"
      style={{ backgroundColor: "#F3E8FF" }}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold text-[#3f0968] mb-6 mt-10 leading-snug font-monkey">
            Our Studio{" "}
            <span className="animate-pulse" style={{ color: "#f999b7" }}></span>
          </h2>
          <p className="text-xl max-w-3xl mx-auto" style={{ color: "#3f0968" }}>
            A warm, welcoming space designed specifically for baby photography
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h3
              className="text-3xl font-bold mb-6"
              style={{ color: "#4a1c40" }}
            >
              A Space Made for Little Ones{" "}
              <span style={{ color: "#f999b7" }}></span>
            </h3>
            <p
              className="text-lg leading-relaxed mb-8"
              style={{ color: "#3f0968" }}
            >
              Our studio is thoughtfully designed with your baby's comfort and
              safety in mind. From climate-controlled environment to soft,
              natural lighting, every detail is carefully considered to create
              the perfect atmosphere for capturing those precious moments!
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mb-8">
              <div className="flex items-start space-x-3">
                <div>
                  <h4 className="font-semibold" style={{ color: "#4a1c40" }}>
                    Professional Equipment{" "}
                  </h4>
                  <p className="text-sm" style={{ color: "#3f0968" }}>
                    State-of-the-art cameras and lighting for perfect shots
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h4 className="font-semibold" style={{ color: "#4a1c40" }}>
                    Comfort First{" "}
                  </h4>
                  <p className="text-sm" style={{ color: "#3f0968" }}>
                    Warm, cozy environment perfect for babies
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h4 className="font-semibold" style={{ color: "#4a1c40" }}>
                    Premium Props{" "}
                  </h4>
                  <p className="text-sm" style={{ color: "#3f0968" }}>
                    Extensive collection of beautiful props and backdrops
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-3">
                <div>
                  <h4 className="font-semibold" style={{ color: "#4a1c40" }}>
                    Professional Service{" "}
                  </h4>
                  <p className="text-sm" style={{ color: "#3f0968" }}>
                    Expert photographers with years of experience
                  </p>
                </div>
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
              Schedule a Visit
            </button>
          </div>

          <div className="relative">
            <div className="grid grid-cols-2 gap-4">
              <img
                src="/src/assets/images/babypink.jpg"
                alt="kuttystory Studio setup "
                title="Capture Timeless Baby Moments with Kuttystory"
                className="rounded-2xl shadow-lg border-4 hover:scale-105 transform transition-all duration-300"
                style={{ borderColor: "#f999b7" }}
              />
              <img
                src="src/assets/images//babycenter.jpg"
                alt=" kuttystory Baby photography"
                title="Create Custom Baby Memory Books Online"
                className="rounded-2xl shadow-lg mt-8 border-4 hover:scale-105 transform transition-all duration-300"
                style={{ borderColor: "#3f0968" }}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Studio;
