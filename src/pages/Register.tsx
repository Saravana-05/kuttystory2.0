import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, RefreshCw, ArrowLeft } from "lucide-react";
import { colors, fonts } from "../styles/Theme";
import logo from "../assets/KuttyStory_logo.png";
import Button from "../styles/Button";
import baby from "../assets/images/registerimage.webp";

type FormField = "name" | "email" | "phone";

interface FormData {
  name: string;
  email: string;
  phone: string;
  password: string;
  confirmPassword: string;
}

const Register: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState<FormData>({
    name: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Registration data:", formData);
  };

  return (
    <section style={{ fontFamily: fonts.body }} className="min-h-screen">
      {/* Top Navigation */}
      <nav 
        className="w-full px-4 sm:px-6 lg:px-8 py-4 border-b"
        style={{ 
          backgroundColor: colors.whites,
          borderColor: `${colors.pinkmedium}30`
        }}
      >
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <Link 
            to="/" 
            className="flex items-center space-x-2 px-3 py-2 rounded-lg transition-all duration-200 hover:bg-gray-50"
            style={{ color: colors.purpledark }}
          >
            <ArrowLeft className="h-5 w-5" />
            <span className="font-medium hidden sm:inline">Back to Home</span>
            <span className="font-medium sm:hidden">Back</span>
          </Link>
          <Link to="/" className="flex-shrink-0">
            <img
              src={logo}
              alt="Kutty Story Logo"
              title="Newborn Photography by Kuttystory"
              className="h-8 sm:h-10 w-auto"
            />
          </Link>
        </div>
      </nav>

      {/* Main Content */}
      <div
        className="flex-1 flex items-center justify-center px-4 sm:px-6 lg:px-8 py-8"
        style={{ backgroundColor: `${colors.pinkmedium}0D` }}
      >
        <div
          className="w-full max-w-6xl backdrop-blur-sm rounded-2xl sm:rounded-3xl shadow-xl overflow-hidden border-2"
          style={{
            backgroundColor: `${colors.whites}F0`,
            borderColor: `${colors.pinkmedium}40`,
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Form Side */}
            <div className="p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-8 sm:mb-10">
                  <h1
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{
                      color: colors.purpledark,
                      fontFamily: fonts.heading,
                    }}
                  >
                    Create Your Account
                  </h1>
                  <p className="text-sm sm:text-base" style={{ color: colors.purpledark }}>
                    Begin your journey of preserving beautiful memories ✨
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  {(["name", "email", "phone"] as FormField[]).map((field) => (
                    <input
                      key={field}
                      type={
                        field === "email"
                          ? "email"
                          : field === "phone"
                          ? "tel"
                          : "text"
                      }
                      name={field}
                      placeholder={`${
                        field[0].toUpperCase() + field.slice(1)
                      }*`}
                      value={formData[field]}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 focus:border-opacity-80"
                      style={{
                        borderColor: colors.pinkmedium,
                        backgroundColor: colors.whites,
                      }}
                      required
                    />
                  ))}

                  {/* Password Field */}
                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password*"
                      value={formData.password}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 pr-12 rounded-xl border-2 outline-none transition-all duration-200 focus:border-opacity-80"
                      style={{
                        borderColor: colors.pinkmedium,
                        backgroundColor: colors.whites,
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1"
                      style={{ color: colors.purpledark }}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  {/* Confirm Password */}
                  <input
                    type="password"
                    name="confirmPassword"
                    placeholder="Confirm Password*"
                    value={formData.confirmPassword}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 focus:border-opacity-80"
                    style={{
                      borderColor: colors.pinkmedium,
                      backgroundColor: colors.whites,
                    }}
                    required
                  />

                  <div className="text-xs sm:text-sm" style={{ color: colors.purpledark }}>
                    *Use at least 8 characters, with 1 special (&@#) and 1
                    number (0–9)
                  </div>

                  {/* Show Password Toggle */}
                  <div className="flex items-center space-x-2">
                    <input
                      type="checkbox"
                      id="showPassword"
                      checked={showPassword}
                      onChange={() => setShowPassword(!showPassword)}
                      className="rounded"
                      style={{ accentColor: colors.pinkmedium }}
                    />
                    <label
                      htmlFor="showPassword"
                      className="text-xs sm:text-sm"
                      style={{ color: colors.purpledark }}
                    >
                      Show password
                    </label>
                  </div>

                  {/* Captcha Section */}
                  <div>
                    <label
                      className="block text-xs sm:text-sm font-medium mb-2"
                      style={{ color: colors.purpledark }}
                    >
                      Captcha*
                    </label>
                    <div className="flex items-center space-x-3">
                      <div
                        className="px-3 sm:px-4 py-2 rounded-lg font-mono text-base sm:text-lg tracking-wider border-2 flex-shrink-0"
                        style={{
                          backgroundColor: colors.whites,
                          borderColor: colors.pinkmedium,
                        }}
                      >
                        8E4C
                      </div>
                      <input
                        type="text"
                        placeholder="Enter captcha"
                        className="flex-1 px-3 sm:px-4 py-2 rounded-lg border-2 outline-none text-sm sm:text-base"
                        style={{
                          borderColor: colors.pinkmedium,
                          backgroundColor: colors.whites,
                        }}
                        required
                      />
                      <button
                        type="button"
                        className="p-2 rounded-lg flex-shrink-0"
                        style={{
                          backgroundColor: colors.purpledark,
                          color: colors.whites,
                        }}
                      >
                        <RefreshCw className="h-4 w-4 sm:h-5 sm:w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center pt-4">
                    <Button type="submit" variant="cta">
                      Sign Up
                    </Button>
                  </div>

                  {/* Redirect to Login */}
                  <div className="text-center pt-2">
                    <span className="text-sm sm:text-base" style={{ color: colors.purpledark }}>
                      Already have an account?{" "}
                    </span>
                    <Link
                      to="/login"
                      className="font-semibold text-sm sm:text-base underline decoration-2 underline-offset-2 transition-colors duration-200 hover:opacity-80"
                      style={{ color: colors.purpledark }}
                    >
                      Login
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* Right Image Side */}
            <div
              className="p-6 sm:p-8 lg:p-12 flex items-center justify-center order-1 lg:order-2 min-h-[300px] sm:min-h-[400px] lg:min-h-0"
              style={{
                background: colors.pinkdull,
              }}
            >
              <div className="text-center max-w-sm">
                <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-80 lg:h-80 mx-auto mb-4 sm:mb-6 relative">
                  <div
                    className="absolute inset-0 rounded-full opacity-20"
                    style={{
                      background: `linear-gradient(135deg, ${colors.pinkmedium}, ${colors.purpledark})`,
                    }}
                  ></div>
                  <img
                    src={baby}
                    alt="Mother and baby"
                    title="Best Baby Photo Album For Maternity To First Year"
                    className="w-full h-full object-cover rounded-full border-4 sm:border-8 shadow-xl"
                    style={{ borderColor: colors.whites }}
                  />
                </div>
                <h2
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                  style={{ color: colors.purpledark }}
                >
                  Join the KuttyStory Family
                </h2>
                <p className="text-base sm:text-lg" style={{ color: colors.purpledark }}>
                  Begin capturing unforgettable moments today ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;