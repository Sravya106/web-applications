import React from 'react';
import TextField from '@mui/material/TextField';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';

function SearchBar({ color = 'black', placeholder = 'Search...' }) {
  return (
    <Box sx={{ 
      display: 'flex', 
      alignItems: 'center', 
      width: '60%', 
      minWidth: '500px',

    }}>
      <TextField
        variant="outlined"
        placeholder={placeholder}
        size="small"
        fullWidth
        sx={{
          backgroundColor: 'white',  
          borderRadius: '4px',
          input: { color: color },
          fieldset: { borderColor: color }
        }}
        InputLabelProps={{
          style: { color: color }
        }}
      />
      <Button 
        variant="contained" 
        sx={{ ml: 2, backgroundColor: color }} 
        onClick={() => alert('Search button clicked')}
      >
        Search
      </Button>
    </Box>
  );
}

export default SearchBar;

