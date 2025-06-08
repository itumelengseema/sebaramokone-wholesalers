import Image from 'next/image';
import logo1 from '../../../public/images/Riboville.jpg';
import logo2 from '../../../public/images/Bowld-Logo-PDF-Hi-Res-01.png';
import logo3 from '../../../public/images/images.jpg';
import logo4 from '../../../public/images/f947fb_e00890fd371b47c48eb999ac99c5a166~mv2.png';
import logo5 from '../../../public/images/codfather-logo.jpg';
import logo6 from '../../../public/images/FSCjpg.jpg';
import logo7 from '../../../public/images/FUJI.jpg';
import logo8 from '../../../public/images/Silverstar.png';
import logo9 from '../../../public/images/Besos.png';
import logo10 from '../../../public/images/Khaya.png'
import logo11 from '../../../public/images/Padel.jpg'





const Logos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-center text-xl font-semibold">
        Building strong relationships with South Africa’s finest brands.
      </p>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
        {[logo1, logo2, logo3, logo4, logo5,logo6,logo7,logo8,logo9,logo10,logo11].map((logo, index) => (
          <Image
            key={index}
            src={logo}
            alt={`Logo ${index + 1}`}
            width={140}
            height={60}
            className="grayscale opacity-70 hover:opacity-100 transition-opacity duration-300"
          />
        ))}
      </div>
    </div>
  );
};

export default Logos;
