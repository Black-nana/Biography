
// import image from '../assets/image/jonas-svidras-bgoE05DFF9U-unsplash.jpg'
import { FaLinkedinIn } from 'react-icons/fa';
import { FaFacebook } from 'react-icons/fa';
import { FaInstagramSquare } from 'react-icons/fa';
import { FaGithubSquare } from 'react-icons/fa';
import SlidingCard from '../Animations/SlidingCard';
import FadeIn from '../Animations/FadeIn';

const HeroSection = () => {
  return (
    <div className="grid grid-cols-4 place-items-center h-[70vh] w-full bg-blue-900 ">
      
      <div className='flex col-span-3 w-full pl-16 '>
      <div>
        <ul className="flex gap-6 flex-col col-span-1 mx-6 text-[#dde9fb]">
          <li className=" text-3xl cursor-pointer hover:text-[#e8d741] hover:scale-150 transition-all duration-300">
            <FaLinkedinIn />
          </li>
          <li className="text-3xl cursor-pointer hover:text-[#e8d741] hover:scale-150 transition-all duration-300">
            <FaFacebook />
          </li>
          <li className="text-3xl cursor-pointer hover:text-[#e8d741] hover:scale-150 transition-all duration-300">
            <FaInstagramSquare />
          </li>
          <li className=" text-3xl cursor-pointer hover:text-[#e8d741] hover:scale-150 transition-all duration-300">
            <FaGithubSquare />
          </li>
        </ul>
      </div>
        
     <FadeIn>
     <div className="capitalize ">
        <p className="text-6xl font-sans font-medium text-[#f5f7fa]">I am a web developer</p>
        <p className="text-3xl font-bold text-[#dde9fb]">Abdul Mateen Kofi Yeboah</p>
        <p className="py-8 text-[#dde9fb]">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus luctusnec ullamcorper mattis, pulvinar dapibus leop llamcorper, lorem ipsum.</p>

        <div className="flex gap-4">
          <button className="py-3 px-6 rounded bg-[#8b1e11] text-white">Hire Me</button>
          <button className="py-3 px-6 rounded bg-[#82b2f0] text-slate-800">Contact Me</button>
          </div>

        </div>
     </FadeIn>
      </div>
      <div className='pr-16 '>
        <SlidingCard/>
      </div>
    </div>
  );
};

export default HeroSection;
