// Registration.jsx

import React, { useState, } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, TextField, Button, Typography, Container, Grid, Link } from '@mui/material';
import axios from 'axios';

const Registration = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    phone: '',
    address: '',
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Check if passwords match
    if (formData.password !== formData.confirmPassword) {
      alert("Passwords don't match!");
      return;
    }

    // Send registration data to the backend

    // console.log('Registration data:', formData);

    axios.post('http://localhost:30022/register', formData).then((response) => {
      alert(response.data);
      navigate('/project/login');
    })
    .catch((error) => {
      console.log('Registration failed:', error);
    });
  };

  return (
    <div
    style={{
       backgroundImage: 'url(https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg)',
       backgroundSize: 'cover', 
       backgroundPosition: 'center',
       width: '100vw',
       height: '130vh', 
       backgroundRepeat: 'no-repeat',
       display: 'flex',
       justifyContent: 'center',
       alignItems: 'center',}}>
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center',
          my: 4,
          p: 4,
          border: '1px solid #ccc',
          borderRadius: 2,
          boxShadow: 3,
        }}
      >
        <Typography variant="h4" gutterBottom>
         <i> Register Here! </i>
        </Typography>
        <form onSubmit={handleSubmit}>
        <Grid container spacing={2} >
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="First Name"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                required
              />
            </Grid> 
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Last Name"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                required
              />
            </Grid>
              <TextField
                fullWidth
                label="Username"
                name="username"
                value={formData.username}
                onChange={handleChange}
                required
              />
              <TextField
                fullWidth
                label="Email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                type="email"
                required
              />
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                type="password"
                required
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Confirm Password"
                name="confirmPassword"
                value={formData.confirmPassword}
                onChange={handleChange}
                type="password"
                required
              />
            </Grid>
              <TextField
                fullWidth
                label="Phone"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                type="tel"
                required
              />
              <TextField
                fullWidth
                label="Address"
                name="address"
                value={formData.address}
                onChange={handleChange}
                multiline
                rows={3}
                required
              />
          </Grid>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            fullWidth
            sx={{ mt: 3 }}
          >
            Register!
          </Button>
        </form>

        {/* Already have an account link */}
        <Typography variant="body2" sx={{ mt: 2 }}>
          Already have an account?{' '}
          <Link href="/project/login" color="primary" sx={{ textDecoration: 'none' }}>  
            Login here
          </Link>  
        </Typography>
      </Box>
    </Container>
    </div>
  );
};

export default Registration;