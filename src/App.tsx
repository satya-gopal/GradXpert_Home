import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Header from './components/Header';
import Hero from './components/Hero';
import Promise from './components/Promise';
import HowItWorks from './components/HowItWorks';
import Ecosystem from './components/Ecosystem';
import StudentOS from './components/StudentOS';
import IOSchool from './components/IOSchool';
import Kickstack from './components/Kickstack';
import Powerfolio from './components/Powerfolio';
import BoldtStartup from './components/BoldtStartup';
import TalentPool from './components/TalentPool';
import Events from './components/Events';
import VIPPro from './components/VIPPro';
import Testimonials from './components/Testimonials';
import FAQ from './components/FAQ';
import CTA from './components/CTA';
import AnnouncementBar from './components/AnnouncementBar';
import Footer from './components/Footer';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import Careers from './components/Careers';

const HomePage = () => (
  <>
    <Hero />
    <Promise />
    <Ecosystem />
    <HowItWorks />
    <StudentOS />
    <IOSchool />
    <Kickstack />
    <Powerfolio />
    <BoldtStartup />
    <TalentPool />
    <Events />
    <VIPPro />
    <Testimonials />
    <FAQ />
    <CTA />
    <AnnouncementBar />
  </>
);

function App() {
  return (
    <Router>
      <div className="min-h-screen bg-white">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/careers' element={<Careers />}/>
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;