import About from '@/components/sections/AboutusSection';
import CompetitiveEdgePage from '@/components/sections/CompetitiveEdgeSection';
import Hero from '@/components/sections/Hero';
import Logos from '@/components/sections/Logos';

import ProductShowcase from '@/components/sections/ProductsShowcase';

export const revalidate = 60; // Revalidate every 60 seconds

export default function Home() {
  return (
    <div className=''>
      <Hero />
      <div className='container mx-auto'>
        <About />
        <CompetitiveEdgePage />
        <ProductShowcase />
        <Logos />
      </div>
    </div>
  );
}
