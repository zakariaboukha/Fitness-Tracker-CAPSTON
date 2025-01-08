import React, { useContext } from 'react';
import { ScrollMenu, VisibilityContext } from 'react-horizontal-scrolling-menu';
import { Box, Typography } from '@mui/material';

import ExerciseCard from './ExerciseCard';
import BodyPart from './BodyPart';
import RightArrowIcon from '../assets/icons/right-arrow.png';
import LeftArrowIcon from '../assets/icons/left-arrow.png';

const LeftArrow = () => {
  const { scrollPrev } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollPrev()} className="left-arrow" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1', cursor: 'pointer' }}>
      <img src={LeftArrowIcon} alt="left-arrow" style={{ width: '30px', height: '30px' }} />
    </Typography>
  );
};

const RightArrow = () => {
  const { scrollNext } = useContext(VisibilityContext);

  return (
    <Typography onClick={() => scrollNext()} className="right-arrow" sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'absolute', right: '10px', top: '50%', transform: 'translateY(-50%)', zIndex: '1', cursor: 'pointer' }}>
      <img src={RightArrowIcon} alt="right-arrow" style={{ width: '30px', height: '30px' }} />
    </Typography>
  );
};

const HorizontalScrollbar = ({ data, bodyParts, setBodyPart, bodyPart }) => (
  <Box sx={{ position: 'relative', width: '100%' }}>
    <ScrollMenu LeftArrow={LeftArrow} RightArrow={RightArrow}>
      {data.map((item) => (
        <Box
          key={item.id || item}
          itemId={item.id || item}
          title={item.id || item}
          m="0 40px"
        >
          {bodyParts ? (
            <BodyPart item={item} setBodyPart={setBodyPart} bodyPart={bodyPart} />
          ) : (
            <ExerciseCard exercise={item} />
          )}
        </Box>
      ))}
    </ScrollMenu>
  </Box>
);

export default HorizontalScrollbar;
