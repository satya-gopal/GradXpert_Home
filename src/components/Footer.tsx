import React from 'react';
import { GraduationCap, MapPin, Mail, Phone, ArrowRight, ExternalLink, Star, Shield, Award, Users, Linkedin, Twitter, Instagram, Youtube } from 'lucide-react';

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
      logo: "/studentos-logo.png", 
      text: "StudentOs", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "io-school-logo.png", 
      text: "IO School", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "kickstack-logo.png", 
      text: "Kickstack", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "Powerfolio-Logo.png", 
      text: "Powerfolio", 
      bgColor: "bg-white/5"
    },
    { 
      logo: "Boldstartup-logo-full.png", 
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
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-3 lg:gap-4">
              {trustBadges.map((badge, index) => (
                <div 
                  key={index} 
                  className="p-3 lg:p-4 rounded-xl bg-white border border-white/10 hover:border-white/20 transition-all duration-300 group hover:scale-[1.02] flex flex-col items-center justify-center h-full min-h-[80px] lg:min-h-[100px]"
                >
                  <div className="w-full h-12 lg:h-16 flex items-center justify-center">
                    <img 
                      src={badge.logo} 
                      alt={badge.text}
                      className="h-8 lg:h-10 max-w-full object-contain filter"
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Bottom section */}
        <div className="border-t border-slate-700 py-6 lg:py-2">
          <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
            <div className="flex flex-col md:flex-row items-center space-y-2 md:space-y-0 md:space-x-6 order-2 md:order-1">
              <p className="text-slate-400 text-xs lg:text-sm font-medium">
                © 2025 GradXpert. All rights reserved.
              </p>
            </div>
            
            <div className="flex items-center space-x-4 lg:space-x-6 order-1 md:order-2">
              <div className="flex space-x-3 lg:space-x-4">
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Linkedin className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-blue-500 to-blue-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Twitter className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-pink-500 to-pink-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Instagram className="text-white w-4 h-4 lg:w-5 lg:h-5" />
                </div>
                <div className="w-10 h-10 lg:w-12 lg:h-12 bg-gradient-to-r from-red-500 to-red-600 rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 cursor-pointer">
                  <Youtube className="text-white w-4 h-4 lg:w-5 lg:h-5" />
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