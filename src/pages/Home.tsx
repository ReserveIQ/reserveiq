import React from 'react';
import {
  Container,
  Typography,
  Button,
  Box,
  Grid,
  Paper,
  Card,
  CardContent,
  Avatar,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';

const Hero = styled(Box)(({ theme }) => ({
  textAlign: 'center',
  marginBottom: theme.spacing(6),
}));

const FeatureItem = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  textAlign: 'center',
  height: '100%',
}));

const TestimonialCard = styled(Card)(({ theme }) => ({
  marginTop: theme.spacing(4),
}));

const Home: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Hero>
        <Typography variant="h2" component="h1" gutterBottom>
          Streamline Your Business with ReserveIQ
        </Typography>
        <Typography variant="h5" color="textSecondary" paragraph>
          Intelligent reservation and customer management for customer-centric
          businesses
        </Typography>
        <Button
          variant="contained"
          color="primary"
          size="large"
          endIcon={<ArrowForwardIcon />}
        >
          Get Started
        </Button>
      </Hero>

      <Grid container spacing={4}>
        <Grid item xs={12} md={4}>
          <FeatureItem elevation={2}>
            <Typography variant="h6" gutterBottom>
              Smart Reservations
            </Typography>
            <Typography>
              Effortlessly manage bookings and optimize capacity
            </Typography>
          </FeatureItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureItem elevation={2}>
            <Typography variant="h6" gutterBottom>
              Customer Insights
            </Typography>
            <Typography>
              Gain valuable data to personalize experiences
            </Typography>
          </FeatureItem>
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureItem elevation={2}>
            <Typography variant="h6" gutterBottom>
              Staff Management
            </Typography>
            <Typography>
              Streamline scheduling and improve efficiency
            </Typography>
          </FeatureItem>
        </Grid>
      </Grid>

      <TestimonialCard>
        <CardContent>
          <Grid container spacing={2} alignItems="center">
            <Grid item>
              <Avatar alt="John Doe" src="/path-to-image.jpg" />
            </Grid>
            <Grid item xs>
              <Typography variant="body1">
                "ReserveIQ has transformed how we manage our restaurant. Our
                bookings are up, and our customers love the personalized
                service!"
              </Typography>
              <Typography variant="subtitle2" color="textSecondary">
                - John Doe, Owner of Gourmet Delight
              </Typography>
            </Grid>
          </Grid>
        </CardContent>
      </TestimonialCard>

      <Box mt={4} textAlign="center">
        <Button variant="outlined" color="primary" href="/features">
          Explore Features
        </Button>
        <Button
          variant="outlined"
          color="primary"
          href="/pricing"
          sx={{ ml: 2 }}
        >
          View Pricing
        </Button>
      </Box>
    </Container>
  );
};

export default Home;
