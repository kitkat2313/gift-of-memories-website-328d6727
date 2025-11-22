import { Card, CardContent } from '@/components/ui/card';
import aboutPhotographer from '@/assets/about-photographer.jpg';
import aboutEquipment from '@/assets/about-equipment.jpg';
import aboutAlbum from '@/assets/about-album.jpg';

const About = () => {
  return (
    <div className="min-h-screen pt-24">
      {/* Hero Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="max-w-3xl mx-auto text-center animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">About Us</h1>
            <p className="text-xl text-muted-foreground">
              Crafting timeless memories through the art of photography
            </p>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="animate-slide-up">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Story</h2>
              <div className="space-y-4 text-muted-foreground">
                <p>
                  Gift of Memories was born from a passion for capturing life's most precious moments. 
                  What started as a dream has blossomed into one of the most trusted photography services 
                  in Kolkata and beyond.
                </p>
                <p>
                  We believe that every wedding, every celebration, and every moment tells a unique story. 
                  Our mission is to preserve these stories with artistic excellence and heartfelt dedication, 
                  creating memories that last forever.
                </p>
                <p>
                  With over 1,000 happy clients and countless beautiful moments captured, we continue to 
                  push the boundaries of creativity while staying true to the authentic emotions that make 
                  each celebration special.
                </p>
              </div>
            </div>

            <div className="relative">
              <img
                src={aboutPhotographer}
                alt="Our Photographer at Work"
                className="rounded-lg shadow-xl hover-lift"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission & Vision */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Mission</h3>
                <p className="text-muted-foreground">
                  To capture the essence of your special moments with authenticity, creativity, and 
                  professionalism. We strive to deliver not just photographs, but cherished memories 
                  that evoke emotions for generations to come.
                </p>
              </CardContent>
            </Card>

            <Card className="hover-lift">
              <CardContent className="p-8">
                <h3 className="text-2xl font-bold mb-4 text-primary">Our Vision</h3>
                <p className="text-muted-foreground">
                  To be the most trusted name in wedding and event photography, known for our artistic 
                  excellence, innovative techniques, and unwavering commitment to preserving life's 
                  most beautiful moments.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Visual Showcase */}
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">What We Do</h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Excellence in every shot, passion in every frame
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={aboutEquipment}
                alt="Professional Equipment"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Professional Equipment</h3>
                  <p className="text-white/90">
                    State-of-the-art cameras, lenses, and lighting equipment for perfect shots
                  </p>
                </div>
              </div>
            </div>

            <div className="relative group overflow-hidden rounded-lg">
              <img
                src={aboutAlbum}
                alt="Beautiful Albums"
                className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent flex items-end">
                <div className="p-6 text-white">
                  <h3 className="text-2xl font-bold mb-2">Elegant Delivery</h3>
                  <p className="text-white/90">
                    Premium albums and online galleries to showcase your precious memories
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Our Values</h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              {
                title: 'Authenticity',
                description: 'We capture genuine emotions and real moments, not staged perfection',
              },
              {
                title: 'Excellence',
                description: 'Every photograph meets our high standards of technical and artistic quality',
              },
              {
                title: 'Trust',
                description: 'We build lasting relationships based on reliability and professionalism',
              },
            ].map((value, index) => (
              <Card key={index} className="hover-lift text-center">
                <CardContent className="p-8">
                  <h3 className="text-xl font-bold mb-3 text-primary">{value.title}</h3>
                  <p className="text-muted-foreground">{value.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
