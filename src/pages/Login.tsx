import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Eye, EyeOff } from "lucide-react";
import WaveFooter from "../components/WaveFooter";
import { colors, fonts } from "../styles/Theme";
// import logo from "../assets/KuttyStory_logo.png"; // update path if needed
import baby from "../assets/images/kuttystory.jpg";
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
    <>
      <div
        className="min-h-screen pt-32 flex items-center justify-center p-4"
        style={{ backgroundColor: `${colors.pinkmedium}1A` }}
      >
        <div
          className="max-w-6xl w-full backdrop-blur-sm rounded-3xl shadow-2xl overflow-hidden border-4"
          style={{
            backgroundColor: `${colors.whites}E6`, // ~90% opacity
            borderColor: colors.pinkmedium,
            fontFamily: fonts.body,
          }}
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Left - Form */}
            <div className="p-8 lg:p-12">
              <div className="max-w-md mx-auto text-center mb-8">
                {/* <Link to="/" className="inline-block mb-6">
                  <img
                    src={logo}
                    alt="Kutty Story Logo"
                    title="Meet the Team Behind Kuttystory photography"
                    className="h-20 w-auto mx-auto"
                  />
                </Link> */}
                <h1
                  className="text-3xl font-bold mb-2"
                  style={{
                    color: colors.purpledark,
                    fontFamily: fonts.heading,
                  }}
                >
                  LOGIN
                </h1>
                <p style={{ color: colors.lightmauve }}>
                  Welcome back to your story ✨
                </p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-6">
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={formData.email}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200"
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
                    className="w-full px-4 py-3 rounded-xl border-2 outline-none transition-all duration-200"
                    style={{
                      borderColor: colors.pinkmedium,
                      backgroundColor: colors.whites,
                    }}
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 transition-colors duration-200"
                    style={{ color: colors.purpledark }}
                  >
                    {showPassword ? (
                      <EyeOff className="h-5 w-5" />
                    ) : (
                      <Eye className="h-5 w-5" />
                    )}
                  </button>
                </div>

                <div className="flex items-center justify-between">
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
                      className="text-sm"
                      style={{ color: colors.lightmauve }}
                    >
                      Show password
                    </label>
                  </div>
                  <Link
                    to="/forgot-password"
                    className="text-sm hover:scale-105 transform transition-all duration-200"
                    style={{ color: colors.purpledark }}
                  >
                    Forgot Password!
                  </Link>
                </div>

                <Button
                  type="submit"
                  className="w-full py-4 rounded-xl font-semibold transition-all duration-300 shadow-lg hover:shadow-xl transform hover:scale-105"
                >
                  Login
                </Button>

                <div className="text-center">
                  <span style={{ color: colors.lightmauve }}>
                    Need an account?{" "}
                  </span>
                  <Link
                    to="/register"
                    className="font-semibold hover:scale-105 transform inline-block transition-all duration-200"
                    style={{ color: colors.purpledark }}
                  >
                    Register Here
                  </Link>
                </div>
              </form>
            </div>

            {/* Right - Illustration */}
            <div
              className="p-8 lg:p-12 flex items-center justify-center"
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
                  />
                  <img
                    src={baby}
                    alt="Family photography illustration"
                    title="baby photography Chennai, Dindigul"
                    className="w-full h-full object-cover rounded-full border-8 shadow-2xl"
                    style={{ borderColor: colors.cream }}
                  />
                </div>
                <h2
                  className="text-2xl font-bold mb-4"
                  style={{
                    color: colors.purpledark,
                    fontFamily: fonts.heading,
                  }}
                >
                  Welcome Back
                </h2>
                <p className="text-lg" style={{ color: colors.lightmauve }}>
                  Continue your beautiful journey with us ✨
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <WaveFooter />
    </>
  );
};

export default Login;
