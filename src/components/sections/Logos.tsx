import Image from 'next/image';
import logo1 from '../../../public/images/Ribo_Sym_only-01.png';
import logo2 from '../../../public/images/Bowld-Logo-PDF-Hi-Res-01.png';
import logo3 from '../../../public/images/images.jpg';
import logo4 from '../../../public/images/f947fb_e00890fd371b47c48eb999ac99c5a166~mv2.png';
import logo5 from '../../../public/images/codfather-logo.jpg';

const Logos = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-6">
      <p className="text-center text-xl font-semibold">
        Building strong relationships with South Africa’s finest brands.
      </p>

      <div className="mt-14 flex flex-wrap items-center justify-center gap-x-14 gap-y-10 max-w-screen-lg">
        {[logo1, logo2, logo3, logo4, logo5].map((logo, index) => (
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
