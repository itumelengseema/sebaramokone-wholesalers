import Image from 'next/image';

import picture1 from '../../../public/images/karabo.jpg';
import picture2 from '../../../public/images/Naidine.jpg';

const teamMembers = [
  {
    name: 'Naidene Knife',
    title: 'Founder & CEO',
    imageUrl: picture2,
  },
  {
    name: 'Sebaraboi Malele',
    title: 'Executive Director',
    imageUrl: picture1,
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center py-6 px-6 lg:px-8 max-w-screen-xl mx-auto text-center">
      {/* Header Section */}
      <div className="max-w-2xl">
        <h2 className=" text-4xl md:text-5xl font-black tracking-tight">
          Meet Our Team
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          At our core, we believe in building a diverse, passionate team and
          creating an environment where everyone can thrive and do their best
          work.
        </p>
      </div>

      {/* Team Members Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-4xl">
        {teamMembers.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center "
          >
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-40 rounded-lg object-cover bg-secondary"
              width={160}
              height={160}
            />
            <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
            <p className="">{member.title}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
