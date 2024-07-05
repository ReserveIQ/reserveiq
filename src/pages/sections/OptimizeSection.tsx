import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const OptimizeSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Tailored solutions for all businesses
            </Typography>
            <Typography variant="subtitle1" paragraph>
              From startups to enterprises, we've got you covered
            </Typography>
            <Button variant="contained" color="primary">
              Learn more
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/tailored-solutions.png"
              alt="Tailored Solutions"
              sx={{ width: '100%', maxWidth: 400, height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default OptimizeSection;