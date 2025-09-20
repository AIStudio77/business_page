import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ArrowLeft, Users, Target, Award } from 'lucide-react';
import { useLocation } from 'wouter';

export default function AboutPage() {
  const [, setLocation] = useLocation();
  
  const handleBack = () => {
    setLocation('/');
  };

  return (
    <div className="min-h-screen bg-background">
      <div className="max-w-4xl mx-auto px-6 py-12">
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
            About TechFlow Solutions
          </h1>
          <p className="text-xl text-muted-foreground">
            Pioneering the future of intelligent automation and IoT technology.
          </p>
        </div>

        {/* Mission Section */}
        <Card className="p-8 mb-8 hover-elevate">
          <div className="flex items-start gap-6">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
              <Target className="w-6 h-6 text-primary" />
            </div>
            <div>
              <h2 className="text-2xl font-semibold text-foreground mb-4">Our Mission</h2>
              <p className="text-muted-foreground leading-relaxed">
                To transform how people interact with their spaces through intelligent technology. 
                We believe that smart automation should be intuitive, reliable, and enhance daily life 
                without adding complexity. Our solutions adapt to your needs, learn from your patterns, 
                and evolve with your lifestyle.
              </p>
            </div>
          </div>
        </Card>

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <Card className="p-6 hover-elevate">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-accent/10 rounded-lg flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Customer-Centric</h3>
            </div>
            <p className="text-muted-foreground">
              Every solution is designed with the end user in mind. We prioritize ease of use, 
              reliability, and ongoing support to ensure your technology enhances rather than complicates your life.
            </p>
          </Card>

          <Card className="p-6 hover-elevate">
            <div className="flex items-center gap-4 mb-4">
              <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center">
                <Award className="w-5 h-5 text-primary" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Innovation Excellence</h3>
            </div>
            <p className="text-muted-foreground">
              We stay at the forefront of technology trends, continuously researching and implementing 
              cutting-edge solutions that provide real value and future-proof your investments.
            </p>
          </Card>
        </div>

        {/* Company Stats */}
        <Card className="p-8 mb-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6 text-center">
            Our Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">500+</div>
              <div className="text-muted-foreground">Projects Completed</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">50+</div>
              <div className="text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">99.9%</div>
              <div className="text-muted-foreground">System Uptime</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-primary mb-2">24/7</div>
              <div className="text-muted-foreground">Support Available</div>
            </div>
          </div>
        </Card>

        {/* Team Section */}
        <Card className="p-8">
          <h2 className="text-2xl font-semibold text-foreground mb-6">Our Team</h2>
          <p className="text-muted-foreground mb-6">
            Our diverse team of engineers, designers, and technology specialists brings together 
            decades of experience in automation, IoT, artificial intelligence, and user experience design.
          </p>
          
          <div className="grid md:grid-cols-3 gap-6">
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-foreground">Engineering Excellence</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Deep technical expertise in IoT, automation, and system integration
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-accent to-primary rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-foreground">Design Innovation</h4>
              <p className="text-sm text-muted-foreground mt-2">
                User-centered design approach ensuring intuitive and beautiful interfaces
              </p>
            </div>
            
            <div className="text-center">
              <div className="w-20 h-20 bg-gradient-to-br from-primary to-accent rounded-full mx-auto mb-4"></div>
              <h4 className="font-semibold text-foreground">Customer Success</h4>
              <p className="text-sm text-muted-foreground mt-2">
                Dedicated support ensuring every project exceeds expectations
              </p>
            </div>
          </div>
        </Card>
      </div>
    </div>
  );
}