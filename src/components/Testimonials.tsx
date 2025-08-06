import React, { useState, useEffect } from 'react';
import { Quote, Star, User, Sparkles, Award, TrendingUp, Users, CheckCircle, MapPin, Calendar, Trophy, ChevronLeft, ChevronRight, Play, Pause } from 'lucide-react';

const testimonials = [
  {
    name: "Ritika Sharma",
    role: "Software Engineer at TCS",
    college: "VIT Vellore, B.Tech CSE",
    year: "2024 Graduate",
    text: "I joined GradXpert in my 2nd year without any clear direction. The ecosystem approach changed everything - from I/O School courses to Kickstack internships. Today, I'm working at TCS with a starting package of ₹7 LPA. The portfolio I built through Powerfolio was the key differentiator in my interviews.",
    rating: 5,
    outcome: "₹7 LPA at TCS",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Yash Patel",
    role: "Founder, EduTech Startup",
    college: "NIT Surat, B.Tech Mechanical",
    year: "2023 Graduate",
    text: "What started as a simple project in I/O School became a real product through BoldtStartup. The mentorship helped me validate my idea, build an MVP, and pitch to investors. We've now raised ₹50 lakhs in seed funding and have 10,000+ users.",
    rating: 5,
    outcome: "₹50L Seed Funding",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "startup"
  },
  {
    name: "Sakshi Gupta",
    role: "Product Manager at Flipkart",
    college: "BITS Pilani, B.Tech ECE",
    year: "2024 Graduate",
    text: "Kickstack internships gave me real industry experience that no classroom could provide. Working on actual projects with deadlines and team collaboration prepared me for the corporate world. The confidence I gained helped me crack PM interviews at top companies.",
    rating: 5,
    outcome: "PM at Flipkart",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Arjun Mehta",
    role: "Data Scientist at Google",
    college: "IIT Delhi, B.Tech CSE",
    year: "2024 Graduate",
    text: "The AI tools in StudentOS helped me identify my passion for data science early. Combined with specialized courses from I/O School and real projects through Kickstack, I built a portfolio that impressed Google recruiters. The mentorship was invaluable.",
    rating: 5,
    outcome: "₹25 LPA at Google",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Priya Singh",
    role: "UX Designer at Zomato",
    college: "IIIT Hyderabad, B.Tech IT",
    year: "2023 Graduate",
    text: "I discovered my love for design through GradXpert's ecosystem. The design courses, internship experience, and portfolio showcase through Powerfolio helped me transition from coding to design. Now I'm creating user experiences for millions of users.",
    rating: 5,
    outcome: "UX Designer at Zomato",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Karan Joshi",
    role: "DevOps Engineer at Amazon",
    college: "DTU Delhi, B.Tech ECE",
    year: "2024 Graduate",
    text: "The cloud and DevOps courses at I/O School were game-changers. Real-world projects through Kickstack gave me hands-on experience with AWS, Docker, and Kubernetes. Amazon was impressed with my practical knowledge and project portfolio.",
    rating: 5,
    outcome: "₹18 LPA at Amazon",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Sneha Reddy",
    role: "Marketing Manager at Swiggy",
    college: "Manipal University, BBA",
    year: "2023 Graduate",
    text: "Coming from a non-tech background, I was worried about career prospects. GradXpert's marketing courses and digital marketing internships through Kickstack gave me the skills and confidence. My portfolio got noticed by top companies.",
    rating: 5,
    outcome: "Marketing Manager at Swiggy",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Rohit Kumar",
    role: "Full Stack Developer at Paytm",
    college: "Jadavpur University, B.Tech CSE",
    year: "2024 Graduate",
    text: "The comprehensive web development track at I/O School, combined with real internship projects, made me job-ready. The mentorship and peer learning environment at GradXpert accelerated my growth beyond what I thought possible.",
    rating: 5,
    outcome: "₹12 LPA at Paytm",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  },
  {
    name: "Ananya Reddy",
    role: "Business Analyst at McKinsey",
    college: "IIM Bangalore, MBA",
    year: "2024 Graduate",
    text: "The business and consulting courses at I/O School, combined with real case study projects through Kickstack, gave me the analytical skills and confidence to crack top consulting interviews. The structured approach to problem-solving was invaluable.",
    rating: 5,
    outcome: "Business Analyst at McKinsey",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=300",
    verified: true,
    category: "placement"
  }
];

const galleryImages = [
  {
    url: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Students collaborating on projects"
  },
  {
    url: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Mentorship sessions in action"
  },
  {
    url: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Startup pitch presentations"
  },
  {
    url: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Internship program workshops"
  },
  {
    url: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600",
     caption: "AI and technology learning"
  },
  {
    url: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    caption: "Design thinking workshops"
  }
];

