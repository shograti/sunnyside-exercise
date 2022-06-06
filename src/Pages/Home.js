import React from 'react';
import Hero from '../Components/Hero';
import Presentation from '../Components/Presentation';
import Testimonials from '../Components/Testimonials';
import ImageGallery from '../Components/ImageGallery';
import Footer from '../Components/Footer';

function Home() {
  return (
    <>
      <Hero />
      <Presentation />
      <Testimonials />
      <ImageGallery />
      <Footer />
    </>
  );
}

export default Home;
