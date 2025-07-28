import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import sydneyImage from "../assets/sydney.jpg";

const Search = () => {
  const results = [
    { title: "Melbourne City Tour", price: "$320", image: sydneyImage },
    { title: "Tasmania Adventure", price: "$450", image: sydneyImage },
  ];

  return (
    <>
    <Header />
    <div style={{ padding: "32px", fontFamily: "sans-serif" }}>
      <h1 style={{ fontSize: "28px", fontWeight: "bold", marginBottom: "16px" }}>Search Results</h1>
      {results.length === 0 ? (
        <p>No results found.</p>
      ) : (
        <div style={{ display: "grid", gap: "24px", gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))" }}>
          {results.map((result, idx) => (
            <div key={idx} style={{ backgroundColor: "#fff", boxShadow: "0 4px 8px rgba(0,0,0,0.1)", borderRadius: "12px" }}>
              <img src={result.image} alt={result.title} style={{ width: "100%", height: "160px", objectFit: "cover" }} />
              <div style={{ padding: "16px" }}>
                <h3>{result.title}</h3>
                <p>{result.price}</p>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
    <Footer />
    </>
  );
};

export default Search;
