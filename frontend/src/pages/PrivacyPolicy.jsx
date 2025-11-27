import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function PrivacyPolicy() {
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
          Privacy Policy
        </h1>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          Welcome to Recipe Hub! At Recipe Hub, your privacy is important to us. This Privacy Policy explains the types of personal information we collect from our users and how we use, share, and protect it.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>1. Information We Collect</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          We collect the following types of information when you use our app:
        </p>
        <ul style={{ marginBottom: "20px", color: "#444" }}>
          <li><strong>Personal Information:</strong> When you sign up or log in to Recipe Hub, we may collect your name, email address, and other contact details.</li>
          <li><strong>Usage Data:</strong> We collect information about how you use our app, including the recipes you view, search history, and preferences.</li>
        </ul>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>2. How We Use Your Information</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          The information we collect is used to:
        </p>
        <ul style={{ marginBottom: "20px", color: "#444" }}>
          <li>Provide personalized recipe suggestions and content based on your preferences.</li>
          <li>Improve the functionality and performance of the app.</li>
          <li>Send you updates, notifications, and marketing communications if you have opted-in.</li>
          <li>Respond to your inquiries and provide customer support.</li>
          <li>Comply with legal requirements and protect our rights.</li>
        </ul>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>3. How We Protect Your Information</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          We take your privacy seriously and implement appropriate technical and organizational measures to protect your information. These measures include data encryption, secure storage, and access controls. However, no method of transmitting or storing data is completely secure, and we cannot guarantee absolute security.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>4. Sharing Your Information</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          We do not share your personal information with third parties except in the following cases:
        </p>
        <ul style={{ marginBottom: "20px", color: "#444" }}>
          <li><strong>Service Providers:</strong> We may share your information with third-party service providers who help us operate the app or provide services to you (e.g., payment processors, analytics services).</li>
          <li><strong>Legal Compliance:</strong> We may disclose your information if required by law or to comply with legal processes (e.g., subpoenas, court orders).</li>
        </ul>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>5. Your Rights</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          You have the right to access, update, and delete your personal information. You can also opt-out of marketing communications at any time.
        </p>

        <h2 style={{ color: "#333", marginBottom: "10px" }}>6. Changes to This Policy</h2>
        <p style={{
          fontSize: "clamp(14px, 2vw, 18px)",
          lineHeight: "1.6",
          marginBottom: "20px",
          color: "#444"
        }}>
          We may update this Privacy Policy from time to time. Any changes will be posted on this page, and we will notify you if the changes are significant.
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
