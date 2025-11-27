import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function AboutUs() {
  const navigate = useNavigate();

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "20px",
      position: "relative"
    }}>
      {/* Content Box */}
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(8px)", // Added blur effect
        padding: "5vw",
        borderRadius: "15px",
        width: "100%",
        maxWidth: "800px",
        boxShadow: "0 4px 15px rgba(0,0,0,0.2)"
      }}>
        <h1 style={{
          textAlign: "center",
          color: "#333",
          fontSize: "clamp(24px, 5vw, 36px)",
          marginBottom: "20px"
        }}>
          About Us
        </h1>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          Welcome to Recipe Hub—the ultimate destination for food lovers!
          Whether you're a pro chef or a home cook, our platform is here to inspire your next culinary adventure.
        </p>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          Launched in 2025, Recipe Hub has grown into a community where recipes, food experiences, and creativity come together. It’s not just about cooking; it’s about making memories and sharing the love for food.
        </p>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "30px",
          color: "#444"
        }}>
          This project is brought to you by Team 1, Batch Y23—a group of full-stack developers showcasing our skills through the Food Recipe App, where food and tech collide!


        </p>
        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/project/home")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#8B4513",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              transition: "all 0.3s ease-in-out"
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = "#A0522D";
              e.currentTarget.style.transform = "scale(1.05)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = "#8B4513";
              e.currentTarget.style.transform = "scale(1)";
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}