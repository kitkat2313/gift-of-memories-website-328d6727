import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Link } from 'react-router-dom';

const Packages = () => {
  const packages = [
    {
      name: 'Basic Package',
      tagline: 'Perfect for Intimate Celebrations',
      features: [
        '4 hours of coverage',
        '200+ professionally edited photos',
        '50 retouched photos',
        'Online gallery for 1 year',
        'High-resolution digital files',
        'Basic color correction',
        '2 photographers',
      ],
      ideal: 'Engagement ceremonies, small gatherings, pre-wedding shoots',
    },
    {
      name: 'Standard Package',
      tagline: 'Our Most Popular Choice',
      features: [
        '8 hours of coverage',
        '500+ professionally edited photos',
        '150 retouched photos',
        'Online gallery for 2 years',
        'High-resolution digital files',
        'Advanced editing & color grading',
        '3 photographers',
        '5-minute highlight video',
        'Photo slideshow',
      ],
      ideal: 'Full wedding day coverage, receptions, traditional ceremonies',
      featured: true,
    },
    {
      name: 'Premium Package',
      tagline: 'Complete Wedding Experience',
      features: [
        'Full day coverage (12+ hours)',
        '1000+ professionally edited photos',
        '300 retouched photos',
        'Online gallery lifetime access',
        'High-resolution digital files',
        'Premium editing & cinematic grading',
        '4-5 photographers',
        '15-minute cinematic video',
        'Full wedding documentary video',
        'Photo slideshow with music',
        'Premium leather-bound photo album (60 pages)',
        'Pre-wedding shoot included',
        'Drone photography (if location permits)',
      ],
      ideal: 'Multi-day weddings, destination weddings, complete wedding documentation',
    },
  ];

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Packages</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Choose the perfect package for your special day. All packages include professional photography, 
              editing, and secure online delivery.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 mb-16">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover-lift relative ${
                  pkg.featured
                    ? 'border-primary shadow-xl ring-2 ring-primary lg:scale-105'
                    : 'border-border'
                }`}
              >
                {pkg.featured && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground text-sm font-semibold px-4 py-2 rounded-full shadow-lg">
                      Most Popular
                    </span>
                  </div>
                )}

                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="text-3xl font-bold mb-2">{pkg.name}</CardTitle>
                  <p className="text-muted-foreground">{pkg.tagline}</p>
                </CardHeader>

                <CardContent className="space-y-6">
                  <div className="space-y-3">
                    {pkg.features.map((feature, i) => (
                      <div key={i} className="flex items-start">
                        <Check className="h-5 w-5 text-primary mr-3 flex-shrink-0 mt-0.5" />
                        <span className="text-sm">{feature}</span>
                      </div>
                    ))}
                  </div>

                  <div className="pt-6 border-t border-border">
                    <p className="text-sm text-muted-foreground mb-4">
                      <strong className="text-foreground">Ideal for:</strong> {pkg.ideal}
                    </p>
                    <Button
                      variant={pkg.featured ? 'default' : 'outline'}
                      className="w-full"
                      asChild
                    >
                      <Link to="/contact">Book This Package</Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Additional Info */}
          <div className="bg-muted/50 rounded-lg p-8 mb-8">
            <h3 className="text-2xl font-bold mb-4 text-center">What's Included in All Packages</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="text-center">
                <div className="text-primary text-4xl mb-2">📸</div>
                <h4 className="font-semibold mb-1">Professional Editing</h4>
                <p className="text-sm text-muted-foreground">
                  Color correction, exposure adjustment, and artistic enhancement
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary text-4xl mb-2">☁️</div>
                <h4 className="font-semibold mb-1">Secure Online Gallery</h4>
                <p className="text-sm text-muted-foreground">
                  Private gallery with download and sharing options
                </p>
              </div>
              <div className="text-center">
                <div className="text-primary text-4xl mb-2">💝</div>
                <h4 className="font-semibold mb-1">Lifetime Support</h4>
                <p className="text-sm text-muted-foreground">
                  We're here to help even after your photos are delivered
                </p>
              </div>
            </div>
          </div>

          {/* Custom Package */}
          <Card className="bg-primary text-primary-foreground">
            <CardContent className="p-8 text-center">
              <h3 className="text-2xl font-bold mb-4">Need a Custom Package?</h3>
              <p className="mb-6 opacity-90">
                Have specific requirements? We're happy to create a personalized package that perfectly 
                matches your vision and budget. Let's discuss your unique needs!
              </p>
              <Button variant="secondary" size="lg" asChild>
                <Link to="/contact">Contact Us for Custom Quote</Link>
              </Button>
            </CardContent>
          </Card>
        </div>
      </section>
    </div>
  );
};

export default Packages;
