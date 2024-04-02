// Desc: WorkingExperience component
import GraphicDesigner from './ProgressBar/GraphicDesigner';
import Marketing from './ProgressBar/Marketing';
import UI_UX from './ProgressBar/UI_UX';
import WebDesigner from './ProgressBar/WebDesigner';
import WebDeveloper from './ProgressBar/WebDeveloper';
const WorkingExperience = () => {
 
  return (
    <div className="w-full">
      <div className="flex flex-col justify-center items-center py-6">
        <h1 className="font-semibold text-5xl text-[#090b2b]">
          Work Experience
        </h1>
        <p className="w-3/4 text-center text-[#171b5a] pt-6 pb-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla
          veritatis commodi recusandae ut reprehenderit eaque explicabo nobis
          odio ducimus.
        </p>
        <div className="w-32 h-1 bg-purple-700"></div>
      </div>
      <div className="w-full grid place-items-center my-4">
        <div className="w-5/6 flex gap-10">
          <div className="w-full shadow-xl p-8">
            <h1 className="text-2xl font-semibold text-[#090b2b] py-6">
              UI/UX Desinger
            </h1>
            <span className="text-pink-400 text-lg py-6">2023-2024</span>
            <p className="text-[#171b5a] py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nulla veritatis commodi recusandae ut reprehenderit eaque
              explicabo nobis odio ducimus.
            </p>
            <UI_UX/>
          </div>
          <div className="w-full shadow-xl p-8">
            <h1 className="text-2xl font-semibold text-[#090b2b] py-6">
              Web Desinger
            </h1>
            <span className="text-pink-400 text-lg py-6">2023-2024</span>
            <p className="text-[#171b5a] py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nulla veritatis commodi recusandae ut reprehenderit eaque
              explicabo nobis odio ducimus.
            </p>
            <WebDesigner/>
          </div>
         
        </div>
        <div className='w-5/6 flex gap-10 my-6'>
          <div className='shadow-xl p-6'>
            <h1 className="text-2xl font-semibold text-[#090b2b] py-6 ">
              web developer
            </h1>
            <span className="text-pink-400 text-lg py-6">2023-2024</span>
            <p className="text-[#171b5a] py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nulla veritatis commodi recusandae ut reprehenderit eaque
              explicabo nobis odio ducimus.
            </p>
            <WebDeveloper/>
          </div>
          <div className='shadow-xl p-6'>
            <h1 className="text-2xl font-semibold text-[#090b2b] py-6">
              Marketing
            </h1>
            <span className="text-pink-400 text-lg py-6">2023-2024</span>
            <p className="text-[#171b5a] py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nulla veritatis commodi recusandae ut reprehenderit eaque
              explicabo nobis odio ducimus.
            </p>
            <Marketing/>
          </div>
          <div className='shadow-xl p-6'>
            <h1 className="text-2xl font-semibold text-[#090b2b] py-6">
              graphic designer
            </h1>
            <span className="text-pink-400 text-lg py-6">2023-2024</span>
            <p className="text-[#171b5a] py-8">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae
              nulla veritatis commodi recusandae ut reprehenderit eaque
              explicabo nobis odio ducimus.
            </p>
            <GraphicDesigner/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WorkingExperience;
