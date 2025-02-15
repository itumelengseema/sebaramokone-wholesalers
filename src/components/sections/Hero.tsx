'use client'; // Marking as client component

import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import heroImage from '../../../public/images/pexels-toulouse-15974829.jpg';
import { motion, useScroll, useTransform } from 'framer-motion'; // Import motion and useScroll from framer-motion

const Hero = () => {
  // Setting up the scroll effect using useScroll from framer-motion
  const { scrollYProgress } = useScroll();

  // Creating a bounce effect with a spring animation
  const bounce = useTransform(scrollYProgress, [0, 1], [1, 1.2]); // Ball bounce effect, scaling the element up

  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12">
        {/* Left Content */}
        <motion.div
          style={{ scale: bounce }} // Applying the ball bounce animation (scale) to the left content
          className="space-y-6"
        >
          <Badge className="bg-gradient-to-br via-70% from-primary via-muted/30 to-primary rounded-full py-1 border-none">
            Place Your Order
          </Badge>
          <h1 className="mt-6 max-w-[15ch] text-5xl lg:text-[2.75rem] xl:text-5xl font-black leading-[1.1] tracking-tight">
            Lorem ipsum dolor sit amet consectetur.
          </h1>
          <p className="mt-6 max-w-[60ch] text-lg">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quo quasi voluptatibus dolorum pariatur quod eligendi sequi totam alias in!
          </p>
          <div className="mt-12 flex items-center gap-4">
            <Button size="lg" className="rounded-full text-base">
              Learn More <ArrowUpRight className="!h-5 !w-5" />
            </Button>
            <Button variant="outline" size="lg" className="rounded-full text-base shadow-none">
              Order Now
            </Button>
          </div>
        </motion.div>

        {/* Right Image Section */}
        <motion.div
          className="w-full h-full relative rounded-xl overflow-hidden"
          style={{ scale: bounce }} // Applying the bounce effect to the image as well
        >
          <Image src={heroImage} alt="Hero" layout="fill" objectFit="cover" />
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
