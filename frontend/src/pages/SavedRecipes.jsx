import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { BookmarkCheck, Home, Book } from 'lucide-react'; // Using Lucide React icons

export default function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(saved);
  }, []);

  const toggleSave = (recipe) => {
    const updated = savedRecipes.filter(r => r.rid !== recipe.rid);
    localStorage.setItem('savedRecipes', JSON.stringify(updated));
    setSavedRecipes(updated);
  };

  return (
    <div style={{
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "40px"
    }}>
      {/* Header */}
      <div style={{
        display: "flex",
        justifyContent: "center", // Center the header
        marginBottom: "30px"
      }}>
        <h1 style={{
          margin: 0,
          color: "#5C4033", // Darker, more visible brown
          fontSize: "32px",
          fontFamily: "'Segoe UI', sans-serif",
          fontWeight: "700",
          textShadow: "1px 1px 4px rgba(0, 0, 0, 0.2)" // Light shadow around text
        }}>
          Favourites
        </h1>
      </div>

      {/* Navigation Options (Home and Recipes icons with shadow effect) */}
      <div style={{
        display: "flex",
        justifyContent: "flex-end", // Align options to the right
        gap: "30px",
        position: "absolute",
        top: "40px",
        right: "40px",
        zIndex: 1,
        fontSize: "16px",
        fontWeight: "500",
        textTransform: "uppercase",
        letterSpacing: "1px",
      }}>
        {/* Home Icon with Black Shadow */}
        <div
          onClick={() => navigate("/project/home")}
          style={{
            cursor: "pointer",
            color: "#8B4513", // Dark brown color
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            borderRadius: "50%",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)", // Black shadow with increased intensity
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.1)"; // Slightly enlarge on hover
            e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.7)"; // Darker and larger shadow on hover
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.5)"; // Reset shadow
          }}
        >
          <Home size={24} />
        </div>

        {/* Recipes Icon with Black Shadow */}
        <div
          onClick={() => navigate("/project/recipes")}
          style={{
            cursor: "pointer",
            color: "#8B4513", // Dark brown color
            transition: "transform 0.3s ease, box-shadow 0.3s ease",
            fontSize: "24px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: "12px",
            borderRadius: "50%",
            boxShadow: "0px 6px 12px rgba(0, 0, 0, 0.5)", // Black shadow with increased intensity
          }}
          onMouseOver={e => {
            e.currentTarget.style.transform = "scale(1.1)"; // Slightly enlarge on hover
            e.currentTarget.style.boxShadow = "0px 8px 16px rgba(0, 0, 0, 0.7)"; // Darker and larger shadow on hover
          }}
          onMouseOut={e => {
            e.currentTarget.style.transform = "scale(1)";
            e.currentTarget.style.boxShadow = "0px 6px 12px rgba(0, 0, 0, 0.5)"; // Reset shadow
          }}
        >
          <Book size={24} />
        </div>
      </div>

      {/* Recipe Cards */}
      <div style={{
        display: "flex",
        flexWrap: "wrap",
        gap: "24px",
        justifyContent: savedRecipes.length ? "flex-start" : "center"
      }}>
        {savedRecipes.length === 0 ? (
          <p style={{
            fontSize: "18px",
            fontStyle: "italic",
            color: "#444"
          }}>You have no saved recipes yet.</p>
        ) : (
          savedRecipes.map(recipe => (
            <div
              key={recipe.rid}
              style={{
                width: "260px",
                backgroundColor: "white",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 4px 10px rgba(0,0,0,0.15)",
                position: "relative",
                cursor: "pointer",
                transition: "transform 0.2s ease"
              }}
              onClick={() => navigate(`/project/recipe/${recipe.rid}`)}
              onMouseOver={e => e.currentTarget.style.transform = "scale(1.02)"}
              onMouseOut={e => e.currentTarget.style.transform = "scale(1)"}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{
                  width: "100%",
                  height: "170px",
                  objectFit: "cover"
                }}
              />
              <div
                style={{
                  position: "absolute",
                  top: "12px",
                  right: "12px",
                  backgroundColor: "white",
                  borderRadius: "50%",
                  padding: "6px"
                }}
                onClick={(e) => {
                  e.stopPropagation();
                  toggleSave(recipe);
                }}
              >
                <BookmarkCheck size={22} color="#8B4513" />
              </div>
              <div style={{ padding: "16px" }}>
                <h3 style={{ margin: "0 0 10px", fontSize: "18px", color: "#333" }}>{recipe.name}</h3>
                <p style={{ margin: "4px 0", fontSize: "14px", color: "#666" }}>Time: {recipe.time}</p>
                <p style={{ margin: "4px 0", fontSize: "14px", color: "#666" }}>Cuisine: {recipe.cuisine}</p>
                <p style={{ margin: "4px 0", fontSize: "14px", color: "#666" }}>Type: {recipe.mealType}</p>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}