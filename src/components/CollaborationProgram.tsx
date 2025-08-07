import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Users, 
  Handshake, 
  CheckCircle, 
  ArrowRight,
  Star,
  Phone,
  Mail,
  Building,
  Award,
  BookOpen,
  Target,
  Zap,
  Shield,
  MessageSquare
} from 'lucide-react';

export default function CollaborationProgram() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    organizationName: '',
    role: '',
    departmentName: '',
    collaborationDescription: '',
    declaration: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const roleOptions = [
    'TPO (Training & Placement Officer)',
    'Club President',
    'Faculty Coordinator',
    'Independent Trainer',
    'Department Head',
    'Student Coordinator',
    'Other'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      setFormData(prev => ({ ...prev, [name]: checked }));
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Collaboration form submitted:', formData);
    setIsSubmitted(true);
  };

  const steps = [
    {
      number: 1,
      title: 'Submit Your Proposal',
      description: 'Fill out the collaboration form with your ideas and requirements',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Partnership Team Call',
      description: 'Our team will contact you to discuss collaboration opportunities',
      icon: Phone,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      title: 'Start Collaboration',
      description: 'Begin working together on impactful educational initiatives',
      icon: Handshake,
      gradient: 'from-emerald-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Expand Your Reach',
      description: 'Access our network of 10,000+ students and 50+ partner colleges',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Award,
      title: 'Quality Content',
      description: 'Leverage our industry-grade curriculum and expert mentors',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Users,
      title: 'Mutual Growth',
      description: 'Build lasting partnerships that benefit both organizations',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Collaborate on cutting-edge educational programs and initiatives',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '100+', label: 'Active Collaborations', gradient: 'from-blue-500 to-cyan-500' },
    { value: '50+', label: 'Partner Organizations', gradient: 'from-emerald-500 to-teal-500' },
    { value: '10K+', label: 'Students Impacted', gradient: 'from-purple-500 to-pink-500' },
    { value: '95%', label: 'Success Rate', gradient: 'from-orange-500 to-red-500' }
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
              Collaboration Request Submitted Successfully!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for expressing interest! Our partnerships team will reach out to you soon with next steps. 
              We're excited about the possibility of collaborating with you.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Partnership team review (24-48 hours)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Initial consultation call to explore synergies</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Collaboration planning and execution</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-xl font-semibold hover:from-emerald-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Partnership Team
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Handshake className="h-5 w-5" />
              <span>Collaboration Program</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Collaborate</span> with I/O School
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join forces with us to create impactful educational programs. Whether you're a TPO, trainer, 
              or college club leader, let's work together to empower students with industry-ready skills.
            </p>
          </div>

          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
              </div>
            ))}
          </div>

          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {benefits.map((benefit, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg">
                <div className={`w-12 h-12 bg-gradient-to-r ${benefit.gradient} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">{benefit.title}</h3>
                <p className="text-gray-600 text-sm">{benefit.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Steps Section */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              Simple <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3-Step Process</span>
            </h2>
            <p className="text-gray-600 text-lg">From idea to successful collaboration</p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {steps.map((step, index) => (
              <div key={index} className="group relative">
                <div className="bg-white rounded-2xl p-8 border border-gray-100 hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                  <div className={`w-16 h-16 bg-gradient-to-r ${step.gradient} rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 shadow-lg mx-auto`}>
                    <step.icon className="h-8 w-8 text-white" />
                  </div>
                  
                  <div className="text-sm text-gray-500 mb-2">Step {step.number}</div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{step.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step.description}</p>
                </div>
                
                {/* Arrow for desktop */}
                {index < steps.length - 1 && (
                  <div className="hidden md:block absolute -right-4 top-1/2 transform -translate-y-1/2 text-gray-300">
                    <ArrowRight className="h-6 w-6" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Collaboration Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Collaboration Request Form
              </h2>
              <p className="text-gray-600 text-lg">
                Tell us about yourself and how you'd like to collaborate with I/O School
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Personal & Role Information */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  Personal & Role Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="fullName"
                      value={formData.fullName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your full name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Phone Number (WhatsApp Preferred) *
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 9876543210"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Organization / College Name *
                    </label>
                    <input
                      type="text"
                      name="organizationName"
                      value={formData.organizationName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your organization or college name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Your Role / Designation *
                    </label>
                    <select
                      name="role"
                      value={formData.role}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select your role</option>
                      {roleOptions.map((role) => (
                        <option key={role} value={role}>{role}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Department / Club / Cell Name (if any)
                    </label>
                    <input
                      type="text"
                      name="departmentName"
                      value={formData.departmentName}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Computer Science Department, Tech Club, Training Cell"
                    />
                  </div>
                </div>
              </div>

              {/* Collaboration Description */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <MessageSquare className="h-6 w-6 text-blue-600 mr-3" />
                  Collaboration Vision
                </h3>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    Briefly Describe How You Want to Collaborate *
                  </label>
                  <textarea
                    name="collaborationDescription"
                    value={formData.collaborationDescription}
                    onChange={handleInputChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="Share your vision or idea for collaboration. For example: joint training programs, student placement initiatives, skill development workshops, mentorship programs, etc. Be specific about what you'd like to achieve together."
                  />
                  <p className="text-xs text-gray-500 mt-2">
                    Tip: Include details about your target audience, expected outcomes, and any specific requirements
                  </p>
                </div>
              </div>

              {/* Declaration */}
              <div className="bg-gradient-to-r from-gray-50 to-blue-50 rounded-2xl p-6 border border-gray-200">
                <div className="flex items-start space-x-3">
                  <input
                    type="checkbox"
                    name="declaration"
                    checked={formData.declaration}
                    onChange={handleInputChange}
                    required
                    className="mt-1 w-5 h-5 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                  />
                  <label className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Declaration:</span> I confirm I'm an active trainer/representative and interested in genuine collaboration with I/O School.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-2xl font-bold text-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-purple-500/25"
                >
                  <Handshake className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Submit Collaboration Request
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-gray-500 text-sm mt-4">
                  Our partnerships team will reach out to you soon with next steps
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}