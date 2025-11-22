import { useState } from 'react';
import { X } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs';
import gallery1 from '@/assets/gallery-1.jpg';
import gallery2 from '@/assets/gallery-2.jpg';
import gallery3 from '@/assets/gallery-3.jpg';
import gallery4 from '@/assets/gallery-4.jpg';
import gallery5 from '@/assets/gallery-5.jpg';
import gallery6 from '@/assets/gallery-6.jpg';

interface Photo {
  src: string;
  alt: string;
  category: string;
}

const Gallery = () => {
  const [selectedImage, setSelectedImage] = useState<Photo | null>(null);

  const photos: Photo[] = [
    { src: gallery1, alt: 'Bride Portrait', category: 'portraits' },
    { src: gallery2, alt: 'Wedding Dance', category: 'weddings' },
    { src: gallery3, alt: 'Traditional Ceremony', category: 'ceremonies' },
    { src: gallery4, alt: 'Wedding Rings', category: 'details' },
    { src: gallery5, alt: 'Guest Celebration', category: 'events' },
    { src: gallery6, alt: 'Sunset Silhouette', category: 'portraits' },
  ];

  const categories = [
    { value: 'all', label: 'All Photos' },
    { value: 'weddings', label: 'Weddings' },
    { value: 'portraits', label: 'Portraits' },
    { value: 'ceremonies', label: 'Ceremonies' },
    { value: 'details', label: 'Details' },
    { value: 'events', label: 'Events' },
  ];

  const getFilteredPhotos = (category: string) => {
    if (category === 'all') return photos;
    return photos.filter((photo) => photo.category === category);
  };

  return (
    <div className="min-h-screen pt-24">
      <section className="section-padding">
        <div className="container mx-auto">
          <div className="text-center mb-12 animate-fade-in">
            <h1 className="text-5xl md:text-6xl font-bold mb-6">Our Gallery</h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of beautiful moments captured with love and artistry
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-3 md:grid-cols-6 mb-12">
              {categories.map((category) => (
                <TabsTrigger key={category.value} value={category.value}>
                  {category.label}
                </TabsTrigger>
              ))}
            </TabsList>

            {categories.map((category) => (
              <TabsContent key={category.value} value={category.value}>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {getFilteredPhotos(category.value).map((photo, index) => (
                    <div
                      key={index}
                      className="relative group overflow-hidden rounded-lg cursor-pointer hover-lift"
                      onClick={() => setSelectedImage(photo)}
                    >
                      <img
                        src={photo.src}
                        alt={photo.alt}
                        className="w-full h-80 object-cover transition-transform duration-300 group-hover:scale-110"
                      />
                      <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <span className="text-white font-medium">View Full Size</span>
                      </div>
                    </div>
                  ))}
                </div>
              </TabsContent>
            ))}
          </Tabs>
        </div>
      </section>

      {/* Lightbox */}
      {selectedImage && (
        <div
          className="fixed inset-0 z-50 bg-black/95 flex items-center justify-center p-4 animate-fade-in"
          onClick={() => setSelectedImage(null)}
        >
          <Button
            variant="ghost"
            size="icon"
            className="absolute top-4 right-4 text-white hover:bg-white/20"
            onClick={() => setSelectedImage(null)}
          >
            <X className="h-6 w-6" />
          </Button>

          <img
            src={selectedImage.src}
            alt={selectedImage.alt}
            className="max-w-full max-h-[90vh] object-contain animate-scale-in"
            onClick={(e) => e.stopPropagation()}
          />
        </div>
      )}

      {/* CTA Section */}
      <section className="section-padding bg-muted/30">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Love What You See?</h2>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Let's create beautiful memories for your special day. Get in touch to discuss your photography needs.
          </p>
          <Button size="lg" asChild>
            <a href="/contact">Book Your Session</a>
          </Button>
        </div>
      </section>
    </div>
  );
};

export default Gallery;
