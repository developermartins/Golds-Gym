import React from 'react';
import { Box } from '@mui/material';

const HorizontalScrollbar = ({ data }) => {
  return (
    <section>
        { data.map((item) => (
            <Box
                key={item.id || item}
                itemId={item.id || item}
                title={item.id || item}
            >
                { item }
            </Box>
        )
        ) }
    </section>
  );
};

export default HorizontalScrollbar;
