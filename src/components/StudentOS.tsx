import React from 'react';
import { Settings, Brain, Zap, Sparkles, ArrowRight, Bot, Code, FileText, Calendar, Target, Lightbulb, TrendingUp, ExternalLink } from 'lucide-react';

const aiTools = [
  { name: "Career Compass AI", description: "AI-powered career guidance", icon: Target, color: "from-blue-500 to-indigo-500", link: "/tools/career-compass" },
  { name: "Resume Builder Pro", description: "Smart resume optimization", icon: FileText, color: "from-emerald-500 to-teal-500", link: "/tools/resume-builder" },
  { name: "Interview Coach", description: "AI mock interviews", icon: Bot, color: "from-purple-500 to-pink-500", link: "/tools/interview-coach" },
  { name: "Skill Gap Analyzer", description: "Identify learning gaps", icon: TrendingUp, color: "from-orange-500 to-red-500", link: "/tools/skill-analyzer" },
  { name: "Project Idea Generator", description: "AI project suggestions", icon: Lightbulb, color: "from-yellow-500 to-orange-500", link: "/tools/project-generator" },
  { name: "Code Review Assistant", description: "AI code optimization", icon: Code, color: "from-cyan-500 to-blue-500", link: "/tools/code-review" },
  // { name: "Study Planner AI", description: "Personalized study schedules", icon: Calendar, color: "from-green-500 to-emerald-500", link: "/tools/study-planner" },
  // { name: "Productivity Booster", description: "AI task management", icon: Zap, color: "from-red-500 to-pink-500", link: "/tools/productivity" },
  // { name: "Portfolio Analyzer", description: "AI portfolio feedback", icon: FileText, color: "from-indigo-500 to-purple-500", link: "/tools/portfolio-analyzer" },
  // { name: "Learning Path AI", description: "Personalized learning routes", icon: Brain, color: "from-teal-500 to-cyan-500", link: "/tools/learning-path" },
  // { name: "Networking Assistant", description: "AI networking suggestions", icon: Target, color: "from-pink-500 to-rose-500", link: "/tools/networking" },
  // { name: "Time Tracker Pro", description: "Smart time management", icon: Calendar, color: "from-violet-500 to-purple-500", link: "/tools/time-tracker" },
  // { name: "Goal Setting AI", description: "AI-powered goal planning", icon: Target, color: "from-amber-500 to-yellow-500", link: "/tools/goal-setting" },
  // { name: "Habit Builder", description: "Build productive habits", icon: Zap, color: "from-lime-500 to-green-500", link: "/tools/habit-builder" },
  // { name: "Stress Manager", description: "AI wellness coaching", icon: Brain, color: "from-sky-500 to-blue-500", link: "/tools/stress-manager" }
];

