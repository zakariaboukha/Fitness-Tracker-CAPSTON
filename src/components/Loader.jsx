import React from 'react';
import { CircularProgress, Stack } from '@mui/material';

const Loader = () => (
  <Stack direction="row" justifyContent="center" alignItems="center" width="100%">
    <CircularProgress color="primary" />
  </Stack>
);

export default Loader;
