import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { colors, fonts } from "../styles/Theme";
import Logo from "../assets/KuttyStory_logo.png";

interface HeaderProps {
  onSidebarToggle: () => void;
}

const Header: React.FC<HeaderProps> = ({ onSidebarToggle }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  const sidebarRef = useRef<HTMLDivElement | null>(null);

  const navigationItems = [
    { name: "HOME", hash: "#home" },
    { name: "HOW IT WORKS", hash: "#how-it-works" },
    { name: "ALBUM", hash: "#album" },
    { name: "GALLERY", hash: "#gallery" },
    { name: "PACKAGE", hash: "#package" },
    { name: "FAQS", hash: "#faqs" },
    { name: "STUDIO", href: "https://store.kuttystory.com/user/login" },
  ];

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
    onSidebarToggle();
  };

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (
        sidebarRef.current &&
        !sidebarRef.current.contains(event.target as Node)
      ) {
        setIsMenuOpen(false);
      }
    };

    if (isMenuOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isMenuOpen]);

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
                item.hash ? (
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
                      e.currentTarget.style.backgroundColor = colors.purpledark;
                      e.currentTarget.style.color = "#fff";
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

          {/* Auth Buttons (Desktop) */}
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
      </div>

      {/* Mobile Navigation */}
      {isHomePage && isMenuOpen && (
        <div
          ref={sidebarRef}
          className="md:hidden px-4 pb-6 pt-4 rounded-b-2xl shadow-lg animate-slideDown border-t"
          style={{
            backgroundColor: colors.pinkdull,
            borderColor: colors.blue,
            borderTopWidth: "1.5px",
          }}
        >
          <div className="flex flex-col gap-3 items-center">
            {navigationItems.map((item) =>
              item.hash ? (
                <Link
                  key={item.name}
                  to={item.hash}
                  onClick={() => setIsMenuOpen(false)}
                  className="w-full max-w-xs text-center px-4 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200"
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
                  className="w-full max-w-xs text-center px-4 py-2 text-sm font-semibold rounded-full shadow-md transition duration-200"
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
              className="px-6 py-2 text-sm font-semibold rounded-full text-[colors.whites] shadow-md transition duration-200 hover:scale-105"
              style={{ backgroundColor: colors.purpledark }}
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
              className="px-6 py-2 text-sm font-semibold rounded-full text-[colors.whites] shadow-md transition duration-200 hover:scale-105"
              style={{ backgroundColor: colors.purpledark }}
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
