import AboutUs from '@/components/sections/About_page/About_hero';
import MeetOurFounder from '@/components/sections/About_page/MeetOurFounder';
import Mission from '@/components/sections/About_page/Mission';
import Values from '@/components/sections/About_page/Values';

function Page() {
  return (
    <div className="   mx-auto">
      <AboutUs />
      <Values />
      <Mission/>
      <MeetOurFounder/>
    </div>
  );
}

export default Page;
