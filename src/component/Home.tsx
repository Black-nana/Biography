// import About from './About';


import AboutUsMobile from './AboutUsMobile';
import Client from './Client';
import Footer from './Footer';
import HeroSection from './HeroSection';
import ImageShow from './ImageShow';
import NavBar from './NavBar';

import Services from './Services';
import Subscribe from './Subscribe';
import WorkingExperience from './WorkingExperience';
import Carousel from './projectcomponent/Carousel';
import ContainerScroll from './ui/container-scroll-animation';

const Home = () => {
  return (
    <div className="w-full overflow-hidden text-white">
      <NavBar />
  
      <HeroSection />
      <div className='z-10 text-slate-800 grid place-items-center'>
        {/* about feature is in the containerscroll */}
        <div className='hidden lg:block  mb-20' >
        <ContainerScroll />
        </div>
        <div className="lg:hidden  py-20 mb-20">
          <AboutUsMobile/>
        </div>
        <Services/>
      </div>
      <div>
        <WorkingExperience/>
        <Client/>
    <Carousel/>
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
