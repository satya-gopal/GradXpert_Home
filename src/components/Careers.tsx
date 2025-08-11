import React, { useState } from 'react';
import {
  Briefcase,
  MapPin,
  Clock,
  Users,
  Heart,
  Zap,
  Target,
  Award,
  Coffee,
  Laptop,
  Globe,
  TrendingUp,
  CheckCircle,
  ArrowRight,
  Search,
  Filter,
  Star,
  Building,
  GraduationCap,
  Lightbulb,
  Shield,
  Rocket,
  Code,
  Palette,
  BarChart,
  MessageSquare,
  Calendar,
  DollarSign,
  Home,
  Plane,
  BookOpen,
  Trophy,
  Send,
  ExternalLink
} from 'lucide-react';

const jobOpenings = [
  {
    id: 1,
    title: "Senior Full Stack Developer",
    department: "Engineering",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "3-5 years",
    skills: ["React", "Node.js", "TypeScript", "MongoDB", "AWS"],
    description: "Build and scale our student-facing platforms and internal tools. Work on cutting-edge EdTech solutions that impact thousands of students.",
    requirements: [
      "3+ years of full-stack development experience",
      "Strong proficiency in React, Node.js, and TypeScript",
      "Experience with cloud platforms (AWS/GCP)",
      "Understanding of EdTech or SaaS products"
    ],
    posted: "2 days ago",
    urgent: true
  },
  {
    id: 2,
    title: "Product Manager - Student Experience",
    department: "Product",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    skills: ["Product Strategy", "User Research", "Analytics", "Figma", "SQL"],
    description: "Drive product strategy for our core student ecosystem. Own the end-to-end student journey from onboarding to career success.",
    requirements: [
      "2+ years of product management experience",
      "Experience in EdTech, SaaS, or consumer products",
      "Strong analytical and user research skills",
      "Excellent communication and stakeholder management"
    ],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 3,
    title: "UX/UI Designer",
    department: "Design",
    location: "Remote",
    type: "Full-time",
    experience: "2-3 years",
    skills: ["Figma", "User Research", "Prototyping", "Design Systems", "HTML/CSS"],
    description: "Design intuitive and engaging experiences for students across our ecosystem. Create design systems that scale across multiple products.",
    requirements: [
      "2+ years of UX/UI design experience",
      "Proficiency in Figma and design tools",
      "Experience with user research and testing",
      "Portfolio showcasing end-to-end design process"
    ],
    posted: "3 days ago",
    urgent: false
  },
  {
    id: 4,
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Hyderabad / Remote",
    type: "Full-time",
    experience: "2-4 years",
    skills: ["Content Strategy", "SEO", "Social Media", "Analytics", "Writing"],
    description: "Lead content strategy to attract and engage students. Create compelling narratives around student success stories and career transformation.",
    requirements: [
      "2+ years of content marketing experience",
      "Strong writing and storytelling skills",
      "Experience with SEO and social media marketing",
      "Understanding of EdTech or career services industry"
    ],
    posted: "5 days ago",
    urgent: false
  },
  {
    id: 5,
    title: "Data Scientist",
    department: "Engineering",
    location: "Hyderabad",
    type: "Full-time",
    experience: "2-4 years",
    skills: ["Python", "Machine Learning", "SQL", "Statistics", "Tableau"],
    description: "Build data-driven insights to improve student outcomes. Develop ML models for personalized learning recommendations and career guidance.",
    requirements: [
      "2+ years of data science experience",
      "Strong proficiency in Python and ML libraries",
      "Experience with statistical analysis and modeling",
      "Knowledge of EdTech metrics and student analytics"
    ],
    posted: "1 week ago",
    urgent: false
  },
  {
    id: 6,
    title: "Business Development Manager",
    department: "Business",
    location: "Hyderabad",
    type: "Full-time",
    experience: "3-5 years",
    skills: ["Sales", "Partnership", "Negotiation", "CRM", "Strategy"],
    description: "Drive partnerships with colleges, companies, and mentors. Expand our ecosystem through strategic alliances and business development.",
    requirements: [
      "3+ years of business development experience",
      "Experience in EdTech, SaaS, or B2B sales",
      "Strong relationship building and negotiation skills",
      "Track record of meeting sales targets"
    ],
    posted: "4 days ago",
    urgent: false
  }
];

