import { Button } from '@/components/ui/button';
import { Logo } from './logo';
import { NavMenu } from './nav-menu';
import { NavigationSheet } from './navigation-sheet';

const Navbar02Page = () => {
  return (
    <nav className='h-16  bg-opacity-50 backdrop-blur-md sticky top-0 z-50 '>
      <div className='h-full flex items-center justify-between max-w-screen-xl mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center gap-8'>
          <Logo />

          {/* Desktop Menu */}
          <NavMenu className='hidden md:block' />
        </div>

        <div className='flex items-center gap-3'>
          <Button variant='outline' className='hidden sm:hidden'>
            Sign In
          </Button>
          <Button className='' asChild>
            <a
              href='https://wa.me/27764245677?text=Hi%2C%20I%27d%20like%20to%20place%20an%20order'
              target='_blank'
              rel='noopener noreferrer'
            >
              Order Now
            </a>
          </Button>

          {/* Mobile Menu */}
          <div className='md:hidden'>
            <NavigationSheet />
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar02Page;
