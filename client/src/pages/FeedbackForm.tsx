import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Feedback = () => {
  return (
    <>
    <Header />
    <div style={{ padding: "32px", fontFamily: "sans-serif", maxWidth: "600px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "16px" }}>Feedback</h1>
      <p style={{ color: "#4b5563", marginBottom: "24px" }}>
        Let us know how we can improve your experience.
      </p>
      <textarea
        placeholder="Your message..."
        style={{ width: "100%", height: "150px", padding: "12px", marginBottom: "16px" }}
      />
      <button style={{ backgroundColor: "#2563eb", color: "#fff", padding: "10px 20px", borderRadius: "8px" }}>
        Submit Feedback
      </button>
    </div>
    <Footer />
    </>
  );
};

export default Feedback;
