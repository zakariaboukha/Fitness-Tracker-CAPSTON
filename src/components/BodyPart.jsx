import React from 'react';
import { Stack, Typography } from '@mui/material';
import Icon from '../assets/icons/gym.png';

const BodyPart = ({ item, setBodyPart, bodyPart }) => (
  <Stack
    type="button"
    alignItems="center"
    justifyContent="center"
    className="bodyPart-card"
    sx={{
      borderTop: bodyPart === item ? '4px solid #FF2625' : 'none',
      background: '#fff',
      borderBottomLeftRadius: '20px',
      width: { lg: '270px', xs: '150px' }, // Responsive width
      height: { lg: '150px', xs: '100px' }, // Responsive height
      flexDirection: 'row',
      cursor: 'pointer',
      gap: { lg: '20px', xs: '10px' }, // Responsive gap
    }}
    onClick={() => {
      setBodyPart(item);
      window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });
    }}
  >
    <img 
      src={Icon} 
      alt="dumbbell" 
      style={{ 
        width: '40px', 
        height: '40px' 
      }} 
    />
    <Typography 
      fontSize={{ lg: '24px', xs: '18px' }} // Responsive font size
      fontWeight="bold" 
      fontFamily="Alegreya" 
      color="#3A1212" 
      textTransform="capitalize"
    >
      {item}
    </Typography>
  </Stack>
);

export default BodyPart;
