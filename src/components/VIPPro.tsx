import React from 'react';
import { Crown, Star, CheckCircle, Sparkles, Zap, Diamond, Award, Shield, Gem } from 'lucide-react';

const features = [
  { name: "StudentOS Premium", description: "AI tools & productivity boosters + Priority support", premium: true },
  { name: "I/O School VIP Access", description: "All courses + 1-on-1 mentorship + Live sessions", premium: true },
  { name: "Kickstack Priority", description: "Premium internships + Fast-track placement", premium: true },
  { name: "Powerfolio Pro", description: "Custom domain + Advanced analytics + SEO optimization", premium: true },
  { name: "BoldtStartup Incubation", description: "Funding support + Investor network + Legal assistance", premium: true },
  { name: "Talent Pool Elite", description: "Guaranteed entry + Executive networking + Global opportunities", premium: true }
];

const exclusiveBenefits = [
  { icon: Crown, text: "Personal career strategist assigned", color: "from-yellow-500 to-amber-500" },
  { icon: Diamond, text: "Direct access to C-suite mentors", color: "from-purple-500 to-indigo-500" },
  { icon: Shield, text: "Lifetime career support guarantee", color: "from-emerald-500 to-teal-500" },
  { icon: Gem, text: "Exclusive alumni network access", color: "from-pink-500 to-rose-500" }
];

