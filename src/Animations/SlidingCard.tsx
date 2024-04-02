// src/components/SlidingCard.tsx

import { useState, useEffect } from 'react';
// import illustrations from '../assets/image/undraw_electricity_k2ft.svg';
import image from '../assets/image/6.jpeg'
import '../Animations/SlideRight.css';

const SlidingCard: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffset: number = document.getElementById('sliding-card')?.offsetTop ?? 0;

      if (top + windowHeight > elementOffset && top < elementOffset + 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div
      id="sliding-card"
      className={`max-w-sm rounded overflow-hidden shadow-lg ${isVisible ? 'slide-in-right' : 'card-hidden'}`}
    >
      <img src={image} alt="hero image" className='-scale-x-100'/>
    </div>
  );
};

export default SlidingCard;
