import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

const features = [
  {
    category: "Seafood & Fresh Produce Distribution",
    title: "Efficient Delivery of Fresh Seafood & Produce",
    details:
      "We provide fresh and frozen seafood and produce to restaurants, retailers, and hotels across Africa, ensuring timely and reliable deliveries.",
    tutorialLink: "#", // Link to services or more information
  },
  {
    category: "Independent Delivery Network",
    title: "On-Demand & Scheduled Deliveries",
    details:
      "By partnering with independent refrigerated vehicle owners, we ensure that deliveries are made swiftly and efficiently.",
    tutorialLink: "#", // Link to partner with us or more info
  },
  {
    category: "Sustainability & Ethical Sourcing",
    title: "Promoting Sustainability and Ethical Sourcing",
    details:
      "Our collaboration with artisanal fishermen and farmers supports ethical practices and ensures sustainable sourcing of all products.",
    tutorialLink: "#", // Link to sustainability or more info
  },
  {
    category: "Youth Training & Industry Representation",
    title: "Empowering Young People of Color in the Industry",
    details:
      "We invest in training and mentoring young Africans, providing them with skills in logistics and food distribution management.",
    tutorialLink: "#", // Link to youth programs or more info
  },
  {
    category: "Partner with Us",
    title: "Join Us in Revolutionizing the Food Supply Chain",
    details:
      "Restaurants, retailers, and independent drivers can join us to become a part of our growing network and benefit from increased operational efficiency.",
    tutorialLink: "#", // Link to partner signup or more info
  },
];

const About = () => {
  return (
    <div className="min-h-screen flex items-center justify-center">
      <div className="max-w-screen-lg w-full py-10 px-6">
        <h2 className="text-4xl md:text-5xl md:leading-[3.5rem] font-black tracking-tight max-w-xl md:text-center md:mx-auto">
          Revolutionizing Seafood Distribution with Efficiency and Sustainability
        </h2>
        <div className="mt-8 md:mt-16 w-full mx-auto space-y-20">
          {features.map((feature) => (
            <div
              key={feature.category}
              className="flex flex-col md:flex-row items-center gap-x-20 gap-y-6 md:odd:flex-row-reverse"
            >
              {/* Replace bg-muted with actual image */}
              <div className="w-full aspect-[6/4] bg-cover rounded-xl border border-border/50 basis-1/2" style={{ backgroundImage: 'url(/path/to/your/image.jpg)' }} />
              <div className="basis-1/2 shrink-0">
                <span className="uppercase font-semibold tracking-tight">
                  {feature.category}
                </span>
                <h4 className="my-3 text-3xl font-bold tracking-tighter">
                  {feature.title}
                </h4>
                <p className="text-muted-foreground text-[17px]">
                  {feature.details}
                </p>
                <Button
                  asChild
                  className="mt-6 rounded-full min-w-40 text-[15px]"
                >
                  <Link href={feature.tutorialLink}>
                    Learn More <ArrowRight />
                  </Link>
                </Button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default About;
