import React from 'react';
import { EmblaOptionsType } from 'embla-carousel';
import {
  PrevButton,
  NextButton,
  usePrevNextButtons
} from './EmblaCarouselArrowButtons.tsx';
import useEmblaCarousel from 'embla-carousel-react';

type SlideType = {
  src: string;
  link?: string;
};

type PropType = {
  slides: SlideType[];
  options?: EmblaOptionsType;
};

const EmblaCarousel: React.FC<PropType> = (props) => {
  const { slides, options } = props;
  const [emblaRef, emblaApi] = useEmblaCarousel(options);

  const {
    prevBtnDisabled,
    nextBtnDisabled,
    onPrevButtonClick,
    onNextButtonClick
  } = usePrevNextButtons(emblaApi || null);

  return (
    <section className="max-w-[48rem] mx-auto mt-20">
      <div className="overflow-hidden" ref={emblaRef}>
        <div className="flex -ml-4">
          {slides.map((item, index) => (
            <div key={index} className='w-full flex-none items-center justify-center h-96'>
            <p className='text-center'>
            <a href='https://ecommerce-henna-phi-31.vercel.app' target='_blank' className='text-slate-800 text-center'>click here to visite project
              </a>
            </p>
            <img src={item.src} alt=""  className="flex-none w-full  " />
            
            </div>
          ))}
        </div>
      </div>

      <div className="flex justify-between gap-x-[1.2rem]  mt-5">
        <div className="w-full flex  justify-center gap-4 items-center">
          <PrevButton onClick={onPrevButtonClick} disabled={prevBtnDisabled} />
          <NextButton onClick={onNextButtonClick} disabled={nextBtnDisabled} />
        </div>
      </div>
    </section>
  );
};

export default EmblaCarousel;
