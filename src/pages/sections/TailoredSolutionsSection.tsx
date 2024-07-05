import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const TailoredSolutionsSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/restaurant-solution.png"
              alt="Restaurant Solution"
              sx={{ width: '100%', maxWidth: 400, height: 'auto' }}
            />
          </Grid>
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Tailored solutions for all businesses
            </Typography>
            <Typography variant="subtitle1" paragraph>
              From restaurants to spas, we've got you covered
            </Typography>
            <Button variant="contained" color="primary">
              Learn more
            </Button>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default TailoredSolutionsSection;
