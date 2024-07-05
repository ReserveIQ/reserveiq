import React from 'react';
import { Box, Container, Typography, Grid } from '@mui/material';

const trustedCompanies = ['Logo1', 'Logo2', 'Logo3', 'Logo4', 'Logo5'];

const TrustedBusinessesSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          Trusted by leading businesses
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {trustedCompanies.map((company, index) => (
            <Grid item key={index}>
              <Box
                component="img"
                src={`/images/${company}.png`}
                alt={company}
                sx={{ height: 50, width: 'auto' }}
              />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default TrustedBusinessesSection;
