import { SAMStore, type Action } from './SAMStore';

export interface ContentItem {
  id: string;
  title: string;
  content: string;
  type: 'text' | 'list' | 'grid';
  data?: any;
}

export interface ContentState {
  activeContent: string | null;
  contentItems: Map<string, ContentItem>;
  isLoading: boolean;
}

export class ContentStore extends SAMStore<ContentState> {
  constructor() {
    super({
      activeContent: null,
      contentItems: new Map(),
      isLoading: false
    });
    
    this.initializeContent();
  }

  apply(action: Action): void {
    switch (action.type) {
      case 'SHOW_CONTENT':
        this.state = {
          ...this.state,
          activeContent: action.payload as string,
          isLoading: false
        };
        break;
        
      case 'HIDE_CONTENT':
        this.state = {
          ...this.state,
          activeContent: null
        };
        break;
        
      case 'SET_LOADING':
        this.state = {
          ...this.state,
          isLoading: action.payload as boolean
        };
        break;
        
      case 'ADD_CONTENT':
        const newItem = action.payload as ContentItem;
        this.state.contentItems.set(newItem.id, newItem);
        this.state = { ...this.state };
        break;
    }
    this.notify();
  }

  private initializeContent(): void {
    const contentItems: ContentItem[] = [
      {
        id: 'solutions',
        title: 'Smart Home Solutions',
        type: 'grid',
        content: 'Comprehensive smart home automation packages',
        data: [
          { name: 'Starter Package', price: '$2,999', features: ['Basic Lighting', 'Thermostat', 'Security'] },
          { name: 'Professional Package', price: '$7,999', features: ['Full Automation', 'Voice Control', 'Energy Management'] },
          { name: 'Enterprise Package', price: '$15,999', features: ['Complete Integration', 'AI Learning', 'Professional Installation'] }
        ]
      },
      {
        id: 'cases',
        title: 'Success Stories',
        type: 'list',
        content: 'Real implementations and customer results',
        data: [
          'Modern Villa in Silicon Valley - 40% energy reduction',
          'Corporate Headquarters - Complete building automation',
          'Luxury Apartment Complex - 200 unit smart integration'
        ]
      },
      {
        id: 'enterprise',
        title: 'Enterprise IoT Solutions',
        type: 'text',
        content: 'Our enterprise IoT platform provides comprehensive monitoring, analytics, and control for large-scale operations. With real-time data processing and predictive maintenance capabilities, businesses can optimize their operations and reduce costs significantly.'
      },
      {
        id: 'buildings',
        title: 'Building Automation',
        type: 'text',
        content: 'Professional domotic systems designed for commercial and residential buildings. Our solutions integrate HVAC, lighting, security, and communication systems into a unified, intelligent platform that adapts to usage patterns and environmental conditions.'
      },
      {
        id: 'tech',
        title: 'Our Technology',
        type: 'list',
        content: 'Advanced technologies powering our solutions',
        data: [
          'Wireless mesh networking with 99.9% reliability',
          'AI-powered learning algorithms for optimization',
          'Open protocols ensuring future compatibility',
          'Military-grade security and encryption'
        ]
      },
      {
        id: 'pricing',
        title: 'Chatbot Pricing',
        type: 'grid',
        content: 'Flexible pricing for businesses of all sizes',
        data: [
          { name: 'Starter', price: '$99/month', features: ['1,000 conversations', 'Basic AI', 'Email support'] },
          { name: 'Professional', price: '$299/month', features: ['10,000 conversations', 'Advanced AI', 'Priority support'] },
          { name: 'Enterprise', price: 'Custom', features: ['Unlimited conversations', 'Custom AI training', 'Dedicated support'] }
        ]
      },
      {
        id: 'integration',
        title: 'Integration Guide',
        type: 'text',
        content: 'Our chatbots integrate seamlessly with popular platforms including websites, mobile apps, Slack, Microsoft Teams, and WhatsApp. Setup takes just minutes with our no-code integration tools and comprehensive API documentation.'
      }
    ];

    contentItems.forEach(item => {
      this.state.contentItems.set(item.id, item);
    });
  }

  getContentItem(id: string): ContentItem | undefined {
    return this.state.contentItems.get(id);
  }
}