const VIPPro = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900 relative overflow-hidden">
      {/* Premium background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(251,191,36,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.15),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(59,130,246,0.1),transparent_70%)]"></div>
      </div>
      
      {/* Luxury pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(251,191,36,0.15)_1px,transparent_0)] bg-[length:60px_60px]"></div>
      
      {/* Floating luxury elements */}
      <div className="absolute top-10 left-10 w-40 h-40 bg-gradient-to-r from-amber-400/20 to-yellow-400/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-10 right-10 w-32 h-32 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* Animated sparkles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-amber-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-blue-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-pink-400 rounded-full animate-ping"></div>
      </div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Premium Header */}
        <div className="text-center mb-12">
          <div className="mb-6">
            <div className="flex items-center justify-center space-x-4 mb-3">
              <div className="relative">
                <div className="w-16 h-16 bg-gradient-to-r from-amber-400 via-yellow-500 to-orange-500 rounded-full flex items-center justify-center shadow-2xl shadow-amber-500/50 animate-pulse">
                  <Crown className="h-8 w-8 text-white" />
                </div>
                <div className="absolute -top-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                  <Diamond className="h-3 w-3 text-white" />
                </div>
                <div className="absolute -bottom-1 -left-1 w-5 h-5 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center shadow-lg">
                  <Sparkles className="h-3 w-3 text-white animate-spin" />
                </div>
              </div>
              <h2 className="text-3xl sm:text-4xl font-black text-white tracking-tight">
                GradXpert{' '}
                <span className="bg-gradient-to-r from-amber-400 via-yellow-400 to-orange-400 bg-clip-text text-transparent drop-shadow-2xl">
                  VIP Pro
                </span>
              </h2>
            </div>
            <div className="flex items-center justify-center space-x-2 mb-4">
              <Star className="h-5 w-5 text-amber-400 fill-current" />
              <Star className="h-5 w-5 text-amber-400 fill-current" />
              <Star className="h-5 w-5 text-amber-400 fill-current" />
              <Star className="h-5 w-5 text-amber-400 fill-current" />
              <Star className="h-5 w-5 text-amber-400 fill-current" />
            </div>
          </div>
          
          <p className="text-lg text-amber-200 mb-4 font-light tracking-wide">The Ultimate Career Transformation Experience</p>
          <p className="text-base text-slate-300 max-w-3xl mx-auto leading-relaxed">
            An exclusive, all-inclusive premium membership designed for ambitious students who demand excellence
          </p>
          
          {/* Premium badges */}
          <div className="flex flex-wrap justify-center gap-3 mt-6">
            <div className="bg-gradient-to-r from-amber-500/20 to-yellow-500/20 backdrop-blur-sm border border-amber-400/30 px-4 py-2 rounded-full">
              <span className="text-amber-300 font-bold text-sm">✨ Limited to 100 Members</span>
            </div>
            <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm border border-purple-400/30 px-4 py-2 rounded-full">
              <span className="text-purple-300 font-bold text-sm">🏆 Elite Status</span>
            </div>
            <div className="bg-gradient-to-r from-emerald-500/20 to-teal-500/20 backdrop-blur-sm border border-emerald-400/30 px-4 py-2 rounded-full">
              <span className="text-emerald-300 font-bold text-sm">🛡️ Lifetime Guarantee</span>
            </div>
          </div>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          {/* Premium Features */}
          <div className="space-y-6">
            <div className="bg-gradient-to-br from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 shadow-2xl">
              <h3 className="text-xl font-bold text-white mb-6 flex items-center">
                <Gem className="h-6 w-6 text-amber-400 mr-4" />
                Premium Inclusions
              </h3>
              
              <div className="space-y-4">
                {features.map((feature, index) => (
                  <div key={index} className="group relative">
                    <div className="flex items-start space-x-4 p-4 rounded-xl bg-gradient-to-r from-white/10 to-white/5 border border-white/10 hover:border-amber-400/30 transition-all duration-500 hover:shadow-lg hover:shadow-amber-500/20">
                      <div className="w-8 h-8 bg-gradient-to-r from-amber-500 to-yellow-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center space-x-2 mb-1">
                          <p className="font-bold text-white text-sm">{feature.name}</p>
                          {feature.premium && (
                            <div className="bg-gradient-to-r from-purple-500 to-pink-500 px-2 py-1 rounded-lg">
                              <span className="text-white text-xs font-bold">PREMIUM</span>
                            </div>
                          )}
                        </div>
                        <p className="text-slate-300 leading-relaxed text-sm">{feature.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
          </div>
          
          {/* Premium Pricing Card */}
          <div>
            <div className="relative">
              {/* Glow effect */}
              <div className="absolute -inset-2 bg-gradient-to-r from-amber-400/30 via-yellow-400/30 to-orange-400/30 rounded-2xl blur-xl"></div>
              
              <div className="relative bg-gradient-to-br from-white/15 to-white/5 backdrop-blur-xl p-8 rounded-2xl shadow-2xl border border-white/20">
                {/* Premium badge */}
                <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                  <div className="bg-gradient-to-r from-amber-500 to-yellow-500 px-6 py-2 rounded-full shadow-xl">
                    <span className="text-white font-bold text-sm">MOST EXCLUSIVE</span>
                  </div>
                </div>
                
                <div className="text-center mb-8">
                  <div className="mb-4">
                    <div className="text-4xl font-black bg-gradient-to-r from-amber-400 to-yellow-400 bg-clip-text text-transparent mb-3">
                      Elite
                    </div>
                    <p className="text-slate-300 font-medium">Complete Career Ecosystem</p>
                  </div>
                  
                  <div className="space-y-4 mb-8">
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-slate-300">Individual Services Value</span>
                      <span className="text-slate-400 line-through">₹1,50,000+</span>
                    </div>
                    <div className="flex justify-between items-center py-2 border-b border-white/20">
                      <span className="text-slate-300">Regular VIP Pro</span>
                      <span className="text-slate-400 line-through">₹75,000</span>
                    </div>
                    <div className="flex justify-between items-center py-3">
                      <span className="font-bold text-white">VIP Pro Elite</span>
                      <div className="text-right">
                        <div className="text-2xl font-black text-amber-400">₹49,999</div>
                        <div className="text-emerald-400 text-sm font-bold">Save ₹1,00,000+</div>
                      </div>
                    </div>
                  </div>
                  
                  <button className="w-full bg-gradient-to-r from-amber-500 via-yellow-500 to-orange-500 text-white px-6 py-3 rounded-xl font-bold hover:shadow-2xl hover:shadow-amber-500/50 transition-all duration-300 hover:scale-105 mb-6 relative overflow-hidden group">
                    <div className="absolute inset-0 bg-gradient-to-r from-amber-600 via-yellow-600 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                    <span className="relative flex items-center justify-center space-x-2">
                      <Crown className="h-5 w-5" />
                      <span>Claim Elite Status</span>
                      <Sparkles className="h-5 w-5 animate-spin" />
                    </span>
                  </button>
                  
                  <div className="space-y-2 text-center">
                    <p className="text-amber-300 text-sm font-bold">
                      ⚡ Early Bird Offer • Limited Time Only
                    </p>
                    <p className="text-slate-400 text-xs">
                      🛡️ 60-day money-back guarantee • 🎯 Results guaranteed or full refund
                    </p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Trust indicators */}
            <div className="mt-6 grid grid-cols-2 gap-3">
              <div className="bg-gradient-to-r from-emerald-500/20 to-green-500/20 backdrop-blur-sm p-3 rounded-xl border border-emerald-400/30 text-center">
                <Award className="h-5 w-5 text-emerald-400 mx-auto mb-2" />
                <p className="text-emerald-300 text-sm font-bold">100% Success Rate</p>
                <p className="text-emerald-200 text-xs">Elite members only</p>
              </div>
              <div className="bg-gradient-to-r from-purple-500/20 to-pink-500/20 backdrop-blur-sm p-3 rounded-xl border border-purple-400/30 text-center">
                <Shield className="h-5 w-5 text-purple-400 mx-auto mb-2" />
                <p className="text-purple-300 text-sm font-bold">Lifetime Support</p>
                <p className="text-purple-200 text-xs">Career guarantee</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom testimonial */}
        <div className="mt-12 text-center">
          <div className="bg-gradient-to-r from-white/10 to-white/5 backdrop-blur-xl p-6 rounded-2xl border border-white/20 max-w-3xl mx-auto">
            <div className="flex items-center justify-center space-x-4 mb-4">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                <span className="text-white font-bold text-sm">AM</span>
              </div>
              <div className="flex">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="h-4 w-4 text-amber-400 fill-current" />
                ))}
              </div>
            </div>
            <p className="text-white text-sm italic mb-3">
              "VIP Pro Elite transformed my entire career trajectory. From a confused 2nd year student to landing a ₹25 LPA offer at Google. The personal mentorship and exclusive network access made all the difference."
            </p>
            <div className="text-amber-300 font-bold text-xs">
              - Arjun Mehta, Google Software Engineer (VIP Pro Elite Alumni)
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default VIPPro;