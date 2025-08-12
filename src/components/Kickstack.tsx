import React from 'react';
import {
  Briefcase,
  Clock,
  Users,
  Award,
  Zap,
  Target,
  ChevronLeft,
  ChevronRight,
  Star,
  MapPin,
  Sparkles
} from 'lucide-react';
import {useNavigate} from "react-router-dom";

const internships = [
  {
    title: "Frontend Development Sprint",
    company: "TechCorp Solutions",
    duration: "4 weeks",
    type: "Remote",
    description: "Build responsive web applications using React and modern CSS frameworks",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.8,
    participants: "150+",
    skills: ["React", "CSS", "JavaScript"]
  },
  {
    title: "AI Product Development",
    company: "InnovateLabs",
    duration: "6 weeks",
    type: "Hybrid",
    description: "Work on machine learning models and AI-powered product features",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=400",
    rating: 4.9,
    participants: "80+",
    skills: ["Python", "ML", "AI"]
  }
];

const Kickstack = () => {
  const [currentInternship, setCurrentInternship] = React.useState(0);

  const nextInternship = () => {
    setCurrentInternship((prev) => (prev + 1) % internships.length);
  };

  const prevInternship = () => {
    setCurrentInternship((prev) => (prev - 1 + internships.length) % internships.length);
  };

  const navigate = useNavigate();
  return (
    <section id="kickstack" className="py-16 bg-gradient-to-br from-indigo-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Light background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(79,70,229,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(99,102,241,0.1),transparent_50%)]"></div>
      </div>

      {/* Grid pattern */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(79,70,229,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(79,70,229,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-4 lg:px-8 relative z-10">
        {/* Section Title - Mobile/Tablet only */}
        <div className="md:text-center mb-12 lg:hidden">
          <div className="flex md:items-center md:justify-center space-x-3 md:space-x-4 mb-6 md:mb-8">
            <div className="relative">
              <Briefcase className="h-8 w-8 md:h-10 md:w-10 text-indigo-600" />
              <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-indigo-500 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-spin" />
              {/*<Zap className="h-4 w-4 md:h-5 md:w-5 text-blue-500 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-pulse" />*/}
            </div>
            <h2 className="text-3xl lg:text-4xl font-black text-slate-900 tracking-tight">
              Intern with{' '}
              <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                Kickstack
              </span>
            </h2>
          </div>
          <p className="text-lg md:text-xl text-indigo-700 font-light md:text-center md:px-4">
            Real experience. Real confidence. Real proof.
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div className="relative order-2 lg:order-1">
            {/* Main hero image */}
            <div className="relative rounded-2xl lg:rounded-3xl overflow-hidden shadow-xl lg:shadow-2xl shadow-indigo-500/20 mb-6 md:mb-8">
              <img
                src="https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=700"
                alt="Professional internship environment"
                className="w-full h-64 md:h-80 lg:h-96 object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-indigo-900/60 via-transparent to-blue-900/20"></div>
              {/* <div className="absolute bottom-4 md:bottom-6 left-4 md:left-6 text-white">
                <div className="text-lg md:text-xl lg:text-2xl font-bold">Real Industry Experience</div>
                <div className="text-xs md:text-sm opacity-90">4-week intensive sprints</div>
              </div> */}
            </div>


            <div className="space-y-3 md:space-y-4 lg:space-y-6 mb-6 md:mb-8 lg:mb-10 md:px-4 lg:px-0">
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Job simulations built with industry flow</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Internship certificate + Powerfolio project</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">Work with teams, timelines, and tools</p>
                </div>
              </div>
              <div className="flex items-start space-x-3 md:space-x-4 p-3 md:p-4 rounded-xl md:rounded-2xl bg-white/60 backdrop-blur-sm border border-slate-200 hover:bg-white/80 transition-all duration-300 shadow-sm md:shadow-lg">
                <div className="w-3 h-3 bg-gradient-to-r from-indigo-500 to-blue-500 rounded-full mt-2 animate-pulse"></div>
                <div>
                  <p className="text-sm md:text-base text-slate-700 font-medium">4-week sprints in Web, Product, AI, Marketing, HR, and more</p>
                </div>
              </div>
            </div>

          </div>

          <div className="order-1 lg:order-2">
            {/* Section Title - Desktop only */}
            <div className="hidden lg:block mb-6 lg:mb-8">
              <div className="flex items-center space-x-4 mb-8">
                <div className="relative">
                  <Briefcase className="h-12 w-12 text-indigo-600" />
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-indigo-500 absolute -top-1 -right-1 md:-top-2 md:-right-2 animate-spin" />
                  {/*<Zap className="h-6 w-6 text-blue-500 absolute -top-2 -right-2 animate-pulse" />*/}
                </div>
                <h2 className="text-2xl sm:text-3xl font-bold text-slate-900 tracking-tight">
                  Intern with{' '}
                  <span className="bg-gradient-to-r from-indigo-600 to-blue-600 bg-clip-text text-transparent">
                    Kickstack
                  </span>
                </h2>
              </div>
              <p className="text-2xl text-indigo-700 font-light">
                Real experience. Real confidence. Real proof.
              </p>
            </div>

            {/* Internships Section */}
            <div className="mt-6 md:mt-8 mb-6 md:mb-8 lg:mb-10">
              <h3 className="font-bold text-slate-900 mb-3 md:mb-4 flex items-center text-base md:text-lg px-4 lg:px-0">
                <Briefcase className="h-5 w-5 text-indigo-500 mr-2" />
                Available Internships
              </h3>

              {/* Desktop Grid */}
              <div className="hidden lg:flex lg:space-x-4">
                {internships.map((internship, index) => (
                  // <div
                  //   key={index}
                  //   className="flex flex-col justify-between flex-1 bg-white/80 backdrop-blur-xl p-4 rounded-xl border border-slate-200 hover:border-indigo-300 transition-all duration-300 shadow-sm group"
                  // >
                  //   <div>
                  //     <div className="flex items-start space-x-3 mb-3">
                  //       <img
                  //         src={internship.image}
                  //         alt={internship.title}
                  //         className="w-12 h-12 rounded-lg object-cover"
                  //       />
                  //       <div className="flex-1">
                  //         <h4 className="font-bold text-slate-900 text-sm mb-1">{internship.title}</h4>
                  //         <p className="text-indigo-600 text-xs font-medium mb-1">{internship.company}</p>
                  //       </div>
                  //     </div>
                  //     <div className="flex items-center space-x-2 text-xs text-slate-600 pb-2">
                  //       <Clock className="h-3 w-3" />
                  //       <span>{internship.duration}</span>
                  //       <span>•</span>
                  //       <MapPin className="h-3 w-3" />
                  //       <span>{internship.type}</span>
                  //     </div>

                  //     <p className="text-slate-600 text-xs mb-3">{internship.description}</p>

                  //     <div className="flex items-center justify-between mb-3">
                  //       <div className="flex items-center space-x-2">
                  //         <div className="flex items-center space-x-1">
                  //           <Star className="h-3 w-3 text-yellow-400 fill-current" />
                  //           <span className="text-xs font-medium text-slate-700">{internship.rating}</span>
                  //         </div>
                  //         <span className="text-xs text-slate-500">({internship.participants})</span>
                  //       </div>
                  //     </div>

                  //     <div className="flex flex-wrap gap-1 mb-3">
                  //       {internship.skills.map((skill, skillIndex) => (
                  //         <span
                  //           key={skillIndex}
                  //           className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium"
                  //         >
                  //           {skill}
                  //         </span>
                  //       ))}
                  //     </div>
                  //   </div>

                  //   <button className="mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold py-2 rounded-lg hover:scale-105 transition-transform">
                  //     Enroll Now
                  //   </button>
                  // </div>
                   <div
                        key={index}
                        className="flex flex-col justify-between bg-white border border-slate-200 rounded-xl p-5 shadow-md hover:shadow-lg hover:border-indigo-300 transition-all duration-300 min-h-[360px]"
                      >
                        <div className="space-y-3">
                          <div className="flex items-start gap-4">
                            <img
                              src={internship.image}
                              alt={internship.title}
                              className="w-16 h-16 rounded-lg object-cover border border-slate-200"
                            />
                            <div className="flex-1">
                              <h4 className="text-lg font-semibold text-slate-900">{internship.title}</h4>
                              <p className="text-indigo-600 text-xs font-medium mb-1">{internship.company}</p>
                            </div>
                          </div>
                          <div className="flex items-center text-sm text-slate-600 gap-2 mt-1">
                                <Clock className="w-4 h-4" />
                                <span>{internship.duration}</span>
                                <span>•</span>
                                <span>{internship.type}</span>
                              </div>
                  
                          <p className="text-sm text-slate-700">{internship.description}</p>
                  
                          <div className="flex justify-between items-center text-sm text-slate-600">
                            <div className="flex items-center gap-1">
                              <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                              <span>{internship.rating}</span>
                              <span className="text-slate-400">({internship.participants})</span>
                            </div>
                            {/* <div className="flex items-center gap-1">
                              <Award className="w-4 h-4" />
                              <span>{internship.projects} projects</span>
                            </div> */}
                          </div>
                  
                          <div className="flex flex-wrap gap-2">
                            {internship.skills.map((skill, i) => (
                              <span
                                key={i}
                                className="bg-indigo-100 text-indigo-700 px-2 py-1 rounded-lg text-xs font-medium"                              >
                                {skill}
                              </span>
                            ))}
                          </div>
                        </div>
                  
                        <button className="mt-auto bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-xs font-semibold py-2 rounded-lg hover:scale-105 transition-transform">
                       Apply Now
                     </button>
                      </div>
                  
                ))}
              </div>

              {/* Mobile/Tablet Slider */}
              <div className="lg:hidden relative mt-4">
                <div className="overflow-hidden rounded-xl">
                  <div
                    className="flex transition-transform duration-300 ease-in-out"
                    style={{ transform: `translateX(-${currentInternship * 100}%)` }}
                  >
                    {internships.map((internship, index) => (
                      <div key={index} className="w-full flex-shrink-0 px-1">
                        <div className="bg-white/80 backdrop-blur-xl p-3 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between min-h-[260px]">
                          <div>
                            <div className="flex items-start space-x-2 mb-2">
                              <img
                                src={internship.image}
                                alt={internship.title}
                                className="w-8 h-8 rounded-lg object-cover flex-shrink-0"
                              />
                              <div className="flex-1">
                                <h4 className="font-bold text-slate-900 text-xs mb-0.5 leading-tight">
                                  {internship.title}
                                </h4>
                                <p className="text-indigo-600 text-[10px] font-medium mb-0.5">{internship.company}</p>
                                <div className="flex items-center space-x-1 text-[10px] text-slate-600">
                                  <Clock className="h-2.5 w-2.5" />
                                  <span>{internship.duration}</span>
                                  <span>•</span>
                                  <MapPin className="h-2.5 w-2.5" />
                                  <span>{internship.type}</span>
                                </div>
                              </div>
                            </div>

                            <p className="text-slate-600 text-[11px] mb-2 leading-tight line-clamp-2">
                              {internship.description}
                            </p>

                            <div className="flex items-center justify-between mb-2">
                              <div className="flex items-center space-x-1">
                                <div className="flex items-center space-x-0.5">
                                  <Star className="h-2.5 w-2.5 text-yellow-400 fill-current" />
                                  <span className="text-[10px] font-medium text-slate-700">{internship.rating}</span>
                                </div>
                                <span className="text-[10px] text-slate-500">({internship.participants})</span>
                              </div>
                            </div>

                            <div className="flex flex-wrap gap-1 mb-2">
                              {internship.skills.map((skill, skillIndex) => (
                                <span
                                  key={skillIndex}
                                  className="bg-indigo-100 text-indigo-700 px-1.5 py-0.5 rounded text-[10px] font-medium"
                                >
                                  {skill}
                                </span>
                              ))}
                            </div>
                          </div>

                          <button className="bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-[11px] font-semibold py-2 rounded-md hover:scale-105 transition-transform">
                            Enroll Now
                          </button>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Dots Indicator */}
                <div className="flex justify-center space-x-2 mt-3">
                  {internships.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentInternship(index)}
                      className={`w-1.5 h-1.5 rounded-full transition-all duration-300 ${index === currentInternship
                          ? 'bg-indigo-600 scale-125'
                          : 'bg-slate-300 hover:bg-slate-400'
                        }`}
                    />
                  ))}
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-indigo-100 to-blue-100 backdrop-blur-sm p-4 md:p-6 rounded-xl md:rounded-2xl mb-4 md:mb-6 lg:mb-8 border border-indigo-200 md:mx-4 lg:mx-0">
              <div className="flex items-center space-x-2 md:space-x-3 mb-3">
                <Target className="h-6 w-6 text-indigo-600" />
                <span className="font-bold text-indigo-800 text-sm md:text-base">Designed for Success</span>
              </div>
              <p className="text-slate-700 text-xs md:text-sm mb-2">
                <span className="font-semibold text-indigo-700">🎓 Target:</span> 2nd–4th year students
              </p>
              <p className="text-slate-700 text-xs md:text-sm">
                <span className="font-semibold text-indigo-700">🔥 Outcome:</span> Internship certificate + verified portfolio project
              </p>
            </div>

          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center mt-12 md:mt-16">
          <button onClick={() => navigate('/explore')}  className="bg-gradient-to-r from-indigo-600 to-blue-600 text-white px-6 md:px-10 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold  text-lg hover:shadow-2xl hover:shadow-indigo-500/25 transition-all duration-300 hover:scale-105 mx-4">
            Apply for Internships
          </button>
        </div>
      </div>
    </section>
  );
};

export default Kickstack;