const departments = [
  { name: "Engineering", count: 8, icon: Code, color: "from-blue-500 to-indigo-500" },
  { name: "Product", count: 3, icon: Target, color: "from-purple-500 to-pink-500" },
  { name: "Design", count: 2, icon: Palette, color: "from-emerald-500 to-teal-500" },
  { name: "Marketing", count: 4, icon: MessageSquare, color: "from-orange-500 to-red-500" },
  { name: "Business", count: 3, icon: BarChart, color: "from-yellow-500 to-amber-500" },
  { name: "Operations", count: 2, icon: Users, color: "from-cyan-500 to-blue-500" }
];

const benefits = [
  {
    icon: DollarSign,
    title: "Competitive Salary",
    description: "Market-leading compensation with equity options",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Home,
    title: "Remote-First Culture",
    description: "Work from anywhere with flexible hours",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: BookOpen,
    title: "Learning & Development",
    description: "₹50K annual learning budget + conference attendance",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Shield,
    title: "Health & Wellness",
    description: "Premium health insurance for you and family",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Plane,
    title: "Unlimited PTO",
    description: "Take time off when you need it",
    color: "from-cyan-500 to-blue-500"
  },
  {
    icon: Laptop,
    title: "Latest Equipment",
    description: "MacBook Pro + home office setup allowance",
    color: "from-slate-600 to-gray-700"
  },
  {
    icon: Coffee,
    title: "Team Retreats",
    description: "Quarterly team offsites and annual company retreat",
    color: "from-amber-500 to-orange-500"
  },
  {
    icon: Trophy,
    title: "Stock Options",
    description: "Equity participation in company growth",
    color: "from-yellow-500 to-amber-500"
  }
];

const values = [
  {
    icon: Heart,
    title: "Students First",
    description: "Every decision we make prioritizes student success and outcomes",
    color: "from-red-500 to-pink-500"
  },
  {
    icon: Zap,
    title: "Move Fast",
    description: "We iterate quickly, learn from feedback, and ship features that matter",
    color: "from-yellow-500 to-orange-500"
  },
  {
    icon: Users,
    title: "Collaborate Openly",
    description: "We believe in transparency, open communication, and collective problem-solving",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Target,
    title: "Own Your Impact",
    description: "Take ownership of your work and drive meaningful results",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Lightbulb,
    title: "Think Different",
    description: "Challenge conventional wisdom and innovate for better solutions",
    color: "from-emerald-500 to-teal-500"
  },
  {
    icon: TrendingUp,
    title: "Grow Together",
    description: "We invest in each other's growth and celebrate collective wins",
    color: "from-cyan-500 to-blue-500"
  }
];

const hiringProcess = [
  {
    step: 1,
    title: "Application Review",
    description: "We review your application and portfolio within 48 hours",
    duration: "1-2 days"
  },
  {
    step: 2,
    title: "Initial Screening",
    description: "Brief call with our talent team to discuss your background and interests",
    duration: "30 minutes"
  },
  {
    step: 3,
    title: "Technical/Skills Assessment",
    description: "Role-specific evaluation - coding challenge, design task, or case study",
    duration: "1-2 hours"
  },
  {
    step: 4,
    title: "Team Interview",
    description: "Meet with your potential teammates and hiring manager",
    duration: "45 minutes"
  },
  {
    step: 5,
    title: "Final Interview",
    description: "Culture fit and leadership discussion with senior team members",
    duration: "30 minutes"
  },
  {
    step: 6,
    title: "Offer & Onboarding",
    description: "We'll make an offer and help you get started on your first day",
    duration: "1-3 days"
  }
];

