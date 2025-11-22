import { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Card, CardContent } from '@/components/ui/card';
import { Camera, Heart, Award, Users, Play } from 'lucide-react';
import heroWedding from '@/assets/hero-wedding.jpg';
import heroCouple from '@/assets/hero-couple.jpg';
import heroCeremony from '@/assets/hero-ceremony.jpg';

const Home = () => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isVideoPlaying, setIsVideoPlaying] = useState<number | null>(null);
  const videoRefs = useRef<(HTMLVideoElement | null)[]>([]);
  const heroImages = [heroWedding, heroCouple, heroCeremony];

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroImages.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const features = [
    {
      icon: <Camera className="h-8 w-8 text-primary" />,
      title: 'Professional Equipment',
      description: 'State-of-the-art cameras and equipment for stunning shots',
    },
    {
      icon: <Heart className="h-8 w-8 text-primary" />,
      title: 'Passionate Team',
      description: 'Dedicated photographers who love capturing your moments',
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: 'Award Winning',
      description: 'Recognized for excellence in wedding photography',
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: '1000+ Happy Couples',
      description: 'Trusted by thousands of satisfied clients',
    },
  ];

  const packages = [
    {
      name: 'Basic',
      description: 'Perfect for intimate celebrations',
      features: ['4 hours coverage', '200+ edited photos', 'Online gallery'],
    },
    {
      name: 'Standard',
      description: 'Our most popular choice',
      features: ['8 hours coverage', '500+ edited photos', 'Online gallery', 'Highlight video'],
      featured: true,
    },
    {
      name: 'Premium',
      description: 'Complete wedding coverage',
      features: ['Full day coverage', '1000+ edited photos', 'Online gallery', 'Cinematic video', 'Photo album'],
    },
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section with Slideshow */}
      <section className="relative h-screen overflow-hidden">
        {heroImages.map((image, index) => (
          <div
            key={index}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              index === currentSlide ? 'opacity-100' : 'opacity-0'
            }`}
          >
            <img src={image} alt={`Hero ${index + 1}`} className="w-full h-full object-cover" />
            <div className="absolute inset-0 bg-gradient-to-b from-black/50 to-black/30" />
          </div>
        ))}

        <div className="relative z-10 h-full flex items-center justify-center text-center px-4">
          <div className="max-w-4xl animate-fade-in">
            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
              <span className="inline-block">
                {["T", "h", "e", " ", "G", "i", "f", "t", " ", "o", "f", " ", "M", "e", "m", "o", "r", "i", "e", "s"].map((letter, index) => (
                  <span
                    key={index}
                    className="inline-block hover:text-primary hover:scale-110 hover:-translate-y-2 transition-all duration-300 cursor-default"
                    style={{ 
                      textShadow: '2px 2px 8px rgba(0,0,0,0.8), 0 0 20px rgba(255,255,255,0.5)',
                      filter: 'drop-shadow(0 0 10px rgba(255,255,255,0.8))'
                    }}
                  >
                    {letter === " " ? "\u00A0" : letter}
                  </span>
                ))}
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/90 mb-8">
              Capturing life's most precious moments with elegance and artistry
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" asChild className="text-lg">
                <Link to="/contact">Book Your Session</Link>
              </Button>
              <Button size="lg" variant="outline" asChild className="text-lg bg-white/10 backdrop-blur-sm text-white border-white hover:bg-white hover:text-foreground">
                <Link to="/gallery">View Gallery</Link>
              </Button>
            </div>
          </div>
        </div>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex space-x-2">
          {heroImages.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrentSlide(index)}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentSlide ? 'bg-white w-8' : 'bg-white/50'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </section>

      {/* Video Showcase Section */}
      <section className="section-padding bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Work in Motion</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Experience the magic of your special moments brought to life
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {/* Pre-Wedding Video */}
            <div className="relative group overflow-hidden rounded-lg shadow-xl hover-lift">
              <div className="aspect-video bg-muted relative">
                <video
                  ref={el => videoRefs.current[0] = el}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1606800052052-a08af7148866?w=800&h=450&fit=crop"
                >
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4" type="video/mp4" />
                </video>
                
                {isVideoPlaying !== 0 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => {
                        if (videoRefs.current[0]) {
                          videoRefs.current[0].play();
                          setIsVideoPlaying(0);
                        }
                      }}
                      className="bg-primary text-primary-foreground rounded-full p-6 hover:scale-110 transition-transform"
                    >
                      <Play className="h-8 w-8" fill="currentColor" />
                    </button>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Pre-Wedding Cinematics</h3>
                <p className="text-white/90">Romantic moments before the big day</p>
              </div>
            </div>

            {/* Wedding Video */}
            <div className="relative group overflow-hidden rounded-lg shadow-xl hover-lift">
              <div className="aspect-video bg-muted relative">
                <video
                  ref={el => videoRefs.current[1] = el}
                  className="w-full h-full object-cover"
                  loop
                  muted
                  playsInline
                  poster="https://images.unsplash.com/photo-1519741497674-611481863552?w=800&h=450&fit=crop"
                >
                  <source src="https://storage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4" type="video/mp4" />
                </video>
                
                {isVideoPlaying !== 1 && (
                  <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
                    <button
                      onClick={() => {
                        if (videoRefs.current[1]) {
                          videoRefs.current[1].play();
                          setIsVideoPlaying(1);
                        }
                      }}
                      className="bg-primary text-primary-foreground rounded-full p-6 hover:scale-110 transition-transform"
                    >
                      <Play className="h-8 w-8" fill="currentColor" />
                    </button>
                  </div>
                )}
              </div>
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6 text-white">
                <h3 className="text-2xl font-bold mb-2">Wedding Day Stories</h3>
                <p className="text-white/90">Capturing every beautiful moment</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Why Choose Us</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              We combine technical expertise with artistic vision to create timeless memories
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((feature, index) => (
              <Card key={index} className="hover-lift border-none shadow-sm">
                <CardContent className="p-6 text-center">
                  <div className="mb-4 flex justify-center">{feature.icon}</div>
                  <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Packages Preview Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-16 animate-fade-in">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Our Packages</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Choose the perfect package for your special day
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <Card
                key={index}
                className={`hover-lift ${
                  pkg.featured ? 'border-primary shadow-lg ring-2 ring-primary' : 'border-border'
                }`}
              >
                <CardContent className="p-8">
                  {pkg.featured && (
                    <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full mb-4">
                      Most Popular
                    </span>
                  )}
                  <h3 className="text-2xl font-bold mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground mb-6">{pkg.description}</p>
                  <ul className="space-y-3 mb-8">
                    {pkg.features.map((feature, i) => (
                      <li key={i} className="flex items-center text-sm">
                        <span className="text-primary mr-2">✓</span>
                        {feature}
                      </li>
                    ))}
                  </ul>
                  <Button variant={pkg.featured ? 'default' : 'outline'} className="w-full" asChild>
                    <Link to="/packages">View Details</Link>
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-primary text-primary-foreground">
        <div className="container mx-auto text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 animate-fade-in">
            Ready to Capture Your Memories?
          </h2>
          <p className="text-xl mb-8 opacity-90 max-w-2xl mx-auto">
            Let's create beautiful memories together. Contact us today to discuss your photography needs.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <Link to="/contact">Get in Touch</Link>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Home;
