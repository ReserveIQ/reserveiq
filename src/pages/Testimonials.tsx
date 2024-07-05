import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Avatar,
  Box,
  Paper,
  Button,
  Link,
} from '@mui/material';
import FormatQuoteIcon from '@mui/icons-material/FormatQuote';
import PlayCircleOutlineIcon from '@mui/icons-material/PlayCircleOutline';

interface Testimonial {
  id: number;
  name: string;
  position: string;
  company: string;
  content: string;
  avatar: string;
}

const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'John Doe',
    position: 'Owner',
    company: 'Gourmet Delight Restaurant',
    content:
      'ReserveIQ has revolutionized how we manage our reservations. Our bookings have increased by 30% since we started using it!',
    avatar: '/path-to-john-avatar.jpg',
  },
  {
    id: 2,
    name: 'Jane Smith',
    position: 'Manager',
    company: 'Serenity Spa',
    content:
      'The customer profiling feature has allowed us to provide personalized experiences that keep our clients coming back.',
    avatar: '/path-to-jane-avatar.jpg',
  },
  {
    id: 3,
    name: 'Mike Johnson',
    position: 'CEO',
    company: 'FitLife Gym',
    content:
      "ReserveIQ's AI-powered insights have helped us optimize our class schedules and increase member retention.",
    avatar: '/path-to-mike-avatar.jpg',
  },
  {
    id: 4,
    name: 'Sarah Lee',
    position: 'Director',
    company: 'Glamour Salon',
    content:
      "The employee scheduling feature has reduced our administrative work by 50%. It's a game-changer!",
    avatar: '/path-to-sarah-avatar.jpg',
  },
];

const TestimonialCard: React.FC<Testimonial> = ({
  name,
  position,
  company,
  content,
  avatar,
}) => (
  <Card sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
    <CardContent sx={{ flexGrow: 1 }}>
      <Box sx={{ display: 'flex', mb: 2 }}>
        <Avatar src={avatar} alt={name} sx={{ width: 60, height: 60, mr: 2 }} />
        <Box>
          <Typography variant="h6">{name}</Typography>
          <Typography variant="subtitle2" color="text.secondary">
            {position} at {company}
          </Typography>
        </Box>
      </Box>
      <FormatQuoteIcon color="primary" fontSize="large" />
      <Typography variant="body1" paragraph>
        {content}
      </Typography>
    </CardContent>
  </Card>
);

const Testimonials: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Customer Testimonials
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        See what our customers are saying about ReserveIQ
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        {testimonials.map((testimonial) => (
          <Grid item key={testimonial.id} xs={12} md={6}>
            <TestimonialCard {...testimonial} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Video Testimonial
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4, textAlign: 'center' }}>
        <PlayCircleOutlineIcon sx={{ fontSize: 60, color: 'primary.main' }} />
        <Typography variant="h6" gutterBottom>
          Hear from our happy customers
        </Typography>
        <Button variant="contained" color="primary">
          Watch Video
        </Button>
      </Paper>

      <Typography variant="h4" gutterBottom>
        Case Studies
      </Typography>
      <Paper elevation={3} sx={{ p: 3, mb: 4 }}>
        <Typography variant="h5" gutterBottom>
          Gourmet Delight Restaurant: Boosting Reservations by 30%
        </Typography>
        <Typography variant="body1" paragraph>
          Learn how Gourmet Delight Restaurant implemented ReserveIQ and saw a
          significant increase in their bookings. Our AI-powered system
          optimized their seating arrangements and reduced no-shows...
        </Typography>
        <Link href="/case-studies/gourmet-delight" color="primary">
          Read Full Case Study
        </Link>
      </Paper>

      <Typography variant="h4" gutterBottom>
        Awards & Recognition
      </Typography>
      <Grid container spacing={2} sx={{ mb: 6 }}>
        <Grid item xs={6} sm={3}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Best SaaS Solution 2023</Typography>
            <Typography variant="body2">TechAwards</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Customer Choice Award</Typography>
            <Typography variant="body2">Hospitality Tech</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">AI Innovation Award</Typography>
            <Typography variant="body2">AI Business Awards</Typography>
          </Paper>
        </Grid>
        <Grid item xs={6} sm={3}>
          <Paper elevation={2} sx={{ p: 2, textAlign: 'center' }}>
            <Typography variant="h6">Top 10 Startups to Watch</Typography>
            <Typography variant="body2">TechCrunch</Typography>
          </Paper>
        </Grid>
      </Grid>

      <Box textAlign="center">
        <Button variant="contained" color="primary" size="large">
          Start Your Free Trial
        </Button>
      </Box>
    </Container>
  );
};

export default Testimonials;
