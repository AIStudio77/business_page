import { Button } from '@/components/ui/button';
import { Sun, Moon, MessageCircle } from 'lucide-react';
import { useStores, useStoreState } from '../providers/AppProviders';

export default function Navigation() {
  const { themeStore } = useStores();
  const themeState = useStoreState(themeStore);

  const handleThemeToggle = () => {
    themeStore.propose({ type: 'TOGGLE_THEME' });
  };

  const handleChatClick = () => {
    alert('Chat WIP'); // todo: remove mock functionality
  };

  const handleNavClick = (section: string) => {
    console.log(`Navigate to ${section}`); // todo: remove mock functionality
  };

  return (
    <>
      {/* Main Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex items-center justify-between">
            {/* Logo */}
            <div className="flex items-center gap-3">
              <div className="w-8 h-8 bg-primary rounded-md flex items-center justify-center">
                <div className="w-4 h-4 bg-primary-foreground rounded-sm" />
              </div>
              <span className="font-display font-semibold text-xl text-foreground">
                TechFlow
              </span>
            </div>

            {/* Navigation Links */}
            <div className="hidden md:flex items-center gap-8">
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick('about')}
                data-testid="nav-about"
                className="text-foreground hover-elevate"
              >
                About Us
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick('products')}
                data-testid="nav-products"
                className="text-foreground hover-elevate"
              >
                Products
              </Button>
              <Button 
                variant="ghost" 
                onClick={() => handleNavClick('contact')}
                data-testid="nav-contact"
                className="text-foreground hover-elevate"
              >
                Contact
              </Button>
            </div>

            {/* Theme Toggle */}
            <Button
              variant="outline"
              size="icon"
              onClick={handleThemeToggle}
              data-testid="button-theme-toggle"
              className="hover-elevate active-elevate-2"
              disabled={themeState.isTransitioning}
            >
              {themeState.mode === 'light' ? (
                <Moon className="h-4 w-4" />
              ) : (
                <Sun className="h-4 w-4" />
              )}
            </Button>
          </div>
        </div>
      </nav>

      {/* Floating Chat Button */}
      <Button
        onClick={handleChatClick}
        data-testid="button-chat"
        className="fixed bottom-6 right-6 z-50 rounded-full w-14 h-14 shadow-lg hover-elevate active-elevate-2"
        size="icon"
      >
        <MessageCircle className="h-6 w-6" />
      </Button>
    </>
  );
}