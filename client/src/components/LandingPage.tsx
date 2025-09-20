import MuiNavigation from './MuiNavigation';
import ServiceCarousel from './ServiceCarousel';
import ContentDisplay from './ContentDisplay';
import { Box, Container, Typography, Grid, Card, CardContent, Button } from '@mui/material';

export default function LandingPage() {
  return (
    <Box sx={{ minHeight: '100vh', backgroundColor: 'background.default' }}>
      <MuiNavigation />
      
      {/* Main Content */}
      <Box component="main" sx={{ pt: 10 }}>
        {/* Hero Section */}
        <Container maxWidth="lg" sx={{ py: 6 }}>
          {/* Header */}
          <Box sx={{ textAlign: 'center', mb: 8 }}>
            <Typography 
              variant="h1" 
              sx={{ 
                fontSize: { xs: '2.5rem', md: '4rem' },
                fontWeight: 700,
                color: 'text.primary',
                mb: 3
              }}
            >
              Transform Your Space with
              <Typography 
                component="span" 
                sx={{ 
                  color: 'primary.main',
                  display: 'block',
                  mt: 1
                }}
              >
                Smart Technology
              </Typography>
            </Typography>
            <Typography 
              variant="h5" 
              sx={{ 
                color: 'text.secondary',
                maxWidth: '600px',
                mx: 'auto',
                lineHeight: 1.6,
                fontWeight: 400
              }}
            >
              From intelligent home automation to enterprise IoT solutions, we bring cutting-edge technology 
              that adapts to your needs and enhances your daily experience.
            </Typography>
          </Box>

          {/* Service Carousel */}
          <Box data-testid="main-carousel">
            <ServiceCarousel />
          </Box>
        </Container>

        {/* Features Grid */}
        <Box sx={{ py: 8, backgroundColor: 'background.paper' }}>
          <Container maxWidth="lg">
            <Typography 
              variant="h2" 
              sx={{ 
                textAlign: 'center',
                color: 'text.primary',
                mb: 6,
                fontWeight: 600
              }}
            >
              Why Choose TechFlow?
            </Typography>
            
            <Grid container spacing={4}>
              <Grid item xs={12} md={4}>
                <Card 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                  data-testid="feature-innovation"
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        backgroundColor: 'primary.main',
                        opacity: 0.1,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          backgroundColor: 'primary.main',
                          borderRadius: 1
                        }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      Innovation First
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      We stay ahead of technology trends to bring you tomorrow's solutions today.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                  data-testid="feature-reliability"
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        backgroundColor: 'secondary.main',
                        opacity: 0.1,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          backgroundColor: 'secondary.main',
                          borderRadius: 1
                        }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      Proven Reliability
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Enterprise-grade solutions with 99.9% uptime and 24/7 monitoring.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
              
              <Grid item xs={12} md={4}>
                <Card 
                  sx={{ 
                    textAlign: 'center', 
                    p: 3,
                    height: '100%',
                    transition: 'transform 0.2s ease-in-out',
                    '&:hover': {
                      transform: 'translateY(-4px)'
                    }
                  }}
                  data-testid="feature-support"
                >
                  <CardContent>
                    <Box
                      sx={{
                        width: 64,
                        height: 64,
                        backgroundColor: 'primary.main',
                        opacity: 0.1,
                        borderRadius: 2,
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        mx: 'auto',
                        mb: 3
                      }}
                    >
                      <Box
                        sx={{
                          width: 32,
                          height: 32,
                          backgroundColor: 'primary.main',
                          borderRadius: 1
                        }}
                      />
                    </Box>
                    <Typography variant="h5" sx={{ fontWeight: 600, mb: 2, color: 'text.primary' }}>
                      Expert Support
                    </Typography>
                    <Typography variant="body1" sx={{ color: 'text.secondary' }}>
                      Dedicated support team with deep technical expertise and rapid response times.
                    </Typography>
                  </CardContent>
                </Card>
              </Grid>
            </Grid>
          </Container>
        </Box>

        {/* CTA Section */}
        <Container maxWidth="md" sx={{ py: 8, textAlign: 'center' }}>
          <Typography 
            variant="h2" 
            sx={{ 
              color: 'text.primary',
              mb: 3,
              fontWeight: 600
            }}
          >
            Ready to Get Started?
          </Typography>
          <Typography 
            variant="h5" 
            sx={{ 
              color: 'text.secondary',
              mb: 4,
              fontWeight: 400
            }}
          >
            Let's discuss how our technology solutions can transform your space or business.
          </Typography>
          <Box sx={{ display: 'flex', flexDirection: { xs: 'column', sm: 'row' }, gap: 2, justifyContent: 'center' }}>
            <Button 
              variant="contained"
              size="large"
              onClick={() => console.log('Schedule consultation')} // todo: remove mock functionality
              data-testid="cta-consultation"
              sx={{ px: 4, py: 1.5 }}
            >
              Schedule Consultation
            </Button>
            <Button 
              variant="outlined"
              size="large"
              onClick={() => console.log('View portfolio')} // todo: remove mock functionality
              data-testid="cta-portfolio"
              sx={{ px: 4, py: 1.5 }}
            >
              View Our Work
            </Button>
          </Box>
        </Container>
      </Box>

      {/* Footer */}
      <Box sx={{ backgroundColor: 'background.paper', py: 4 }}>
        <Container maxWidth="lg">
          <Box sx={{ 
            display: 'flex', 
            flexDirection: { xs: 'column', md: 'row' },
            justifyContent: 'space-between',
            alignItems: 'center',
            gap: 2
          }}>
            <Box sx={{ display: 'flex', alignItems: 'center', gap: 1.5 }}>
              <Box sx={{ width: 24, height: 24, backgroundColor: 'primary.main', borderRadius: 0.5 }} />
              <Typography sx={{ fontWeight: 600, color: 'text.primary' }}>
                TechFlow Solutions
              </Typography>
            </Box>
            <Typography variant="body2" sx={{ color: 'text.secondary' }}>
              © 2024 TechFlow Solutions. Transforming spaces through technology.
            </Typography>
          </Box>
        </Container>
      </Box>

      {/* Content Display Modal */}
      <ContentDisplay />
    </Box>
  );
}