import React from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowRight, Phone, ShoppingCart } from 'lucide-react';

const Hero01 = () => {
  return (
    <div className='relative w-full min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background Image with Overlay */}
      <div className='absolute inset-0 w-full h-full z-0'>
        <Image
          src='/images/pexels-toulouse-15974829.jpg'
          alt='Fresh Wholesale Seafood'
          fill
          priority
          quality={100}
          className='object-cover w-full h-full'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/90 via-black/70 to-black/50' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-screen-xl w-full mx-auto px-6 py-20 md:py-32'>
        <div className='grid lg:grid-cols-2 gap-12 items-center'>
          {/* Left Content */}
          <div className='text-white space-y-8'>
            <div className='space-y-4'>
              <Badge className='bg-primary/20 text-primary border-primary/30 hover:bg-primary/30 backdrop-blur-sm px-4 py-1.5 text-sm font-semibold'>
                🐟 Premium Wholesale Seafood
              </Badge>

              <h1 className='text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight'>
                Fresh From Ocean to{' '}
                <span className='text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                  Your Business
                </span>
              </h1>

              <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl'>
                Quality wholesale seafood and fresh produce sourced directly
                from trusted South African producers. Competitive pricing,
                reliable delivery, and exceptional service for your business.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className='flex flex-col sm:flex-row gap-4 pt-4'>
              <Button size='lg' className='text-lg px-8 py-6 group' asChild>
                <a href='/products'>
                  Browse Products
                  <ArrowRight className='ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform' />
                </a>
              </Button>

              <Button
                size='lg'
                variant='outline'
                className='text-lg px-8 py-6 bg-white/10 border-white/30 text-white hover:bg-white/20 backdrop-blur-sm'
                asChild
              >
                <a
                  href='https://wa.me/27764245677?text=Hi%2C%20I%27d%20like%20to%20get%20a%20quote'
                  target='_blank'
                  rel='noopener noreferrer'
                >
                  <Phone className='mr-2 h-5 w-5' />
                  Get a Quote
                </a>
              </Button>
            </div>

            {/* Trust Indicators */}
            <div className='grid grid-cols-3 gap-6 pt-8 border-t border-white/20'>
              <div className='space-y-1'>
                <div className='text-3xl md:text-4xl font-bold text-primary'>
                  100%
                </div>
                <div className='text-sm text-gray-300'>Fresh Quality</div>
              </div>
              <div className='space-y-1'>
                <div className='text-3xl md:text-4xl font-bold text-primary'>
                  24/7
                </div>
                <div className='text-sm text-gray-300'>Support</div>
              </div>
              <div className='space-y-1'>
                <div className='text-3xl md:text-4xl font-bold text-primary'>
                  500+
                </div>
                <div className='text-sm text-gray-300'>Happy Clients</div>
              </div>
            </div>
          </div>

          {/* Right Content - Feature Cards */}
          <div className='hidden lg:grid gap-6'>
            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105'>
              <div className='w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4'>
                <ShoppingCart className='w-7 h-7 text-primary' />
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Wide Selection
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                From fresh fish to premium seafood, we offer an extensive range
                of quality products for your business needs.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105'>
              <div className='w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4'>
                <svg
                  className='w-7 h-7 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Competitive Pricing
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                Get wholesale prices that help your business thrive. Volume
                discounts available for bulk orders.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300 hover:scale-105'>
              <div className='w-14 h-14 bg-primary/20 rounded-xl flex items-center justify-center mb-4'>
                <svg
                  className='w-7 h-7 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M13 10V3L4 14h7v7l9-11h-7z'
                  />
                </svg>
              </div>
              <h3 className='text-2xl font-bold text-white mb-2'>
                Fast Delivery
              </h3>
              <p className='text-gray-300 leading-relaxed'>
                Reliable nationwide delivery ensuring your products arrive fresh
                and on time, every time.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile Feature Cards */}
        <div className='lg:hidden grid sm:grid-cols-2 gap-4 mt-12'>
          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white'>
            <ShoppingCart className='w-8 h-8 text-primary mb-3' />
            <h3 className='text-lg font-bold mb-1'>Wide Selection</h3>
            <p className='text-sm text-gray-300'>
              Extensive range of quality products
            </p>
          </div>

          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6 text-white'>
            <svg
              className='w-8 h-8 text-primary mb-3'
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth={2}
                d='M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z'
              />
            </svg>
            <h3 className='text-lg font-bold mb-1'>Best Prices</h3>
            <p className='text-sm text-gray-300'>
              Competitive wholesale pricing
            </p>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block'>
        <div className='flex flex-col items-center gap-2 text-white/60 animate-bounce'>
          <span className='text-xs uppercase tracking-wider'>
            Scroll to explore
          </span>
          <svg
            className='w-6 h-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='currentColor'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 14l-7 7m0 0l-7-7m7 7V3'
            />
          </svg>
        </div>
      </div>
    </div>
  );
};

export default Hero01;
