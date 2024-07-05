import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const HeroSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h1" gutterBottom>
              Experience the power of AI reservations
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Book smarter with powerful AI tools built-in
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Get started
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/ai-reservation-hero.png"
              alt="AI Reservations"
              sx={{ width: '100%', maxWidth: 400, height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default HeroSection;
