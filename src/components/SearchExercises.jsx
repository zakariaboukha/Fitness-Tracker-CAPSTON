import React, { useEffect, useState } from 'react';
import { Box, Button, Stack, TextField, Typography } from '@mui/material';
import { exerciseOptions, fetchData } from '../utils/fetchData';
import HorizontalScrollbar from './HorizontalScrollbar';

const SearchExercises = ({ setExercises, bodyPart, setBodyPart }) => {
  const [search, setSearch] = useState('');
  const [bodyParts, setBodyParts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchBodyParts = async () => {
      try {
        const url = ' https://wger.de/api/v2/exercisecategory/';
        const bodyPartsData = await fetchData(url, exerciseOptions);

        if (Array.isArray(bodyPartsData)) {
          setBodyParts(['all', ...bodyPartsData]);
        } else {
          console.error('Expected bodyPartsData to be an array:', bodyPartsData);
        }
      } catch (error) {
        console.error('Error fetching body parts:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBodyParts();
  }, []);

  const handleSearch = async () => {
    if (search) {
      try {
        const url = 'https://wger.de/api/v2/exerciseinfo/ ';
        const exercisesData = await fetchData(url, exerciseOptions);

        if (Array.isArray(exercisesData)) {
          const searchedExercises = exercisesData.filter(
            (item) =>
              item.name.toLowerCase().includes(search) ||
              item.target.toLowerCase().includes(search) ||
              item.equipment.toLowerCase().includes(search) ||
              item.bodyPart.toLowerCase().includes(search)
          );

          window.scrollTo({ top: 1800, left: 100, behavior: 'smooth' });

          setSearch('');
          setExercises(searchedExercises);
        } else {
          console.error('Expected exercisesData to be an array:', exercisesData);
        }
      } catch (error) {
        console.error('Error during search:', error);
      }
    }
  };

  if (loading) return <div>Loading...</div>;

  return (
    <Stack alignItems="center" mt="37px" justifyContent="center" p="20px">
      <Typography fontWeight={700} sx={{ fontSize: { lg: '44px', xs: '30px' } }} mb="49px" textAlign="center">
        Awesome Exercises You <br /> Should Know
      </Typography>
      <Box position="relative" mb="72px" width="100%" maxWidth="1170px">
        <TextField
          sx={{
            input: { fontWeight: '700', border: 'none', borderRadius: '4px' },
            width: { lg: 'calc(100% - 80px)', xs: 'calc(100% - 50px)' }, // Adjust width based on button size
            backgroundColor: '#fff',
            borderRadius: '40px',
          }}
          value={search}
          onChange={(e) => setSearch(e.target.value.toLowerCase())}
          placeholder="Search Exercises"
        />
        <Button
  className="search-btn"
  sx={{
    bgcolor: '#dc2626', // Tailwind's bg-red-600 equivalent
    color: '#fff',
    textTransform: 'none',
    width: { lg: '80px', xs: '50px' }, // Adjust button width
    height: '56px',
    position: 'absolute',
    right: '0',
    top: '0',
    fontSize: { lg: '20px', xs: '14px' },
    borderRadius: '4px', // Match button's rounded corners
    transition: 'all 0.3s ease-in-out', // Smooth hover effect
    '&:hover': {
      boxShadow: '0 0 15px rgba(220, 38, 38, 0.8)', // Glow effect
      bgcolor: '#dc2626', // Maintain the background color
    },
  }}
  onClick={handleSearch}
>
  Search
</Button>

      </Box>
      <Box sx={{ position: 'relative', width: '90%', p: '20px' }}>
        <HorizontalScrollbar data={bodyParts} bodyParts setBodyPart={setBodyPart} bodyPart={bodyPart} />
      </Box>
    </Stack>
  );
};

export default SearchExercises;
