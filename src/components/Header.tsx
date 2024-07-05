import React from 'react';
import { Link as RouterLink } from 'react-router-dom';
import {
  AppBar,
  Toolbar,
  Typography,
  Button,
  Box,
  IconButton,
} from '@mui/material';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import { useTheme } from '../context/ThemeContext';

const Header: React.FC = () => {
  const { darkMode, toggleDarkMode } = useTheme();

  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
          <RouterLink
            to="/"
            style={{ color: 'inherit', textDecoration: 'none' }}
          >
            ReserveIQ
          </RouterLink>
        </Typography>
        <Box sx={{ display: 'flex', alignItems: 'center' }}>
          <Button color="inherit" component={RouterLink} to="/features">
            Features
          </Button>
          <Button color="inherit" component={RouterLink} to="/pricing">
            Pricing
          </Button>
          <Button color="inherit" component={RouterLink} to="/blog">
            Blog
          </Button>
          <Button color="inherit" component={RouterLink} to="/contact">
            Contact
          </Button>
          <IconButton onClick={toggleDarkMode} color="inherit" sx={{ ml: 1 }}>
            {darkMode ? <Brightness7Icon /> : <Brightness4Icon />}
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default Header;
