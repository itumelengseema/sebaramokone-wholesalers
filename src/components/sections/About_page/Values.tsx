import Image from 'next/image';

const features = [
  {
    iconSrc: '/Icons/ShapeIcon1.svg',
    title: "Service with Soul",
    description: "Every customer, supplier, and partner are treated with respect.",
  },
  {
    iconSrc: '/Icons/ShapeIcon2.svg',
    title: "Excellence Always",
    description: "From product quality to last-mile delivery — we don’t cut corners.",
  },
    {
    iconSrc: '/Icons/ShapeIcon1.svg',
    title: "Access is Power",
    description: "Small players deserve big opportunities. We make that happen.",
  },
    {
    iconSrc: '/Icons/ShapeIcon1.svg',
    title: "Real Relationships",
    description: "We’re present, we show up, we keep our word.",
  },
    {
    iconSrc: '/Icons/ShapeIcon2.svg',
    title: "Pan-African Purpose",
    description: "Our business is local; our vision is continental",
  },

  // add other icons similarly
];

const Values = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12">
      <div>
        <h2 className="text-4xl sm:text-5xl font-bold tracking-tight text-center">
          Our Values
        </h2>
        <div className="mt-10 sm:mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-6 max-w-screen-lg mx-auto px-6">
          {features.map((feature) => (
            <div key={feature.title} className="flex flex-col py-6 px-5">
              <div className="mb-3 h-10 w-10 flex items-center justify-center rounded-full bg-muted">
                <Image 
                  src={feature.iconSrc} 
                  alt={feature.title} 
                  width={80} 
                  height={30} 
                />
              </div>
              <span className="text-lg font-semibold">{feature.title}</span>
              <p className="mt-1 text-foreground/80 text-[15px]">
                {feature.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Values;
