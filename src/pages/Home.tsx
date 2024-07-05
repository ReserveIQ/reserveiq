import React from 'react';
import {
  Typography,
  Button,
  Grid,
  Card,
  CardContent,
  Box,
  Container,
} from '@mui/material';
import { styled, keyframes } from '@mui/system';
import useIntersectionObserver from '../hooks/useIntersectionObserver';
import restaurantImage from '../images/modern-restaurant-interior.jpg';
import denverImage from '../images/denver-skyline-silhouette.jpg';

// Animations
const fadeIn = keyframes`
  from { opacity: 0; transform: translateY(20px); }
  to { opacity: 1; transform: translateY(0); }
`;

// Styled components
const StyledHero = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${restaurantImage})`,
  backgroundSize: 'cover',
  backgroundPosition: 'center',
  backgroundAttachment: 'fixed', // Parallax effect
  color: theme.palette.common.white,
  padding: theme.spacing(15, 2),
  textAlign: 'center',
  position: 'relative',
  '&::after': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // Overlay for better text visibility
  },
}));

const HeroContent = styled(Box)({
  position: 'relative',
  zIndex: 1,
});

const FeatureCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  transition: 'transform 0.3s ease-in-out',
  '&:hover': {
    transform: 'translateY(-10px)',
  },
}));

const AnimatedBox = styled(Box)`
  animation: ${fadeIn} 1s ease-out;
`;

const DenverSkyline = styled(Box)(({ theme }) => ({
  backgroundImage: `url(${denverImage})`,
  backgroundSize: 'contain',
  backgroundRepeat: 'no-repeat',
  backgroundPosition: 'center bottom',
  height: '100px',
  marginTop: theme.spacing(4),
}));

// Main component
const HomePage = () => {
  const [heroRef, heroVisible] = useIntersectionObserver({
    threshold: 0.1,
  }) as [React.Ref<unknown> | undefined, boolean];
  const [featuresRef, featuresVisible] = useIntersectionObserver({
    threshold: 0.1,
  }) as [React.Ref<unknown> | undefined, boolean];
  const [benefitsRef, benefitsVisible] = useIntersectionObserver({
    threshold: 0.1,
  }) as [React.Ref<unknown> | undefined, boolean];

  return (
    <>
      <StyledHero ref={heroRef}>
        <HeroContent>
          {heroVisible && (
            <AnimatedBox>
              <Typography variant="h1" gutterBottom>
                ReserveIQ: AI-Powered Reservations for Smarter Business
              </Typography>
              <Typography variant="h5" paragraph>
                Streamline bookings, understand your customers, and grow your
                business with intelligent insights
              </Typography>
              <Button variant="contained" color="primary" size="large">
                Get Started
              </Button>
            </AnimatedBox>
          )}
        </HeroContent>
      </StyledHero>

      <Container>
        <Box my={8} ref={featuresRef}>
          {featuresVisible && (
            <AnimatedBox>
              <Typography variant="h2" align="center" gutterBottom>
                Key Features
              </Typography>
              <Grid container spacing={4}>
                {[
                  { title: 'Predictive Booking', icon: '🗓️' },
                  { title: 'Customer Insights', icon: '📊' },
                  { title: 'Smart Scheduling', icon: '⏰' },
                  { title: 'Personalized Marketing', icon: '📱' },
                ].map((feature, index) => (
                  <Grid item xs={12} sm={6} md={3} key={feature.title}>
                    <FeatureCard>
                      <CardContent>
                        <Typography variant="h1" align="center" gutterBottom>
                          {feature.icon}
                        </Typography>
                        <Typography
                          variant="h5"
                          component="h2"
                          gutterBottom
                          align="center"
                        >
                          {feature.title}
                        </Typography>
                        <Typography variant="body2" color="text.secondary">
                          Description of {feature.title} goes here...
                        </Typography>
                      </CardContent>
                    </FeatureCard>
                  </Grid>
                ))}
              </Grid>
            </AnimatedBox>
          )}
        </Box>

        <Box my={8} ref={benefitsRef}>
          {benefitsVisible && (
            <AnimatedBox>
              <Typography variant="h2" align="center" gutterBottom>
                Benefits
              </Typography>
              <Grid container spacing={4}>
                {[
                  'Increase Revenue',
                  'Reduce No-Shows',
                  'Enhance Customer Loyalty',
                  'Optimize Operations',
                ].map((benefit) => (
                  <Grid item xs={12} sm={6} key={benefit}>
                    <Typography variant="h5" gutterBottom>
                      {benefit}
                    </Typography>
                    <Typography variant="body1">
                      Description of how ReserveIQ helps {benefit}...
                    </Typography>
                  </Grid>
                ))}
              </Grid>
            </AnimatedBox>
          )}
        </Box>

        <Box my={8} textAlign="center">
          <Button variant="contained" color="primary" size="large">
            Start Free Trial
          </Button>
          <Button
            variant="outlined"
            color="primary"
            size="large"
            sx={{ ml: 2 }}
          >
            Schedule Demo
          </Button>
        </Box>

        <DenverSkyline />
      </Container>
    </>
  );
};

export default HomePage;
