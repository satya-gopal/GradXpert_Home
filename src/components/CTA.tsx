import React from 'react';
import { Link } from 'react-router-dom';
import { GraduationCap, Building, Handshake, Users, ArrowRight } from 'lucide-react';

export default function Partnership() {
  const partnerships = [
    {
      icon: GraduationCap,
      title: 'IIIT Students – Become a Mentor',
      description: 'If you\'re a top-performing engineering student who wants to teach, inspire, and earn — join us as an I/O School Mentor.',
      cta: 'Apply as a Mentor',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Building,
      title: 'Colleges – Host a Bootcamp',
      description: 'Bring our training programs to your campus to give your students a competitive edge.',
      cta: 'Invite Us to Your College',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Handshake,
      title: 'EdTech Companies – Partner With Us',
      description: 'Let\'s collaborate on tech education delivery, platform tools, and content distribution.',
      cta: 'Partner With I/O School',
      gradient: 'from-emerald-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'TPOs / Trainers – Affiliate or Collaborate',
      description: 'Work with us to train, co-host events, or bring I/O School access to your network.',
      cta: 'Affiliate With Us',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  return (
    <section className="py-20  bg-gray-900 relative">
      {/* Radial gradient pattern overlay */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.05)_1px,transparent_0)] bg-[length:24px_24px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-left md:text-center mb-16">
          <h2 className="text-4xl font-bold text-white mb-6">
            Partner with <span className="bg-gradient-to-r from-rose-600 to-red-600 bg-clip-text text-transparent">GradXpert</span> to Make a Bigger Impact
          </h2>
        </div>
        
        <div className="grid md:grid-cols-2 gap-8">
          {partnerships.map((partnership, index) => (
            <div key={index} className="group relative bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
              {/* Subtle Gradient Border Effect */}
              <div className={`absolute inset-0 bg-gradient-to-r ${partnership.gradient} rounded-2xl opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              <div className={`relative w-12 h-12 bg-gradient-to-r ${partnership.gradient} rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                <partnership.icon className="h-6 w-6 text-white" />
              </div>
              
              <h3 className="relative text-xl font-semibold text-gray-900 mb-4 group-hover:text-gray-800 transition-colors duration-300">{partnership.title}</h3>
              <p className="relative text-gray-600 mb-6 group-hover:text-gray-700 transition-colors duration-300">{partnership.description}</p>
              
              {partnership.title.includes('Colleges') ? (
                <Link 
                  to="/invite-to-college"
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