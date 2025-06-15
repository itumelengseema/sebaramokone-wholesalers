import Image from 'next/image';

import React from 'react';
import ShapeIcon from '../../../../public/branding/ShapeIcon.svg';

const AboutUs = () => {
  return (
    <div className="min-h-screen flex items-center justify-center overflow-hidden bg-nyami text-white">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-12 lg:py-0">
        {/* Left content */}
        <div className="my-auto">
          <Image src={ShapeIcon} alt="Sebara Logo" width="150" height="40" />
          <h1 className="mt-6 max-w-[17ch] text-4xl md:text-5xl lg:text-[2.75rem] xl:text-5xl font-bold !leading-[1.2] tracking-tight">
            Seafood, success means that everyone takes pride in their work and
            leaves a meaningful impact.
          </h1>
        </div>

        {/* Right image/background section */}
        <div
          className="w-full aspect-video lg:aspect-auto lg:w-[1000px] lg:h-screen rounded-xl lg:rounded-none"
          style={{
            backgroundImage: `url('/aboutBg.jpg')`,
            backgroundSize: 'cover',
          
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
        />
      </div>
    </div>
  );
};

export default AboutUs;
