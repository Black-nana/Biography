// src/components/LandingPage.js

import SlidingCard from './SlidingCard';

const LandingPage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to Our Landing Page</h1>
      <div>
        <SlidingCard/>
      </div>
    </div>
  );
};

export default LandingPage;
