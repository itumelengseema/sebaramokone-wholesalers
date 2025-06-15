import About from '@/components/sections/AboutusSection';
import CompetitiveEdgePage from '@/components/sections/CompetitiveEdgeSection';
import Hero from '@/components/sections/Hero';
import Logos from '@/components/sections/Logos';
import Team from '@/components/sections/OurTeam';
import ProductShowcase from '@/components/sections/ProductsShowcase';

export default function Home() {
  return (
    <div className="container mx-auto">
      <Hero />
      <About />
      <CompetitiveEdgePage />
     
      <ProductShowcase />
      <Logos />
    </div>
  );
}
