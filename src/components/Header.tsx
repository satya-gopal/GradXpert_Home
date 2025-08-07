import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Home, Settings, BookOpen, Briefcase, FolderOpen, Rocket, ChevronDown, Users, Star, Crown, Handshake } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setIsMenuOpen(false);
    };
    
    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen]);

  // Prevent body scroll when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isMenuOpen]);

  const menuItems = [
    { href: "#", label: "Home", icon: Home },
    { href: "#studentos", label: "StudentOS", icon: Settings },
    { href: "#courses", label: "I/O School", icon: BookOpen },
    { href: "#internships", label: "Kickstack", icon: Briefcase },
    { href: "#portfolio", label: "Powerfolio", icon: FolderOpen },
    { href: "#boldtstartup", label: "BoldtStartup", icon: Rocket },
    { href: "#talentpool", label: "Talent Pool", icon: Star },
    { href: "#about", label: "About Us", icon: Users },
    { href: "#careers", label: "Careers", icon: Briefcase },
    { href: "#contact", label: "Contact Us", icon: Users },
  ];

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <div className="relative">
                  <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                    <GraduationCap className="h-6 w-6 text-white" />
                  </div>
                  <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
                </div>
                <span className="font-bold text-xl text-slate-900 tracking-tight">GradXpert</span>
              </div>
            
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                <a href="#" className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-500 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Home
                </a>
                <a href="#studentos" className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  StudentOS
                </a>
                <a href="#courses" className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  I/O School
                </a>
                <a href="#internships" className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Kickstack
                </a>
                <a href="#portfolio" className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Powerfolio
                </a>
                
                {/* Quick Links Dropdown */}
                <div className="relative group">
                  <button className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-500 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105 flex items-center space-x-1">
                    <span>Quick Links</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {/* Quick Links Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="p-2">
                      <a href="#courses" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:text-purple-700 transition-all duration-150">
                        <BookOpen className="h-4 w-4" />
                        <span>Courses</span>
                      </a>
                      <a href="#internships" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 transition-all duration-150">
                        <Briefcase className="h-4 w-4" />
                        <span>Internships</span>
                      </a>
                      
                      {/* Events Submenu */}
                      <div className="relative group/events">
                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150">
                          <div className="flex items-center space-x-3">
                            <Users className="h-4 w-4" />
                            <span>Events</span>
                          </div>
                          <ChevronDown className="h-3 w-3" />
                        </button>
                        
                        {/* Events Submenu Items */}
                        <div className="absolute left-full top-0 ml-1 w-48 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover/events:opacity-100 group-hover/events:visible transition-all duration-150 z-50">
                          <div className="p-2">
                            <a href="#online-events" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-150 text-sm">
                              Online Events
                            </a>
                            <a href="#training-programs" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-150 text-sm">
                              Training Programs
                            </a>
                          </div>
                        </div>
                      </div>
                      
                      {/* Partnerships Submenu */}
                      <div className="relative group/partnerships">
                        <button className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-orange-50 hover:to-red-50 hover:text-orange-700 transition-all duration-150">
                          <div className="flex items-center space-x-3">
                            <Handshake className="h-4 w-4" />
                            <span>Partnerships</span>
                          </div>
                          <ChevronDown className="h-3 w-3" />
                        </button>
                        
                        {/* Partnerships Submenu Items */}
                        <div className="absolute left-full top-0 ml-1 w-52 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover/partnerships:opacity-100 group-hover/partnerships:visible transition-all duration-150 z-50">
                          <div className="p-2">
                            <a href="#partner-with-us" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-150 text-sm">
                              Partner With Us
                            </a>
                            <a href="#invite-to-college" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150 text-sm">
                              Invite to College
                            </a>
                            <a href="#collaboration-program" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-150 text-sm">
                              Collaboration Program
                            </a>
                            <a href="#become-mentor" className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-yellow-700 transition-all duration-150 text-sm">
                              Become a Mentor
                            </a>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                
                {/* More Dropdown */}
                <div className="relative group">
                  <button className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-500 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105 flex items-center space-x-1">
                    <span>More</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>
                  
                  {/* Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="p-2">
                      <a href="#boldtstartup" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700 transition-all duration-150">
                        <Rocket className="h-4 w-4" />
                        <span>BoldtStartup</span>
                      </a>
                      <a href="#talentpool" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-yellow-700 transition-all duration-150">
                        <Star className="h-4 w-4" />
                        <span>Talent Pool</span>
                      </a>
                      <a href="#about" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-150">
                        <Users className="h-4 w-4" />
                        <span>About Us</span>
                      </a>
                      <a href="#careers" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-150">
                        <Briefcase className="h-4 w-4" />
                        <span>Careers</span>
                      </a>
                      <a href="#contact" className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150">
                        <Users className="h-4 w-4" />
                        <span>Contact Us</span>
                      </a>
                    </div>
                  </div>
                </div>
              </nav>
              
              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <button className="px-4 py-2 rounded-xl text-slate-600 hover:text-slate-900 font-medium text-sm transition-all duration-300">
                  Sign In
                </button>
                <button className="bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Crown className="h-4 w-4" />
                  <span>Start VIP Pro</span>
                </button>
              </div>
            
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden menu-button p-2 rounded-xl hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="h-6 w-6 text-slate-900" />
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile/Tablet Slide-out Menu */}
      {/* Backdrop */}
      <div 
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${
          isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
        }`}
      />
      
      {/* Slide-out Menu */}
      <div 
        className={`mobile-menu fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        } scrollbar-hide`}
        style={{
          scrollbarWidth: 'none', /* Firefox */
          msOverflowStyle: 'none', /* Internet Explorer 10+ */
        }}
      >
        <style jsx>{`
          .scrollbar-hide::-webkit-scrollbar {
            display: none; /* Safari and Chrome */
          }
        `}</style>
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
          <div className="flex items-center space-x-3">
            <div className="relative">
              <div className="w-10 h-10 bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg">
                <GraduationCap className="h-6 w-6 text-white" />
              </div>
              <div className="absolute -top-1 -right-1 w-3 h-3 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
            </div>
            <span className="font-bold text-xl text-slate-900 tracking-tight">GradXpert</span>
          </div>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="h-5 w-5 text-slate-600" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full">
          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8 overflow-y-auto scrollbar-hide">
            <div className="space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <a
                    key={index}
                    href={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className="flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-150 group"
                  >
                    <div className="w-8 h-8 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-purple-100 rounded-lg flex items-center justify-center transition-all duration-150">
                      <Icon className="h-4 w-4 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </a>
                );
              })}
            </div>

            {/* VIP Pro Highlight */}
            <div className="mt-6 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200/50">
              <div className="flex items-center space-x-3 mb-3">
                <div className="w-8 h-8 bg-gradient-to-r from-amber-100 to-yellow-100 rounded-lg flex items-center justify-center">
                  <Crown className="h-4 w-4 text-amber-600" />
                </div>
                <span className="font-bold text-amber-800 text-sm">VIP Pro</span>
              </div>
              <p className="text-xs text-amber-700 mb-2">Complete career transformation package</p>
              <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-3 py-2 rounded-xl font-medium text-xs hover:shadow-lg transition-all duration-150">
                Learn More
              </button>
            </div>
          </nav>

          {/* Bottom CTA Section */}
          <div className="p-4 border-t border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-blue-50/50">
            <div className="space-y-2">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-slate-600 hover:text-slate-900 font-medium py-2.5 px-3 rounded-xl hover:bg-white/80 transition-all duration-150 text-sm"
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-3 py-2.5 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-150 font-medium shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105 text-sm"
              >
                Start Your Journey
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-3 grid grid-cols-2 gap-2 text-center">
              <div className="bg-white/60 backdrop-blur-sm p-2 rounded-xl border border-slate-200/30">
                <div className="text-base font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">10,000+</div>
                <div className="text-xs text-slate-600">Students</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-2 rounded-xl border border-slate-200/30">
                <div className="text-base font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</div>
                <div className="text-xs text-slate-600">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;