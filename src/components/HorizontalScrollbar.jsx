import React from 'react';
import { Box } from '@mui/material';
import BodyPart from './BodyPart';

const HorizontalScrollbar = ({ data, bodyPart, setBodyPart }) => {
  return (
    <section>
        { data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
            >
               <BodyPart
                item={ item }
                bodyPart={ bodyPart }
                setBodyPart={ setBodyPart }
               />
            </Box>
        )
        ) }
    </section>
  );
};

export default HorizontalScrollbar;
