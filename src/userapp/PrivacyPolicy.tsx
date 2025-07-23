import React from "react";
import { colors, fonts } from "../styles/Theme"; // Adjust if path differs
import { Link } from "react-router-dom";
const PrivacyPolicy = () => {
  return (
    <div
      className="min-h-screen pt-20 pb-16 px-4 md:px-20"
      style={{ backgroundColor: colors.cream }}
    >
      {/* Title */}
      <div className="text-center mb-10">
        <Link to="/" className="flex items-center space-x-3">
          <img
            src="/KuttyStory_logo_new.png"
            alt="KuttyStory Logo"
            className="mx-auto mb-4"
            width={200}
          />
        </Link>
        <h1
          className="text-4xl md:text-5xl font-bold"
          style={{
            color: colors.purpledark,
            fontFamily: fonts.heading,
          }}
        >
          PRIVACY POLICY
        </h1>
        <p
          className="text-lg mt-2"
          style={{
            color: colors.lightpurple,
            fontFamily: fonts.body,
          }}
        >
          Everything you need to know
        </p>
      </div>

      {/* Policy Content Box */}
      <div
        className="max-w-5xl mx-auto p-6 md:p-10 rounded-3xl shadow-md"
        style={{
          backgroundColor: colors.pinklight,
        }}
      >
        <h2
          className="text-center text-xl font-bold uppercase mb-6 tracking-wide"
          style={{
            color: colors.mauve,
            fontFamily: fonts.heading,
          }}
        >
          GENERAL
        </h2>

        <div
          className="text-md md:text-base leading-7 space-y-4"
          style={{
            color: "#333",
            fontFamily: fonts.body,
          }}
        >
          <div className="flex gap-2">
            <p>
              <strong>Privacy Policy</strong> KuttyStory respects the privacy of
              all users and ensures that all the personal information you
              provide is treated confidentially. Providing an email address is
              required to create an account where your Story will be safely
              stored. If you want to order a printed copy of your Album, we will
              use your information to fulfill your order as quickly and smoothly
              as possible. We would use this information for our promotional
              purposes only with your permission.
            </p>
          </div>

          <p>
            <strong>Collection of Data:</strong> KuttyStory uses the collected
            data to provide its clients with the following services:
          </p>

          <ul className="list-disc pl-6 space-y-2">
            <li>
              <strong>Creating an account:</strong> We need your email address
              to create an account for your Pregnancy Journey.
            </li>
            <li>
              <strong>Placing a subscription:</strong> We require your name,
              email, address, and payment details.
            </li>
            <li>
              <strong>To inform you:</strong> Your email is used for updates,
              offers, and promotions.
            </li>
          </ul>

          <p>
            <strong>KuttyStory will not sell your data:</strong> Your personal
            information is only shared with trusted third parties involved in
            processing your orders. They are obligated to respect
            confidentiality.
          </p>

          <p>
            <strong>Cookies:</strong> KuttyStory uses cookies to improve your
            experience and help us understand how visitors use our site. You can
            disable cookies in your browser settings.
          </p>

          <p>
            If you have any questions or wish to change your data, please
            contact us. This page always reflects the most recent version of our
            privacy policy.
          </p>
        </div>
      </div>
    </div>
  );
};

export default PrivacyPolicy;
