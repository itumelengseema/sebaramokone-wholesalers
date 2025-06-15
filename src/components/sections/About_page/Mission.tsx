
import Image from "next/image";

const missionData = [
  {
    title: "Why We Exist",
    text: `Because Africa is rich — in talent, resources, and potential. Yet too many small-scale producers remain excluded from the value chain. Too many families still struggle to afford healthy food. Too many food systems still mirror colonial designs, not local realities.
We exist to change that.
Every crate we pack, every route we deliver, every connection we build — it all feeds a bigger dream: An Africa that feeds itself — and exports with pride.`,
    imageUrl:
      "https://images.pexels.com/photos/1578445/pexels-photo-1578445.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // farming / african market
  },
  {
    title: "Our Vision",
    text: `To build a resilient, inclusive food system that centres African producers, nourishes communities, and powers economic growth from the ground up.
We see an Africa where:
• A tomato farmer in Limpopo supplies major retailers.
• A fisherman in Mozambique finds markets in Joburg.
• Rural women are not just suppliers, but owners in the supply chain.
• Children grow up eating what their land and waters produce — with dignity.`,
    imageUrl:
      "https://images.pexels.com/photos/23436809/pexels-photo-23436809/free-photo-of-man-hands-cutting-meat.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // farmer in field
  },
  {
    title: "Our Mission",
    text: `To deliver high-quality seafood and fresh produce across Southern Africa — while transforming who gets to participate in that process.
Through a mix of smart systems, human connection, and radical transparency, we’re opening up the food trade. From informal traders to high-end chefs, our model serves businesses of every size — with speed, care, and consistency.`,
    imageUrl:
      "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", // market produce
  },
  {
    title: "What We Offer",
    list: [
      "Fresh & Frozen Seafood",
      "Imported & Local Dry Goods",
      "Cold Chain Logistics",
      "WhatsApp & Online Orders",
      "Tailored Solutions for Restaurants, Wholesalers & Spazas",
    ],
    imageUrl:
      "https://images.pexels.com/photos/2620860/pexels-photo-2620860.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1", // logistics, delivery
  },
];

const Mission = () => {
  return (
    <div className="min-h-screen flex items-center justify-center py-12 px-6 bg-white text-gray-900">
      <div className="max-w-screen-lg w-full space-y-20">
        {missionData.map(({ title, text, list, imageUrl }, idx) => (
          <section
            key={title}
            className={`flex flex-col md:flex-row items-center gap-10 ${
              idx % 2 === 1 ? "md:flex-row-reverse" : ""
            }`}
          >
            <div className="relative w-full md:w-1/2 h-64 md:h-80 rounded-xl overflow-hidden shadow-lg">
              <Image
                src={imageUrl}
                alt={title}
                layout="fill"
                objectFit="cover"
                priority={idx === 0} // preload first image
              />
            </div>

            <div className="w-full md:w-1/2 max-w-xl">
              <h2 className="text-4xl font-bold mb-6">{title}</h2>
              {text && (
                <p className="whitespace-pre-line text-lg leading-relaxed">{text}</p>
              )}
              {list && (
                <ul className="list-disc list-inside space-y-2 mt-4 text-lg">
                  {list.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
              )}
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

export default Mission;
