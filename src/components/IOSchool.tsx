import React from 'react';
import { BookOpen, Clock, Users, Award, Zap, Target, ChevronLeft, ChevronRight, Star, MapPin, Code, Brain, Palette, BarChart } from 'lucide-react';

const courses = [
  {
    title: "Full Stack Web Development",
    instructor: "Rahul Sharma",
    duration: "12 weeks",
    level: "Beginner to Advanced",
    description: "Master React, Node.js, MongoDB and build production-ready web applications",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    students: "2,500+",
    skills: ["React", "Node.js", "MongoDB"],
    projects: 5,
    mentorship: true
  },
  {
    title: "AI & Machine Learning",
    instructor: "Dr. Priya Patel",
    duration: "10 weeks",
    level: "Intermediate",
    description: "Learn Python, TensorFlow, and build AI models for real-world applications",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    students: "1,800+",
    skills: ["Python", "TensorFlow", "ML"],
    projects: 4,
    mentorship: true
  },
];

const features = [
  { icon: BookOpen, text: 'Industry-focused curriculum' },
  { icon: Users, text: 'Live mentorship & doubt clearing' },
  { icon: Award, text: 'Real projects for your portfolio' },
  { icon: Code, text: 'Practical, job-ready skills' },
  { icon: Brain, text: 'AI, Web Dev, Design & more' },
  { icon: Target, text: 'Guaranteed skill development' }
];


