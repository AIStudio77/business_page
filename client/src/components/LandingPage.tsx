import Navigation from './Navigation';
import ServiceCarousel from './ServiceCarousel';

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      
      {/* Main Content */}
      <main className="pt-20">
        {/* Hero Section */}
        <section className="px-6 py-12">
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="text-center mb-12">
              <h1 className="text-5xl md:text-6xl font-display font-bold text-foreground mb-6">
                Transform Your Space with
                <span className="text-primary block mt-2">Smart Technology</span>
              </h1>
              <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
                From intelligent home automation to enterprise IoT solutions, we bring cutting-edge technology 
                that adapts to your needs and enhances your daily experience.
              </p>
            </div>

            {/* Service Carousel */}
            <div data-testid="main-carousel">
              <ServiceCarousel />
            </div>
          </div>
        </section>

        {/* Features Grid */}
        <section className="px-6 py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-display font-bold text-center text-foreground mb-12">
              Why Choose TechFlow?
            </h2>
            
            <div className="grid md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-card hover-elevate" data-testid="feature-innovation">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-sm" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Innovation First</h3>
                <p className="text-muted-foreground">
                  We stay ahead of technology trends to bring you tomorrow's solutions today.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card hover-elevate" data-testid="feature-reliability">
                <div className="w-16 h-16 bg-accent/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-accent rounded-sm" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Proven Reliability</h3>
                <p className="text-muted-foreground">
                  Enterprise-grade solutions with 99.9% uptime and 24/7 monitoring.
                </p>
              </div>
              
              <div className="text-center p-6 rounded-lg bg-card hover-elevate" data-testid="feature-support">
                <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mx-auto mb-4">
                  <div className="w-8 h-8 bg-primary rounded-sm" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-foreground">Expert Support</h3>
                <p className="text-muted-foreground">
                  Dedicated support team with deep technical expertise and rapid response times.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="px-6 py-16">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-display font-bold text-foreground mb-6">
              Ready to Get Started?
            </h2>
            <p className="text-xl text-muted-foreground mb-8">
              Let's discuss how our technology solutions can transform your space or business.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button 
                className="px-8 py-3 bg-primary text-primary-foreground rounded-md font-semibold hover-elevate active-elevate-2"
                onClick={() => console.log('Schedule consultation')} // todo: remove mock functionality
                data-testid="cta-consultation"
              >
                Schedule Consultation
              </button>
              <button 
                className="px-8 py-3 border border-border text-foreground rounded-md font-semibold hover-elevate active-elevate-2"
                onClick={() => console.log('View portfolio')} // todo: remove mock functionality
                data-testid="cta-portfolio"
              >
                View Our Work
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-muted/50 px-6 py-8">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <div className="flex items-center gap-3">
              <div className="w-6 h-6 bg-primary rounded-sm" />
              <span className="font-display font-semibold text-foreground">TechFlow Solutions</span>
            </div>
            <p className="text-sm text-muted-foreground">
              © 2024 TechFlow Solutions. Transforming spaces through technology.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}