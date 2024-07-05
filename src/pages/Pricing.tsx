import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Card,
  CardContent,
  CardHeader,
  Button,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import StarIcon from '@mui/icons-material/Star';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Starter',
    price: '$49/month',
    features: [
      'Smart Reservations',
      'Basic Customer Profiles',
      'Email Support',
      'Limited AI Insights',
    ],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Growth',
    price: '$99/month',
    features: [
      'All Starter features',
      'Advanced Customer Profiling',
      'Employee Scheduling',
      'Full AI-Powered Analytics',
      'Priority Support',
    ],
    buttonText: 'Start Free Trial',
    isRecommended: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: [
      'All Growth features',
      'Custom AI Models',
      'Dedicated Account Manager',
      'API Access for Custom Integrations',
      '24/7 Phone Support',
    ],
    buttonText: 'Contact Sales',
  },
];

const PricingCard: React.FC<PricingTier> = ({
  title,
  price,
  features,
  buttonText,
  isRecommended,
}) => (
  <Card
    raised={isRecommended}
    sx={{ height: '100%', display: 'flex', flexDirection: 'column' }}
  >
    <CardHeader
      title={title}
      subheader={isRecommended ? 'Recommended' : null}
      titleTypographyProps={{ align: 'center' }}
      subheaderTypographyProps={{ align: 'center' }}
      action={isRecommended ? <StarIcon color="secondary" /> : null}
      sx={{
        backgroundColor: isRecommended ? 'primary.main' : 'grey.200',
        color: isRecommended ? 'white' : 'inherit',
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'baseline',
          mb: 2,
        }}
      >
        <Typography component="h2" variant="h3" color="text.primary">
          {price}
        </Typography>
        <Typography variant="h6" color="text.secondary">
          /month
        </Typography>
      </Box>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index} sx={{ py: 1, px: 0 }}>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
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

const Pricing: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        AI-Powered Pricing for Smarter Business
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Choose the plan that fits your business needs and unlock the power of AI
      </Typography>

      <Grid container spacing={4} alignItems="flex-end" sx={{ mb: 8 }}>
        {pricingTiers.map((tier) => (
          <Grid
            item
            key={tier.title}
            xs={12}
            sm={tier.title === 'Enterprise' ? 12 : 6}
            md={4}
          >
            <PricingCard {...tier} />
          </Grid>
        ))}
      </Grid>

      <Typography variant="h4" gutterBottom>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What's included in the AI-powered features?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our AI-powered features include predictive booking, customer
            behavior analysis, personalized marketing recommendations, and
            intelligent staff scheduling. The extent of these features varies by
            plan.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Can I change my plan later?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, you can upgrade or downgrade your plan at any time. Changes
            will be reflected in your next billing cycle.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>Is there a free trial available?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We offer a 14-day free trial for our Starter and Growth plans. No
            credit card is required to start your trial.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What kind of support do you offer?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            All plans include email support. Our Growth plan includes priority
            support, while Enterprise customers get 24/7 phone support and a
            dedicated account manager.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Pricing;
