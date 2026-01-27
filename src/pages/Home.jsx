import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import StarIcon from '@mui/icons-material/Star';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import SchoolIcon from '@mui/icons-material/School';
import { usePortfolioViewModel } from '../viewmodels/PortfolioViewModel';

const HeroSection = styled(Box)(({ theme }) => ({
  minHeight: '50vh',
  display: 'flex',
  alignItems: 'center',
  background: `linear-gradient(135deg, ${theme.palette.primary.main} 0%, #3d5a80 100%)`,
  color: theme.palette.background.default,
  padding: theme.spacing(8, 0),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    bottom: 0,
    backgroundImage: 'url("data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E")',
  },
}));

const PolaroidCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  transform: 'rotate(-2deg)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'rotate(0deg) scale(1.02)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
  },
}));

const ActivityCard = styled(Card)(({ theme }) => ({
  height: '100%',
  backgroundColor: '#b8d4e8',
  position: 'relative',
  overflow: 'visible',
  transition: 'all 0.3s ease',
  '&:hover': {
    transform: 'translateY(-8px)',
    '& .icon-circle': {
      transform: 'scale(1.1) rotate(5deg)',
    },
  },
}));

const IconCircle = styled(Box)(({ theme }) => ({
  width: 80,
  height: 80,
  borderRadius: '50%',
  backgroundColor: theme.palette.primary.main,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
  top: -40,
  left: '50%',
  transform: 'translateX(-50%)',
  boxShadow: '0 4px 20px rgba(26, 43, 74, 0.3)',
  transition: 'all 0.3s ease',
}));

const WashiTape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -15,
  left: '10%',
  width: '80px',
  height: '30px',
  backgroundColor: 'rgba(139, 115, 85, 0.3)',
  transform: 'rotate(-5deg)',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: 5,
    left: 0,
    right: 0,
    height: '1px',
    backgroundColor: 'rgba(139, 115, 85, 0.5)',
  },
}));

