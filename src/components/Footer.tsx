import React from 'react';
import { Box, Typography, IconButton, Container } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

const Footer: React.FC = () => {
  return (
    <Box component="footer" sx={{ bgcolor: '#34495e', color: 'white', py: 3 }}>
      <Container maxWidth="lg">
        <Typography variant="body1" align="center">
          &copy; {new Date().getFullYear()} ReserveIQ. All rights reserved.
        </Typography>
        <Box sx={{ mt: 2, textAlign: 'center' }}>
          <IconButton
            color="inherit"
            aria-label="Facebook"
            href="https://facebook.com/reserveiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <FacebookIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="Twitter"
            href="https://twitter.com/reserveiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <TwitterIcon />
          </IconButton>
          <IconButton
            color="inherit"
            aria-label="LinkedIn"
            href="https://linkedin.com/company/reserveiq"
            target="_blank"
            rel="noopener noreferrer"
          >
            <LinkedInIcon />
          </IconButton>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
