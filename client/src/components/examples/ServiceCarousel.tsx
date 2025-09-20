import ServiceCarousel from '../ServiceCarousel';
import { AppProviders } from '../../providers/AppProviders';

export default function ServiceCarouselExample() {
  return (
    <AppProviders>
      <div className="p-8 bg-background min-h-screen">
        <h2 className="text-2xl font-semibold text-foreground mb-6">Service Carousel Demo</h2>
        <p className="text-muted-foreground mb-8">
          Hover over the carousel to see the information panel slide down. 
          Auto-play pauses on hover and resumes when not hovering.
        </p>
        <ServiceCarousel />
      </div>
    </AppProviders>
  );
}