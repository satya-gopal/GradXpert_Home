// import React from 'react';
// import { Users, Target, Award, Heart, Lightbulb, TrendingUp, Globe, Shield, Star, CheckCircle, ArrowRight, Sparkles, Zap, BookOpen, Briefcase } from 'lucide-react';

// const AboutUs = () => {
//   const stats = [
//     { number: "10,000+", label: "Students Transformed", icon: Users },
//     { number: "2,500+", label: "Successful Placements", icon: Award },
//     { number: "150+", label: "Startups Launched", icon: TrendingUp },
//     { number: "₹25 Cr+", label: "Funding Raised", icon: Globe }
//   ];

//   const values = [
//     {
//       icon: Heart,
//       title: "Student-First Approach",
//       description: "Every decision we make is centered around what's best for our students' career growth and success.",
//       color: "from-red-500 to-pink-500"
//     },
//     {
//       icon: Shield,
//       title: "Integrity & Transparency",
//       description: "We believe in honest communication, verified outcomes, and transparent processes in everything we do.",
//       color: "from-blue-500 to-indigo-500"
//     },
//     {
//       icon: Lightbulb,
//       title: "Innovation in Education",
//       description: "We constantly evolve our methods, integrating AI and modern technology to enhance learning experiences.",
//       color: "from-yellow-500 to-orange-500"
//     },
//     {
//       icon: Target,
//       title: "Results-Driven Excellence",
//       description: "We measure our success by the tangible career outcomes and transformations of our students.",
//       color: "from-emerald-500 to-teal-500"
//     }
//   ];

//   const team = [
//     {
//       name: "Rajesh Kumar",
//       role: "Founder & CEO",
//       background: "Ex-Google, IIT Delhi",
//       description: "15+ years in tech leadership, passionate about bridging the gap between education and industry needs.",
//       image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       name: "Priya Sharma",
//       role: "Head of Curriculum",
//       background: "Ex-Microsoft, Stanford MBA",
//       description: "Expert in designing industry-relevant curricula that prepare students for real-world challenges.",
//       image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400"
//     },
//     {
//       name: "Arjun Patel",
//       role: "Head of Placements",
//       background: "Ex-Amazon, IIM Bangalore",
//       description: "Built relationships with 500+ companies to create opportunities for our students.",
//       image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=400"
//     }
//   ];

//   const milestones = [
//     { year: "2020", title: "Foundation", description: "Started with a vision to transform student careers" },
//     { year: "2021", title: "First 1000", description: "Reached our first 1000 successful student transformations" },
//     { year: "2022", title: "Ecosystem Launch", description: "Launched the complete 6-platform ecosystem" },
//     { year: "2023", title: "Industry Recognition", description: "Recognized as India's leading student career platform" },
//     { year: "2024", title: "Global Expansion", description: "Expanding to serve students across South Asia" }
//   ];

//   return (
//     <div className="min-h-screen bg-white">
//       {/* Hero Section */}
//       <section className="relative pt-32 pb-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 overflow-hidden">
//         {/* Background elements */}
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_70%)]"></div>
//         </div>

//         {/* Animated particles */}
//         <div className="absolute inset-0 overflow-hidden">
//           <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
//           <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-indigo-400 rounded-full animate-pulse"></div>
//           <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-purple-400 rounded-full animate-bounce"></div>
//         </div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <div className="flex items-center justify-center space-x-4 mb-8">
//               <div className="relative">
//                 <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-2xl">
//                   <Users className="h-8 w-8 text-white" />
//                 </div>
//                 <div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
//                   <Sparkles className="h-3 w-3 text-white animate-spin" />
//                 </div>
//               </div>
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 tracking-tight">
//                 About{' '}
//                 <span className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                   GradXpert
//                 </span>
//               </h1>
//             </div>

//             <p className="text-xl sm:text-2xl text-slate-700 max-w-4xl mx-auto leading-relaxed mb-8 font-light">
//               We're on a mission to bridge the gap between academic learning and industry readiness, 
//               empowering every student to build a successful career.
//             </p>

//             <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
//               <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
//                 <span>Join Our Mission</span>
//                 <ArrowRight className="h-5 w-5" />
//               </button>
//               <button className="border-2 border-slate-300 text-slate-700 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-slate-50 hover:border-slate-400 transition-all duration-300 hover:scale-105">
//                 Our Impact Report
//               </button>
//             </div>
//           </div>

//           {/* Stats Section */}
//           <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
//             {stats.map((stat, index) => {
//               const Icon = stat.icon;
//               return (
//                 <div key={index} className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 text-center group">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
//                     <Icon className="h-6 w-6 text-white" />
//                   </div>
//                   <div className="text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
//                     {stat.number}
//                   </div>
//                   <div className="text-slate-600 font-medium">{stat.label}</div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Mission & Vision Section */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="absolute inset-0 bg-[radial-gradient(circle_at_1px_1px,rgba(0,0,0,0.02)_1px,transparent_0)] bg-[length:40px_40px]"></div>

//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="grid lg:grid-cols-2 gap-16 items-center">
//             <div className="space-y-8">
//               <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-3xl border border-blue-200 shadow-lg">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-xl flex items-center justify-center">
//                     <Target className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-slate-900">Our Mission</h2>
//                 </div>
//                 <p className="text-slate-700 leading-relaxed text-lg">
//                   To create India's most comprehensive career ecosystem that transforms students from confused learners 
//                   into confident professionals ready to excel in the modern workplace.
//                 </p>
//               </div>

//               <div className="bg-gradient-to-br from-purple-50 to-pink-50 p-8 rounded-3xl border border-purple-200 shadow-lg">
//                 <div className="flex items-center space-x-4 mb-6">
//                   <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center">
//                     <Zap className="h-6 w-6 text-white" />
//                   </div>
//                   <h2 className="text-2xl font-bold text-slate-900">Our Vision</h2>
//                 </div>
//                 <p className="text-slate-700 leading-relaxed text-lg">
//                   To become the global standard for student career development, where every graduate has the skills, 
//                   experience, and network needed to build a fulfilling career.
//                 </p>
//               </div>
//             </div>

