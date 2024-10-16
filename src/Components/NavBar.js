// NavBar.js
import React from 'react';
import { Link } from 'react-router-dom'; // Import Link from react-router-dom
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';

function NavBar({ iconColor = 'white', textColor = 'white', backgroundColor = 'black' }) {
  return (
    <AppBar position="static" sx={{ backgroundColor: backgroundColor }}>
      <Toolbar>
        <IconButton
          edge="start"
          aria-label="menu"
          sx={{ mr: 2, color: iconColor }}
        >
          <MenuIcon />
        </IconButton>

        <Typography variant="h6" component="div" sx={{ flexGrow: 1, color: textColor }}>
          MyApp
        </Typography>

        {/* Use Link components for routing */}
        <Button component={Link} to="/" sx={{ color: textColor }}>
          Home
        </Button>
        <Button component={Link} to="/about" sx={{ color: textColor }}>
          About
        </Button>
        <Button component={Link} to="/contact" sx={{ color: textColor }}>
          Contact
        </Button>
        <Button component={Link} to="/maps" sx={{ color: textColor }}>
          Maps
        </Button> {/* Added Maps link */}
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

