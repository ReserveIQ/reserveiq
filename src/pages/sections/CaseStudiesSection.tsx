import React from 'react';
import {
  Box,
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardMedia,
} from '@mui/material';

const caseStudies = [
  {
    title: 'Restaurant Success',
    image: '/images/restaurant-case.jpg',
    description: 'How AI boosted reservations by 30%',
  },
  {
    title: 'Salon Efficiency',
    image: '/images/salon-case.jpg',
    description: 'Reducing no-shows by 50% with smart scheduling',
  },
  {
    title: 'Gym Optimization',
    image: '/images/gym-case.jpg',
    description: 'Maximizing class attendance with AI insights',
  },
];

const CaseStudiesSection: React.FC = () => {
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
          Case Studies
        </Typography>
        <Typography variant="subtitle1" paragraph align="center">
          Real success stories from our clients
        </Typography>
        <Grid container spacing={4}>
          {caseStudies.map((study, index) => (
            <Grid item xs={12} md={4} key={index}>
              <Card>
                <CardMedia
                  component="img"
                  height="140"
                  image={study.image}
                  alt={study.title}
                />
                <CardContent>
                  <Typography gutterBottom variant="h5" component="div">
                    {study.title}
                  </Typography>
                  <Typography variant="body2" color="text.secondary">
                    {study.description}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          ))}
        </Grid>
      </Container>
    </Box>
  );
};

export default CaseStudiesSection;
