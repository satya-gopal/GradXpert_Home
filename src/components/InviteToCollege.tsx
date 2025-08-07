import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  Building, 
  Users, 
  Calendar, 
  CheckCircle, 
  ArrowRight,
  Star,
  Clock,
  MapPin,
  MessageSquare,
  Shield,
  Zap,
  Award,
  BookOpen,
  Phone,
  Mail
} from 'lucide-react';

export default function InviteToCollege() {
  const [formData, setFormData] = useState({
    collegeName: '',
    collegeWebsite: '',
    campusLocation: '',
    institutionType: '',
    contactName: '',
    designation: '',
    email: '',
    phone: '',
    departments: [],
    yearOfStudents: [],
    numberOfStudents: '',
    previousBootcamps: '',
    previousBootcampsDescription: '',
    bootcampDuration: '',
    preferredMode: '',
    interestedTopics: [],
    preferredDate: '',
    declaration: false
  });

  const [isSubmitted, setIsSubmitted] = useState(false);

  const institutionTypes = [
    'Private',
    'Government',
    'Autonomous',
    'Deemed',
    'Others'
  ];

  const departments = [
    'CSE',
    'ECE',
    'EEE',
    'Mechanical',
    'Civil',
    'Others'
  ];

  const yearOptions = [
    '1st Year',
    '2nd Year',
    '3rd Year',
    'Final Year'
  ];

  const durationOptions = [
    '1 Day',
    '2 Days',
    '1 Week',
    'Custom'
  ];

  const modeOptions = [
    'On-Campus',
    'Online',
    'Hybrid'
  ];

  const topicOptions = [
    'AI/ML',
    'Web Development',
    'Python',
    'Aptitude Training',
    'Soft Skills',
    'Resume Building',
    'Startup Training',
    'Data Structures & Algorithms',
    'Mobile App Development',
    'Cloud Computing',
    'Cybersecurity',
    'DevOps'
  ];

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
    const { name, value, type } = e.target;
    if (type === 'checkbox') {
      const checked = (e.target as HTMLInputElement).checked;
      if (name === 'declaration') {
        setFormData(prev => ({ ...prev, [name]: checked }));
      } else {
        // Handle array checkboxes
        setFormData(prev => ({
          ...prev,
          [name]: checked 
            ? [...(prev[name as keyof typeof prev] as string[]), value]
            : (prev[name as keyof typeof prev] as string[]).filter(item => item !== value)
        }));
      }
    } else {
      setFormData(prev => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log('Form submitted:', formData);
    setIsSubmitted(true);
  };

  const steps = [
    {
      number: 1,
      title: 'Submit Your Invitation',
      description: 'Fill out the form with your college details and requirements',
      icon: BookOpen,
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      number: 2,
      title: 'Representative Will Call',
      description: 'Our program manager will contact you within 24-48 hours',
      icon: Phone,
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      number: 3,
      title: 'Host the Program',
      description: 'We conduct the training program at your campus',
      icon: Award,
      gradient: 'from-emerald-500 to-cyan-500'
    }
  ];

  const benefits = [
    {
      icon: Star,
      title: 'Industry-Ready Training',
      description: 'Curriculum designed by IIIT alumni and industry experts',
      gradient: 'from-yellow-500 to-orange-500'
    },
    {
      icon: Users,
      title: 'Expert Mentors',
      description: 'Top-tier mentors from IIITs and leading tech companies',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      icon: Shield,
      title: 'Proven Track Record',
      description: '50+ colleges trained with 95% satisfaction rate',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      icon: Zap,
      title: 'Flexible Programs',
      description: 'Customizable duration and topics based on your needs',
      gradient: 'from-emerald-500 to-teal-500'
    }
  ];

  const stats = [
    { value: '50+', label: 'Colleges Trained', gradient: 'from-blue-500 to-cyan-500' },
    { value: '5000+', label: 'Students Impacted', gradient: 'from-emerald-500 to-teal-500' },
    { value: '100+', label: 'Programs Conducted', gradient: 'from-purple-500 to-pink-500' },
    { value: '95%', label: 'Satisfaction Rate', gradient: 'from-orange-500 to-red-500' }
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
              Invitation Submitted Successfully!
            </h1>
            
            <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
              Thank you for your interest! Our program manager will connect with you shortly to take this forward. 
              We're excited about the possibility of partnering with your institution.
            </p>
            
            <div className="bg-white rounded-2xl p-8 border border-gray-100 shadow-lg mb-8">
              <h3 className="text-xl font-bold text-gray-900 mb-4">What happens next?</h3>
              <div className="space-y-4 text-left">
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">1</span>
                  </div>
                  <span className="text-gray-700">Program manager review (24-48 hours)</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-purple-500 to-pink-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">2</span>
                  </div>
                  <span className="text-gray-700">Initial consultation call to discuss requirements</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">3</span>
                  </div>
                  <span className="text-gray-700">Program customization and scheduling</span>
                </div>
                <div className="flex items-center">
                  <div className="w-8 h-8 bg-gradient-to-r from-orange-500 to-red-500 rounded-full flex items-center justify-center mr-4">
                    <span className="text-white text-sm font-bold">4</span>
                  </div>
                  <span className="text-gray-700">Training program execution at your campus</span>
                </div>
              </div>
            </div>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link 
                to="/"
                className="inline-flex items-center px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-semibold hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 transform hover:scale-105 shadow-lg"
              >
                Back to Home
                <ArrowRight className="ml-2 h-5 w-5" />
              </Link>
              
              <button className="inline-flex items-center px-8 py-4 bg-white border-2 border-gray-200 text-gray-700 rounded-xl font-semibold hover:bg-gray-50 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Mail className="mr-2 h-5 w-5" />
                Contact Us Directly
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
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-emerald-500/10 to-cyan-500/10 backdrop-blur-sm border border-emerald-500/20 text-emerald-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Building className="h-5 w-5" />
              <span>Partner with I/O School</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              Invite <span className="bg-gradient-to-r from-emerald-600 to-cyan-600 bg-clip-text text-transparent">I/O School</span> to Your College
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Bring industry-ready training programs to your campus. Our expert mentors from IIITs will 
              conduct comprehensive bootcamps tailored to your students' needs.
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
            <p className="text-gray-600 text-lg">From invitation to program execution</p>
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

      {/* Application Form */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="bg-white rounded-3xl p-8 md:p-12 border border-gray-100 shadow-2xl">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-gray-900 mb-4">
                College Training Program Request
              </h2>
              <p className="text-gray-600 text-lg">
                Fill out the form below to invite I/O School to your campus
              </p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              {/* College & Contact Information */}
              <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 border border-blue-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Building className="h-6 w-6 text-blue-600 mr-3" />
                  College & Contact Information
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      College Name *
                    </label>
                    <input
                      type="text"
                      name="collegeName"
                      value={formData.collegeName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter your college name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      College Website (if available)
                    </label>
                    <input
                      type="url"
                      name="collegeWebsite"
                      value={formData.collegeWebsite}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="https://www.yourcollege.edu"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Campus Location (City, State) *
                    </label>
                    <input
                      type="text"
                      name="campusLocation"
                      value={formData.campusLocation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Hyderabad, Telangana"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Affiliated University / Type of Institution *
                    </label>
                    <select
                      name="institutionType"
                      value={formData.institutionType}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select institution type</option>
                      {institutionTypes.map((type) => (
                        <option key={type} value={type}>{type}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Point of Contact – Full Name *
                    </label>
                    <input
                      type="text"
                      name="contactName"
                      value={formData.contactName}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="Enter contact person's name"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Designation *
                    </label>
                    <input
                      type="text"
                      name="designation"
                      value={formData.designation}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., Training & Placement Officer, HOD, Faculty Coordinator"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Official Email ID *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="official.email@college.edu"
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
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                      placeholder="+91 9876543210"
                    />
                  </div>
                </div>
              </div>

              {/* Student Details */}
              <div className="bg-gradient-to-r from-purple-50 to-pink-50 rounded-2xl p-6 border border-purple-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Users className="h-6 w-6 text-purple-600 mr-3" />
                  Student Details
                </h3>
                
                <div className="space-y-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Departments Interested *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {departments.map((dept) => (
                        <label key={dept} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="departments"
                            value={dept}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700">{dept}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Year of Students to Be Trained *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                      {yearOptions.map((year) => (
                        <label key={year} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="yearOfStudents"
                            value={year}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                          />
                          <span className="text-sm text-gray-700">{year}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Approximate Number of Students Interested *
                    </label>
                    <input
                      type="number"
                      name="numberOfStudents"
                      value={formData.numberOfStudents}
                      onChange={handleInputChange}
                      required
                      min="1"
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., 150"
                    />
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Have you hosted any bootcamps or workshops earlier? *
                    </label>
                    <select
                      name="previousBootcamps"
                      value={formData.previousBootcamps}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 mb-3"
                    >
                      <option value="">Select option</option>
                      <option value="yes">Yes</option>
                      <option value="no">No</option>
                    </select>
                    
                    {formData.previousBootcamps === 'yes' && (
                      <textarea
                        name="previousBootcampsDescription"
                        value={formData.previousBootcampsDescription}
                        onChange={handleInputChange}
                        rows={3}
                        className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                        placeholder="Brief description of previous bootcamps/workshops..."
                      />
                    )}
                  </div>
                </div>
              </div>

              {/* Program Expectations */}
              <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 rounded-2xl p-6 border border-emerald-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6 flex items-center">
                  <Calendar className="h-6 w-6 text-emerald-600 mr-3" />
                  Program Expectations
                </h3>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Bootcamp Duration *
                    </label>
                    <select
                      name="bootcampDuration"
                      value={formData.bootcampDuration}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select duration</option>
                      {durationOptions.map((duration) => (
                        <option key={duration} value={duration}>{duration}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div>
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Mode *
                    </label>
                    <select
                      name="preferredMode"
                      value={formData.preferredMode}
                      onChange={handleInputChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                    >
                      <option value="">Select mode</option>
                      {modeOptions.map((mode) => (
                        <option key={mode} value={mode}>{mode}</option>
                      ))}
                    </select>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-3">
                      Interested Topics *
                    </label>
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                      {topicOptions.map((topic) => (
                        <label key={topic} className="flex items-center space-x-2 cursor-pointer">
                          <input
                            type="checkbox"
                            name="interestedTopics"
                            value={topic}
                            onChange={handleInputChange}
                            className="w-4 h-4 text-emerald-600 border-gray-300 rounded focus:ring-emerald-500"
                          />
                          <span className="text-sm text-gray-700">{topic}</span>
                        </label>
                      ))}
                    </div>
                  </div>
                  
                  <div className="md:col-span-2">
                    <label className="block text-sm font-semibold text-gray-700 mb-2">
                      Preferred Date or Month for Hosting
                    </label>
                    <input
                      type="text"
                      name="preferredDate"
                      value={formData.preferredDate}
                      onChange={handleInputChange}
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-emerald-500 focus:border-transparent transition-all duration-200"
                      placeholder="e.g., March 2024, First week of April, etc."
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
                    <span className="font-semibold">Declaration:</span> I confirm that I'm an authorized representative of the institution and interested in partnering for a bootcamp.
                  </label>
                </div>
              </div>

              {/* Submit Button */}
              <div className="text-center pt-6">
                <button
                  type="submit"
                  className="group inline-flex items-center px-12 py-4 bg-gradient-to-r from-emerald-500 to-cyan-600 text-white rounded-2xl font-bold text-lg hover:from-emerald-400 hover:to-cyan-500 transition-all duration-300 transform hover:scale-105 shadow-xl hover:shadow-emerald-500/25"
                >
                  <Building className="mr-3 h-6 w-6 group-hover:animate-pulse" />
                  Submit Invitation
                  <ArrowRight className="ml-3 h-6 w-6 group-hover:translate-x-1 transition-transform duration-300" />
                </button>
                
                <p className="text-gray-500 text-sm mt-4">
                  Our program manager will connect with you within 24-48 hours
                </p>
              </div>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}