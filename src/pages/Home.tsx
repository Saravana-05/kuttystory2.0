import React, { useState, useEffect } from "react";
// import ScrollRevealSection from "../styles/ScrollReveal";
import Header from "../components/Header";
import Hero from "../components/Hero";
import HowItWorks from "../components/HowItWorks";
import Album from "../components/Album";
import Gallery from "../components/Gallery";
import Package from "../components/Package";
import Statistics from "../components/Statistics";
import Testimonials from "../components/Testimonials";
import FAQs from "../components/FAQs";
import Footer from "../components/Footer";
import StorySection from "../components/StorySection";
import YourStories from "../components/YourStories";
import { ChevronUp } from "lucide-react";
import YourApp from "../components/YourApp";

const Home: React.FC = () => {
  const [showTopButton, setShowTopButton] = useState(false);

  const scrollToTop = () => window.scrollTo({ top: 0, behavior: "smooth" });

  useEffect(() => {
    const onScroll = () => setShowTopButton(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-[#ffbfd4]/50 relative overflow-x-hidden ">
      <Header onSidebarToggle={() => {}} />

      <main className="pt-16 ">
        {/* No animation for Hero since it's already in view */}
        <Hero />

        {/* <ScrollRevealSection delay={0.1}> */}
        <StorySection />
        {/* </ScrollRevealSection> */}
        <YourApp />
        <YourStories />

        <HowItWorks />

        <Album />

        <Gallery />

        <Package />

        <Statistics />

        <Testimonials />

        <FAQs />
      </main>

      <Footer />

      {/* Back-to-top Button */}
      {showTopButton && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-5 right-3 z-50 bg-[#3f0968] hover:bg-[#f06292] text-white p-3 rounded-full shadow-lg transition"
          aria-label="Back to top"
        >
          <ChevronUp className="w-6 h-6" />
        </button>
      )}
    </div>
  );
};

export default Home;
