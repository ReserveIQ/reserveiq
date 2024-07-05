import React from 'react';
import { Box, Container, Typography, Button } from '@mui/material';

const CustomizeSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom>
          Customize your reservations
        </Typography>
        <Typography variant="subtitle1" paragraph>
          AI-driven insights power your reservations
        </Typography>
        <Box
          component="img"
          src="/images/ai-customization.png"
          alt="AI Customization"
          sx={{ width: '100%', maxWidth: 600, my: 4 }}
        />
        <Typography variant="h3" gutterBottom>
          Start optimizing your reservations today
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Get started in less than 5 minutes
        </Typography>
        <Button variant="contained" color="primary">
          Start now
        </Button>
      </Container>
    </Box>
  );
};

export default CustomizeSection;
