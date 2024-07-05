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
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import ReservationIcon from '@mui/icons-material/EventAvailable';
import CustomerIcon from '@mui/icons-material/People';
import ScheduleIcon from '@mui/icons-material/Schedule';

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

const Features: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center">
        Features
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <FeatureItem
            icon={<ReservationIcon fontSize="large" color="primary" />}
            title="Smart Reservations"
            description="Manage bookings efficiently and optimize your capacity"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureItem
            icon={<CustomerIcon fontSize="large" color="primary" />}
            title="Customer Profiling"
            description="Understand your customers better and personalize their experience"
          />
        </Grid>
        <Grid item xs={12} md={4}>
          <FeatureItem
            icon={<ScheduleIcon fontSize="large" color="primary" />}
            title="Employee Scheduling"
            description="Streamline staff management and improve operational efficiency"
          />
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom>
        Feature Details
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
          </TableBody>
        </Table>
      </TableContainer>

      <Typography variant="h4" gutterBottom sx={{ mt: 6 }}>
        Frequently Asked Questions
      </Typography>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
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
    </Container>
  );
};

export default Features;
