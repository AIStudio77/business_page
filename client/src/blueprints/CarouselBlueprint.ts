import { ComponentType } from 'react';
import { Blueprint } from '../core/Blueprint';
import { CarouselStore } from '../core/CarouselStore';
import { ContentStore } from '../core/ContentStore';

// Carousel blueprint that manages carousel and content interaction logic
export class CarouselBlueprint extends Blueprint {
  constructor(
    private carouselStore: CarouselStore,
    private contentStore: ContentStore
  ) {
    super('carousel');
    this.setStore(carouselStore);
  }
  
  getComponent(): ComponentType<any> {
    return this.withCarouselLogic();
  }
  
  private withCarouselLogic() {
    const carouselStore = this.carouselStore;
    const contentStore = this.contentStore;
    const blueprint = this;
    
    // HOC that injects carousel business logic
    return function CarouselWithLogic(props: any) {
      const ServiceCarousel = require('../components/ServiceCarousel').default;
      
      const enhancedProps = {
        ...props,
        onSlideChange: (index: number) => {
          carouselStore.propose({ type: 'GO_TO_SLIDE', payload: index });
          blueprint.sendToParent({ 
            type: 'SLIDE_CHANGED', 
            payload: { index, service: carouselStore.getCurrentService() } 
          });
        },
        onContentRequest: (contentId: string) => {
          blueprint.handleContentRequest(contentId);
        },
        onExternalNavigation: (url: string) => {
          blueprint.handleExternalNavigation(url);
        }
      };
      
      return ServiceCarousel(enhancedProps);
    };
  }
  
  private handleContentRequest(contentId: string): void {
    console.log(`Content requested: ${contentId}`);
    
    // Show content through content store
    this.contentStore.propose({ type: 'SHOW_CONTENT', payload: contentId });
    
    // Notify parent about the content request
    this.sendToParent({ 
      type: 'CONTENT_REQUESTED', 
      payload: { contentId, timestamp: Date.now() } 
    });
    
    // Update carousel state
    this.carouselStore.propose({ type: 'SELECT_MENU_ITEM', payload: contentId });
  }
  
  private handleExternalNavigation(url: string): void {
    console.log(`External navigation requested: ${url}`);
    
    // In a real app, this would handle routing
    // For now, just log and notify parent
    this.sendToParent({ 
      type: 'EXTERNAL_NAVIGATION', 
      payload: { url, timestamp: Date.now() } 
    });
  }
  
  // Method for parent to trigger content display
  showContent(contentId: string): void {
    this.handleContentRequest(contentId);
  }
  
  // Method for parent to navigate carousel
  navigateToSlide(index: number): void {
    this.carouselStore.propose({ type: 'GO_TO_SLIDE', payload: index });
  }
}