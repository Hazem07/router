import React from 'react';
import Rating from '@material-ui/lab/Rating';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';

export default function SimpleRating({rate,setRate}) {
  

  return (
    
      <Box component="fieldset" mb={3} borderColor="transparent" style={{marginBottom:'0px'}}>
        <Typography component="legend"></Typography>
        <Rating
          name="simple-controlled"
          value={rate}
          onChange={(event, newValue) => {
            setRate(newValue);
          }}
        />
      </Box>
    
    
  );
}
