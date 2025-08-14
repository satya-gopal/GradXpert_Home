import React from 'react';
import { Rocket, Lightbulb, TrendingUp, Users, Sparkles, Target, Code, Globe, Zap } from 'lucide-react';

const BoldtStartup = () => {
  return (
    <section id='boldstartup' className="py-20 md:py-24 bg-gradient-to-br from-emerald-50 via-green-50 to-teal-50 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(16,185,129,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(34,197,94,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(16,185,129,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(16,185,129,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-green-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-teal-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title - Mobile/Tablet only */}
        <div className="md:text-center mb-12 lg:hidden">
          <div className="flex md:items-center md:justify-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <div className="relative">
              <Rocket className="h-10 w-10  md:h-10 md:w-10 text-emerald-600" />
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-green-500 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-spin" />
            </div>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
              Build with{' '}
              <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                Bold Startup
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-emerald-700 font-light md:text-center md:px-4">
            Students don't just learn. They build.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-16 md:items-center">
          <div className="relative order-2 lg:order-1">
            {/* Main hero image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-emerald-500/20 mb-8">
              <img 
                src="https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=700" 
                alt="Student entrepreneurs building startups"
                className="w-full h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-emerald-900/60 via-transparent to-green-900/20"></div>
              {/* <div className="absolute bottom-6 left-6 text-white">
                <div className="text-2xl font-bold">Student Entrepreneurship</div>
                <div className="text-sm opacity-90">From idea to MVP</div>
              </div> */}
            </div>
            
            {/* Feature grid */}
            <div className="grid grid-cols-2 gap-4 md:gap-6">
              <div className="bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 text-center group shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Lightbulb className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Ideation</h3>
                <p className="text-xs md:text-sm text-slate-600">Validate your ideas</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 hover:border-green-300 transition-all duration-300 text-center group shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Code className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">MVP Build</h3>
                <p className="text-xs md:text-sm text-slate-600">Develop products</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 text-center group shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <TrendingUp className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Pitch Deck</h3>
                <p className="text-xs md:text-sm text-slate-600">Present to investors</p>
              </div>
              <div className="bg-white/80 backdrop-blur-xl p-4 md:p-6 rounded-xl md:rounded-2xl border border-slate-200 hover:border-green-300 transition-all duration-300 text-center group shadow-lg">
                <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-green-500 to-emerald-500 rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 transition-transform duration-300">
                  <Globe className="h-5 w-5 md:h-6 md:w-6 text-white" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2 text-sm md:text-base">Launch</h3>
                <p className="text-xs md:text-sm text-slate-600">Go to market</p>
              </div>
            </div>
          </div>
          
          <div className="order-1 lg:order-2">
            {/* Section Title - Desktop only */}
            <div className="hidden lg:block mb-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <Rocket className="h-10 w-10 lg:h-12 lg:w-12 text-emerald-600" />
                  <Sparkles className="h-5 w-5 lg:h-6 lg:w-6 text-green-500 absolute -top-2 -right-2 animate-spin" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Build with{' '}
                  <span className="bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent">
                    Bold Startup
                  </span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl text-emerald-700 font-light">
                Students don't just learn. They build.
              </p>
            </div>
            
            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10 px-0 md:px-4 lg:px-0">
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Turn your best projects into real products</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Get pitch-ready with startup mentors</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Launch your MVP, apply for grants or incubation</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Collaborate with other creators</p>
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-emerald-100 to-green-100 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-emerald-200 mx-0 md:mx-4 lg:mx-0">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3">
                <Target className="h-5 w-5 md:h-6 md:w-6 text-emerald-600" />
                <span className="font-bold text-emerald-800 text-sm md:text-base">For Student Entrepreneurs</span>
              </div>
              <p className="text-slate-700 text-xs md:text-sm mb-2">
                <span className="font-semibold text-emerald-700">🎯 Target:</span> Students with project ideas or completed projects
              </p>
              <p className="text-slate-700 text-xs md:text-sm">
                <span className="font-semibold text-emerald-700">🚀 Outcome:</span> MVP launch + pitch deck + funding/incubation support
              </p>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button onClick={() => window.location.href = "https://boldstartup.in"} className="bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-lg md:text-lg hover:shadow-2xl hover:shadow-emerald-500/25 transition-all duration-300 hover:scale-105 mx-4">
            Submit Your Idea
          </button>
        </div>
      </div>
    </section>
  );
};

export default BoldtStartup;