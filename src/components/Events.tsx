import React, { useState } from 'react';
import { Calendar, MapPin, Users, Clock, Star, ArrowRight, Sparkles, Award, Zap, ExternalLink, ChevronLeft, ChevronRight } from 'lucide-react';

const events = [
  {
    title: "AI & Future of Work Summit 2025",
    date: "March 15, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Bangalore Tech Park",
    type: "Conference",
    category: "AI & Technology",
    description: "Join industry leaders, AI experts, and students for a day of insights into how AI is reshaping careers and what skills you need for the future.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Dr. Radhika Gupta (AI Researcher)", "Amit Sharma (Google AI)", "Priya Singh (Microsoft)"],
    attendees: "500+",
    price: "Free for Students",
    highlights: ["AI Career Roadmaps", "Live Coding Sessions", "Networking with Tech Leaders", "Startup Pitch Competition"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "Student Startup Showcase & Pitch Day",
    date: "February 28, 2025",
    time: "2:00 PM - 8:00 PM",
    location: "Mumbai Innovation Hub",
    type: "Pitch Event",
    category: "Entrepreneurship",
    description: "Watch student entrepreneurs pitch their innovative ideas to top investors and industry mentors. Network with founders and learn from their journeys.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Kunal Shah (CRED Founder)", "Ritesh Agarwal (OYO)", "Falguni Nayar (Nykaa)"],
    attendees: "300+",
    price: "₹299",
    highlights: ["Live Investor Pitches", "Funding Opportunities", "Mentor Speed Dating", "Startup Toolkit Workshop"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "Career Fair 2025: Meet Your Dream Company",
    date: "April 20, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Delhi Convention Center",
    type: "Career Fair",
    category: "Placements",
    description: "India's largest student career fair with 100+ companies actively hiring. On-spot interviews, resume reviews, and career guidance sessions.",
    image: "https://images.pexels.com/photos/3184339/pexels-photo-3184339.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["HR Leaders from Top Companies", "Career Coaches", "Industry Experts"],
    attendees: "2000+",
    price: "Free Entry",
    highlights: ["On-spot Interviews", "Resume Review Sessions", "Skill Assessment Tests", "Company Presentations"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "Web3 & Blockchain Workshop Series",
    date: "January 25, 2025",
    time: "11:00 AM - 4:00 PM",
    location: "Online + Hybrid Centers",
    type: "Workshop",
    category: "Blockchain",
    description: "Hands-on workshop series covering blockchain fundamentals, smart contracts, DeFi, and Web3 career opportunities.",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Sandeep Nailwal (Polygon)", "Nischal Shetty (WazirX)", "Kashif Raza (Bitbns)"],
    attendees: "1000+",
    price: "₹499",
    highlights: ["Build Your First DApp", "Smart Contract Development", "Web3 Job Market Insights", "Crypto Trading Basics"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "Women in Tech Leadership Summit",
    date: "March 8, 2025",
    time: "1:00 PM - 7:00 PM",
    location: "Hyderabad Tech City",
    type: "Summit",
    category: "Leadership",
    description: "Celebrating International Women's Day with inspiring stories from women tech leaders, career guidance, and networking opportunities.",
    image: "https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Vandana Sikka (Tech Leader)", "Upasana Taku (MobiKwik)", "Suchi Mukherjee (Limeroad)"],
    attendees: "400+",
    price: "Free for Women",
    highlights: ["Leadership Masterclasses", "Mentorship Matching", "Panel Discussions", "Networking Dinner"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "Product Management Bootcamp",
    date: "February 15, 2025",
    time: "10:00 AM - 6:00 PM",
    location: "Pune Innovation District",
    type: "Bootcamp",
    category: "Product Management",
    description: "Intensive one-day bootcamp covering product strategy, user research, data analysis, and PM interview preparation.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Deepinder Goyal (Zomato)", "Albinder Dhindsa (Grofers)", "Sameer Nigam (PhonePe)"],
    attendees: "200+",
    price: "₹999",
    highlights: ["Product Case Studies", "Mock PM Interviews", "User Research Workshop", "Data Analytics for PMs"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "Data Science & Analytics Workshop",
    date: "January 18, 2025",
    time: "9:00 AM - 5:00 PM",
    location: "Chennai Tech Hub",
    type: "Workshop",
    category: "Data Science",
    description: "Master data science fundamentals with Python, machine learning algorithms, and real-world datasets from industry experts.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Dr. Ananya Rao (Data Scientist)", "Vikram Patel (Analytics Lead)", "Meera Joshi (ML Engineer)"],
    attendees: "350+",
    price: "₹799",
    highlights: ["Hands-on Python Coding", "ML Model Building", "Industry Case Studies", "Portfolio Projects"],
    status: "upcoming",
    registrationLink: "#register"
  },
  {
    title: "UI/UX Design Masterclass",
    date: "February 8, 2025",
    time: "11:00 AM - 6:00 PM",
    location: "Gurgaon Design Center",
    type: "Masterclass",
    category: "Design",
    description: "Learn modern UI/UX design principles, user research methods, and create stunning interfaces that users love.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Rahul Sharma (Design Director)", "Kavya Nair (UX Researcher)", "Amit Kumar (Product Designer)"],
    attendees: "250+",
    price: "₹599",
    highlights: ["Design Thinking Workshop", "Figma Masterclass", "User Research Methods", "Portfolio Review"],
    status: "upcoming",
    registrationLink: "#register"
  }
];

