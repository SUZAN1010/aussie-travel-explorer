import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Account = () => {
  return (
    <>
    <Header />
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold" }}>My Account</h1>
      <div style={{ marginTop: "16px", lineHeight: "1.8" }}>
        <p><strong>Name:</strong> Rojina Tamang</p>
        <p><strong>Email:</strong> rojina@example.com</p>
        <p><strong>Trips Booked:</strong> 3</p>
        <button style={{ marginTop: "16px", backgroundColor: "#000", color: "#fff", padding: "8px 16px", borderRadius: "8px" }}>
          Edit Profile
        </button>
      </div>
    </div>
    <Footer />
    </>
  );
};

export default Account;
