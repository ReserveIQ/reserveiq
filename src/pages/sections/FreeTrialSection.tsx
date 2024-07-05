import React from 'react';
import { Box, Container, Typography, Button, Grid } from '@mui/material';

const FreeTrialSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography variant="h2" gutterBottom>
              Free trial available
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Experience the power of AI reservations risk-free
            </Typography>
            <Button variant="contained" color="primary" size="large">
              Start free trial
            </Button>
            <Button
              variant="outlined"
              color="primary"
              size="large"
              sx={{ ml: 2 }}
            >
              Contact sales
            </Button>
          </Grid>
          <Grid item xs={12} md={6}>
            <Box
              component="img"
              src="/images/free-trial.png"
              alt="Free Trial"
              sx={{ width: '100%', maxWidth: 400, height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
};

export default FreeTrialSection;
