import { Star, Shield, Target, Rocket, CheckCircle } from 'lucide-react';
import Link from 'next/link'; // Import Link for navigation

const competitiveEdge = [
  {
    icon: Star,
    title: 'Unmatched Quality',
    description:
      'We provide the highest quality seafood and fresh produce, sourced directly from trusted suppliers to ensure freshness and reliability.',
    tutorialLink: '#', // Link to more details
  },
  {
    icon: Shield,
    title: 'Sustainability Commitment',
    description:
      'Our ethical sourcing practices and commitment to sustainability set us apart, ensuring that we’re making a positive impact on the environment.',
    tutorialLink: '#', // Link to sustainability or more info
  },
  {
    icon: Target,
    title: 'Customer-Centric Approach',
    description:
      'We focus on delivering exceptional customer experiences by offering tailored solutions and going the extra mile to meet your needs.',
    tutorialLink: '#', // Link to customer service or more info
  },
  {
    icon: Rocket,
    title: 'Rapid Delivery Network',
    description:
      'With our independent refrigerated vehicle network, we guarantee on-time, efficient deliveries, ensuring you receive your products when you need them.',
    tutorialLink: '#', // Link to delivery service or more info
  },
  {
    icon: CheckCircle,
    title: 'Proven Track Record',
    description:
      'Our established history of successful partnerships and a proven track record of delivering high-quality service makes us a reliable choice.',
    tutorialLink: '#', // Link to case studies or more info
  },
];

const CompetitiveEdgePage = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-10">
      <div className="text-center">
        <h2 className=" text-4xl md:text-5xl font-black tracking-tight">
          Our Competitive Edge
        </h2>
        <p className="mt-4 text-lg text-foreground/80">
          Discover what sets us apart in the seafood distribution industry.
        </p>
        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-2 md:px-2">
          {competitiveEdge.map(
            ({ icon: Icon, title, description, tutorialLink }) => (
              <div
                key={title}
                className="flex flex-col border rounded-xl py-6 px-5"
              >
                <div className="mb-3 h-10 w-10 flex items-center justify-center bg-muted rounded-full">
                  <Icon className="h-6 w-6" />
                </div>
                <span className="text-lg font-bold tracking-tight">
                  {title}
                </span>
                <p className="mt-1 text-foreground/80 text-[15px]">
                  {description}
                </p>
                <Link
                  href={tutorialLink}
                  className="mt-4 text-primary font-semibold hover:underline"
                >
                  Learn More
                </Link>
              </div>
            )
          )}
        </div>
      </div>
    </div>
  );
};

export default CompetitiveEdgePage;
