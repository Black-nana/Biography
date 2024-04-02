import { GiScrollQuill } from 'react-icons/gi';
import { RiShareForward2Line } from 'react-icons/ri';
import { SiMarketo } from 'react-icons/si';
import { SiWebmoney } from 'react-icons/si';
import image from '../assets/image/vika-strawberrika-NFvN4Sx3-VQ-unsplash.jpg';
import { FaCirclePlay } from 'react-icons/fa6';
import FadeIn from '../Animations/FadeIn';

const Services = () => {
  return (
    <div className="w-full bg-pink-50 -mt-36 ">
      <div className="w-full bg-pink-100 rounded-r-[1000px] py-10">
        <div className="flex flex-col justify-center items-center py-6">
          <h1 className="font-semibold text-5xl text-[#171b5a]">
            What Services Am I Providing
          </h1>
          <p className="w-3/4 text-center pt-6 pb-2 ">
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
          </p>
          <div className="w-32 h-1 bg-purple-700"></div>
        </div>
          <FadeIn>
        <div className="grid place-items-center w-full ">
            <div className="grid grid-cols-3 gap-4 w-3/4">
              <div className="flex flex-col justify-center items-center border-2 p-6 shadow-sm bg-slate-100">
                <div className="grid place-items-center">
                  <span>
                    <GiScrollQuill className="w-16 h-16 text-purple-800" />
                  </span>
                  <h1 className="font-bold text-2xl py-6">UI/UX Design</h1>
                </div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis tempore sit quia quidem dicta a nam repellendus, dolore
                sed iusto officia odio quam excepturi dolor laborum! Eveniet
                quia sed nesciunt?
                <span className="cursor-pointer">
                  <RiShareForward2Line className="w-8 h-8 my-6 " />
                </span>
              </div>

              <div className="flex flex-col justify-center items-center border-2 p-6 shadow-sm bg-slate-100">
                <div className="grid place-items-center">
                  <span>
                    <SiMarketo className="w-16 h-16 text-purple-800" />
                  </span>
                  <h1 className="font-bold text-2xl py-6">Digital Marketing</h1>
                </div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis tempore sit quia quidem dicta a nam repellendus, dolore
                sed iusto officia odio quam excepturi dolor laborum! Eveniet
                quia sed nesciunt?
                <span className="cursor-pointer">
                  <RiShareForward2Line className="w-8 h-8 my-6 " />
                </span>
              </div>
              <div className="flex flex-col justify-center items-center border-2 p-6 shadow-sm bg-slate-100">
                <div className="grid place-items-center">
                  <span>
                    <SiWebmoney className="w-16 h-16 text-purple-800" />
                  </span>
                  <h1 className="font-bold text-2xl py-6">Web Development</h1>
                </div>
                Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                Debitis tempore sit quia quidem dicta a nam repellendus, dolore
                sed iusto officia odio quam excepturi dolor laborum! Eveniet
                quia sed nesciunt?
                <span className="cursor-pointer">
                  <RiShareForward2Line className="w-8 h-8 my-6 " />
                </span>
              </div>
            </div>
        </div>
          </FadeIn>

        {/* image bg with text */}
        <div className="w-full py-10 my-10 relative">
          <div>
            <img
              src={image}
              alt="services image"
              className="w-full h-96 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black">
              <div className="flex flex-col justify-center items-center text-white"></div>
              <div className="flex flex-col justify-center items-center absolute top-32 left-96">
                <span className="py-6">
                  <FaCirclePlay className="w-16 h-16 text-white  hover:text-purple-700 transition-all duration-200 cursor-pointer" />
                </span>
                <h1 className="font-semibold text-5xl text-white">
                  Working Progress
                </h1>
                <p className="w-3/4 text-center pt-6 pb-2 text-white ">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