const Careers = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDepartment, setSelectedDepartment] = useState('All');
  const [selectedLocation, setSelectedLocation] = useState('All');
  const [selectedJob, setSelectedJob] = useState<number | null>(null);

  const filteredJobs = jobOpenings.filter(job => {
    const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      job.skills.some(skill => skill.toLowerCase().includes(searchTerm.toLowerCase()));
    const matchesDepartment = selectedDepartment === 'All' || job.department === selectedDepartment;
    const matchesLocation = selectedLocation === 'All' || job.location.includes(selectedLocation);

    return matchesSearch && matchesDepartment && matchesLocation;
  });

  const getDepartmentIcon = (department: string) => {
    const dept = departments.find(d => d.name === department);
    return dept ? dept.icon : Briefcase;
  };

  const getDepartmentColor = (department: string) => {
    const dept = departments.find(d => d.name === department);
    return dept ? dept.color : "from-slate-500 to-gray-500";
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50">
      {/* Hero Section */}
      <section className="pt-32 pb-20 relative overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.1),transparent_70%)]"></div>
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.1),transparent_70%)]"></div>
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center">
            <div className="flex items-center justify-center space-x-4 mb-8">
              {/* <div className="relative hidden md:block"> */}
              <Briefcase className="h-12 w-12 text-blue-600 hidden md:block" />
              {/* <div className="absolute -top-1 -right-1 w-4 h-4 bg-gradient-to-r from-emerald-400 to-cyan-400 rounded-full animate-pulse"></div>
              </div> */}
              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 tracking-tight">
                Careers at{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  GradXpert
                </span>
              </h1>
            </div>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Join us in building India's most comprehensive career ecosystem. Help transform millions of student lives through technology, mentorship, and innovation.
            </p>
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg max-w-2xl mx-auto">
              <p className="text-slate-800 font-medium mb-4">
                We're on a mission to bridge the gap between education and employability
              </p>
              <div className="flex items-center justify-center space-x-6 text-sm text-slate-600">
                <div className="flex items-center space-x-2">
                  <Users className="h-4 w-4 text-blue-600" />
                  <span>50+ Team Members</span>
                </div>
                <div className="flex items-center space-x-2">
                  <Globe className="h-4 w-4 text-emerald-600" />
                  <span>Remote-First</span>
                </div>
                <div className="flex items-center space-x-2">
                  <TrendingUp className="h-4 w-4 text-purple-600" />
                  <span>Fast Growing</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open Positions */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex md:items-center md:justify-center space-x-3">
              <Search className="h-8 w-8 text-blue-600" />
              <span>Open Positions</span>
            </h2>
            <p className="text-xl text-slate-700">Find your perfect role and make an impact</p>
          </div>

          {/* Filters */}
          <div className="mb-8">
            <div className="flex flex-col lg:flex-row gap-4 md:items-center md:justify-between">
              {/* Search */}
              <div className="relative w-full lg:flex-1 lg:max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-slate-400" />
                <input
                  type="text"
                  placeholder="Search jobs or skills..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                />
              </div>

              {/* Filters */}
              <div className="flex gap-3">
                <select
                  value={selectedDepartment}
                  onChange={(e) => setSelectedDepartment(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Departments</option>
                  {departments.map(dept => (
                    <option key={dept.name} value={dept.name}>{dept.name}</option>
                  ))}
                </select>

                <select
                  value={selectedLocation}
                  onChange={(e) => setSelectedLocation(e.target.value)}
                  className="px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                >
                  <option value="All">All Locations</option>
                  <option value="Hyderabad">Hyderabad</option>
                  <option value="Remote">Remote</option>
                </select>
              </div>
            </div>
          </div>

          {/* Job Listings */}
          <div className="grid lg:grid-cols-3 gap-8 w-full">
            {/* Jobs List */}
            <div className="w-full lg:col-span-2 space-y-4">
              {filteredJobs.map((job) => {
                const DeptIcon = getDepartmentIcon(job.department);
                return (
                  <div
                    key={job.id}
                    onClick={() => setSelectedJob(job.id)}
                    className={`bg-white/90 backdrop-blur-xl p-4 sm:p-6 rounded-2xl border transition-all duration-300 cursor-pointer hover:shadow-lg hover:-translate-y-1 w-full ${selectedJob === job.id
                        ? 'border-blue-500 shadow-lg ring-2 ring-blue-500/20'
                        : 'border-slate-200 hover:border-blue-300'
                      }`}
                  >
                    <div className="flex flex-col sm:flex-row items-start justify-between gap-4 mb-4">
                      <div className="flex items-start gap-3 w-full">
                        {/* Icon */}
                        <div className={`w-10 h-10 sm:w-12 sm:h-12 bg-gradient-to-r ${getDepartmentColor(job.department)} rounded-xl flex items-center justify-center flex-shrink-0`}>
                          <DeptIcon className="h-5 w-5 sm:h-6 sm:w-6 text-white" />
                        </div>

                        {/* Content */}
                        <div className="flex-1 min-w-0"> {/* Added min-w-0 to prevent overflow */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                            <div className="flex items-center gap-2">
                              <h3 className="text-base sm:text-lg font-bold text-slate-900 truncate">{job.title}</h3>
                              {job.urgent && (
                                <span className="bg-red-100 text-red-700 px-2 py-1 rounded-full text-xs font-medium flex-shrink-0">
                                  Urgent
                                </span>
                              )}
                            </div>
                            <div className="text-right hidden sm:block">
                              <div className="text-sm text-slate-500">{job.posted}</div>
                            </div>
                          </div>

                          {/* Meta info - stack on mobile */}
                          <div className="flex flex-col sm:flex-row sm:items-center sm:gap-4 gap-2 text-sm text-slate-600 mb-2">
                            <div className="flex items-center gap-1">
                              <Building className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{job.department}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <MapPin className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{job.location}</span>
                            </div>
                            <div className="flex items-center gap-1">
                              <Clock className="h-4 w-4 flex-shrink-0" />
                              <span className="truncate">{job.type}</span>
                            </div>
                          </div>

                          <p className="text-slate-700 text-sm mb-3 line-clamp-2">{job.description}</p>

                          <div className="flex flex-wrap gap-2 mb-2 sm:mb-3">
                            {job.skills.slice(0, 3).map((skill, index) => (
                              <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                                {skill}
                              </span>
                            ))}
                            {job.skills.length > 3 && (
                              <span className="text-slate-500 text-xs">+{job.skills.length - 3} more</span>
                            )}
                          </div>
                        </div>
                      </div>

                      {/* Posted date - mobile only */}
                      <div className="text-right sm:hidden w-full">
                        <div className="text-sm text-slate-500">{job.posted}</div>
                        <div className="text-sm font-medium text-slate-700">{job.experience}</div>
                      </div>
                    </div>
                  </div>
                );
              })}

              {filteredJobs.length === 0 && (
                <div className="text-center py-12">
                  <Search className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="text-lg font-medium text-slate-900 mb-2">No jobs found</h3>
                  <p className="text-slate-600">Try adjusting your search criteria</p>
                </div>
              )}
            </div>

            {/* Job Details Sidebar */}
            <div className="lg:col-span-1">
              {selectedJob ? (
                <div className="sticky top-8">
                  {(() => {
                    const job = jobOpenings.find(j => j.id === selectedJob);
                    if (!job) return null;

                    const DeptIcon = getDepartmentIcon(job.department);
                    return (
                      <div className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg">
                        <div className="flex items-center space-x-3 mb-4">
                          <div className={`w-10 h-10 bg-gradient-to-r ${getDepartmentColor(job.department)} rounded-xl flex items-center justify-center`}>
                            <DeptIcon className="h-5 w-5 text-white" />
                          </div>
                          <div>
                            <h3 className="font-bold text-slate-900">{job.title}</h3>
                            <p className="text-sm text-slate-600">{job.department}</p>
                          </div>
                        </div>

                        <div className="space-y-4 mb-6">
                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Requirements</h4>
                            <ul className="space-y-2">
                              {job.requirements.map((req, index) => (
                                <li key={index} className="flex items-start space-x-2 text-sm text-slate-700">
                                  <CheckCircle className="h-4 w-4 text-emerald-500 mt-0.5 flex-shrink-0" />
                                  <span>{req}</span>
                                </li>
                              ))}
                            </ul>
                          </div>

                          <div>
                            <h4 className="font-semibold text-slate-900 mb-2">Skills</h4>
                            <div className="flex flex-wrap gap-2">
                              {job.skills.map((skill, index) => (
                                <span key={index} className="bg-blue-100 text-blue-700 px-2 py-1 rounded-lg text-xs font-medium">
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>
                        </div>

                        <button className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                          <Send className="h-5 w-5" />
                          <span>Apply Now</span>
                        </button>
                      </div>
                    );
                  })()}
                </div>
              ) : (
                <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-200 text-center">
                  <Briefcase className="h-12 w-12 text-slate-400 mx-auto mb-4" />
                  <h3 className="font-semibold text-slate-900 mb-2">Select a Job</h3>
                  <p className="text-slate-600 text-sm">Click on any job listing to view details and apply</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Departments Overview */}
      {/* <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Teams & Departments</h2>
            <p className="text-xl text-slate-700">Explore opportunities across different functions</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2 text-lg">{dept.name}</h3>
                  <p className="text-slate-600 text-sm mb-4">
                    {dept.count} open position{dept.count !== 1 ? 's' : ''}
                  </p>
                  <button 
                    onClick={() => setSelectedDepartment(dept.name)}
                    className="text-blue-600 hover:text-blue-700 font-medium text-sm flex items-center space-x-1 group-hover:translate-x-1 transition-transform duration-300"
                  >
                    <span>View Openings</span>
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}

      {/* Company Values */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-16">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex md:items-center md:justify-center space-x-3">
              <Heart className="h-8 w-8 text-red-500" />
              <span>Our Values</span>
            </h2>
            <p className="text-xl text-slate-700 max-w-3xl mx-auto">The principles that guide everything we do and shape our culture</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div key={index} className="group relative">
                  <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-2 h-full">
                    {/* Icon with gradient background */}
                    <div className="relative mb-6 flex  md:justify-center">
                      <div className={`w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                        <Icon className="h-8 w-8 text-white" />
                      </div>
                      {/* Subtle glow effect */}
                      <div className={`absolute inset-0 w-16 h-16 bg-gradient-to-r ${value.color} rounded-2xl opacity-20 blur-xl group-hover:opacity-30 transition-opacity duration-300`}></div>
                    </div>
                    
                    {/* Content */}
                    <div className="text-left md:text-center">
                      <h3 className="font-bold text-slate-900 mb-4 text-xl group-hover:text-blue-600 transition-colors duration-300">
                        {value.title}
                      </h3>
                      <p className="text-slate-600 leading-relaxed text-sm">
                        {value.description}
                      </p>
                    </div>
                    
                    {/* Decorative element */}
                    <div className="absolute top-4 right-4 w-8 h-8 border border-slate-200 rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                      <div className="absolute inset-1 bg-gradient-to-br from-blue-400 to-purple-400 rounded-full opacity-20"></div>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom accent */}
          <div className="mt-16 text-center">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-100 to-purple-100 px-6 py-3 rounded-full">
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
              <span className="text-slate-700 font-medium">Values that drive our success</span>
              <Star className="h-5 w-5 text-yellow-500 fill-current" />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits & Perks */}
      <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex md:items-center md:justify-center space-x-3">
              <Award className="h-8 w-8 text-purple-600" />
              <span>Benefits & Perks</span>
            </h2>
            <p className="text-xl text-slate-700">We invest in our team's success and well-being</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => {
              const Icon = benefit.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group md:text-center">
                  <div className={`w-12 h-12 bg-gradient-to-r ${benefit.color} rounded-xl flex items-center justify-center md:mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{benefit.title}</h3>
                  <p className="text-slate-600 text-sm">{benefit.description}</p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Hiring Process */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex md:items-center md:justify-center space-x-3">
              <Rocket className="h-8 w-8 text-emerald-600" />
              <span>Our Hiring Process</span>
            </h2>
            <p className="text-xl text-slate-700">Transparent, efficient, and designed to showcase your best self</p>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="space-y-8">
              {hiringProcess.map((step, index) => (
                <div key={index} className="flex items-start space-x-6">
                  <div className="flex-shrink-0">
                    <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-green-500 rounded-full flex items-center justify-center text-white font-bold shadow-lg">
                      {step.step}
                    </div>
                  </div>
                  <div className="flex-1 bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-emerald-300 transition-all duration-300 shadow-lg">
                    <div className="flex items-center justify-between mb-3">
                      <h3 className="font-bold text-slate-900 text-lg">{step.title}</h3>
                      <span className="bg-emerald-100 text-emerald-700 px-3 py-1 rounded-full text-sm font-medium">
                        {step.duration}
                      </span>
                    </div>
                    <p className="text-slate-600">{step.description}</p>
                  </div>
                  {index < hiringProcess.length  && (
                    <div className="absolute mt-12 w-0.5 h-8 bg-gradient-to-b from-emerald-300 to-green-300"></div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Life at GradXpert */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6">Life at GradXpert</h2>
            <p className="text-xl text-slate-700">Get a glimpse into our culture and work environment</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              {
                image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Collaborative Workspace",
                description: "Open, modern office designed for creativity and collaboration"
              },
              {
                image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Team Learning Sessions",
                description: "Regular knowledge sharing and skill development workshops"
              },
              {
                image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Innovation Time",
                description: "20% time for personal projects and experimental ideas"
              },
              {
                image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Team Celebrations",
                description: "Regular team events, celebrations, and milestone recognition"
              },
              {
                image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Remote Flexibility",
                description: "Work from anywhere with our remote-first culture"
              },
              {
                image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
                title: "Mentorship Culture",
                description: "Learn from experienced professionals and industry experts"
              }
            ].map((item, index) => (
              <div key={index} className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                {/* <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm opacity-90">{item.description}</p>
                </div> */}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">Ready to Join Our Mission?</h2>
            <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
              Help us transform millions of student lives and build the future of career education in India
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <button className="bg-white text-blue-600 px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <Search className="h-5 w-5" />
                <span>Browse Open Positions</span>
              </button>
              <button className="border-2 border-white text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2">
                <ExternalLink className="h-5 w-5" />
                <span>Learn About Our Culture</span>
              </button>
            </div>
            
            <div className="text-white/80 text-sm">
              <p>Questions about working at GradXpert?</p>
              <p>Email us at <a href="mailto:careers@gradxpert.in" className="underline hover:text-white">careers@gradxpert.in</a></p>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default Careers;