import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, GraduationCap, Home, Layers, BookOpen, Briefcase, FolderOpen, Users, Crown, ChevronDown, Mail } from 'lucide-react';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const location = useLocation();

  const menuItems = [
    { href: "/", label: "Home", icon: Home },
    { href: "#courses", label: "StudentOS", icon:  BookOpen},
    { href: "#courses", label: "I/O School", icon: BookOpen },
    { href: "#internships", label: "Kickstack", icon: Briefcase },
    { href: "#portfolio", label: "Powerfolio", icon: FolderOpen },
    { href: "#boldtstartup", label: "BoldtStartup", icon: Users },
  ];

  const moreDropdownItems = [
    { href: "/about", label: "About Us", icon: Users },
    { href: "/contact", label: "Contact Us", icon: Mail },
    { href: "/careers", label: "Careers", icon: Briefcase }
  ];

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
      if (isDropdownOpen && !target.closest('.dropdown-container')) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener('keydown', handleEscape);
    document.addEventListener('click', handleClickOutside);
    
    return () => {
      document.removeEventListener('keydown', handleEscape);
      document.removeEventListener('click', handleClickOutside);
    };
  }, [isMenuOpen, isDropdownOpen]);

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

  const isActive = (path: string) => {
    if (path === '/') return location.pathname === '/';
    return location.pathname === path;
  };

  const isDropdownActive = () => {
    return moreDropdownItems.some(item => isActive(item.href));
  };

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-4">
        <div className="container-2xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 px-8 py-2">
            <div className="flex justify-between items-center">
            <Link to="/" className="flex items-center space-x-4">
              <img
                src="/Red-Black-Name-Logo.png"
                alt="GradXpert Logo"
                className="h-10 w-auto"
              />
            </Link>
            
              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center justify-center space-x-1 flex-1 mx-8">
                {menuItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={index}
                      href={item.href}
                      // className={`px-4 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                      //   isActive(item.href)
                      //     ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500'
                      //     : 'text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                      // }`}
                      className={`px-4 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500`
                      }
                    >
                      {item.label}
                    </a>
                  );
                })}
                
                {/* More Dropdown */}
                <div className="relative dropdown-container">
                  <button
                    onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                    className={`flex items-center space-x-2 px-4 py-3 rounded-xl font-medium hover:shadow-lg hover:scale-105 transition-all duration-300 ${
                      isDropdownActive()
                        ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500'
                        : 'text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                    }`}
                  >
                    <span>More</span>
                    <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${isDropdownOpen ? 'rotate-180' : ''}`} />
                  </button>
                  
                  {/* Dropdown Menu */}
                  {isDropdownOpen && (
                    <div className="absolute top-full left-0 mt-2 w-48 bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-2xl py-2 z-50">
                      {moreDropdownItems.map((item, index) => {
                        const Icon = item.icon;
                        return (
                          <Link
                            key={index}
                            to={item.href}
                            onClick={() => setIsDropdownOpen(false)}
                            className={`flex items-center space-x-3 px-4 py-3 mx-2 rounded-xl transition-all duration-300 group ${
                              isActive(item.href)
                                ? 'text-white bg-gradient-to-r from-blue-500 to-purple-500'
                                : 'text-slate-700 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-purple-500'
                            }`}
                          >
                            <Icon className="h-4 w-4" />
                            <span className="font-medium">{item.label}</span>
                          </Link>
                        );
                      })}
                    </div>
                  )}
                </div>
              </nav>
            
              {/* Desktop CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-4">
                <button className="px-5 py-3 rounded-xl text-slate-600 hover:text-slate-900 font-medium transition-all duration-300 hover:bg-slate-100">
                  Sign In
                </button>
                <button className="btn-primary bg-gradient-to-r from-blue-500 to-purple-500 text-white hover:from-blue-600 hover:to-purple-600 shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105">
                  Start Journey
                </button>
              </div>
            
              {/* Mobile Menu Button */}
              <button 
                className="lg:hidden menu-button p-2 rounded-xl hover:bg-slate-100 transition-colors"
                onClick={() => setIsMenuOpen(!isMenuOpen)}
              >
                <Menu className="icon-md text-slate-900" />
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
        className={`mobile-menu fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden ${
          isMenuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50 ">
        <Link to="/" className="flex items-center space-x-4">
              <img
                src="/Red-Black-Name-Logo.png"
                alt="GradXpert Logo"
                className="h-10 w-auto"
              />
            </Link>
          <button 
            onClick={() => setIsMenuOpen(false)}
            className="p-2 rounded-xl hover:bg-slate-100 transition-colors"
          >
            <X className="icon-sm text-slate-600" />
          </button>
        </div>

        {/* Menu Content */}
        <div className="flex flex-col h-full overflow-auto no-scrollbar">
          {/* Navigation Links */}
          <nav className="flex-1 px-6 py-8">
            <div className="space-y-1">
              {menuItems.map((item, index) => {
                const Icon = item.icon;
                return (
                  <Link
                    key={index}
                    to={item.href}
                    onClick={() => setIsMenuOpen(false)}
                    className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 group ${
                      isActive(item.href)
                        ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-purple-50'
                        : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                    }`}
                  >
                    <div className={`icon-md rounded-xl flex items-center justify-center transition-all duration-300 ${
                      isActive(item.href)
                        ? 'bg-gradient-to-r from-blue-100 to-purple-100'
                        : 'bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-purple-100'
                    }`}>
                      <Icon className={`icon-sm transition-colors duration-300 ${
                        isActive(item.href)
                          ? 'text-blue-600'
                          : 'text-slate-600 group-hover:text-blue-600'
                      }`} />
                    </div>
                    <span className="font-medium">{item.label}</span>
                  </Link>
                );
              })}
              
              {/* Mobile Dropdown Items */}
              <div className="border-t border-slate-200 pt-4 mt-4">
                <div className="text-xs font-bold text-slate-500 uppercase tracking-wider mb-3 px-3">More</div>
                {moreDropdownItems.map((item, index) => {
                  const Icon = item.icon;
                  return (
                    <Link
                      key={index}
                      to={item.href}
                      onClick={() => setIsMenuOpen(false)}
                      className={`flex items-center space-x-3 px-3 py-2.5 rounded-xl transition-all duration-300 group ${
                        isActive(item.href)
                          ? 'text-slate-900 bg-gradient-to-r from-blue-50 to-purple-50'
                          : 'text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50'
                      }`}
                    >
                      <div className={`icon-md rounded-xl flex items-center justify-center transition-all duration-300 ${
                        isActive(item.href)
                          ? 'bg-gradient-to-r from-blue-100 to-purple-100'
                          : 'bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-purple-100'
                      }`}>
                        <Icon className={`icon-sm transition-colors duration-300 ${
                          isActive(item.href)
                            ? 'text-blue-600'
                            : 'text-slate-600 group-hover:text-blue-600'
                        }`} />
                      </div>
                      <span className="font-medium">{item.label}</span>
                    </Link>
                  );
                })}
              </div>
            </div>

            {/* VIP Pro Highlight */}
            <div className="mt-6 p-3 bg-gradient-to-r from-amber-50 to-yellow-50 rounded-xl border border-amber-200/50">
              <div className="flex items-center space-x-3 mb-3">
                <div className="icon-md bg-gradient-to-r from-amber-400 to-yellow-500 rounded-xl flex items-center justify-center">
                  <Crown className="icon-sm text-white" />
                </div>
                <span className="font-bold text-amber-800">VIP Pro</span>
              </div>
              <p className="text-sm text-amber-700 mb-3">Complete career transformation package</p>
              <button className="w-full bg-gradient-to-r from-amber-500 to-yellow-500 text-white px-4 py-3 rounded-xl font-medium text-sm hover:shadow-lg transition-all duration-300">
                Learn More
              </button>
            </div>
          </nav>

          {/* Bottom CTA Section */}
          <div className="p-4 border-t border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-blue-50/50">
            <div className="space-y-3">
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full text-slate-600 hover:text-slate-900 font-medium py-3 px-4 rounded-xl hover:bg-white/80 transition-all duration-300"
              >
                Sign In
              </button>
              <button 
                onClick={() => setIsMenuOpen(false)}
                className="w-full bg-gradient-to-r from-blue-500 to-purple-500 text-white px-4 py-3 rounded-xl hover:from-blue-600 hover:to-purple-600 transition-all duration-300 font-medium shadow-lg hover:shadow-xl hover:shadow-purple-500/25 hover:scale-105"
              >
                Start Your Journey
              </button>
            </div>
            
            {/* Quick Stats */}
            <div className="mt-4 grid grid-cols-2 gap-3 text-center">
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-slate-200/30">
                <div className="text-lg font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent">10,000+</div>
                <div className="text-sm text-slate-600">Students</div>
              </div>
              <div className="bg-white/60 backdrop-blur-sm p-3 rounded-xl border border-slate-200/30">
                <div className="text-lg font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">100%</div>
                <div className="text-sm text-slate-600">Focused</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;