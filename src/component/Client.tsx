import FadeIn from '../Animations/FadeIn';
import { FaQuoteLeft } from "react-icons/fa";
import image1 from '../assets/image/Screenshot from 2024-03-07 20-56-18.png'
import images2 from '../assets/image/Screenshot from 2024-03-07 20-56-32.png'
import images3 from '../assets/image/Screenshot from 2024-03-07 20-56-49.png'

const Client = () => {
  return (
    <div>
      <div className="flex flex-col justify-center items-center py-6 text-[#171b5a]">
        <h1 className="font-semibold text-5xl text-center ">
          What My Client Say's About Me
        </h1>
        <p className="w-3/4 text-center pt-6 pb-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit.
        </p>
        <div className="w-32 h-1 bg-purple-700"></div>
      </div>
      <FadeIn>
        <div className="w-full grid place-items-center">
          <div className="w-full bg-pink-50 rounded-tr-full rounded-br-full grid place-items-center">
            <div className="w-5/6 flex flex-col lg:flex gap-10 p-8">
              <div className="w-full shadow-xl p-6 bg-slate-300 rounded-lg grid place-items-center">
                <h1 className="text-2xl font-semibold text-[#090b2b] py-4">
                  <FaQuoteLeft className="text-3xl text-[#090b2b]" />
                </h1>
                <span className="text-pink-400 text-lg py-4">
                    <img src={image1} alt="" className='w-28 h-28 rounded-full border-4 border-orange-400'/>
                    </span>
                <p className="text-[#171b5a] py-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nulla veritatis commodi recusandae ut reprehenderit eaque
                  explicabo nobis odio ducimus.
                </p>
              </div>
              <div className="shadow-xl p-6 bg-purple-900 text-white rounded-lg grid place-items-center">
                <h1 className="text-2xl font-semibold py-4">
                <FaQuoteLeft className="text-3xl text-[#ffffff]" />
                </h1>
                <span className=" text-lg py-4">
                    <img src={images2} alt="" className='w-28 h-28 rounded-full border-4 border-orange-400'/>
                    </span>
                <p className="t py-4 text-center">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nulla veritatis commodi recusandae ut reprehenderit eaque
                  explicabo nobis odio ducimus.
                </p>
              </div>
              <div className="shadow-xl p-6 bg-slate-300  text-white rounded-lg grid place-items-center">
                <h1 className="text-2xl font-semibold py-4">
                <FaQuoteLeft className="text-3xl text-[#090b2b]" />
                </h1>
                <span className=" text-lg py-4">
                    <img src={images3} alt="" className='w-28 h-28 rounded-full border-4 border-orange-400'/>
                    </span>
                <p className="t py-4 text-center text-[#171b5a]">
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
                  nulla veritatis commodi recusandae ut reprehenderit eaque
                  explicabo nobis odio ducimus.
                </p>
              </div>
            </div>
          </div>
        </div>
      </FadeIn>
    </div>
  );
};

export default Client;
