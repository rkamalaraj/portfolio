import React, { useState } from 'react';
import {
  Container,
  Box,
  Typography,
  Grid,
  Card,
  CardContent,
  Chip,
  Dialog,
  DialogContent,
  DialogTitle,
  IconButton,
  Button,
} from '@mui/material';
import { styled } from '@mui/material/styles';
import CloseIcon from '@mui/icons-material/Close';
import GitHubIcon from '@mui/icons-material/GitHub';
import LaunchIcon from '@mui/icons-material/Launch';
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

const ProjectCard = styled(Card)(({ theme }) => ({
  cursor: 'pointer',
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  transition: 'all 0.4s cubic-bezier(0.4, 0, 0.2, 1)',
  position: 'relative',
  overflow: 'hidden',
  '&:hover': {
    transform: 'translateY(-12px) scale(1.02)',
    boxShadow: '0 20px 40px rgba(26, 43, 74, 0.2)',
    '& .project-image': {
      transform: 'scale(1.1)',
    },
    '&::after': {
      opacity: 1,
    },
  },
  '&::after': {
    content: '"Click to view details"',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    backgroundColor: 'rgba(26, 43, 74, 0.9)',
    color: 'white',
    padding: theme.spacing(1.5, 3),
    borderRadius: theme.spacing(1),
    opacity: 0,
    transition: 'opacity 0.3s ease',
    zIndex: 2,
    pointerEvents: 'none',
    fontWeight: 600,
    fontSize: '0.9rem',
  },
}));

const SkillChip = styled(Chip)(({ theme }) => ({
  backgroundColor: '#b8d4e8',
  color: theme.palette.primary.dark,
  fontWeight: 500,
  margin: theme.spacing(0.5),
  fontSize: '0.85rem',
}));

const LinkButton = styled(Button)(({ theme }) => ({
  borderRadius: theme.spacing(1),
  textTransform: 'none',
  fontWeight: 500,
  padding: theme.spacing(1, 2.5),
}));

