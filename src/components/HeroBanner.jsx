import React from 'react';
import { Box, Stack, Typography } from '@mui/material';
import HeroBannerImage from '../assets/images/banner.png';

const HeroBanner = () => (
  <Box
  sx={{
    mt: { lg: '100px', xs: '50px' },
    ml: { sm: '50px' },
    position: 'relative',
    p: '20px',
    textAlign: 'center',
    height: { lg: '100vh', xs: 'auto' },
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: '20px',
    background: 'linear-gradient(135deg, rgba(255, 255, 255, 0.3) 0%, rgba(255, 255, 255, 0.1) 100%)', // Glass effect gradient
    backdropFilter: 'blur(12px)', // Glass blur
    border: '1px solid rgba(255, 255, 255, 0.2)', // Subtle border
    boxShadow: '0 8px 32px rgba(0, 0, 0, 0.2)', // Stronger shadow for depth
    overflow: 'hidden', // Prevent content overflow
  }}
>

  
    {/* Fitness Club */}
    <Typography
      color="#dc2626" // Red-600 color for "Fitness Club"
      fontWeight="600"
      fontSize="26px"
    >
      Fitness Club
    </Typography>

    {/* Sweat, Smile, and Repeat */}
    <Typography
      fontWeight={700}
      sx={{
        fontSize: { lg: '44px', xs: '40px' },
        mb: '23px',
        mt: '30px',
      }}
    >
      <span style={{ color: '#1f72e7' }}>Sweat, Smile</span> <br />
      and{' '}
      <span style={{ color: '#dc2626' }}>Repeat</span>
    </Typography>

    {/* Description */}
    <Typography fontSize="22px" fontFamily="Alegreya" lineHeight="35px" color="#666">
      Check out the most effective exercises personalized to you
    </Typography>

    {/* Explore Exercises Button */}
    <Stack
      direction="row"
      justifyContent="center"
      alignItems="center"
      sx={{ mt: '15px' }}
    >
      <a
        href="#exercises"
        style={{
          textDecoration: 'none',
          width: '150px',
          textAlign: 'center',
          background: '#dc2626',
          padding: '10px',
          fontSize: '18px',
          textTransform: 'none',
          color: 'white',
          borderRadius: '4px',
          transition: 'all 0.3s ease-in-out',
          boxShadow: '0 0 10px rgba(220, 38, 38, 0.8)',
        }}
        onMouseEnter={(e) =>
          (e.target.style.boxShadow = '0 0 20px rgba(220, 38, 38, 1)')
        }
        onMouseLeave={(e) =>
          (e.target.style.boxShadow = '0 0 10px rgba(220, 38, 38, 0.8)')
        }
      >
        Explore Exercises
      </a>
    </Stack>

    {/* Large Text "Exercise" */}
    <Typography
      fontWeight={600}
      color="#1f72e7" // Blue theme for the large "Exercise" text
      sx={{
        opacity: '0.1',
        fontSize: { lg: '200px', md: '150px', sm: '100px', xs: '80px' },
        position: 'absolute',
        bottom: { lg: '20%', xs: '5%' },
        left: '50%',
        transform: 'translateX(-50%)',
        pointerEvents: 'none',
        whiteSpace: 'nowrap',
      }}
    >
      Exercise
    </Typography>

    {/* Background Image */}
    <Box
      component="img"
      src={HeroBannerImage}
      alt="hero-banner"
      sx={{
        position: 'absolute',
        top: '0',
        left: '0',
        width: '100%',
        height: '100%',
        objectFit: 'cover',
        zIndex: -1,
        opacity: 0.1, // Subtle background visibility
      }}
    />
  </Box>
);

export default HeroBanner;
