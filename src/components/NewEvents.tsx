import React, { useState } from 'react';
import { 
  Calendar, 
  MapPin, 
  Users, 
  Clock, 
  Star,
  ArrowRight,
  Filter,
  Search,
  Code,
  Trophy,
  Zap,
  Building,
  Globe,
  Heart,
  Target,
  Award,
  Rocket,
  BookOpen,
  MessageSquare,
  Play,
  ExternalLink,
  User,
  Bell
} from 'lucide-react';

export default function Events() {
  const [activeFilter, setActiveFilter] = useState('all');
  const [searchTerm, setSearchTerm] = useState('');

  const eventTypes = [
    { id: 'all', label: 'All Events', count: 15 },
    { id: 'bootcamp', label: 'Bootcamps', count: 6 },
    { id: 'workshop', label: 'Workshops', count: 4 },
    { id: 'hackathon', label: 'Hackathons', count: 3 },
    { id: 'webinar', label: 'Webinars', count: 2 }
  ];

  const events = [
    {
      id: 1,
      title: 'Free Web Development Bootcamp',
      type: 'bootcamp',
      date: '2024-03-15',
      endDate: '2024-03-17',
      time: '9:00 AM - 5:00 PM',
      location: 'JNTU Kakinada',
      mode: 'Offline',
      seats: 200,
      registered: 1250,
      price: 'Free',
      description: 'Intensive 3-day bootcamp covering HTML, CSS, JavaScript, and React fundamentals with hands-on projects.',
      topics: ['HTML/CSS', 'JavaScript', 'React Basics', 'Project Building'],
      instructor: 'Arjun Reddy',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=600&h=400&fit=crop',
      gradient: 'from-blue-500 to-cyan-500',
      status: 'filling-fast',
      featured: true,
      difficulty: 'Beginner',
      duration: '3 Days'
    },
    {
      id: 2,
      title: 'AI/ML Innovation Hackathon',
      type: 'hackathon',
      date: '2024-03-20',
      endDate: '2024-03-22',
      time: '6:00 PM - 6:00 PM',
      location: 'GITAM University',
      mode: 'Hybrid',
      seats: 150,
      registered: 89,
      price: '₹500',
      description: '48-hour hackathon focused on building innovative AI/ML solutions for real-world problems.',
      topics: ['Machine Learning', 'Deep Learning', 'Computer Vision', 'NLP'],
      instructor: 'Dr. Priya Sharma',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-pink-500',
      status: 'open',
      featured: false,
      difficulty: 'Advanced',
      duration: '48 Hours',
      prizes: ['₹50,000', '₹30,000', '₹20,000']
    },
    {
      id: 3,
      title: 'Python Programming Workshop',
      type: 'workshop',
      date: '2024-03-25',
      endDate: '2024-03-27',
      time: '10:00 AM - 4:00 PM',
      location: 'Andhra University',
      mode: 'Offline',
      seats: 100,
      registered: 67,
      price: 'Free',
      description: 'Comprehensive Python workshop covering basics to advanced concepts with practical projects.',
      topics: ['Python Basics', 'Data Structures', 'Web Scraping', 'Mini Projects'],
      instructor: 'Vikram Kumar',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=600&h=400&fit=crop',
      gradient: 'from-emerald-500 to-teal-500',
      status: 'open',
      featured: true,
      difficulty: 'Beginner',
      duration: '3 Days'
    },
    {
      id: 4,
      title: 'Career Guidance Webinar',
      type: 'webinar',
      date: '2024-03-30',
      endDate: '2024-03-30',
      time: '6:00 PM - 8:00 PM',
      location: 'Online',
      mode: 'Online',
      seats: 500,
      registered: 234,
      price: 'Free',
      description: 'Expert guidance on career paths in tech, interview preparation, and industry insights.',
      topics: ['Career Planning', 'Interview Tips', 'Industry Trends', 'Skill Development'],
      instructor: 'Anitha Reddy',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=600&h=400&fit=crop',
      gradient: 'from-orange-500 to-red-500',
      status: 'open',
      featured: false,
      difficulty: 'All Levels',
      duration: '2 Hours'
    },
    {
      id: 5,
      title: 'Full Stack Development Bootcamp',
      type: 'bootcamp',
      date: '2024-04-05',
      endDate: '2024-04-12',
      time: '9:00 AM - 6:00 PM',
      location: 'VIT-AP',
      mode: 'Offline',
      seats: 80,
      registered: 45,
      price: '₹2,999',
      description: 'Intensive 8-day bootcamp covering complete full-stack development with MERN stack.',
      topics: ['MongoDB', 'Express.js', 'React.js', 'Node.js', 'Deployment'],
      instructor: 'Rajesh Patel',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=600&h=400&fit=crop',
      gradient: 'from-indigo-500 to-purple-500',
      status: 'open',
      featured: true,
      difficulty: 'Intermediate',
      duration: '8 Days'
    },
    {
      id: 6,
      title: 'Blockchain Development Workshop',
      type: 'workshop',
      date: '2024-04-10',
      endDate: '2024-04-11',
      time: '10:00 AM - 5:00 PM',
      location: 'IIIT Hyderabad',
      mode: 'Offline',
      seats: 60,
      registered: 23,
      price: '₹1,500',
      description: 'Learn blockchain fundamentals and build your first decentralized application.',
      topics: ['Blockchain Basics', 'Smart Contracts', 'Solidity', 'DApp Development'],
      instructor: 'Suresh Babu',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=600&h=400&fit=crop',
      gradient: 'from-yellow-500 to-orange-500',
      status: 'open',
      featured: false,
      difficulty: 'Advanced',
      duration: '2 Days'
    },
    {
      id: 7,
      title: 'Mobile App Development Hackathon',
      type: 'hackathon',
      date: '2024-04-15',
      endDate: '2024-04-16',
      time: '9:00 AM - 9:00 PM',
      location: 'NIT Warangal',
      mode: 'Offline',
      seats: 120,
      registered: 78,
      price: 'Free',
      description: '36-hour hackathon to build innovative mobile applications solving real-world problems.',
      topics: ['React Native', 'Flutter', 'Mobile UI/UX', 'API Integration'],
      instructor: 'Kavya Nair',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=600&h=400&fit=crop',
      gradient: 'from-green-500 to-emerald-500',
      status: 'open',
      featured: false,
      difficulty: 'Intermediate',
      duration: '36 Hours',
      prizes: ['₹25,000', '₹15,000', '₹10,000']
    },
    {
      id: 8,
      title: 'Data Science Fundamentals',
      type: 'bootcamp',
      date: '2024-04-20',
      endDate: '2024-04-24',
      time: '10:00 AM - 4:00 PM',
      location: 'Andhra University',
      mode: 'Hybrid',
      seats: 90,
      registered: 34,
      price: '₹1,999',
      description: 'Comprehensive introduction to data science with Python, statistics, and machine learning.',
      topics: ['Python for Data Science', 'Statistics', 'Data Visualization', 'ML Basics'],
      instructor: 'Dr. Meera Singh',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=600&h=400&fit=crop',
      gradient: 'from-cyan-500 to-blue-500',
      status: 'open',
      featured: true,
      difficulty: 'Beginner',
      duration: '5 Days'
    },
    {
      id: 9,
      title: 'DevOps and Cloud Computing',
      type: 'workshop',
      date: '2024-04-25',
      endDate: '2024-04-26',
      time: '9:00 AM - 6:00 PM',
      location: 'JNTU Hyderabad',
      mode: 'Offline',
      seats: 70,
      registered: 41,
      price: '₹1,200',
      description: 'Learn modern DevOps practices and cloud deployment strategies.',
      topics: ['Docker', 'Kubernetes', 'AWS', 'CI/CD Pipelines'],
      instructor: 'Arun Kumar',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=600&h=400&fit=crop',
      gradient: 'from-blue-600 to-indigo-600',
      status: 'open',
      featured: false,
      difficulty: 'Intermediate',
      duration: '2 Days'
    },
    {
      id: 10,
      title: 'Cybersecurity Awareness Webinar',
      type: 'webinar',
      date: '2024-05-01',
      endDate: '2024-05-01',
      time: '7:00 PM - 9:00 PM',
      location: 'Online',
      mode: 'Online',
      seats: 1000,
      registered: 156,
      price: 'Free',
      description: 'Essential cybersecurity knowledge for students and professionals.',
      topics: ['Security Fundamentals', 'Common Threats', 'Best Practices', 'Career Paths'],
      instructor: 'Security Expert Panel',
      image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?w=600&h=400&fit=crop',
      gradient: 'from-red-500 to-pink-500',
      status: 'open',
      featured: false,
      difficulty: 'All Levels',
      duration: '2 Hours'
    },
    {
      id: 11,
      title: 'Startup Pitch Competition',
      type: 'hackathon',
      date: '2024-05-05',
      endDate: '2024-05-05',
      time: '10:00 AM - 6:00 PM',
      location: 'GITAM University',
      mode: 'Offline',
      seats: 50,
      registered: 28,
      price: '₹300',
      description: 'Present your startup ideas to industry experts and win funding opportunities.',
      topics: ['Business Planning', 'Pitch Presentation', 'Market Analysis', 'Funding'],
      instructor: 'Entrepreneur Panel',
      image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?w=600&h=400&fit=crop',
      gradient: 'from-pink-500 to-rose-500',
      status: 'open',
      featured: false,
      difficulty: 'All Levels',
      duration: '1 Day',
      prizes: ['₹1,00,000 Funding', 'Mentorship', 'Incubation']
    },
    {
      id: 12,
      title: 'UI/UX Design Workshop',
      type: 'workshop',
      date: '2024-05-10',
      endDate: '2024-05-11',
      time: '10:00 AM - 5:00 PM',
      location: 'VIT-AP',
      mode: 'Offline',
      seats: 80,
      registered: 52,
      price: '₹800',
      description: 'Learn modern UI/UX design principles and create stunning user interfaces.',
      topics: ['Design Principles', 'Figma', 'Prototyping', 'User Research'],
      instructor: 'Design Team',
      image: 'https://images.unsplash.com/photo-1561070791-2526d30994b5?w=600&h=400&fit=crop',
      gradient: 'from-purple-500 to-indigo-500',
      status: 'open',
      featured: false,
      difficulty: 'Beginner',
      duration: '2 Days'
    }
  ];

  // Sort events by date (latest first)
  const sortedEvents = [...events].sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime());

  const filteredEvents = sortedEvents.filter(event => {
    const matchesFilter = activeFilter === 'all' || event.type === activeFilter;
    const matchesSearch = event.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.location.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         event.topics.some(topic => topic.toLowerCase().includes(searchTerm.toLowerCase()));
    return matchesFilter && matchesSearch;
  });

  const featuredEvents = events.filter(event => event.featured);

  const getStatusBadge = (status: string) => {
    switch (status) {
      case 'filling-fast':
        return 'bg-gradient-to-r from-red-500 to-pink-500 text-white';
      case 'open':
        return 'bg-gradient-to-r from-emerald-500 to-cyan-500 text-white';
      case 'closed':
        return 'bg-gray-500 text-white';
      default:
        return 'bg-blue-500 text-white';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'filling-fast':
        return 'Filling Fast';
      case 'open':
        return 'Open';
      case 'closed':
        return 'Closed';
      default:
        return 'Open';
    }
  };

  const getEventIcon = (type: string) => {
    switch (type) {
      case 'bootcamp':
        return Code;
      case 'hackathon':
        return Trophy;
      case 'workshop':
        return BookOpen;
      case 'webinar':
        return MessageSquare;
      default:
        return Calendar;
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      month: 'short',
      day: 'numeric',
      year: 'numeric'
    });
  };

  const isEventToday = (dateString: string) => {
    const today = new Date().toDateString();
    const eventDate = new Date(dateString).toDateString();
    return today === eventDate;
  };

  const isEventUpcoming = (dateString: string) => {
    const today = new Date();
    const eventDate = new Date(dateString);
    return eventDate > today;
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50 pt-20">
      {/* Hero Section */}
      <section className="py-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('data:image/svg+xml,%3Csvg width=%2260%22 height=%2260%22 viewBox=%220 0 60 60%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cg fill=%22none%22 fill-rule=%22evenodd%22%3E%3Cg fill=%22%236366f1%22 fill-opacity=%220.03%22%3E%3Ccircle cx=%2230%22 cy=%2230%22 r=%221%22/%3E%3C/g%3E%3C/g%3E%3C/svg%3E')]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-purple-500/10 to-pink-500/10 backdrop-blur-sm border border-purple-500/20 text-purple-700 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
              <Calendar className="h-5 w-5" />
              <span>Upcoming Events</span>
            </div>
            
            <h1 className="text-5xl font-bold text-gray-900 mb-6">
              <span className="bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent">Events</span> & Learning Opportunities
            </h1>
            
            <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
              Join our bootcamps, workshops, hackathons, and webinars to accelerate your learning journey. 
              Connect with peers, learn from experts, and build amazing projects.
            </p>
          </div>

          {/* Quick Stats */}
          <div className="grid md:grid-cols-4 gap-6 mb-16">
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Calendar className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-blue-600 to-cyan-600 bg-clip-text text-transparent mb-2">
                {events.length}
              </div>
              <div className="text-gray-600 text-sm font-medium">Total Events</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-emerald-500 to-teal-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent mb-2">
                {events.reduce((sum, event) => sum + event.registered, 0)}
              </div>
              <div className="text-gray-600 text-sm font-medium">Registrations</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-purple-500 to-pink-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <MapPin className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-2">
                {[...new Set(events.map(e => e.location))].length}
              </div>
              <div className="text-gray-600 text-sm font-medium">Locations</div>
            </div>
            
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-6 border border-gray-100 shadow-lg text-center">
              <div className="w-12 h-12 bg-gradient-to-r from-orange-500 to-red-500 rounded-xl flex items-center justify-center mx-auto mb-4">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <div className="text-3xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-2">
                {events.filter(e => e.price === 'Free').length}
              </div>
              <div className="text-gray-600 text-sm font-medium">Free Events</div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Events */}
      <section className="py-16 bg-white/50 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              <span className="bg-gradient-to-r from-yellow-600 to-orange-600 bg-clip-text text-transparent">Featured</span> Events
            </h2>
            <p className="text-gray-600 text-lg">Don't miss these highlighted learning opportunities</p>
          </div>

          <div className="grid lg:grid-cols-3 gap-8 mb-12">
            {featuredEvents.slice(0, 3).map((event) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <div key={event.id} className="group relative bg-white rounded-3xl overflow-hidden border border-gray-100 hover:shadow-2xl transition-all duration-500 transform hover:scale-[1.02] shadow-xl">
                  {/* Featured Badge */}
                  <div className="absolute top-4 right-4 z-10">
                    <div className="bg-gradient-to-r from-yellow-500 to-orange-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg">
                      ⭐ Featured
                    </div>
                  </div>

                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-4 left-4 px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(event.status)}`}>
                      {getStatusText(event.status)}
                    </div>
                    
                    {/* Event Icon */}
                    <div className={`absolute bottom-4 left-4 w-12 h-12 bg-gradient-to-r ${event.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <EventIcon className="h-6 w-6 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.gradient} bg-opacity-10 text-gray-700 border border-gray-200`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm font-bold text-emerald-600">{event.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="space-y-2 mb-4">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="text-sm">
                          {formatDate(event.date)}
                          {event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.location} • {event.mode}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.registered}+ registered • {event.seats} seats</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span className="text-sm">{event.duration} • {event.difficulty}</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed">{event.description}</p>
                    
                    {/* Topics */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {event.topics.slice(0, 3).map((topic, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                            {topic}
                          </span>
                        ))}
                        {event.topics.length > 3 && (
                          <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                            +{event.topics.length - 3} more
                          </span>
                        )}
                      </div>
                    </div>
                    
                    {/* Prizes for hackathons */}
                    {event.prizes && (
                      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <div className="flex items-center mb-2">
                          <Trophy className="h-4 w-4 text-yellow-600 mr-2" />
                          <span className="text-sm font-semibold text-yellow-800">Prizes</span>
                        </div>
                        <div className="text-xs text-yellow-700">
                          {event.prizes.join(' • ')}
                        </div>
                      </div>
                    )}
                    
                    {/* CTA Button */}
                    <button className={`w-full bg-gradient-to-r ${event.gradient} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 relative overflow-hidden`}>
                      <span className="relative">Register Now</span>
                      <ArrowRight className="ml-2 h-4 w-4 relative" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* All Events Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">
              All <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">Upcoming Events</span>
            </h2>
            <p className="text-gray-600 text-lg">Explore all our learning events and find the perfect fit for you</p>
          </div>

          {/* Search and Filter */}
          <div className="mb-8">
            <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
              {/* Search */}
              <div className="relative flex-1 max-w-md">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search events..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                  className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-200"
                />
              </div>

              {/* Filter Tabs */}
              <div className="flex flex-wrap gap-2">
                {eventTypes.map((type) => (
                  <button
                    key={type.id}
                    onClick={() => setActiveFilter(type.id)}
                    className={`flex items-center px-4 py-2 rounded-xl font-medium transition-all duration-300 ${
                      activeFilter === type.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg'
                        : 'bg-white text-gray-600 hover:text-blue-600 hover:bg-blue-50 border border-gray-200'
                    }`}
                  >
                    <span>{type.label}</span>
                    <span className="ml-2 text-xs bg-white/20 px-2 py-1 rounded-full">
                      {type.count}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          {/* Events Grid */}
          <div className="grid lg:grid-cols-2 gap-8">
            {filteredEvents.map((event) => {
              const EventIcon = getEventIcon(event.type);
              return (
                <div key={event.id} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl shadow-lg">
                  {/* Event Image */}
                  <div className="relative h-48 overflow-hidden">
                    <img
                      src={event.image}
                      alt={event.title}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>
                    
                    {/* Status Badge */}
                    <div className={`absolute top-3 right-3 px-3 py-1 rounded-full text-xs font-medium ${getStatusBadge(event.status)} shadow-lg`}>
                      {getStatusText(event.status)}
                    </div>
                    
                    {/* Today Badge */}
                    {isEventToday(event.date) && (
                      <div className="absolute top-3 left-3 bg-gradient-to-r from-red-500 to-pink-500 text-white px-3 py-1 rounded-full text-xs font-bold shadow-lg animate-pulse">
                        🔴 Today
                      </div>
                    )}
                    
                    {/* Event Type Badge */}
                    <div className={`absolute bottom-3 left-3 w-10 h-10 bg-gradient-to-r ${event.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
                      <EventIcon className="h-5 w-5 text-white" />
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-3">
                      <span className={`px-2 py-1 rounded-full text-xs font-medium bg-gradient-to-r ${event.gradient} bg-opacity-10 text-gray-700 border border-gray-200`}>
                        {event.type.charAt(0).toUpperCase() + event.type.slice(1)}
                      </span>
                      <span className="text-sm font-bold text-emerald-600">{event.price}</span>
                    </div>
                    
                    <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-blue-600 transition-colors duration-300">
                      {event.title}
                    </h3>
                    
                    <div className="grid grid-cols-2 gap-3 mb-4 text-sm">
                      <div className="flex items-center text-gray-600">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span>
                          {formatDate(event.date)}
                          {event.endDate !== event.date && ` - ${formatDate(event.endDate)}`}
                        </span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Clock className="h-4 w-4 mr-2" />
                        <span>{event.duration}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <MapPin className="h-4 w-4 mr-2" />
                        <span>{event.location}</span>
                      </div>
                      <div className="flex items-center text-gray-600">
                        <Users className="h-4 w-4 mr-2" />
                        <span>{event.registered}+ registered</span>
                      </div>
                    </div>
                    
                    <p className="text-gray-600 mb-4 text-sm leading-relaxed line-clamp-2">{event.description}</p>
                    
                    {/* Topics */}
                    <div className="mb-4">
                      <div className="flex flex-wrap gap-1">
                        {event.topics.slice(0, 4).map((topic, idx) => (
                          <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                            {topic}
                          </span>
                        ))}
                      </div>
                    </div>
                    
                    {/* Instructor */}
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex items-center">
                        <div className="w-8 h-8 bg-gray-200 rounded-full flex items-center justify-center mr-2">
                          <User className="h-4 w-4 text-gray-600" />
                        </div>
                        <span className="text-sm text-gray-700">{event.instructor}</span>
                      </div>
                      <span className="text-xs text-gray-500">{event.difficulty}</span>
                    </div>
                    
                    {/* Prizes for hackathons */}
                    {event.prizes && (
                      <div className="mb-4 p-3 bg-yellow-50 border border-yellow-200 rounded-xl">
                        <div className="flex items-center mb-1">
                          <Trophy className="h-4 w-4 text-yellow-600 mr-2" />
                          <span className="text-sm font-semibold text-yellow-800">Prizes</span>
                        </div>
                        <div className="text-xs text-yellow-700">
                          {event.prizes.join(' • ')}
                        </div>
                      </div>
                    )}
                    
                    {/* CTA Button */}
                    <div className="flex gap-3">
                      <button className={`flex-1 bg-gradient-to-r ${event.gradient} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg transition-all duration-300 flex items-center justify-center group-hover:scale-105 relative overflow-hidden`}>
                        <span className="relative">Register Now</span>
                        <ArrowRight className="ml-2 h-4 w-4 relative" />
                      </button>
                      <button className="px-4 py-3 bg-gray-100 text-gray-700 rounded-xl hover:bg-gray-200 transition-all duration-300">
                        <ExternalLink className="h-4 w-4" />
                      </button>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* No Results */}
          {filteredEvents.length === 0 && (
            <div className="text-center py-12">
              <div className="w-16 h-16 bg-gray-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Search className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="text-lg font-semibold text-gray-900 mb-2">No events found</h3>
              <p className="text-gray-600">Try adjusting your search or filter criteria</p>
            </div>
          )}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-cyan-600 text-white relative overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_40%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_80%,rgba(255,255,255,0.1),transparent_50%)]"></div>
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold mb-4">
              Don't Miss Out on <span className="bg-gradient-to-r from-yellow-300 to-orange-300 bg-clip-text text-transparent">Amazing Opportunities</span>
            </h2>
            <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
              Join our community and get notified about new events, exclusive workshops, and special opportunities
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button className="group inline-flex items-center px-8 py-4 bg-gradient-to-r from-yellow-400 to-orange-500 text-gray-900 rounded-xl font-semibold hover:from-yellow-300 hover:to-orange-400 transition-all duration-300 transform hover:scale-105 shadow-lg">
                <Bell className="mr-2 h-5 w-5 group-hover:animate-pulse" />
                Get Event Notifications
              </button>
              
              <button className="group inline-flex items-center px-8 py-4 bg-white/20 backdrop-blur-sm border border-white/30 text-white rounded-xl font-semibold hover:bg-white/30 transition-all duration-300 shadow-lg">
                <MessageSquare className="mr-2 h-5 w-5" />
                Join Community
              </button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}