//             <div className="relative">
//               <div className="relative rounded-3xl overflow-hidden shadow-2xl">
//                 <img 
//                   src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=800" 
//                   alt="Students collaborating and learning"
//                   className="w-full h-96 object-cover"
//                 />
//                 <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 via-transparent to-blue-900/20"></div>
//                 <div className="absolute bottom-8 left-8 text-white">
//                   <div className="text-2xl font-bold mb-2">Empowering Future Leaders</div>
//                   <div className="text-sm opacity-90 bg-white/20 backdrop-blur-sm px-3 py-1.5 rounded-full">
//                     Building careers, not just resumes
//                   </div>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Values Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
//               Our Core{' '}
//               <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Values
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               The principles that guide everything we do and every decision we make
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 gap-8">
//             {values.map((value, index) => {
//               const Icon = value.icon;
//               return (
//                 <div key={index} className="group relative">
//                   <div className="bg-white p-8 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 relative overflow-hidden">
//                     <div className={`absolute inset-0 bg-gradient-to-r ${value.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

//                     <div className="relative z-10">
//                       <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                         <Icon className="h-8 w-8 text-white" />
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-4">{value.title}</h3>
//                       <p className="text-slate-600 leading-relaxed">{value.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* Team Section */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
//               Meet Our{' '}
//               <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
//                 Leadership Team
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               Experienced professionals dedicated to transforming student careers
//             </p>
//           </div>

//           <div className="grid md:grid-cols-3 gap-8">
//             {team.map((member, index) => (
//               <div key={index} className="group">
//                 <div className="bg-white p-6 rounded-3xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 text-center">
//                   <div className="relative mb-6">
//                     <div className="w-24 h-24 mx-auto rounded-2xl overflow-hidden shadow-lg group-hover:scale-105 transition-transform duration-300">
//                       <img 
//                         src={member.image} 
//                         alt={member.name}
//                         className="w-full h-full object-cover"
//                       />
//                     </div>
//                     <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-full flex items-center justify-center">
//                       <CheckCircle className="h-4 w-4 text-white" />
//                     </div>
//                   </div>

//                   <h3 className="text-xl font-bold text-slate-900 mb-2">{member.name}</h3>
//                   <div className="text-blue-600 font-semibold mb-2">{member.role}</div>
//                   <div className="text-sm text-emerald-600 font-medium mb-4 bg-emerald-50 px-3 py-1 rounded-full inline-block">
//                     {member.background}
//                   </div>
//                   <p className="text-slate-600 text-sm leading-relaxed">{member.description}</p>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </div>
//       </section>

//       {/* Journey Timeline */}
//       <section className="py-20 bg-gradient-to-br from-indigo-50 to-purple-50 relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
//               Our{' '}
//               <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
//                 Journey
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               From a simple idea to India's leading student career ecosystem
//             </p>
//           </div>

//           <div className="relative">
//             {/* Timeline line */}
//             <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-indigo-500 to-purple-500 rounded-full"></div>

//             <div className="space-y-12">
//               {milestones.map((milestone, index) => (
//                 <div key={index} className={`flex items-center ${index % 2 === 0 ? 'flex-row' : 'flex-row-reverse'}`}>
//                   <div className={`w-1/2 ${index % 2 === 0 ? 'pr-8 text-right' : 'pl-8 text-left'}`}>
//                     <div className="bg-white p-6 rounded-2xl shadow-lg border border-slate-200 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
//                       <div className="text-2xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
//                         {milestone.year}
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-3">{milestone.title}</h3>
//                       <p className="text-slate-600">{milestone.description}</p>
//                     </div>
//                   </div>

//                   {/* Timeline dot */}
//                   <div className="relative z-10">
//                     <div className="w-6 h-6 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-full border-4 border-white shadow-lg"></div>
//                   </div>

//                   <div className="w-1/2"></div>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       </section>

//       {/* Why Choose Us */}
//       <section className="py-20 bg-white relative overflow-hidden">
//         <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//           <div className="text-center mb-16">
//             <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">
//               Why Students{' '}
//               <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
//                 Choose Us
//               </span>
//             </h2>
//             <p className="text-xl text-slate-600 max-w-3xl mx-auto">
//               What makes GradXpert different from other career platforms
//             </p>
//           </div>

//           <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
//             {[
//               {
//                 icon: BookOpen,
//                 title: "Complete Ecosystem",
//                 description: "Not just courses - a full career transformation journey with 6 integrated platforms",
//                 color: "from-blue-500 to-indigo-500"
//               },
//               {
//                 icon: Briefcase,
//                 title: "Real Industry Experience",
//                 description: "Actual internships and projects, not just theoretical knowledge or certificates",
//                 color: "from-emerald-500 to-teal-500"
//               },
//               {
//                 icon: Users,
//                 title: "Verified Outcomes",
//                 description: "Transparent success metrics with real student stories and placement data",
//                 color: "from-purple-500 to-pink-500"
//               },
//               {
//                 icon: Target,
//                 title: "Personalized Guidance",
//                 description: "AI-powered tools and human mentors provide customized career roadmaps",
//                 color: "from-orange-500 to-red-500"
//               },
//               {
//                 icon: Globe,
//                 title: "Industry Network",
//                 description: "Direct connections with 500+ companies and startup founders for opportunities",
//                 color: "from-cyan-500 to-blue-500"
//               },
//               {
//                 icon: Award,
//                 title: "Lifetime Support",
//                 description: "Ongoing career support even after graduation - we're invested in your long-term success",
//                 color: "from-yellow-500 to-orange-500"
//               }
//             ].map((feature, index) => {
//               const Icon = feature.icon;
//               return (
//                 <div key={index} className="group">
//                   <div className="bg-white p-6 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 text-center relative overflow-hidden">
//                     <div className={`absolute inset-0 bg-gradient-to-r ${feature.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>

