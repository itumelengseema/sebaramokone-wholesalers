import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, ShoppingCart } from 'lucide-react';
import { getFeaturedProducts } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';

const ProductCarousel = async () => {
  const featuredProducts = await getFeaturedProducts();

  // Fallback products if no featured products in Sanity
  const fallbackProducts = [
    {
      _id: 'fallback-1',
      _createdAt: new Date().toISOString(),
      name: 'Premium Seafood Selection',
      slug: { current: 'premium-seafood' },
      description:
        'Explore our premium range of fresh seafood including Norwegian Salmon, Mozambique Prawns, and more. Perfect for restaurants and retailers.',
      image: {
        asset: {
          _ref: 'image-placeholder',
          _type: 'reference',
        },
        alt: 'Premium Seafood Selection',
      },
      category: 'seafood',
      unit: 'Various sizes available',
      availability: 'in-stock' as const,
      featured: true,
    },
  ];

  const products =
    featuredProducts.length > 0 ? featuredProducts : fallbackProducts;

  const getCategoryLabel = (category: string) => {
    const labels: Record<string, string> = {
      'fresh-produce': 'Fresh Produce',
      seafood: 'Seafood',
      meat: 'Meat',
      dairy: 'Dairy',
      grains: 'Grains & Cereals',
      other: 'Other',
    };
    return labels[category] || category;
  };

  const getAvailabilityBadge = (availability: string) => {
    const badges: Record<string, string> = {
      'in-stock': 'In Stock',
      'out-of-stock': 'Out of Stock',
      seasonal: 'Seasonal',
    };
    return badges[availability] || 'Available';
  };

  return (
    <section className='py-16 md:py-24 bg-muted/30'>
      <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
        {/* Section Header */}
        <div className='text-center mb-12 md:mb-16'>
          <Badge className='mb-4 px-4 py-1.5'>🌟 Latest Products</Badge>
          <h2 className='text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4'>
            Browse Our Latest Collection
          </h2>
          <p className='text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto'>
            Enjoy a seamless shopping experience with our interactive product
            showcase. Explore quality products perfect for your business needs.
          </p>
        </div>

        {/* Products Grid - Desktop */}
        <div className='hidden md:grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12'>
          {products.slice(0, 4).map((product, index) => (
            <Card
              key={product._id || index}
              className='overflow-hidden group hover:shadow-xl transition-all duration-300 border-2 hover:border-primary/50'
            >
              {product.image &&
              product.image.asset &&
              product.image.asset._ref !== 'image-placeholder' ? (
                <div className='relative h-48 overflow-hidden bg-muted'>
                  <Image
                    src={urlFor(product.image).width(400).height(300).url()}
                    alt={product.image.alt || product.name}
                    fill
                    className='object-cover group-hover:scale-110 transition-transform duration-300'
                  />
                  <Badge className='absolute top-3 right-3 bg-primary'>
                    {getAvailabilityBadge(product.availability)}
                  </Badge>
                </div>
              ) : (
                <div className='relative h-48 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center'>
                  <ShoppingCart className='h-16 w-16 text-primary/30' />
                  <Badge className='absolute top-3 right-3 bg-primary'>
                    {getAvailabilityBadge(product.availability)}
                  </Badge>
                </div>
              )}
              <CardHeader>
                <div className='text-sm text-primary font-semibold mb-1'>
                  {getCategoryLabel(product.category)}
                </div>
                <CardTitle className='text-xl line-clamp-2'>
                  {product.name}
                </CardTitle>
                {product.unit && (
                  <CardDescription className='text-sm text-muted-foreground'>
                    {product.unit}
                  </CardDescription>
                )}
              </CardHeader>
              <CardContent>
                <p className='text-sm text-muted-foreground line-clamp-3'>
                  {product.description ||
                    'Premium quality product sourced from trusted suppliers.'}
                </p>
              </CardContent>
              <CardFooter>
                <Button className='w-full group/btn' asChild>
                  <Link href='/products'>
                    View Details
                    <ArrowRight className='ml-2 h-4 w-4 group-hover/btn:translate-x-1 transition-transform' />
                  </Link>
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Products Carousel - Mobile */}
        <div className='md:hidden mb-12'>
          <Carousel>
            <CarouselContent>
              {products.slice(0, 4).map((product, index) => (
                <CarouselItem key={product._id || index}>
                  <Card className='overflow-hidden border-2'>
                    {product.image &&
                    product.image.asset &&
                    product.image.asset._ref !== 'image-placeholder' ? (
                      <div className='relative h-56 overflow-hidden bg-muted'>
                        <Image
                          src={urlFor(product.image)
                            .width(400)
                            .height(400)
                            .url()}
                          alt={product.image.alt || product.name}
                          fill
                          className='object-cover'
                        />
                        <Badge className='absolute top-3 right-3 bg-primary'>
                          {getAvailabilityBadge(product.availability)}
                        </Badge>
                      </div>
                    ) : (
                      <div className='relative h-56 overflow-hidden bg-gradient-to-br from-primary/10 to-primary/5 flex items-center justify-center'>
                        <ShoppingCart className='h-20 w-20 text-primary/30' />
                        <Badge className='absolute top-3 right-3 bg-primary'>
                          {getAvailabilityBadge(product.availability)}
                        </Badge>
                      </div>
                    )}
                    <CardHeader>
                      <div className='text-sm text-primary font-semibold mb-1'>
                        {getCategoryLabel(product.category)}
                      </div>
                      <CardTitle className='text-xl'>{product.name}</CardTitle>
                      {product.unit && (
                        <CardDescription>{product.unit}</CardDescription>
                      )}
                    </CardHeader>
                    <CardContent>
                      <p className='text-sm text-muted-foreground'>
                        {product.description ||
                          'Premium quality product sourced from trusted suppliers.'}
                      </p>
                    </CardContent>
                    <CardFooter>
                      <Button className='w-full' asChild>
                        <Link href='/products'>
                          View Details
                          <ArrowRight className='ml-2 h-4 w-4' />
                        </Link>
                      </Button>
                    </CardFooter>
                  </Card>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious />
            <CarouselNext />
          </Carousel>
        </div>

        {/* Call to Action */}
        <div className='text-center'>
          <Button size='lg' asChild className='group'>
            <Link href='/products'>
              <ShoppingCart className='mr-2 h-5 w-5' />
              View All Products
              <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProductCarousel;
