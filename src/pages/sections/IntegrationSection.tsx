import React from 'react';
import { Box, Container, Typography, Grid, Button } from '@mui/material';

const integrations = [
  'Integration1',
  'Integration2',
  'Integration3',
  'Integration4',
  'Integration5',
  'Integration6',
  'Integration7',
  'Integration8',
];

const IntegrationSection: React.FC = () => {
  return (
    <Box
      sx={{
        backgroundColor: 'background.default',
        color: 'text.primary',
        py: 8,
      }}
    >
      <Container maxWidth="lg">
        <Typography variant="h2" gutterBottom align="center">
          Seamless app integration
        </Typography>
        <Typography variant="subtitle1" paragraph align="center">
          Connect with your favorite tools effortlessly
        </Typography>
        <Grid container spacing={4} justifyContent="center">
          {integrations.map((integration, index) => (
            <Grid item key={index}>
              <Box
                component="img"
                src={`/images/${integration}.png`}
                alt={integration}
                sx={{ height: 40, width: 'auto' }}
              />
            </Grid>
          ))}
        </Grid>
        <Box sx={{ textAlign: 'center', mt: 4 }}>
          <Button variant="contained" color="primary">
            View all integrations
          </Button>
        </Box>
      </Container>
    </Box>
  );
};

export default IntegrationSection;
