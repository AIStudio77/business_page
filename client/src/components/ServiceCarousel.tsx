import { useEffect, useState } from 'react';
import { Button } from '@/components/ui/button';
import { Card } from '@/components/ui/card';
import { ChevronLeft, ChevronRight, Play, ExternalLink } from 'lucide-react';
import { useStores, useStoreState } from '../providers/AppProviders';
import smartHomeImg from '@assets/generated_images/Smart_home_IoT_setup_eedbd11c.png';
import domoticImg from '@assets/generated_images/Domotic_office_automation_f5423bb6.png';
import chatbotImg from '@assets/generated_images/Chatbot_AI_service_c65cbe6e.png';
import iotImg from '@assets/generated_images/Industrial_IoT_monitoring_d5ea7b9a.png';

const imageMap = {
  'smart-homes': smartHomeImg,
  'iot-solutions': iotImg,
  'domotic-systems': domoticImg,
  'ai-chatbots': chatbotImg
};

export default function ServiceCarousel() {
  const { carouselStore } = useStores();
  const carouselState = useStoreState(carouselStore);
  const [autoPlay, setAutoPlay] = useState(true);

  // Auto-play functionality
  useEffect(() => {
    if (!autoPlay || carouselState.isHovered) return;

    const interval = setInterval(() => {
      carouselStore.propose({ type: 'NEXT_SLIDE' });
    }, 5000);

    return () => clearInterval(interval);
  }, [autoPlay, carouselState.isHovered, carouselStore]);

  const currentService = carouselStore.getCurrentService();

  const handlePrevious = () => {
    setAutoPlay(false);
    carouselStore.propose({ type: 'PREV_SLIDE' });
  };

  const handleNext = () => {
    setAutoPlay(false);
    carouselStore.propose({ type: 'NEXT_SLIDE' });
  };

  const handleSlideSelect = (index: number) => {
    setAutoPlay(false);
    carouselStore.propose({ type: 'GO_TO_SLIDE', payload: index });
  };

  const handleMouseEnter = () => {
    carouselStore.propose({ type: 'SET_HOVER', payload: true });
  };

  const handleMouseLeave = () => {
    carouselStore.propose({ type: 'SET_HOVER', payload: false });
  };

  const handleMenuClick = (item: any) => {
    if (item.action === 'external') {
      console.log(`Navigate to ${item.target}`); // todo: remove mock functionality
    } else {
      carouselStore.propose({ type: 'SELECT_MENU_ITEM', payload: item.target });
      console.log(`Show content for ${item.target}`); // todo: remove mock functionality
    }
  };

  return (
    <div className="relative w-full">
      {/* Main Carousel */}
      <div 
        className="relative h-[600px] overflow-hidden rounded-lg"
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-testid="carousel-container"
      >
        <div 
          className="flex transition-transform duration-500 ease-in-out h-full"
          style={{ transform: `translateX(-${carouselState.currentIndex * 100}%)` }}
        >
          {carouselState.services.map((service) => (
            <div key={service.id} className="min-w-full h-full relative">
              <img
                src={imageMap[service.id as keyof typeof imageMap]}
                alt={service.title}
                className="w-full h-full object-cover"
              />
              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent" />
              
              {/* Content */}
              <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                <div className="max-w-4xl">
                  <h2 className="text-4xl font-display font-bold mb-4" data-testid={`carousel-title-${service.id}`}>
                    {service.title}
                  </h2>
                  <p className="text-xl mb-6 text-white/90" data-testid={`carousel-description-${service.id}`}>
                    {service.description}
                  </p>
                  
                  {/* Action Button */}
                  <Button 
                    variant="outline" 
                    size="lg"
                    className="bg-white/10 border-white/30 text-white backdrop-blur-sm hover-elevate"
                    data-testid={`carousel-cta-${service.id}`}
                    onClick={() => console.log(`Learn more about ${service.title}`)} // todo: remove mock functionality
                  >
                    <Play className="w-4 h-4 mr-2" />
                    Learn More
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Navigation Arrows */}
        <Button
          variant="outline"
          size="icon"
          className="absolute left-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white backdrop-blur-sm hover-elevate"
          onClick={handlePrevious}
          data-testid="carousel-prev"
        >
          <ChevronLeft className="h-4 w-4" />
        </Button>
        
        <Button
          variant="outline"
          size="icon"
          className="absolute right-4 top-1/2 -translate-y-1/2 bg-white/10 border-white/30 text-white backdrop-blur-sm hover-elevate"
          onClick={handleNext}
          data-testid="carousel-next"
        >
          <ChevronRight className="h-4 w-4" />
        </Button>

        {/* Slide Indicators */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-2">
          {carouselState.services.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === carouselState.currentIndex 
                  ? 'bg-white' 
                  : 'bg-white/40 hover:bg-white/60'
              }`}
              onClick={() => handleSlideSelect(index)}
              data-testid={`carousel-indicator-${index}`}
            />
          ))}
        </div>
      </div>

      {/* Information Panel - Shown on Hover */}
      <div className={`transition-all duration-500 ease-in-out overflow-hidden ${
        carouselState.isHovered ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
      }`}>
        <Card className="mt-6 p-6 bg-card hover-elevate" data-testid="carousel-info-panel">
          <div className="grid md:grid-cols-2 gap-8">
            {/* Service Details */}
            <div>
              <h3 className="text-2xl font-display font-semibold mb-4 text-foreground">
                {currentService.title}
              </h3>
              <p className="text-muted-foreground mb-6">
                {currentService.details.overview}
              </p>
              
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Features</h4>
                  <ul className="space-y-1">
                    {currentService.details.features.map((feature, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {feature}
                      </li>
                    ))}
                  </ul>
                </div>
                
                <div>
                  <h4 className="font-semibold mb-2 text-foreground">Benefits</h4>
                  <ul className="space-y-1">
                    {currentService.details.benefits.map((benefit, index) => (
                      <li key={index} className="text-sm text-muted-foreground">
                        • {benefit}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>

            {/* Dynamic Menu */}
            <div>
              <h4 className="font-semibold mb-4 text-foreground">Explore</h4>
              <div className="flex flex-col gap-3">
                {currentService.menuItems.map((item, index) => (
                  <Button
                    key={index}
                    variant="outline"
                    className="justify-between hover-elevate"
                    onClick={() => handleMenuClick(item)}
                    data-testid={`menu-item-${item.label.toLowerCase().replace(/\s+/g, '-')}`}
                  >
                    <span>{item.label}</span>
                    {item.action === 'external' && <ExternalLink className="w-4 h-4" />}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}