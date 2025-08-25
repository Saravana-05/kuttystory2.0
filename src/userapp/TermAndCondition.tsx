import React, { useState } from "react";
import { colors, fonts } from "../styles/Theme";
import { Link } from "react-router-dom";
const tabs = [
  { key: "all", label: "ALL" },
  { key: "general", label: "GENERAL" },
  { key: "delivery", label: "DELIVERY" },
  { key: "prices", label: "PRICES" },
  { key: "data", label: "DATA POLICIES" },
  { key: "return", label: "EXCHANGE/RETURN" },
  { key: "offers", label: "OFFERS" },
  { key: "image", label: "IMAGE POLICY" },
  { key: "force", label: "FORCE MAJEURE" },
  { key: "photoshoot", label: "PHOTOSHOOT" },
  { key: "cancel", label: "CANCELLATION POLICY" },
];

const TermAndCondition: React.FC = () => {
  const [activeTab, setActiveTab] = useState("all");

  const tabStyle = (key: string) =>
    `text-xs md:text-md font-semibold px-4 py-2 rounded-lg transition-colors duration-200 ${
      activeTab === key
        ? "bg-pinkmedium text-white shadow"
        : "bg-pinklight text-mauve hover:bg-pinkmedium hover:text-white"
    }`;

  return (
    <div
      className="mt-20 mb-10 px-4 md:px-20"
      style={{ fontFamily: fonts.body, color: colors.mauve }}
    >
      {/* Header */}
      <div className="text-center mb-10">
        <div className="text-center">
          <Link to="/" className="flex items-center space-x-3">
            <img
              src="/KuttyStory_logo_new.png"
              alt="KuttyStory Logo"
              className="mx-auto mb-4"
              width={200}
            />
          </Link>
        </div>
        <h1
          className="text-4xl  font-bold mb-2"
          style={{ fontFamily: fonts.heading, color: colors.lightpurple }}
        >
          TERMS & CONDITIONS
        </h1>
        <h3
          className="text-lg font-medium"
          style={{ color: colors.lightmauve }}
        >
          Everything you need to know
        </h3>
      </div>

      {/* Tabs */}
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2 bg-pinkdull/30 p-2 rounded-xl max-w-5xl mx-auto text-md">
        {tabs.map((tab) => (
          <button
            key={tab.key}
            onClick={() => setActiveTab(tab.key)}
            className={tabStyle(tab.key)}
            style={{ fontSize: "medium" }}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Tab Content */}
      <div
        className="mt-8 rounded-xl p-6 shadow-lg max-w-5xl mx-auto"
        style={{
          backgroundColor: colors.cream,
          overflow: "hidden",
          fontFamily: fonts.body,
        }}
      >
        {/* GENERAL */}
        {(activeTab === "all" || activeTab === "general") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">GENERAL POLICIES</h3>
            <p className="text-md leading-6">
              1.1 These terms and conditions apply to all offers of KuttyStory.
              The conditions are available for everyone and included on the
              website of KuttyStory.
              <br />
              1.2 The use of the Website and Mobile App are under Subscription.
              So, you can create an account, upload memories and print the
              album.
              <br />
              1.3 The only service of KuttyStory that you pay for upload your
              memories from pregnancy to your kids1st birthday as a printed book
              and for photoshoots.
              <br />
              1.4 By Subscribing KuttyStory, you indicate that you agree to the
              delivery and payment terms and conditions. KuttyStory reserves the
              right to change these.
              <br />
              1.5 Unless otherwise agreed in writing, the general or specific
              conditions or stipulations of third parties are not recognized by
              KuttyStory
              <br />
              1.6 KuttyStory guarantees that the product delivered meets the
              contract and meets the specifications listed in the offer.
            </p>
          </div>
        )}

        {/* DELIVERY */}
        {(activeTab === "all" || activeTab === "delivery") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">DELIVERY</h3>
            <p className="text-md leading-6">
              2.1 The expected delivery times are one week for all soft copy of
              the photoshoot and two weeks for all hard copies of your album. We
              are not responsible for any delay caused by the delivery agent.
              <br />
              2.2 The supply obligation of KuttyStory will, subject to proof, be
              fulfilled once the product supplied by KuttyStory are offered to
              the customer.
              <br />
              2.3 All terms mentioned on the website are indicative. No rights
              can be derived from those terms.
            </p>
          </div>
        )}

        {/* PRICES */}
        {(activeTab === "all" || activeTab === "prices") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">PRICES</h3>
            <p className="text-md leading-6">
              3.1 Prices are subject to liable within the term of the offer,
              unless legal action is necessary or if the manufacturer alters
              their prices within this period.
              <br />
              3.2 No liability is accepted for the consequences of misprints of
              the prices on our website.
              <br />
              3.3 All prices on the site are in India Rupees.
            </p>
          </div>
        )}

        {/* DATA POLICIES */}
        {(activeTab === "all" || activeTab === "data") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">DATA POLICIES</h3>
            <p className="text-md leading-6">
              4.1 Because the album are made entirely according to the
              specifications of the customer and have a personal and unique
              nature, exchanging or returning a printed albumis not possible.
              <br />
              4.2 If the album is damaged or contains typographical errors,
              please contact KuttyStory within seven days. We will arrange for a
              suitable solution.
            </p>
          </div>
        )}

        {/* RETURN */}
        {(activeTab === "all" || activeTab === "return") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">EXCHANGE / RETURN</h3>
            <p className="text-md leading-6">
              5.1 If you place an order with KuttyStory, your data will be
              included in the customer database of KuttyStory. KuttyStory
              adheres to the Data Protection Act and will not provide your
              information to third parties. See our Privacy Policy.
              <br />
              5.2 KuttyStory respects the privacy of the users of the website ad
              ensures confidentiality of your personal information.
            </p>
          </div>
        )}

        {/* OFFERS */}
        {(activeTab === "all" || activeTab === "offers") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">OFFERS</h3>
            <p className="text-md leading-6">
              6.1 Offers are not binding unless otherwise stated in the offer.
              <br />
              6.2 Verbal agreements with are valid only after they have been
              confirmed in writing.
              <br />
              6.3 KuttyStory’s offers do not automatically apply to repeat
              Subscriptions
              <br />
              6.4 KuttyStory cannot be held to its offer if the customer should
              understand that the offer, or any part thereof, contained an
              obvious mistake or error.
              <br />
              6.5 Additions, modifications and/or further agreements are valid
              only if agreed to in writing.
            </p>
          </div>
        )}

        {/* IMAGE POLICY */}
        {(activeTab === "all" || activeTab === "image") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">IMAGE POLICY</h3>
            <p className="text-md leading-6">
              7.1 Unless otherwise stated, copyright and all intellectual
              property rights in all photos and graphical images presented on
              this website are the property of KuttyStory.
              <br />
              7.2 KuttyStory grants you permission to only access and make
              personal use of the Site and the images here-in.
              <br />
              7.3 You agree not to, directly or indirectly download or modify /
              alter / change / amend / vary / transform / revise / translate /
              copy / publish / distribute or otherwise disseminate any content
              on KuttyStory’s Site, or any portion of it; or delete or fail to
              display any promotional taglines included in the Site / Service
              either directly or indirectly.
              <br />
              7.4 However, you may print or download extracts from these pages
              for your personal / individual, non-commercial use only
            </p>
          </div>
        )}

        {/* FORCE MAJEURE */}
        {(activeTab === "all" || activeTab === "force") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">FORCE MAJEURE</h3>
            <p className="text-md leading-6">
              8.1 KuttyStory is not liable in any way when it cannot fulfil its
              commitments due to force majeure.
              <br />
              8.2 Force majeure shall mean any strange reason and any
              circumstance that in reasonableness should not be for the risk of
              KuttyStory. Delay or failure by our suppliers, disruptions in the
              Internet, disruptions in the electricity, failures in email
              traffic and disturbances or changes in third party technology,
              transport problems, strikes, government measures, delays in
              supply, omissions of suppliers and/or manufacturers of KuttyStory
              as well as from individuals, disease, defects in appliance or
              shipment are explicit cases of force majeure.
              <br />
              8.3 In case of force majeure, KuttyStory reserves the right to
              suspend its obligations and is entitled to dissolve the agreement
              in whole or in part, or to amend the content of the agreement so
              that the execution of the command is still possible. KuttyStory is
              in no way obligated to pay any penalty or damages.
            </p>
          </div>
        )}

        {/* PHOTOSHOOT */}
        {(activeTab === "all" || activeTab === "photoshoot") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">PHOTOSHOOT</h3>
            <p className="text-md leading-6">
              9.1 Shoots that are enclosed by KuttyStory will be only taken.
              <br />
              9.2 Shoots that are not enclosed will not be taken.
              <br />
              9.3 Minimum Timing for a Shoot is 2-3 hours with terms.
              <br />
              9.4 If any add-ons on KuttyStory products will be charged extra.
            </p>
          </div>
        )}

        {/* CANCELLATION */}
        {(activeTab === "all" || activeTab === "cancel") && (
          <div className="mb-6">
            <h3 className="text-xl font-semibold mb-2">CANCELLATION POLICY</h3>
            <p className="text-md leading-6">
              10.1 KuttyStory will not cancel its subscription for any reasons.
              <br />
              10.2 Any Subscription can be cancelled before the end of the day.
              <br />
              10.3 Once the user is subscribed, the Subscription cannot be
              cancelled.
            </p>
          </div>
        )}
      </div>
    </div>
  );
};

export default TermAndCondition;
