import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import { Bookmark, BookmarkCheck } from 'lucide-react';

export default function RecipeDetails() {
  const { rid } = useParams();
  const navigate = useNavigate();
  const [recipe, setRecipe] = useState(null);
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    fetchRecipeDetails();
    const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    setSavedRecipes(saved);
  }, [rid]);

  const fetchRecipeDetails = async () => {
    try {
      const response = await axios.get("http://localhost:30022/recipe");
      const allRecipes = response.data;
      const foundRecipe = allRecipes.find(r => r.rid.toString() === rid);
      if (foundRecipe) {
        setRecipe(foundRecipe);
      } else {
        console.error("Recipe not found");
        navigate('/recipes');
      }
    } catch (error) {
      console.error("Error fetching recipes:", error);
      navigate('/recipes');
    }
  };

  const toggleSaveRecipe = () => {
    if (!recipe) return;
    const saved = JSON.parse(localStorage.getItem('savedRecipes')) || [];
    const isAlreadySaved = saved.some(r => r.rid === recipe.rid);

    let newSaved;
    if (isAlreadySaved) {
      newSaved = saved.filter(r => r.rid !== recipe.rid);
    } else {
      newSaved = [...saved, recipe];
    }

    localStorage.setItem('savedRecipes', JSON.stringify(newSaved));
    setSavedRecipes(newSaved);
  };

  const isSaved = () => {
    return savedRecipes.some(r => r.rid === parseInt(rid));
  };

  if (!recipe) return <div>Loading...</div>;

  return (
    <div style={{
      minHeight: "100vh",
      minWidth: "100vw",
      backgroundImage: "url('https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      backgroundRepeat: "no-repeat",
      padding: "40px",
      display: "flex",
      justifyContent: "center"
    }}>
      <div style={{
        width: "90%",
        maxWidth: "1200px",
        backgroundColor: "rgba(255, 255, 255, 0.2)",
        backdropFilter: "blur(0.1px)",
        borderRadius: "15px",
        padding: "30px",
        boxShadow: "0 4px 8px rgba(0,0,0,0.1)"
      }}>
        <div style={{ display: "flex", justifyContent: "space-between", marginBottom: "30px" }}>
          <button
            onClick={() => navigate('/recipes')}
            style={{
              padding: "10px 20px",
              backgroundColor: "#8B4513",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: "pointer"
            }}
          >
            Back to Recipes
          </button>
          <div onClick={toggleSaveRecipe} style={{ cursor: "pointer" }}>
            {isSaved() ? (
              <BookmarkCheck size={24} color="#8B4513" />
            ) : (
              <Bookmark size={24} color="#8B4513" />
            )}
          </div>
        </div>

        <div style={{ display: "flex", gap: "40px" }}>
          <div style={{ flex: "0 0 45%" }}>
            <img
              src={recipe.image}
              alt={recipe.name}
              style={{
                width: "100%",
                height: "400px",
                objectFit: "cover",
                borderRadius: "10px",
                boxShadow: "0 4px 8px rgba(0,0,0,0.2)"
              }}
            />
          </div>

          <div style={{ flex: 1 }}>
            <h1 style={{ 
              fontSize: "2.5em", 
              marginBottom: "20px",
              color: "#8B4513"
            }}>{recipe.name}</h1>

            <div style={{ 
              backgroundColor: "rgba(255, 255, 255, 0.8)",
              padding: "20px",
              borderRadius: "10px",
              marginBottom: "20px"
            }}>
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                <strong>Cuisine:</strong> {recipe.cuisine}
              </p>
              <p style={{ fontSize: "18px", marginBottom: "10px" }}>
                <strong>Type:</strong> {recipe.mealType}
              </p>
              <p style={{ fontSize: "18px" }}>
                <strong>Time:</strong> {recipe.time}
              </p>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <h2 style={{ 
                color: "#8B4513", 
                marginBottom: "15px" 
              }}>Ingredients</h2>
              <div style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "10px",
                whiteSpace: "pre-line"
              }}>
                {recipe.ingredients}
              </div>
            </div>

            <div>
              <h2 style={{ 
                color: "#8B4513", 
                marginBottom: "15px" 
              }}>Process</h2>
              <div style={{ 
                backgroundColor: "rgba(255, 255, 255, 0.8)",
                padding: "20px",
                borderRadius: "10px",
                whiteSpace: "pre-line"
              }}>
                {recipe.process}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
