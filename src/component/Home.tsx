// import About from './About';


import Client from './Client';
import Footer from './Footer';
import HeroSection from './HeroSection';
import ImageShow from './ImageShow';
import NavBar from './NavBar';
import Services from './Services';
import Subscribe from './Subscribe';
import WorkingExperience from './WorkingExperience';
import { BackgroundBeams } from './ui/Background-beams';
import ContainerScroll from './ui/container-scroll-animation';

const Home = () => {
  return (
    <div className="w-full overflow-hidden text-white">
      <NavBar />
      <BackgroundBeams />
      <HeroSection />
      <div className='z-10 text-slate-800 grid place-items-center'>
        {/* about feature is in the containerscroll */}
        <ContainerScroll />
        <Services/>
      </div>
      <div>
        <WorkingExperience/>
        <Client/>
        <ImageShow/>
      </div>
      <div>
        <div className='my-6'>
        <Subscribe/>
        </div>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
