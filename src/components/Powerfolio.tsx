import React from 'react';
import { FolderOpen, Link, Github, Award, Sparkles, Code, Globe, Briefcase } from 'lucide-react';

const Powerfolio = () => {
  return (
    <section id="portfolio" className="py-16 bg-gradient-to-br from-blue-50 via-blue-100 to-sky-50 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(96,165,250,0.1),transparent_50%)]"></div>
      </div>
      {/* Transparent grid pattern */}
  <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.05)_1px,transparent_1px)] bg-[size:50px_50px] pointer-events-none z-0"></div>
      {/* Animated elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-sky-400 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-indigo-400 rounded-full animate-bounce"></div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <div className="flex md:items-center space-x-3 md:space-x-4 mb-6 md:mb-8 md:justify-center lg:justify-start">
              <div className="relative">
                <FolderOpen className="h-8 w-8 md:h-10 md:w-10 lg:h-12 lg:w-12 text-blue-600" />
                <Sparkles className="h-4 w-4 md:h-5 md:w-5 lg:h-6 lg:w-6 text-indigo-500 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-spin" />
              </div>
              <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                Showcase with{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Powerfolio
                </span>
              </h2>
            </div>
            <p className="text-lg md:text-xl lg:text-2xl text-blue-700 mb-8 md:mb-10 font-light md:text-center lg:text-left md:px-4 lg:px-0">
              A public proof of everything you've built.
            </p>

            <div className="space-y-4 md:space-y-6 mb-8 md:mb-10 md:px-4 lg:px-0">
              {[
                {
                  icon: <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-white" />,
                  text: "Auto-sync projects from courses & internships"
                },
                {
                  icon: <Link className="h-4 w-4 md:h-5 md:w-5 text-white" />,
                  text: "Add blogs, badges, certificates, GitHub links"
                },
                {
                  icon: <Award className="h-4 w-4 md:h-5 md:w-5 text-white" />,
                  text: "One link to show your skills to recruiters"
                }
              ].map((item, index) => (
                <div key={index} className="flex items-center space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                  <div className="w-8 h-8 md:w-10 md:h-10 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-lg md:rounded-xl flex items-center justify-center flex-shrink-0">
                    {item.icon}
                  </div>
                  <span className="text-sm md:text-base text-slate-700 font-medium">{item.text}</span>
                </div>
              ))}
            </div>

            <div className="bg-gradient-to-r from-blue-100 to-sky-100 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl mb-6 md:mb-8 border border-blue-200 md:mx-4 lg:mx-0">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3">
                <Globe className="h-5 w-5 md:h-6 md:w-6 text-blue-600" />
                <span className="font-bold text-blue-800 text-sm md:text-base">Build Your Digital Presence</span>
              </div>
              <p className="text-slate-700 text-xs md:text-sm">
                ✨ Build your tech + non-tech profile — like LinkedIn, but better.
              </p>
            </div>
          </div>

          <div className="space-y-8">
            {/* Hero Image */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <img 
                src="https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Professional portfolio showcase"
                className="w-full h-80 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-indigo-900/20"></div>
            </div>

            {/* Portfolio Features */}
            <div className="bg-white/70 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-lg">
              <div className="flex items-center justify-between mb-6">
                <h3 className="font-bold text-slate-900 text-xl">Sample Portfolio Features</h3>
                <Github className="h-6 w-6 text-slate-600" />
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {[
                  {
                    icon: <Code className="h-5 w-5 text-blue-600" />,
                    title: "Live Projects",
                    desc: "Showcase working applications"
                  },
                  {
                    icon: <Globe className="h-5 w-5 text-indigo-600" />,
                    title: "Technical Blogs",
                    desc: "Share your learning journey"
                  },
                  {
                    icon: <Award className="h-5 w-5 text-blue-600" />,
                    title: "Certificates & Badges",
                    desc: "Display verified achievements"
                  },
                  {
                    icon: <Briefcase className="h-5 w-5 text-indigo-600" />,
                    title: "Internship Work",
                    desc: "Real industry experience"
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-gradient-to-r from-blue-100 to-indigo-100 p-4 rounded-2xl border border-blue-200 hover:border-blue-300 transition-all duration-300">
                    <div className="flex items-center space-x-3 mb-2">
                      {item.icon}
                      <p className="font-bold text-sm text-slate-900">{item.title}</p>
                    </div>
                    <p className="text-xs text-slate-600">{item.desc}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-16">
          <div className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center px-4">
            <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105">
              Build Your Powerfolio
            </button>
            <button className="border-2 border-blue-600 text-blue-600 px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:bg-blue-50 hover:shadow-xl transition-all duration-300 hover:scale-105">
              Demo Project
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Powerfolio;
