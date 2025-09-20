import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Home, Building, Bot, Zap, Shield, Smartphone } from 'lucide-react';
import { useLocation } from 'wouter';

export default function ProductsPage() {
  const [, setLocation] = useLocation();
  
  const handleBack = () => {
    setLocation('/');
  };

  const handleProductClick = (product: string) => {
    console.log(`View details for ${product}`); // todo: remove mock functionality
  };

  const products = [
    {
      id: 'smart-home',
      title: 'Smart Home Automation',
      icon: Home,
      description: 'Complete home automation solutions for modern living',
      features: ['Voice Control', 'Mobile App', 'Energy Optimization', 'Security Integration'],
      pricing: 'Starting at $2,999'
    },
    {
      id: 'commercial-automation',
      title: 'Commercial Building Automation',
      icon: Building,
      description: 'Enterprise-grade automation for offices and commercial spaces',
      features: ['HVAC Control', 'Lighting Management', 'Access Control', 'Energy Monitoring'],
      pricing: 'Starting at $15,999'
    },
    {
      id: 'ai-chatbots',
      title: 'AI Chatbot Solutions',
      icon: Bot,
      description: 'Intelligent conversational AI for customer service and support',
      features: ['Natural Language', 'Multi-platform', 'Analytics', 'Custom Training'],
      pricing: 'Starting at $99/month'
    },
    {
      id: 'iot-platform',
      title: 'IoT Monitoring Platform',
      icon: Zap,
      description: 'Comprehensive IoT device management and monitoring',
      features: ['Real-time Monitoring', 'Predictive Analytics', 'Cloud Integration', 'Custom Dashboards'],
      pricing: 'Starting at $299/month'
    },
    {
      id: 'security-systems',
      title: 'Smart Security Systems',
      icon: Shield,
      description: 'Advanced security solutions with AI-powered monitoring',
      features: ['24/7 Monitoring', 'AI Detection', 'Mobile Alerts', 'Cloud Storage'],
      pricing: 'Starting at $4,999'
    },
    {
      id: 'mobile-solutions',
      title: 'Mobile Control Solutions',
      icon: Smartphone,
      description: 'Custom mobile apps for complete system control',
      features: ['iOS & Android', 'Real-time Control', 'Notifications', 'Voice Commands'],
      pricing: 'Starting at $1,999'
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Header */}
        <div className="mb-8">
          <Button 
            variant="ghost" 
            onClick={handleBack}
            className="mb-6 hover-elevate"
            data-testid="back-button"
          >
            <ArrowLeft className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
          
          <h1 className="text-4xl font-display font-bold text-foreground mb-4">
            Our Products & Services
          </h1>
          <p className="text-xl text-muted-foreground">
            Comprehensive technology solutions tailored to your needs.
          </p>
        </div>

        {/* Products Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {products.map((product) => {
            const IconComponent = product.icon;
            
            return (
              <Card key={product.id} className="p-6 hover-elevate">
                <div className="flex items-center gap-4 mb-4">
                  <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                    <IconComponent className="w-6 h-6 text-primary" />
                  </div>
                  <h3 className="text-xl font-semibold text-foreground">{product.title}</h3>
                </div>
                
                <p className="text-muted-foreground mb-4">
                  {product.description}
                </p>
                
                <div className="space-y-2 mb-6">
                  {product.features.map((feature, index) => (
                    <div key={index} className="flex items-center gap-2">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      <span className="text-sm text-muted-foreground">{feature}</span>
                    </div>
                  ))}
                </div>
                
                <div className="flex items-center justify-between">
                  <span className="text-lg font-semibold text-primary">{product.pricing}</span>
                  <Button 
                    variant="outline" 
                    size="sm"
                    onClick={() => handleProductClick(product.id)}
                    data-testid={`product-${product.id}`}
                    className="hover-elevate"
                  >
                    Learn More
                  </Button>
                </div>
              </Card>
            );
          })}
        </div>

        {/* CTA Section */}
        <Card className="p-8 text-center">
          <h2 className="text-3xl font-display font-bold text-foreground mb-4">
            Ready to Transform Your Space?
          </h2>
          <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
            Our team of experts is ready to help you design and implement the perfect 
            technology solution for your specific needs and budget.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg"
              onClick={() => console.log('Schedule consultation')} // todo: remove mock functionality
              data-testid="cta-consultation"
              className="hover-elevate active-elevate-2"
            >
              Schedule Free Consultation
            </Button>
            <Button 
              variant="outline" 
              size="lg"
              onClick={() => console.log('Request quote')} // todo: remove mock functionality
              data-testid="cta-quote"
              className="hover-elevate active-elevate-2"
            >
              Request Custom Quote
            </Button>
          </div>
        </Card>
      </div>
    </div>
  );
}