//                     <div className="relative z-10">
//                       <div className={`w-16 h-16 bg-gradient-to-r ${feature.color} rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
//                         <Icon className="h-8 w-8 text-white" />
//                       </div>
//                       <h3 className="text-xl font-bold text-slate-900 mb-4">{feature.title}</h3>
//                       <p className="text-slate-600 leading-relaxed">{feature.description}</p>
//                     </div>
//                   </div>
//                 </div>
//               );
//             })}
//           </div>
//         </div>
//       </section>

//       {/* CTA Section */}
//       <section className="py-20 bg-gradient-to-br from-slate-900 via-blue-900 to-indigo-900 relative overflow-hidden">
//         <div className="absolute inset-0">
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.2),transparent_70%)]"></div>
//           <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.2),transparent_70%)]"></div>
//         </div>

//         <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
//           <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
//             Ready to Transform Your Career?
//           </h2>
//           <p className="text-xl text-blue-200 mb-8 max-w-2xl mx-auto">
//             Join thousands of students who have already started their journey with GradXpert
//           </p>

//           <div className="flex flex-col sm:flex-row gap-4 justify-center">
//             <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-3">
//               <span>Start Your Journey</span>
//               <ArrowRight className="h-5 w-5" />
//             </button>
//             <button className="border-2 border-blue-400 text-blue-200 px-8 py-4 rounded-2xl font-bold text-lg hover:bg-blue-400/10 hover:border-blue-300 transition-all duration-300 hover:scale-105">
//               Schedule a Call
//             </button>
//           </div>
//         </div>
//       </section>
//     </div>
//   );
// };

// export default AboutUs;

import React, { useState, useEffect } from 'react';
import {
  GraduationCap,
  Target,
  Users,
  Lightbulb,
  Award,
  Rocket,
  Star,
  MapPin,
  Calendar,
  CheckCircle,
  ExternalLink,
  Mail,
  Linkedin,
  Heart,
  Zap,
  Globe,
  Building,
  TrendingUp,
  Code,
  BookOpen,
  Briefcase,
  FolderOpen,
  Settings,
  ChevronLeft,
  ChevronRight,
  Quote, Handshake
} from 'lucide-react';
import Promise from './Promise';

const ecosystemItems = [
  { icon: Settings, name: "StudentOS", function: "Tools & productivity layer", color: "from-slate-600 to-slate-700" },
  { icon: BookOpen, name: "I/O School", function: "Learning & mentorship layer", color: "from-purple-600 to-indigo-600" },
  { icon: Briefcase, name: "Kickstack", function: "Internships & job simulation", color: "from-emerald-500 to-green-600" },
  { icon: FolderOpen, name: "Powerfolio", function: "Proof of skills & public portfolio", color: "from-orange-500 to-red-500" },
  { icon: Star, name: "Talent Pool", function: "Premium career recognition", color: "from-yellow-500 to-orange-500" },
  { icon: Rocket, name: "Bold Startup", function: "Startup incubation & support", color: "from-red-500 to-pink-500" }

];

const teamMembers = [
  {
    name: "Ramesh Chokkara",
    role: "Founder & Chief Vision Officer",
    description: "IIITian, Career Strategist, EdTech Builder",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=300",
    expertise: ["EdTech Strategy", "Career Development", "Product Vision"],
    experience: "8+ years",
    linkedin: "#",
    email: "ramesh@gradxpert.com"
  },
  {
    name: "Priya Sharma",
    role: "Head of Curriculum & Learning",
    description: "Ex-Byju's, NEP-aligned academic designer",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
    expertise: ["Curriculum Design", "Learning Sciences", "NEP 2020"],
    experience: "6+ years",
    linkedin: "#",
    email: "priya@gradxpert.com"
  },
  {
    name: "Arjun Patel",
    role: "Head of Internships & Partnerships",
    description: "Startup ecosystems, placement networks, campus relations",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
    expertise: ["Corporate Relations", "Startup Ecosystem", "Partnerships"],
    experience: "7+ years",
    linkedin: "#",
    email: "arjun@gradxpert.com"
  },
  {
    name: "Sneha Reddy",
    role: "Lead Product Designer",
    description: "UX for student growth journeys",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
    expertise: ["UX Design", "Product Strategy", "User Research"],
    experience: "5+ years",
    linkedin: "#",
    email: "sneha@gradxpert.com"
  }
];

const professionals = [
  {
    name: "Rajesh Kumar",
    role: "Senior Engineering Manager",
    company: "Google",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "GradXpert's approach to practical learning aligns perfectly with what we look for in candidates. Their students come with real project experience.",
    expertise: "Software Engineering"
  },
  {
    name: "Anita Singh",
    role: "VP of Engineering",
    company: "Razorpay",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The portfolio quality and practical skills of GradXpert students consistently impress our hiring teams. They're job-ready from day one.",
    expertise: "Product Development"
  },
  {
    name: "Vikram Mehta",
    role: "Startup Founder & Investor",
    company: "TechVentures",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "I've mentored several GradXpert students who've gone on to build successful startups. The entrepreneurial mindset they develop is remarkable.",
    expertise: "Entrepreneurship"
  },
  {
    name: "Dr. Kavitha Rao",
    role: "Director of Talent Acquisition",
    company: "TCS",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "GradXpert bridges the gap between academic learning and industry requirements. Their students demonstrate exceptional problem-solving skills.",
    expertise: "Talent Development"
  },
  {
    name: "Amit Sharma",
    role: "Chief Technology Officer",
    company: "Zoho",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=300",
    quote: "The technical depth and practical experience that GradXpert students bring is exactly what the industry needs. Highly recommended.",
    expertise: "Technology Leadership"
  }
];

