import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function TermsAndConditions() {
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
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)",
        backdropFilter: "blur(8px)", 
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
          Terms and Conditions
        </h1>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          By using Recipe Hub, you agree to comply with our Terms and Conditions.
        </p>
        <h2 style={{ color: "#333", marginBottom: "10px" }}>1. Usage</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          You can view and save recipes, but sharing or distributing content from the app is not allowed.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>2. Account</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          You are responsible for maintaining the security of your account and any activities under it.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>3. Content</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          All recipes and materials on the platform are owned by Recipe Hub or its licensors. You may not use them for commercial purposes.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>4. Limitation of Liability</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          We are not responsible for any damages caused by the use of the app.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>5. Changes</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          We may update these terms at any time; please review periodically.
        </p>

        <div style={{ textAlign: "center" }}>
          <button
            onClick={() => navigate("/home")}
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
