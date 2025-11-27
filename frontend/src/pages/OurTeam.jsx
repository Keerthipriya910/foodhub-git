import React from 'react';
import { useNavigate } from 'react-router-dom';

export default function OurTeam() {
  const navigate = useNavigate();

  const teamMembers = [
    {
      name: "Pravallika",
      role: "Full Stack developer",
      image: "https://th.bing.com/th/id/OIP.Hby9kGpEKJhBw5plH7ESEQHaHa?cb=iwp1&pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
    },
    {
      name: "Keerthi",
      role: "UI designer",
      image: "https://img.freepik.com/premium-photo/anime-girl-portrait-style-studio-ghibli_975661-22.jpg"
    },
    {
      name: "Chethana",
      role: "Team member",
      image: "https://th.bing.com/th/id/OIP.c1xgKgzr7_BuipPsww6X_QHaHa?cb=iwp1&pid=ImgDet&w=184&h=184&c=7&dpr=1.3"
    }
  ];

  return (
    <div style={{
      minHeight: "100vh",
      width: "100vw",
      backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      display: "flex",
      justifyContent: "center",
      alignItems: "center",
      padding: "20px"
    }}>
      <div style={{
        backgroundColor: "rgba(255, 255, 255, 0.25)", // Further reduced opacity for more transparency
        backdropFilter: "blur(4px)", // Enhanced blur effect for better readability
        padding: "5vw",
        borderRadius: "15px",
        maxWidth: "1100px",
        width: "100%",
        boxShadow: "0 2px 20px rgba(0, 0, 0, 0.1)" // Slightly increased shadow intensity for more depth
      }}>
        <h1 style={{
          textAlign: "center",
          color: "#333",
          marginBottom: "30px",
          fontSize: "clamp(24px, 5vw, 36px)"
        }}>
          Our Team
        </h1>

        <div style={{
          display: "flex",
          justifyContent: "center",
          flexWrap: "wrap",
          gap: "30px"
        }}>
          {teamMembers.map((member, index) => (
            <div key={index} style={{
              width: "min(250px, 90%)",
              textAlign: "center"
            }}>
              <img
                src={member.image}
                alt={member.name}
                style={{
                  width: "100%",
                  height: "250px",
                  borderRadius: "50%",
                  objectFit: "cover",
                  marginBottom: "15px"
                }}
              />
              <h3 style={{
                color: "#333",
                fontSize: "clamp(16px, 2vw, 20px)",
                marginBottom: "5px"
              }}>{member.name}</h3>
              <p style={{ color: "#666", fontSize: "clamp(14px, 1.5vw, 18px)" }}>{member.role}</p>
            </div>
          ))}
        </div>

        <div style={{ textAlign: "center", marginTop: "40px" }}>
          <button
            onClick={() => navigate("/home")}
            style={{
              padding: "10px 20px",
              backgroundColor: "#8B4513",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer",
              fontSize: "16px",
              transition: "all 0.3s ease"
            }}
            onMouseEnter={e => {
              e.target.style.backgroundColor = "#A0522D";
              e.target.style.transform = "scale(1.05)";
            }}
            onMouseLeave={e => {
              e.target.style.backgroundColor = "#8B4513";
              e.target.style.transform = "scale(1)";
            }}
          >
            Back to Home
          </button>
        </div>
      </div>
    </div>
  );
}
