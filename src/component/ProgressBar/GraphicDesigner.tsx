import { useEffect, useRef, useState } from 'react';

interface MarketingProps {
 
}

const GraphicDesigner: React.FC<MarketingProps> = () => {
 const [progress, setProgress] = useState<number>(0);
 const [isVisible, setIsVisible] = useState<boolean>(false);
 const intervalSpeed: number = 10;
 const incrementSpeed: number = 1;
 const barRef = useRef<HTMLDivElement>(null); // Changed to HTMLDivElement

 useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.5 }
    );

    if (barRef.current) {
      observer.observe(barRef.current);
    }

    return () => {
      if (barRef.current) {
        observer.unobserve(barRef.current);
      }
    };
 }, []);

 useEffect(() => {
    let progressInterval: NodeJS.Timeout | undefined;
    if (isVisible) {
      progressInterval = setInterval(() => {
        setProgress((prevProgress) => {
          const newProgress = prevProgress + incrementSpeed;
          if (newProgress >= 70) {
            clearInterval(progressInterval!);
            return 70;
          }
          return newProgress;
        });
      }, intervalSpeed);
    }

    return () => {
      if (progressInterval) {
        clearInterval(progressInterval);
      }
    };
 }, [isVisible]);

 return (
  <div className="h-5 relative max-w-xl rounded-full overflow-hidden">
  <div className="w-full h-full bg-gray-200 absolute"></div>
  <div
    ref={barRef}
    className="h-full bg-[#dd55b0] relative"
    style={{ width: `${progress}%` }}
  ></div>
  <div className="absolute top-0 left-0 w-full p-3 h-full flex items-center justify-start text-white font-light text-sm">
    Graphic Designer
  </div>
</div>

 );
};

export default GraphicDesigner;