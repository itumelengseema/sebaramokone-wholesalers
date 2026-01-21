import PartnerCTA from '@/components/sections/ContactUs/PartnerCTA';
import CallMeBackForm from '@/components/sections/ContactUs/CallMeBackForm';
import { MailIcon, PhoneIcon, MapPinIcon, Clock } from 'lucide-react';
import Link from 'next/link';

export default function ContactPage() {
  return (
    <div className=''>
      {/* Hero Section */}
      <section className='relative bg-gradient-to-br from-primary/5 via-background to-primary/5 py-20 md:py-32'>
        <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
          <div className='text-center max-w-3xl mx-auto'>
            <span className='inline-block px-4 py-1.5 mb-6 text-sm font-semibold text-primary bg-primary/10 rounded-full'>
              Get In Touch
            </span>
            <h1 className='text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight'>
              We&apos;d Love to Hear From You
            </h1>
            <p className='mt-6 text-lg md:text-xl text-muted-foreground'>
              Have a question or ready to place an order? Our team is here to
              help you every step of the way.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content - Form + Contact Info Side by Side */}
      <section className='py-16 md:py-24 bg-background'>
        <div className='max-w-screen-xl mx-auto px-6 xl:px-0'>
          <div className='grid lg:grid-cols-5 gap-12 lg:gap-16'>
            {/* Contact Form - Takes up more space */}
            <div className='lg:col-span-3'>
              <CallMeBackForm />
            </div>

            {/* Contact Information Sidebar */}
            <div className='lg:col-span-2 space-y-8'>
              <div>
                <h3 className='text-2xl font-bold mb-6'>Contact Information</h3>
                <p className='text-muted-foreground mb-8'>
                  Reach out to us through any of these channels. We&apos;re
                  available to assist you.
                </p>
              </div>

              {/* Contact Cards */}
              <div className='space-y-6'>
                <div className='flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors'>
                  <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0'>
                    <PhoneIcon className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Phone</h4>
                    <p className='text-sm text-muted-foreground mb-2'>
                      Mon-Fri, 8am to 5pm
                    </p>
                    <Link
                      href='tel:0788262922'
                      className='text-sm font-medium hover:text-primary'
                    >
                      0788262922
                    </Link>
                  </div>
                </div>

                <div className='flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors'>
                  <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0'>
                    <MailIcon className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Email</h4>
                    <p className='text-sm text-muted-foreground mb-2'>
                      We&apos;ll respond within 24 hours
                    </p>
                    <Link
                      href='mailto:orders@sebara.co.za'
                      className='text-sm font-medium hover:text-primary break-all'
                    >
                      orders@sebara.co.za
                    </Link>
                  </div>
                </div>

                <div className='flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors'>
                  <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0'>
                    <Clock className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Business Hours</h4>
                    <p className='text-sm text-muted-foreground'>
                      Monday - Friday: 8:00 AM - 5:00 PM
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Saturday - Sunday: Closed
                    </p>
                  </div>
                </div>

                <div className='flex gap-4 p-4 rounded-lg border bg-card hover:bg-accent transition-colors'>
                  <div className='h-12 w-12 flex items-center justify-center bg-primary/10 text-primary rounded-lg shrink-0'>
                    <MapPinIcon className='h-5 w-5' />
                  </div>
                  <div>
                    <h4 className='font-semibold mb-1'>Location</h4>
                    <p className='text-sm text-muted-foreground'>
                      South Africa
                    </p>
                    <p className='text-sm text-muted-foreground'>
                      Serving nationwide
                    </p>
                  </div>
                </div>
              </div>

              {/* Quick Stats or Trust Signals */}
              <div className='mt-8 p-6 rounded-lg bg-primary/5 border border-primary/10'>
                <h4 className='font-semibold mb-3'>Why Choose Us?</h4>
                <ul className='space-y-2 text-sm text-muted-foreground'>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary mt-0.5'>✓</span>
                    <span>Quick response within 24 hours</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary mt-0.5'>✓</span>
                    <span>Expert guidance and support</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary mt-0.5'>✓</span>
                    <span>Competitive wholesale pricing</span>
                  </li>
                  <li className='flex items-start gap-2'>
                    <span className='text-primary mt-0.5'>✓</span>
                    <span>Quality products guaranteed</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <PartnerCTA />
    </div>
  );
}
