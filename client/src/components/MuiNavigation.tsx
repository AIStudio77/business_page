import { 
  AppBar, 
  Toolbar, 
  Typography, 
  Button, 
  IconButton, 
  Box,
  Fab
} from '@mui/material';
import { 
  LightMode, 
  DarkMode, 
  Chat as ChatIcon 
} from '@mui/icons-material';
import { useLocation } from 'wouter';
import { useStores, useStoreState } from '../providers/AppProviders';

export default function MuiNavigation() {
  const { themeStore } = useStores();
  const themeState = useStoreState(themeStore);
  const [, setLocation] = useLocation();

  const handleThemeToggle = () => {
    themeStore.propose({ type: 'TOGGLE_THEME' });
  };

  const handleChatClick = () => {
    alert('Chat WIP'); // todo: remove mock functionality
  };

  const handleNavClick = (section: string) => {
    setLocation(`/${section}`);
  };

  return (
    <>
      {/* Main Navigation */}
      <AppBar position="fixed" sx={{ backgroundColor: 'background.default', color: 'text.primary' }}>
        <Toolbar>
          {/* Logo */}
          <Box sx={{ display: 'flex', alignItems: 'center', flexGrow: 1 }}>
            <Box
              sx={{
                width: 32,
                height: 32,
                backgroundColor: 'primary.main',
                borderRadius: 1,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                mr: 2
              }}
            >
              <Box
                sx={{
                  width: 16,
                  height: 16,
                  backgroundColor: 'primary.contrastText',
                  borderRadius: 0.5
                }}
              />
            </Box>
            <Typography 
              variant="h6" 
              component="div" 
              sx={{ 
                fontFamily: '"Space Grotesk", sans-serif',
                fontWeight: 600,
                color: 'text.primary'
              }}
            >
              TechFlow
            </Typography>
          </Box>

          {/* Navigation Links */}
          <Box sx={{ display: { xs: 'none', md: 'flex' }, gap: 2, mr: 2 }}>
            <Button 
              color="inherit"
              onClick={() => handleNavClick('about')}
              data-testid="nav-about"
              sx={{ color: 'text.primary' }}
            >
              About Us
            </Button>
            <Button 
              color="inherit"
              onClick={() => handleNavClick('products')}
              data-testid="nav-products"
              sx={{ color: 'text.primary' }}
            >
              Products
            </Button>
            <Button 
              color="inherit"
              onClick={() => handleNavClick('contact')}
              data-testid="nav-contact"
              sx={{ color: 'text.primary' }}
            >
              Contact
            </Button>
          </Box>

          {/* Theme Toggle */}
          <IconButton
            onClick={handleThemeToggle}
            data-testid="button-theme-toggle"
            disabled={themeState.isTransitioning}
            sx={{ color: 'text.primary' }}
          >
            {themeState.mode === 'light' ? <DarkMode /> : <LightMode />}
          </IconButton>
        </Toolbar>
      </AppBar>

      {/* Floating Chat Button */}
      <Fab
        color="primary"
        onClick={handleChatClick}
        data-testid="button-chat"
        sx={{
          position: 'fixed',
          bottom: 24,
          right: 24,
          zIndex: 1000
        }}
      >
        <ChatIcon />
      </Fab>
    </>
  );
}