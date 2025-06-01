import React from 'react';

const Hero01 = () => {
  return (
    <div
      style={{
        backgroundImage: `url('/images/Company Culture Website (4).svg')`,
        backgroundRepeat: 'no-repeat',
        backgroundPosition: 'center',
        backgroundSize: '75%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
      // Tailwind responsive height: 60vh on mobile, 100vh on md and up
      className="h-[40vh] md:h-screen md:bg-cover md:bg-center"
    ></div>
  );
};

export default Hero01;
