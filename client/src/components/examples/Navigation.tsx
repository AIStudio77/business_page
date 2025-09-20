import Navigation from '../Navigation';
import { AppProviders } from '../../providers/AppProviders';

export default function NavigationExample() {
  return (
    <AppProviders>
      <div className="h-screen bg-background">
        <Navigation />
        <div className="pt-20 p-8">
          <h2 className="text-2xl font-semibold text-foreground">Navigation Component Demo</h2>
          <p className="text-muted-foreground mt-2">
            Try clicking the theme toggle and navigation buttons. The chat button shows a placeholder alert.
          </p>
        </div>
      </div>
    </AppProviders>
  );
}