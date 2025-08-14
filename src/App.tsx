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
import BoldStartup from './components/BoldStartup';
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
import BecomeMentor from './components/BecomeMentor';
import CollaborationProgram from './components/CollaborationProgram'
import InviteToCampus from './components/InviteToCampus'
import PartnerWithUs from './components/PartnerWithUs'
import TrainingProgramDetails from './components/TrainingProgramDetails'
import NewEvents from './components/NewEvents'
import Explore from './components/Explore'
import CourseDetails from './components/CourseDetails'
import PrivacyPolicy from './components/privacypolicy';
import TermsAndConditions from './components/termsandconditions';
import RefundPolicy from './components/RefundPolicy';
import ScrollToTopButton from "./components/ScrollToTopButton";
import Admin from './components/Admin';


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
    <TalentPool />
    <BoldStartup />
    {/*<Events />*/}
    {/* <VIPPro /> */}
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
          <Route path="/admin" element={<Admin />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path='/careers' element={<Careers />}/>
          <Route path="/become-mentor" element={<BecomeMentor />} />
          <Route path="/collaboration-program" element={<CollaborationProgram />} />
          <Route path="/invite-to-campus" element={<InviteToCampus />} />
          <Route path="/partner-with-us" element={<PartnerWithUs />} />
          <Route path="/training-program-details" element={<TrainingProgramDetails />} />
          <Route path="/newevents" element={<NewEvents />} />
          <Route path="/explore" element={<Explore />} />
          <Route path="/course/:courseId" element={<CourseDetails />} />
          <Route path="/vip-pro" element={<VIPPro />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-and-conditions" element={<TermsAndConditions />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/course-details" element={<CourseDetails />} />
          <Route path="/training-program-details" element={<TrainingProgramDetails />} />

        </Routes>
        <Footer />
        <ScrollToTopButton /> {/* <-- here */}
      </div>
    </Router>
  );
}

export default App;