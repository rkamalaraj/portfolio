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
import FavoriteIcon from '@mui/icons-material/Favorite';
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

const ExperienceCard = styled(Card)(({ theme }) => ({
  marginBottom: theme.spacing(6),
  overflow: 'visible',
  position: 'relative',
  borderRadius: theme.spacing(2),
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  '&:hover': {
    transform: 'translateX(8px)',
    boxShadow: '0 12px 40px rgba(26, 43, 74, 0.15)',
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#b8d4e8',
  color: theme.palette.primary.dark,
  fontWeight: 500,
  margin: theme.spacing(0.5),
  transition: 'all 0.3s ease',
  '&:hover': {
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.background.default,
    transform: 'translateY(-2px)',
  },
}));

const MemoryBox = styled(Paper)(({ theme }) => ({
  backgroundColor: 'rgba(184, 212, 232, 0.3)',
  padding: theme.spacing(2.5),
  marginTop: theme.spacing(3),
  borderRadius: theme.spacing(2),
  borderLeft: `4px solid ${theme.palette.primary.main}`,
  position: 'relative',
}));

const Experience = () => {
  const { data } = usePortfolioViewModel();

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
            Experience
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
            my professional journey and leadership roles
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 4, pb: 10 }}>
        {data.experiences.map((experience, index) => (
          <ExperienceCard 
            key={experience.id}
            elevation={3}
            sx={{
              animation: `slideIn 0.6s ease-out ${index * 0.15}s both`,
              '@keyframes slideIn': {
                from: { opacity: 0, transform: 'translateX(-30px)' },
                to: { opacity: 1, transform: 'translateX(0)' },
              },
            }}
          >
            <Grid container>
              <Grid item xs={12} md={4}>
                <Box
                  component="img"
                  src={`/images/experience/${experience.id}.jpg`}
                  alt={`${experience.company} experience`}
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    borderRadius: { xs: '16px 16px 0 0', md: '16px 0 0 16px' },
                    display: 'block',
                  }}
                />
              </Grid>

              <Grid item xs={12} md={8}>
                <CardContent sx={{ p: 4 }}>
                  <Typography 
                    variant="h4" 
                    sx={{ 
                      mb: 1,
                      color: 'primary.main',
                      fontWeight: 700,
                    }}
                  >
                    {experience.company}
                  </Typography>
                  
                  <Typography 
                    variant="h6" 
                    sx={{ 
                      mb: 1,
                      color: 'text.primary',
                      fontWeight: 500,
                    }}
                  >
                    {experience.role}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 3,
                      color: 'text.secondary',
                      fontStyle: 'italic',
                    }}
                  >
                    {experience.period} | {experience.location}
                  </Typography>

                  <Box sx={{ mb: 3 }}>
                    {experience.responsibilities.map((responsibility, idx) => (
                      <Box 
                        key={idx}
                        sx={{ 
                          display: 'flex',
                          mb: 1.5,
                          alignItems: 'flex-start',
                        }}
                      >
                        <Box
                          sx={{
                            width: 6,
                            height: 6,
                            borderRadius: '50%',
                            backgroundColor: 'primary.main',
                            mt: 1,
                            mr: 2,
                            flexShrink: 0,
                          }}
                        />
                        <Typography variant="body1">
                          {responsibility}
                        </Typography>
                      </Box>
                    ))}
                  </Box>

                  <Box sx={{ mb: 2 }}>
                    <Typography 
                      variant="subtitle2" 
                      sx={{ 
                        mb: 1.5,
                        fontWeight: 600,
                        color: 'primary.main',
                      }}
                    >
                      Skills:
                    </Typography>
                    <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                      {experience.skills.map((skill) => (
                        <SkillChip 
                          key={skill}
                          label={skill}
                          size="small"
                        />
                      ))}
                    </Box>
                  </Box>

                  {experience.favoriteMemory && (
                    <MemoryBox elevation={0}>
                      <Box sx={{ display: 'flex', alignItems: 'flex-start', gap: 1 }}>
                        <FavoriteIcon 
                          sx={{ 
                            color: 'primary.main',
                            fontSize: 22,
                            mt: 0.2,
                            flexShrink: 0,
                          }} 
                        />
                        <Box>
                          <Typography 
                            variant="subtitle2" 
                            sx={{ 
                              fontWeight: 600,
                              color: 'primary.main',
                              mb: 0.5,
                            }}
                          >
                            Favorite Memory
                          </Typography>
                          <Typography 
                            variant="body2"
                            sx={{ 
                              fontStyle: 'italic',
                              color: 'text.primary',
                            }}
                          >
                            {experience.favoriteMemory}
                          </Typography>
                        </Box>
                      </Box>
                    </MemoryBox>
                  )}
                </CardContent>
              </Grid>
            </Grid>
          </ExperienceCard>
        ))}
      </Container>
    </>
  );
};

export default Experience;