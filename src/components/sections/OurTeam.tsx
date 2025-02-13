import { Button } from '@/components/ui/button';
import { DribbbleIcon, TwitchIcon, TwitterIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import picture from '../../../public/images/karabo.jpg';

const teamMembers = [
  {
    name: 'Naidene Knife',
    title: 'Founder & CEO',

    imageUrl:
      'https://images.pexels.com/photos/3785079/pexels-photo-3785079.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
  {
    name: 'Sebaraboi Malele',
    title: 'Execuitve Director',

    imageUrl: picture,
  },
  {
    name: 'Bob Smith',
    title: 'Product Manager',
    bio: 'Former PM for Linear, Lambda School, and On Deck.',
    imageUrl:
      'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
  },
];

const Team = () => {
  return (
    <div className="flex flex-col items-center justify-center py-16 px-6 lg:px-8 max-w-screen-xl mx-auto text-center">
      {/* Header Section */}
      <div className="max-w-2xl">
   
        <h2 className="mt-3 text-4xl sm:text-5xl font-bold tracking-tight">
          Meet Our Team
        </h2>
        <p className="mt-6 text-lg text-muted-foreground">
          At our core, we believe in building a diverse, passionate team and
          creating an environment where everyone can thrive and do their best
          work.
        </p>
        <div className="mt-8 flex flex-col sm:flex-row sm:justify-center gap-3">
          <Button size="lg" className="font-semibold">
            Open Positions
          </Button>
          <Button size="lg" variant="outline" className="font-semibold">
            About Us
          </Button>
        </div>
      </div>

      {/* Team Members Grid */}
      <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full max-w-4xl">
        {teamMembers.map((member) => (
          <div key={member.name} className="flex flex-col items-center">
            <Image
              src={member.imageUrl}
              alt={member.name}
              className="w-40 h-40 rounded-full object-cover bg-secondary"
              width={160}
              height={160}
            />
            <h3 className="mt-4 text-lg font-bold">{member.name}</h3>
            <p className="text-secondary">{member.title}</p>
            <p className="mt-3 text-muted-foreground text-center">
              {member.bio}
            </p>
            <div className="mt-4 flex items-center gap-2.5">
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitterIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <DribbbleIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
              <Button
                className="bg-muted hover:bg-muted text-muted-foreground shadow-none"
                size="icon"
                asChild
              >
                <Link href="#" target="_blank">
                  <TwitchIcon className="stroke-muted-foreground" />
                </Link>
              </Button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Team;
