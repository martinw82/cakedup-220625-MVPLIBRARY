import React from 'react';
import Hero from '../components/Home/Hero';
import FeaturedSection from '../components/Home/FeaturedSection';
import CategoriesSection from '../components/Home/CategoriesSection';

const Home: React.FC = () => {
  return (
    <div className="min-h-screen">
      <Hero />
      <FeaturedSection />
      <CategoriesSection />
    </div>
  );
};

export default Home;