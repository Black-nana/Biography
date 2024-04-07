import  { useRef, useState, useEffect } from "react";
import { useScroll, useTransform, motion } from "framer-motion";
import AboutFearture from "../AboutFearture";

const ContainerScroll = () => {
  const containerRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: containerRef,
  });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => {
      window.removeEventListener("resize", checkMobile);
    };
  }, []);

  const scaleDimensions = () => {
    return isMobile ? [0.7, 0.9] : [1.05, 1];
  };

  const rotate = useTransform(scrollYProgress, [0, 1], [20, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], scaleDimensions());
  const translate = useTransform(scrollYProgress, [0, 1], [0, -100]);

  return (
    <div
      className="h-[40rem] md:h-[60rem] flex items-center justify-center  p-2 md:p-20 "
      ref={containerRef}
      id="about"
    >
      <div
        className="py-10 md:py-40 w-full "
        style={{
          perspective: "1000px",
        }}
      >
        <div className="">
        <Header/>
        </div>

        <AboutFearture  rotate={rotate}
          translate={translate}
          scale={scale}/>
      </div>
    </div>
  );
};

export default ContainerScroll;
export const Header = ({ translate }: any) => {
  return (
    <motion.div
      style={{
        translateY: translate,
      }}
      className="div max-w-5xl text-center mx-auto"
    >
       <div className="flex flex-col justify-center items-center py-2">
        <h1 className="font-semibold text-7xl text-[#171b5a]">About Me</h1>
        <p className="w-3/4 text-center pt-6 pb-2 ">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Vitae nulla
          veritatis commodi recusandae ut reprehenderit eaque explicabo nobis
          odio ducimus.
        </p>
        <div className="w-32 h-1 bg-purple-700"></div>
      </div>
    </motion.div>
  );
};
