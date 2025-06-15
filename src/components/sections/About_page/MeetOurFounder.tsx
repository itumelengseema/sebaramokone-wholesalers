import React from 'react';
import Image from 'next/image';

const MeetOurFounder = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-white text-gray-900">
      <div className="max-w-screen-xl w-full mx-auto grid lg:grid-cols-2 gap-12 px-6 py-16">
        {/* Left content */}
        <div>
          <span className="inline-block bg-primary/10 text-primary px-4 py-1 text-sm font-semibold rounded-full">
            Meet Our Founder
          </span>
          <h3 className="mt-6 max-w-[18ch] text-3xl md:text-5xl font-bold !leading-[1.2]">
            Naidene Knife — Visionary. Builder. Leader.
          </h3>
          <p className="mt-6 max-w-[65ch] text-md leading-relaxed">
            Naidene’s journey is anything but conventional. She didn’t have a
            fancy degree or a roadmap. But she had something more powerful:
            vision, instinct, and the courage to act.
            <br />
            <br />
            After years working behind the scenes in seafood trade, she took a
            leap — and turned a R40,000 investment into a company that now feeds
            restaurants, retailers, and communities across South Africa. Her
            leadership is bold, hands-on, and grounded in real service. She
            walks the floor, calls the clients, and never loses sight of why she
            started.
            <br />
            <br />
            She’s building more than a business. She’s building a future her son
            — and all African children — can be proud of.
          </p>

        
        </div>

        {/* Right image */}
        <div className="w-full aspect-square relative  overflow-hidden ">
          <Image
            src="/images/CEO.svg"
            alt="Naidene Knife - CEO"
            fill
            className="object-contain"
            priority
          />
        </div>
      </div>
    </div>
  );
};

export default MeetOurFounder;
