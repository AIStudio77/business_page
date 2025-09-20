import { SAMStore, type Action } from './SAMStore';

export interface ServiceItem {
  id: string;
  title: string;
  description: string;
  image: string;
  details: {
    overview: string;
    features: string[];
    benefits: string[];
  };
  menuItems: Array<{
    label: string;
    action: 'content' | 'external';
    target?: string; // URL for external, content key for content
  }>;
}

export interface CarouselState {
  services: ServiceItem[];
  currentIndex: number;
  isHovered: boolean;
  selectedMenuItem: string | null;
  isTransitioning: boolean;
}

export class CarouselStore extends SAMStore<CarouselState> {
  constructor() {
    const services: ServiceItem[] = [
      {
        id: 'smart-homes',
        title: 'Smart Home Automation',
        description: 'Transform your living space with intelligent automation systems that adapt to your lifestyle.',
        image: '/src/assets/smart-home.jpg', // Will be replaced with actual generated images
        details: {
          overview: 'Our smart home solutions integrate seamlessly with your daily routine, providing comfort, security, and energy efficiency through intelligent automation.',
          features: ['Voice Control Integration', 'Mobile App Management', 'Energy Optimization', 'Security Systems'],
          benefits: ['Reduce Energy Costs by 30%', 'Enhanced Home Security', 'Increased Property Value', '24/7 Remote Monitoring']
        },
        menuItems: [
          { label: 'View Solutions', action: 'content', target: 'solutions' },
          { label: 'Case Studies', action: 'content', target: 'cases' },
          { label: 'Get Quote', action: 'external', target: '/quote' }
        ]
      },
      {
        id: 'iot-solutions',
        title: 'Industrial IoT Solutions',
        description: 'Connect and optimize your business operations with cutting-edge IoT technology.',
        image: '/src/assets/iot-industrial.jpg',
        details: {
          overview: 'Enterprise-grade IoT solutions that provide real-time monitoring, predictive maintenance, and operational intelligence for businesses of all sizes.',
          features: ['Real-time Monitoring', 'Predictive Analytics', 'Cloud Integration', 'Custom Dashboards'],
          benefits: ['Reduce Downtime by 40%', 'Improve Efficiency', 'Data-Driven Insights', 'Scalable Architecture']
        },
        menuItems: [
          { label: 'Enterprise Solutions', action: 'content', target: 'enterprise' },
          { label: 'Demo', action: 'external', target: '/demo' },
          { label: 'Contact Sales', action: 'external', target: '/contact' }
        ]
      },
      {
        id: 'domotic-systems',
        title: 'Domotic Integration',
        description: 'Professional building automation for commercial and residential spaces.',
        image: '/src/assets/domotic-office.jpg',
        details: {
          overview: 'Advanced domotic systems that control lighting, climate, security, and communications in modern buildings for optimal comfort and efficiency.',
          features: ['Centralized Control', 'Climate Management', 'Automated Lighting', 'Access Control'],
          benefits: ['Energy Savings up to 35%', 'Improved Comfort', 'Enhanced Security', 'Future-Ready Infrastructure']
        },
        menuItems: [
          { label: 'Building Solutions', action: 'content', target: 'buildings' },
          { label: 'Technology', action: 'content', target: 'tech' },
          { label: 'Schedule Consultation', action: 'external', target: '/consult' }
        ]
      },
      {
        id: 'ai-chatbots',
        title: 'AI Chatbot Services',
        description: 'Intelligent conversational AI that enhances customer experience and internal operations.',
        image: '/src/assets/chatbot-ai.jpg',
        details: {
          overview: 'Custom AI chatbots powered by advanced natural language processing to automate customer service, sales, and internal communications.',
          features: ['Natural Language Processing', 'Multi-platform Integration', 'Analytics Dashboard', 'Custom Training'],
          benefits: ['24/7 Customer Support', 'Reduce Response Time', 'Increase Conversions', 'Scalable Communication']
        },
        menuItems: [
          { label: 'Chatbot Demo', action: 'external', target: '/chatbot-demo' },
          { label: 'Pricing', action: 'content', target: 'pricing' },
          { label: 'Integration Guide', action: 'content', target: 'integration' }
        ]
      }
    ];

    super({
      services,
      currentIndex: 0,
      isHovered: false,
      selectedMenuItem: null,
      isTransitioning: false
    });
  }

  apply(action: Action): void {
    switch (action.type) {
      case 'NEXT_SLIDE':
        if (!this.state.isTransitioning) {
          this.state = {
            ...this.state,
            isTransitioning: true,
            currentIndex: (this.state.currentIndex + 1) % this.state.services.length
          };
          this.clearTransition();
        }
        break;

      case 'PREV_SLIDE':
        if (!this.state.isTransitioning) {
          this.state = {
            ...this.state,
            isTransitioning: true,
            currentIndex: this.state.currentIndex === 0 
              ? this.state.services.length - 1 
              : this.state.currentIndex - 1
          };
          this.clearTransition();
        }
        break;

      case 'GO_TO_SLIDE':
        if (!this.state.isTransitioning && action.payload !== this.state.currentIndex) {
          this.state = {
            ...this.state,
            isTransitioning: true,
            currentIndex: action.payload as number
          };
          this.clearTransition();
        }
        break;

      case 'SET_HOVER':
        this.state = {
          ...this.state,
          isHovered: action.payload as boolean
        };
        break;

      case 'SELECT_MENU_ITEM':
        this.state = {
          ...this.state,
          selectedMenuItem: action.payload as string
        };
        break;

      case 'CLEAR_MENU_SELECTION':
        this.state = {
          ...this.state,
          selectedMenuItem: null
        };
        break;
    }
    this.notify();
  }

  private clearTransition(): void {
    setTimeout(() => {
      this.state = { ...this.state, isTransitioning: false };
      this.notify();
    }, 300);
  }

  getCurrentService(): ServiceItem {
    return this.state.services[this.state.currentIndex];
  }
}