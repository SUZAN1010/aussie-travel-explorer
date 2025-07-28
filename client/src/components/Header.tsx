import React from "react";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        padding: "24px 32px",
        backgroundColor: "#ffffff",
        boxShadow: "0 2px 8px rgba(0,0,0,0.06)",
        position: "sticky",
        top: 0,
        zIndex: 1000,
      }}
    >
      {/* Brand */}
      <div
        style={{
          fontSize: "20px",
          fontWeight: "bold",
          color: "#1d4ed8",
          display: "flex",
          alignItems: "center",
          gap: "8px",
        }}
      >
        🌐 Aussie TravelExplorer
      </div>

      {/* Nav */}
      <nav aria-label="Main Navigation">
        <ul
          style={{
            display: "flex",
            gap: "24px",
            fontSize: "14px",
            listStyle: "none",
            margin: 0,
            padding: 0,
          }}
        >
          <li>
            <Link to="/" style={{ textDecoration: "none", color: "#1e1e1e" }}>
              Home
            </Link>
          </li>
          <li>
            <Link
              to="/listings"
              style={{ textDecoration: "none", color: "#1e1e1e" }}
            >
              Travel Listings
            </Link>
          </li>
          <li>
            <Link
              to="/feedback"
              style={{ textDecoration: "none", color: "#1e1e1e" }}
            >
              Feedback
            </Link>
          </li>
        </ul>
      </nav>

      {/* Login Button */}
      <Link to="/auth">
        <button
          style={{
            backgroundColor: "#000",
            color: "#fff",
            padding: "8px 16px",
            borderRadius: "9999px",
            fontSize: "14px",
            border: "none",
            cursor: "pointer",
          }}
        >
          Login / Register
        </button>
      </Link>
    </header>
  );
};

export default Header;
