import React, { useState, useEffect } from 'react';
import { Typography, Button, Box, Container } from '@mui/material';
import PersonIcon from '@mui/icons-material/Person';
import AdminPanelSettingsIcon from '@mui/icons-material/AdminPanelSettings';
import HowToRegIcon from '@mui/icons-material/HowToReg';
import { useNavigate } from 'react-router-dom';

function Dashboard() {
  const [isLoaded, setIsLoaded] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    // Set isLoaded to true once all components are rendered
    const timer = setTimeout(() => {
      setIsLoaded(true);
    }, 500); // Adjust timing as needed
    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      {/* Animations */}
      <style>
        {`
          @keyframes fadeIn {
            0% { opacity: 0; transform: scale(0.95); }
            100% { opacity: 1; transform: scale(1); }
          }

          @keyframes zoomBackground {
            0% { transform: scale(1); }
            50% { transform: scale(1.1); }
            100% { transform: scale(1); }
          }

          @keyframes floatSteam {
            0% { transform: translateY(0) translateX(0) scale(1); opacity: 0.9; }
            50% { transform: translateY(-60vh) translateX(10px) scale(1.2); opacity: 0.6; }
            100% { transform: translateY(-120vh) translateX(20px) scale(1); opacity: 0; }
          }

          @keyframes shimmer {
            0% { background-position: -600px 0; }
            100% { background-position: 600px 0; }
          }

          @keyframes slideIn {
            0% { transform: translateX(-100%); opacity: 0; }
            100% { transform: translateX(0); opacity: 1; }
          }

          @keyframes pulsateGlow {
            0% { box-shadow: 0 0 8px rgba(255, 255, 255, 0.4); }
            50% { box-shadow: 0 0 20px rgba(255, 255, 255, 0.8); }
            100% { box-shadow: 0 0 8px rgba(255, 255, 255, 0.4); }
          }

          /* Smooth hover red glow effect */
          @keyframes cardHover {
            0% { transform: scale(1); box-shadow: 0px 0px 0px rgba(255, 87, 34, 0); }
            50% { transform: scale(1.05); box-shadow: 0px 0px 25px rgba(255, 87, 34, 0.5); }
            100% { transform: scale(1); box-shadow: 0px 0px 25px rgba(255, 87, 34, 0.7); }
          }

          /* Apply smooth hover animation */
          .card-container {
            transition: transform 0.5s ease, box-shadow 0.5s ease;
          }

          .card-container:hover {
            animation: cardHover 1s ease-in-out forwards;
          }

          .shimmer-text {
            background: linear-gradient(90deg, #5D4037 0%, #FF5722 50%, #5D4037 100%);
            background-size: 600px;
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
            animation: shimmer 4s infinite linear;
          }

          .hover-glow:hover {
            animation: pulsateGlow 1.5s infinite alternate;
            color: #6F4F25; /* Brown color on hover */
            box-shadow: 0 0 15px rgba(255, 87, 34, 0.8); /* Adding a glow effect on hover */
          }

          .slide-in {
            animation: slideIn 1s ease-out forwards;
          }

          /* Control the zoom background animation */
          .zoom-background {
            animation: ${isLoaded ? 'zoomBackground 40s ease-in-out infinite' : 'none'};
          }
        `}
      </style>
      {/* Outer wrapper */}
      <div style={{ overflow: 'hidden' }}>

        {/* Background (One image here) */}
        <div
          className={`zoom-background`}
          style={{
            background: 'url(https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg)',
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
            width: '100vw',
            height: '130vh',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            position: 'relative',
            overflow: 'hidden',
          }}
        >

          {/* Top-right corner buttons */}
          <Box
            sx={{
              position: 'absolute',
              top: 35,
              right: 32,
              display: 'flex',
              gap: 2,
              animation: 'slideIn 1s ease-out',
              flexDirection: { xs: 'column', sm: 'row' }, // Stacks buttons vertically on small screens
            }}
          >
            <Button
              href="/project/login"
              startIcon={<PersonIcon />}
              sx={{
                fontSize: '1rem',
                color: 'black',  // Initial color black
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 0.5,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 0 18px rgba(255, 255, 255, 0.8)',
                  color: '#6F4F25',  // Brown color on hover
                },
                '&:active': {
                  color: '#6F4F25',  // Brown color when clicked
                },
              }}
              className="hover-glow"
            >
              Login
            </Button>
            <Button
              href="/project/register"
              startIcon={<HowToRegIcon />}
              sx={{
                fontSize: '1rem',
                color: 'black',  // Initial color black
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 0.5,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(182, 142, 142, 0.85)',
                  boxShadow: '0 0 18px rgba(255, 255, 255, 0.8)',
                  color: '#6F4F25',  // Brown color on hover
                },
                '&:active': {
                  color: '#6F4F25',  // Brown color when clicked
                },
              }}
              className="hover-glow"
            >
              Sign Up
            </Button>
            <Button
              href="/project/adminlogin"
              startIcon={<AdminPanelSettingsIcon />}
              sx={{
                fontSize: '1rem',
                color: 'black',  // Initial color black
                fontWeight: 600,
                borderRadius: 2,
                px: 2,
                py: 0.5,
                textTransform: 'none',
                '&:hover': {
                  backgroundColor: 'rgba(255, 255, 255, 0.85)',
                  boxShadow: '0 0 18px rgba(255, 255, 255, 0.8)',
                  color: '#6F4F25',  // Brown color on hover
                },
                '&:active': {
                  color: '#6F4F25',  // Brown color when clicked
                },
              }}
              className="hover-glow"
            >
              Admin
            </Button>
          </Box>
          {/* Main content box */}
          <Container maxWidth="lg">
            <Box
              sx={{
                textAlign: 'center',
                p: { xs: 3, md: 5 },
                borderRadius: 4,
                boxShadow: '0px 0px 30px rgba(255, 255, 255, 0.3)',
                maxWidth: '800px',
                mx: 'auto',
                background: 'rgba(255, 255, 255, 0.2)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '2px solid rgba(255, 255, 255, 0.3)',
                animation: 'fadeIn 2s ease',
                position: 'relative',
                overflow: 'hidden',
              }}
              className="card-container"
            >
              {/* Aura glow */}
              <Box
                sx={{
                  position: 'absolute',
                  top: '-20%',
                  left: '-20%',
                  width: '140%',
                  height: '140%',
                  background: 'radial-gradient(circle at center, rgba(255,255,255,0.15) 0%, transparent 60%)',
                  zIndex: 0,
                }}
              />

              <Box sx={{ position: 'relative', zIndex: 1 }}>
                <Typography
                  variant="h2"
                  className="shimmer-text"
                  sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2.7rem', md: '4rem' },
                    mb: 2,
                  }}
                >
                  Welcome to RecipeHub!
                </Typography>
                <Typography
                  variant="h5"
                  sx={{
                    fontSize: { xs: '1.3rem', md: '1.7rem' },
                    color: '#333',
                    mb: 4,
                  }}
                >
                  Your Ultimate Destination for Culinary Excellence
                </Typography>
                <Typography
                  variant="body1"
                  sx={{
                    fontSize: { xs: '1.1rem', md: '1.3rem' },
                    color: '#555',
                    maxWidth: '600px',
                    mx: 'auto',
                  }}
                >
                  Discover, create, and share amazing recipes from around the world.
                  Join our vibrant food community and start your delicious adventure today!
                </Typography>
              </Box>
            </Box>
          </Container>

        </div>
      </div>
    </>
  );
}

export default Dashboard;