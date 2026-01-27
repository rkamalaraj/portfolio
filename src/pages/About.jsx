import React from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Paper,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CameraAltIcon from '@mui/icons-material/CameraAlt';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import BrushIcon from '@mui/icons-material/Brush';
import PublicIcon from '@mui/icons-material/Public';
import { usePortfolioViewModel } from '../viewmodels/PortfolioViewModel';

const PageHeader = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  padding: theme.spacing(8, 0, 6),
  marginBottom: theme.spacing(6),
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

const StorySection = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(4),
  marginBottom: theme.spacing(4),
  borderRadius: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 4px 20px rgba(26, 43, 74, 0.08)',
}));

const PolaroidCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(2),
  backgroundColor: theme.palette.background.paper,
  boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  '&:hover': {
    transform: 'scale(1.02)',
    boxShadow: '0 15px 40px rgba(0,0,0,0.2)',
  },
}));

const WashiTape = styled(Box)(({ theme }) => ({
  position: 'absolute',
  top: -15,
  left: '10%',
  width: '80px',
  height: '30px',
  backgroundColor: 'rgba(139, 115, 85, 0.3)',
  transform: 'rotate(-5deg)',
  zIndex: 10,
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

const HobbyCard = styled(Paper)(({ theme }) => ({
  padding: theme.spacing(3),
  borderRadius: theme.spacing(2),
  backgroundColor: '#b8d4e8',
  transition: 'all 0.3s ease',
  height: '100%',
  '&:hover': {
    transform: 'translateY(-8px)',
    boxShadow: '0 12px 30px rgba(26, 43, 74, 0.15)',
  },
}));

const FunFactBox = styled(Box)(({ theme }) => ({
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.background.default,
  padding: theme.spacing(4),
  borderRadius: theme.spacing(2),
  textAlign: 'center',
  marginTop: theme.spacing(6),
  position: 'relative',
  overflow: 'hidden',
  '&::before': {
    content: '""',
    position: 'absolute',
    top: -50,
    right: -50,
    width: 200,
    height: 200,
    borderRadius: '50%',
    backgroundColor: 'rgba(184, 212, 232, 0.1)',
  },
}));

const About = () => {
  const { data } = usePortfolioViewModel();

  const hobbyIcons = {
    'scrapbooking': <BrushIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    'reading': <MenuBookIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    'photography': <CameraAltIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
    'clay crafting': <BrushIcon sx={{ fontSize: 48, color: 'primary.main' }} />,
  };

  return (
    <>
      {/* Page Header */}
      <PageHeader>
        <Container maxWidth="lg">
          <Typography 
            variant="h1" 
            sx={{ 
              textAlign: 'center',
              animation: 'fadeIn 0.8s ease-out',
              '@keyframes fadeIn': {
                from: { opacity: 0 },
                to: { opacity: 1 },
              },
            }}
          >
            Who Even Am I?!
          </Typography>
          <Typography 
            variant="h6" 
            sx={{ 
              textAlign: 'center',
              mt: 2,
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 300,
            }}
          >
            this is me & what i do
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 4, pb: 10 }}>
        {/* Hi Again Part - Grid Layout */}
        <StorySection elevation={2}>
          <Grid container spacing={4}>
            {/* Left side - Polaroid Photos */}
            <Grid item xs={12} md={4}>
              <Box sx={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
                {/* First Polaroid */}
                <PolaroidCard elevation={3}>
                  <WashiTape />
                  <Box
                    component="img"
                    src="/images/about/photo1.jpg"
                    alt="About photo 1"
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
                    hanging out in my hometown
                  </Typography>
                </PolaroidCard>

                {/* Second Polaroid */}
                <PolaroidCard elevation={3} sx={{ transform: 'rotate(2deg)' }}>
                  <WashiTape sx={{ left: '60%', transform: 'rotate(5deg)' }} />
                  <Box
                    component="img"
                    src="/images/about/photo2.jpg"
                    alt="About photo 2"
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
                    studying abroad in croatia!
                  </Typography>
                </PolaroidCard>
              </Box>
            </Grid>

            {/* Right side - Description */}
            <Grid item xs={12} md={8}>
              <Typography 
                variant="h3" 
                sx={{ 
                  mb: 3,
                  color: 'primary.main',
                  fontWeight: 600,
                }}
              >
                Hi Again!
              </Typography>

              <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                My name is Raika and I am constantly drawing inspiration from the world around me. Since I was a kid, I have loved travelling. This is an interest my parents also share so I have been across the globe thanks to them. I was also able to study abroad during college in Croatia, which allowed me to grow and learn how to pursue this dream independently. While travelling, I love noticing architecture both new and old, fashion of the locals, the way food is made and presented.
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Through this art of noticing things, I began to photograph and scrapbook what I saw. When I began taking photos, I tend to focus on the angle of a building, the light and details within the architecture. As I noticed this becoming a trend in my photography, I decided I needed to shift perspective and began trying to capture human emotions in the places I go, which is my current goal!
              </Typography>
              
              <Typography variant="body1" paragraph sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                When I studied abroad, I found myself consuming all these experiences every weekend, but not taking the time to reflect on all these things happening around me. I learned how important it is to stay grounded and present in everything I do. Through scrapbooking, I took things from my travels and composed pages and pages worth of collages, reflections, doodles, and trip planning. It's a hobby I've carried over into my everyday life because it gives me an outlet to truly understand myself, my life, and also try new things whether it's a new collage style or other frame for my creativity.
              </Typography>
              
              <Typography variant="body1" sx={{ fontSize: '1.15rem', lineHeight: 1.8 }}>
                Whenever given the opportunity, I try to expand my palette of crafting. I find that working with my hands brings me peace of mind and also broadens the ways I think about a problem and possible solutions. Recently, I've been using air dry clay to make jewelry trays, stress stones, and other trinkets. When learning how to use air dry clay, I faced the learning curve of picking up a new skill, and tried over and over again to make my idea into a product. The fun thing about air dry clay is once you get the hang of it, you get the satisfaction of defeating a new learning curve as well as a fun trinket! My next endeavors are to begin learning watercolor and how to make things with real clay (you can't make plates and bowls with air dry clay, it's a safety hazard), so stay tuned for that :)
              </Typography>
            </Grid>
          </Grid>
        </StorySection>

        {/* Hobbies Section */}
        <Box sx={{ mb: 6 }}>
          <Typography 
            variant="h3" 
            sx={{ 
              mb: 4,
              textAlign: 'center',
              color: 'primary.main',
            }}
          >
            What I Do In My Freetime! 
          </Typography>
          
          <Grid container spacing={3}>
            {data.about.hobbies.map((hobby, index) => (
              <Grid item xs={12} sm={6} md={3} key={hobby}>
                <HobbyCard 
                  elevation={2}
                  sx={{
                    animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                    '@keyframes fadeInUp': {
                      from: { opacity: 0, transform: 'translateY(20px)' },
                      to: { opacity: 1, transform: 'translateY(0)' },
                    },
                  }}
                >
                  <Box sx={{ textAlign: 'center' }}>
                    {hobbyIcons[hobby] || <BrushIcon sx={{ fontSize: 48, color: 'primary.main' }} />}
                    <Typography 
                      variant="h6" 
                      sx={{ 
                        mt: 2,
                        fontWeight: 600,
                        color: 'primary.dark',
                        textTransform: 'capitalize',
                      }}
                    >
                      {hobby}
                    </Typography>
                  </Box>
                </HobbyCard>
              </Grid>
            ))}
          </Grid>
        </Box>

        {/* Fun Fact */}
        <FunFactBox>
          <PublicIcon sx={{ fontSize: 80, mb: 2, position: 'relative', zIndex: 1 }} />
          <Typography 
            variant="h4" 
            sx={{ 
              fontWeight: 600,
              mb: 1,
              position: 'relative',
              zIndex: 1,
            }}
          >
            Fun Fact!
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              fontFamily: '"Source Sans Pro", sans-serif',
              fontWeight: 400,
              position: 'relative',
              zIndex: 1,
            }}
          >
            {data.about.funFact}
          </Typography>
        </FunFactBox>
      </Container>
    </>
  );
};

export default About;