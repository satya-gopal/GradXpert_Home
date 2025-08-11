import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building2, 
  Users, 
  Handshake, 
  CheckCircle, 
  ArrowRight,
  Star,
  Globe,
  Mail,
  Phone,
  Shield,
  Zap,
  Award,
  BookOpen,
  Target
} from 'lucide-react';

export default function PartnerWithUs() {
  const [formData, setFormData] = useState({
    companyName: '',
    websiteUrl: '',
    companyLocation: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    companySpecialization: '',
    collaborationType: [],
    otherCollaboration: '',
    collaborationProposal: '',
    declaration: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const collaborationTypes = [
    'Course Distribution',
    'Co-branded Bootcamps',
    'Platform/Tool Integration',
    'Certification Support',
    'Student Project Hosting',
    'Other (please specify)'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'declaration') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else if (name === 'collaborationType') {
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...prev[name], value]
            : prev[name].filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Partnership form submitted:', formData);
    setIsSubmitted(true);
  };

  const steps = [
    {
      number: 1,
      title: 'Submit Partnership Form',
      description: 'Fill out the form with your company details and partnership interests',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Partnership Team Call',
      description: 'Our partnership team will contact you to discuss opportunities',
      icon: Phone,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      title: 'Start Win-Win Partnership',
      description: 'Begin our collaborative journey for mutual growth and success',
      icon: Handshake,
      gradient: 'from-emerald-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: Target,
      title: 'Market Expansion',
      description: 'Access to 10,000+ students across 50+ colleges in Andhra Pradesh',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Users,
      title: 'Quality Network',
      description: 'Connect with IIIT alumni mentors and industry professionals',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Award,
      title: 'Brand Recognition',
      description: 'Co-branded programs and joint marketing opportunities',
      gradient: 'from-emerald-500 to-teal-500'
    },
    {
      icon: Zap,
      title: 'Innovation Hub',
      description: 'Collaborate on cutting-edge educational technology solutions',
      gradient: 'from-orange-500 to-red-500'
    }
  ];

  const stats = [
    { value: '50+', label: 'Partner Organizations', gradient: 'from-blue-500 to-cyan-500' },
    { value: '10K+', label: 'Students Reached', gradient: 'from-emerald-500 to-teal-500' },
    { value: '100+', label: 'Joint Programs', gradient: 'from-purple-500 to-pink-500' },
    { value: '95%', label: 'Partner Satisfaction', gradient: 'from-orange-500 to-red-500' }
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
              Partnership Request Submitted Successfully!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for showing interest in partnering with I/O School. Our partnership team will review your proposal and reach out soon to discuss exciting collaboration opportunities.
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
                  <span className="text-gray-700">Partnership proposal and agreement drafting</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <span className="text-gray-700">Launch collaborative programs and initiatives</span>
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
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 ">
            {/* Hero Section */}
<section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.1),transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">

            <div className="flex items-center justify-center space-x-4 mb-8">
              <Handshake className="h-12 w-12 text-blue-600 hidden md:block" />

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
              Partner with{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  GradXpert
                </span>
              </h1>
            </div>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
            Join forces with us to create innovative educational solutions, expand market reach, 
            and build a stronger tech ecosystem together. Let's grow and succeed as partners.            </p>
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg max-w-2xl mx-auto">
              <p className="text-slate-800 font-medium">
              Strategic partnerships that drive innovation and mutual growth
              </p>
            </div>
          </div>
        </div>
      </section>

        {/* stats Section */}

        <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Stats */}
          <div className="grid md:grid-cols-4 gap-6">
            {stats.map((stat, index) => (
              <div key={index} className="group bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105 shadow-lg text-center">
                <div className={`text-3xl font-bold bg-gradient-to-r ${stat.gradient} bg-clip-text text-transparent mb-2 group-hover:scale-110 transition-transform duration-300`}>
                  {stat.value}
                </div>
                <div className="text-gray-600 text-sm font-medium">{stat.label}</div>
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
              Simple <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">3-Step Partnership Process</span>
            </h2>
            <p className="text-gray-600 text-lg">From initial contact to successful collaboration</p>
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

      {/* Partnership Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                Partnership Application Form
              </h2>
              <p className="text-gray-600 text-lg">
                Tell us about your organization and how we can collaborate together
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* Company Information */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building2 className="h-6 w-6 text-blue-600 mr-3" />
                  Company Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Name *
                    </label>
                    <input
                      type="text"
                      name="companyName"
                      value={formData.companyName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your company name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Website URL *
                    </label>
                    <input
                      type="url"
                      name="websiteUrl"
                      value={formData.websiteUrl}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://www.yourcompany.com"
                    />
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Company Location (City, Country) *
                    </label>
                    <input
                      type="text"
                      name="companyLocation"
                      value={formData.companyLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Hyderabad, India"
                    />
                  </div>
                </div>
              </div>

              {/* Contact Information */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  Primary Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Primary Contact Person – Full Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter contact person's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Designation / Role *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Business Development Manager, CEO, CTO"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Work Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="contact@yourcompany.com"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Contact Number (WhatsApp Preferred) *
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
                </div>
              </div>

              {/* Company Specialization */}
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Star className="h-6 w-6 text-emerald-600 mr-3" />
                  Company Specialization
                </h3>
                
                <div>
                  <label className="block text-sm font-semibold text-gray-700 mb-2">
                    What does your company specialize in? *
                  </label>
                  <textarea
                    name="companySpecialization"
                    value={formData.companySpecialization}
                    onChange={handleInputChange}
                    required
                    rows={4}
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200 resize-none"
                    placeholder="e.g., LMS tools, course content, mentorship platforms, AI-driven assessments, educational technology solutions..."
                  />
                </div>
              </div>

              {/* Collaboration Details */}
              <div className="bg-gradient-to-r from-orange-50 to-red-50 rounded-2xl p-6 border border-orange-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Handshake className="h-6 w-6 text-orange-600 mr-3" />
                  Collaboration Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      What type of collaboration are you interested in? *
                    </label>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                      {collaborationTypes.map((type) => (
                        <label key={type} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="collaborationType"
                            value={type}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-orange-600 border-gray-300 rounded focus:ring-orange-500"
                          />
                          <span className="text-sm text-gray-700">{type}</span>
                        </label>
                      ))}
                    </div>
                    
                    {formData.collaborationType.includes('Other (please specify)') && (
                      <div className="mt-4">
                        <input
                          type="text"
                          name="otherCollaboration"
                          value={formData.otherCollaboration}
                          onChange={handleInputChange}
                          className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200"
                          placeholder="Please specify other collaboration type..."
                        />
                      </div>
                    )}
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Briefly describe your collaboration proposal or goal *
                    </label>
                    <textarea
                      name="collaborationProposal"
                      value={formData.collaborationProposal}
                      onChange={handleInputChange}
                      required
                      rows={5}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-orange-500 focus:border-transparent transition-all duration-200 resize-none"
                      placeholder="Describe your partnership vision, goals, and how you see us working together. This can be customized later after our meeting..."
                    />
                  </div>
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
                    className="mt-1 w-5 h-5 text-blue-600 border-gray-300 rounded focus:ring-blue-500"
                  />
                  <label className="text-sm text-gray-700 leading-relaxed">
                    <span className="font-semibold">Declaration:</span> I confirm I'm an authorized representative of this organization and would like to explore a partnership opportunity with I/O School.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-2xl font-bold text-lg hover:from-emerald-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25"
                >
                  <Handshake className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Submit Partnership Request
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-gray-500 text-sm mt-4">
                  Our partnership team will review your proposal and reach out within 24-48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* benifits Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Benefits Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 ">
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

    </div>
  );
}