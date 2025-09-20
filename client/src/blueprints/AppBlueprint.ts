import { ComponentType } from 'react';
import { Blueprint } from '../core/Blueprint';
import { ThemeStore } from '../core/ThemeStore';
import { CarouselStore } from '../core/CarouselStore';
import { ContentStore } from '../core/ContentStore';

// Root application blueprint that manages global state and child blueprints
export class AppBlueprint extends Blueprint {
  private themeStore: ThemeStore;
  private carouselStore: CarouselStore;
  private contentStore: ContentStore;
  
  constructor() {
    super('app');
    
    // Initialize stores
    this.themeStore = new ThemeStore();
    this.carouselStore = new CarouselStore();
    this.contentStore = new ContentStore();
    
    // Child blueprints will be added after creation to avoid circular dependencies
  }
  
  getComponent(): ComponentType<any> {
    // Returns a provider component that supplies stores to the app
    const stores = {
      themeStore: this.themeStore,
      carouselStore: this.carouselStore,
      contentStore: this.contentStore
    };
    
    return function AppProvider({ children }: { children: React.ReactNode }) {
      return children as React.ReactElement;
    };
  }
  
  // Initialize child blueprints after creation (disabled for now due to module loading issues)
  initializeChildren(): void {
    // Temporarily disabled to fix require() issues in browser
    // Will be implemented with proper ES6 imports later
    console.log('Blueprint children initialization skipped for now');
  }
  
  // Blueprint communication methods
  protected receiveFromChild(childId: string, message: any): void {
    switch (message.type) {
      case 'THEME_CHANGED':
        // Could notify other children about theme changes
        console.log('Theme changed, notifying other blueprints...');
        break;
        
      case 'CONTENT_REQUESTED':
        // Could coordinate between carousel and content display
        console.log('Content requested:', message.payload);
        break;
    }
  }
  
  // Public methods for child blueprints to access stores
  getThemeStore(): ThemeStore {
    return this.themeStore;
  }
  
  getCarouselStore(): CarouselStore {
    return this.carouselStore;
  }
  
  getContentStore(): ContentStore {
    return this.contentStore;
  }
}