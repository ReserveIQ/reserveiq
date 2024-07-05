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
  Avatar,
} from '@mui/material';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import NotificationsActiveIcon from '@mui/icons-material/NotificationsActive';
import BarChartIcon from '@mui/icons-material/BarChart';
import PeopleIcon from '@mui/icons-material/People';
import BookingDemo from '../components/BookingDemo';

const FeatureItem: React.FC<{
  icon: React.ReactNode;
  title: string;
  description: string;
  image: string;
}> = ({ icon, title, description, image }) => (
  <Paper
    elevation={3}
    sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}
  >
    <Box display="flex" alignItems="center" mb={2}>
      {icon}
      <Typography variant="h6" ml={1}>
        {title}
      </Typography>
    </Box>
    <Typography variant="body2" mb={2}>
      {description}
    </Typography>
    <Box
      component="img"
      src={image}
      alt={title}
      sx={{ width: '100%', height: 'auto', borderRadius: 1 }}
    />
  </Paper>
);

const Features: React.FC = () => {
  return (
    <Container maxWidth="lg">
      <Typography variant="h2" component="h1" gutterBottom align="center">
        AI-Powered Capabilities of ReserveIQ
      </Typography>
      <Typography variant="subtitle1" align="center" paragraph>
        Discover how our advanced AI can simplify and streamline your
        reservation processes.
      </Typography>

      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={6}>
          <FeatureItem
            icon={<CalendarTodayIcon fontSize="large" color="primary" />}
            title="Automated Scheduling"
            description="Our AI automates the scheduling process, ensuring efficient and conflict-free bookings."
            image="/path-to-calendar-image.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureItem
            icon={<NotificationsActiveIcon fontSize="large" color="primary" />}
            title="Smart Reminders"
            description="Never miss an appointment with smart reminders sent to both customers and staff."
            image="/path-to-smartphone-image.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureItem
            icon={<BarChartIcon fontSize="large" color="primary" />}
            title="Real-Time Analytics"
            description="Get insights into your business performance with real-time analytics and reporting."
            image="/path-to-analytics-image.jpg"
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <FeatureItem
            icon={<PeopleIcon fontSize="large" color="primary" />}
            title="Customer Management"
            description="Efficiently manage customer information and preferences to enhance their experience."
            image="/path-to-customer-management-image.jpg"
          />
        </Grid>
      </Grid>

      <Typography variant="h4" gutterBottom>
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
        What Our Customers Say
      </Typography>
      <Grid container spacing={4} sx={{ mb: 6 }}>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src="/path-to-sarah-avatar.jpg"
                alt="Sarah Thompson"
                sx={{ width: 60, height: 60, mr: 2 }}
              />
              <Typography variant="h6">Sarah Thompson</Typography>
            </Box>
            <Typography variant="body2">
              "ReserveIQ has transformed our booking process. It's efficient and
              easy to use!"
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src="/path-to-john-avatar.jpg"
                alt="John Doe"
                sx={{ width: 60, height: 60, mr: 2 }}
              />
              <Typography variant="h6">John Doe</Typography>
            </Box>
            <Typography variant="body2">
              "The AI features save us so much time and reduce errors
              significantly."
            </Typography>
          </Paper>
        </Grid>
        <Grid item xs={12} md={4}>
          <Paper
            elevation={3}
            sx={{ p: 3, height: '100%', bgcolor: 'background.paper' }}
          >
            <Box display="flex" alignItems="center" mb={2}>
              <Avatar
                src="/path-to-emily-avatar.jpg"
                alt="Emily Johnson"
                sx={{ width: 60, height: 60, mr: 2 }}
              />
              <Typography variant="h6">Emily Johnson</Typography>
            </Box>
            <Typography variant="body2">
              "Our customers love the automated reminders. It's a game-changer!"
            </Typography>
          </Paper>
        </Grid>
      </Grid>

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

      <Box textAlign="center" sx={{ mt: 6, mb: 4 }}>
        <Typography variant="h4" gutterBottom>
          Ready to Transform Your Reservation Process?
        </Typography>
        <Typography variant="subtitle1" paragraph>
          Schedule a demo or sign up today to see how ReserveIQ can benefit your
          business.
        </Typography>
        <Button variant="contained" color="primary" sx={{ mr: 2 }}>
          Schedule a Demo
        </Button>
        <Button variant="outlined" color="primary">
          Sign Up
        </Button>
      </Box>
    </Container>
  );
};

export default Features;
