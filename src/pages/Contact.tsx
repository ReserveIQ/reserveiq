import React, { useState } from 'react';
import {
  Container,
  Typography,
  Grid,
  TextField,
  Button,
  Box,
} from '@mui/material';

interface FormData {
  name: string;
  email: string;
  message: string;
}

const Contact: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prevState) => ({ ...prevState, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Handle form submission logic here
    console.log(formData);
  };

  return (
    <Container maxWidth="lg" sx={{ mt: 4 }}>
      <Grid container spacing={4}>
        <Grid item xs={12} md={6}>
          <Box
            component="img"
            src="/path-to-restaurant-image.jpg"
            alt="Restaurant Illustration"
            sx={{ width: '100%', height: 'auto' }}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <Typography variant="h2" component="h1" gutterBottom>
            Get in Touch
          </Typography>
          <Typography variant="subtitle1" paragraph>
            Discover the power of AI reservations. Reach out to us for more
            information.
          </Typography>
          <form onSubmit={handleSubmit}>
            <TextField
              fullWidth
              label="Name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              margin="normal"
              required
              variant="filled"
              InputProps={{
                sx: { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            />
            <TextField
              fullWidth
              label="Email"
              name="email"
              type="email"
              value={formData.email}
              onChange={handleChange}
              margin="normal"
              required
              variant="filled"
              InputProps={{
                sx: { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            />
            <TextField
              fullWidth
              label="Message"
              name="message"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              margin="normal"
              required
              variant="filled"
              InputProps={{
                sx: { backgroundColor: 'rgba(255, 255, 255, 0.1)' },
              }}
            />
            <Button
              type="submit"
              variant="contained"
              color="primary"
              fullWidth
              sx={{ mt: 2 }}
            >
              Send
            </Button>
          </form>
        </Grid>
      </Grid>
    </Container>
  );
};

export default Contact;
