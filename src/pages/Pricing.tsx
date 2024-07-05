import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  Button,
  Box,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CheckIcon from '@mui/icons-material/Check';

interface PricingTier {
  title: string;
  price: string;
  description: string;
  buttonText: string;
  isRecommended?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic',
    price: '$9',
    description: 'For Individuals & Small Teams',
    buttonText: 'Start Basic Plan',
  },
  {
    title: 'AI-Powered',
    price: '$19',
    description: 'Ideal for Service Businesses',
    buttonText: 'Try Pro Now',
    isRecommended: true,
  },
  {
    title: 'Business',
    price: 'Custom',
    description: 'For Advanced Business Needs',
    buttonText: 'Start Business Plan',
  },
];

const PricingCard: React.FC<PricingTier> = ({
  title,
  price,
  description,
  buttonText,
  isRecommended,
}) => (
  <Card
    raised={isRecommended}
    sx={{
      height: '100%',
      display: 'flex',
      flexDirection: 'column',
      backgroundColor: 'background.paper',
      position: 'relative',
    }}
  >
    {isRecommended && (
      <Box
        sx={{
          position: 'absolute',
          top: 0,
          right: 0,
          backgroundColor: 'primary.main',
          color: 'white',
          padding: '4px 8px',
          borderBottomLeftRadius: 4,
        }}
      >
        Top Choice
      </Box>
    )}
    <CardContent sx={{ flexGrow: 1, textAlign: 'center' }}>
      <Typography variant="h5" component="h2" gutterBottom>
        {title}
      </Typography>
      <Typography variant="h3" component="div" gutterBottom>
        {price}
        <Typography variant="subtitle1" component="span">
          /mo
        </Typography>
      </Typography>
      <Typography variant="body2" color="text.secondary">
        {description}
      </Typography>
    </CardContent>
    <Box sx={{ p: 2 }}>
      <Button
        fullWidth
        variant={isRecommended ? 'contained' : 'outlined'}
        color="primary"
      >
        {buttonText}
      </Button>
    </Box>
  </Card>
);

const featureComparison = [
  { feature: 'Process Analysis', basic: true, pro: true, business: true },
  { feature: 'Task Management', basic: true, pro: true, business: true },
  { feature: 'Time Tracking', basic: true, pro: true, business: true },
  { feature: 'AI Reservation System', basic: true, pro: true, business: true },
  { feature: 'Custom Reservation', basic: true, pro: true, business: true },
  { feature: 'Email Notifications', basic: true, pro: true, business: true },
  { feature: 'Process Automation', basic: false, pro: true, business: true },
  { feature: 'Task Scheduling', basic: false, pro: true, business: true },
  { feature: 'Time Management', basic: false, pro: true, business: true },
  {
    feature: 'Real-time Availability',
    basic: false,
    pro: true,
    business: true,
  },
  { feature: 'Automated Booking', basic: false, pro: true, business: true },
  { feature: 'AI Integration', basic: false, pro: false, business: true },
  { feature: 'Task Assignment', basic: false, pro: false, business: true },
  { feature: 'Time Optimization', basic: false, pro: false, business: true },
  {
    feature: 'AI Analytics Dashboard',
    basic: false,
    pro: false,
    business: true,
  },
  {
    feature: 'Service Level Agreement',
    basic: false,
    pro: false,
    business: true,
  },
];

const Pricing: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Pricing
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Transparent Pricing for AI Reservation System
      </Typography>

      <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 8 }}>
        {pricingTiers.map((tier) => (
          <Grid item key={tier.title} xs={12} sm={4}>
            <PricingCard {...tier} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Feature Comparison
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Feature</TableCell>
              <TableCell align="center">Basic</TableCell>
              <TableCell align="center">Pro</TableCell>
              <TableCell align="center">Business</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {featureComparison.map((row) => (
              <TableRow key={row.feature}>
                <TableCell component="th" scope="row">
                  {row.feature}
                </TableCell>
                <TableCell align="center">
                  {row.basic && <CheckIcon />}
                </TableCell>
                <TableCell align="center">{row.pro && <CheckIcon />}</TableCell>
                <TableCell align="center">
                  {row.business && <CheckIcon />}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>

      <Box sx={{ my: 8, textAlign: 'center' }}>
        <img
          src="/path-to-analytics-image.png"
          alt="Analytics Dashboard"
          style={{ maxWidth: '100%', height: 'auto' }}
        />
      </Box>

      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      {[
        'How does AI reservation work?',
        'What are the AI benefits?',
        'Is AI integration complex?',
        'Request personalized pricing',
        'Explore our trial options',
        'Join ReserveIQ now!',
      ].map((question, index) => (
        <Accordion key={index}>
          <AccordionSummary expandIcon={<ExpandMoreIcon />}>
            <Typography>{question}</Typography>
          </AccordionSummary>
          <AccordionDetails>
            <Typography>
              Detailed answer to the question goes here...
            </Typography>
          </AccordionDetails>
        </Accordion>
      ))}

      <Box
        sx={{
          my: 8,
          p: 4,
          backgroundColor: 'background.paper',
          borderRadius: 2,
        }}
      >
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={8}>
            <Typography variant="h4" gutterBottom>
              Experience ReserveIQ Today
            </Typography>
            <Typography variant="subtitle1" paragraph>
              Transform your operations with AI.
            </Typography>
            <Button variant="contained" color="primary">
              Get Demo
            </Button>
          </Grid>
          <Grid item xs={12} md={4}>
            <img
              src="/path-to-ai-image.png"
              alt="AI Visualization"
              style={{ maxWidth: '100%', height: 'auto' }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default Pricing;
