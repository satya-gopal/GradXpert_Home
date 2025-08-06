import React from 'react';
import { Star, Target, Zap } from 'lucide-react';

const Promise = () => {
  return (
    <section className="section-padding bg-gradient-to-br from-slate-50 via-blue-50/30 to-purple-50/20 relative overflow-hidden">
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.04),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(147,51,234,0.04),transparent_70%)]"></div>
      </div>
      
      {/* Subtle grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:80px_80px]"></div>
      
      <div className="container-2xl mx-auto px-6 lg:px-8">
        
        <div className="grid lg:grid-cols-2 gap-20 items-center relative z-10">
          <div>
            <div className="flex items-center space-x-4 mb-8">
              <div className="icon-md bg-gradient-to-r from-blue-500 to-purple-500 rounded-xl flex items-center justify-center shadow-lg shadow-blue-500/25">
                <Star className="icon-sm text-white" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 tracking-tight">
                About GradXpert
              </h2>
            </div>
            
            <p className="text-lg text-slate-700 mb-10 leading-relaxed font-semibold">
              We're building India's most comprehensive career ecosystem, designed specifically for students who want to transform their potential into real-world success.
            </p>
            
            <div className="space-y-6 mb-10">
            <div className="card group flex items-start space-x-6 hover:border-blue-300/50">
              <div className="icon-md bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Target className="icon-sm text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">The Challenge We Solve</h3>
                <p className="text-slate-600 leading-relaxed">
                  Students today don't need more theory — they need clarity, skills, proof, and the right network.
                </p>
              </div>
            </div>
            
            <div className="card group flex items-start space-x-6 hover:border-purple-300/50">
              <div className="icon-md bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center flex-shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                <Zap className="icon-sm text-white" />
              </div>
              <div>
                <h3 className="font-bold text-slate-900 mb-3 text-lg">Our Approach</h3>
                <p className="text-slate-600 leading-relaxed">
                  GradXpert gives you the complete career journey — built for Indian students, aligned with the future of work.
                </p>
              </div>
            </div>
            </div>
            
            <div className="bg-gradient-to-r from-blue-50/80 to-purple-50/80 backdrop-blur-sm p-8 rounded-2xl border border-blue-200/50 shadow-xl">
              <h3 className="font-bold text-slate-900 mb-5 text-xl flex items-center">
                <div className="icon-sm bg-gradient-to-r from-blue-500 to-purple-500 rounded-lg flex items-center justify-center mr-3">
                  <Star className="icon-xs text-white" />
                </div>
                Our Mission
              </h3>
              <p className="text-slate-700 leading-relaxed">
                To bridge the gap between academic learning and industry readiness, empowering every student to build a successful career through practical skills, real experience, and meaningful connections.
              </p>
            </div>
          </div>
          
          <div className="space-y-8">
            {/* Main image */}
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/20">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students collaborating and learning together"
                className="w-full h-[350px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900/50 via-transparent to-blue-900/10"></div>
              <div className="absolute bottom-8 left-8 text-white">
                {/* <div className="text-2xl font-bold mb-2">Empowering Student Success</div> */}
                {/* <div className="text-sm opacity-90 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">Building careers, not just resumes</div> */}
              </div>
            </div>
            
            {/* What makes us different */}
            <div className="card p-8 hover:shadow-2xl">
              <h3 className="text-xl font-bold text-slate-900 mb-6 flex items-center">
                <div className="icon-sm bg-gradient-to-r from-purple-500 to-pink-500 rounded-lg flex items-center justify-center mr-3">
                  <Zap className="icon-xs text-white" />
                </div>
                What Makes Us Different
              </h3>
              <ul className="space-y-4 text-slate-700">
                <li className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Complete ecosystem, not just courses</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Real projects, not just certificates</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Industry mentorship and networking</span>
                </li>
                <li className="flex items-center space-x-4 group">
                  <div className="w-4 h-4 bg-gradient-to-r from-orange-500 to-red-500 rounded-full shadow-sm group-hover:scale-125 transition-transform duration-300"></div>
                  <span className="font-medium">Public proof of work</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Promise;