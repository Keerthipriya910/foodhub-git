import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Bookmark, BookmarkCheck, Search, Home, LogOut, Share2 } from "lucide-react";

export default function Recipes() {
  const [recipes, setRecipes] = useState([]);
  const [filteredRecipes, setFilteredRecipes] = useState([]);
  const [selectedCuisine, setSelectedCuisine] = useState("");
  const [selectedMealType, setSelectedMealType] = useState("");
  const [searchTerm, setSearchTerm] = useState("");
  const [savedRecipes, setSavedRecipes] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetchRecipes();
    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    setSavedRecipes(saved);
  }, []);

  const fetchRecipes = () => {
    axios
      .get("http://localhost:8082/recipe")
      .then((res) => {
        setRecipes(res.data);
        setFilteredRecipes(res.data);
      })
      .catch((err) => console.error(err));
  };

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);
    filterRecipes(selectedCuisine, selectedMealType, term);
  };

  const filterRecipes = (cuisine, mealType, search = searchTerm) => {
    let filtered = recipes;
    if (cuisine) filtered = filtered.filter((r) => r.cuisine === cuisine);
    if (mealType) filtered = filtered.filter((r) => r.mealType === mealType);
    if (search) {
      filtered = filtered.filter(
        (r) =>
          r.name.toLowerCase().includes(search) ||
          r.cuisine.toLowerCase().includes(search)
      );
    }
    setFilteredRecipes(filtered);
  };

  const toggleSaveRecipe = (recipe) => {
    const saved = JSON.parse(localStorage.getItem("savedRecipes")) || [];
    const isAlreadySaved = saved.some((r) => r.rid === recipe.rid);

    let newSaved;
    if (isAlreadySaved) {
      newSaved = saved.filter((r) => r.rid !== recipe.rid);
    } else {
      newSaved = [...saved, recipe];
    }

    localStorage.setItem("savedRecipes", JSON.stringify(newSaved));
    setSavedRecipes(newSaved);
  };

  const isSaved = (recipeId) => {
    return savedRecipes.some((r) => r.rid === recipeId);
  };

  const shareRecipe = (recipe) => {
    const shareData = {
      title: recipe.name,
      text: `Check out this recipe: ${recipe.name}`,
      url: `${window.location.origin}/recipe/${recipe.rid}`,
    };

    if (navigator.share) {
      navigator.share(shareData).catch((error) =>
        console.error("Error sharing recipe:", error)
      );
    } else {
      navigator.clipboard.writeText(shareData.url);
      alert("Share not supported. Link copied to clipboard!");
    }
  };

  return (
    <div
      style={{
        minHeight: "100vh",
        minWidth: "100vw",
        backgroundImage:
          "url('https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Top Bar */}
      <div
        style={{
          padding: "15px 20px",
          display: "flex",
          justifyContent: "flex-end",
          gap: "15px",
          alignItems: "center",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
          <Search size={18} color="#8B4513" />
          <input
            type="text"
            placeholder="Search recipes..."
            value={searchTerm}
            onChange={handleSearch}
            style={{
              padding: "8px",
              borderRadius: "5px",
              border: "1px solid #ccc",
              width: "200px",
            }}
          />
        </div>

        <div onClick={() => navigate("/saved-recipes")} style={{ cursor: "pointer" }}>
          <Bookmark size={24} color="#8B4513" />
        </div>
        <div onClick={() => navigate("/home")} style={{ cursor: "pointer" }}>
          <Home size={24} color="#8B4513" />
        </div>
        <div onClick={() => navigate("/")} style={{ cursor: "pointer" }}>
          <LogOut size={24} color="#8B4513" />
        </div>
      </div>

      <div style={{ display: "flex", flexGrow: 1 }}>
        {/* Sidebar */}
        <div
          style={{
            width: "250px",
            backgroundColor: "rgba(255, 255, 255, 0.2)",
            backdropFilter: "blur(8px)",
            padding: "20px",
            borderRadius: "10px",
            margin: "20px",
            height: "fit-content",
          }}
        >
          <h3 style={{ marginBottom: "20px", color: "#333" }}>Filter Recipes</h3>
          <label>
            Cuisine:
            <select
              value={selectedCuisine}
              onChange={(e) => {
                setSelectedCuisine(e.target.value);
                filterRecipes(e.target.value, selectedMealType);
              }}
              style={{ width: "100%", padding: "8px", marginBottom: "20px" }}
            >
              <option value="">All</option>
              <option value="Indian">Indian</option>
              <option value="Italian">Italian</option>
              <option value="Chinese">Chinese</option>
              <option value="Mexican">Mexican</option>
              <option value="American">American</option>
              <option value="French">French</option>
              <option value="Mediterranean">Mediterranean</option>
              <option value="Japanese">Japanese</option>
            </select>
          </label>

          <label>
            Meal Type:
            <select
              value={selectedMealType}
              onChange={(e) => {
                setSelectedMealType(e.target.value);
                filterRecipes(selectedCuisine, e.target.value);
              }}
              style={{ width: "100%", padding: "8px" }}
            >
              <option value="">All</option>
              <option value="Breakfast">Breakfast</option>
              <option value="Lunch">Lunch</option>
              <option value="Dinner">Dinner</option>
              <option value="Appetizer">Appetizer</option>
              <option value="Beverages">Beverages</option>
            </select>
          </label>
        </div>

        {/* Recipe Cards */}
        <div
          style={{
            flex: 1,
            padding: "20px",
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gap: "25px",
          }}
        >
          {filteredRecipes.map((recipe) => (
            <div
              key={recipe.rid}
              onClick={() => navigate(`/recipe/${recipe.rid}`)}
              style={{
                backgroundColor: "rgba(255, 255, 255, 0.95)",
                borderRadius: "12px",
                overflow: "hidden",
                boxShadow: "0 3px 8px rgba(0,0,0,0.15)",
                position: "relative",
                cursor: "pointer",
                width: "100%",
                maxWidth: "380px",
                margin: "auto",
                transition: "transform 0.3s ease, box-shadow 0.3s ease",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = "scale(1.03)";
                e.currentTarget.style.boxShadow = "0 6px 14px rgba(0,0,0,0.25)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = "scale(1)";
                e.currentTarget.style.boxShadow = "0 3px 8px rgba(0,0,0,0.15)";
              }}
            >
              <img
                src={recipe.image}
                alt={recipe.name}
                style={{
                  width: "100%",
                  height: "220px",
                  objectFit: "cover",
                }}
              />

              {/* Recipe Info Row */}
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  alignItems: "center",
                  padding: "12px 15px 8px",
                }}
              >
                <h4
                  style={{
                    margin: 0,
                    fontSize: "16px",
                    fontWeight: "600",
                    flex: 1,
                    whiteSpace: "nowrap",
                    overflow: "hidden",
                    textOverflow: "ellipsis",
                    paddingRight: "10px",
                  }}
                >
                  {recipe.name}
                </h4>
                <div
                  onClick={(e) => e.stopPropagation()}
                  style={{ display: "flex", gap: "10px", alignItems: "center" }}
                >
                  <div onClick={() => toggleSaveRecipe(recipe)} style={{ cursor: "pointer" }}>
                    {isSaved(recipe.rid) ? (
                      <BookmarkCheck size={20} color="#8B4513" />
                    ) : (
                      <Bookmark size={20} color="#8B4513" />
                    )}
                  </div>
                  <div onClick={() => shareRecipe(recipe)} style={{ cursor: "pointer" }}>
                    <Share2 size={18} color="#8B4513" />
                  </div>
                </div>
              </div>

              {/* Description */}
              <div style={{ padding: "0 15px 12px" }}>
                <p style={{ margin: "2px 0", fontSize: "14px" }}>
                  Cuisine: {recipe.cuisine}
                </p>
                <p style={{ margin: "2px 0", fontSize: "14px" }}>
                  Type: {recipe.mealType}
                </p>
                <p style={{ margin: "2px 0", fontSize: "14px" }}>
                  Time: {recipe.time}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
