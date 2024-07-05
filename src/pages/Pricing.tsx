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
} from '@mui/material';
import CheckIcon from '@mui/icons-material/Check';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

interface PricingTier {
  title: string;
  price: string;
  features: string[];
  buttonText: string;
  isRecommended?: boolean;
}

const pricingTiers: PricingTier[] = [
  {
    title: 'Basic',
    price: '$29/month',
    features: ['Smart Reservations', 'Customer Profiles', 'Email Support'],
    buttonText: 'Start Free Trial',
  },
  {
    title: 'Premium',
    price: '$79/month',
    features: [
      'All Basic features',
      'Employee Scheduling',
      'Analytics Dashboard',
      'Priority Support',
    ],
    buttonText: 'Start Free Trial',
    isRecommended: true,
  },
  {
    title: 'Enterprise',
    price: 'Custom',
    features: [
      'All Premium features',
      'Custom Integrations',
      'Dedicated Account Manager',
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
      sx={{
        backgroundColor: isRecommended ? 'primary.main' : 'grey.200',
        color: isRecommended ? 'white' : 'inherit',
      }}
    />
    <CardContent sx={{ flexGrow: 1 }}>
      <Typography
        component="h2"
        variant="h3"
        align="center"
        color="text.primary"
      >
        {price}
      </Typography>
      <List>
        {features.map((feature, index) => (
          <ListItem key={index}>
            <ListItemIcon>
              <CheckIcon color="primary" />
            </ListItemIcon>
            <ListItemText primary={feature} />
          </ListItem>
        ))}
      </List>
    </CardContent>
    <Button
      fullWidth
      variant={isRecommended ? 'contained' : 'outlined'}
      color="primary"
    >
      {buttonText}
    </Button>
  </Card>
);

const Pricing: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" align="center" gutterBottom>
        Pricing Plans
      </Typography>
      <Typography variant="h5" align="center" color="text.secondary" paragraph>
        Choose the plan that fits your business needs
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
            We offer a 14-day free trial for our Basic and Premium plans. No
            credit card is required to start your trial.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Typography>What payment methods do you accept?</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            We accept all major credit cards, including Visa, MasterCard, and
            American Express. We also support PayPal for select countries.
          </Typography>
        </AccordionDetails>
      </Accordion>
    </Container>
  );
};

export default Pricing;
