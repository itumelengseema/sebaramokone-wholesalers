import Image from 'next/image';
import React from 'react';
import ShapeIcon from '../../../../public/branding/ShapeIcon.svg';
import { Badge } from '@/components/ui/badge';

const AboutUs = () => {
  return (
    <div className='relative min-h-screen flex items-center justify-center overflow-hidden'>
      {/* Background with gradient overlay */}
      <div className='absolute inset-0 z-0'>
        <Image
          src='/aboutBg.jpg'
          alt='Fresh Seafood on Ice - Sebara Wholesalers'
          fill
          priority
          quality={100}
          className='object-cover'
          sizes='100vw'
        />
        <div className='absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40' />
      </div>

      {/* Content */}
      <div className='relative z-10 max-w-screen-xl w-full mx-auto px-6 py-20 md:py-32'>
        <div className='grid lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left content */}
          <div className='text-white space-y-8'>
            <div className='space-y-4'>
              <Badge className='bg-white/10 text-white border-white/20 hover:bg-white/20 backdrop-blur-sm px-4 py-1.5'>
                About Sebara Wholesalers
              </Badge>

              <div className='w-32 md:w-40'>
                <Image
                  src={ShapeIcon}
                  alt='Sebara Logo'
                  width={150}
                  height={40}
                  className='w-full h-auto'
                />
              </div>
            </div>

            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold leading-tight tracking-tight'>
              Where Quality Meets{' '}
              <span className='text-primary bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent'>
                Excellence
              </span>
            </h1>

            <p className='text-lg md:text-xl text-gray-200 leading-relaxed max-w-2xl'>
              At Sebara Wholesalers, success means that everyone takes pride in
              their work and leaves a meaningful impact on our community and
              customers.
            </p>

            {/* Stats */}
            <div className='grid grid-cols-3 gap-6 pt-6'>
              <div className='space-y-1'>
                <div className='text-3xl md:text-4xl font-bold text-primary'>
                  100+
                </div>
                <div className='text-sm text-gray-300'>Premium Products</div>
              </div>
              <div className='space-y-1'>
                <div className='text-3xl md:text-4xl font-bold text-primary'>
                  500+
                </div>
                <div className='text-sm text-gray-300'>Happy Clients</div>
              </div>
              <div className='space-y-1'>
                <div className='text-3xl md:text-4xl font-bold text-primary'>
                  10+
                </div>
                <div className='text-sm text-gray-300'>Years Experience</div>
              </div>
            </div>
          </div>

          {/* Right content - Feature highlights */}
          <div className='hidden lg:grid grid-rows-2 gap-6'>
            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300'>
              <div className='w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-primary'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='currentColor'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                  />
                </svg>
              </div>
              <h3 className='text-xl font-bold text-white mb-2'>
                Quality Guaranteed
              </h3>
              <p className='text-gray-300'>
                We source only the finest products from trusted local producers
                and suppliers.
              </p>
            </div>

            <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-8 hover:bg-white/15 transition-all duration-300'>
              <div className='w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center mb-4'>
                <svg
                  className='w-6 h-6 text-primary'
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
              <h3 className='text-xl font-bold text-white mb-2'>
                Fast Delivery
              </h3>
              <p className='text-gray-300'>
                Reliable and efficient delivery services to meet your business
                needs.
              </p>
            </div>
          </div>
        </div>

        {/* Mobile feature cards */}
        <div className='lg:hidden grid sm:grid-cols-2 gap-4 mt-12'>
          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6'>
            <div className='w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3'>
              <svg
                className='w-5 h-5 text-primary'
                fill='none'
                viewBox='0 0 24 24'
                stroke='currentColor'
              >
                <path
                  strokeLinecap='round'
                  strokeLinejoin='round'
                  strokeWidth={2}
                  d='M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z'
                />
              </svg>
            </div>
            <h3 className='text-lg font-bold text-white mb-1'>
              Quality Guaranteed
            </h3>
            <p className='text-sm text-gray-300'>
              Finest products from trusted suppliers
            </p>
          </div>

          <div className='bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-6'>
            <div className='w-10 h-10 bg-primary/20 rounded-lg flex items-center justify-center mb-3'>
              <svg
                className='w-5 h-5 text-primary'
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
            <h3 className='text-lg font-bold text-white mb-1'>Fast Delivery</h3>
            <p className='text-sm text-gray-300'>
              Reliable service for your business
            </p>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className='absolute bottom-8 left-1/2 transform -translate-x-1/2 z-10 hidden md:block'>
        <div className='flex flex-col items-center gap-2 text-white/60'>
          <span className='text-xs uppercase tracking-wider'>
            Scroll to explore
          </span>
          <svg
            className='w-6 h-6 animate-bounce'
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

export default AboutUs;
