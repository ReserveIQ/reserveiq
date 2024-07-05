import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const UnleashAIPotentialSection: React.FC = () => {
  return (
    <Box sx={{ backgroundColor: 'background.paper', py: 8 }}>
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          Unleash the potential of AI
        </Typography>
        <Typography variant="subtitle1" paragraph align="center">
          Take your business to the next level with AI
        </Typography>
        <Box
          component="img"
          src="/images/ai-potential.png"
          alt="AI Potential"
          sx={{
            width: '100%',
            maxWidth: 600,
            my: 4,
            mx: 'auto',
            display: 'block',
          }}
        />
        <Box sx={{ textAlign: 'center' }}>
          <Button variant="contained" color="primary">
            Get started
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default UnleashAIPotentialSection;
