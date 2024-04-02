import React, { ReactNode, useEffect, useRef, useState } from 'react';
import { motion, useAnimation } from 'framer-motion';

interface FadeInProps {
  children: ReactNode;
}

const FadeIn: React.FC<FadeInProps> = ({ children }) => {
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      {
        root: null,
        rootMargin: '0px',
        threshold: 0.5, // Adjust threshold as per your requirement
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, []);

  useEffect(() => {
    if (isVisible) {
      controls.start({ opacity: 1, transition: { duration: 2, ease: 'easeOut' } });
    }
  }, [isVisible, controls]);

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0 }}
      animate={controls}
    >
      {children}
    </motion.div>
  );
};

export default FadeIn;
