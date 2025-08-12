import React from 'react';
import { Helmet } from 'react-helmet';
import { Toaster } from '@/components/ui/toaster';
import Header from '@/components/sections/Header';
import Hero from '@/components/sections/Hero';
import Menu from '@/components/sections/Menu';
import ChefsSpecial from '@/components/sections/ChefsSpecial';
import SpecialOffers from '@/components/sections/SpecialOffers';
import Drinks from '@/components/sections/Drinks';
import AboutUs from '@/components/sections/AboutUs';
import Reviews from '@/components/sections/Reviews';
import InstagramFeed from '@/components/sections/InstagramFeed';
import Reservation from '@/components/sections/Reservation';
import Footer from '@/components/sections/Footer';
import MenuSection from './components/sections/RotatingPlates';
import RotatingPlates from './components/sections/RotatingPlates';

function App() {
  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <>
      <Helmet>
        <title>Ginza Spice - An Immersive Indian Culinary Journey</title>
        <meta name="description" content="Experience the taste of India at Ginza Spice. A modern, luxurious restaurant offering authentic flavors, stunning ambiance, and an unforgettable dining experience." />
        <meta property="og:title" content="Ginza Spice - An Immersive Indian Culinary Journey" />
        <meta property="og:description" content="Experience the taste of India at Ginza Spice. A modern, luxurious restaurant offering authentic flavors, stunning ambiance, and an unforgettable dining experience." />
      </Helmet>

      <div className="min-h-screen bg-background">
        <Header scrollToSection={scrollToSection} />
        <main>
          <Hero scrollToSection={scrollToSection} />
          
          <Menu />
          <ChefsSpecial />
          <SpecialOffers />
          <RotatingPlates/>
          <Drinks />
          <AboutUs />
          <Reviews />
          <InstagramFeed />
          <Reservation />
        </main>
        <Footer scrollToSection={scrollToSection} />
        <Toaster />
      </div>
    </>
  );
}

export default App;