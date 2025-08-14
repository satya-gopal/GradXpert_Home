import React, { useState, useEffect } from 'react';
import { Menu, X, GraduationCap, Home, Settings, BookOpen, Briefcase, FolderOpen, Rocket, ChevronDown, Users, Star, Crown, Handshake, ChevronRight } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

const Header = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isQuickLinksOpen, setIsQuickLinksOpen] = useState(false);

  const handleNavigation = (path: string) => {
    setIsMenuOpen(false);
    setIsQuickLinksOpen(false);
    // If it's a hash link and we're already on the homepage
    if (path.startsWith('#') && location.pathname === '/') {
      const section = document.querySelector(path);
      if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
      }
      return;
    }
    if (path.startsWith('#')) {
      navigate('/', { state: { scrollTo: path }, replace: true });
      return;
    }
    navigate(path);
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    // Only handle scroll if we have a hash in the URL and no scrollTo state
    if (location.hash && !location.state?.scrollTo) {
      const section = document.querySelector(location.hash);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
        }, 300); // Increased delay for more reliability
      }
    }

    // Handle scrollTo state from navigation
    if (location.state?.scrollTo) {
      const section = document.querySelector(location.state.scrollTo);
      if (section) {
        setTimeout(() => {
          section.scrollIntoView({ behavior: 'smooth' });
          // Clean up the state to prevent duplicate scrolls
          navigate(location.pathname, { replace: true, state: {} });
        }, 300);
      }
    }
  }, [location, navigate]);

  // Close menu when clicking outside or on escape key
  useEffect(() => {
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setIsMenuOpen(false);
        setIsQuickLinksOpen(false);
      }
    };

    const handleClickOutside = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (isMenuOpen && !target.closest('.mobile-menu') && !target.closest('.menu-button')) {
        setIsMenuOpen(false);
        setIsQuickLinksOpen(false);
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

  // Reset quick links dropdown when main menu closes
  useEffect(() => {
    if (!isMenuOpen) {
      setIsQuickLinksOpen(false);
    }
  }, [isMenuOpen]);

  const menuItems = [
    { href: "#", label: "Home", icon: Home },
    { href: "#studentos", label: "StudentOS", icon: Settings },
    { href: "#ioschool", label: "I/O School", icon: BookOpen },
    { href: "#kickstack", label: "Kickstack", icon: Briefcase },
    { href: "#powerfolio", label: "Powerfolio", icon: FolderOpen },
    { href: "#boldstartup", label: "BoldStartup", icon: Rocket },
    { href: "#talentpool", label: "Talent Pool", icon: Star },
    { href: "/about", label: "About Us", icon: Users },
    { href: "/careers", label: "Careers", icon: Briefcase },
    { href: "/contact", label: "Contact Us", icon: Users },
    { href: "/signin", label: "Signin", icon: Users }
  ];

  const quickLinksItems = [
    { href: '/explore?filter=course', label: 'Courses', icon: BookOpen },
    { href: '/explore?filter=internship', label: 'Internships', icon: Briefcase },
    { href: '#events', label: 'Events', icon: Users },
    { href: '/partner-with-us', label: 'Partner With Us', icon: Handshake },
    { href: '/invite-to-campus', label: 'Invite to Campus', icon: GraduationCap },
    { href: '/collaboration-program', label: 'Collaboration Program', icon: Users },
    { href: '/become-mentor', label: 'Become a Mentor', icon: Star }
  ];

  return (
    <>
      {/* Main Header */}
      <header className="fixed top-0 left-0 right-0 z-40 p-4">
        <div className="max-w-7xl mx-auto">
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl border border-slate-200/50 shadow-lg hover:shadow-xl transition-all duration-300 px-6 py-3">
            <div className="flex justify-between items-center">
              <div className="flex items-center space-x-3">
                <img onClick={() => handleNavigation('/')} src="/Red-Black-Name-Logo.png" alt="GradXpert Logo" className="h-10 w-auto cursor-pointer" />
              </div>

              {/* Desktop Navigation */}
              <nav className="hidden lg:flex items-center space-x-1">
                <button onClick={() => handleNavigation('/')} className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-500 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Home
                </button>
                <button onClick={() => handleNavigation('#studentos')}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  StudentOS
                </button>
                <button onClick={() => handleNavigation('#ioschool')}
                  className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-violet-500 hover:to-violet-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  I/O School
                </button>
                <button onClick={() => handleNavigation('#kickstack')} className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-indigo-700 hover:to-indigo-800 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Kickstack
                </button>
                <button onClick={() => handleNavigation('#powerfolio')} className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-blue-500 hover:to-blue-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Powerfolio
                </button>

                {/* Quick Links Dropdown */}
                <div className="relative group">
                  <button className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-slate-500 hover:to-gray-500 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105 flex items-center space-x-1">
                    <span>Quick Links</span>
                    <ChevronDown className="h-4 w-4" />
                  </button>

                  {/* Quick Links Dropdown Menu */}
                  <div className="absolute top-full left-0 mt-2 w-56 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-150 z-50">
                    <div className="p-2">
                      <button onClick={() => handleNavigation('/explore?filter=course')} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-violet-50 hover:text-purple-700 transition-all duration-150">
                        <BookOpen className="h-4 w-4" />
                        <span>Courses</span>
                      </button>
                      <button onClick={() => handleNavigation('/explore?filter=internship')} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-indigo-50 hover:to-blue-50 hover:text-indigo-700 transition-all duration-150">
                        <Briefcase className="h-4 w-4" />
                        <span>Internships</span>
                      </button>

                      {/* Events Submenu */}
                      <div className="relative group/events">
                        <button onClick={() => handleNavigation('#events')} className="w-full flex items-center justify-between px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150">
                          <div className="flex items-center space-x-3">
                            <Users className="h-4 w-4" />
                            <span>Events</span>
                            <ChevronDown className="h-3 w-3" />
                          </div>
                        </button>
                        <div className="absolute left-full top-0 ml-1 w-52 bg-white/95 backdrop-blur-xl rounded-xl border border-slate-200 shadow-xl opacity-0 invisible group-hover/events:opacity-100 group-hover/events:visible transition-all duration-150 z-50">
                          <div className="p-2">
                            <button onClick={() => handleNavigation('#events')} className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-150 text-sm">
                              Online Events
                            </button>
                            <button onClick={() => handleNavigation('#events')} className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150 text-sm">
                              Offline Events
                            </button>
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
                            <button onClick={() => handleNavigation('/partner-with-us')} className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-150 text-sm">
                              Partner With Us
                            </button>
                            <button onClick={() => handleNavigation('/invite-to-campus')} className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150 text-sm">
                              Invite to Campus
                            </button>
                            <button onClick={() => handleNavigation('/collaboration-program')} className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-150 text-sm">
                              Collaboration Program
                            </button>
                            <button onClick={() => handleNavigation('/become-mentor')} className="block px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-yellow-700 transition-all duration-150 text-sm">
                              Become a Mentor
                            </button>
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
                      <button onClick={() => handleNavigation('#talentpool')}  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-yellow-50 hover:to-orange-50 hover:text-yellow-700 transition-all duration-150">
                        <Star className="h-4 w-4" />
                        <span>Talent Pool</span>
                      </button>
                      <button onClick={() => handleNavigation('#boldstartup')}  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-green-50 hover:to-emerald-50 hover:text-green-700 transition-all duration-150">
                        <Rocket className="h-4 w-4" />
                        <span>Bold Startup</span>
                      </button>
                      <button onClick={() => handleNavigation('/about')}  className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-blue-50 hover:to-indigo-50 hover:text-blue-700 transition-all duration-150">
                        <Users className="h-4 w-4" />
                        <span>About Us</span>
                      </button>
                      <button onClick={() => handleNavigation('/careers')} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-purple-50 hover:to-pink-50 hover:text-purple-700 transition-all duration-150">
                        <Briefcase className="h-4 w-4" />
                        <span>Careers</span>
                      </button>
                      <button onClick={() => handleNavigation('/contact')} className="flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-700 hover:bg-gradient-to-r hover:from-emerald-50 hover:to-green-50 hover:text-emerald-700 transition-all duration-150">
                        <Users className="h-4 w-4" />
                        <span>Contact Us</span>
                      </button>
                    </div>
                  </div>
                </div>

                <button  onClick={() => handleNavigation('/')}
className="px-4 py-2 rounded-xl text-slate-600 hover:text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-600 transition-all duration-150 font-medium text-sm hover:shadow-lg hover:scale-105">
                  Signin
                </button>
              </nav>

              {/* CTA Buttons */}
              <div className="hidden lg:flex items-center space-x-3">
                <button onClick={() => handleNavigation('/explore')} className="bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                  <Crown className="h-4 w-4" />
                  <span>Explore Our Programs</span>
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
        className={`fixed inset-0 bg-black/50 backdrop-blur-sm z-50 transition-opacity duration-300 lg:hidden ${isMenuOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'
          }`}
      />

      {/* Slide-out Menu */}
      <div
        className={`mobile-menu fixed top-0 left-0 h-full w-80 max-w-[85vw] bg-white/95 backdrop-blur-xl shadow-2xl z-50 transform transition-transform duration-300 ease-out lg:hidden overflow-y-auto ${isMenuOpen ? 'translate-x-0' : '-translate-x-full'
          } scrollbar-hide`}
        style={{
          scrollbarWidth: 'none',  /* Firefox */
          msOverflowStyle: 'none', /* IE 10+ */
        }}
      >
        {/* Menu Header */}
        <div className="flex items-center justify-between p-6 border-b border-slate-200/50">
          <div className="flex items-center space-x-3">
            <img src="/Red-Black-Name-Logo.png" alt="GradXpert Logo" className="h-10 w-auto" />
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
                  <button
                    key={index}
                    onClick={() => handleNavigation(item.href)}
                    className="w-full flex items-center space-x-3 px-3 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-150 group"
                  >
                    <div className="w-3 h-3 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-blue-100 group-hover:to-purple-100 rounded-lg flex items-center justify-center transition-all duration-150">
                      <Icon className="h-4 w-4 text-slate-600 group-hover:text-blue-600" />
                    </div>
                    <span className="font-medium text-sm">{item.label}</span>
                  </button>
                );
              })}
            </div>

            {/* Quick Links Dropdown Section for Mobile */}
            <div className="mt-6">
              <button
                onClick={() => setIsQuickLinksOpen(!isQuickLinksOpen)}
                className="w-full flex items-center justify-between px-3 py-2.5 rounded-xl text-slate-700 hover:text-slate-900 hover:bg-gradient-to-r hover:from-slate-50 hover:to-slate-100 transition-all duration-150 group"
              >
                <div className="flex items-center space-x-3">
                  <div className="w-8 h-8 bg-gradient-to-r from-slate-100 to-slate-200 group-hover:from-slate-200 group-hover:to-slate-300 rounded-lg flex items-center justify-center transition-all duration-150">
                    <Briefcase className="h-4 w-4 text-slate-600 group-hover:text-slate-700" />
                  </div>
                  <span className="font-semibold text-sm">Quick Links</span>
                </div>
                <ChevronRight
                  className={`h-4 w-4 text-slate-500 transition-transform duration-200 ${isQuickLinksOpen ? 'rotate-90' : ''
                    }`}
                />
              </button>

              {/* Quick Links Dropdown Items */}
              <div className={`overflow-hidden transition-all duration-300 ${isQuickLinksOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
                }`}>
                <div className="pl-4 mt-2 space-y-1 border-l-2 border-slate-100 ">
                  {quickLinksItems.map((item, index) => {
                    const Icon = item.icon;
                    return (
                      <button
                        key={index}
                        onClick={() => handleNavigation(item.href)}
                        className="w-full flex items-center space-x-3 px-3 py-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-gradient-to-r hover:from-blue-50 hover:to-purple-50 transition-all duration-150 group text-left"
                      >
                        <div className="w-6 h-6 bg-gradient-to-r from-slate-50 to-slate-100 group-hover:from-blue-50 group-hover:to-purple-50 rounded-lg flex items-center justify-center transition-all duration-150">
                          <Icon className="h-3.5 w-3.5 text-slate-500 group-hover:text-blue-600" />
                        </div>
                        <span className="font-medium text-sm">{item.label}</span>
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </nav>

          {/* Bottom CTA Section */}
          <div className="p-4 border-t border-slate-200/50 bg-gradient-to-r from-slate-50/50 to-blue-50/50">
            <div className="space-y-2">
              <button onClick={() => handleNavigation('/explore')} className="w-full flex items-center justify-center bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-lg transition-all duration-300 hover:scale-105 space-x-2">
                <Crown className="h-4 w-4" />
                <span>Explore Our Programs</span>
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