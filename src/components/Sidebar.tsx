import React from "react";
import { Link } from "react-router-dom";
import {
  X,
  Home,
  HelpCircle,
  Camera,
  Image,
  Package,
  MessageCircle,
  Building,
} from "lucide-react";

import { colors, fonts } from "../styles/Theme";

interface SidebarProps {
  isOpen: boolean;
  onClose: () => void;
}

const Sidebar: React.FC<SidebarProps> = ({ isOpen, onClose }) => {
  const navigationItems = [
    { name: "HOME", href: "#home", icon: <Home className="h-5 w-5" /> },
    {
      name: "HOW IT WORKS",
      href: "#how-it-works",
      icon: <HelpCircle className="h-5 w-5" />,
    },
    { name: "ALBUM", href: "#album", icon: <Camera className="h-5 w-5" /> },
    { name: "GALLERY", href: "#gallery", icon: <Image className="h-5 w-5" /> },
    {
      name: "PACKAGE",
      href: "#package",
      icon: <Package className="h-5 w-5" />,
    },
    {
      name: "FAQS",
      href: "#faqs",
      icon: <MessageCircle className="h-5 w-5" />,
    },
    { name: "STUDIO", href: "#studio", icon: <Building className="h-5 w-5" /> },
  ];

  return (
    <>
      {/* Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 backdrop-blur-sm z-40 md:hidden"
          style={{ backgroundColor: `${colors.lightmauve}80` }} // 50% opacity
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div
        className={`fixed top-0 left-0 h-full w-80 shadow-2xl transform transition-transform duration-300 ease-in-out z-50 border-r-4 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
        style={{
          backgroundColor: colors.whites,
          borderColor: colors.pinkmedium,
          fontFamily: fonts.body,
        }}
      >
        <div className="p-6">
          {/* Logo & Close */}
          <div className="flex items-center justify-between mb-8">
            <Link to="/" className="flex items-center space-x-3">
              <img
                src="/public/KuttyStory_logo_new.png"
                alt="Kutty Story Logo"
                className="h-10 w-auto"
              />
            </Link>
            <button
              onClick={onClose}
              className="p-2 rounded-full transition-colors duration-200 hover:scale-110 transform"
              style={{ backgroundColor: `${colors.pinkmedium}33` }}
            >
              <X className="h-6 w-6" style={{ color: colors.lightmauve }} />
            </button>
          </div>

          {/* Navigation Links */}
          <nav className="space-y-2">
            {navigationItems.map((item) => (
              <a
                key={item.name}
                href={item.href}
                onClick={onClose}
                className="flex items-center space-x-3 px-4 py-3 rounded-xl transition-all duration-200 group hover:scale-105 transform"
                style={{ backgroundColor: `${colors.pinkmedium}1A` }}
              >
                <div style={{ color: colors.pinkmedium }}>{item.icon}</div>
                <span
                  className="font-medium transition-colors duration-200"
                  style={{ color: colors.lightmauve }}
                >
                  {item.name}
                </span>
              </a>
            ))}
          </nav>

          {/* CTA Buttons */}
          <div className="mt-8 space-y-3">
            <Link
              to="/register"
              className="block w-full px-4 py-3 rounded-xl font-medium shadow-lg text-center transition-all duration-200 hover:scale-105 transform"
              style={{
                backgroundColor: colors.pinkmedium,
                color: colors.whites,
              }}
            >
              SIGN&nbsp;UP 🚀
            </Link>
            <Link
              to="/login"
              className="block w-full px-4 py-3 rounded-xl font-medium shadow-lg text-center transition-all duration-200 hover:scale-105 transform"
              style={{
                backgroundColor: colors.purpledark,
                color: colors.whites,
              }}
            >
              LOGIN 🔐
            </Link>
          </div>

          {/* Footer Text */}
          <div
            className="mt-8 pt-6 border-t"
            style={{ borderColor: colors.pinkmedium }}
          >
            <p
              className="text-sm text-center"
              style={{ color: colors.lightmauve }}
            >
              © 2024 Kutty Story ✨
              <br />
              <span className="text-xs" style={{ color: colors.purpledark }}>
                Little moments Big memories 💕
              </span>
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Sidebar;