const milestones = [
  {
    year: "2023",
    quarter: "Q1",
    event: "Started with a mission to simplify career paths",
    icon: Lightbulb,
    description: "Founded with the vision to bridge the gap between education and employability",
    metrics: "Initial team of 5"
  },
  {
    year: "2023",
    quarter: "Q3",
    event: "Piloted with 100 students from Tier 2/3 campuses",
    icon: Users,
    description: "Launched beta program with select campuses to validate our approach",
    metrics: "100 pilot students"
  },
  {
    year: "2024",
    quarter: "Q1",
    event: "Launched Kickstack Internships & I/O School",
    icon: Rocket,
    description: "Officially launched our core programs with industry partnerships",
    metrics: "500+ students enrolled"
  },
  {
    year: "2024",
    quarter: "Q2",
    event: "Crossed 10,000+ projects created on Powerfolio",
    icon: TrendingUp,
    description: "Students began showcasing real work, attracting recruiter attention",
    metrics: "10,000+ projects"
  },
  {
    year: "2024",
    quarter: "Q3",
    event: "Talent Pool students placed in top companies",
    icon: Award,
    description: "First batch of elite students secured positions at leading firms",
    metrics: "85% placement rate"
  },
  {
    year: "2025",
    quarter: "Q1",
    event: "Scaling across India via campus partnerships",
    icon: Globe,
    description: "Expanding reach through strategic campus collaborations nationwide",
    metrics: "50+ campus partners"
  }
];

const beliefs = [
  "Skills matter more than marks",
  "Proof is more powerful than certificates",
  "Every student deserves clarity, support, and opportunity",
  "Learning should lead to doing — and doing should lead to growth"
];

