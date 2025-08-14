import React from 'react';
import { Link } from 'react-router-dom';
import {GraduationCap, Building, Handshake, Users, ArrowRight, Briefcase, Sparkles} from 'lucide-react';

export default function Partnership() {
  const partnerships = [
    {
      icon: GraduationCap,
      title: 'Become a Mentor',
      description: 'If you\'re a top-performing engineering student who wants to teach, inspire, and earn — join us as an GradXpert Mentor.',
      cta: 'Apply as a Mentor',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      title: 'Colleges – Host a Program',
      description: 'Bring our training programs to your campus to give your students a competitive edge.',
      cta: 'Invite Us to Your Campus',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Handshake,
      title: 'EdTech Companies – Partner With GradXpert',
      description: 'Let\'s collaborate on tech education delivery, platform tools, and content distribution.',
      cta: 'Partner With I/O School',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'TPOs / Students – Affiliate or Collaborate - Collaborate With Us',
      description: 'Work with us to train, co-host events, or bring GradXpert access to your network.',
      cta: 'Affiliate With Us',
      gradient: 'from-orange-500 to-red-500'
    },
    {
      icon: Users,
      title: 'IIIT',
      description: 'Official Partner with RGUKT AP-IIITs',
      cta: 'Join',
      gradient: 'from-orange-500 to-blue-500'
    },
    {
      icon: Users,
      title: 'Campus Voice',
      description: 'The voice of our students are recognized as an important component of shared decision-making.',
      cta: 'Read',
      gradient: 'from-blue-500 to-green-500'
    },
    {
      icon: Users,
      title: 'Collage Club',
      description: 'Join Collage Club for some mindful making at the GradXpert',
      cta: 'Apply',
      gradient: 'from-green-500 to-orange-500'
    }
  ];

  return (
    <section className="section py-20 md:py-24 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
      {/* Radial gradient pattern overlay */}
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

      {/* <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px]"></div> */}
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/*<div className="text-left md:text-center mb-16">*/}
        {/*  <h2 className="text-4xl font-bold text-black mb-6">*/}
        {/*    Partner with <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">GradXpert</span> to Make a Bigger Impact*/}
        {/*  </h2>*/}
        {/*</div>*/}
        <div className="text-left md:text-center mb-16">
          <div className="flex items-center justify-start md:justify-center gap-3">
            <Handshake className="h-8 w-8 text-rose-600 mb-4" />
            <h2 className="text-4xl font-bold text-black mb-6">
              Partner with{" "}
              <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">
                GradXpert
              </span>{" "}
              {/*to Make a Bigger Impact*/}
            </h2>
          </div>
        </div>
        
        <div className="grid md:grid-cols-3 gap-8">
          {partnerships.map((partnership, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              {/* Subtle Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${partnership.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`relative w-12 h-12 bg-gradient-to-r ${partnership.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <partnership.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="relative text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">{partnership.title}</h3>
              <p className="relative text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{partnership.description}</p>
              
              {partnership.title.includes('Campuses') ? (
                <Link 
                  to="/invite-to-campus"
                  className={`relative inline-flex items-center bg-gradient-to-r ${partnership.gradient} bg-clip-text text-transparent font-semibold hover:scale-105 transition-transform duration-300`}
                >
                  {partnership.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : partnership.title.includes('EdTech') ? (
                <Link 
                  to="/partner-with-us"
                  className={`relative inline-flex items-center bg-gradient-to-r ${partnership.gradient} bg-clip-text text-transparent font-semibold hover:scale-105 transition-transform duration-300`}
                >
                  {partnership.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              ) : (
                <Link 
                  to="/collaboration-program"
                  className={`relative inline-flex items-center bg-gradient-to-r ${partnership.gradient} bg-clip-text text-transparent font-semibold hover:scale-105 transition-transform duration-300`}
                >
                  {partnership.cta}
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}