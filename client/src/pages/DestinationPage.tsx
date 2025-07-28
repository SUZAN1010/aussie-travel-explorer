import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { useParams } from "react-router-dom";
import sydneyImage from "../assets/sydney.jpg";
import reefImage from "../assets/reef.webp";

// Dummy travel guide data
const listings = [
  {
    title: "Sydney Opera House",
    location: "Sydney, New South Wales",
    duration: "2–3 hours recommended",
    image: sydneyImage,
    description:
      "The Sydney Opera House is an architectural marvel located on Sydney Harbour. Visitors can enjoy guided tours, live performances, and stunning views of the harbour and Harbour Bridge.",
    highlights: [
      "Join a behind-the-scenes tour",
      "Visit during sunset for scenic photos",
      "Enjoy cafes nearby on Circular Quay"
    ]
  },
  {
    title: "Great Barrier Reef",
    location: "Queensland, Australia",
    duration: "Full day or multi-day excursion",
    image: reefImage,
    description:
      "The Great Barrier Reef is the world's largest coral reef system, offering vibrant marine biodiversity, world-class snorkeling, diving, and eco-adventures.",
    highlights: [
      "Snorkel near Cairns or Airlie Beach",
      "Choose eco-certified tours",
      "Bring reef-safe sunscreen!"
    ]
  },
];

const DestinationPage = () => {
  const { id } = useParams();
  const item = listings[parseInt(id || "0")];

  const [comments, setComments] = useState<string[]>([]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newComment.trim() !== "") {
      setComments([...comments, newComment.trim()]);
      setNewComment("");
    }
  };

  if (!item) return <p>Destination not found.</p>;

  return (
    <>
      <Header />
      <div
        style={{
          padding: "32px",
          fontFamily: "sans-serif",
          maxWidth: "800px",
          margin: "0 auto",
        }}
      >
        <img
          src={item.image}
          alt={item.title}
          style={{
            width: "100%",
            borderRadius: "12px",
            marginBottom: "24px",
            objectFit: "cover",
            maxHeight: "400px",
          }}
        />
        <h1 style={{ fontSize: "32px", fontWeight: "bold", marginBottom: "8px" }}>
          {item.title}
        </h1>
        <p style={{ color: "#6b7280", marginBottom: "4px" }}>{item.location}</p>
        <p style={{ fontWeight: "500", marginBottom: "16px", color: "#374151" }}>
          Suggested Visit Duration: {item.duration}
        </p>
        <p style={{ margin: "16px 0", color: "#4b5563", lineHeight: "1.6" }}>
          {item.description}
        </p>

        {/* Highlights */}
        {item.highlights && (
          <div style={{ marginTop: "24px" }}>
            <h3 style={{ fontSize: "18px", fontWeight: "600", marginBottom: "8px" }}>
              Travel Highlights & Tips:
            </h3>
            <ul style={{ paddingLeft: "20px", color: "#374151" }}>
              {item.highlights.map((tip, idx) => (
                <li key={idx} style={{ marginBottom: "6px" }}>
                  • {tip}
                </li>
              ))}
            </ul>
          </div>
        )}

        <hr style={{ margin: "32px 0", borderColor: "#e5e7eb" }} />

        {/* Feedback Section */}
        <h2 style={{ fontSize: "20px", fontWeight: "600", marginBottom: "16px" }}>
          Share Your Travel Tips
        </h2>

        <form onSubmit={handleCommentSubmit} style={{ marginBottom: "24px" }}>
          <textarea
            placeholder="Leave your comment or travel tip..."
            value={newComment}
            onChange={(e) => setNewComment(e.target.value)}
            style={{
              width: "100%",
              height: "100px",
              padding: "12px",
              borderRadius: "8px",
              border: "1px solid #d1d5db",
              fontSize: "14px",
              resize: "none",
              marginBottom: "12px",
            }}
          />
          <br />
          <button
            type="submit"
            style={{
              padding: "10px 20px",
              backgroundColor: "#2563eb",
              color: "#fff",
              borderRadius: "9999px",
              fontSize: "14px",
            }}
          >
            Submit
          </button>
        </form>

        {/* Comments List */}
        {comments.length > 0 ? (
          <ul style={{ listStyle: "none", padding: 0 }}>
            {comments.map((comment, index) => (
              <li
                key={index}
                style={{
                  backgroundColor: "#f3f4f6",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "12px",
                }}
              >
                {comment}
              </li>
            ))}
          </ul>
        ) : (
          <p style={{ color: "#6b7280" }}>
            No comments yet. Be the first to share your experience!
          </p>
        )}
      </div>
      <Footer />
    </>
  );
};

export default DestinationPage;
