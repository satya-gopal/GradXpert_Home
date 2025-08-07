import React from 'react';
import { GraduationCap, MapPin, Mail, Phone, ArrowRight, ExternalLink, Star, Shield, Award, Users, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';
import { FaLinkedinIn, FaTwitter, FaInstagram, FaYoutube } from "react-icons/fa";

const Footer = () => {
  const quickLinks = [
    { name: "About", href: "#" },
    { name: "Ecosystem", href: "#ecosystem" },
    { name: "Courses", href: "#courses" },
    { name: "Internships", href: "#internships" },
    { name: "Portfolio", href: "#portfolio" },
    { name: "Community", href: "#community" }
  ];

  const programs = [
    { name: "StudentOS", href: "#" },
    { name: "I/O School", href: "#courses" },
    { name: "Kickstack", href: "#internships" },
    { name: "Powerfolio", href: "#portfolio" },
    { name: "BoldtStartup", href: "#" },
    { name: "Talent Pool", href: "#" }
  ];

  const support = [
    { name: "Help Center", href: "#" },
    { name: "Contact Us", href: "#" },
    { name: "Career Guidance", href: "#" },
    { name: "Student Support", href: "#" },
    { name: "Technical Help", href: "#" },
    { name: "Feedback", href: "#" },
    { name: "Privacy Policy", href: "#" },
    { name: "Terms of Service", href: "#" }
  ];

  const resources = [
    { name: "Student Stories", href: "#" },
    { name: "Success Metrics", href: "#" },
    { name: "Career Roadmaps", href: "#" },
    { name: "Industry Insights", href: "#" },
    { name: "Placement Reports", href: "#" },
    { name: "Alumni Network", href: "#" },
    { name: "Mentor Connect", href: "#" },
    { name: "Blog & Articles", href: "#" }
  ];

  const trustBadges = [
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/studentos-xy.jpg",
      text: "StudentOs", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/ioschool-xy.jpg",
      text: "IO School", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/kickstack-xy.jpg",
      text: "Kickstack", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/powerfolio-xy.jpg",
      text: "Powerfolio", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "https://gradxpert.com/brand-logos/sub-brands/boldstartup-xy.jpg",
      text: "Boldstartup", 
      bgColor: "bg-white/5"
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
                  className="w-full h-full object-contain rounded-full"
                />
              </div>

              <p className="text-slate-300 mb-6 lg:mb-8 text-base lg:text-lg leading-relaxed max-w-lg">
                India's most comprehensive career ecosystem, empowering students to transform their potential into real-world success through practical skills and meaningful connections.
              </p>
              
              <div className="space-y-3 lg:space-y-4 mb-8 lg:mb-10">
                <div className="flex items-center space-x-3 text-slate-400">
                  <MapPin className="w-4 h-4 lg:w-5 lg:h-5 text-emerald-400 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base">Serving students across India</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Mail className="w-4 h-4 lg:w-5 lg:h-5 text-blue-400 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base">hello@gradxpert.com</span>
                </div>
                <div className="flex items-center space-x-3 text-slate-400">
                  <Phone className="w-4 h-4 lg:w-5 lg:h-5 text-purple-400 flex-shrink-0" />
                  <span className="font-medium text-sm lg:text-base">+91 98765 43210</span>
                </div>
              </div>
            </div>
            
            {/* Mobile: Combined grid for Programs, Resources, Support */}
            <div className="grid grid-cols-3 gap-4 md:hidden">
              <div>
                <h3 className="font-bold mb-4 text-sm text-white">Programs</h3>
                <ul className="space-y-2">
                  {programs.slice(0, 4).map((program, index) => (
                    <li key={index}>
                      <a 
                        href={program.href} 
                        className="text-slate-300 hover:text-white transition-colors font-medium text-xs"
                      >
                        {program.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-sm text-white">Resources</h3>
                <ul className="space-y-2">
                  {resources.slice(0, 4).map((resource, index) => (
                    <li key={index}>
                      <a 
                        href={resource.href} 
                        className="text-slate-300 hover:text-white transition-colors font-medium text-xs"
                      >
                        {resource.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h3 className="font-bold mb-4 text-sm text-white">Support</h3>
                <ul className="space-y-2">
                  {support.slice(0, 4).map((item, index) => (
                    <li key={index}>
                      <a 
                        href={item.href} 
                        className="text-slate-300 hover:text-white transition-colors font-medium text-xs"
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            {/* Desktop: Original layout */}
            <div className="hidden md:block">
              <h3 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white">Programs</h3>
              <ul className="space-y-3 lg:space-y-4">
                {programs.map((program, index) => (
                  <li key={index}>
                    <a 
                      href={program.href} 
                      className="text-slate-300 hover:text-white transition-colors font-medium flex items-center group text-sm lg:text-base"
                    >
                      <span>{program.name}</span>
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h3 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white">Resources</h3>
              <ul className="space-y-3 lg:space-y-4">
                {resources.slice(0, 6).map((resource, index) => (
                  <li key={index}>
                    <a 
                      href={resource.href} 
                      className="text-slate-300 hover:text-white transition-colors font-medium flex items-center group text-sm lg:text-base"
                    >
                      <span>{resource.name}</span>
                      <ArrowRight className="w-3 h-3 lg:w-4 lg:h-4 ml-2 opacity-0 group-hover:opacity-100 group-hover:translate-x-1 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
            
            <div className="hidden md:block">
              <h3 className="font-bold mb-6 lg:mb-8 text-lg lg:text-xl text-white">Support</h3>
              <ul className="space-y-3 lg:space-y-4">
                {support.slice(0, 6).map((item, index) => (
                  <li key={index}>
                    <a 
                      href={item.href} 
                      className="text-slate-300 hover:text-white transition-colors font-medium flex items-center group text-sm lg:text-base"
                    >
                      <span>{item.name}</span>
                      <ExternalLink className="w-3 h-3 lg:w-4 lg:h-4 ml-2 opacity-0 group-hover:opacity-100 transition-all duration-300" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
          
          {/* Trust Badges - Full Width Section */}
          <div className="mb-6 lg:mb-2">
            <div className="grid grid-cols-2 gap-5  md:flex md:items-center md:justify-center  md:gap-12">
              {trustBadges.map((badge, index) => (
                <div key={index} className="">
                  <img
                    src={badge.logo}
                    alt={badge.text}
                    className="h-15 md:h-12 rounded-full w-full object-contain"
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
                <div className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border-[0.5px] border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaLinkedinIn className="text-slate-400 text-xs lg:text-sm" />
                </div>

                <div className="w-8 h-8 lg:w-8 lg:h-8  rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaTwitter className="text-slate-400 text-sm lg:text-base" />
                </div>
                <div className="w-8 h-8 lg:w-8 lg:h-8 rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaInstagram className="text-slate-400 text-sm lg:text-base" />
                </div>
                <div className="w-8 h-8 lg:w-8 lg:h-8  rounded-full border border-slate-400 flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <FaYoutube className="text-slate-400 text-sm lg:text-base" />
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;