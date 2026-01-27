import React from 'react';
import { Box, Container, Typography, IconButton, Link, Grid } from '@mui/material';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import EmailIcon from '@mui/icons-material/Email';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import { styled } from '@mui/material/styles';

const FooterContainer = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  padding: theme.spacing(6, 0, 4),
  marginTop: theme.spacing(10),
  position: 'relative',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -50,
    left: 0,
    right: 0,
    height: 50,
    background: `linear-gradient(to bottom, transparent, ${theme.palette.primary.main})`,
  },
}));

const FooterLink = styled(Link)(({ theme }) => ({
  color: theme.palette.background.default,
  textDecoration: 'none',
  transition: 'all 0.3s ease',
  '&:hover': {
    color: '#b8d4e8',
    textDecoration: 'underline',
  },
}));

const Footer = () => {
  return (
    <FooterContainer>
      <Container maxWidth="lg">
        <Grid container spacing={4} alignItems="center">
          <Grid item xs={12} md={6}>
            <Typography 
              variant="h4" 
              sx={{ 
                fontFamily: '"Montserrat", sans-serif',
                fontWeight: 700,
                mb: 2,
                color: 'background.default',
              }}
            >
              Raika Kamalaraj
            </Typography>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <LocationOnIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <Typography variant="body1">
                Boston, MA | Rochester, NY
              </Typography>
            </Box>
            
            <Box sx={{ display: 'flex', alignItems: 'center', mb: 1 }}>
              <EmailIcon sx={{ mr: 1, fontSize: '1.2rem' }} />
              <FooterLink href="mailto:rsk8463@rit.edu">
                rsk8463@rit.edu
              </FooterLink>
            </Box>
          </Grid>

          <Grid item xs={12} md={6} sx={{ textAlign: { xs: 'left', md: 'right' } }}>
            <IconButton
              component="a"
              href="https://www.linkedin.com/in/raika-kamalaraj/"
              target="_blank"
              rel="noopener noreferrer"
              sx={{ 
                color: 'background.default',
                '&:hover': {
                  color: '#b8d4e8',
                  transform: 'scale(1.1)',
                },
                transition: 'all 0.3s ease',
              }}
            >
              <LinkedInIcon sx={{ fontSize: '2rem' }} />
            </IconButton>
          </Grid>
        </Grid>

        <Box sx={{ borderTop: '1px solid rgba(250, 248, 245, 0.2)', mt: 4, pt: 3, textAlign: 'center' }}>
          <Typography variant="body2" sx={{ opacity: 0.8 }}>
            © {new Date().getFullYear()} Raika Kamalaraj. Designed with care.
          </Typography>
        </Box>
      </Container>
    </FooterContainer>
  );
};

export default Footer;
