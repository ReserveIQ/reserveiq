// src/theme.ts
import { createTheme, Theme } from '@mui/material/styles';

const getTheme = (darkMode: boolean): Theme =>
  createTheme({
    palette: {
      mode: darkMode ? 'dark' : 'light',
      primary: {
        main: '#3f51b5',
      },
      background: {
        default: darkMode ? '#121212' : '#f5f5f5',
        paper: darkMode ? '#1e1e1e' : '#ffffff',
      },
      text: {
        primary: darkMode ? '#ffffff' : '#000000',
        secondary: darkMode ? '#b0b0b0' : '#555555',
      },
      // Add contrast colors for dark mode
      ...(darkMode && {
        contrast: {
          main: '#ff4081', // Pink color for contrast in dark mode
        },
      }),
    },
    typography: {
      h1: {
        fontSize: '3rem',
        fontWeight: 700,
      },
      h2: {
        fontSize: '2.5rem',
        fontWeight: 600,
      },
      h3: {
        fontSize: '2rem',
        fontWeight: 600,
      },
    },
  });

export default getTheme;
