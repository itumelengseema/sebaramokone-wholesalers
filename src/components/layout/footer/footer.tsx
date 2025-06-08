import { Separator } from '@/components/ui/separator';
import { Instagram, Linkedin } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import logo from '../../../../public/branding/logo sebara.svg';
const footerLinks = [
  {
    title: ' Blog',
    href: '#',
  },
  {
    title: 'About Us',
    href: '#',
  },
  {
    title: 'Help',
    href: '#',
  },
  {
    title: 'Privacy',
    href: '#',
  },
];

const Footer = () => {
  return (
    <div className=" flex flex-col bg-stone-100 rounded-t-3xl">
      <footer>
        <div className="max-w-screen-xl mx-auto">
          <div className="py-9 flex flex-col justify-start items-center">
            {/* Logo */}
            <Image
              src={logo}
              alt="Logo"
              width={120}
              height={40}
              className="grayscale opacity-80 hover:opacity-100 transition-opacity duration-300"
            />

            <ul className="mt-6 flex items-center gap-4 flex-wrap">
              {footerLinks.map(({ title, href }) => (
                <li key={title}>
                  <Link
                    href={href}
                    className="text-muted-foreground hover:text-foreground font-medium"
                  >
                    {title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
          <Separator />
          <div className="py-8 flex flex-col-reverse sm:flex-row items-center justify-between gap-x-2 gap-y-5 px-6 xl:px-0">
            {/* Copyright */}
            <span className="text-muted-foreground">
              &copy; {new Date().getFullYear()}{' '}
              <Link href="/" target="_blank">
                SEBARAMOKONE (PTY) LTD
              </Link>
              . All rights reserved.
            </span>

            <div className="flex items-center gap-5 text-muted-foreground">
              <Link href="#" target="_blank">
                <Linkedin className="h-5 w-5" />
              </Link>
              <Link href="#" target="_blank">
                <Instagram className="h-5 w-5" />
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