const pastEvents = [
  {
    title: "GradXpert Annual Conference 2024",
    date: "December 15, 2024",
    time: "9:00 AM - 8:00 PM",
    location: "Bangalore International Centre",
    type: "Conference",
    category: "Annual Event",
    description: "Our biggest annual gathering featuring keynotes from industry leaders, student showcases, and networking opportunities.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Sundar Pichai (Google CEO)", "Satya Nadella (Microsoft)", "Ritesh Agarwal (OYO)"],
    attendees: "3000+",
    price: "Free for Students",
    highlights: ["500+ Job Offers", "₹50 Cr+ Funding Announced", "100+ Speakers"],
    status: "completed",
    rating: 4.9
  },
  {
    title: "Product Management Bootcamp 2024",
    date: "August 15, 2024",
    time: "9:00 AM - 6:00 PM",
    location: "Pune Innovation Hub",
    type: "Bootcamp",
    category: "Product Management",
    description: "Intensive bootcamp covering product strategy, user research, analytics, and PM interview preparation with industry leaders.",
    image: "https://images.pexels.com/photos/3184291/pexels-photo-3184291.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Deepinder Goyal (Zomato)", "Albinder Dhindsa (Grofers)", "Sameer Nigam (PhonePe)"],
    attendees: "500+",
    price: "₹999",
    highlights: ["Product Case Studies", "Mock PM Interviews", "User Research Workshop"],
    status: "completed",
    rating: 4.8
  },
  {
    title: "Data Science Masterclass 2024",
    date: "July 20, 2024",
    time: "10:00 AM - 5:00 PM",
    location: "Chennai Tech Hub",
    type: "Masterclass",
    category: "Data Science",
    description: "Advanced data science workshop with Python, machine learning, and real-world datasets from top industry experts.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Dr. Ananya Rao (Data Scientist)", "Vikram Patel (Analytics Lead)", "Meera Joshi (ML Engineer)"],
    attendees: "600+",
    price: "₹799",
    highlights: ["Hands-on Python Coding", "ML Model Building", "Industry Case Studies"],
    status: "completed",
    rating: 4.7
  },
  {
    title: "Design Thinking Workshop 2024",
    date: "June 18, 2024",
    time: "11:00 AM - 6:00 PM",
    location: "Gurgaon Design Center",
    type: "Workshop",
    category: "Design",
    description: "Creative workshop on design thinking, user experience, and creating stunning interfaces that users love.",
    image: "https://images.pexels.com/photos/3861972/pexels-photo-3861972.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Rahul Sharma (Design Director)", "Kavya Nair (UX Researcher)", "Amit Kumar (Product Designer)"],
    attendees: "400+",
    price: "₹599",
    highlights: ["Design Thinking Methods", "Figma Masterclass", "Portfolio Review"],
    status: "completed",
    rating: 4.9
  },
  {
    title: "Blockchain & Web3 Summit 2024",
    date: "May 25, 2024",
    time: "10:00 AM - 7:00 PM",
    location: "Bangalore Blockchain Hub",
    type: "Summit",
    category: "Blockchain",
    description: "Comprehensive summit on blockchain technology, smart contracts, DeFi, and Web3 career opportunities.",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Sandeep Nailwal (Polygon)", "Nischal Shetty (WazirX)", "Kashif Raza (Bitbns)"],
    attendees: "800+",
    price: "₹699",
    highlights: ["Smart Contract Development", "DeFi Applications", "Web3 Job Market"],
    status: "completed",
    rating: 4.8
  },
  {
    title: "Student Startup Demo Day",
    date: "November 20, 2024",
    time: "2:00 PM - 9:00 PM",
    location: "Mumbai Startup Hub",
    type: "Demo Day",
    category: "Entrepreneurship",
    description: "Student entrepreneurs pitched their innovative solutions to top VCs and angel investors in this high-energy demo day.",
    image: "https://images.pexels.com/photos/3184360/pexels-photo-3184360.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Kunal Shah (CRED)", "Bhavish Aggarwal (Ola)", "Falguni Nayar (Nykaa)"],
    attendees: "800+",
    price: "₹199",
    highlights: ["25 Startups Pitched", "₹10 Cr Funding Raised", "50+ Investors"],
    status: "completed",
    rating: 4.8
  },
  {
    title: "Tech Skills Mega Workshop",
    date: "October 10, 2024",
    time: "10:00 AM - 6:00 PM",
    location: "Delhi Tech Park",
    type: "Workshop",
    category: "Skills Development",
    description: "Comprehensive workshop covering multiple tech stacks with hands-on coding sessions and industry expert guidance.",
    image: "https://images.pexels.com/photos/3861458/pexels-photo-3861458.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Tech Leaders from FAANG", "Startup CTOs", "Industry Mentors"],
    attendees: "1500+",
    price: "₹399",
    highlights: ["10 Skill Tracks", "Live Coding Sessions", "Industry Certifications"],
    status: "completed",
    rating: 4.7
  },
  {
    title: "AI Innovation Summit 2024",
    date: "September 25, 2024",
    time: "9:00 AM - 7:00 PM",
    location: "Hyderabad AI Center",
    type: "Summit",
    category: "Artificial Intelligence",
    description: "Exploring the future of AI with cutting-edge research presentations and practical applications in various industries.",
    image: "https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=600",
    speakers: ["Dr. Radhika Gupta (AI Researcher)", "Vishal Sikka (Vianai)", "Pranav Mistry (Samsung)"],
    attendees: "1200+",
    price: "₹599",
    highlights: ["AI Research Showcase", "Industry Applications", "Networking with AI Leaders"],
    status: "completed",
    rating: 4.9
  }
];

