import React, { useState } from 'react';
import {
  Box,
  TextField,
  Button,
  Typography,
  Container,
  CircularProgress
} from '@mui/material';
import { useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import axios from 'axios';
import 'react-toastify/dist/ReactToastify.css';

// Utility to generate CAPTCHA string
const generateCaptcha = () => {
  const chars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789';
  return Array.from({ length: 6 }, () =>
    chars.charAt(Math.floor(Math.random() * chars.length))
  ).join('');
};

const AdminLogin = () => {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    username: '',
    password: '',
    captchaInput: '',
  });

  const [captcha, setCaptcha] = useState(generateCaptcha());
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (formData.captchaInput !== captcha) {
      toast.error("Incorrect CAPTCHA. Please try again.");
      setCaptcha(generateCaptcha());
      setFormData({ ...formData, captchaInput: '' });
      return;
    }

    setLoading(true);

    axios
      .post('http://localhost:30022/adminlogin', {
        username: formData.username,
        password: formData.password,
      })
      .then((response) => {
        if (response.data && response.data.username) {
          localStorage.setItem("username", response.data.username);
          localStorage.setItem("isAdmin", "true");
          toast.success("Admin Login successful!");
          navigate("/project/admin");
        } else {
          localStorage.setItem("isAdmin", "false");
          setFormData({ ...formData, username: "", password: "" });
          toast.error("Invalid username or password.");
        }
      })
      .catch((error) => {
        toast.error("Login failed. Please check your credentials.");
        console.error("Login error:", error);
      })
      .finally(() => {
        setLoading(false);
      });
  };

  const handleCaptchaClick = () => {
    setCaptcha(generateCaptcha());
    setFormData({ ...formData, captchaInput: '' });
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
        alignItems: 'center',
      }}
    >
      <Container maxWidth="xs">
        <Box
          sx={{
            textAlign: 'center',
            my: 4,
            p: 4,
            border: '1px solid #ccc',
            borderRadius: 2,
            boxShadow: 3,
            backgroundColor: 'rgba(255, 255, 255, 0.85)',
          }}
        >
          <Typography variant="h4" gutterBottom sx={{ color: 'black' }}>
            Admin Login
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Username"
              name="username"
              value={formData.username}
              onChange={handleChange}
              required
              margin="normal"
            />

            <TextField
              fullWidth
              label="Password"
              name="password"
              type="password"
              value={formData.password}
              onChange={handleChange}
              required
              margin="normal"
            />

            {/* CAPTCHA Section */}
            <Box
              sx={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                my: 2,
              }}
            >
              <Typography
                variant="body1"
                sx={{
                  fontWeight: 'bold',
                  color: 'black',
                  backgroundColor: '#fff',
                  padding: '8px 16px',
                  borderRadius: '4px',
                  cursor: 'pointer',
                  userSelect: 'none',
                  mr: 2,
                  border: '1px solid #aaa',
                }}
                onClick={handleCaptchaClick}
              >
                {captcha}
              </Typography>

              <TextField
                label="Enter CAPTCHA"
                name="captchaInput"
                value={formData.captchaInput}
                onChange={handleChange}
                required
                margin="normal"
              />
            </Box>

            {/* Submit Button */}
            <Button
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
              sx={{ mt: 2 }}
              disabled={loading}
            >
              {loading ? <CircularProgress size={24} color="inherit" /> : 'Admin Login'}
            </Button>
          </form>
        </Box>
      </Container>

      {/* Toast messages */}
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </div>
  );
};

export default AdminLogin;
