import React from 'react';
import { Zap, Trophy, Users, Calendar, Star, Rocket, Award, TrendingUp } from 'lucide-react';

export default function AnnouncementBar() {
  const newsItems = [
    {
      icon: Trophy,
      text: "500+ students placed in top companies this quarter!",
      gradient: "from-yellow-500 to-orange-500"
    },
    {
      icon: Rocket,
      text: "New AI/ML Bootcamp launching next week - Limited seats!",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      text: "I/O School wins 'Best EdTech Initiative' at AP Tech Awards 2024",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Users,
      text: "15,000+ students milestone reached! Thank you for trusting us",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Star,
      text: "4.9/5 rating maintained across 50+ campus partnerships",
      gradient: "from-indigo-500 to-purple-500"
    },
    {
      icon: Calendar,
      text: "Free Python Workshop at JNTU Kakinada - March 25-27, Register now!",
      gradient: "from-orange-500 to-red-500"
    },
    {
      icon: TrendingUp,
      text: "95% placement rate achieved in our latest Full Stack batch",
      gradient: "from-cyan-500 to-blue-500"
    },
    {
      icon: Zap,
      text: "New partnership with Microsoft for Azure certification programs",
      gradient: "from-pink-500 to-rose-500"
    }
  ];

  return (
    <section className="py-6 md:py-12 bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Effects - Reduced intensity on mobile */}
      <div className="absolute inset-0">
        <div className="absolute top-0 left-0 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-cyan-200/20 md:from-cyan-200/30 to-blue-200/20 md:to-blue-200/30 rounded-full blur-xl md:blur-3xl animate-pulse"></div>
        <div className="absolute bottom-0 right-0 w-48 md:w-96 h-48 md:h-96 bg-gradient-to-r from-purple-200/20 md:from-purple-200/30 to-pink-200/20 md:to-pink-200/30 rounded-full blur-xl md:blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-32 md:w-64 h-32 md:h-64 bg-gradient-to-r from-emerald-200/10 md:from-emerald-200/20 to-cyan-200/10 md:to-cyan-200/20 rounded-full blur-xl md:blur-3xl animate-pulse delay-500"></div>
      </div>
      
      {/* Subtle Background Pattern */}
      <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
      
      {/* Header - Adjusted for mobile */}
      <div className="relative  text-center mb-4 md:mb-6 px-4">
        <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/10 to-blue-500/10 backdrop-blur-sm border border-cyan-500/20 text-cyan-700 px-3 md:px-6 py-1 md:py-3 rounded-full text-xs md:text-sm font-medium mb-2 md:mb-4 shadow-md md:shadow-lg">
          <Zap className="h-4 w-4 md:h-5 md:w-5 animate-pulse text-cyan-600" />
          <span className="font-semibold">Latest Updates</span>
          <TrendingUp className="h-4 w-4 md:h-5 md:w-5 text-cyan-600 hidden sm:block" />
        </div>
        <h2 className="text-xl md:text-3xl font-bold text-gray-900 mb-1 md:mb-2">
          Stay Updated with <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">GradXpert</span>
        </h2>
        <p className="text-xs md:text-base text-gray-600 max-w-2xl md:mx-auto">
          Latest achievements, course launches, and success stories
        </p>
      </div>
      
      {/* Scrolling News Container - Mobile optimized */}
      <div className="relative overflow-hidden mb-4 md:mb-8">
        {/* Top Row - Left to Right */}
        <div className="flex animate-scroll-left-fast md:animate-scroll-left space-x-3 md:space-x-6 mb-3 md:mb-6 hover:pause-animation">
          {[...newsItems, ...newsItems].map((item, index) => (
            <div 
              key={index}
              className="group flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-2xl px-3 md:px-6 py-2 md:py-4 border border-gray-100 hover:border-gray-200 hover:bg-white transition-all duration-300 min-w-[240px] md:min-w-[420px] hover:scale-[1.02] md:hover:scale-105 shadow-md md:shadow-lg hover:shadow-md md:hover:shadow-xl"
            >
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className={`w-8 h-6 md:w-12 md:h-12 bg-gradient-to-r ${item.gradient} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 shadow-md md:shadow-lg flex-shrink-0`}>
                  <item.icon className="h-3 w-3 md:h-5 md:w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-base text-gray-800 font-medium md:font-semibold group-hover:text-gray-900 transition-colors duration-300 leading-snug md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="flex-shrink-0 hidden md:block">
                  <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full animate-pulse`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Bottom Row - Right to Left */}
        <div className="flex animate-scroll-right-fast md:animate-scroll-right space-x-3 md:space-x-6 hover:pause-animation">
          {[...newsItems.slice().reverse(), ...newsItems.slice().reverse()].map((item, index) => (
            <div 
              key={index}
              className="group flex-shrink-0 bg-white/90 backdrop-blur-sm rounded-lg md:rounded-2xl px-3 md:px-6 py-2 md:py-4 border border-gray-100 hover:border-gray-200 hover:bg-white transition-all duration-300 min-w-[240px] md:min-w-[420px] hover:scale-[1.02] md:hover:scale-105 shadow-md md:shadow-lg hover:shadow-md md:hover:shadow-xl"
            >
              <div className="flex items-center space-x-2 md:space-x-4">
                <div className={`w-8 h-6 md:w-12 md:h-12 bg-gradient-to-r ${item.gradient} rounded-lg md:rounded-xl flex items-center justify-center group-hover:scale-105 md:group-hover:scale-110 transition-transform duration-300 shadow-md md:shadow-lg flex-shrink-0`}>
                  <item.icon className="h-3 w-3 md:h-5 md:w-5 text-white" />
                </div>
                <div className="flex-1">
                  <p className="text-xs md:text-base text-gray-800 font-medium md:font-semibold group-hover:text-gray-900 transition-colors duration-300 leading-snug md:leading-relaxed">
                    {item.text}
                  </p>
                </div>
                <div className="flex-shrink-0 hidden md:block">
                  <div className={`w-2 h-2 bg-gradient-to-r ${item.gradient} rounded-full animate-pulse`}></div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
      
      {/* Bottom CTA - Mobile optimized */}
      <div className="relative text-center mt-3 md:mt-6 px-4">
        <button className="inline-flex items-center bg-white/80 backdrop-blur-sm border border-gray-200 text-gray-700 px-3 md:px-6 py-1.5 md:py-3 rounded-full text-xs md:text-sm font-medium shadow-md md:shadow-lg hover:bg-white hover:shadow-md md:hover:shadow-xl transition-all duration-300">
          <Star className="h-3 w-3 md:h-4 md:w-4 mr-1 md:mr-2 text-yellow-500 fill-current" />
          <span className="text-xs md:text-sm">Stay updated with our latest news</span>
        </button>
      </div>
    </section>
  );
}