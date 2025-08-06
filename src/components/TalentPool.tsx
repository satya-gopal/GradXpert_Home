import React from 'react';
import { Star, Award, Crown, Zap, Users, Target, CheckCircle, Sparkles } from 'lucide-react';

const benefits = [
  { icon: Crown, text: "Priority for jobs and startup roles" },
  { icon: Award, text: "Verified badge on your profile" },
  { icon: Star, text: "Featured in company dashboards" },
  { icon: Zap, text: "Mentorship access & exclusive invites" }
];

const TalentPool = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-yellow-50 via-orange-50 to-amber-50 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(245,158,11,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(202,138,4,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(202,138,4,0.1)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-yellow-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-orange-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-amber-400 rounded-full animate-bounce"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="flex items-center space-x-4 mb-6">
              <div className="relative">
                <Star className="h-10 w-10 text-yellow-600" />
                <Sparkles className="h-5 w-5 text-orange-500 absolute -top-2 -right-2 animate-spin" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Join the{' '}
                <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">
                  Talent Pool
                </span>
              </h2>
            </div>
            <p className="text-lg text-yellow-700 mb-8 font-medium">
              Only the best make it here.
            </p>
            
            <div className="space-y-4 mb-8">
              {benefits.map((benefit, index) => {
                const Icon = benefit.icon;
                return (
                  <div key={index} className="flex items-center space-x-3 p-3 rounded-xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm">
                    <div className="w-8 h-8 bg-gradient-to-r from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                      <Icon className="h-4 w-4 text-white" />
                    </div>
                    <span className="text-slate-700 font-medium text-sm">{benefit.text}</span>
                  </div>
                );
              })}
            </div>
            
            <div className="bg-gradient-to-r from-yellow-100 to-orange-100 backdrop-blur-sm p-4 rounded-xl mb-6 border border-yellow-200">
              <div className="flex items-center space-x-3 mb-3">
                <Target className="h-5 w-5 text-yellow-600" />
                <span className="font-bold text-yellow-800 text-sm">Elite Recognition</span>
              </div>
              <p className="text-slate-700 text-xs mb-2">
                <span className="font-semibold text-yellow-700">🎯 Target:</span> Top 10% of students who complete the ecosystem
              </p>
              <p className="text-slate-700 text-xs">
                <span className="font-semibold text-yellow-700">🏆 Outcome:</span> Priority access to jobs, startups & exclusive opportunities
              </p>
            </div>
            
          </div>
          
          <div className="space-y-6">
            {/* Hero Image */}
            <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-yellow-500/20">
              <img 
                src="https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Elite talent recognition"
                className="w-full h-64 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-yellow-900/60 via-transparent to-orange-900/20"></div>
              <div className="absolute bottom-4 left-4 text-white">
                {/* <div className="text-lg font-bold">Elite Recognition</div>
                <div className="text-xs opacity-90">Top performer status</div> */}
              </div>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Qualification Requirements */}
              <div className="bg-white/70 backdrop-blur-xl p-4 rounded-xl border border-slate-200 hover:border-yellow-300 transition-all duration-300 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center text-sm">
                  <CheckCircle className="h-4 w-4 text-yellow-500 mr-2" />
                  How to Qualify
                </h3>
                <div className="space-y-2">
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-slate-700">Complete 2+ I/O School courses</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-slate-700">Finish 1+ Kickstack internship</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-yellow-500 rounded-full"></div>
                    <span className="text-xs text-slate-700">Build active Powerfolio</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-1.5 h-1.5 bg-orange-500 rounded-full"></div>
                    <span className="text-xs text-slate-700">Maintain 4.5+ rating</span>
                  </div>
                </div>
              </div>
              
              {/* Benefits Overview */}
              <div className="bg-white/70 backdrop-blur-xl p-4 rounded-xl border border-slate-200 hover:border-orange-300 transition-all duration-300 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-3 flex items-center text-sm">
                  <Users className="h-4 w-4 text-orange-500 mr-2" />
                  Exclusive Access
                </h3>
                <p className="text-slate-700 mb-3 text-xs">Join an elite community of verified high-performers</p>
                <div className="bg-gradient-to-r from-yellow-100 to-orange-100 p-2 rounded-lg border border-yellow-200">
                  <p className="text-yellow-700 text-xs font-medium">🌟 Featured in company talent dashboards & startup founder networks</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-16">
          <button className="bg-gradient-to-r from-yellow-600 to-orange-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-yellow-500/25 transition-all duration-300 hover:scale-105">
            Unlock Talent Pool Access
          </button>
        </div>
      </div>
    </section>
  );
};

export default TalentPool;