const IOSchool = () => {
  const [currentCourse, setCurrentCourse] = React.useState(0);

  const nextCourse = () => {
    setCurrentCourse((prev) => (prev + 1) % courses.length);
  };

  const prevCourse = () => {
    setCurrentCourse((prev) => (prev - 1 + courses.length) % courses.length);
  };

  return (
    <section id="courses" className="py-16 md:py-32 bg-gradient-to-br from-purple-50 via-violet-50 to-blue-50 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>
      
      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(147,51,234,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(147,51,234,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Title - Mobile/Tablet only */}
        <div className="md:text-center mb-8 lg:hidden">
          <div className="flex md:items-center md:justify-center space-x-3 md:space-x-4 mb-4 md:mb-6">
            <div className="relative">
              <BookOpen className="h-8 w-8 md:h-10 md:w-10 text-purple-600" />
              <Zap className="h-4 w-4 md:h-5 md:w-5 text-violet-500 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-pulse" />
            </div>
            <h2 className="text-3xl  font-black text-slate-900 tracking-tight">
              Learn at{' '}
              <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                I/O School
              </span>
            </h2>
          </div>
          <p className="text-base md:text-lg text-purple-700 font-light text-center">
            Job-ready skills. Real projects. Expert mentorship.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-2 gap-8 md:gap-16 items-center">
          <div className="order-1 lg:order-1">
            {/* Section Title - Desktop only */}
            <div className="hidden lg:block mb-6 lg:mb-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <BookOpen className="h-10 w-10 lg:h-12 lg:w-12 text-purple-600" />
                  <Zap className="h-5 w-5 lg:h-6 lg:w-6 text-violet-500 absolute -top-2 -right-2 animate-pulse" />
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Learn at{' '}
                  <span className="bg-gradient-to-r from-purple-600 to-violet-600 bg-clip-text text-transparent">
                    I/O School
                  </span>
                </h2>
              </div>
              <p className="text-xl lg:text-2xl text-purple-700 font-light">
                Job-ready skills. Real projects. Expert mentorship.
              </p>
            </div>
            
            <div className="mt-4 md:mt-6 mb-4 md:mb-6 lg:mb-8">
              <h3 className="font-bold text-slate-900 mb-3 md:mb-4 flex items-center text-base md:text-lg">
                <BookOpen className="h-5 w-5 text-purple-500 mr-2" />
                Featured Courses
              </h3>
              
              {/* Desktop Grid */}
<div className="hidden lg:grid lg:grid-cols-2 gap-6">
  {courses.map((course, index) => (
    <div
      key={index}
      className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-purple-400 transition-all duration-300 min-h-[360px]"
    >
      <div className="space-y-3">
        <div className="flex items-start gap-4">
          <img
            src={course.image}
            alt={course.title}
            className="w-16 h-16 rounded-lg object-cover border border-slate-200"
          />
          <div className="flex-1">
            <h4 className="text-lg font-semibold text-slate-900">{course.title}</h4>
            <p className="text-sm text-purple-600 font-medium">{course.instructor}</p>
            <div className="flex items-center text-sm text-slate-600 gap-2 mt-1">
              <Clock className="w-4 h-4" />
              <span>{course.duration}</span>
              <span>•</span>
              <span>{course.level}</span>
            </div>
          </div>
        </div>

        <p className="text-sm text-slate-700">{course.description}</p>

        <div className="flex justify-between items-center text-sm text-slate-600">
          <div className="flex items-center gap-1">
            <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
            <span>{course.rating}</span>
            <span className="text-slate-400">({course.students})</span>
          </div>
          <div className="flex items-center gap-1">
            <Award className="w-4 h-4" />
            <span>{course.projects} projects</span>
          </div>
        </div>

        <div className="flex flex-wrap gap-2">
          {course.skills.map((skill, i) => (
            <span
              key={i}
              className="bg-purple-100 text-purple-700 text-xs font-medium px-2 py-1 rounded-full"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>

      <button className="mt-4 bg-gradient-to-r from-purple-600 to-violet-600 text-white py-2 rounded-lg font-semibold hover:scale-105 transition-transform">
        Enroll Now
      </button>
    </div>
  ))}
</div>


            {/* Mobile/Tablet Slider */}
<div className="lg:hidden relative">
  <div className="overflow-hidden rounded-xl">
    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentCourse * 100}%)` }}
    >
      {courses.map((course, index) => (
        <div key={index} className="w-full flex-shrink-0 px-3">
          <div className="bg-white border border-slate-200 rounded-xl shadow-sm p-4 flex flex-col justify-between min-h-[280px]">
            <div className="space-y-2">
              <div className="flex items-start gap-3">
                <img
                  src={course.image}
                  alt={course.title}
                  className="w-10 h-10 rounded-md object-cover border"
                />
                <div className="flex-1">
                  <h4 className="text-sm font-semibold text-slate-900 leading-tight">{course.title}</h4>
                  <p className="text-xs text-purple-600 font-medium">{course.instructor}</p>
                  <div className="text-[11px] text-slate-600 flex items-center gap-1 mt-0.5">
                    <Clock className="w-3 h-3" />
                    <span>{course.duration}</span>
                    <span>•</span>
                    <span>{course.level}</span>
                  </div>
                </div>
              </div>

              <p className="text-xs text-slate-700 leading-snug line-clamp-3">{course.description}</p>

              <div className="flex justify-between items-center text-[11px] text-slate-600">
                <div className="flex items-center gap-1">
                  <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                  <span>{course.rating}</span>
                  <span className="text-slate-400">({course.students})</span>
                </div>
                <div className="flex items-center gap-1">
                  <Award className="w-3 h-3" />
                  <span>{course.projects}</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-1">
                {course.skills.map((skill, i) => (
                  <span
                    key={i}
                    className="bg-purple-100 text-purple-700 px-2 py-0.5 rounded text-[10px] font-medium"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
            <button className="mt-3 bg-gradient-to-r from-purple-600 to-violet-600 text-white text-xs font-semibold py-3 rounded-md hover:scale-105 transition-transform">
              Enroll Now
            </button>
          </div>
        </div>
      ))}
    </div>
  </div>

  
                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-3">
                  {courses.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentCourse(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${
                        index === currentCourse 
                          ? 'bg-purple-600 scale-125' 
                          : 'bg-slate-300 hover:bg-slate-400'
                      }`}
                    />
                  ))}
                </div>
              </div>
            </div>
            
            <div className="bg-gradient-to-r from-purple-100 to-violet-100 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6 lg:mb-8 border border-purple-200">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3">
                <Target className="h-5 w-5 md:h-6 md:w-6 text-purple-600" />
                <span className="font-bold text-purple-800 text-sm md:text-base">Learn by Doing</span>
              </div>
              <p className="text-slate-700 text-xs md:text-sm mb-2">
                <span className="font-semibold text-purple-700">🎓 Target:</span> All students (1st year to final year)
              </p>
              <p className="text-slate-700 text-xs md:text-sm">
                <span className="font-semibold text-purple-700">🔥 Outcome:</span> Job-ready skills + portfolio projects + industry certificate
              </p>
            </div>
          </div>
          
          <div className="relative order-2 lg:order-2">
            {/* Main hero image */}
            <div className="relative rounded-xl md:rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl shadow-purple-500/20 mb-4 md:mb-6">
              <img 
                src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=700" 
                alt="Students learning in interactive classroom"
                className="w-full h-56 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-violet-900/20"></div>
              {/* <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <div className="text-lg md:text-xl lg:text-2xl font-bold">Interactive Learning</div>
                <div className="text-xs md:text-sm opacity-90">Expert-led courses</div>
              </div> */}
            </div>
            
            {/* Courses Section */}
            <div className="space-y-3 md:space-y-4 lg:space-y-6 mb-4 md:mb-6 lg:mb-8">
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-1 md:mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Industry-focused curriculum designed by experts</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-1 md:mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Live mentorship + doubt clearing sessions</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-1 md:mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Real projects that go directly to your Powerfolio</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-purple-500 to-violet-500 rounded-full mt-1 md:mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Courses in Web Dev, AI/ML, Design, Data Science, and more</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        <div className="text-center mt-8 md:mt-12">
          <button className="bg-gradient-to-r from-purple-600 to-violet-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-lg hover:shadow-2xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105">
            Explore All Courses
          </button>
        </div>
      </div>
    </section>
  );
};

export default IOSchool;