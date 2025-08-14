import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft, Play, Star, Clock, Users, Globe, Calendar, CheckCircle,
  Award, Briefcase, Code, Database, Smartphone, Cloud, Download,
  Phone, Mail, Shield, ChevronDown, ChevronUp, ExternalLink,
  PlayCircle, User, MapPin, Trophy, Target, Building2, Zap,
  BookOpen, Video, FileText, MessageSquare, Heart, Share2
} from 'lucide-react';

export default function CourseDetails() {
  const [activeTab, setActiveTab] = useState('overview');
  const [expandedModules, setExpandedModules] = useState<number[]>([]);
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleModule = (index: number) => {
    setExpandedModules(prev =>
      prev.includes(index)
        ? prev.filter(i => i !== index)
        : [...prev, index]
    );
  };

  const courseData = {
    title: "Full Stack Web Development Mastery",
    subtitle: "Build Production-Ready Web Applications from Scratch",
    description: "Master modern web development with React, Node.js, and MongoDB. Build 5 real-world projects and get job-ready with our comprehensive curriculum designed by IIIT alumni.",
    image: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=800&h=450&fit=crop",
    instructor: {
      name: "Arjun Reddy",
      title: "Senior Full Stack Developer",
      company: "Microsoft",
      experience: "8+ years",
      students: "15,000+",
      courses: "12",
      rating: 4.9,
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&h=150&fit=crop&crop=face",
      bio: "Arjun is a Senior Full Stack Developer at Microsoft with 8+ years of experience building scalable web applications. He's an IIIT Hyderabad alumnus and has mentored over 15,000 students.",
      achievements: [
        "Senior Developer at Microsoft",
        "IIIT Hyderabad Alumni",
        "15,000+ Students Mentored",
        "Published Author on Web Development"
      ]
    },
    stats: {
      rating: 4.9,
      reviews: 2847,
      students: 15420,
      duration: "12 weeks",
      level: "Beginner to Advanced",
      language: "English + Telugu",
      lastUpdated: "January 2024"
    },
    pricing: {
      original: 8999,
      current: 4999,
      discount: 44,
      nextBatch: "March 25, 2024",
      // installments: "₹1,666/month for 3 months"
    }
  };

  const outcomes = [
    {
      icon: Code,
      title: "Build Full Stack Applications",
      description: "Create complete web applications with React frontend and Node.js backend",
      gradient: "from-blue-500 to-cyan-500"
    },
    {
      icon: Database,
      title: "Master Modern Technologies",
      description: "Learn React, Node.js, MongoDB, Express.js, and modern development tools",
      gradient: "from-emerald-500 to-teal-500"
    },
    {
      icon: Briefcase,
      title: "Get Job-Ready Skills",
      description: "Build a professional portfolio with 5 real-world projects",
      gradient: "from-purple-500 to-pink-500"
    },
    {
      icon: Award,
      title: "Industry Certification",
      description: "Receive a verified certificate recognized by top tech companies",
      gradient: "from-orange-500 to-red-500"
    }
  ];

  const companies = [
    { name: 'Google', logo: '🔍' },
    { name: 'Microsoft', logo: '🪟' },
    { name: 'Amazon', logo: '📦' },
    { name: 'Netflix', logo: '🎬' },
    { name: 'Meta', logo: '👥' },
    { name: 'Apple', logo: '🍎' },
    { name: 'Tesla', logo: '⚡' },
    { name: 'Spotify', logo: '🎵' }
  ];

  const curriculum = [
    {
      title: "Web Development Fundamentals",
      duration: "Week 1-2",
      lessons: 12,
      thumbnail: "https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=300&h=200&fit=crop",
      topics: [
        "HTML5 & Semantic Markup",
        "CSS3 & Flexbox/Grid",
        "JavaScript ES6+ Fundamentals",
        "DOM Manipulation & Events",
        "Responsive Web Design",
        "Git & Version Control"
      ]
    },
    {
      title: "React.js Mastery",
      duration: "Week 3-5",
      lessons: 18,
      thumbnail: "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=300&h=200&fit=crop",
      topics: [
        "React Components & JSX",
        "State Management & Hooks",
        "React Router & Navigation",
        "Context API & Redux",
        "Form Handling & Validation",
        "Performance Optimization"
      ]
    },
    {
      title: "Backend Development with Node.js",
      duration: "Week 6-8",
      lessons: 15,
      thumbnail: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=300&h=200&fit=crop",
      topics: [
        "Node.js & Express.js Setup",
        "RESTful API Development",
        "Authentication & Authorization",
        "Middleware & Error Handling",
        "File Upload & Processing",
        "API Security Best Practices"
      ]
    },
    {
      title: "Database Design & MongoDB",
      duration: "Week 9-10",
      lessons: 10,
      thumbnail: "https://images.unsplash.com/photo-1544383835-bda2bc66a55d?w=300&h=200&fit=crop",
      topics: [
        "MongoDB Fundamentals",
        "Mongoose ODM",
        "Database Schema Design",
        "CRUD Operations",
        "Aggregation Pipeline",
        "Database Optimization"
      ]
    },
    {
      title: "Full Stack Integration",
      duration: "Week 11",
      lessons: 8,
      thumbnail: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=300&h=200&fit=crop",
      topics: [
        "Frontend-Backend Integration",
        "State Management Patterns",
        "Real-time Features with Socket.io",
        "Testing & Debugging",
        "Performance Optimization",
        "Code Review & Best Practices"
      ]
    },
    {
      title: "Deployment & DevOps",
      duration: "Week 12",
      lessons: 6,
      thumbnail: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=300&h=200&fit=crop",
      topics: [
        "Cloud Deployment (AWS/Heroku)",
        "CI/CD Pipeline Setup",
        "Environment Configuration",
        "Monitoring & Logging",
        "Domain & SSL Setup",
        "Production Best Practices"
      ]
    }
  ];

  const projects = [
    {
      title: "E-Commerce Platform",
      description: "Full-featured online store with payment integration",
      tech: ["React", "Node.js", "MongoDB", "Stripe"],
      image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=400&h=250&fit=crop"
    },
    {
      title: "Social Media Dashboard",
      description: "Real-time social media management platform",
      tech: ["React", "Express", "Socket.io", "JWT"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "Task Management App",
      description: "Collaborative project management tool",
      tech: ["React", "Node.js", "MongoDB", "Redux"],
      image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=400&h=250&fit=crop"
    },
    {
      title: "Real Estate Platform",
      description: "Property listing and management system",
      tech: ["React", "Express", "MongoDB", "Cloudinary"],
      image: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?w=400&h=250&fit=crop"
    },
    {
      title: "Learning Management System",
      description: "Complete LMS with video streaming",
      tech: ["React", "Node.js", "MongoDB", "AWS S3"],
      image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop"
    }
  ];

  const reviews = [
    {
      name: "Priya Sharma",
      role: "Software Engineer at TCS",
      rating: 5,
      comment: "This course completely transformed my career. The projects are industry-relevant and the mentorship is exceptional. Got placed at TCS with 8.5 LPA package!",
      image: "https://images.unsplash.com/photo-1494790108755-2616b25aa556?w=60&h=60&fit=crop&crop=face",
      verified: true,
      helpful: 45,
      date: "2 weeks ago"
    },
    {
      name: "Rajesh Kumar",
      role: "Full Stack Developer at Infosys",
      rating: 5,
      comment: "Best investment I made for my career. The curriculum is up-to-date and the instructor explains complex concepts very clearly. Highly recommended!",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=60&h=60&fit=crop&crop=face",
      verified: true,
      helpful: 38,
      date: "1 month ago"
    },
    {
      name: "Sneha Reddy",
      role: "Frontend Developer at Wipro",
      rating: 5,
      comment: "The hands-on approach and real projects made all the difference. I built a strong portfolio and landed my dream job. Thank you I/O School!",
      image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=60&h=60&fit=crop&crop=face",
      verified: true,
      helpful: 52,
      date: "3 weeks ago"
    }
  ];

  /*  const videoTestimonials = [
      {
        name: "Karthik Sharma",
        role: "Software Engineer at Amazon",
        thumbnail: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=300&h=200&fit=crop&crop=face",
        duration: "2:15"
      },
      {
        name: "Anitha Rao",
        role: "Full Stack Developer at Microsoft",
        thumbnail: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&h=200&fit=crop&crop=face",
        duration: "3:42"
       }
    ];*/

  const faqs = [
    {
      question: "Is this course suitable for complete beginners?",
      answer: "Yes! This course is designed for complete beginners. We start with the basics of HTML, CSS, and JavaScript before moving to advanced topics. No prior programming experience is required."
    },
    {
      question: "What kind of support do I get during the course?",
      answer: "You get 24/7 support through our dedicated Slack community, weekly live doubt-clearing sessions, 1-on-1 mentorship calls, and direct access to instructors for any queries."
    },
    {
      question: "Will I get placement assistance after completing the course?",
      answer: "Absolutely! We provide comprehensive placement assistance including resume building, mock interviews, job referrals, and access to our exclusive job portal with 500+ partner companies."
    },
    {
      question: "Can I access the course content after completion?",
      answer: "Yes, you get lifetime access to all course materials, including future updates. You can revisit any topic anytime and stay updated with the latest industry trends."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 30-day money-back guarantee. If you're not completely satisfied within the first 30 days, we'll refund your full payment, no questions asked."
    },
    {
      question: "Are there any prerequisites for this course?",
      answer: "No specific prerequisites! Just bring your enthusiasm to learn. A basic understanding of computers and internet usage is sufficient to get started."
    }
  ];

  /* const announcements = [
     {
       title: "New Module Added: Advanced React Patterns",
       date: "2 days ago",
       content: "We've added a new module covering advanced React patterns including Render Props, Higher-Order Components, and Custom Hooks.",
       type: "update"
     },
     {
       title: "Live Workshop: Building Scalable APIs",
       date: "1 week ago",
       content: "Join us for a special live workshop on building scalable REST APIs with Node.js and Express. Scheduled for March 20th, 7 PM IST.",
       type: "event"
     },
     {
       title: "Course Materials Updated",
       date: "2 weeks ago",
       content: "All course materials have been updated to include the latest versions of React 18 and Node.js 20. Download the updated resources from your dashboard.",
       type: "update"
     }
   ];*/

  const renderTabContent = () => {
    switch (activeTab) {
      case 'overview':
        return (
          <div className="space-y-8">
            {/* What You'll Learn */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">What You'll Learn</h3>
              <div className="grid sm:grid-cols-2 gap-4">
                {[
                  "Build responsive web applications with React.js",
                  "Create RESTful APIs with Node.js and Express",
                  "Design and implement MongoDB databases",
                  "Implement user authentication and authorization",
                  "Deploy applications to cloud platforms",
                  "Use modern development tools and workflows",
                  "Apply best practices for code organization",
                  "Optimize applications for performance"
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-5 w-5 text-emerald-500 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Target Audience */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Who This Course Is For</h3>
              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {[
                  {
                    icon: User,
                    title: "Complete Beginners",
                    description: "No prior programming experience required"
                  },
                  {
                    icon: Code,
                    title: "Frontend Developers",
                    description: "Looking to learn backend development"
                  },
                  {
                    icon: Briefcase,
                    title: "Career Switchers",
                    description: "Transitioning to tech industry"
                  }
                ].map((audience, index) => (
                  <div
                    key={index}
                    className="bg-gray-50 rounded-xl p-6 hover:bg-gray-100 transition-colors duration-300"
                  >
                    <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mb-4">
                      <audience.icon className="h-6 w-6 text-white" />
                    </div>
                    <h4 className="font-semibold text-gray-900 mb-2">{audience.title}</h4>
                    <p className="text-gray-600 text-sm">{audience.description}</p>
                  </div>
                ))}
              </div>

            </div>

            {/* Requirements */}
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Requirements</h3>
              <div className="bg-blue-50 rounded-xl p-6">
                <div className="space-y-3">
                  {[
                    "A computer with internet connection",
                    "Basic computer literacy",
                    "Enthusiasm to learn and practice",
                    "No prior programming experience needed"
                  ].map((req, index) => (
                    <div key={index} className="flex items-center space-x-3">
                      <CheckCircle className="h-5 w-5 text-blue-500" />
                      <span className="text-gray-700">{req}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        );

      case 'curriculum':
        return (
          <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
              <div>
                <h3 className="text-2xl font-bold text-gray-900">Course Curriculum</h3>
                <p className="text-gray-600 mt-2">12 weeks • 69 lessons • 45+ hours of content</p>
              </div>
              <button className="inline-flex items-center px-4 py-2 bg-blue-50 text-blue-600 rounded-lg hover:bg-blue-100 transition-colors duration-300">
                <Download className="h-4 w-4 mr-2" />
                Download Syllabus
              </button>
            </div>

            {curriculum.map((module, index) => (
              <div key={index} className="border border-gray-200 rounded-xl overflow-hidden hover:shadow-lg transition-all duration-300">
                <button
                  onClick={() => toggleModule(index)}
                  className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                >
                  <div className="flex items-center justify-between">
                    <div className="flex items-center space-x-4">
                      <img
                        src={module.thumbnail}
                        alt={module.title}
                        className="w-16 h-16 sm:w-20 sm:h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h4 className="text-lg font-semibold text-gray-900 mb-1">{module.title}</h4>
                        <div className="flex flex-col sm:flex-row sm:items-center gap-2 sm:gap-4 text-sm text-gray-600">
                          <span className="flex items-center">
                            <Clock className="h-4 w-4 mr-1" />
                            {module.duration}
                          </span>
                          <span className="flex items-center">
                            <PlayCircle className="h-4 w-4 mr-1" />
                            {module.lessons} lessons
                          </span>
                        </div>
                      </div>
                    </div>
                    {expandedModules.includes(index) ? (
                      <ChevronUp className="h-5 w-5 text-gray-400" />
                    ) : (
                      <ChevronDown className="h-5 w-5 text-gray-400" />
                    )}
                  </div>
                </button>

                {expandedModules.includes(index) && (
                  <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                    <div className="pt-4 space-y-3">
                      {module.topics.map((topic, topicIndex) => (
                        <div key={topicIndex} className="flex items-center space-x-3 py-2">
                          <div className="w-6 h-6 bg-blue-100 rounded-full flex items-center justify-center flex-shrink-0">
                            <span className="text-xs font-medium text-blue-600">{topicIndex + 1}</span>
                          </div>
                          <span className="text-gray-700">{topic}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        );

      case 'projects':
        return (
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Real-World Projects</h3>
              <p className="text-gray-600 mb-8">Build 5 production-ready projects that you can showcase in your portfolio</p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div key={index} className="group bg-white rounded-xl border border-gray-200 overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-[1.02]">
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    <div className="absolute bottom-4 left-4">
                      <div className="flex space-x-2">
                        {project.tech.slice(0, 2).map((tech, techIndex) => (
                          <span key={techIndex} className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                            {tech}
                          </span>
                        ))}
                        {project.tech.length > 2 && (
                          <span className="px-2 py-1 bg-white/20 backdrop-blur-sm text-white text-xs rounded-full">
                            +{project.tech.length - 2}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>
                  <div className="p-6">
                    <h4 className="text-lg font-semibold text-gray-900 mb-2">{project.title}</h4>
                    <p className="text-gray-600 text-sm mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.tech.map((tech, techIndex) => (
                        <span key={techIndex} className="px-2 py-1 bg-blue-50 text-blue-600 text-xs rounded-lg">
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        );

      case 'instructor':
        return (
          <div className="space-y-8">
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-6">
                <img
                  src={courseData.instructor.image}
                  alt={courseData.instructor.name}
                  className="w-24 h-24 sm:w-32 sm:h-32 rounded-2xl object-cover"
                />
                <div className="flex-1">
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">{courseData.instructor.name}</h3>
                  <p className="text-lg text-blue-600 font-medium mb-2">{courseData.instructor.title}</p>
                  <p className="text-gray-600 mb-4">{courseData.instructor.bio}</p>

                  <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseData.instructor.rating}</div>
                      <div className="text-sm text-gray-600">Rating</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseData.instructor.students}</div>
                      <div className="text-sm text-gray-600">Students</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseData.instructor.courses}</div>
                      <div className="text-sm text-gray-600">Courses</div>
                    </div>
                    <div className="text-center">
                      <div className="text-2xl font-bold text-gray-900">{courseData.instructor.experience}</div>
                      <div className="text-sm text-gray-600">Experience</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-4">Achievements & Credentials</h4>
              <div className="grid sm:grid-cols-2 gap-4">
                {courseData.instructor.achievements.map((achievement, index) => (
                  <div key={index} className="flex items-center space-x-3 p-4 bg-gray-50 rounded-lg">
                    <Award className="h-5 w-5 text-blue-500 flex-shrink-0" />
                    <span className="text-gray-700">{achievement}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'reviews':
        return (
          <div className="space-y-8">
            {/* Overall Rating */}
            <div className="bg-gradient-to-r from-yellow-50 to-orange-50 rounded-2xl p-6 sm:p-8">
              <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-8">
                <div className="text-center">
                  <div className="text-5xl font-bold text-gray-900 mb-2">{courseData.stats.rating}</div>
                  <div className="flex justify-center mb-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <Star key={star} className="h-6 w-6 text-yellow-400 fill-current" />
                    ))}
                  </div>
                  <div className="text-gray-600">{courseData.stats.reviews.toLocaleString()} reviews</div>
                </div>
                <div className="flex-1">
                  <div className="space-y-2">
                    {[5, 4, 3, 2, 1].map((rating) => (
                      <div key={rating} className="flex items-center space-x-3">
                        <span className="text-sm text-gray-600 w-8">{rating}★</span>
                        <div className="flex-1 bg-gray-200 rounded-full h-2">
                          <div
                            className="bg-yellow-400 h-2 rounded-full"
                            style={{ width: rating === 5 ? '85%' : rating === 4 ? '12%' : '3%' }}
                          ></div>
                        </div>
                        <span className="text-sm text-gray-600 w-8">
                          {rating === 5 ? '85%' : rating === 4 ? '12%' : '3%'}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Video Testimonials */}
            {/* <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Video Testimonials</h4>
              <div className="grid sm:grid-cols-2 gap-6">
                {videoTestimonials.map((testimonial, index) => (
                  <div key={index} className="group relative bg-gray-100 rounded-xl overflow-hidden cursor-pointer hover:shadow-lg transition-all duration-300">
                    <div className="relative h-48">
                      <img
                        src={testimonial.thumbnail}
                        alt={testimonial.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-black/40 group-hover:bg-black/30 transition-colors duration-300"></div>
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                          <Play className="h-8 w-8 text-white ml-1" />
                        </div>
                      </div>
                      <div className="absolute bottom-4 right-4 bg-black/70 text-white px-2 py-1 rounded text-sm">
                        {testimonial.duration}
                      </div>
                    </div>
                    <div className="p-4">
                      <h5 className="font-semibold text-gray-900">{testimonial.name}</h5>
                      <p className="text-sm text-gray-600">{testimonial.role}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div> */}

            {/* Written Reviews */}
            <div>
              <h4 className="text-xl font-semibold text-gray-900 mb-6">Student Reviews</h4>
              <div className="space-y-6">
                {reviews.map((review, index) => (
                  <div key={index} className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-lg transition-shadow duration-300">
                    <div className="flex items-start space-x-4">
                      <img
                        src={review.image}
                        alt={review.name}
                        className="w-12 h-12 rounded-full object-cover flex-shrink-0"
                      />
                      <div className="flex-1">
                        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                          <div>
                            <div className="flex items-center space-x-2">
                              <h5 className="font-semibold text-gray-900">{review.name}</h5>
                              {review.verified && (
                                <CheckCircle className="h-4 w-4 text-green-500" />
                              )}
                            </div>
                            <p className="text-sm text-gray-600">{review.role}</p>
                          </div>
                          <div className="flex items-center space-x-2">
                            <div className="flex">
                              {[1, 2, 3, 4, 5].map((star) => (
                                <Star key={star} className="h-4 w-4 text-yellow-400 fill-current" />
                              ))}
                            </div>
                            <span className="text-sm text-gray-500">{review.date}</span>
                          </div>
                        </div>
                        <p className="text-gray-700 mb-4 leading-relaxed">{review.comment}</p>
                        <div className="flex items-center space-x-4 text-sm text-gray-500">
                          <button className="flex items-center space-x-1 hover:text-blue-600 transition-colors duration-300">
                            <span>👍</span>
                            <span>Helpful ({review.helpful})</span>
                          </button>
                          <button className="hover:text-blue-600 transition-colors duration-300">Reply</button>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        );

      case 'faq':
        return (
          <div className="space-y-6">
            <div className="text-center mb-8">
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h3>
              <p className="text-gray-600">Got questions? We've got answers!</p>
            </div>

            <div className="space-y-4">
              {faqs.map((faq, index) => (
                <div key={index} className="border border-gray-200 rounded-xl overflow-hidden">
                  <button
                    onClick={() => toggleModule(index + 100)} // Using different range to avoid conflicts
                    className="w-full p-6 text-left hover:bg-gray-50 transition-colors duration-300"
                  >
                    <div className="flex items-center justify-between">
                      <h4 className="text-lg font-semibold text-gray-900 pr-4">{faq.question}</h4>
                      {expandedModules.includes(index + 100) ? (
                        <ChevronUp className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      ) : (
                        <ChevronDown className="h-5 w-5 text-gray-400 flex-shrink-0" />
                      )}
                    </div>
                  </button>

                  {expandedModules.includes(index + 100) && (
                    <div className="px-6 pb-6 border-t border-gray-100 bg-gray-50">
                      <p className="pt-4 text-gray-700 leading-relaxed">{faq.answer}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>

            <div className="text-center mt-8 p-6 bg-blue-50 rounded-xl">
              <h4 className="text-lg font-semibold text-gray-900 mb-2">Still have questions?</h4>
              <p className="text-gray-600 mb-4">Our support team is here to help you 24/7</p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <button className="inline-flex items-center px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors duration-300">
                  <MessageSquare className="h-4 w-4 mr-2" />
                  Live Chat
                </button>
                <button className="inline-flex items-center px-4 py-2 border border-blue-600 text-blue-600 rounded-lg hover:bg-blue-50 transition-colors duration-300">
                  <Mail className="h-4 w-4 mr-2" />
                  Email Support
                </button>
              </div>
            </div>
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Hero Section */}
<section 
  id="ecosystem" 
  className="section-padding bg-gradient-to-br from-blue-50 via-purple-50 to-pink-50 relative overflow-hidden"
>
  {/* Light background gradients */}
  <div className="absolute inset-0">
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_20%,rgba(59,130,246,0.12),transparent_60%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_30%,rgba(147,51,234,0.12),transparent_60%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_80%,rgba(236,72,153,0.10),transparent_60%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_10%_60%,rgba(16,185,129,0.10),transparent_60%)]"></div>
    <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_70%,rgba(251,146,60,0.10),transparent_60%)]"></div>
  </div>

  {/* Floating elements */}
  <div className="absolute top-20 left-20 w-40 h-40 bg-gradient-to-r from-blue-300/25 to-purple-300/25 rounded-full blur-3xl animate-pulse"></div>
  <div className="absolute bottom-20 right-20 w-32 h-32 bg-gradient-to-r from-pink-300/25 to-orange-300/25 rounded-full blur-3xl animate-pulse delay-1000"></div>
  <div className="absolute top-1/2 left-10 w-24 h-24 bg-gradient-to-r from-emerald-300/20 to-teal-300/20 rounded-full blur-2xl animate-pulse delay-500"></div>
  <div className="absolute top-1/3 right-10 w-36 h-36 bg-gradient-to-r from-amber-300/20 to-yellow-300/20 rounded-full blur-3xl animate-pulse delay-2000"></div>

  {/* Animated particles */}
  <div className="absolute inset-0 overflow-hidden">
    <div className="absolute top-1/4 left-1/4 w-3 h-3 bg-blue-400/70 rounded-full animate-ping"></div>
    <div className="absolute top-3/4 right-1/4 w-2 h-2 bg-purple-400/70 rounded-full animate-pulse"></div>
    <div className="absolute top-1/2 left-3/4 w-4 h-4 bg-pink-400/70 rounded-full animate-bounce"></div>
    <div className="absolute top-1/3 right-1/3 w-2 h-2 bg-emerald-400/70 rounded-full animate-ping"></div>
    <div className="absolute bottom-1/4 left-1/3 w-3 h-3 bg-orange-400/70 rounded-full animate-pulse"></div>
  </div>

  {/* Content */}
  <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-20">
    {/* Back Button */}
    <div className="mb-8">
      <Link
        to="/explore"
        className="inline-flex items-center text-slate-600 hover:text-slate-900 transition-colors duration-300"
      >
        <ArrowLeft className="h-5 w-5 mr-2" />
        <span>Back to Courses</span>
      </Link>
    </div>

    <div className="grid lg:grid-cols-2 gap-8 lg:gap-12 items-center">
      {/* Left Content */}
      <div className="space-y-6">
        {/* Course Badge */}
        <div className="inline-flex items-center space-x-2 bg-white/20 backdrop-blur-sm border border-white/30 px-4 py-2 rounded-full shadow-sm">
          <div className="w-2 h-2 bg-red-400 rounded-full animate-pulse"></div>
          <span className="text-sm font-medium text-slate-800">Live Course</span>
        </div>

        <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold leading-tight text-slate-900">
          {courseData.title}
        </h1>

        <p className="text-lg sm:text-xl text-slate-700 leading-relaxed">
          {courseData.subtitle}
        </p>

        <p className="text-slate-600 leading-relaxed">
          {courseData.description}
        </p>

        {/* Stats */}
        <div className="flex flex-wrap gap-4 sm:gap-6">
          {/* Rating */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Star className="h-5 w-5 text-yellow-400 fill-current" />
            </div>
            <div>
              <div className="font-bold text-slate-800">{courseData.stats.rating}</div>
              <div className="text-sm text-slate-600">({courseData.stats.reviews.toLocaleString()} reviews)</div>
            </div>
          </div>

          {/* Students */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Users className="h-5 w-5 text-cyan-500" />
            </div>
            <div>
              <div className="font-bold text-slate-800">{courseData.stats.students.toLocaleString()}+</div>
              <div className="text-sm text-slate-600">Students</div>
            </div>
          </div>

          {/* Duration */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-white/20 backdrop-blur-sm rounded-lg flex items-center justify-center">
              <Clock className="h-5 w-5 text-emerald-500" />
            </div>
            <div>
              <div className="font-bold text-slate-800">{courseData.stats.duration}</div>
              <div className="text-sm text-slate-600">Duration</div>
            </div>
          </div>
        </div>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="group flex items-center justify-center px-8 py-4 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all duration-300 transform hover:scale-105 shadow-lg">
            <span>Enroll Now - ₹{courseData.pricing.current.toLocaleString()}</span>
          </button>

          <button className="group flex items-center justify-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/20 text-slate-900 rounded-xl font-semibold hover:bg-white/30 transition-all duration-300">
            <Play className="mr-2 h-5 w-5" />
            Watch Preview
          </button>
        </div>

        {/* Next Batch Info */}
        <div className="inline-flex items-center space-x-2 bg-emerald-500/15 backdrop-blur-sm border border-emerald-400/20 px-4 py-2 rounded-lg">
          <Calendar className="h-4 w-4 text-emerald-500" />
          <span className="text-sm text-slate-800">
            Next batch starts: {courseData.pricing.nextBatch}
          </span>
        </div>
      </div>

      {/* Right Content */}
      <div className="relative">
        <div className="relative bg-white/20 backdrop-blur-sm rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
          <div className="aspect-video relative">
            <img
              src={courseData.image}
              alt={courseData.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

            {/* Play Button */}
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="w-20 h-20 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/30">
                <Play className="h-10 w-10 text-white ml-1" />
              </button>
            </div>

            {/* Duration Badge */}
            <div className="absolute bottom-4 right-4 bg-black/70 text-white px-3 py-1 rounded-full text-sm">
              Preview: 3:45
            </div>
          </div>
        </div>

        {/* Floating Discount Badge */}
        <div className="absolute -top-4 -right-4 bg-gradient-to-r from-pink-500 to-red-500 text-white px-4 py-2 rounded-xl font-bold shadow-lg animate-bounce">
          {courseData.pricing.discount}% OFF
        </div>
      </div>
    </div>
  </div>
</section>


      {/* Main Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Sticky Navigation */}
            <div className={`bg-white rounded-xl border border-gray-200 transition-all duration-300 ${isSticky ? 'sticky top-4 z-40 shadow-lg' : 'shadow-sm'
              }`}>
              <div className="overflow-x-auto">
                <nav className="flex space-x-1 p-2 min-w-max">
                  {[
                    { id: 'overview', label: 'Overview', icon: BookOpen },
                    { id: 'curriculum', label: 'Curriculum', icon: Video },
                    { id: 'projects', label: 'Projects', icon: Code },
                    { id: 'instructor', label: 'Instructor', icon: User },
                    { id: 'reviews', label: 'Reviews', icon: Star },
                    { id: 'faq', label: 'FAQ', icon: MessageSquare }
                  ].map((tab) => (
                    <button
                      key={tab.id}
                      onClick={() => setActiveTab(tab.id)}
                      className={`flex items-center space-x-2 px-4 py-3 rounded-lg font-medium transition-all duration-300 whitespace-nowrap ${activeTab === tab.id
                        ? 'bg-blue-600 text-white shadow-lg'
                        : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900'
                        }`}
                    >
                      <tab.icon className="h-4 w-4" />
                      <span className="hidden sm:inline">{tab.label}</span>
                    </button>
                  ))}
                </nav>
              </div>
            </div>

            {/* Tab Content */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              {renderTabContent()}
            </div>


            {/* Announcements */}
            {/* <div className="bg-white rounded-xl border border-gray-200 p-6 sm:p-8 shadow-sm">
              <h3 className="text-2xl font-bold text-gray-900 mb-6">Latest Announcements</h3>
              <div className="space-y-4">
                {announcements.map((announcement, index) => (
                  <div key={index} className="border-l-4 border-blue-500 bg-blue-50 p-4 rounded-r-lg">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-2">
                      <h4 className="font-semibold text-gray-900">{announcement.title}</h4>
                      <span className="text-sm text-gray-500">{announcement.date}</span>
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed">{announcement.content}</p>
                  </div>
                ))}
              </div>
            </div> */}
          </div>


          {/* Sidebar */}
          <div className="space-y-6">
            {/* Pricing Card */}
            <div className="bg-white rounded-xl border border-gray-200 p-6 shadow-sm sticky top-4">
              <div className="relative mb-6">
                <img
                  src={courseData.image}
                  alt={courseData.title}
                  className="w-full h-48 object-cover rounded-lg"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent rounded-lg"></div>
                <div className="absolute inset-0 flex items-center justify-center">
                  <button className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-full flex items-center justify-center hover:scale-110 transition-transform duration-300 border border-white/30">
                    <Play className="h-8 w-8 text-white ml-1" />
                  </button>
                </div>
              </div>

              <div className="text-center mb-6">
                <div className="flex items-center justify-center space-x-2 mb-2">
                  <span className="text-3xl font-bold text-gray-900">₹{courseData.pricing.current.toLocaleString()}</span>
                  <span className="text-lg text-gray-500 line-through">₹{courseData.pricing.original.toLocaleString()}</span>
                </div>
                <div className="text-sm text-emerald-600 font-medium mb-2">
                  Save ₹{(courseData.pricing.original - courseData.pricing.current).toLocaleString()} ({courseData.pricing.discount}% off)
                </div>
                {/* <div className="text-sm text-gray-600">
                  Or pay {courseData.pricing.installments}
                </div> */}
              </div>

              <div className="space-y-3 mb-6">
                <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 px-6 rounded-xl font-bold hover:from-blue-700 hover:to-purple-700 transition-all duration-300 transform hover:scale-105 shadow-lg">
                  Enroll Now
                </button>

                <button className="w-full border border-gray-300 text-gray-700 py-3 px-6 rounded-xl font-medium hover:bg-gray-50 transition-colors duration-300 flex items-center justify-center">
                  <Heart className="h-4 w-4 mr-2" />
                  Add to Wishlist
                </button>
              </div>

              {/* Course Info */}
              <div className="space-y-3 mb-6 text-sm">
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Duration:</span>
                  <span className="font-medium">{courseData.stats.duration}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Level:</span>
                  <span className="font-medium">{courseData.stats.level}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Language:</span>
                  <span className="font-medium">{courseData.stats.language}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="text-gray-600">Last Updated:</span>
                  <span className="font-medium">{courseData.stats.lastUpdated}</span>
                </div>
              </div>

              {/* Features */}
              <div className="space-y-2 mb-6">
                {[
                  "Lifetime access to course materials",
                  "5 real-world projects",
                  "Certificate of completion",
                  "24/7 community support",
                  "Job placement assistance",
                  "30-day money-back guarantee"
                ].map((feature, index) => (
                  <div key={index} className="flex items-center space-x-2 text-sm">
                    <CheckCircle className="h-4 w-4 text-emerald-500 flex-shrink-0" />
                    <span className="text-gray-700">{feature}</span>
                  </div>
                ))}
              </div>

              {/* Share */}
              <div className="border-t border-gray-200 pt-4">
                <div className="flex items-center justify-between">
                  <span className="text-sm text-gray-600">Share this course:</span>
                  <div className="flex space-x-2">
                    <button className="w-8 h-8 bg-blue-100 text-blue-600 rounded-full flex items-center justify-center hover:bg-blue-200 transition-colors duration-300">
                      <Share2 className="h-4 w-4" />
                    </button>
                    <button className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center hover:bg-green-200 transition-colors duration-300">
                      <MessageSquare className="h-4 w-4" />
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Contact Support */}
            <div className="bg-gradient-to-r from-blue-50 to-cyan-50 rounded-xl p-6 border border-blue-200">
              <h4 className="font-semibold text-gray-900 mb-4">Need Help?</h4>
              <div className="space-y-3">
                <div className="flex items-center space-x-3">
                  <Phone className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">+91 9876543210</span>
                </div>
                <div className="flex items-center space-x-3">
                  <Mail className="h-4 w-4 text-blue-600" />
                  <span className="text-sm text-gray-700">support@ioschool.in</span>
                </div>
              </div>
              <button className="w-full mt-4 bg-blue-600 text-white py-2 px-4 rounded-lg text-sm font-medium hover:bg-blue-700 transition-colors duration-300">
                Contact Support
              </button>
            </div>

            {/* Guarantee */}
            <div className="bg-emerald-50 rounded-xl p-6 border border-emerald-200 text-center">
              <Shield className="h-12 w-12 text-emerald-600 mx-auto mb-3" />
              <h4 className="font-semibold text-gray-900 mb-2">30-Day Money-Back Guarantee</h4>
              <p className="text-sm text-gray-600">
                Not satisfied? Get a full refund within 30 days, no questions asked.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* What You'll Achieve Section - Moved to Bottom */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">What You'll Achieve</h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              Transform your career with industry-relevant skills and real-world experience
            </p>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {outcomes.map((outcome, index) => (
              <div key={index} className="group text-center p-6 bg-gray-50 rounded-2xl hover:bg-white hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                <div className={`w-16 h-16 bg-gradient-to-r ${outcome.gradient} rounded-2xl flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                  <outcome.icon className="h-8 w-8 text-white" />
                </div>
                <h3 className="text-lg font-semibold text-gray-900 mb-3">{outcome.title}</h3>
                <p className="text-gray-600 text-sm leading-relaxed">{outcome.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Students Work At Section - Moved to Bottom */}
      {/* <section className="py-16 bg-gradient-to-r from-gray-50 to-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">Our Students Work At</h2>
            <p className="text-xl text-gray-600">
              Join thousands of successful graduates working at top companies
            </p>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {companies.map((company, index) => (
              <div key={index} className="group bg-white rounded-xl p-6 text-center hover:shadow-lg transition-all duration-300 transform hover:scale-105 border border-gray-100">
                <div className="text-3xl mb-2 group-hover:scale-110 transition-transform duration-300">
                  {company.logo}
                </div>
                <div className="text-sm font-medium text-gray-700 group-hover:text-gray-900 transition-colors duration-300">
                  {company.name}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section> */}

      {/* Bottom CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4">Ready to Start Your Journey?</h2>
          <p className="text-xl text-blue-100 mb-8">
            Join {courseData.stats.students.toLocaleString()}+ students who transformed their careers
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-8">
            <button className="group flex items-center justify-center px-8 py-4 bg-white text-blue-600 rounded-xl font-bold hover:bg-gray-100 transition-all duration-300 transform hover:scale-105 shadow-lg">
              <Zap className="mr-2 h-5 w-5 group-hover:animate-pulse" />
              <span>Enroll Now - ₹{courseData.pricing.current.toLocaleString()}</span>
            </button>

            <div className="text-center sm:text-left">
              <div className="text-sm text-blue-100">Next batch starts: {courseData.pricing.nextBatch}</div>
              <div className="text-xs text-blue-200">30-day money-back guarantee</div>
            </div>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm">
            <div className="flex items-center space-x-2">
              <Star className="h-4 w-4 text-yellow-400 fill-current" />
              <span>{courseData.stats.rating} rating</span>
            </div>
            <div className="flex items-center space-x-2">
              <Users className="h-4 w-4 text-cyan-400" />
              <span>{courseData.stats.students.toLocaleString()}+ students</span>
            </div>
            <div className="flex items-center space-x-2">
              <Shield className="h-4 w-4 text-emerald-400" />
              <span>Money-back guarantee</span>
            </div>
          </div>
        </div>
      </section> */}
    </div>
  );
}