const StudentOS = () => {
  return (
    <section id='studentos' className="py-20 md:py-24 bg-gradient-to-br from-slate-900 via-gray-900 to-black relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.2),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_10%,rgba(99,102,241,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_80%,rgba(168,85,247,0.15),transparent_60%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_40%,rgba(59,130,246,0.15),transparent_70%)]"></div>
      </div>
      
      {/* Transparent grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.1)_1px,transparent_1px)] bg-[size:50px_50px]"></div>
      
      {/* Animated particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-indigo-400 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-violet-400 rounded-full animate-ping"></div>
        <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
        <div className="absolute top-2/3 left-1/5 w-2 h-2 bg-purple-500 rounded-full animate-bounce"></div>
      </div>
      
      {/* Floating colorful elements */}
      <div className="absolute top-20 left-20 w-32 h-32 bg-gradient-to-r from-blue-300/20 to-purple-300/20 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-20 right-20 w-40 h-40 bg-gradient-to-r from-indigo-300/20 to-violet-300/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
      <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-purple-300/25 to-pink-300/25 rounded-full blur-2xl animate-pulse delay-500"></div>
      
      {/* Black to white overlay before the grid */}
      <div className="absolute inset-0 bg-gradient-to-t from-black via-gray-2000 to-white/5"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="md:text-center mb-16">
          <div className="flex md:items-center md:justify-center space-x-4 mb-8">
            <div className="relative">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl shadow-blue-500/30">
                <Settings className="h-10 w-10  text-white" />
              </div>
              <div className="absolute -top-2 -right-2 w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center shadow-xl">
                <Sparkles className="h-5 w-5 text-white animate-spin" />
              </div>
              {/* <div className="absolute -bottom-2 -left-2 w-6 h-6 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-full flex items-center justify-center shadow-lg animate-pulse">
                <Zap className="h-3 w-3 text-white" />
              </div> */}
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-white tracking-tight">
              Try Our Latest{' '}
              <span className="bg-gradient-to-r from-blue-300 via-purple-300 to-indigo-300 bg-clip-text text-transparent drop-shadow-sm">
                StudentOS
              </span>{' '}
              Tools
            </h2>
          </div>
          <p className="text-xl text-blue-200 mb-8 font-medium max-w-3xl mx-auto">
            AI-powered productivity tools designed specifically for students
          </p>
          {/* <p className="text-base text-gray-300 max-w-2xl mx-auto leading-relaxed">
            Organize your career journey, boost productivity, and stay ahead with cutting-edge AI tools
          </p> */}
        </div>
        
        {/* AI Tools Grid */}
        <div className="mb-16">
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {aiTools.slice(0, 10).map((tool, index) => {
              const Icon = tool.icon;
              return (
                <a 
                  key={index} 
                  href={tool.link}
                  className="group bg-white/95 backdrop-blur-xl p-4 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-2xl hover:shadow-blue-500/25 text-center relative overflow-hidden"
                >
                  {/* Colorful hover overlay */}
                  <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 rounded-2xl`}></div>
                  
                  {/* Enhanced AI Badge */}
                  <div className={`absolute top-2 right-2 bg-gradient-to-r ${tool.color} p-1.5 rounded-full transition-all duration-300 shadow-lg group-hover:scale-110`}>
                    <ExternalLink className="h-3 w-3 text-white" />
                  </div>
                  
                  {/* Sparkle effects */}
                  <div className="absolute top-1 left-1 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                  <div className="absolute bottom-1 right-3 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-200"></div>
                  
                  <div className={`w-10 h-10 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center mx-auto mb-3 group-hover:scale-110 group-hover:rotate-6 transition-all duration-300 shadow-lg`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-800 text-sm mb-2 relative z-10">{tool.name}</h3>
                  <p className="text-slate-600 text-xs leading-tight relative z-10">{tool.description}</p>

                </a>
              );
            })}
          </div>
        </div>
        
        {/* Scrolling AI Tools */}
        <div className="mb-12 py-4">
          <div className="overflow-hidden">
            <div className="flex animate-scroll-left space-x-6 items-center hover:pause-animation">
              {/* Duplicate the array to create seamless loop */}
              {[...aiTools, ...aiTools].map((tool, index) => {
                const Icon = tool.icon;
                return (
                  <a 
                    key={index} 
                    href={aiTools[index % aiTools.length].link}
                    className="flex-shrink-0 w-80 bg-white/95 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300  hover:border-indigo-500 shadow-lg hover:shadow-2xl hover:shadow-blue-500/20 group relative overflow-hidden hover:z-10"
                  >
                    {/* Colorful hover overlay */}
                    <div className={`absolute inset-0 bg-gradient-to-br ${tool.color} opacity-0 group-hover:opacity-8 transition-opacity duration-300 rounded-2xl`}></div>
                    
                    {/* Enhanced glow effect */}
                    <div className={`absolute inset-0 bg-gradient-to-r ${tool.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500 rounded-2xl`}></div>
                    
                    {/* Sparkle effects */}
                    <div className="absolute top-2 left-2 w-2 h-2 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-ping transition-opacity duration-300"></div>
                    <div className="absolute bottom-2 right-8 w-1 h-1 bg-white rounded-full opacity-0 group-hover:opacity-100 animate-pulse transition-opacity duration-300 delay-200"></div>
                    
                    <div className="flex items-center space-x-4 mb-4">
                      <div className={`w-12 h-12 bg-gradient-to-r ${tool.color} rounded-xl flex items-center justify-center shadow-lg group-hover:scale-110 group-hover:rotate-6 transition-all duration-300`}>
                        <Icon className="h-6 w-6 text-white" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-bold text-slate-800 text-lg relative z-10">{tool.name}</h3>
                        <p className="text-slate-600 text-sm relative z-10">{tool.description}</p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between">
                      <div className={`bg-gradient-to-r ${tool.color} px-3 py-1 rounded-full shadow-lg transition-all duration-300 relative z-10 group-hover:scale-105`}>
                        <span className="text-white text-xs font-bold">AI-Powered</span>
                      </div>
                      <div className={`text-slate-700 group-hover:translate-x-1 transition-all duration-300 relative z-10`}>
                        <ArrowRight className="h-4 w-4" />
                      </div>
                    </div>
                  </a>
                );
              })}
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center">
          <div className="bg-gradient-to-r from-slate-800/80 to-gray-800/80 backdrop-blur-sm p-8 rounded-3xl border border-slate-600/50 shadow-xl mb-8 max-w-4xl mx-auto relative overflow-hidden">
            {/* Background glow */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20 blur-3xl"></div>
            
            <h3 className="text-2xl font-bold text-white mb-4 relative z-10">Ready to Supercharge Your Productivity?</h3>
            <p className="text-slate-300 mb-6 relative z-10">Join thousands of students already using StudentOS to accelerate their career journey</p>
            <button onClick={() => window.location.href = "https://studentos.in"} className="bg-gradient-to-r from-blue-600 via-purple-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-purple-500/50 transition-all duration-300 hover:scale-105 flex items-center space-x-3 mx-auto relative overflow-hidden group">
              <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-indigo-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <Settings className="h-5 w-5 relative z-10" />
              <span className="relative">Try StudentOS Tools</span>
              <ArrowRight className="h-5 w-5 relative z-10" />
            </button>
            <p className="text-slate-400 text-sm mt-8">
              ✨ Premium AI tools • 🚀 Advanced features for serious students • 🎯 Boost your productivity
            </p>
          </div>
          

        </div>
      </div>
    </section>
  );
};

export default StudentOS;