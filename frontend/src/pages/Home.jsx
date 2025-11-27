import { useEffect, useState } from 'react';
import { Container, Typography, Button, Box, Card, CardContent, CardActions, Skeleton, Grid } from '@mui/material';
import FastfoodIcon from '@mui/icons-material/Fastfood';
import FavoriteIcon from '@mui/icons-material/Favorite';
import ExitToAppIcon from '@mui/icons-material/ExitToApp'; // Importing the logout icon
import { useNavigate } from 'react-router-dom';

function Home() {
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => setLoading(false), 2000);
  }, []);

  return (
    <div
      style={{
        backgroundImage: 'url(https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg)',
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        width: '100vw',
        minHeight: '100vh',
        backgroundRepeat: 'no-repeat',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        padding: '20px 0',
        position: 'relative', // To position the logout button
      }}
    >
      {/* Logout Button with Icon */}
      <Button
        variant="contained"
        sx={{
          position: 'absolute',
          top: 20,
          right: 20,
          borderRadius: 2,
          padding: '8px',
          backgroundColor: 'rgba(114, 37, 37, 0.7)',
          color: 'white',
          '&:hover': {
            backgroundColor: 'rgba(114, 37, 37, 1)',
            transform: 'scale(1.05)', // Slightly enlarge on hover
            boxShadow: '0px 4px 12px rgba(0, 0, 0, 0.2)', // Shadow effect
          },
        }}
        onClick={() => navigate('/project')}
      >
        <ExitToAppIcon sx={{ fontSize: 30 }} /> {/* Logout Icon */}
      </Button>

      <Box sx={{
        width: { xs: '95%', md: '80%' },
        minHeight: '100vh',
        py: 6,
        backgroundColor: 'rgba(255, 255, 255, 0.08)',
        backdropFilter: 'blur(12px)',
        borderRadius: 4,
        boxShadow: 5,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}>
        <Container maxWidth="lg">

          {/* Hero Section */}
          <Box sx={{
            textAlign: 'center',
            mb: 8,
            p: { xs: 2, md: 4 },
            backgroundColor: 'rgba(255, 255, 255, 0.06)',
            backdropFilter: 'blur(8px)',
            borderRadius: 3,
            boxShadow: 4,
          }}>
            {loading ? (
              <>
                <Skeleton variant="text" width="60%" height={70} sx={{ mx: 'auto', mb: 2 }} />
                <Skeleton variant="text" width="80%" height={40} sx={{ mx: 'auto', mb: 4 }} />
                <Skeleton variant="rectangular" width={200} height={50} sx={{ mx: 'auto' }} />
              </>
            ) : (
              <>
                <Typography variant="h3" sx={{ fontSize: { xs: '2rem', md: '3rem' }, fontWeight: 700 }} gutterBottom>
                  Discover Delicious Recipes
                </Typography>
                <Typography
                  variant="body1"
                  color="textSecondary"
                  sx={{
                    fontSize: { xs: '1rem', md: '1.2rem' },
                    mb: 4,
                  }}
                >
                  Find, save, and share amazing recipes from around the world.
                </Typography>
                <Button
                  variant="contained"
                  size="large"
                  sx={{
                    borderRadius: 2,
                    px: 4,
                    backgroundColor: 'rgba(114, 37, 37, 0.7)',
                    color: 'white',
                    '&:hover': { backgroundColor: 'rgba(114, 37, 37, 1)' },
                  }}
                  href="/project/recipes"
                >
                  Explore Recipes
                </Button>
              </>
            )}
          </Box>

          {/* Features Section */}
          <Grid
            container
            spacing={4}
            justifyContent="center"
          >
            {[0, 1].map((index) => (
              <Grid item xs={12} md={6} key={index} display="flex" justifyContent="center">
                <Card
                  sx={{
                    width: '100%',
                    maxWidth: 400,
                    height: '100%',
                    p: 3,
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    backdropFilter: 'blur(14px)',
                    borderRadius: 3,
                    boxShadow: 4,
                  }}
                >
                  {loading ? (
                    <>
                      <Skeleton variant="circular" width={60} height={60} sx={{ mx: 'auto', my: 3 }} />
                      <Skeleton variant="text" width="60%" height={30} sx={{ mx: 'auto', mb: 2 }} />
                      <Skeleton variant="text" width="80%" height={20} sx={{ mx: 'auto', mb: 4 }} />
                      <Skeleton variant="rectangular" width={100} height={35} sx={{ mx: 'auto' }} />
                    </>
                  ) : (
                    <>
                      <CardContent sx={{ textAlign: 'center' }}>
                        {index === 0 && <FastfoodIcon sx={{ fontSize: 60, color: 'brown', mb: 2 }} />}
                        {index === 1 && <FavoriteIcon sx={{ fontSize: 60, color: 'brown', mb: 2 }} />}
                        <Typography variant="h6" gutterBottom>
                          {index === 0 ? 'Browse Recipes' : 'Save Favorites'}
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                          {index === 0
                            ? "Discover a variety of recipes from all over the world."
                            : "Save your favorite recipes and access them anytime."}
                        </Typography>
                      </CardContent>
                      <CardActions sx={{ justifyContent: 'center', mt: 2 }}>
                        <Button
                          variant="outlined"
                          color="error"
                          href={index === 0 ? "/project/recipes" : "/project/saved-recipes"}
                        >
                          {index === 0 ? 'Browse' : 'View Favorites'}
                        </Button>
                      </CardActions>
                    </>
                  )}
                </Card>
              </Grid>
            ))}
          </Grid>
        </Container>
      </Box>
    </div>
  );
}

export default Home;