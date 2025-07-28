import React from "react";
import { Link } from "react-router-dom";
import planeImage from "../assets/plane.png";
import sydneyImage from "../assets/sydney.jpg";
import reefImage from "../assets/reef.webp";
import uluruImage from "../assets/uluru.jpeg";
import apostlesImage from "../assets/apostles.jpeg";
import Footer from "../components/Footer";
import Header from "../components/Header";

const HomePage = () => {
  return (
    <>
      <Header />
      <div style={{ fontFamily: "sans-serif", color: "#1f2937" }}>
        {/* Hero Section */}
        <section style={{ position: "relative", backgroundColor: "#f3f4f6", padding: "40px" }}>
          <div
            style={{
              borderRadius: "16px",
              overflow: "hidden",
              boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              position: "relative",
            }}
          >
            <img
              src={planeImage}
              alt="Airplane"
              style={{ width: "100%", height: "400px", objectFit: "cover" }}
            />
            <div
              style={{
                position: "absolute",
                top: "80px",
                left: "40px",
                maxWidth: "400px",
                color: "#fff",
              }}
            >
              <p style={{ textTransform: "uppercase", letterSpacing: "1px", fontSize: "14px" }}>
                Your Guide to Aussie Wonders
              </p>
              <h1 style={{ fontSize: "36px", fontWeight: "bold", lineHeight: "1.2", margin: "12px 0" }}>
                Explore Australia <br /> Like Never Before
              </h1>
              <Link to="/listings">
                <button
                  style={{
                    marginTop: "16px",
                    backgroundColor: "#2563eb",
                    padding: "10px 20px",
                    borderRadius: "9999px",
                    color: "#fff",
                  }}
                >
                  Discover Now
                </button>
              </Link>
            </div>
          </div>
        </section>

        {/* Partners */}
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: "24px",
            marginTop: "32px",
            color: "#6b7280",
            fontSize: "14px",
            flexWrap: "wrap",
          }}
        >
          <span>Tourism Australia</span>
          <span>National Parks</span>
          <span>Explore NSW</span>
          <span>Travel Victoria</span>
        </div>

        {/* Popular Destination */}
        <section style={{ marginTop: "48px", padding: "0 32px" }}>
          <h2 style={{ fontSize: "24px", fontWeight: "600", marginBottom: "16px" }}>
            Popular Destinations in Australia
          </h2>
          <p style={{ color: "#6b7280", marginBottom: "24px" }}>
            Discover the most iconic and beautiful travel spots across Australia.
          </p>
          <div
            style={{
              display: "flex",
              gap: "16px",
              overflowX: "auto",
              paddingBottom: "16px",
            }}
          >
            {[
              {
                title: "Sydney Opera House",
                location: "Sydney, NSW",
                image: sydneyImage,
              },
              {
                title: "Great Barrier Reef",
                location: "Queensland",
                image: reefImage,
              },
              {
                title: "Uluru (Ayers Rock)",
                location: "Northern Territory",
                image: uluruImage,
              },
              {
                title: "Twelve Apostles",
                location: "Great Ocean Road, Victoria",
                image: apostlesImage,
              },
            ].map((place, idx) => (
              <div
                key={idx}
                style={{
                  minWidth: "250px",
                  borderRadius: "12px",
                  overflow: "hidden",
                  boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
                }}
              >
                <img
                  src={place.image}
                  alt={place.title}
                  style={{ height: "160px", width: "100%", objectFit: "cover" }}
                />
                <div style={{ padding: "16px" }}>
                  <h3 style={{ fontWeight: "600" }}>{place.title}</h3>
                  <p style={{ fontSize: "14px", color: "#6b7280" }}>{place.location}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Guide Section (Modified from Journey Section) */}
        <section
          style={{
            marginTop: "64px",
            backgroundColor: "#f9fafb",
            padding: "48px 32px",
            textAlign: "center",
          }}
        >
          <h2 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "8px" }}>
            Plan Your Adventure with Confidence
          </h2>
          <p
            style={{
              color: "#4b5563",
              maxWidth: "640px",
              margin: "0 auto 32px auto",
              lineHeight: "1.5",
            }}
          >
            Aussie TravelExplorer gives you essential travel insights, tips, and destination overviews to help you plan unforgettable journeys.
          </p>

          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1fr",
              gap: "24px",
              maxWidth: "768px",
              margin: "0 auto",
            }}
          >
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>Discover Destinations</h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>
                Explore detailed guides on Australia's must-see locations.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#2563eb",
                color: "#ffffff",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>Travel Tips & Insights</h4>
              <p style={{ fontSize: "14px" }}>
                Get useful advice on when to go, how to get around, and what to expect.
              </p>
            </div>
            <div
              style={{
                backgroundColor: "#ffffff",
                padding: "24px",
                borderRadius: "16px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
              }}
            >
              <h4 style={{ fontWeight: "600", marginBottom: "8px" }}>Cultural Highlights</h4>
              <p style={{ fontSize: "14px", color: "#6b7280" }}>
                Learn about Australia’s rich history, traditions, and local experiences.
              </p>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default HomePage;
