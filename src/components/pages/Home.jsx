import React, { useState } from 'react';
import { Box } from '@mui/material';

import Navbar from "../Navbar"; 

// Import other components
import Exercises from '../Exercises';
import SearchExercises from '../SearchExercises';
import HeroBanner from '../HeroBanner';

const Home = () => {
  const [exercises, setExercises] = useState([]);
  const [bodyPart, setBodyPart] = useState('all');

  return (
    <>
      <Navbar /> {/* Navbar at the top */}
      <Box sx={{ overflowY: 'auto', maxHeight: '100vh' }}>
        <HeroBanner />
        <SearchExercises setExercises={setExercises} bodyPart={bodyPart} setBodyPart={setBodyPart} />
        <Exercises setExercises={setExercises} exercises={exercises} bodyPart={bodyPart} />
      </Box>
    </>
  );
};

export default Home;
