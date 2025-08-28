import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { colors, fonts } from "../styles/Theme";
import Logo from "../assets/KuttyStory_logo.png";

interface HeaderProps {
  onSidebarToggle: () => void;
  onBranchSelect?: (branch: string) => void; // Add prop to communicate with parent
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle, onBranchSelect }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [showBranchModal, setShowBranchModal] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";
  const [showMobileBranchDropdown, setShowMobileBranchDropdown] =
    useState(false);

  const sidebarRef = useRef<HTMLDivElement | null>(null);
  const branchModalRef = useRef<HTMLDivElement | null>(null);

  const soundMap: { [key: string]: string } = {
    HOME: "/src/assets/audio/sol1.mp3",
    "HOW IT WORKS": "/src/assets/audio/re.mp3",
    ALBUM: "/src/assets/audio/sol.mp3",
    GALLERY: "/src/assets/audio/mi.mp3",
    PACKAGE: "/src/assets/audio/fa.mp3",
    FAQS: "/src/assets/audio/la.mp3",
    BLOG: "/src/assets/audio/mi.mp3",
    BRANCH: "/src/assets/audio/si.mp3",
    STUDIO: "/src/assets/audio/re2.mp3",
  };

  useEffect(() => {
    Object.values(soundMap).forEach((src) => {
      const audio = new Audio(src);
      audio.preload = "auto";
      audio.load();
    });
  }, );

  const navigationItems = [
    { name: "HOME", hash: "#home" },
    { name: "HOW IT WORKS", hash: "#how-it-works" },
    { name: "ALBUM", hash: "#album" },
    { name: "GALLERY", hash: "#gallery" },
    { name: "PACKAGE", hash: "#package" },
    { name: "FAQS", hash: "#faqs" },
    { name: "BLOG", hash: "#blog" },
    { name: "BRANCH", hash: "#" },
    { name: "STUDIO", href: "https://store.kuttystory.com/user/login" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle();
  };

  const playSound = (label: string) => {
    const audioSrc = soundMap[label];
    if (audioSrc) {
      const audio = new Audio(audioSrc);
      audio.volume = 0.3;
      audio.play().catch((err) => console.warn("Audio play failed", err));
    }
  };

  const handleBranchSelect = (branch: string) => {
    console.log(`Branch selected: ${branch}`);
    if (onBranchSelect) {
      onBranchSelect(branch);
    }
    setShowBranchModal(false);
    setShowMobileBranchDropdown(false);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }

      if (
        branchModalRef.current &&
        !branchModalRef.current.contains(event.target as Node)
      ) {
        setShowBranchModal(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <header
      className="fixed top-0 w-full z-50 shadow-md h-20 sm:h-24"
      style={{ backgroundColor: colors.pinkdull, fontFamily: fonts.heading }}
    >
      {/* Sparkles */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        {Array.from({ length: 10 }).map((_, i) => (
          <div
            key={i}
            className="absolute w-2.5 h-2.5 bg-white/60 rounded-full animate-floatSparkle"
            style={{
              top: `${Math.random() * 60}%`,
              left: `${Math.random() * 100}%`,
              animationDelay: `${i * 0.8}s`,
              animationDuration: `${3 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex justify-between items-center h-20 sm:h-24">
          {/* Logo */}
          <Link to="/" className="flex items-center space-x-3">
            <img
              src={Logo}
              alt="Kutty Story Logo"
              className="h-16 sm:h-20 w-auto drop-shadow-lg z-10"
            />
          </Link>

          {/* Desktop Navigation */}
          {isHomePage && (
            <nav className="hidden md:flex flex-wrap -space-x-2 justify-center items-center font-bold">
              {navigationItems.map((item, index) =>
                item.name === "BRANCH" ? (
                  <button
                    key={item.name}
                    type="button"
                    onClick={() => {
                      setShowBranchModal((prev) => !prev);
                    }}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full shadow-md border backdrop-blur-sm transition-all duration-200 hover:scale-105 z-10 hover-wiggle ${
                      index % 2 === 0 ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
                    }`}
                    style={{
                      backgroundColor: colors.pinkdark,
                      color: colors.purpledark,
                      borderColor: colors.pinkdark,
                    }}
                    onMouseEnter={(e) => {
                      console.log("Hovered:", item.name);
                      e.currentTarget.style.backgroundColor = colors.purpledark;
                      e.currentTarget.style.color = "#fff";
                      playSound(item.name);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.pinkdull;
                      e.currentTarget.style.color = colors.purpledark;
                    }}
                  >
                    {item.name}
                  </button>
                ) : item.hash ? (
                  <Link
                    key={item.name}
                    to={item.hash}
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full shadow-md border backdrop-blur-sm transition-all duration-200 hover:scale-105 z-10 hover-wiggle ${
                      index % 2 === 0 ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
                    }`}
                    style={{
                      backgroundColor: colors.pinkdark,
                      color: colors.purpledark,
                      borderColor: colors.pinkdark,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.purpledark;
                      e.currentTarget.style.color = "#fff";
                      playSound(item.name);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.pinkdull;
                      e.currentTarget.style.color = colors.purpledark;
                    }}
                  >
                    {item.name}
                  </Link>
                ) : (
                  <a
                    key={item.name}
                    href={item.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`px-4 py-1.5 text-sm font-semibold rounded-full shadow-md border backdrop-blur-sm transition-all duration-200 hover:scale-105 z-10 hover-wiggle ${
                      index % 2 === 0 ? "rotate-[1.5deg]" : "-rotate-[1.5deg]"
                    }`}
                    style={{
                      backgroundColor: colors.pinkdark,
                      color: colors.purpledark,
                      borderColor: colors.pinkdark,
                    }}
                    onMouseEnter={(e) => {
                      console.log("Hovered:", item.name);
                      e.currentTarget.style.backgroundColor = colors.purpledark;
                      e.currentTarget.style.color = "#fff";
                      playSound(item.name);
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.pinkdull;
                      e.currentTarget.style.color = colors.purpledark;
                    }}
                  >
                    {item.name}
                  </a>
                )
              )}
            </nav>
          )}

          {/* Auth Buttons */}
          <div className="hidden md:flex items-center space-x-4">
            <Link
              to="/register"
              className="px-6 py-2 text-white rounded-full shadow-md transition duration-200 text-sm font-medium hover:scale-105"
              style={{ backgroundColor: colors.purpledark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = colors.pinkdark)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = colors.purpledark)
              }
            >
              SIGN&nbsp;UP
            </Link>
            <Link
              to="/login"
              className="px-6 py-2 text-white rounded-full shadow-md transition duration-200 text-sm font-medium hover:scale-105"
              style={{ backgroundColor: colors.purpledark }}
              onMouseEnter={(e) =>
                (e.currentTarget.style.backgroundColor = colors.pinkdark)
              }
              onMouseLeave={(e) =>
                (e.currentTarget.style.backgroundColor = colors.purpledark)
              }
            >
              LOGIN
            </Link>
          </div>

          {/* Mobile Menu Toggle */}
          <button
            className="md:hidden p-2 rounded-md z-50 transition"
            style={{ color: colors.purpledark }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.color = colors.pinkmedium)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.color = colors.purpledark)
            }
            onClick={handleMenuToggle}
          >
            {isMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>

        {/* BRANCH MODAL - Dropdown style matching screenshot */}
        {showBranchModal && (
          <div
            ref={branchModalRef}
            className="absolute top-[6.5rem] left-1/2 transform -translate-x-1/2 z-50 border shadow-xl rounded-lg p-2 min-w-[150px]"
            style={{ 
              backgroundColor: colors.pinkdull,
              borderColor: colors.pinkmedium,
              boxShadow: '0 8px 20px rgba(0, 0, 0, 0.15)'
            }}
          >
            {/* Branch buttons in vertical dropdown style */}
            <div className="flex flex-col gap-2">
              {["Chennai", "Dindigul", "Trichy", "Salem", "Coimbatore", "Bangalore"].map((branch) => (
                <button
                  key={branch}
                  onClick={() => handleBranchSelect(branch)}
                  className="text-sm font-semibold px-4 py-2 text-center rounded-lg transition duration-200 hover:scale-105"
                  style={{
                    backgroundColor: colors.pinkdark,
                    color: colors.purpledark,
                    border: `1px solid ${colors.pinkmedium}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.purpledark;
                    e.currentTarget.style.color = "#fff";
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.pinkdark;
                    e.currentTarget.style.color = colors.purpledark;
                  }}
                >
                  {branch}
                </button>
              ))}
              
              {/* Close button */}
              <button
                onClick={() => setShowBranchModal(false)}
                className="text-sm font-semibold px-4 py-2 text-center rounded-lg transition duration-200 hover:scale-105 mt-1"
                style={{
                  backgroundColor: colors.pinkdark,
                  color: colors.purpledark,
                  border: `1px solid ${colors.pinkmedium}`,
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = colors.purpledark;
                  e.currentTarget.style.color = "#fff";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = colors.pinkdark;
                  e.currentTarget.style.color = colors.purpledark;
                }}
              >
                ✕ Close
              </button>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation */}
      {isHomePage && (
        <div
          ref={sidebarRef}
          className={`fixed top-0 right-0 h-full w-64 max-w-[75vw] z-40 transform transition-transform duration-300 ease-in-out md:hidden shadow-lg border-l rounded-l-2xl pt-24 px-4 pb-6 bg-opacity-95 ${
            isMenuOpen ? "translate-x-0" : "translate-x-full"
          }`}
          style={{
            backgroundColor: colors.pinkdull,
            borderColor: colors.pinkmedium,
            fontFamily: fonts.heading,
          }}
        >
          {/* Close (X) Button inside sidebar */}
          <div className="absolute top-4 right-4">
            <button
              onClick={() => setIsMenuOpen(false)}
              className="p-2 rounded-full transition duration-200"
              style={{
                backgroundColor: colors.pinkdark,
                color: colors.purpledark,
                border: `1px solid ${colors.pinkmedium}`,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.purpledark;
                e.currentTarget.style.color = "#fff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.pinkdark;
                e.currentTarget.style.color = colors.purpledark;
              }}
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          <div className="flex flex-col gap-3 items-center">
            {navigationItems.map((item) =>
              item.name === "BRANCH" ? (
                <div key="branch" className="w-full flex flex-col items-center">
                  <button
                    onClick={() => setShowMobileBranchDropdown((prev) => !prev)}
                    className="w-full text-center px-4 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200"
                    style={{
                      color: colors.lightmauve,
                      backgroundColor: colors.cream,
                      border: `1px solid ${colors.pinkmedium}`,
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.backgroundColor = colors.pinkdark;
                      e.currentTarget.style.color = colors.purpledark;
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.backgroundColor = colors.cream;
                      e.currentTarget.style.color = colors.mauve;
                    }}
                  >
                    BRANCH
                  </button>

                  {showMobileBranchDropdown && (
                    <div className="mt-2 w-full flex flex-col items-center gap-2">
                      {["Chennai", "Dindigul", "Trichy", "Salem", "Coimbatore", "Bangalore"].map((branch) => (
                        <button
                          key={branch}
                          onClick={() => handleBranchSelect(branch)}
                          className="w-full text-center px-3 py-1 text-sm rounded-md transition duration-200"
                          style={{
                            backgroundColor: colors.pinkdark,
                            color: colors.purpledark,
                            border: `1px solid ${colors.pinkmedium}`,
                          }}
                          onMouseEnter={(e) => {
                            e.currentTarget.style.backgroundColor =
                              colors.purpledark;
                            e.currentTarget.style.color = "#fff";
                          }}
                          onMouseLeave={(e) => {
                            e.currentTarget.style.backgroundColor =
                              colors.pinkdark;
                            e.currentTarget.style.color = colors.purpledark;
                          }}
                        >
                          {branch}
                        </button>
                      ))}
                    </div>
                  )}
                </div>
              ) : item.hash ? (
                <Link
                  key={item.name}
                  to={item.hash}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full text-center px-4 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200"
                  style={{
                    color: colors.lightmauve,
                    backgroundColor: colors.cream,
                    border: `1px solid ${colors.pinkmedium}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.pinkdark;
                    e.currentTarget.style.color = colors.purpledark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.cream;
                    e.currentTarget.style.color = colors.mauve;
                  }}
                >
                  {item.name}
                </Link>
              ) : (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full text-center px-4 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200"
                  style={{
                    color: colors.lightmauve,
                    backgroundColor: colors.cream,
                    border: `1px solid ${colors.pinkmedium}`,
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.backgroundColor = colors.pinkdark;
                    e.currentTarget.style.color = colors.purpledark;
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.backgroundColor = colors.cream;
                    e.currentTarget.style.color = colors.mauve;
                  }}
                >
                  {item.name}
                </a>
              )
            )}
          </div>

          <div className="flex justify-center gap-4 mt-6">
            <Link
              to="/register"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200 hover:scale-105"
              style={{
                backgroundColor: colors.purpledark,
                color: colors.whites,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.pinkdark;
                e.currentTarget.style.color = colors.purpledark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.purpledark;
                e.currentTarget.style.color = colors.whites;
              }}
            >
              SIGN&nbsp;UP
            </Link>
            <Link
              to="/login"
              onClick={() => setIsMenuOpen(false)}
              className="px-6 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200 hover:scale-105"
              style={{
                backgroundColor: colors.purpledark,
                color: colors.whites,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = colors.pinkdark;
                e.currentTarget.style.color = colors.purpledark;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = colors.purpledark;
                e.currentTarget.style.color = colors.whites;
              }}
            >
              LOGIN
            </Link>
          </div>
        </div>
      )}
    </header>
  );
};

export default Header;