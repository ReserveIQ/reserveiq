import React, { useState } from 'react';
import { Paper, Typography, Button, List, ListItem } from '@mui/material';

const BookingDemo: React.FC = () => {
  const [bookings, setBookings] = useState<
    { time: Date; optimized: boolean }[]
  >([]);

  const addBooking = () => {
    setBookings([...bookings, { time: new Date(), optimized: true }]);
  };

  return (
    <Paper sx={{ p: 3, mt: 4 }}>
      <Typography variant="h6">AI Booking Optimizer Demo</Typography>
      <Button
        onClick={addBooking}
        variant="contained"
        color="primary"
        sx={{ my: 2 }}
      >
        Add Booking
      </Button>
      <List>
        {bookings.map((booking, index) => (
          <ListItem key={index}>
            Booking at {booking.time.toLocaleTimeString()} - Optimized
          </ListItem>
        ))}
      </List>
    </Paper>
  );
};

export default BookingDemo;
