import React from 'react';
import { Settings, GraduationCap, Briefcase, FolderOpen, Rocket, Star, Users, Zap, Layers, ExternalLink } from 'lucide-react';
import { useNavigate } from "react-router-dom";

const ecosystemItems = [
  {
    icon: Settings,
    name: "StudentOS",
    description: "AI tools, productivity boosters, roadmaps",
    benefit: "Organize your career, save time, stay ahead",
    color: "from-orange-500 to-orange-600",
    bgGradient: "from-orange-50 to-orange-100",
    borderColor: "border-orange-400 hover:border-orange-200",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#studentos"
  },
  {
    icon: GraduationCap,
    name: "I/O School",
    description: "Courses + mentorship",
    benefit: "Learn job-ready skills with hands-on projects",
    color: "from-violet-500 to-violet-600",
    bgGradient: "from-violet-50 to-violet-100",
    borderColor: "border-violet-400 hover:border-violet-200",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#courses"
  },
  {
    icon: Briefcase,
    name: "Kickstack",
    description: "Internships & simulations",
    benefit: "Gain real experience with industry workflows",
    color: "from-indigo-900 to-indigo-900",
    bgGradient: "from-indigo-50 to-indigo-100",
    borderColor: "border-indigo-400 hover:border-indigo-200",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#internships"
  },
  {
    icon: FolderOpen,
    name: "Powerfolio",
    description: "Public portfolio builder",
    benefit: "Show proof of your work — not just certificates",
    color: "from-blue-400 to-blue-500",
    bgGradient: "from-blue-50 to-blue-100",
    borderColor: "border-blue-400 hover:border-blue-200",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#portfolio"
  },
  {
    icon: Star,
    name: "Talent Pool",
    description: "For top performers",
    benefit: "Get discovered by companies, startups & mentors",
    color: "from-yellow-400 to-yellow-500",
    bgGradient: "from-yellow-50 to-yellow-100",
    borderColor: "border-yellow-400 hover:border-yellow-200",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#talentpool"
  },
  {
    icon: Rocket,
    name: "Bold Startup",
    description: "Startup support for students",
    benefit: "Turn your projects into products & pitch for support",
    color: "from-green-500 to-green-600",
    bgGradient: "from-green-50 to-green-100",
    borderColor: "border-green-400 hover:border-green-200",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400",
    link: "#boldstartup"
  }
];


const Ecosystem = () => {
    const navigate = useNavigate();

  return (
    <section id="ecosystem" className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Light background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(147,51,234,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_60%,rgba(16,185,129,0.12),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,rgba(251,146,60,0.12),transparent_60%)]"></div>
      </div>
      
      {/* Animated grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.04)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.04)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      {/* Floating elements */}
      <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-300/30 to-purple-300/30 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-300/30 to-orange-300/30 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-emerald-300/25 to-teal-300/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      <div className="absolute top-1/3 right-10 w-36 h-36 bg-gradient-to-r from-amber-300/25 to-yellow-300/25 rounded-full blur-3xl animate-pulse delay-2000"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-pink-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400 rounded-full animate-pulse"></div>
      </div>
      
      <div className="container-2xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="md:text-center mb-16">
          <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            <div className="flex md:items-center md:justify-center space-x-3 md:space-x-4 mb-2">
            <div className="relative hidden md:block">
              <Layers className="h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              <div className="absolute -top-1 -right-1 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
            </div>
            {/* <div className="relative  md:hidden">
              <Layers className="absolute -top-6 -right-8 h-6 w-6 md:h-8 md:w-8 text-purple-600" />
              <div className="absolute -top-6 -right-9 w-3 h-3 md:w-4 md:h-4 bg-gradient-to-r from-pink-400 to-rose-400 rounded-full animate-pulse"></div>
            </div> */}
            <span>The Ecosystem —{' '}
            <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent drop-shadow-sm">
              All You Need
            </span>{' '}
            , In One Place</span>
            </div>
          </h2>
          <p className="text-base md:text-lg text-slate-700 max-w-4xl mx-auto leading-relaxed font-medium px-4">
            Seven integrated platforms working together to accelerate your career journey into the future
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 mb-8 md:mb-12 px-4 md:px-0">
          {ecosystemItems.map((item, index) => {
            const Icon = item.icon;
            // Define 6 different gradient combinations for variety
            const gradientVariations = [
              'from-blue-500/20 via-indigo-500/15 to-purple-500/20',
              'from-emerald-500/20 via-teal-500/15 to-cyan-500/20', 
              'from-orange-500/20 via-red-500/15 to-pink-500/20',
              'from-blue-400/20 via-white-500/15 to-blue-500/20',
              'from-yellow-500/20 via-orange-500/15 to-red-500/20',
              'from-teal-500/20 via-emerald-500/15 to-green-500/20'
            ];
            const currentGradient = gradientVariations[index % gradientVariations.length];
            
            return (
              <div key={index} className="group relative">
                <div className={`bg-gradient-to-br ${item.bgGradient} backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl border ${item.borderColor} transition-all duration-300 hover:shadow-xl hover:-translate-y-1 hover:scale-105 relative overflow-hidden shadow-lg`}>
                    {/* Colorful glow effect on hover */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${item.color} opacity-0 group-hover:opacity-10 transition-opacity duration-500 rounded-2xl blur-xl`}></div>
                    <a 
                    href={item.link}
                    className="absolute top-4 right-4 w-8 h-8 bg-white/90 backdrop-blur-sm rounded-lg flex items-center justify-center opacity-100 transition-all duration-300 hover:scale-110 shadow-lg border border-slate-200 z-20"
                  >
                    <ExternalLink className="h-4 w-4 text-slate-600" />
                  </a>
                    <div className="relative z-10">
                      
                      <div className={`w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r ${item.color} rounded-xl md:rounded-2xl flex items-center justify-center mb-4 md:mb-5 shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-500`}>
                        <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                      </div>

                     
                      {/* </div> */}
                     

                      <h3 className="text-lg md:text-xl font-bold text-slate-800 mb-3 md:mb-4 tracking-tight">{item.name}</h3>
                      <p className="text-sm md:text-base text-slate-700 mb-4 md:mb-5 leading-relaxed font-medium">{item.description}</p>
                      <div className="border-t border-slate-300 pt-3 md:pt-4">
                        <p className={`text-xs md:text-sm bg-gradient-to-r ${item.color} bg-clip-text text-transparent font-bold`}>{item.benefit}</p>
                      </div>
                    </div> 
                    
                    {/* Sparkle effects on hover */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 right-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-200"></div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div className="text-center">
          <button onClick={() => navigate('/explore')} className="relative bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500 text-white hover:shadow-2xl hover:shadow-purple-500/40 hover:scale-105 overflow-hidden group px-6 md:px-10 py-3 md:py-4 text-base md:text-lg font-bold rounded-xl md:rounded-2xl transition-all duration-300 mx-4">
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-rose-500 opacity-0 group-hover:opacity-50 blur-xl transition-opacity duration-300"></div>
            <span className="relative flex items-center space-x-3">
              <Zap className="h-4 w-4 md:h-5 md:w-5 group-hover:animate-pulse" />
              <span>Join the Ecosystem</span>
              <Star className="h-4 w-4 md:h-5 md:w-5 group-hover:animate-spin" />
            </span>
          </button>
          <p className="text-slate-600 mt-4 font-medium text-sm md:text-base px-4">
            🚀 Transform your career with our integrated platform
          </p>
        </div>
      </div>
    </section>
  );
};

export default Ecosystem;