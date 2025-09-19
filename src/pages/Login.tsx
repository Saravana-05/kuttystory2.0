import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff, ArrowLeft } from "lucide-react";
import { colors, fonts } from "../styles/Theme";
import logo from "../assets/KuttyStory_logo.webp";
import baby from "../assets/images/kuttystory.webp";
import Button from "../styles/Button";

const Login: React.FC = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Login data:", formData);
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
              title="Meet the Team Behind Kuttystory Baby photography"
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
            {/* Left - Form */}
            <div className="p-6 sm:p-8 lg:p-12 order-2 lg:order-1">
              <div className="max-w-md mx-auto">
                <div className="text-center mb-8 sm:mb-10">
                  <div className="mb-6">
                    <img
                      src={logo}
                      alt="Kutty Story Logo"
                      title="Meet the Team Behind Kuttystory photography"
                      className="h-16 sm:h-20 w-auto mx-auto"
                    />
                  </div>
                  <h1
                    className="text-2xl sm:text-3xl font-bold mb-2"
                    style={{
                      color: colors.purpledark,
                      fontFamily: fonts.heading,
                    }}
                  >
                    LOGIN
                  </h1>
                  <p className="text-sm sm:text-base" style={{ color: colors.lightmauve }}>
                    Welcome back to your story ✨
                  </p>
                </div>

                <form onSubmit={handleSubmit} className="space-y-5 sm:space-y-6">
                  <input
                    type="email"
                    name="email"
                    placeholder="Email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200 focus:border-opacity-80"
                    style={{
                      borderColor: colors.pinkmedium,
                      backgroundColor: colors.whites,
                    }}
                  />

                  <div className="relative">
                    <input
                      type={showPassword ? "text" : "password"}
                      name="password"
                      placeholder="Password"
                      value={formData.password}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 pr-12 rounded-xl border-2 outline-none transition-all duration-200 focus:border-opacity-80"
                      style={{
                        borderColor: colors.pinkmedium,
                        backgroundColor: colors.whites,
                      }}
                    />
                    <button
                      type="button"
                      onClick={() => setShowPassword(!showPassword)}
                      className="absolute right-3 top-1/2 transform -translate-y-1/2 p-1 transition-colors duration-200"
                      style={{ color: colors.purpledark }}
                    >
                      {showPassword ? (
                        <EyeOff className="h-5 w-5" />
                      ) : (
                        <Eye className="h-5 w-5" />
                      )}
                    </button>
                  </div>

                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between space-y-3 sm:space-y-0">
                    <div className="flex items-center space-x-2">
                      <input
                        type="checkbox"
                        id="showPasswordLogin"
                        checked={showPassword}
                        onChange={() => setShowPassword(!showPassword)}
                        className="rounded"
                        style={{ accentColor: colors.pinkmedium }}
                      />
                      <label
                        htmlFor="showPasswordLogin"
                        className="text-xs sm:text-sm"
                        style={{ color: colors.lightmauve }}
                      >
                        Show password
                      </label>
                    </div>
                    <Link
                      to="/forgot-password"
                      className="text-xs sm:text-sm underline decoration-2 underline-offset-2 transition-colors duration-200 hover:opacity-80"
                      style={{ color: colors.purpledark }}
                    >
                      Forgot Password!
                    </Link>
                  </div>

                  <div className="pt-4">
                    <Button
                      type="submit"
                      className="w-full py-3 sm:py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl"
                    >
                      Login
                    </Button>
                  </div>

                  <div className="text-center pt-2">
                    <span className="text-sm sm:text-base" style={{ color: colors.lightmauve }}>
                      Need an account?{" "}
                    </span>
                    <Link
                      to="/register"
                      className="font-semibold text-sm sm:text-base underline decoration-2 underline-offset-2 transition-colors duration-200 hover:opacity-80"
                      style={{ color: colors.purpledark }}
                    >
                      Register Here
                    </Link>
                  </div>
                </form>
              </div>
            </div>

            {/* Right - Illustration */}
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
                  />
                  <img
                    src={baby}
                    alt="Family photography illustration"
                    title="baby photography Chennai, Dindigul,trichy"
                    className="w-full h-full object-cover rounded-full border-4 sm:border-8 shadow-xl"
                    style={{ borderColor: colors.cream }}
                  />
                </div>
                <h2
                  className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4"
                  style={{
                    color: colors.purpledark,
                    fontFamily: fonts.heading,
                  }}
                >
                  Welcome Back
                </h2>
                <p className="text-base sm:text-lg" style={{ color: colors.lightmauve }}>
                  Continue your beautiful journey with us ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;