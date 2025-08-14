import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Code, 
  Clock, 
  Users, 
  MapPin, 
  Star,
  Award,
  CheckCircle,
  Calendar,
  Building,
  Target,
  Zap,
  Shield,
  Play,
  Download,
  Mail,
  Phone,
  BookOpen,
  Trophy,
  Briefcase,
  GraduationCap,
  ArrowRight,
  ChevronRight,
  Globe,
  Laptop,
  Coffee,
  Heart,
  TrendingUp,
  FileText,
  MessageSquare
} from 'lucide-react';

export default function TrainingProgramDetails() {
  const [activeTab, setActiveTab] = useState('overview');
  const [formData, setFormData] = useState({
    campusName: '',
    contactName: '',
    email: '',
    phone: '',
    preferredDates: '',
    studentCount: '',
    message: ''
  });
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Training program request:', formData);
    setIsSubmitted(true);
  };

  const program = {
    title: 'Campus Coding Bootcamp',
    subtitle: 'Transform Your Students into Industry-Ready Developers',
    duration: '3-5 Days',
    capacity: '100-300 Students',
    price: 'Free for Partner Campuses',
    rating: 4.9,
    studentsImpacted: '5000+',
    campusesHosted: '50+',
    description: 'Our flagship Campus Coding Bootcamp is an intensive, hands-on program designed to transform students from beginners to confident programmers. This comprehensive workshop combines theoretical knowledge with practical application, ensuring students build real projects they can showcase to employers.',
    image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&h=500&fit=crop'
  };

  const highlights = [
    { icon: Code, title: 'Hands-on Coding', description: 'Live coding sessions with expert mentors' },
    { icon: Trophy, title: 'Real Projects', description: 'Build portfolio-worthy applications' },
    { icon: Award, title: 'Certification', description: 'Official completion certificates' },
    { icon: Users, title: 'Expert Mentors', description: 'IIIT alumni and industry professionals' },
    { icon: Briefcase, title: 'Career Ready', description: 'Interview prep and industry insights' },
    { icon: Globe, title: 'Modern Tech', description: 'Latest frameworks and tools' }
  ];

  const curriculum = [
    {
      day: 'Day 1',
      title: 'Programming Fundamentals & Environment Setup',
      topics: ['Introduction to Programming Concepts', 'Development Environment Setup', 'Version Control with Git', 'Basic Syntax and Logic Building'],
      duration: '8 hours',
      type: 'Foundation'
    },
    {
      day: 'Day 2',
      title: 'Web Development Essentials',
      topics: ['HTML5 Structure and Semantics', 'CSS3 Styling and Layouts', 'Responsive Design Principles', 'JavaScript Fundamentals'],
      duration: '8 hours',
      type: 'Core Skills'
    },
    {
      day: 'Day 3',
      title: 'Modern Framework Introduction',
      topics: ['React.js Fundamentals', 'Component-Based Architecture', 'State Management', 'Event Handling and Hooks'],
      duration: '8 hours',
      type: 'Advanced'
    },
    {
      day: 'Day 4',
      title: 'Full-Stack Project Development',
      topics: ['API Integration', 'Database Connectivity', 'Authentication Systems', 'Deployment Strategies'],
      duration: '8 hours',
      type: 'Project'
    },
    {
      day: 'Day 5',
      title: 'Career Preparation & Portfolio Building',
      topics: ['GitHub Portfolio Setup', 'Resume Building Workshop', 'Interview Preparation', 'Industry Best Practices'],
      duration: '6 hours',
      type: 'Career'
    }
  ];

  const outcomes = [
    'Build 2-3 complete web applications from scratch',
    'Create a professional GitHub portfolio',
    'Understand modern development workflows and tools',
    'Gain confidence in technical interviews',
    'Network with industry professionals and mentors',
    'Receive official certification recognized by top companies',
    'Learn industry best practices and coding standards',
    'Develop problem-solving and debugging skills'
  ];

  const testimonials = [
    {
      text: "The bootcamp completely transformed my understanding of programming. The hands-on approach and real projects gave me the confidence to apply for developer roles.",
      author: "Priya Sharma",
      role: "Final Year Student",
      campus: "JNTU Kakinada",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25aa556?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "Our students showed remarkable improvement after the bootcamp. 80% of participants got placed in tech companies within 6 months.",
      author: "Dr. Rajesh Kumar",
      role: "Training & Placement Officer",
      campus: "Andhra University",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&h=80&fit=crop&crop=face",
      rating: 5
    },
    {
      text: "The mentors were exceptional! They made complex concepts easy to understand and were always available for doubts and guidance.",
      author: "Kavya Reddy",
      role: "CSE Student",
      campus: "GITAM University",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=80&h=80&fit=crop&crop=face",
      rating: 5
    }
  ];

  const faqs = [
    {
      question: "What are the prerequisites for students?",
      answer: "No prior programming experience required! The bootcamp is designed for beginners. Students should have basic computer literacy and enthusiasm to learn."
    },
    {
      question: "What infrastructure is needed from the campus?",
      answer: "We need a computer lab with internet connectivity, projector/smart board, and power backup. We can accommodate 50-300 students depending on the lab capacity."
    },
    {
      question: "How much does it cost?",
      answer: "The bootcamp is completely FREE for our partner campuses. We only ask for basic infrastructure and student coordination support."
    },
    {
      question: "What certificates do students receive?",
      answer: "Students receive official completion certificates from I/O School, recognized by top tech companies. High performers also get recommendation letters."
    },
    {
      question: "Can we customize the curriculum?",
      answer: "Yes! We can customize the curriculum based on your students' needs, department requirements, and specific technology preferences."
    },
    {
      question: "What support do you provide after the bootcamp?",
      answer: "We provide 3 months of mentorship support, career guidance, job referrals, and access to our alumni network for continued learning."
    }
  ];

  const stats = [
    { icon: Users, value: '5000+', label: 'Students Trained', gradient: 'from-blue-500 to-cyan-500' },
    { icon: Building, value: '50+', label: 'Campuses Partnered', gradient: 'from-emerald-500 to-teal-500' },
    { icon: Trophy, value: '95%', label: 'Completion Rate', gradient: 'from-purple-500 to-pink-500' },
    { icon: Briefcase, value: '80%', label: 'Placement Success', gradient: 'from-orange-500 to-red-500' }
  ];

  const tabs = [
    { id: 'overview', label: 'Overview', icon: BookOpen },
    { id: 'curriculum', label: 'Curriculum', icon: GraduationCap },
    { id: 'outcomes', label: 'Outcomes', icon: Target },
    { id: 'testimonials', label: 'Reviews', icon: Star },
    { id: 'faq', label: 'FAQ', icon: MessageSquare }
  ];

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
          <div className="text-center">
            <div className="w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mx-auto mb-8 shadow-lg">
              <CheckCircle className="h-10 w-10 text-white" />
            </div>
            
            <h1 className="text-4xl font-bold text-gray-900 mb-6">
              Request Submitted Successfully!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for your interest in our Campus Coding Bootcamp! Our program coordinator will contact you within 24-48 hours to discuss the details and schedule.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Program coordinator will call you (24-48 hours)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Curriculum customization and scheduling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Bootcamp execution at your campus</span>
                </div>
              </div>
            </div>
            
            <Link 
              to="/"
              className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
            >
              Back to Home
              <ArrowRight className="ml-2 h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Hero Section */}
      <section className="pt-20 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div>
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-500/10 to-cyan-500/10 backdrop-blur-sm border border-blue-500/20 text-blue-700 px-4 py-2 rounded-full text-sm font-medium mb-6">
                <Code className="h-4 w-4" />
                <span>Premium Training Program</span>
              </div>
              
              <h1 className="text-5xl font-bold text-gray-900 mb-4">
                {program.title}
              </h1>
              
              <p className="text-xl text-blue-600 font-semibold mb-6">
                {program.subtitle}
              </p>
              
              <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                {program.description}
              </p>
              
              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 text-center shadow-lg">
                  <Clock className="h-6 w-6 text-blue-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{program.duration}</div>
                  <div className="text-xs text-gray-600">Duration</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 text-center shadow-lg">
                  <Users className="h-6 w-6 text-emerald-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{program.capacity}</div>
                  <div className="text-xs text-gray-600">Capacity</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 text-center shadow-lg">
                  <Star className="h-6 w-6 text-yellow-500 mx-auto mb-2 fill-current" />
                  <div className="font-bold text-gray-900">{program.rating}/5</div>
                  <div className="text-xs text-gray-600">Rating</div>
                </div>
                <div className="bg-white/80 backdrop-blur-sm rounded-xl p-4 border border-gray-100 text-center shadow-lg">
                  <Trophy className="h-6 w-6 text-purple-600 mx-auto mb-2" />
                  <div className="font-bold text-gray-900">{program.price}</div>
                  <div className="text-xs text-gray-600">Cost</div>
                </div>
              </div>
              
              {/* CTA Buttons */}
              <div className="flex flex-col sm:flex-row gap-4">
                <button 
                  onClick={() => document.getElementById('request-form')?.scrollIntoView({ behavior: 'smooth' })}
                  className="group inline-flex items-center justify-center px-8 py-4 bg-gradient-to-r from-blue-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-blue-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
                >
                  <Calendar className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                  Request This Program
                </button>
                
                <button className="group inline-flex items-center justify-center px-8 py-4 bg-white/80 backdrop-blur-sm border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-white hover:border-blue-300 transition-all duration-300 shadow-lg">
                  <Download className="mr-2 h-5 w-5" />
                  Download Brochure
                </button>
              </div>
            </div>
            
            {/* Right Visual */}
            <div className="relative">
              <div className="relative bg-white/80 backdrop-blur-sm rounded-3xl overflow-hidden border border-gray-200/50 shadow-2xl">
                <img
                  src={program.image}
                  alt={program.title}
                  className="w-full h-80 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                
                {/* Play Button Overlay */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-20 h-20 bg-gradient-to-r from-blue-500 to-cyan-600 rounded-full flex items-center justify-center hover:scale-110 transition-all duration-300 shadow-2xl">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
                
                {/* Bottom Stats */}
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4 border border-white/50">
                    <div className="flex justify-between items-center">
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{program.studentsImpacted}</div>
                        <div className="text-xs text-gray-600">Students Trained</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">{program.campusesHosted}</div>
                        <div className="text-xs text-gray-600">Campuses</div>
                      </div>
                      <div className="text-center">
                        <div className="text-lg font-bold text-gray-900">95%</div>
                        <div className="text-xs text-gray-600">Success Rate</div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>




      {/* Detailed Content Tabs */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Tab Navigation */}
          <div className="flex flex-wrap justify-center mb-12 bg-white/80 backdrop-blur-sm rounded-2xl p-2 border border-gray-200 shadow-lg">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex items-center px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${
                  activeTab === tab.id
                    ? 'bg-gradient-to-r from-blue-500 to-cyan-600 text-white shadow-lg'
                    : 'text-gray-600 hover:text-blue-600 hover:bg-blue-50'
                }`}
              >
                <tab.icon className="h-5 w-5 mr-2" />
                {tab.label}
              </button>
            ))}
          </div>

          {/* Tab Content */}
          <div className="bg-white rounded-3xl p-8 border border-gray-100 shadow-xl">
            {activeTab === 'overview' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Program Overview</h3>
                <div className="prose prose-lg max-w-none">
                  <p className="text-gray-600 leading-relaxed mb-6">
                    Our Campus Coding Bootcamp is meticulously designed to bridge the gap between academic learning and industry requirements. 
                    This intensive program transforms students from programming novices to confident developers through a combination of 
                    theoretical knowledge, hands-on practice, and real-world project development.
                  </p>
                  
                  <div className="grid md:grid-cols-2 gap-8 mt-8">
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">What Makes Us Different</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Industry-experienced mentors from top IIITs</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Project-based learning with real-world applications</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Personalized attention and career guidance</span>
                        </li>
                        <li className="flex items-start">
                          <CheckCircle className="h-5 w-5 text-emerald-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Industry-recognized certification</span>
                        </li>
                      </ul>
                    </div>
                    
                    <div>
                      <h4 className="text-lg font-semibold text-gray-900 mb-4">Target Audience</h4>
                      <ul className="space-y-3">
                        <li className="flex items-start">
                          <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Engineering students (all branches)</span>
                        </li>
                        <li className="flex items-start">
                          <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Final year students preparing for placements</span>
                        </li>
                        <li className="flex items-start">
                          <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Students interested in software development</span>
                        </li>
                        <li className="flex items-start">
                          <Target className="h-5 w-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                          <span className="text-gray-600">Beginners with no prior programming experience</span>
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'curriculum' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Detailed Curriculum</h3>
                <div className="space-y-6">
                  {curriculum.map((day, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                      <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center">
                          <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 shadow-lg ${
                            day.type === 'Foundation' ? 'bg-gradient-to-r from-blue-500 to-cyan-500' :
                            day.type === 'Core Skills' ? 'bg-gradient-to-r from-emerald-500 to-teal-500' :
                            day.type === 'Advanced' ? 'bg-gradient-to-r from-purple-500 to-pink-500' :
                            day.type === 'Project' ? 'bg-gradient-to-r from-orange-500 to-red-500' :
                            'bg-gradient-to-r from-indigo-500 to-purple-500'
                          }`}>
                            <span className="text-white font-bold">{day.day.split(' ')[1]}</span>
                          </div>
                          <div>
                            <h4 className="text-lg font-bold text-gray-900">{day.title}</h4>
                            <div className="flex items-center space-x-4 text-sm text-gray-600">
                              <span className="flex items-center">
                                <Clock className="h-4 w-4 mr-1" />
                                {day.duration}
                              </span>
                              <span className={`px-2 py-1 rounded-full text-xs font-medium ${
                                day.type === 'Foundation' ? 'bg-blue-100 text-blue-700' :
                                day.type === 'Core Skills' ? 'bg-emerald-100 text-emerald-700' :
                                day.type === 'Advanced' ? 'bg-purple-100 text-purple-700' :
                                day.type === 'Project' ? 'bg-orange-100 text-orange-700' :
                                'bg-indigo-100 text-indigo-700'
                              }`}>
                                {day.type}
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                      
                      <div className="grid md:grid-cols-2 gap-4">
                        {day.topics.map((topic, topicIndex) => (
                          <div key={topicIndex} className="flex items-center bg-white/80 backdrop-blur-sm rounded-lg p-3 border border-gray-100">
                            <ChevronRight className="h-4 w-4 text-blue-500 mr-2 flex-shrink-0" />
                            <span className="text-gray-700 text-sm">{topic}</span>
                          </div>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'outcomes' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Learning Outcomes</h3>
                <p className="text-gray-600 mb-8 text-lg">
                  By the end of this bootcamp, your students will have gained practical skills and confidence to excel in the tech industry.
                </p>
                
                <div className="grid md:grid-cols-2 gap-6">
                  {outcomes.map((outcome, index) => (
                    <div key={index} className="flex items-start bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-xl p-4 border border-emerald-200">
                      <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-4 flex-shrink-0">
                        <CheckCircle className="h-5 w-5 text-white" />
                      </div>
                      <span className="text-gray-700 font-medium">{outcome}</span>
                    </div>
                  ))}
                </div>
                
                <div className="mt-12 bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-8 border border-blue-200">
                  <h4 className="text-xl font-bold text-gray-900 mb-4">Post-Bootcamp Support</h4>
                  <div className="grid md:grid-cols-3 gap-6">
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Users className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">3 Months Mentorship</h5>
                      <p className="text-gray-600 text-sm">Continued guidance and doubt resolution</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Briefcase className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Job Referrals</h5>
                      <p className="text-gray-600 text-sm">Direct referrals to partner companies</p>
                    </div>
                    <div className="text-center">
                      <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-3">
                        <Globe className="h-6 w-6 text-white" />
                      </div>
                      <h5 className="font-semibold text-gray-900 mb-2">Alumni Network</h5>
                      <p className="text-gray-600 text-sm">Access to our growing community</p>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'testimonials' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">What Students & Campuses Say</h3>
                <div className="grid lg:grid-cols-3 gap-8">
                  {testimonials.map((testimonial, index) => (
                    <div key={index} className="bg-gradient-to-br from-white to-gray-50 rounded-2xl p-6 border border-gray-200 shadow-lg">
                      <div className="flex text-yellow-400 mb-4">
                        {[1, 2, 3, 4, 5].map((star) => (
                          <Star key={star} className="h-5 w-5 fill-current" />
                        ))}
                      </div>
                      
                      <blockquote className="text-gray-700 mb-6 leading-relaxed">
                        "{testimonial.text}"
                      </blockquote>
                      
                      <div className="flex items-center">
                        <img
                          src={testimonial.image}
                          alt={testimonial.author}
                          className="w-12 h-12 rounded-full mr-4 object-cover"
                        />
                        <div>
                          <h4 className="font-semibold text-gray-900">{testimonial.author}</h4>
                          <p className="text-gray-600 text-sm">{testimonial.role}</p>
                          <p className="text-blue-600 text-sm font-medium">{testimonial.campus}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {activeTab === 'faq' && (
              <div>
                <h3 className="text-2xl font-bold text-gray-900 mb-6">Frequently Asked Questions</h3>
                <div className="space-y-6">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                      <h4 className="text-lg font-semibold text-gray-900 mb-3 flex items-center">
                        <MessageSquare className="h-5 w-5 text-blue-600 mr-2" />
                        {faq.question}
                      </h4>
                      <p className="text-gray-600 leading-relaxed pl-7">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}
          </div>
        </div>
      </section>



      {/* Program Highlights */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Why Choose Our <span className="bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent">Training Program</span>?
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Comprehensive, industry-focused training designed to make your students job-ready
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {highlights.map((highlight, index) => (
              <div key={index} className="group bg-white rounded-2xl p-6 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg">
                  <highlight.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{highlight.title}</h3>
                <p className="text-gray-600 text-sm">{highlight.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="group text-center bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className={`w-16 h-16 bg-gradient-to-r ${stat.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <stat.icon className="h-8 w-8 text-white" />
                </div>
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>



      {/* Request Form */}
      {/* <section id="request-form" className="py-20 bg-gradient-to-br from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">
              Ready to Transform Your Students?
            </h2>
            <p className="text-xl text-blue-100">
              Request our Campus Coding Bootcamp for your college today
            </p>
          </div>
          
          <div className="bg-white/10 backdrop-blur-sm rounded-3xl p-8 border border-white/20 shadow-2xl">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-white font-semibold mb-2">
                    College Name *
                  </label>
                  <input
                    type="text"
                    name="collegeName"
                    value={formData.collegeName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    placeholder="Enter your college name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Contact Person Name *
                  </label>
                  <input
                    type="text"
                    name="contactName"
                    value={formData.contactName}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    placeholder="Your full name"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    placeholder="your.email@college.edu"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Phone Number *
                  </label>
                  <input
                    type="tel"
                    name="phone"
                    value={formData.phone}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    placeholder="+91 9876543210"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Preferred Dates
                  </label>
                  <input
                    type="text"
                    name="preferredDates"
                    value={formData.preferredDates}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., March 2024, First week of April"
                  />
                </div>
                
                <div>
                  <label className="block text-white font-semibold mb-2">
                    Expected Student Count
                  </label>
                  <input
                    type="number"
                    name="studentCount"
                    value={formData.studentCount}
                    onChange={handleInputChange}
                    className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200"
                    placeholder="e.g., 150"
                  />
                </div>
              </div>
              
              <div>
                <label className="block text-white font-semibold mb-2">
                  Additional Requirements or Questions
                </label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  rows={4}
                  className="w-full px-4 py-3 bg-white/20 backdrop-blur-sm border border-white/30 rounded-xl text-white placeholder-white/70 focus:ring-2 focus:ring-white/50 focus:border-transparent transition-all duration-200 resize-none"
                  placeholder="Any specific requirements, questions, or customization requests..."
                />
              </div>
              
              <div className="text-center pt-4">
                <button
                  type="submit"
                  className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-2xl font-bold text-lg hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-2xl"
                >
                  <Calendar className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Request Campus Bootcamp
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-blue-100 text-sm mt-4">
                  Our program coordinator will contact you within 24-48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section> */}

      {/* Contact Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Have Questions? Let's Talk!
            </h2>
            <p className="text-gray-600 text-lg">
              Our program coordinators are here to help you plan the perfect training program
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center bg-gradient-to-br from-blue-50 to-cyan-50 rounded-2xl p-8 border border-blue-200">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Phone className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Call Us</h3>
              <p className="text-blue-600 font-semibold">+91 9876543210</p>
              <p className="text-gray-600 text-sm mt-2">Mon-Fri, 9 AM - 6 PM</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-emerald-50 to-teal-50 rounded-2xl p-8 border border-emerald-200">
              <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <Mail className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">Email Us</h3>
              <p className="text-emerald-600 font-semibold">programs@ioschool.in</p>
              <p className="text-gray-600 text-sm mt-2">We'll respond within 24 hours</p>
            </div>
            
            <div className="text-center bg-gradient-to-br from-purple-50 to-pink-50 rounded-2xl p-8 border border-purple-200">
              <div className="w-16 h-16 bg-gradient-to-r from-purple-500 to-pink-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
                <MessageSquare className="h-8 w-8 text-white" />
              </div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">WhatsApp</h3>
              <p className="text-purple-600 font-semibold">+91 9876543210</p>
              <p className="text-gray-600 text-sm mt-2">Quick responses & updates</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}