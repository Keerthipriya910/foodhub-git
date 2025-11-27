import React from 'react';
import { useNavigate } from 'react-router-dom';
import { IconButton } from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

export default function Contact() {
  const navigate = useNavigate();

  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        minHeight: '100vh',
        minWidth: '100vw',
        backgroundImage:
          "url('https://png.pngtree.com/background/20210711/original/pngtree-light-color-antique-simple-food-miso-noodles-e-commerce-banner-picture-image_1118205.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '4vw',
        boxSizing: 'border-box',
      }}
    >
      <div
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.06)',
          backdropFilter: 'blur(8px)',
          padding: '5vw',
          borderRadius: '15px',
          width: '90%',
          maxWidth: '600px',
          margin: 'auto',
          textAlign: 'center',
          boxShadow: '0 8px 24px rgba(0, 0, 0, 0.2)', // Box shadow added here
        }}
      >
        <h1 style={{ color: '#333', marginBottom: '20px', fontSize: '32px' }}>
          Contact Us
        </h1>

        <div
          style={{
            display: 'flex',
            justifyContent: 'center',
            gap: '30px',
            flexWrap: 'wrap',
            marginBottom: '30px',
          }}
        >
          <IconButton
            color="inherit"
            href="https://mail.google.com/mail/?view=cm&fs=1&to=contact@example.com"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '15px',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <EmailIcon style={{ color: '#8B4513', fontSize: '28px' }} />
          </IconButton>
          <IconButton
            color="inherit"
            href="tel:+123456789"
            target="_blank"
            rel="noopener noreferrer"
            style={{
              backgroundColor: 'white',
              borderRadius: '50%',
              padding: '15px',
              transition: 'transform 0.3s ease',
            }}
            onMouseOver={(e) => e.target.style.transform = 'scale(1.1)'}
            onMouseOut={(e) => e.target.style.transform = 'scale(1)'}
          >
            <PhoneIcon style={{ color: '#8B4513', fontSize: '28px' }} />
          </IconButton>
        </div>

        <button
          onClick={() => navigate('/home')}
          style={{
            padding: '12px 24px',
            backgroundColor: '#8B4513',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
            fontSize: '16px',
            transition: 'background-color 0.3s ease',
          }}
          onMouseOver={(e) => e.target.style.backgroundColor = '#6b3e1f'}
          onMouseOut={(e) => e.target.style.backgroundColor = '#8B4513'}
        >
          Back to Home
        </button>
      </div>
    </div>
  );
}
