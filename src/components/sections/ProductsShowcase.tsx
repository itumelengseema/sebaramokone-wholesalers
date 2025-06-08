import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from '@/components/ui/carousel';
import Image from 'next/image';

const products = [
  {
    title: 'Norwegian Salmon',
    description: 'Fresh and high-quality Norwegian salmon.',
    imageUrl:
      'https://images.pexels.com/photos/11075364/pexels-photo-11075364.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Mozambique Prawns',
    description: 'Delicious prawns sourced from Mozambique.',
    imageUrl:
      'https://images.pexels.com/photos/1150447/pexels-photo-1150447.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Argentinian Langostine',
    description: 'Premium langostine from Argentina.',
    imageUrl:
      'https://images.pexels.com/photos/3295854/pexels-photo-3295854.jpeg',
  },
  {
    title: 'Fresh Hake',
    description: 'High-quality hake, fresh and flavorful.',
    imageUrl:
      'https://images.pexels.com/photos/5713767/pexels-photo-5713767.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Frozen Mussels',
    description: 'Delicious frozen mussels for your dishes.',
    imageUrl:
      'https://images.pexels.com/photos/30649002/pexels-photo-30649002/free-photo-of-steamed-mussels-with-lemon-and-herbs.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
  {
    title: 'Chicken Fillets',
    description: 'Tender and juicy chicken fillets.',
    imageUrl:
      'https://images.pexels.com/photos/12197308/pexels-photo-12197308.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1',
  },
];

const ProductCarousel = () => {
  return (
    <div className=" flex flex-col items-center justify-center py-16 px-16 lg:px-28 max-w-screen-xl mx-auto text-center ">
      <div className="w-full py-12">
        <h3 className="text-3xl md:text-5xl font-black tracking-tight">
          Products We Supply
        </h3>
        <p className="mt-6 text-lg text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium
          dolorem animi quis consectetur ducimus quasi sit et ad est
          aspernatur!.
        </p>
        <Carousel className="py-12">
          <CarouselContent className="-ml-4">
            {products.map((product) => (
              <CarouselItem
                key={product.title}
                className="md:basis-1/2 lg:basis-1/3 pl-4"
              >
                <div className="flex flex-col items-center">
                  <Image
                    src={product.imageUrl}
                    alt={product.title}
                    className="w-full h-48 object-cover rounded-lg"
                    width={504}
                    height={300}
                  />
                  <h3 className="mt-4 text-xl font-semibold">
                    {product.title}
                  </h3>
                  <p className="mt-2 text-gray-600 text-center">
                    {product.description}
                  </p>
                </div>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious />
          <CarouselNext />
        </Carousel>
      </div>
    </div>
  );
};

export default ProductCarousel;
