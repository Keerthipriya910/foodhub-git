//Footer.jsx

import React from 'react';
import { Box, Typography, Link, IconButton, Grid } from '@mui/material';
import InstagramIcon from '@mui/icons-material/Instagram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import GitHubIcon from '@mui/icons-material/GitHub';
import PhoneIcon from '@mui/icons-material/Phone';

const Footer = () => {
  return (
    <Box
      component="footer"
      sx={{
        backgroundColor: '#1e1e1e',
        color: 'white',
        padding: '40px 30px',
        width: "100vw",
        margin: 'auto', // Centers the footer within the page
        textAlign: 'center',
        boxShadow: '0px -2px 10px rgba(0, 0, 0, 0.3)',
        borderRadius: '10px', // Gives a modern look
      }}
    >
      {/* Main Content */}
      <Grid container spacing={4} justifyContent="center">

        {/* Brand Info */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            RecipeHub!
          </Typography>
          <Typography variant="body2" sx={{ lineHeight: 1.6 }}>
            Unite flavors, craft dishes, and share your passion- <br />
            join our global kitchen and cook the world!
          </Typography>
        </Grid>

        {/* Links Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Quick Links
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: 'column', gap: 1 }}>
            <Link href="/project/home" color="inherit" underline="hover">Home</Link>
            <Link href="/project/about" color="inherit" underline="hover">About Us</Link>
            <Link href="/project/contact" color="inherit" underline="hover">Contact</Link>
            <Link href="/project/team" color="inherit" underline="hover">Our Team</Link>
          </Box>
        </Grid>

        {/* Social Media Section */}
        <Grid item xs={12} sm={6} md={4} sx={{ textAlign: 'left' }}>
          <Typography variant="h6" sx={{ fontWeight: 'bold', marginBottom: 2 }}>
            Follow Us
          </Typography>
          <Box sx={{ display: 'flex', gap: 1.5 }}>
            <IconButton color="inherit" href="https://www.instagram.com" target="_blank">
              <InstagramIcon />
            </IconButton>
            <IconButton color="inherit" href="https://www.linkedin.com" target="_blank">
              <LinkedInIcon />
            </IconButton>
            <IconButton color="inherit" href="https://github.com" target="_blank">
              <GitHubIcon />
            </IconButton>

          </Box>
        </Grid>
      </Grid>

      {/* Bottom Text */}
      <Box sx={{ marginTop: 4, paddingTop: 2, borderTop: '1px solid #444' }}>
        <Typography variant="body2">
          &copy; {new Date().getFullYear()} RecipeHub!. All rights reserved by SMKA.
        </Typography>
        <Typography variant="body2" sx={{ marginTop: 1 }}>
          <Link href="/project/privacy-policy" color="inherit" underline="hover">
            Privacy Policy
          </Link>{' | '}
          <Link href="/project/terms-of-service" color="inherit" underline="hover">
            Terms of Service
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Footer;