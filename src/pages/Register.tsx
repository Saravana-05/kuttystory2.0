import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, RefreshCw } from "lucide-react";
import WaveFooter from "../components/WaveFooter";
import { colors, fonts } from "../styles/Theme";
import logo from "../assets/KuttyStory_logo.png";
import Button from "../styles/Button";
import baby from "../assets/images/registerimage.jpg";

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
    <section style={{ fontFamily: fonts.body }}>
      <div
        className="min-h-screen flex items-center justify-center p-4 pt-20"
        style={{ backgroundColor: `${colors.pinkmedium}1A` }}
      >
        <div
          className="max-w-6xl w-full backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4"
          style={{
            backgroundColor: `${colors.whites}E6`,
            borderColor: colors.pinkmedium,
          }}
        >
          <div className="grid lg:grid-cols-2">
            {/* Form Side */}
            <div className="p-6 sm:p-10 md:p-12">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-10">
                  <Link to="/" className="inline-block mb-6">
                    <img
                      src={logo}
                      alt="Kutty Story Logo"
                      title="Newborn Photography by Kuttystory"
                      className="h-16 w-auto mx-auto"
                    />
                  </Link>
                  <h1
                    className="text-3xl font-bold mb-2"
                    style={{
                      color: colors.purpledark,
                      fontFamily: fonts.heading,
                    }}
                  >
                    Create Your Account
                  </h1>
                  <p className="text-base" style={{ color: colors.purpledark }}>
                    Begin your journey of preserving beautiful memories ✨
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-6">
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
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200"
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
                      className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200"
                      style={{
                        borderColor: colors.pinkmedium,
                        backgroundColor: colors.whites,
                      }}
                      required
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2"
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
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200"
                    style={{
                      borderColor: colors.pinkmedium,
                      backgroundColor: colors.whites,
                    }}
                    required
                  />

                  <div className="text-sm" style={{ color: colors.purpledark }}>
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
                      className="text-sm"
                      style={{ color: colors.purpledark }}
                    >
                      Show password
                    </label>
                  </div>

                  {/* Captcha Section */}
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      style={{ color: colors.purpledark }}
                    >
                      Captcha*
                    </label>
                    <div className="flex items-center space-x-3">
                      <div
                        className="px-4 py-2 rounded-lg font-mono text-lg tracking-wider border-2"
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
                        className="flex-1 px-4 py-2 rounded-lg border-2 outline-none"
                        style={{
                          borderColor: colors.pinkmedium,
                          backgroundColor: colors.whites,
                        }}
                        required
                      />
                      <button
                        type="button"
                        className="p-2 rounded-lg"
                        style={{
                          backgroundColor: colors.purpledark,
                          color: colors.whites,
                        }}
                      >
                        <RefreshCw className="h-5 w-5" />
                      </button>
                    </div>
                  </div>

                  {/* Submit Button */}
                  <div className="text-center">
                    <Button type="submit" variant="cta">
                      Sign Up
                    </Button>
                  </div>

                  {/* Redirect to Login */}
                  <div className="text-center">
                    <span style={{ color: colors.purpledark }}>
                      Already have an account?{" "}
                    </span>
                    <Link
                      to="/login"
                      className="font-semibold transform transition-all duration-200 hover:scale-105"
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
              className="p-6 sm:p-10 md:p-12 flex items-center justify-center"
              style={{
                background: colors.pinkdull,
              }}
            >
              <div className="text-center">
                <div className="w-80 h-80 mx-auto mb-6 relative">
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
                    className="w-full h-full object-cover rounded-full border-8 shadow-2xl"
                    style={{ borderColor: colors.whites }}
                  />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{ color: colors.purpledark }}
                >
                  Join the KuttyStory Family
                </h2>
                <p className="text-lg" style={{ color: colors.purpledark }}>
                  Begin capturing unforgettable moments today ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveFooter />
    </section>
  );
};

export default Register;
