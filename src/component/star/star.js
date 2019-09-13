import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Box from '@material-ui/core/Box';
import './star.css'

export default function SimpleRating() {
  const [value, setValue] = React.useState(5);
  return (
    <div>
      <Box component="fieldset" mb={2} borderColor="transparent" className = 'ratting'>
        <Rating
          value={value}
          onChange={(event, newValue) => {
            setValue(newValue);
          }}
        />      </Box>
    </div>
  );
}