const outcomes = [
  { category: "Placements", count: "2,500+", description: "Students placed in top companies", icon: Trophy },
  { category: "Startups", count: "150+", description: "Student startups launched", icon: TrendingUp },
  { category: "Funding", count: "₹25 Cr+", description: "Total funding raised by alumni", icon: Award },
  { category: "Internships", count: "5,000+", description: "Successful internship completions", icon: Users }
];

const Testimonials = () => {
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [currentGalleryIndex, setCurrentGalleryIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [selectedCategory, setSelectedCategory] = useState('all');

  // Auto-slide testimonials
  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const timer = setInterval(() => {
      setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(getFilteredTestimonials().length / getItemsPerSlide()));
    }, 6000);
    return () => clearInterval(timer);
  }, [isAutoPlaying, selectedCategory]);

  // Auto-slide gallery
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentGalleryIndex((prev) => (prev + 1) % (galleryImages.length - 2));
    }, 4000);
    return () => clearInterval(timer);
  }, []);

  const getItemsPerSlide = () => {
    if (typeof window !== 'undefined') {
      if (window.innerWidth >= 1024) return 3; // lg
      if (window.innerWidth >= 768) return 2;  // md
      return 1; // sm
    }
    return 3;
  };

  const getFilteredTestimonials = () => {
    if (selectedCategory === 'all') return testimonials;
    return testimonials.filter(t => t.category === selectedCategory);
  };

  const nextTestimonials = () => {
    setCurrentTestimonial((prev) => (prev + 1) % Math.ceil(getFilteredTestimonials().length / getItemsPerSlide()));
  };

  const prevTestimonials = () => {
    setCurrentTestimonial((prev) => (prev - 1 + Math.ceil(getFilteredTestimonials().length / getItemsPerSlide())) % Math.ceil(getFilteredTestimonials().length / getItemsPerSlide()));
  };

  const nextGallery = () => {
    setCurrentGalleryIndex((prev) => (prev + 1) % (galleryImages.length - 2));
  };

  const prevGallery = () => {
    setCurrentGalleryIndex((prev) => (prev - 1 + (galleryImages.length - 2)) % (galleryImages.length - 2));
  };

  const getCurrentTestimonials = () => {
    const filtered = getFilteredTestimonials();
    const itemsPerSlide = getItemsPerSlide();
    const start = currentTestimonial * itemsPerSlide;
    return filtered.slice(start, start + itemsPerSlide);
  };

  const toggleAutoPlay = () => {
    setIsAutoPlaying(!isAutoPlaying);
  };

  const handleCategoryChange = (category: string) => {
    setSelectedCategory(category);
    setCurrentTestimonial(0);
  };

  return (
    <section className="py-16 md:py-24 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.08),transparent_70%)]"></div>
      </div>
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header Section */}
        <div className="text-center mb-12 md:mb-16">
          <h2 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-slate-900 mb-4 md:mb-6 tracking-tight">
            <div className="flex items-center justify-center space-x-3 md:space-x-4 mb-2">
              <Trophy className="h-6 w-6 md:h-8 md:w-8 text-yellow-600" />
              <span>Success Stories &{' '}
                <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
                  Real Outcomes
                </span>
              </span>
            </div>
          </h2>
          <p className="text-lg md:text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed mb-6 md:mb-8">
            From confused students to industry leaders — verified transformations that speak for themselves
          </p>
          
          {/* <div className="flex flex-wrap justify-center gap-2 md:gap-3 mb-6">
            {[
              { key: 'all', label: 'All Stories' },
              { key: 'placement', label: 'Job Placements' },
              { key: 'startup', label: 'Startups' }
            ].map((category) => (
              <button
                key={category.key}
                onClick={() => handleCategoryChange(category.key)}
                className={`px-4 md:px-6 py-2 md:py-3 rounded-full text-sm md:text-base font-medium transition-all duration-300 ${
                  selectedCategory === category.key
                    ? 'bg-gradient-to-r from-blue-600 to-indigo-600 text-white shadow-lg scale-105'
                    : 'bg-white/80 backdrop-blur-sm text-slate-700 hover:bg-white hover:shadow-md border border-slate-200'
                }`}
              >
                {category.label}
              </button>
            ))}
          </div> */}
        </div>

        {/* Testimonials Section */}
        <div className="relative mb-16 md:mb-20">
          {/* Controls */}
          <div className="flex justify-between items-center mb-6 md:mb-8">
            <div className="flex items-center space-x-3">
              {/* <button
                onClick={toggleAutoPlay}
                className="flex items-center space-x-2 px-3 md:px-4 py-2 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 hover:border-slate-300 transition-all duration-300 text-sm md:text-base"
              >
                {isAutoPlaying ? (
                  <>
                    <Pause className="h-4 w-4" />
                    <span className="hidden sm:inline">Pause</span>
                  </>
                ) : (
                  <>
                    <Play className="h-4 w-4" />
                    <span className="hidden sm:inline">Play</span>
                  </>
                )}
              </button> */}
              {/* <span className="text-sm text-slate-600 hidden md:inline">
                {getCurrentTestimonials().length} of {getFilteredTestimonials().length} stories
              </span> */}
            </div>
            
            {/* Navigation */}
            <div className="flex items-center space-x-2">
              {/* <button 
                onClick={prevTestimonials}
                className="p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Previous testimonials"
              >
                <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-slate-600" />
              </button>
              <button 
                onClick={nextTestimonials}
                className="p-2 md:p-3 bg-white/90 backdrop-blur-sm rounded-full border border-slate-200 hover:border-slate-300 hover:shadow-lg transition-all duration-300 hover:scale-110"
                aria-label="Next testimonials"
              >
                <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-slate-600" />
              </button> */}
            </div>
          </div>

          {/* Testimonials Grid */}
          <div className="rounded-2xl">
  <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6 lg:gap-8 transition-all duration-500 ease-in-out">
    {getCurrentTestimonials().map((testimonial, index) => (
      <div
        key={`${currentTestimonial}-${index}`}
        className="group relative animate-fade-in"
      >
        <div className="bg-white/95 backdrop-blur-xl p-4 md:p-6 lg:p-8 rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border border-slate-200 group-hover:border-blue-300 h-full flex flex-col relative overflow-hidden">
          
          {/* ✅ Verified Badge - now inside the card */}
          {testimonial.verified && (
            <div className="absolute top-2 right-2 bg-gradient-to-r from-emerald-500 to-green-500 text-white px-2 py-1 rounded-full text-xs font-bold shadow-md flex items-center space-x-1 z-10">
              <CheckCircle className="h-3 w-3" />
              <span>Verified</span>
            </div>
          )}
                    
                    {/* Rating */}
                    <div className="flex mb-3 md:mb-4">
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 md:h-5 md:w-5 text-yellow-400 fill-current" />
                      ))}
                    </div>
                    
                    {/* Quote */}
                    <div className="mb-4 flex-1">
                      <Quote className="h-5 w-5 md:h-6 md:w-6 text-blue-500 mb-3 opacity-60" />
                      <p className="text-slate-700 leading-relaxed text-sm md:text-base italic">
                        "{testimonial.text}"
                      </p>
                    </div>
                    
                    {/* Outcome Badge */}
                    <div className="bg-gradient-to-r from-emerald-50 to-green-50 border border-emerald-200 rounded-xl p-3 mb-4">
                      <div className="flex items-center space-x-2">
                        <TrendingUp className="h-4 w-4 text-emerald-600" />
                        <span className="text-emerald-800 font-bold text-sm">
                          Outcome: {testimonial.outcome}
                        </span>
                      </div>
                    </div>
                    
                    {/* User Info */}
                    <div className="border-t border-slate-200 pt-4 mt-auto">
                      <div className="flex items-start space-x-3 md:space-x-4">
                        <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center flex-shrink-0">
                          <User className="h-5 w-5 md:h-6 md:w-6 text-white" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <h4 className="font-bold text-slate-900 text-sm md:text-base lg:text-lg truncate">
                            {testimonial.name}
                          </h4>
                          <p className="text-blue-600 font-semibold text-xs md:text-sm mb-2 truncate">
                            {testimonial.role}
                          </p>
                          <div className="space-y-1">
                            <div className="flex items-center space-x-2 text-xs text-slate-600">
                              <MapPin className="h-3 w-3 flex-shrink-0" />
                              <span className="truncate">{testimonial.college}</span>
                            </div>
                            <div className="flex items-center space-x-2 text-xs text-slate-600">
                              <Calendar className="h-3 w-3 flex-shrink-0" />
                              <span>{testimonial.year}</span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Dots Indicator */}
          <div className="flex justify-center space-x-2 mt-6 md:mt-8">
            {Array.from({ length: Math.ceil(getFilteredTestimonials().length / getItemsPerSlide()) }).map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentTestimonial(index)}
                className={`w-2 h-2 md:w-3 md:h-3 rounded-full transition-all duration-300 ${
                  index === currentTestimonial 
                    ? 'bg-blue-600 scale-125' 
                    : 'bg-slate-300 hover:bg-slate-400'
                }`}
                aria-label={`Go to testimonial set ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Gallery Section */}
        <div className="mb-16 md:mb-20">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Behind the Scenes</h3>
            <p className="text-slate-600 text-sm md:text-base">Glimpses from our vibrant student community</p>
          </div>
          
          <div className="relative">
            <div className="overflow-hidden rounded-2xl shadow-lg">
              <div 
                className="flex transition-transform duration-500 ease-in-out"
                style={{ transform: `translateX(-${currentGalleryIndex * (100 / 3)}%)` }}
              >
                {galleryImages.map((image, index) => (
                  <div key={index} className="w-1/3 flex-shrink-0 px-1 md:px-2">
                    <div className="relative group">
                      <img 
                        src={image.url} 
                        alt={image.caption}
                        className="w-full h-32 md:h-48 lg:h-64 object-cover rounded-lg group-hover:scale-105 transition-all duration-300"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent rounded-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                      {/* <div className="absolute bottom-2 md:bottom-4 left-2 md:left-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                        <p className="text-xs md:text-sm font-medium">{image.caption}</p>
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
            
            {/* Gallery Navigation */}
            <button 
              onClick={prevGallery}
              className="absolute left-2 md:left-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-xl p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Previous gallery images"
            >
              <ChevronLeft className="h-4 w-4 md:h-5 md:w-5 text-slate-600" />
            </button>
            <button 
              onClick={nextGallery}
              className="absolute right-2 md:right-4 top-1/2 transform -translate-y-1/2 bg-white/95 backdrop-blur-xl p-2 md:p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 hover:scale-110 z-10"
              aria-label="Next gallery images"
            >
              <ChevronRight className="h-4 w-4 md:h-5 md:w-5 text-slate-600" />
            </button>
          </div>
        </div>

        {/* Outcomes Section */}
        <div className="bg-white/80 backdrop-blur-xl rounded-2xl lg:rounded-3xl p-6 md:p-8 border border-slate-200 shadow-lg mb-12">
          <div className="text-center mb-6 md:mb-8">
            <h3 className="text-xl md:text-2xl font-bold text-slate-900 mb-3 md:mb-4">Verified Impact & Outcomes</h3>
            <p className="text-slate-600 text-sm md:text-base">Real numbers from our student community</p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
            {outcomes.map((outcome, index) => {
              const Icon = outcome.icon;
              return (
                <div key={index} className="text-center p-4 md:p-6 rounded-xl lg:rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-200 hover:border-blue-300 transition-all duration-300 group">
                  <div className="w-10 h-10 md:w-12 md:h-12 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center mx-auto mb-3 md:mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="h-5 w-5 md:h-6 md:w-6 text-white" />
                  </div>
                  <div className="text-xl md:text-2xl lg:text-3xl font-bold bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent mb-1 md:mb-2 group-hover:scale-110 transition-transform duration-300">
                    {outcome.count}
                  </div>
                  <div className="font-semibold text-slate-900 mb-1 md:mb-2 text-sm md:text-base">{outcome.category}</div>
                  <div className="text-xs md:text-sm text-slate-600">{outcome.description}</div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="bg-gradient-to-r from-slate-100 to-blue-100 rounded-xl lg:rounded-2xl p-6 md:p-8 border border-slate-200 ">
          <div className="text-center">
            <h3 className="text-lg md:text-xl font-bold text-slate-900 mb-4">Trusted by Students Across India</h3>
            <div className="flex flex-wrap justify-center items-center gap-3 md:gap-4 lg:gap-8 text-xs md:text-sm text-slate-600">
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>IITs, NITs, BITS</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>Tier 1, 2, 3 Colleges</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>All Engineering Branches</span>
              </div>
              <div className="flex items-center space-x-2">
                <CheckCircle className="h-4 w-4 text-emerald-500" />
                <span>1st Year to Final Year</span>
              </div>
            </div>
          </div>
        </div>
        
        {/* CTA Section */}
        {/* <div className="text-center">
          <button className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-6 md:px-8 lg:px-10 py-3 md:py-4 rounded-xl lg:rounded-2xl font-bold text-sm md:text-base lg:text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 mb-4">
            Join Our Success Stories
          </button>
          <p className="text-slate-600 text-xs md:text-sm">
            ✨ Start your transformation today • Join 10,000+ successful students
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Testimonials;