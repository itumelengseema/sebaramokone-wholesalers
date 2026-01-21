import { getAllProducts } from '@/lib/sanity/queries';
import { urlFor } from '@/lib/sanity/client';
import { Product } from '@/types/product';
import Image from 'next/image';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import { Fish, Beef, Apple, Package } from 'lucide-react';
import Link from 'next/link';

export const revalidate = 60; // Revalidate every 60 seconds

export default async function ProductsPage() {
  const products = await getAllProducts();

  // Group products by category
  const categories = [
    {
      value: 'fresh-produce',
      label: 'Fresh Produce',
      icon: Apple,
      color: 'from-green-500 to-emerald-600',
      bgColor: 'bg-green-50 hover:bg-green-100',
    },
    {
      value: 'seafood',
      label: 'Seafood',
      icon: Fish,
      color: 'from-blue-500 to-cyan-600',
      bgColor: 'bg-blue-50 hover:bg-blue-100',
    },
    {
      value: 'meat',
      label: 'Meat',
      icon: Beef,
      color: 'from-red-500 to-rose-600',
      bgColor: 'bg-red-50 hover:bg-red-100',
    },
    {
      value: 'other',
      label: 'Other',
      icon: Package,
      color: 'from-purple-500 to-violet-600',
      bgColor: 'bg-purple-50 hover:bg-purple-100',
    },
  ];

  return (
    <div className='min-h-screen bg-background'>
      {/* Quick Shop by Category Section */}
      <section className='bg-gradient-to-br from-primary/5 via-background to-primary/10 py-12 md:py-16'>
        <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
          <div className='text-center mb-10'>
            <h2 className='text-3xl md:text-4xl font-bold mb-3'>
              Quick Shop by Category
            </h2>
            <p className='text-muted-foreground text-lg'>
              Find exactly what you need in seconds
            </p>
          </div>

          <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4'>
            {categories.map((category) => {
              const Icon = category.icon;
              const categoryCount = products.filter(
                (p) => p.category === category.value,
              ).length;

              return (
                <a
                  key={category.value}
                  href={`#${category.value}`}
                  className={`${category.bgColor} rounded-xl p-6 text-center transition-all duration-300 hover:shadow-lg hover:scale-105 border border-border group`}
                >
                  <div
                    className={`w-16 h-16 mx-auto mb-4 rounded-full bg-gradient-to-br ${category.color} flex items-center justify-center group-hover:scale-110 transition-transform`}
                  >
                    <Icon className='w-8 h-8 text-white' />
                  </div>
                  <h3 className='font-semibold text-sm mb-1'>
                    {category.label}
                  </h3>
                  <p className='text-xs text-muted-foreground'>
                    {categoryCount} products
                  </p>
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Banner Image Section */}
      <section className='relative h-[300px] md:h-[400px] overflow-hidden'>
        <div className='absolute inset-0 bg-gradient-to-r from-black/60 to-black/40 z-10' />
        <Image
          src='/images/products-banner.jpg'
          alt='Fresh wholesale products banner'
          fill
          className='object-cover'
          priority
          quality={100}
        />
        <div className='relative z-20 h-full flex items-center justify-center text-center px-6'>
          <div className='max-w-3xl'>
            <h2 className='text-3xl md:text-5xl font-bold text-white mb-4'>
              Fresh Quality, Wholesale Prices
            </h2>
            <p className='text-lg md:text-xl text-white/90 mb-6'>
              Premium products sourced directly from trusted suppliers
            </p>
            <div className='flex flex-wrap gap-4 justify-center'>
              <Badge className='bg-white text-primary px-4 py-2 text-sm font-semibold'>
                ✓ Fresh Daily
              </Badge>
              <Badge className='bg-white text-primary px-4 py-2 text-sm font-semibold'>
                ✓ Competitive Pricing
              </Badge>
              <Badge className='bg-white text-primary px-4 py-2 text-sm font-semibold'>
                ✓ Bulk Orders
              </Badge>
            </div>
          </div>
        </div>
      </section>

      {/* Products Grid */}
      <section className='py-16 md:py-24 bg-muted/20'>
        <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
          {products.length === 0 ? (
            <div className='text-center py-20'>
              <h2 className='text-2xl font-bold mb-4'>
                No Products Available Yet
              </h2>
              <p className='text-muted-foreground mb-8'>
                We&apos;re currently adding products to our catalog. Please
                check back soon!
              </p>
              <Button asChild>
                <a href='/ContactUs'>Contact Us</a>
              </Button>
            </div>
          ) : (
            <>
              {categories.map((category) => {
                const categoryProducts = products.filter(
                  (p) => p.category === category.value,
                );

                if (categoryProducts.length === 0) return null;

                return (
                  <div
                    key={category.value}
                    id={category.value}
                    className='mb-16 scroll-mt-20'
                  >
                    <div className='flex items-center gap-3 mb-8'>
                      {(() => {
                        const Icon = category.icon;
                        return (
                          <div
                            className={`w-12 h-12 rounded-lg bg-gradient-to-br ${category.color} flex items-center justify-center`}
                          >
                            <Icon className='w-6 h-6 text-white' />
                          </div>
                        );
                      })()}
                      <h2 className='text-3xl font-bold'>{category.label}</h2>
                    </div>
                    <div className='grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6'>
                      {categoryProducts.map((product) => (
                        <ProductCard key={product._id} product={product} />
                      ))}
                    </div>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </section>
    </div>
  );
}

function ProductCard({ product }: { product: Product }) {
  const availabilityColors = {
    'in-stock': 'bg-green-500/10 text-green-700 border-green-200',
    'out-of-stock': 'bg-red-500/10 text-red-700 border-red-200',
    seasonal: 'bg-orange-500/10 text-orange-700 border-orange-200',
  };

  const availabilityLabels = {
    'in-stock': 'In Stock',
    'out-of-stock': 'Out of Stock',
    seasonal: 'Seasonal',
  };

  return (
    <Card className='overflow-hidden hover:shadow-lg transition-shadow'>
      {product.image && (
        <div className='relative h-48 w-full bg-muted'>
          <Image
            src={urlFor(product.image).width(400).height(300).url()}
            alt={product.image.alt || product.name}
            fill
            className='object-cover'
          />
          {product.featured && (
            <Badge className='absolute top-3 right-3 bg-primary'>
              Featured
            </Badge>
          )}
        </div>
      )}
      <CardHeader>
        <div className='flex items-start justify-between gap-2'>
          <CardTitle className='line-clamp-2'>{product.name}</CardTitle>
          <Badge
            variant='outline'
            className={availabilityColors[product.availability]}
          >
            {availabilityLabels[product.availability]}
          </Badge>
        </div>
        {product.description && (
          <CardDescription className='line-clamp-2'>
            {product.description}
          </CardDescription>
        )}
      </CardHeader>
      <CardContent>
        <div className='space-y-2'>
          <p className='text-sm text-muted-foreground'>
            Contact us for competitive wholesale pricing
          </p>
          <div className='flex gap-2 text-xs text-muted-foreground'>
            <span>📞 Call</span>
            <span>✉️ Email</span>
            <span>💬 WhatsApp</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className='flex flex-col gap-2'>
        <Button className='w-full' asChild>
          <a
            href={`https://wa.me/27788262922?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote%20for%20${encodeURIComponent(product.name)}`}
            target='_blank'
            rel='noopener noreferrer'
          >
            Get a Quote
          </a>
        </Button>
        <Button className='w-full' variant='outline' asChild>
          <a href='/ContactUs'>Request Call Back</a>
        </Button>
      </CardFooter>
    </Card>
  );
}