const brands = [
  { name: "Google", logo: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg" },
  { name: "Microsoft", logo: "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg" },
  { name: "Amazon", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg" },
  { name: "TCS", logo: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Tata_Consultancy_Services_Logo.svg" },
  { name: "Infosys", logo: "https://upload.wikimedia.org/wikipedia/commons/9/95/Infosys_logo.svg" },
  { name: "Wipro", logo: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Wipro_Primary_Logo_Color_RGB.svg" },
  { name: "Flipkart", logo: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flipkart_logo.svg" },
  { name: "Zomato", logo: "https://upload.wikimedia.org/wikipedia/commons/7/75/Zomato_logo.png" },
  { name: "Paytm", logo: "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg" },
  { name: "Razorpay", logo: "https://upload.wikimedia.org/wikipedia/commons/8/89/Razorpay_logo.svg" },
  { name: "Swiggy", logo: "https://upload.wikimedia.org/wikipedia/en/1/12/Swiggy_logo.svg" },
  { name: "Ola", logo: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Ola_Cabs_logo.png" }
];

const cultureValues = [
  { title: "Purpose over politics", description: "We focus on what matters most - student success" },
  { title: "Outcome over hours", description: "Results and impact drive our work, not time spent" },
  { title: "Feedback over formality", description: "Open communication and continuous improvement" },
  { title: "Students first, always", description: "Every decision is made with student benefit in mind" }
];

const AboutUs = () => {
  const [currentProfessional, setCurrentProfessional] = useState(0);

  // Auto-slide professionals
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentProfessional((prev) => (prev + 1) % professionals.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextProfessional = () => {
    setCurrentProfessional((prev) => (prev + 1) % Math.ceil(professionals.length));
  };

  const prevProfessional = () => {
    setCurrentProfessional((prev) => (prev - 1 + Math.ceil(professionals.length)) % Math.ceil(professionals.length));
  };

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="pt-32 pb-20 bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              <GraduationCap className="h-12 w-12 text-blue-600 hidden md:block" />
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Powering the {' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  Careers
                </span>
                <br />
                of India's Next Generation
              </h1>
            </div>

            <p className="text-lg text-slate-700 mb-8 max-w-4xl mx-auto leading-relaxed">
              GradXpert is redefining how students move from classrooms to careers. Our ecosystem connects learning, real-world experience, and opportunities — all in one place.
            </p>

            <div className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-xl max-w-4xl mx-auto">
              {/* <p className="text-lg text-slate-800 mb-4 font-medium">
                We don't just provide courses.
              </p> */}
              <p className="text-base text-slate-700 leading-relaxed">
                <b>Think Deep, Learn Fast, Use AI, Build Things</b>
                <span> — that’s the modern survival skillset.</span>


              </p>
            </div>
          </div>
        </div>
      </section>
      {/* Ecosystem Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-16">
            <div className="flex md:items-center md:justify-center space-x-3 mb-6">
              <Zap className="h-8 w-8 text-purple-600 hidden md:block" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                One Platform. Every Layer of Career Building.
              </h2>
            </div>
            <p className="text-lg text-slate-700 max-w-3xl mx-auto">
              The GradXpert ecosystem is designed to guide students through every stage of their journey
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {ecosystemItems.map((item, index) => {
              const Icon = item.icon;
              return (
                <div key={index} className="bg-gradient-to-br from-white to-slate-50 p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all duration-300 hover:shadow-lg group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${item.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="text-lg font-bold text-slate-900 mb-2">{item.name}</h3>
                  <p className="text-slate-600 text-sm">{item.function}</p>
                </div>
              );
            })}
          </div>

          <div className="text-center mt-12">
            <p className="text-lg text-slate-700 font-medium">
              Whether a student is just starting out or preparing for their first job — GradXpert meets them where they are, and takes them forward.
            </p>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      {/* <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Star className="h-8 w-8 text-yellow-500" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Core Philosophy</h2>
            </div>
            <div className="text-2xl font-bold text-blue-600 mb-8">
              "Find the Expert in You."
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-8 items-center">
            <div>
              <h3 className="text-2xl font-bold text-slate-900 mb-6">We believe:</h3>
              <div className="space-y-4">
                {beliefs.map((belief, index) => (
                  <div key={index} className="flex items-start space-x-3 p-4 rounded-xl bg-white/80 backdrop-blur-sm border border-slate-200 hover:border-blue-300 transition-all duration-300">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-700 font-medium">{belief}</span>
                  </div>
                ))}
              </div>
              
              <div className="mt-8 p-6 bg-gradient-to-r from-blue-100 to-purple-100 rounded-2xl border border-blue-200">
                <p className="text-slate-800 font-medium">
                  Our work is grounded in the principles of <span className="font-bold text-blue-700">access</span>, <span className="font-bold text-purple-700">outcomes</span>, and <span className="font-bold text-pink-700">innovation</span>.
                </p>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600" 
                alt="Students learning and growing"
                className="w-full h-96 object-cover rounded-3xl shadow-2xl"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-blue-900/30 to-transparent rounded-3xl"></div>
            </div>
          </div>
        </div>
      </section> */}
      <Promise />




      {/* Partners Section */}
      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center md:justify-center space-x-3">
              <Handshake className="h-8 w-8 text-green-600" />
              <span>Our Partners</span>
            </h2>
            <p className="text-lg text-slate-700">Trusted by leading organizations and platforms</p>
          </div>

          <div className="relative z-10 pb-12">
            <div className="overflow-hidden group">
              <div className="flex space-x-12 items-center motion-safe:animate-[scroll-left_8s_linear_infinite] md:motion-safe:animate-[scroll-left_15s_linear_infinite] lg:motion-safe:animate-[scroll-left_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[
                  "https://gradxpert.com/brand-logos/startup-india-logo.jpg",
                  "https://gradxpert.com/brand-logos/iso-9001-logo.jpg",
                  "https://gradxpert.com/brand-logos/msme-logo.jpg",
                  "https://gradxpert.com/brand-logos/startup-andhra-pradesh-logo.jpg",
                  "https://gradxpert.com/brand-logos/google-for-education-partner-logo.jpg",
                  // "https://gradxpert.com/brand-logos/aicte-logo.jpg",
                  // "https://gradxpert.com/brand-logos/apsche-logo.jpg",
                  "https://gradxpert.com/brand-logos/apssdc-logo.jpg",
                  // "https://gradxpert.com/brand-logos/gem-logo.jpg",
                  // "https://gradxpert.com/brand-logos/nip-logo.jpg",
                  "https://gradxpert.com/brand-logos/nvidia-inception-program-logo.jpg",
                  // "https://gradxpert.com/brand-logos/skill-india-logo.jpg",
                  // duplicated again to make the scroll loop smoothly
                  "https://gradxpert.com/brand-logos/startup-india-logo.jpg",
                  "https://gradxpert.com/brand-logos/iso-9001-logo.jpg",
                  "https://gradxpert.com/brand-logos/msme-logo.jpg",
                  "https://gradxpert.com/brand-logos/startup-andhra-pradesh-logo.jpg",
                  "https://gradxpert.com/brand-logos/google-for-education-partner-logo.jpg",
                  // "https://gradxpert.com/brand-logos/aicte-logo.jpg",
                  // "https://gradxpert.com/brand-logos/apsche-logo.jpg",
                  "https://gradxpert.com/brand-logos/apssdc-logo.jpg",
                  // "https://gradxpert.com/brand-logos/gem-logo.jpg",
                  // "https://gradxpert.com/brand-logos/nip-logo.jpg",
                  "https://gradxpert.com/brand-logos/nvidia-inception-program-logo.jpg",
                  // "https://gradxpert.com/brand-logos/skill-india-logo.jpg"
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <img
                      src={logo}
                      alt={`Partner logo ${index + 1}`}
                      className="w-full h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Goal Section */}
      <section className="py-20 bg-gradient-to-br from-emerald-50 to-teal-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center">
            <div className="flex items-center md:justify-center space-x-3 mb-6">
              <Target className="h-6 w-6 md:h-8 md:w-8 text-emerald-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Goal</h2>
            </div>

            <div className="bg-white/90 backdrop-blur-xl p-8 md:p-12 rounded-3xl border border-emerald-200 shadow-2xl max-w-4xl md:mx-auto">
              <div className="text-4xl sm:text-5xl font-black bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-6">
                10 Lakh Students
              </div>
              <p className="text-xl text-slate-800 mb-6 font-medium">
                To enable 10 lakh Indian students to become career-ready by 2030.
              </p>
              <p className="text-base text-slate-700 leading-relaxed">
                We're building India's most trusted student-first career ecosystem — aligned with NEP 2020, powered by real outcomes, and accessible to students across Tier 1, 2, and 3 cities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Enhanced Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-16">
            <div className="flex md:items-center md:justify-center space-x-3 mb-6">
              <Users className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Meet Our Core Team</h2>
            </div>
            <p className="text-xl text-slate-700">
              We're a team of engineers, mentors, and career builders.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group relative bg-white/60 backdrop-blur-xl border border-white/20 rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-1"
              >
                {/* Gradient glow background */}
                <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-blue-100/40 via-purple-100/30 to-pink-100/40 opacity-0 group-hover:opacity-100 blur-2xl transition-opacity duration-500"></div>

                <div className="relative z-10">
                  {/* Top Section */}
                  <div className="flex items-start space-x-6 mb-6">
                    {/* Profile Image */}
                    <div className="relative">
                      <div className="w-20 h-20 rounded-full overflow-hidden ring-4 ring-white shadow-lg group-hover:ring-blue-300 transition-all duration-300">
                        <img
                          src={member.image}
                          alt={member.name}
                          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                        />
                      </div>
                      {/* Verified Badge */}
                      <div className="absolute -bottom-2 right-0 w-7 h-7 bg-gradient-to-r from-blue-500 to-purple-500 rounded-full flex items-center justify-center shadow-md">
                        <CheckCircle className="h-4 w-4 text-white" />
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex-1">
                      <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-600 transition-colors">
                        {member.name}
                      </h3>
                      <span className="inline-block px-3 py-1 text-xs font-semibold rounded-full bg-gradient-to-r from-blue-500 to-purple-500 text-white shadow-sm mb-2">
                        {member.role}
                      </span>
                      <p className="text-slate-600 text-sm">{member.description}</p>
                    </div>
                  </div>

                  {/* Expertise */}
                  <div className="mb-6">
                    <h4 className="text-sm font-semibold text-slate-700 mb-3">Expertise</h4>
                    <div className="flex flex-wrap gap-2">
                      {member.expertise.map((skill, skillIndex) => (
                        <span
                          key={skillIndex}
                          className="px-3 py-1 text-xs font-medium bg-white/60 backdrop-blur-md border border-blue-200 rounded-full text-blue-700 shadow-sm hover:bg-gradient-to-r hover:from-blue-100 hover:to-purple-100 transition-all duration-300"
                        >
                          {skill}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Contact & Tag */}
                  <div className="flex items-center justify-between pt-4 border-t border-slate-200">
                    {/* Social Links */}
                    <div className="flex space-x-3">
                      <a
                        href={member.linkedin}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-9 h-9 bg-white/70 hover:bg-blue-100 rounded-lg flex items-center justify-center transition-colors duration-300 shadow-sm"
                      >
                        <Linkedin className="h-4 w-4 text-blue-600" />
                      </a>
                      <a
                        href={`mailto:${member.email}`}
                        className="w-9 h-9 bg-white/70 hover:bg-slate-100 rounded-lg flex items-center justify-center transition-colors duration-300 shadow-sm"
                      >
                        <Mail className="h-4 w-4 text-slate-600" />
                      </a>
                    </div>
                    {/* Index */}
                    <div className="text-xs text-slate-500 font-medium">
                      Team Member #{index + 1}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* Enhanced Professionals Section with Slider */}
      <section className="py-20 bg-gradient-to-br from-purple-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-left md:text-center mb-16">
            <div className="flex items-start md:items-center md:justify-center space-x-3 mb-6">
              <Award className="h-14 w-14 lg:h-8 lg:w-8 text-purple-600 mt-1 md:mt-0" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Supported by Industry Professionals
              </h2>
            </div>
            <p className="text-xl text-slate-700 mb-8 md:max-w-2xl md:mx-auto">
              Hear from the professionals who guide and mentor our students
            </p>
          </div>

          {/* Professional Slider - Mobile Optimized */}
          <div className="relative mb-12">
            {/* Mobile View - Single Card */}
            <div className="md:hidden">
              <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-200 shadow-lg">
                <div className="flex items-start space-x-4 mb-4">
                  <div className="relative flex-shrink-0">
                    <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                      <img
                        src={professionals[currentProfessional].image}
                        alt={professionals[currentProfessional].name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                      <CheckCircle className="h-3 w-3 text-white" />
                    </div>
                  </div>

                  <div className="flex-1 min-w-0">
                    <h4 className="text-lg font-bold text-slate-900 mb-1">
                      {professionals[currentProfessional].name}
                    </h4>
                    <p className="text-purple-600 font-semibold text-sm mb-1">
                      {professionals[currentProfessional].role}
                    </p>
                    <p className="text-slate-600 text-sm">
                      {professionals[currentProfessional].company}
                    </p>
                  </div>
                </div>

                {/* Quote */}
                <div className="mb-4">
                  <Quote className="h-5 w-5 text-purple-400 mb-3" />
                  <blockquote className="text-slate-700 text-sm leading-relaxed">
                    "{professionals[currentProfessional].quote}"
                  </blockquote>
                </div>

                {/* Expertise Badge */}
                <div className="flex justify-between items-center">
                  <div className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full">
                    <span className="text-purple-700 font-medium text-xs">
                      {professionals[currentProfessional].expertise}
                    </span>
                  </div>
                  <div className="text-xs text-slate-500">
                    Industry Expert
                  </div>
                </div>
              </div>

              {/* Mobile Navigation */}
              <div className="flex justify-between items-center mt-4">
                <button
                  onClick={prevProfessional}
                  className="bg-white/90 backdrop-blur-xl p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-200"
                >
                  <ChevronLeft className="h-5 w-5 text-purple-600" />
                </button>

                <div className="flex space-x-2">
                  {professionals.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProfessional(index)}
                      className={`w-2 h-2 rounded-full transition-all duration-300 ${index === currentProfessional
                        ? 'bg-purple-600 scale-125'
                        : 'bg-purple-300'
                        }`}
                    />
                  ))}
                </div>

                <button
                  onClick={nextProfessional}
                  className="bg-white/90 backdrop-blur-xl p-2 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-200"
                >
                  <ChevronRight className="h-5 w-5 text-purple-600" />
                </button>
              </div>
            </div>

            {/* Desktop View - Two Cards */}
            <div className="hidden md:block">
              <div className="overflow-hidden rounded-2xl">
                <div
                  className="flex transition-transform duration-500 ease-in-out"
                  style={{ transform: `translateX(-${Math.floor(currentProfessional / 2) * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(professionals.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 flex space-x-6 px-3">
                      {professionals.slice(slideIndex * 2, slideIndex * 2 + 2).map((professional, index) => (
                        <div key={slideIndex * 2 + index} className="w-1/2">
                          <div className="bg-white/90 backdrop-blur-xl rounded-2xl p-6 border border-purple-200 shadow-lg hover:shadow-xl transition-all duration-300 h-full">
                            <div className="flex items-start space-x-4 mb-4">
                              <div className="relative flex-shrink-0">
                                <div className="w-16 h-16 rounded-xl overflow-hidden shadow-lg">
                                  <img
                                    src={professional.image}
                                    alt={professional.name}
                                    className="w-full h-full object-cover"
                                  />
                                </div>
                                <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full flex items-center justify-center shadow-lg">
                                  <CheckCircle className="h-3 w-3 text-white" />
                                </div>
                              </div>

                              <div className="flex-1 min-w-0">
                                <h4 className="text-lg font-bold text-slate-900 mb-1 truncate">
                                  {professional.name}
                                </h4>
                                <p className="text-purple-600 font-semibold text-sm mb-1 truncate">
                                  {professional.role}
                                </p>
                                <p className="text-slate-600 text-sm truncate">
                                  {professional.company}
                                </p>
                              </div>
                            </div>

                            <div className="mb-4">
                              <Quote className="h-5 w-5 text-purple-400 mb-3" />
                              <blockquote className="text-slate-700 italic text-sm leading-relaxed line-clamp-4">
                                "{professional.quote}"
                              </blockquote>
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="bg-gradient-to-r from-purple-100 to-indigo-100 px-3 py-1 rounded-full">
                                <span className="text-purple-700 font-medium text-xs">
                                  {professional.expertise}
                                </span>
                              </div>
                              <div className="text-xs text-slate-500">
                                Industry Expert
                              </div>
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  ))}
                </div>
              </div>

              {/* Desktop Navigation */}
              <button
                onClick={() => setCurrentProfessional(Math.max(0, currentProfessional - 2))}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-xl p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-200 z-10"
              >
                <ChevronLeft className="h-5 w-5 text-purple-600" />
              </button>
              <button
                onClick={() => setCurrentProfessional(Math.min(professionals.length - 2, currentProfessional + 2))}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-xl p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 border border-purple-200 z-10"
              >
                <ChevronRight className="h-5 w-5 text-purple-600" />
              </button>

              {/* Desktop Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({ length: Math.ceil(professionals.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentProfessional(index * 2)}
                    className={`w-2 h-2 rounded-full transition-all duration-300 ${Math.floor(currentProfessional / 2) === index
                      ? 'bg-purple-600 scale-125'
                      : 'bg-purple-300 hover:bg-purple-400'
                      }`}
                  />
                ))}
              </div>
            </div>
          </div>

          {/* Professional Stats */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-purple-200 text-center">
              <Building className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Top Companies</h3>
              <p className="text-xs md:text-sm text-slate-600">Google, Microsoft, Amazon, TCS</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-purple-200 text-center">
              <Rocket className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Startup Founders</h3>
              <p className="text-xs md:text-sm text-slate-600">Product leads & entrepreneurs</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-purple-200 text-center">
              <Users className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">HR Leaders</h3>
              <p className="text-xs md:text-sm text-slate-600">Hiring managers & talent experts</p>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-4 md:p-6 rounded-2xl border border-purple-200 text-center">
              <GraduationCap className="h-6 w-6 md:h-8 md:w-8 text-purple-600 mx-auto mb-2 md:mb-3" />
              <h3 className="font-bold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">Academic Advisors</h3>
              <p className="text-xs md:text-sm text-slate-600">From top institutions</p>
            </div>
          </div>
        </div>
      </section>


      {/* Enhanced Journey Section with Unique UI */}
      <section className="py-20 bg-white relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-[#FFF8E7] to-[#E6F4EA]"></div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="md:text-center mb-16">
            <div className="flex md:items-center md:justify-center space-x-3 mb-6">
              <Calendar className="h-8 w-8 text-emerald-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">Our Journey So Far</h2>
            </div>
            <p className="text-xl text-slate-700">
              From an idea in a dorm room to a growing student movement.
            </p>
          </div>

          {/* Unique Timeline Design */}
          <div className="relative">
            {/* Central Timeline Path */}
            <div className="absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-[#FF9933] via-white to-[#138808] rounded-full hidden lg:block"></div>

            {/* Milestone Cards */}
            <div className="space-y-16">
              {milestones.map((milestone, index) => {
                const Icon = milestone.icon;
                const isEven = index % 2 === 0;

                return (
                  <div key={index} className={`flex items-center ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} flex-col`}>
                    {/* Content Card */}
                    <div className={`flex-1 ${isEven ? 'lg:pr-16' : 'lg:pl-16'} mb-8 lg:mb-0`}>
                      <div className="bg-white/90 backdrop-blur-xl p-8 rounded-3xl border border-slate-200 shadow-xl hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 group">
                        {/* Header */}
                        <div className="flex items-center justify-between mb-6">
                          <div className="flex items-center space-x-3">
                            <div className="bg-gradient-to-r from-[#FF9933] to-[#138808] text-white px-4 py-2 rounded-full text-sm font-bold">
                              {milestone.year} {milestone.quarter}
                            </div>
                            <div className="bg-slate-100 text-slate-600 px-3 py-1 rounded-full text-xs font-medium">
                              {milestone.metrics}
                            </div>
                          </div>
                          <div className="w-12 h-12 bg-gradient-to-r from-[#FF9933] to-[#138808] rounded-2xl flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform duration-300">
                            <Icon className="h-6 w-6 text-white" />
                          </div>
                        </div>

                        {/* Content */}
                        <h3 className="text-xl font-bold text-slate-900 mb-4 group-hover:text-emerald-600 transition-colors duration-300">
                          {milestone.event}
                        </h3>
                        <p className="text-slate-600 leading-relaxed mb-4">
                          {milestone.description}
                        </p>

                        {/* Progress Bar */}
                        <div className="w-full bg-slate-200 rounded-full h-2 mb-4">
                          <div
                            className="bg-gradient-to-r from-[#FF9933] via-white to-[#138808] h-2 rounded-full transition-all duration-1000 group-hover:w-full"
                            style={{ width: `${((index + 1) / milestones.length) * 100}%` }}
                          ></div>
                        </div>

                        {/* Timeline Position */}
                        <div className="text-xs text-slate-500 font-medium">
                          Milestone {index + 1} of {milestones.length}
                        </div>
                      </div>
                    </div>

                    {/* Central Timeline Node */}
                    <div className="relative z-20 lg:mx-0 mx-auto mb-8 lg:mb-0">
                      <div className="w-20 h-20 bg-gradient-to-r from-[#FF9933] to-[#138808] rounded-full flex items-center justify-center shadow-2xl border-4 border-white relative">
                        <Icon className="h-10 w-10 text-white" />

                        {/* Pulse Animation */}
                        <div className="absolute inset-0 rounded-full bg-gradient-to-r from-[#FF9933] to-[#138808] animate-ping opacity-20"></div>

                        {/* Year Badge */}
                        <div className="absolute -top-8 left-1/2 transform -translate-x-1/2 bg-white px-3 py-1 rounded-full shadow-lg border border-slate-200">
                          <span className="text-xs font-bold text-slate-700">{milestone.year}</span>
                        </div>
                      </div>
                    </div>

                    {/* Spacer for opposite side */}
                    <div className="flex-1 hidden lg:block"></div>
                  </div>
                );
              })}
            </div>


          </div>
           {/* Future Vision */}
           <div className="text-center mt-16">
              <div className="bg-gradient-to-r from-orange-100 to-green-100 p-8 rounded-3xl border border-emerald-200 max-w-2xl mx-auto">
                <Globe className="h-12 w-12 text-[#FF9933] mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-slate-900 mb-4">What's Next?</h3>
                <p className="text-slate-700 leading-relaxed">
                  Expanding to reach 10 million students across India, building partnerships with 500+ colleges, and creating the world's largest student career ecosystem.
                </p>
              </div>
            </div>
         </div>
      </section>

      {/* Culture Section */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-16">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Heart className="h-12 w-12 lg:h-8 lg:w-8 text-red-500 " />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Work That Matters. A Team That Cares.
              </h2>
            </div>
            <p className="text-xl text-slate-700 mb-8">
              We're a mission-driven, remote-first team with HQ in Bangalore, India.
            </p>
            <p className="text-lg text-slate-600">Our culture is built on:</p>
          </div>

          <div className="grid md:grid-cols-2 gap-8 mb-12">
            {cultureValues.map((value, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:shadow-lg">
                <h3 className="text-lg font-bold text-slate-900 mb-3">{value.title}</h3>
                <p className="text-slate-700">{value.description}</p>
              </div>
            ))}
          </div>

          {/* Office gallery */}
          {/* <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {[
              "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
              "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300"
            ].map((image, index) => (
              <div key={index} className="relative group">
                <img
                  src={image}
                  alt={`Team culture ${index + 1}`}
                  className="w-full h-32 object-cover rounded-xl group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent rounded-xl"></div>
              </div>
            ))}
          </div> */}
        </div>
      </section>

      {/* Brands and Partners Section */}
      {/* <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_70%)]"></div>
        </div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-12">
            <div className="flex items-center justify-center space-x-3 mb-6">
              <Building className="h-8 w-8 text-blue-600" />
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900">
                Trusted by Leading{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Brands & Partners
                </span>
              </h2>
            </div>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">
              Our students get placed at top companies and our programs are recognized by industry leaders
            </p>
          </div>
          
          <div className="mb-8 overflow-hidden">
            <div className="flex animate-scroll-left space-x-12 items-center hover:pause-animation">
              {[...brands, ...brands].map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-32 max-h-12 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>

          <div className="overflow-hidden">
            <div className="flex animate-scroll-right space-x-12 items-center hover:pause-animation">
              {[...brands.slice().reverse(), ...brands.slice().reverse()].map((brand, index) => (
                <div key={index} className="flex-shrink-0 w-40 h-20 flex items-center justify-center bg-white/80 backdrop-blur-sm rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 hover:scale-105 shadow-lg hover:shadow-xl group">
                  <img 
                    src={brand.logo} 
                    alt={brand.name} 
                    className="max-w-32 max-h-12 object-contain filter grayscale opacity-70 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300"
                  />
                </div>
              ))}
            </div>
          </div>
          
          <div className="grid md:grid-cols-3 gap-6 mt-12">
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-blue-200 text-center shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-2">
                50+
              </div>
              <p className="text-slate-700 font-medium">Hiring Partners</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-blue-200 text-center shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-green-600 bg-clip-text text-transparent mb-2">
                85%
              </div>
              <p className="text-slate-700 font-medium">Placement Rate</p>
            </div>
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-blue-200 text-center shadow-lg">
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                ₹12L
              </div>
              <p className="text-slate-700 font-medium">Average Package</p>
            </div>
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      {/* <section className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-xl p-12 rounded-3xl border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              Let's Empower the Next Generation – Together
            </h2>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
              <div className="text-center">
                <GraduationCap className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-medium">College looking to upskill students?</p>
              </div>
              <div className="text-center">
                <Building className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-medium">Brand looking to invest in student growth?</p>
              </div>
              <div className="text-center">
                <Users className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-medium">Professional who wants to mentor?</p>
              </div>
              <div className="text-center">
                <Star className="h-8 w-8 text-white mx-auto mb-3" />
                <p className="text-white font-medium">Student who wants to grow fast?</p>
              </div>
            </div>
            
            <p className="text-xl text-white/90 mb-8">We'd love to work with you.</p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <button className="bg-white text-blue-600 px-8 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Mail className="h-5 w-5" />
                <span>Contact Us</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Linkedin className="h-5 w-5" />
                <span>Connect on LinkedIn</span>
              </button>
            </div>
            
            <div className="mt-6 text-white/80 text-sm">
              📬 careers@gradxpert.in | 🌐 linkedin.com/company/gradxpert
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default AboutUs;