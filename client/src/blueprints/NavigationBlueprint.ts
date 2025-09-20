import { ComponentType } from 'react';
import { Blueprint } from '../core/Blueprint';
import { ThemeStore } from '../core/ThemeStore';

// Navigation blueprint that manages navigation-specific logic
export class NavigationBlueprint extends Blueprint {
  constructor(private themeStore: ThemeStore) {
    super('navigation');
    this.setStore(themeStore);
  }
  
  getComponent(): ComponentType<any> {
    // Returns a HOC that wraps the Navigation component with business logic
    return this.withNavigationLogic();
  }
  
  private withNavigationLogic() {
    const themeStore = this.themeStore;
    const blueprint = this;
    
    // HOC that injects navigation logic
    return function NavigationWithLogic(props: any) {
      // Import the actual React component here to avoid circular dependencies
      const Navigation = require('../components/Navigation').default;
      
      // Enhanced props with blueprint methods
      const enhancedProps = {
        ...props,
        onThemeToggle: () => {
          themeStore.propose({ type: 'TOGGLE_THEME' });
          blueprint.sendToParent({ type: 'THEME_CHANGED', payload: themeStore.getState().mode });
        },
        onNavigate: (section: string) => {
          blueprint.handleNavigation(section);
        },
        onChatRequest: () => {
          blueprint.handleChatRequest();
        }
      };
      
      return Navigation(enhancedProps);
    };
  }
  
  private handleNavigation(section: string): void {
    console.log(`Navigation to ${section} requested`);
    // Could implement routing logic here
    // Could send message to parent to coordinate with other blueprints
    this.sendToParent({ 
      type: 'NAVIGATION_REQUESTED', 
      payload: { section, timestamp: Date.now() } 
    });
  }
  
  private handleChatRequest(): void {
    console.log('Chat requested through navigation');
    // For now, show alert, but could open chat blueprint
    alert('Chat WIP');
    
    this.sendToParent({ 
      type: 'CHAT_REQUESTED', 
      payload: { source: 'navigation', timestamp: Date.now() } 
    });
  }
}