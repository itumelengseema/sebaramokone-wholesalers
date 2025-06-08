import piccture from '../../../../public/images/picture16.jpg';
import piccture2 from '../../../../public/images/picture15.jpg';
import Image from 'next/image';

const AboutUs = () => {
  return (
    <section className="py-5 px-5 md:px-10 lg:px-20">
      <div className="container flex flex-col gap-28">
        <div className="flex flex-col gap-7">
          <h1 className="text-4xl font-semibold lg:text-7xl">
            The Journey of Nyami Nyami Seafood
          </h1>
          <p className="max-w-xl text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Error quod
            laudantium, impedit esse at nihil blanditiis nam dignissimos ex
            facilis atque praesentium dicta natus doloribus possimus sit
            architecto! Hic, excepturi voluptatum aut id ipsa rerum mollitia
            reprehenderit porro in debitis repellat veniam! Labore quisquam
            distinctio possimus esse, repellat earum dignissimos!
          </p>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <Image
            src={piccture}
            alt="placeholder"
            className="mb-6 max-h-96 w-full rounded-xl object-cover  "
          />
          <div className="flex flex-col justify-between gap-10 rounded-2xl bg-muted p-10">
            <p className="text-sm text-muted-foreground">OUR MISSION</p>
            <p className="text-lg font-medium">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit. Nemo
              possimus tempore sunt cupiditate aliquam magni amet. Officiis
            </p>
          </div>
        </div>
        <div className="flex flex-col gap-6 md:gap-20">
          <div className="max-w-xl">
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
              Bringing the Best of the Ocean to You
            </h2>
            <p className="text-muted-foreground">
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia,
              iure, esse dicta odio quam nobis maiores reprehenderit officiis
              voluptatibus nostrum magni excepturi aperiam pariatur cum sed
              incidunt labore ea amet.
            </p>
          </div>
        </div>

        <div className="grid gap-10 md:grid-cols-2">
          <div>
            <p className="mb-10 text-sm font-medium text-muted-foreground">
              Our commitment 
            </p>
            <h2 className="mb-2.5 text-3xl font-semibold md:text-5xl">
            We support responsible fishing and sourcing practices
            </h2>
          </div>
          <div>
            <Image
              src={piccture2}
              alt="placeholder"
              className="mb-6 max-h-96 w-full rounded-xl object-cover"
            />
            <p className="text-muted-foreground">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quibusdam quaerat vero iste dignissimos, delectus magni! Dolor nemo soluta nesciunt nisi.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
