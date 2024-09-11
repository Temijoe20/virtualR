import React from 'react';
import Navbar from './components/Navbar/Navbar';
import HeroSection from './components/HeroSection/Hero';
import Menus from './components/Menus/Menus';
import Banner from './components/Banner/Banner';
import Banner2 from './components/Banner/Banner2';
import Banner3 from './components/Banner/Banner3';
import Footer from './components/Footer/Footer'
// import FeatureSection from './components/FeatureSection'
// import Workflow from './components/WorkFlow'
// import Pricing from './components/Pricing'
// import Testimonials from './components/Testimonials'
// import Footer from './components/Footer'

const App = () => {
  return (
    <div className='overflow-x-hidden bg-white'>
    <Navbar />
    <HeroSection />
    <Menus />
    <Banner />
    <Banner2 />
    <Banner3 />
    <Footer /> 
    {/* <div className="max-w-7xl mx-auto pt-20 px-6">
    <HeroSection />
    <FeatureSection />
    <Workflow />
    <Pricing />
    <Testimonials />
    <Footer /> */}
    </div>
    
  )
}

export default App;