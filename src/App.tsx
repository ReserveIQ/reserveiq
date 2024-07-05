import React from 'react';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';
import { CssBaseline, Container, Box } from '@mui/material';
import { ThemeProvider as MuiThemeProvider } from '@mui/material/styles';
import {
  ThemeProvider as CustomThemeProvider,
  useTheme,
} from './context/ThemeContext';
import getTheme from './theme'; // Update your theme.ts to export a function instead of a theme object

import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import Features from './pages/Features';
import Pricing from './pages/Pricing';
import Contact from './pages/Contact';
import Blog from './pages/Blog';
import Testimonials from './pages/Testimonials';

const ThemedApp: React.FC = () => {
  const { darkMode } = useTheme();
  const theme = getTheme(darkMode);

  return (
    <MuiThemeProvider theme={theme}>
      <CssBaseline />
      <Router>
        <Box display="flex" flexDirection="column" minHeight="100vh">
          <Header />
          <Container component="main" sx={{ flexGrow: 1, py: 3 }}>
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/features" element={<Features />} />
              <Route path="/pricing" element={<Pricing />} />
              <Route path="/contact" element={<Contact />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/testimonials" element={<Testimonials />} />
            </Routes>
          </Container>
          <Footer />
        </Box>
      </Router>
    </MuiThemeProvider>
  );
};

const App: React.FC = () => {
  return (
    <CustomThemeProvider>
      <ThemedApp />
    </CustomThemeProvider>
  );
};

export default App;
