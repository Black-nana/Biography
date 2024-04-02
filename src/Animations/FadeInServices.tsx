// src/components/FadeInServices.tsx

import React, { useState, useEffect, ReactNode } from 'react';
import '../Animations/fadeIn.css'; // Ensure your fade-in animation CSS file is correctly linked

interface FadeInProps {
  children: ReactNode;
}

const FadeInServices: React.FC<FadeInProps> = ({ children }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const top = window.scrollY;
      const windowHeight = window.innerHeight;
      const elementOffset = document.getElementById('fade-in-element')?.offsetTop ?? 0;

      if (top + windowHeight > elementOffset && top < elementOffset + 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Trigger initial check

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div id="fade-in-element" className={`fade-in ${isVisible ? 'visible' : ''}`}>
      {children}
    </div>
  );
};

export default FadeInServices;