const Projects = () => {
  const { data } = usePortfolioViewModel();
  const [selectedProject, setSelectedProject] = useState(null);

  const handleProjectClick = (project) => {
    setSelectedProject(project);
  };

  const handleClose = () => {
    setSelectedProject(null);
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
            Projects
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
            showcasing my creative and technical work
          </Typography>
        </Container>
      </PageHeader>

      <Container maxWidth="lg" sx={{ py: 4, pb: 10 }}>
        <Grid container spacing={4}>
          {data.projects.map((project, index) => (
            <Grid item xs={12} sm={6} md={4} key={project.id}>
              <ProjectCard 
                elevation={3}
                onClick={() => handleProjectClick(project)}
                sx={{
                  animation: `fadeInUp 0.6s ease-out ${index * 0.1}s both`,
                  '@keyframes fadeInUp': {
                    from: { opacity: 0, transform: 'translateY(30px)' },
                    to: { opacity: 1, transform: 'translateY(0)' },
                  },
                }}
              >
                <Box
                  component="img"
                  src={`/images/projects/${project.id}.jpg`}
                  alt={project.title}
                  className="project-image"
                  sx={{
                    width: '100%',
                    height: 250,
                    objectFit: 'cover',
                    transition: 'transform 0.4s ease',
                    display: 'block',
                  }}
                />

                <CardContent sx={{ flexGrow: 1, p: 3 }}>
                  <Typography 
                    variant="h5" 
                    sx={{ 
                      mb: 1,
                      fontWeight: 600,
                      color: 'primary.main',
                    }}
                  >
                    {project.title}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 1.5,
                      color: 'text.secondary',
                      fontStyle: 'italic',
                    }}
                  >
                    {project.period}
                  </Typography>
                  
                  <Typography 
                    variant="body2" 
                    sx={{ 
                      mb: 2,
                      color: 'text.primary',
                      display: '-webkit-box',
                      WebkitLineClamp: 3,
                      WebkitBoxOrient: 'vertical',
                      overflow: 'hidden',
                    }}
                  >
                    {project.subtitle}
                  </Typography>

                  <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5, mt: 'auto' }}>
                    {project.skills.slice(0, 3).map((skill) => (
                      <SkillChip 
                        key={skill}
                        label={skill}
                        size="small"
                      />
                    ))}
                    {project.skills.length > 3 && (
                      <SkillChip 
                        label={`+${project.skills.length - 3} more`}
                        size="small"
                      />
                    )}
                  </Box>
                </CardContent>
              </ProjectCard>
            </Grid>
          ))}
        </Grid>
      </Container>

      {/* Project Detail Dialog */}
      <Dialog
        open={Boolean(selectedProject)}
        onClose={handleClose}
        maxWidth="md"
        fullWidth
        PaperProps={{
          sx: {
            borderRadius: 3,
            maxHeight: '90vh',
          },
        }}
      >
        {selectedProject && (
          <>
            <DialogTitle sx={{ p: 3, pb: 2 }}>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start' }}>
                <Box>
                  <Typography variant="h4" sx={{ fontWeight: 600, color: 'primary.main', mb: 0.5 }}>
                    {selectedProject.title}
                  </Typography>
                  <Typography variant="body2" sx={{ color: 'text.secondary', fontStyle: 'italic' }}>
                    {selectedProject.period}
                  </Typography>
                </Box>
                <IconButton onClick={handleClose} sx={{ mt: -1, mr: -1 }}>
                  <CloseIcon />
                </IconButton>
              </Box>
            </DialogTitle>

            <DialogContent sx={{ p: 3, pt: 2 }}>
              <Box
                component="img"
                src={`/images/projects/${selectedProject.id}.jpg`}
                alt={selectedProject.title}
                sx={{
                  width: '100%',
                  maxHeight: 400,
                  objectFit: 'cover',
                  borderRadius: 2,
                  mb: 3,
                  display: 'block',
                }}
              />

              <Typography variant="h6" sx={{ mb: 2, fontWeight: 600 }}>
                {selectedProject.subtitle}
              </Typography>

              <Typography variant="body1" paragraph>
                {selectedProject.description}
              </Typography>

              {selectedProject.details && selectedProject.details.length > 0 && (
                <Box sx={{ mb: 3 }}>
                  {selectedProject.details.map((detail, idx) => (
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
                      <Typography variant="body2">
                        {detail}
                      </Typography>
                    </Box>
                  ))}
                </Box>
              )}

              <Box sx={{ mb: 3 }}>
                <Typography 
                  variant="subtitle2" 
                  sx={{ 
                    mb: 1.5,
                    fontWeight: 600,
                    color: 'primary.main',
                  }}
                >
                  Technologies & Skills:
                </Typography>
                <Box sx={{ display: 'flex', flexWrap: 'wrap', gap: 0.5 }}>
                  {selectedProject.skills.map((skill) => (
                    <SkillChip 
                      key={skill}
                      label={skill}
                      size="small"
                    />
                  ))}
                </Box>
              </Box>

              <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
                <LinkButton
                  variant="contained"
                  startIcon={<LaunchIcon />}
                  disabled={!selectedProject.projectLink}
                  href={selectedProject.projectLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  sx={{
                    backgroundColor: selectedProject.projectLink ? 'primary.main' : 'grey.300',
                  }}
                >
                  View Project
                </LinkButton>
                <LinkButton
                  variant="outlined"
                  startIcon={<GitHubIcon />}
                  disabled={!selectedProject.githubLink}
                  href={selectedProject.githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  GitHub
                </LinkButton>
                {(!selectedProject.projectLink || !selectedProject.githubLink) && (
                  <Typography variant="caption" sx={{ alignSelf: 'center', color: 'text.secondary', fontStyle: 'italic' }}>
                    (Add links in project data)
                  </Typography>
                )}
              </Box>
            </DialogContent>
          </>
        )}
      </Dialog>
    </>
  );
};

export default Projects;