const Events = () => {
  const [currentEvent, setCurrentEvent] = useState(0);
  const [activeTab, setActiveTab] = useState('upcoming');

  const nextEvent = () => {
    const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    setCurrentEvent((prev) => (prev + 1) % Math.ceil((activeTab === 'upcoming' ? events : pastEvents).length / itemsPerSlide));
  };

  const prevEvent = () => {
    const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
    setCurrentEvent((prev) => (prev - 1 + Math.ceil((activeTab === 'upcoming' ? events : pastEvents).length / itemsPerSlide)) % Math.ceil((activeTab === 'upcoming' ? events : pastEvents).length / itemsPerSlide));
  };

  const getEventTypeColor = (type: string) => {
    switch (type.toLowerCase()) {
      case 'conference':
        return 'from-blue-500 to-indigo-500';
      case 'pitch event':
        return 'from-purple-500 to-pink-500';
      case 'career fair':
        return 'from-emerald-500 to-green-500';
      case 'workshop':
        return 'from-orange-500 to-red-500';
      case 'summit':
        return 'from-pink-500 to-rose-500';
      case 'bootcamp':
        return 'from-cyan-500 to-blue-500';
      default:
        return 'from-slate-500 to-gray-500';
    }
  };

  const renderEventCard = (event: any, index: number) => (
    <div key={index} className={`bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 overflow-hidden group transition-all duration-300 ${
      window.innerWidth >= 1024 ? 'hover:-translate-y-1 hover:shadow-xl' : ''
    }`}>
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className={`bg-gradient-to-r ${getEventTypeColor(event.type)} px-3 py-1 rounded-full shadow-lg`}>
            <span className="text-white text-xs font-bold">{event.type}</span>
          </div>
        </div>
        {window.innerWidth >= 1024 && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-slate-800 text-xs font-bold">{event.category}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-blue-600 transition-colors duration-300">
          {event.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <Users className="h-4 w-4 text-blue-600 mx-auto mb-1" />
            <div className="text-sm font-bold text-slate-900">{event.attendees}</div>
            <div className="text-xs text-slate-600">Expected</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <Star className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
            <div className="text-sm font-bold text-slate-900">{event.price}</div>
            <div className="text-xs text-slate-600">Entry</div>
          </div>
        </div>
        
        <button className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white px-4 py-2 rounded-xl font-semibold text-sm hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center space-x-2">
          <span>Register Now</span>
          <ExternalLink className="h-4 w-4" />
        </button>
      </div>
    </div>
  );

  const renderPastEventCard = (event: any, index: number) => (
    <div key={index} className={`bg-white/90 backdrop-blur-xl rounded-2xl shadow-lg border border-slate-200 overflow-hidden group transition-all duration-300 ${
      window.innerWidth >= 1024 ? 'hover:-translate-y-1 hover:shadow-xl' : ''
    }`}>
      <div className="relative">
        <img 
          src={event.image} 
          alt={event.title}
          className="w-full h-48 object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
        <div className="absolute top-4 left-4">
          <div className="bg-gradient-to-r from-emerald-500 to-green-500 px-3 py-1 rounded-full shadow-lg">
            <span className="text-white text-xs font-bold">Completed</span>
          </div>
        </div>
        {window.innerWidth >= 1024 && (
          <div className="absolute top-4 right-4">
            <div className="bg-white/90 backdrop-blur-sm px-2 py-1 rounded-full">
              <span className="text-slate-800 text-xs font-bold">{event.category}</span>
            </div>
          </div>
        )}
      </div>
      
      <div className="p-6">
        <h3 className="font-bold text-slate-900 mb-2 text-lg group-hover:text-emerald-600 transition-colors duration-300">
          {event.title}
        </h3>
        
        <div className="flex flex-wrap gap-2 mb-3">
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <Calendar className="h-4 w-4" />
            <span>{event.date}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <Clock className="h-4 w-4" />
            <span>{event.time}</span>
          </div>
          <div className="flex items-center space-x-1 text-sm text-slate-600">
            <MapPin className="h-4 w-4" />
            <span>{event.location}</span>
          </div>
        </div>
        
        <p className="text-slate-600 mb-4 text-sm leading-relaxed line-clamp-3">
          {event.description}
        </p>
        
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <Users className="h-4 w-4 text-emerald-600 mx-auto mb-1" />
            <div className="text-sm font-bold text-slate-900">{event.attendees}</div>
            <div className="text-xs text-slate-600">Attended</div>
          </div>
          <div className="text-center p-2 bg-slate-50 rounded-lg">
            <Star className="h-4 w-4 text-yellow-600 mx-auto mb-1" />
            <div className="text-sm font-bold text-slate-900">{event.rating}</div>
            <div className="text-xs text-slate-600">Rating</div>
          </div>
        </div>
        
        <div className="space-y-2">
          {event.highlights.slice(0, 3).map((highlight: string, highlightIndex: number) => (
            <div key={highlightIndex} className="flex items-center space-x-2">
              <Award className="h-4 w-4 text-emerald-600" />
              <span className="text-sm text-slate-700">{highlight}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );

  const renderEvents = () => {
    if (activeTab === 'upcoming') {
      const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      const slideCount = Math.ceil(events.length / itemsPerSlide);
      
      return (
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentEvent * 100}%)` }}
            >
              {Array.from({ length: slideCount }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 ${window.innerWidth < 768 ? 'grid-cols-1' : window.innerWidth < 1024 ? 'grid-cols-2' : 'grid-cols-4'}`}>
                    {events.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((event, index) => (
                      renderEventCard(event, index)
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          {slideCount > 1 && (
            <>
              <button 
                onClick={prevEvent}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>
              <button 
                onClick={nextEvent}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {slideCount > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentEvent 
                      ? 'bg-blue-600 scale-105' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      );
    } else {
      const itemsPerSlide = window.innerWidth < 768 ? 1 : window.innerWidth < 1024 ? 2 : 4;
      const slideCount = Math.ceil(pastEvents.length / itemsPerSlide);
      
      return (
        <div className="relative">
          <div className="overflow-hidden">
            <div 
              className="flex transition-transform duration-300 ease-in-out"
              style={{ transform: `translateX(-${currentEvent * 100}%)` }}
            >
              {Array.from({ length: slideCount }).map((_, slideIndex) => (
                <div key={slideIndex} className="w-full flex-shrink-0">
                  <div className={`grid gap-6 ${window.innerWidth < 768 ? 'grid-cols-1' : window.innerWidth < 1024 ? 'grid-cols-2' : 'grid-cols-4'}`}>
                    {pastEvents.slice(slideIndex * itemsPerSlide, slideIndex * itemsPerSlide + itemsPerSlide).map((event, index) => (
                      renderPastEventCard(event, index)
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          {/* Navigation Buttons */}
          {slideCount > 1 && (
            <>
              <button 
                onClick={prevEvent}
                className="absolute -left-16 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>
              <button 
                onClick={nextEvent}
                className="absolute -right-16 top-1/2 transform -translate-y-1/2 bg-white p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 border border-slate-200"
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button>
            </>
          )}
          
          {/* Dots Indicator */}
          {slideCount > 1 && (
            <div className="flex justify-center space-x-2 mt-8">
              {Array.from({ length: slideCount }).map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentEvent(index)}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentEvent 
                      ? 'bg-emerald-600 scale-105' 
                      : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                />
              ))}
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <section className="py-20 bg-white relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight flex items-center justify-center space-x-4">
            <Calendar className="h-8 w-8 text-blue-600" />
            <span>Events &{' '}
            <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              Workshops
            </span></span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Join our community events, workshops, and conferences to accelerate your learning and network with industry leaders
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex justify-center mb-12">
          <div className="bg-white/80 backdrop-blur-xl rounded-2xl p-2 border border-slate-200 shadow-lg">
            <div className="flex space-x-2">
              <button
                onClick={() => {
                  setActiveTab('upcoming');
                  setCurrentEvent(0);
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'upcoming'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Upcoming Events
              </button>
              <button
                onClick={() => {
                  setActiveTab('past');
                  setCurrentEvent(0);
                }}
                className={`px-6 py-3 rounded-xl font-semibold text-sm transition-all duration-300 ${
                  activeTab === 'past'
                    ? 'bg-gradient-to-r from-blue-600 to-purple-600 text-white shadow-lg'
                    : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                }`}
              >
                Past Events
              </button>
            </div>
          </div>
        </div>

        {/* Events Container */}
        <div className="mb-12">
          {renderEvents()}
        </div>
        
        {/* View All Events Button */}
        <div className="text-center mt-12">
          <button className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-4 rounded-2xl font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 hover:border-indigo-500 flex items-center space-x-3 mx-auto">
            <Calendar className="h-5 w-5" />
            <span>View All Events</span>
            <ArrowRight className="h-5 w-5" />
          </button>
          <p className="text-slate-600 text-sm mt-4">
            ✨ Join our community • Network with industry leaders • Accelerate your career
          </p>
        </div>
      </div>
    </section>
  );
};

export default Events;