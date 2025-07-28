import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

const Auth = () => {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
    <Header />
    <div style={{ padding: "32px", maxWidth: "400px", margin: "0 auto", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "24px", fontWeight: "bold", marginBottom: "24px" }}>
        {isLogin ? "Login" : "Register"}
      </h1>
      <input placeholder="Email" style={{ width: "100%", padding: "12px", marginBottom: "16px" }} />
      <input placeholder="Password" type="password" style={{ width: "100%", padding: "12px", marginBottom: "16px" }} />
      {!isLogin && (
        <input placeholder="Confirm Password" type="password" style={{ width: "100%", padding: "12px", marginBottom: "16px" }} />
      )}
      <button style={{ backgroundColor: "#2563eb", color: "#fff", width: "100%", padding: "12px", borderRadius: "8px" }}>
        {isLogin ? "Login" : "Register"}
      </button>
      <p style={{ marginTop: "16px", textAlign: "center" }}>
        {isLogin ? "Don't have an account?" : "Already have an account?"}{" "}
        <span style={{ color: "#2563eb", cursor: "pointer" }} onClick={() => setIsLogin(!isLogin)}>
          {isLogin ? "Register" : "Login"}
        </span>
      </p>
    </div>
    <Footer />
    </>
  );
};

export default Auth;
