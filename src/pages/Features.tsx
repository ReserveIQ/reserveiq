import React from 'react';
import {
  Container,
  Typography,
  Grid,
  Paper,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Box,
  Button,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReservationIcon from '@mui/icons-material/EventAvailable';
import CustomerIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';
import AiIcon from '@mui/icons-material/EmojiObjects';
import RestaurantIcon from '@mui/icons-material/Restaurant';
import SpaIcon from '@mui/icons-material/Spa';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import BookingDemo from '../components/BookingDemo';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
}> = ({ icon, title, description }) => (
  <Paper elevation={2} sx={{ p: 3, height: '100%' }}>
    {icon}
    <Typography variant="h6" gutterBottom>
      {title}
    </Typography>
    <Typography>{description}</Typography>
  </Paper>
);

const IndustryUseCase: React.FC<{
  industry: string;
  description: string;
  icon: React.ReactNode;
}> = ({ industry, description, icon }) => (
  <Paper sx={{ p: 3, mb: 2 }}>
    {icon}
    <Typography variant="h6">{industry}</Typography>
    <Typography>{description}</Typography>
  </Paper>
);

const Features: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Features
      </Typography>

      <Typography variant="body1" sx={{ mb: 4 }}>
        ReserveIQ offers a comprehensive suite of AI-powered tools designed to
        streamline operations, enhance customer experiences, and boost revenue
        for service-based businesses.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={3}>
          <FeatureItem
            icon={<ReservationIcon fontSize="large" color="primary" />}
            title="Smart Reservations"
            description="Manage bookings efficiently and optimize your capacity"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FeatureItem
            icon={<CustomerIcon fontSize="large" color="primary" />}
            title="Customer Profiling"
            description="Understand your customers better and personalize their experience"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FeatureItem
            icon={<ScheduleIcon fontSize="large" color="primary" />}
            title="Employee Scheduling"
            description="Streamline staff management and improve operational efficiency"
          />
        </Grid>
        <Grid item xs={12} md={3}>
          <FeatureItem
            icon={<AiIcon fontSize="large" color="primary" />}
            title="AI-Powered Insights"
            description="Leverage advanced machine learning for predictive analytics, personalized recommendations, and data-driven decision making"
          />
        </Grid>
      </Grid>

      <BookingDemo />

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Industry-Specific Solutions
      </Typography>
      <IndustryUseCase
        industry="Restaurants"
        description="Optimize table turnover, manage reservations across multiple platforms, and personalize dining experiences."
        icon={<RestaurantIcon fontSize="large" color="primary" />}
      />
      <IndustryUseCase
        industry="Salons & Spas"
        description="Efficiently schedule appointments, manage stylist availability, and provide personalized service recommendations."
        icon={<SpaIcon fontSize="large" color="primary" />}
      />
      <IndustryUseCase
        industry="Fitness Centers"
        description="Manage class bookings, optimize instructor schedules, and provide personalized fitness plans."
        icon={<FitnessCenterIcon fontSize="large" color="primary" />}
      />

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Feature Details
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand Reservation Management details"
        >
          <Typography variant="h6">Reservation Management</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Our advanced reservation system allows you to manage bookings across
            multiple channels, send automated confirmations and reminders, and
            optimize your seating arrangements.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand Customer Profiling details"
        >
          <Typography variant="h6">Customer Profiling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Build detailed customer profiles with preferences, visit history,
            and feedback. Use this data to provide personalized experiences and
            targeted marketing campaigns.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand Employee Scheduling details"
        >
          <Typography variant="h6">Employee Scheduling</Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Create optimal staff schedules based on forecasted demand, employee
            availability, and skills. Reduce overtime costs and improve employee
            satisfaction with fair and efficient scheduling.
          </Typography>
        </AccordionDetails>
      </Accordion>

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        ReserveIQ vs Competitors
      </Typography>
      <TableContainer component={Paper}>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Features</TableCell>
              <TableCell>ReserveIQ</TableCell>
              <TableCell>Competitor A</TableCell>
              <TableCell>Competitor B</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>Smart Reservations</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Customer Profiling</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Employee Scheduling</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>-</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>AI-Powered Insights</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Predictive Analytics</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>-</TableCell>
              <TableCell>-</TableCell>
            </TableRow>
            <TableRow>
              <TableCell>Real-time Optimization</TableCell>
              <TableCell>✓</TableCell>
              <TableCell>-</TableCell>
              <TableCell>✓</TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand question about business types"
        >
          <Typography>
            Is ReserveIQ suitable for all types of businesses?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ReserveIQ is designed to be versatile and can be customized for
            various customer-centric businesses, including restaurants, salons,
            spas, and more.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand question about integrations"
        >
          <Typography>
            Can I integrate ReserveIQ with my existing systems?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            Yes, ReserveIQ offers API integrations with many popular POS
            systems, payment gateways, and marketing tools. Our team can assist
            you with custom integrations if needed.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-label="Expand question about data privacy"
        >
          <Typography>
            How does ReserveIQ ensure data privacy and security?
          </Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
            ReserveIQ employs state-of-the-art encryption and follows strict
            data protection protocols. We are GDPR compliant and never share
            your data with third parties without explicit consent.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Box sx={{ mt: 6, textAlign: 'center' }}>
        <Button variant="contained" color="primary" size="large">
          Start Your Free Trial
        </Button>
      </Box>
    </Container>
  );
};

export default Features;