const Home = () => {
  const { data } = usePortfolioViewModel();

  const getIcon = (iconName) => {
    const iconProps = { sx: { fontSize: 40, color: 'white' } };
    switch (iconName) {
      case 'lightbulb':
        return <LightbulbIcon {...iconProps} />;
      case 'star':
        return <StarIcon {...iconProps} />;
      case 'phone':
        return <PhoneAndroidIcon {...iconProps} />;
      default:
        return <StarIcon {...iconProps} />;
    }
  };

  return (
    <>
      {/* Hero Section with Header Image Placeholder */}
      <HeroSection>
        <Container maxWidth="lg" sx={{ position: 'relative', zIndex: 1 }}>
          <Typography 
            variant="h1" 
            sx={{ 
              mb: 2,
              textAlign: { xs: 'center', md: 'left' },
              animation: 'fadeInUp 0.8s ease-out',
              '@keyframes fadeInUp': {
                from: { opacity: 0, transform: 'translateY(20px)' },
                to: { opacity: 1, transform: 'translateY(0)' },
              },
            }}
          >
            Welcome, I'm Raika!
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 300,
              maxWidth: 600,
              textAlign: { xs: 'center', md: 'left' },
              animation: 'fadeInUp 0.8s ease-out 0.2s both',
            }}
          >
            A Web & Mobile Computing Student at Rochester Institute of Technology(RIT)
          </Typography>
        </Container>
      </HeroSection>

      <Container maxWidth="lg" sx={{ py: 8 }}>
        {/* About Me Section with Polaroid */}
        <Grid container spacing={6} alignItems="center" sx={{ mb: 10 }}>
          <Grid item xs={12} md={5}>
            <PolaroidCard elevation={3}>
              <WashiTape />
              <Box
                component="img"
                src="/images/me_homepage.jpg"
                alt="Raika Kamalaraj"
                sx={{
                  width: '100%',
                  aspectRatio: '3/4',
                  objectFit: 'cover',
                  display: 'block',
                  marginBottom: 2,
                }}
              />
              <Typography 
                variant="caption" 
                sx={{ 
                  textAlign: 'center',
                  display: 'block',
                  fontFamily: '"Montserrat", sans-serif',
                  color: 'text.secondary',
                }}
              >
                me!
              </Typography>
            </PolaroidCard>
          </Grid>

          <Grid item xs={12} md={7}>
            <Typography 
              variant="h2" 
              sx={{ 
                mb: 3,
                background: `linear-gradient(135deg, ${data.personalInfo.name} 0%, #3d5a80 100%)`,
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent',
                backgroundClip: 'text',
              }}
            >
              About Me:
            </Typography>
            <Typography variant="body1" paragraph>
              {data.about.short}
            </Typography>
            <Typography variant="body1" paragraph>
              I'm especially drawn to work that blends creativity with problem-solving and I love learning from new environments and perspectives, which is one of the reasons I enjoy traveling whenever I get the chance.
            </Typography>
            <Typography variant="body1">
              Outside of school, I'm a member of Alpha Sigma Alpha, where I get to give back through volunteering to my community. When I'm not working, I love scrapbooking, reading, and recently I've been making small trinkets out of clay!
            </Typography>
          </Grid>
        </Grid>

        {/* Recently Section */}
        <Box sx={{ mb: 10 }}>
          <Typography 
            variant="h2" 
            sx={{ 
              mb: 6, 
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            Recently…
          </Typography>
          
          <Grid container spacing={4}>
            {data.recentActivities.map((activity, index) => (
              <Grid item xs={12} md={4} key={activity.id}>
                <ActivityCard 
                  elevation={3}
                  sx={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.2}s both`,
                    '@keyframes fadeInUp': {
                      from: { opacity: 0, transform: 'translateY(30px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  <IconCircle className="icon-circle">
                    {getIcon(activity.icon)}
                  </IconCircle>
                  
                  <CardContent sx={{ pt: 6 }}>
                    <Typography 
                      variant="h5" 
                      sx={{ 
                        mb: 1,
                        fontWeight: 600,
                        color: 'primary.main',
                        textAlign: 'center',
                      }}
                    >
                      {activity.title}
                    </Typography>
                    
                    <Typography 
                      variant="subtitle1" 
                      sx={{ 
                        mb: 1,
                        textAlign: 'center',
                        color: 'text.secondary',
                        fontWeight: 500,
                      }}
                    >
                      {activity.subtitle}
                    </Typography>
                    
                    <Typography 
                      variant="body2" 
                      sx={{ 
                        mb: 2,
                        textAlign: 'center',
                        color: 'primary.dark',
                        fontWeight: 500,
                      }}
                    >
                      {activity.period}
                    </Typography>
                    
                    <Typography variant="body2" sx={{ textAlign: 'center' }}>
                      {activity.description}
                    </Typography>
                  </CardContent>
                </ActivityCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Education Section */}
        <Box sx={{ textAlign: 'center', py: 6 }}>
          <SchoolIcon sx={{ fontSize: 60, color: 'primary.main', mb: 2 }} />
          <Typography variant="h3" sx={{ mb: 2, color: 'primary.main' }}>
            Education
          </Typography>
          <Typography variant="h5" sx={{ mb: 1, fontWeight: 600 }}>
            {data.education.school}
          </Typography>
          <Typography variant="body1" sx={{ mb: 1 }}>
            {data.education.degree}
          </Typography>
          <Typography variant="body1" sx={{ color: 'text.secondary', mb: 2 }}>
            {data.education.graduation} | GPA: {data.education.gpa}
          </Typography>
          <Box sx={{ display: 'flex', gap: 1, justifyContent: 'center', flexWrap: 'wrap' }}>
            {data.education.deansList.map((semester) => (
              <Chip 
                key={semester}
                label={`Dean's List: ${semester}`}
                color="primary"
                variant="outlined"
              />
            ))}
          </Box>
        </Box>
      </Container>
    </>
  );
};

export default Home;