import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Blog = () => {
  return (
    <>
    <Header />
    <div style={{ padding: "32px", fontFamily: "sans-serif", maxWidth: "800px", margin: "0 auto" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "24px" }}>Travel Blog</h1>
      <div style={{ marginBottom: "32px" }}>
        <h2 style={{ fontSize: "20px" }}>Top 5 Beaches in Australia</h2>
        <p style={{ color: "#4b5563" }}>
          Discover the best spots to relax and soak in the sun in 2025.
        </p>
      </div>
      <h3 style={{ fontWeight: "bold", marginBottom: "12px" }}>Comments</h3>
      <ul>
        <li>🌟 "This helped a lot! – Alex"</li>
        <li>🌟 "Bondi beach is the best! – Sarah"</li>
      </ul>
      <textarea placeholder="Leave a comment..." style={{ width: "100%", marginTop: "16px", padding: "12px" }} />
      <button style={{ marginTop: "12px", backgroundColor: "#2563eb", color: "#fff", padding: "8px 16px" }}>
        Submit
      </button>
    </div>
    <Footer />
    </>
  );
};

export default Blog;
