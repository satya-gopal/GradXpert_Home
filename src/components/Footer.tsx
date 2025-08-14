import React, { useEffect } from 'react';
import { GraduationCap, MapPin, Mail, Phone, ArrowRight, ExternalLink, Star, Shield, Award, Users, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

import {
  FaLinkedinIn,
  FaYoutube,
  FaTwitter
} from "react-icons/fa";
import {
  FaWhatsappSquare,
  FaInstagramSquare
} from "react-icons/fa";




const Footer = () => {
  const navigate = useNavigate();
  const location = useLocation();

  const handleNavigation = (path: string) => {
    // If path is just '#', navigate to home without trying to scroll
    if (path === '#') {
      navigate('/');
      window.scrollTo(0, 0);
      return;
    }
  
    // Handle WhatsApp links
    if (path.startsWith('https://wa.me/')) {
      window.location.href = path;
      return;
    }
  
    // If it's a valid hash link and we're already on the homepage
    if (path.startsWith('#') && path.length > 1 && location.pathname === '/') {
      try {
        const section = document.querySelector(path);
        if (section) {
          section.scrollIntoView({ behavior: 'smooth' });
        }
      } catch (e) {
        console.error('Invalid selector:', path);
      }
      return;
    }
  
    // If it's a valid hash link but we're not on homepage
    if (path.startsWith('#') && path.length > 1) {
      navigate('/', { state: { scrollTo: path }, replace: true });
      return;
    }
    
    // Regular route navigation - reset scroll position
    navigate(path);
    window.scrollTo(0, 0);
  };
  
  useEffect(() => {
    // Only handle scroll if we have a valid hash in the URL and no scrollTo state
    if (location.hash && location.hash.length > 1 && !location.state?.scrollTo) {
      try {
        const section = document.querySelector(location.hash);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
          }, 300);
        }
      } catch (e) {
        console.error('Invalid selector:', location.hash);
      }
    }
    
    // Handle scrollTo state from navigation
    if (location.state?.scrollTo && location.state.scrollTo.length > 1) {
      try {
        const section = document.querySelector(location.state.scrollTo);
        if (section) {
          setTimeout(() => {
            section.scrollIntoView({ behavior: 'smooth' });
            // Clean up the state to prevent duplicate scrolls
            navigate(location.pathname, { replace: true, state: {} });
          }, 300);
        }
      } catch (e) {
        console.error('Invalid selector:', location.state.scrollTo);
        navigate(location.pathname, { replace: true, state: {} });
      }
    }
  }, [location, navigate]);


  const programs = [
    { name: "StudentOS", href: "https://studentos.in" },
    { name: "I/O School", href: "https://ioschool.in" },
    { name: "Kickstack", href: "https://kickstack.in" },
    { name: "Powerfolio", href: "https://powerfolio.in" },
    { name: "Talent Pool", href: "https://talentpool.gradxpert.com" },
    { name: "Bold Startup", href: "https://boldstartup.in" },
  ];

  const support = [
    { name: "About Us", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Our Terms", href: "/terms-and-conditions" },
    { name: "Refund Policy", href: "/refund-policy" },
    { name: "Student Support", href: "https://wa.me/919010485481?text=Hello%20GradXpert%20team,%20I%20want%20support%20to%20enroll%20in%20the%20programs"},
    { name: "Contact Us", href: "/contact" },
  ];

  const resources = [
    { name: "Courses", href: "/explore?filter=course" },
    { name: "Internships", href: "/explore?filter=internship" },
    { name: "Events", href: "#events" },
    { name: "Become a Mentor", href: "/become-mentor" },
    { name: "Invite to Campus", href: "/invite-to-campus" },
    { name: "Partner with Us", href: "/partner-with-us" },
  ];

  const trustBadges = [
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/studentos-xy.jpg",
      text: "StudentOs", 
      bgColor: "bg-white/5",
      href: "https://studentos.in"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/ioschool-xy.jpg",
      text: "IO School", 
      bgColor: "bg-white/5",
      href: "https://ioschool.in"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/kickstack-xy.jpg",
      text: "Kickstack", 
      bgColor: "bg-white/5",
      href: "https://kickstack.in"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/powerfolio-xy.jpg",
      text: "Powerfolio", 
      bgColor: "bg-white/5",
      href: "https://powerfolio.in"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/boldstartup-xy.jpg",
      text: "Bold Startup",
      bgColor: "bg-white/5",
      href: "https://boldstartup.in"
    }
  ];

  return (
    <footer className="bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Subtle pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(255,255,255,0.05)_1px,transparent_0)] bg-[length:32px_32px]"></div>
      
      <div className="container-2xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Main footer content */}
        <div className="py-16 lg:py-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8 lg:gap-12 mb-12 lg:mb-16">
            {/* Brand section */}
            <div className="md:col-span-2 lg:col-span-2">
              <div className="relative w-48 lg:w-60 mb-4 lg:mb-2">
                <img
                  src="/Red-White-Name-Logo.png"
                  alt="GradXpert Logo"
                  className="h-10 object-contain rounded-full"
                />
              </div>

              <p className="text-slate-300 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed max-w-lg">
                India's complete career ecosystem that equips students with career clarity, in-demand skills, real-world internships, project-based learning, portfolios, and job opportunities - all before graduation.
              </p>
              
              <div className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base">Serving students across India</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base">contact@gradxpert.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base">+91 9010485481</span>
                </div>
              </div>
            </div>
            
            {/* Mobile: Combined grid for Programs, Resources, Support */}
            <div className="grid grid-cols-3 gap-4 lg:hidden">
              <div>
                <h3 className="font-bold mb-4 text-sm text-white">Ecosystem</h3>
                <ul className="space-y-2">
                  {programs.slice(0, 6).map((program, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => program.href.startsWith('http') ? window.open(program.href, '_blank') : handleNavigation(program.href)}
                        className="text-slate-300 hover:text-white transition-colors font-medium text-xs"
                      >
                        {program.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-sm text-white">Quick Links</h3>
                <ul className="space-y-2">
                  {resources.slice(0, 6).map((resource, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleNavigation(resource.href)}
                        className="text-slate-300 hover:text-white transition-colors font-medium text-xs"
                      >
                        {resource.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-sm text-white">More</h3>
                <ul className="space-y-2">
                  {support.slice(0, 6).map((item, index) => (
                    <li key={index}>
                      <button 
                        onClick={() => handleNavigation(item.href)}
                        className="text-slate-300 hover:text-white transition-colors font-medium text-xs"
                      >
                        {item.name}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Desktop: Original layout */}
            <div className="hidden lg:block">
              <h3 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white">Ecosystem</h3>
              <ul className="space-y-3 lg:space-y-4">
                {programs.map((program, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => program.href.startsWith('http') ? window.open(program.href, '_blank') : handleNavigation(program.href)}
                      className="text-slate-300 hover:text-white transition-colors font-medium flex items-center group text-sm lg:text-base"
                    >
                      <span>{program.name}</span>
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden lg:block">
              <h3 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white">Quick Links</h3>
              <ul className="space-y-3 lg:space-y-4">
                {resources.slice(0, 6).map((resource, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => handleNavigation(resource.href)}
                      className="text-slate-300 hover:text-white transition-colors font-medium flex items-center group text-sm lg:text-base"
                    >
                      <span>{resource.name}</span>
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden lg:block">
              <h3 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white">More</h3>
              <ul className="space-y-3 lg:space-y-4">
                {support.slice(0, 6).map((item, index) => (
                  <li key={index}>
                    <button 
                      onClick={() => item.href.startsWith('http') ? window.open(item.href, '_blank') : handleNavigation(item.href)}
                      className="text-slate-300 hover:text-white transition-colors font-medium flex items-center group text-sm lg:text-base"
                    >
                      <span>{item.name}</span>
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Trust Badges - Full Width Section */}
          <div className="mb-6 lg:mb-2">
            <div className="grid grid-cols-2 gap-5 sm:grid-cols-3 md:flex md:items-center md:justify-center md:gap-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="">
                  <img
                    src={badge.logo}
                    alt={badge.text}
                    onClick={() => window.open(badge.href, '_blank')}
                    className="h-10 md:h-12 sm:h-12 rounded-full w-full object-contain"
                  />
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700 py-6 lg:py-6">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 order-2 md:order-1">
              <p className="text-slate-400 pt-4 md:pt-0 text-xs lg:text-sm font-medium">
                © 2025 GradXpert. All rights reserved.
              </p>
            </div>
            <div className="flex items-center space-x-4 lg:space-x-6 order-1 md:order-2">
              <div className="flex space-x-3 lg:space-x-4">
                <button
                  onClick={() => window.open('https://www.linkedin.com/company/gradxpert/', '_blank')}
                  className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaLinkedinIn className="text-slate-400 text-xs lg:text-sm" />
                </button>

                <button
                  onClick={() => window.open('https://www.youtube.com/@GradXpert', '_blank')}
                  className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaYoutube className="text-slate-400 text-xs lg:text-sm" />
                </button>

                <button
                  onClick={() => window.open('https://wa.me/1234567890', '_blank')}
                  className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaWhatsappSquare className="text-slate-400 text-xs lg:text-sm" />
                </button>

                <button
                  onClick={() => window.open('https://www.instagram.com/gradxpert/', '_blank')}
                  className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaInstagramSquare className="text-slate-400 text-xs lg:text-sm" />
                </button>

                <button
                  onClick={() => window.open('https://x.com/gradxpert/', '_blank')}
                  className="w-8 h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300"
                >
                  <FaTwitter className="text-slate-400 text-xs lg:text-sm" />
                </button>
              </div>
            </div>


            {/*<div className="flex items-center space-x-4 lg:space-x-6 order-1 md:order-2">*/}
            {/*  <div className="flex space-x-3 lg:space-x-4">*/}
            {/*    <button */}
            {/*      onClick={() => window.open('https://www.linkedin.com/company/gradxpert/', '_blank')}*/}
            {/*      className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border-[0.5px] border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"*/}
            {/*    >*/}
            {/*      <FaLinkedinIn className="text-slate-400 text-xs lg:text-sm" />*/}
            {/*    </button>*/}
            {/*    <button */}
            {/*      onClick={() => window.open('https://www.youtube.com/@GradXpert', '_blank')}*/}
            {/*      className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"*/}
            {/*    >*/}
            {/*      <FaYoutube className="text-slate-400 text-sm lg:text-base" />*/}
            {/*    </button>*/}
            {/*    <button */}
            {/*      onClick={() => window.open('https://www.youtube.com/@GradXpert', '_blank')}*/}
            {/*      className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"*/}
            {/*    >*/}
            {/*      <FaWhatsapp className="text-slate-400 text-sm lg:text-base" />*/}
            {/*    </button>*/}
            {/*    <button */}
            {/*      onClick={() => window.open('https://www.instagram.com/gradxpert/', '_blank')}*/}
            {/*      className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"*/}
            {/*    >*/}
            {/*      <FaInstagram className="text-slate-400 text-sm lg:text-base" />*/}
            {/*    </button>*/}
            {/*    <button */}
            {/*      onClick={() => window.open('https://x.com/gradxpert/', '_blank')}*/}
            {/*      className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer"*/}
            {/*    >*/}
            {/*      <FaTwitter className="text-slate-400 text-sm lg:text-base" />*/}
            {/*    </button>*/}
            {/*  </div>*/}
            {/*</div>*/}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;