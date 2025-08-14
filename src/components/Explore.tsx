import React, { useState, useMemo, useEffect } from 'react';
import {
  Code, Database, Brain, Cloud, GitBranch, Rocket, ArrowRight, Clock, Star, Users,
  Calendar, MapPin, Filter, Search, Building, Award, Play, Zap, Trophy, Target,
  ChevronDown, X, BookOpen, Briefcase, GraduationCap, Settings, Plus, Edit3,
  Save, Eye, EyeOff, Shield, UserCheck, LogOut
} from 'lucide-react';
import { useNavigate, useSearchParams } from 'react-router-dom';

type ProgramType = 'course' | 'internship' | 'training' | 'bootcamp';
type ProgramLevel = 'beginner' | 'intermediate' | 'advanced';
type ProgramFormat = 'live' | 'self-paced' | 'offline' | 'hybrid';

interface Program {
  id: string;
  type: ProgramType;
  title: string;
  duration: string;
  description: string;
  price?: string;
  originalPrice?: string;
  students?: string;
  rating?: number;
  level: ProgramLevel;
  format: ProgramFormat;
  topics: string[];
  gradient: string;
  image: string;
  icon: any;
  tag?: string;
  tagColor?: string;
  location?: string;
  seats?: string;
  registrations?: string;
  status?: string;
  date?: string;
  company?: string;
  stipend?: string;
  features?: string[];
  outcome?: string;
}

interface AdminUser {
  username: string;
  password: string;
  role: 'admin';
}

export default function Explore() {
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();
  const filter = searchParams.get("filter");
  const [activeFilter, setActiveFilter] = useState<'all' | ProgramType>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [showFilters, setShowFilters] = useState(false);
  const [levelFilter, setLevelFilter] = useState<ProgramLevel | 'all'>('all');
  const [formatFilter, setFormatFilter] = useState<ProgramFormat | 'all'>('all');

  console.log('activeFilter:', activeFilter);
  // Admin states
  const [isAdminLoggedIn, setIsAdminLoggedIn] = useState(false);
  const [showAdminLogin, setShowAdminLogin] = useState(false);
  const [showAddProgram, setShowAddProgram] = useState(false);
  const [showAddCategory, setShowAddCategory] = useState(false);
  const [adminCredentials, setAdminCredentials] = useState({ username: '', password: '' });
  const [showPassword, setShowPassword] = useState(false);

  useEffect(() => {
    if (filter) {
      setActiveFilter(filter as 'all' | ProgramType);
    }
  },[filter]);

  // Check if admin is logged in from localStorage


  // Mock admin user (in real app, this would be handled by backend authentication)
  const adminUser: AdminUser = {
    username: 'admin',
    password: 'ioschool2024',
    role: 'admin'
  };

  const [programs, setPrograms] = useState<Program[]>([
    // Courses
    {
      id: 'course-1',
      type: 'course',
      title: 'Full Stack Web Development',
      duration: '8 weeks',
      description: 'Build complete web applications from scratch with modern technologies',
      price: '₹4,999',
      originalPrice: '₹9,999',
      students: '2.5K+',
      rating: 4.9,
      level: 'intermediate',
      format: 'live',
      topics: ['React', 'Node.js', 'MongoDB', 'Express'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1627398242454-45a1465c2479?w=400&h=250&fit=crop',
      icon: Code,
      tag: 'Live',
      tagColor: 'from-red-500 to-pink-500',
      outcome: 'Build 3 full-stack projects and get job-ready'
    },
    {
      id: 'course-2',
      type: 'course',
      title: 'Python Programming Mastery',
      duration: '6 weeks',
      description: 'Master Python programming from basics to advanced concepts',
      price: '₹3,499',
      originalPrice: '₹6,999',
      students: '3.2K+',
      rating: 4.8,
      level: 'beginner',
      format: 'live',
      topics: ['Python Basics', 'OOP', 'Data Structures', 'Web Scraping'],
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      icon: Database,
      tag: 'Project-Based',
      tagColor: 'from-emerald-500 to-cyan-500',
      outcome: 'Build 5 Python projects and automation tools'
    },
    {
      id: 'course-3',
      type: 'course',
      title: 'Data Structures & Algorithms',
      duration: '10 weeks',
      description: 'Master problem-solving for technical interviews',
      price: '₹6,499',
      originalPrice: '₹12,999',
      students: '2.8K+',
      rating: 4.9,
      level: 'intermediate',
      format: 'live',
      topics: ['Arrays', 'Trees', 'Graphs', 'Dynamic Programming'],
      gradient: 'from-green-500 to-emerald-500',
      image: 'https://images.unsplash.com/photo-1509966756634-9c23dd6e6815?w=400&h=250&fit=crop',
      icon: Brain,
      tag: 'IIIT Mentor',
      tagColor: 'from-purple-500 to-indigo-500',
      outcome: 'Solve 200+ problems and crack tech interviews'
    },
    {
      id: 'course-4',
      type: 'course',
      title: 'AI/ML Beginner Series',
      duration: '10 weeks',
      description: 'Build your first AI models and applications',
      price: '₹5,999',
      originalPrice: '₹11,999',
      students: '1.5K+',
      rating: 4.7,
      level: 'beginner',
      format: 'live',
      topics: ['Machine Learning', 'Python Libraries', 'Neural Networks', 'Projects'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      icon: Brain,
      tag: 'Live',
      tagColor: 'from-red-500 to-pink-500',
      outcome: 'Build 3 ML models and understand AI fundamentals'
    },
    {
      id: 'course-5',
      type: 'course',
      title: 'React.js Mastery',
      duration: '8 weeks',
      description: 'Build modern React applications with hooks and context',
      price: '₹4,999',
      originalPrice: '₹9,999',
      students: '1.9K+',
      rating: 4.8,
      level: 'intermediate',
      format: 'live',
      topics: ['React Hooks', 'Context API', 'Redux', 'Testing'],
      gradient: 'from-blue-500 to-indigo-500',
      image: 'https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=400&h=250&fit=crop',
      icon: Code,
      tag: 'Project-Based',
      tagColor: 'from-emerald-500 to-cyan-500',
      outcome: 'Build 4 React apps with modern best practices'
    },
    {
      id: 'course-6',
      type: 'course',
      title: 'Cloud Computing with AWS',
      duration: '6 weeks',
      description: 'Deploy applications to the cloud with AWS services',
      price: '₹4,499',
      originalPrice: '₹8,999',
      students: '1.2K+',
      rating: 4.9,
      level: 'intermediate',
      format: 'live',
      topics: ['EC2', 'S3', 'Lambda', 'RDS'],
      gradient: 'from-cyan-500 to-blue-500',
      image: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=400&h=250&fit=crop',
      icon: Cloud,
      tag: 'IIIT Mentor',
      tagColor: 'from-purple-500 to-indigo-500',
      outcome: 'Deploy 3 applications to AWS cloud'
    },

    // Internships
    {
      id: 'internship-1',
      type: 'internship',
      title: 'Full Stack Developer Intern',
      duration: '3 months',
      description: 'Work on real projects with our partner companies',
      company: 'TechCorp Solutions',
      stipend: '₹15,000/month',
      students: '50 positions',
      rating: 4.8,
      level: 'intermediate',
      format: 'hybrid',
      topics: ['React', 'Node.js', 'MongoDB', 'Git'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=400&h=250&fit=crop',
      icon: Briefcase,
      tag: 'Paid',
      tagColor: 'from-emerald-500 to-teal-500',
      outcome: 'Gain 3 months industry experience + certificate'
    },
    {
      id: 'internship-2',
      type: 'internship',
      title: 'Data Science Intern',
      duration: '4 months',
      description: 'Analyze real datasets and build ML models',
      company: 'DataTech Analytics',
      stipend: '₹18,000/month',
      students: '30 positions',
      rating: 4.9,
      level: 'intermediate',
      format: 'hybrid',
      topics: ['Python', 'Pandas', 'Machine Learning', 'Visualization'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=400&h=250&fit=crop',
      icon: Database,
      tag: 'High Stipend',
      tagColor: 'from-yellow-500 to-orange-500',
      outcome: 'Work on 2 real ML projects + industry mentorship'
    },
    {
      id: 'internship-3',
      type: 'internship',
      title: 'Mobile App Developer Intern',
      duration: '3 months',
      description: 'Build mobile applications for Android and iOS',
      company: 'MobileFirst Tech',
      stipend: '₹12,000/month',
      students: '40 positions',
      rating: 4.7,
      level: 'intermediate',
      format: 'hybrid',
      topics: ['React Native', 'Flutter', 'Firebase', 'API Integration'],
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      icon: Code,
      tag: 'Remote',
      tagColor: 'from-blue-500 to-cyan-500',
      outcome: 'Develop 2 mobile apps + app store deployment'
    },

    // Training Programs
    {
      id: 'training-1',
      type: 'training',
      title: 'Campus Coding Bootcamp',
      duration: '3 days',
      description: 'Intensive hands-on coding workshop for campus students',
      location: 'Your Campus',
      students: '200 students',
      level: 'beginner',
      format: 'offline',
      topics: ['HTML/CSS', 'JavaScript', 'Git', 'Project Building'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      icon: Code,
      features: ['Live coding sessions', 'Project building', 'Career guidance', 'Certificate'],
      outcome: 'Build your first web application'
    },
    {
      id: 'training-2',
      type: 'training',
      title: 'Placement Preparation Workshop',
      duration: '5 days',
      description: 'Complete interview preparation with mock interviews',
      location: 'Your Campus',
      students: '150 students',
      level: 'intermediate',
      format: 'offline',
      topics: ['DSA', 'System Design', 'Mock Interviews', 'Resume Building'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&h=250&fit=crop',
      icon: Trophy,
      features: ['DSA practice', 'System design', 'Mock interviews', 'Resume review'],
      outcome: 'Get placement-ready with interview skills'
    },
    {
      id: 'training-3',
      type: 'training',
      title: 'AI/ML Workshop Series',
      duration: '4 days',
      description: 'Hands-on artificial intelligence and machine learning',
      location: 'Your Campus',
      students: '100 students',
      level: 'intermediate',
      format: 'offline',
      topics: ['ML Algorithms', 'Python Libraries', 'Model Building', 'Real Projects'],
      gradient: 'from-orange-500 to-red-500',
      image: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=400&h=250&fit=crop',
      icon: Brain,
      features: ['ML algorithms', 'Python libraries', 'Real projects', 'Industry insights'],
      outcome: 'Build your first ML model'
    },
    {
      id: 'training-4',
      type: 'training',
      title: 'Tech Innovation Summit',
      duration: '2 days',
      description: 'Latest technology trends and innovation workshop',
      location: 'Your Campus',
      students: '300 students',
      level: 'beginner',
      format: 'offline',
      topics: ['Tech Trends', 'Innovation', 'Startup Ideas', 'Networking'],
      gradient: 'from-emerald-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=400&h=250&fit=crop',
      icon: Rocket,
      features: ['Industry talks', 'Tech demos', 'Networking', 'Innovation labs'],
      outcome: 'Learn latest tech trends and innovation'
    },

    // Bootcamps
    {
      id: 'bootcamp-1',
      type: 'bootcamp',
      title: 'Free Web Development Bootcamp',
      duration: '3 days',
      description: 'Learn web development fundamentals in this free intensive bootcamp',
      date: 'March 15-17, 2024',
      location: 'JNTU Kakinada',
      seats: '200 seats',
      registrations: '1,250+ registered',
      level: 'beginner',
      format: 'offline',
      topics: ['HTML/CSS', 'JavaScript', 'React Basics', 'Project Building'],
      gradient: 'from-blue-500 to-cyan-500',
      image: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      icon: Code,
      status: 'Filling Fast',
      outcome: 'Build your first responsive website'
    },
    {
      id: 'bootcamp-2',
      type: 'bootcamp',
      title: 'Python Programming Workshop',
      duration: '3 days',
      description: 'Master Python programming basics in this hands-on workshop',
      date: 'March 22-24, 2024',
      location: 'Andhra University',
      seats: '150 seats',
      registrations: '890+ registered',
      level: 'beginner',
      format: 'offline',
      topics: ['Python Basics', 'Data Structures', 'Web Scraping', 'Mini Projects'],
      gradient: 'from-emerald-500 to-teal-500',
      image: 'https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=400&h=250&fit=crop',
      icon: Database,
      status: 'Open',
      outcome: 'Build 3 Python automation scripts'
    },
    {
      id: 'bootcamp-3',
      type: 'bootcamp',
      title: 'AI/ML Fundamentals Bootcamp',
      duration: '3 days',
      description: 'Introduction to artificial intelligence and machine learning',
      date: 'April 5-7, 2024',
      location: 'GITAM University',
      seats: '100 seats',
      registrations: '450+ registered',
      level: 'beginner',
      format: 'offline',
      topics: ['ML Basics', 'Python Libraries', 'Model Building', 'Real Applications'],
      gradient: 'from-purple-500 to-pink-500',
      image: 'https://images.unsplash.com/photo-1555949963-aa79dcee981c?w=400&h=250&fit=crop',
      icon: Brain,
      status: 'Open',
      outcome: 'Build your first machine learning model'
    },
    {
      id: 'bootcamp-4',
      type: 'bootcamp',
      title: 'Mobile App Development Bootcamp',
      duration: '4 days',
      description: 'Build mobile apps with React Native in this intensive bootcamp',
      date: 'April 12-15, 2024',
      location: 'VIT-AP University',
      seats: '120 seats',
      registrations: '680+ registered',
      level: 'intermediate',
      format: 'offline',
      topics: ['React Native', 'Mobile UI', 'API Integration', 'App Deployment'],
      gradient: 'from-indigo-500 to-purple-500',
      image: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=400&h=250&fit=crop',
      icon: Code,
      status: 'Open',
      outcome: 'Deploy your first mobile app'
    }
  ]);

  // Program categories (can be extended by admin)
  const [programCategories, setProgramCategories] = useState<{ [key: string]: string }>({
    course: 'Courses',
    internship: 'Internships',
    training: 'Training Programs',
    bootcamp: 'Bootcamps'
  });

  // New program form state
  const [newProgram, setNewProgram] = useState<Partial<Program>>({
    type: 'course',
    level: 'beginner',
    format: 'live',
    topics: [],
    gradient: 'from-blue-500 to-cyan-500',
    icon: Code
  });

  // New category form state
  const [newCategory, setNewCategory] = useState({ key: '', label: '' });

  const filteredPrograms = useMemo(() => {
    let filtered = programs;

    // Filter by type
    if (activeFilter !== 'all') {
      filtered = filtered.filter(program => program.type === activeFilter);
    }

    // Filter by search query
    if (searchQuery) {
      filtered = filtered.filter(program =>
        program.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        program.topics.some(topic => topic.toLowerCase().includes(searchQuery.toLowerCase()))
      );
    }

    // Filter by level
    if (levelFilter !== 'all') {
      filtered = filtered.filter(program => program.level === levelFilter);
    }

    // Filter by format
    if (formatFilter !== 'all') {
      filtered = filtered.filter(program => program.format === formatFilter);
    }

    return filtered;
  }, [programs, activeFilter, searchQuery, levelFilter, formatFilter]);

  const filterTabs = [
    { key: 'all' as const, label: 'All Programs', count: programs.length },
    { key: 'course' as const, label: programCategories.course || 'Courses', count: programs.filter(p => p.type === 'course').length },
    { key: 'internship' as const, label: programCategories.internship || 'Internships', count: programs.filter(p => p.type === 'internship').length },
    { key: 'training' as const, label: programCategories.training || 'Training Programs', count: programs.filter(p => p.type === 'training').length },
    { key: 'bootcamp' as const, label: programCategories.bootcamp || 'Bootcamps', count: programs.filter(p => p.type === 'bootcamp').length }
  ];

  const clearFilters = () => {
    setLevelFilter('all');
    setFormatFilter('all');
    setSearchQuery('');
  };

  // Admin functions
  const handleAdminLogin = () => {
    if (adminCredentials.username === adminUser.username && adminCredentials.password === adminUser.password) {
      setIsAdminLoggedIn(true);
      setShowAdminLogin(false);
      setAdminCredentials({ username: '', password: '' });
    } else {
      alert('Invalid credentials');
    }
  };
  const handleButton = (type: string) => {
    if (type === 'course') {
      navigate('/course-details')
    } else if (type === 'training') {
      navigate('/training-program-details')
    }
  }

  const handleAdminLogout = () => {
    setIsAdminLoggedIn(false);
    setShowAdminLogin(false);
    setShowAddProgram(false);
    setShowAddCategory(false);
  };

  const handleAddProgram = () => {
    if (!newProgram.title || !newProgram.description || !newProgram.duration) {
      alert('Please fill in all required fields');
      return;
    }

    const program: Program = {
      id: `${newProgram.type}-${Date.now()}`,
      type: newProgram.type as ProgramType,
      title: newProgram.title,
      duration: newProgram.duration,
      description: newProgram.description,
      level: newProgram.level as ProgramLevel,
      format: newProgram.format as ProgramFormat,
      topics: newProgram.topics || [],
      gradient: newProgram.gradient || 'from-blue-500 to-cyan-500',
      image: newProgram.image || 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=400&h=250&fit=crop',
      icon: newProgram.icon || Code,
      price: newProgram.price,
      originalPrice: newProgram.originalPrice,
      students: newProgram.students,
      rating: newProgram.rating,
      tag: newProgram.tag,
      tagColor: newProgram.tagColor,
      location: newProgram.location,
      seats: newProgram.seats,
      registrations: newProgram.registrations,
      status: newProgram.status,
      date: newProgram.date,
      company: newProgram.company,
      stipend: newProgram.stipend,
      features: newProgram.features,
      outcome: newProgram.outcome
    };

    setPrograms([...programs, program]);
    setNewProgram({
      type: 'course',
      level: 'beginner',
      format: 'live',
      topics: [],
      gradient: 'from-blue-500 to-cyan-500',
      icon: Code
    });
    setShowAddProgram(false);
    alert('Program added successfully!');
  };

  const handleAddCategory = () => {
    if (!newCategory.key || !newCategory.label) {
      alert('Please fill in both key and label');
      return;
    }

    setProgramCategories({
      ...programCategories,
      [newCategory.key]: newCategory.label
    });
    setNewCategory({ key: '', label: '' });
    setShowAddCategory(false);
    alert('Category added successfully!');
  };

  const iconOptions = [
    { name: 'Code', component: Code },
    { name: 'Database', component: Database },
    { name: 'Brain', component: Brain },
    { name: 'Cloud', component: Cloud },
    { name: 'Rocket', component: Rocket },
    { name: 'Trophy', component: Trophy },
    { name: 'Briefcase', component: Briefcase },
    { name: 'GraduationCap', component: GraduationCap }
  ];

  const gradientOptions = [
    'from-blue-500 to-cyan-500',
    'from-purple-500 to-pink-500',
    'from-emerald-500 to-teal-500',
    'from-orange-500 to-red-500',
    'from-indigo-500 to-purple-500',
    'from-green-500 to-emerald-500',
    'from-cyan-500 to-blue-500',
    'from-yellow-500 to-orange-500'
  ];

  const renderProgramCard = (program: Program) => {
    const IconComponent = program.icon;

    return (
      <div key={program.id} className="group relative bg-white rounded-2xl overflow-hidden border border-gray-100 hover:border-gray-200 transition-all duration-500 transform hover:scale-[1.02] hover:shadow-xl shadow-lg">
        {/* Program Image */}
        <div className="relative h-48 overflow-hidden">
          <img
            src={program.image}
            alt={program.title}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/20 to-transparent"></div>

          {/* Tag/Status */}
          {(program.tag || program.status) && (
            <div className={`absolute top-3 right-3 bg-gradient-to-r ${program.tagColor || 'from-blue-500 to-cyan-500'} text-white px-3 py-1 rounded-full text-xs font-medium backdrop-blur-sm shadow-lg`}>
              {program.tag || program.status}
            </div>
          )}

          {/* Icon */}
          <div className={`absolute bottom-3 left-3 w-12 h-12 bg-gradient-to-r ${program.gradient} rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg`}>
            <IconComponent className="h-6 w-6 text-white" />
          </div>
        </div>

        {/* Content */}
        <div className="relative p-6">
          <div className="flex items-center justify-between mb-2">
            <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium ${program.type === 'course' ? 'bg-blue-100 text-blue-800' :
              program.type === 'internship' ? 'bg-purple-100 text-purple-800' :
                program.type === 'training' ? 'bg-emerald-100 text-emerald-800' :
                  'bg-orange-100 text-orange-800'
              }`}>
              {program.type === 'course' ? <BookOpen className="h-3 w-3 mr-1" /> :
                program.type === 'internship' ? <Briefcase className="h-3 w-3 mr-1" /> :
                  program.type === 'training' ? <GraduationCap className="h-3 w-3 mr-1" /> :
                    <Calendar className="h-3 w-3 mr-1" />}
              {program.type.charAt(0).toUpperCase() + program.type.slice(1)}
            </span>
            <span className={`text-xs px-2 py-1 rounded-full ${program.level === 'beginner' ? 'bg-green-100 text-green-800' :
              program.level === 'intermediate' ? 'bg-yellow-100 text-yellow-800' :
                'bg-red-100 text-red-800'
              }`}>
              {program.level}
            </span>
          </div>

          <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-gray-800 transition-colors duration-300 line-clamp-2">
            {program.title}
          </h3>

          {/* Meta Info */}
          <div className="flex items-center justify-between mb-3 text-sm">
            <div className="flex items-center text-gray-500">
              <Clock className="h-3 w-3 mr-1" />
              <span>{program.duration}</span>
            </div>
            {program.price && (
              <div className="flex items-center space-x-2">
                {program.originalPrice && (
                  <span className="text-gray-400 line-through text-xs">{program.originalPrice}</span>
                )}
                <span className="text-emerald-600 font-bold">{program.price}</span>
              </div>
            )}
            {program.stipend && (
              <div className="text-emerald-600 font-bold">{program.stipend}</div>
            )}
          </div>

          {/* Description */}
          <p className="text-gray-600 mb-4 text-sm leading-relaxed group-hover:text-gray-700 transition-colors duration-300 line-clamp-2">
            {program.description}
          </p>

          {/* Additional Info */}
          {program.date && (
            <div className="flex items-center text-gray-600 mb-2 text-sm">
              <Calendar className="h-3 w-3 mr-1" />
              <span>{program.date}</span>
            </div>
          )}
          {program.location && (
            <div className="flex items-center text-gray-600 mb-2 text-sm">
              <MapPin className="h-3 w-3 mr-1" />
              <span>{program.location}</span>
            </div>
          )}
          {program.company && (
            <div className="flex items-center text-gray-600 mb-2 text-sm">
              <Building className="h-3 w-3 mr-1" />
              <span>{program.company}</span>
            </div>
          )}

          {/* Stats */}
          <div className="flex items-center justify-between mb-4 p-2 bg-gray-50 rounded-lg">
            <div className="flex items-center text-gray-600 text-sm">
              <Users className="h-3 w-3 mr-1" />
              <span className={`font-bold bg-gradient-to-r ${program.gradient} bg-clip-text text-transparent`}>
                {program.students || program.seats || program.registrations}
              </span>
            </div>
            {program.rating && (
              <div className="flex items-center">
                <Star className="h-3 w-3 text-yellow-400 fill-current mr-1" />
                <span className="text-gray-900 font-bold text-sm">{program.rating}</span>
              </div>
            )}
          </div>

          {/* Topics */}
          <div className="mb-4">
            <div className="flex flex-wrap gap-1">
              {program.topics.slice(0, 3).map((topic, idx) => (
                <span key={idx} className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                  {topic}
                </span>
              ))}
              {program.topics.length > 3 && (
                <span className="bg-gray-100 text-gray-700 px-2 py-1 rounded-lg text-xs">
                  +{program.topics.length - 3} more
                </span>
              )}
            </div>
          </div>

          {/* CTA Button */}
          <button onClick={() => handleButton(program.type)} className={`w-full bg-gradient-to-r ${program.gradient} text-white py-3 px-4 rounded-xl font-medium hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center group-hover:scale-105 relative overflow-hidden`}>
            <span className="relative">
              {program.type === 'course' ? 'Enroll Now' :
                program.type === 'internship' ? 'Apply Now' :
                  program.type === 'training' ? 'Request Program' :
                    'Register Free'}
            </span>
            <ArrowRight className="ml-2 h-4 w-4 relative" />
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-blue-50">
      {/* Header */}
      <section className="pt-28 pb-20 bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 text-white relative overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0">
          <div className="absolute top-0 left-0 w-96 h-96 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-full blur-3xl animate-pulse"></div>
          <div className="absolute bottom-0 right-0 w-96 h-96 bg-gradient-to-r from-purple-500/20 to-pink-500/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="text-center flex-1">
              <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 backdrop-blur-sm border border-cyan-500/30 text-cyan-300 px-6 py-3 rounded-full text-sm font-medium mb-8 shadow-lg">
                <Target className="h-5 w-5" />
                <span>Explore All Programs</span>
                <Zap className="h-5 w-5" />
              </div>

              <h1 className="text-5xl font-bold mb-6">
                <span className="text-white">Find Your Perfect</span>{' '}
                <span className="bg-gradient-to-r from-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Learning Path
                </span>
              </h1>

              <p className="text-xl text-gray-300 max-w-3xl mx-auto leading-relaxed">
                Discover courses, internships, training programs, and bootcamps designed to accelerate your tech career
              </p>
            </div>

            {/* Admin Section */}
            {/* <div className="absolute top-6 right-6 hidden md:block">
              {!isAdminLoggedIn ? (
                <button
                  onClick={() => setShowAdminLogin(true)}
                  className="flex items-center space-x-2 px-4 py-2 bg-white/10 backdrop-blur-sm border border-white/20 text-white rounded-lg hover:bg-white/20 transition-all duration-300"
                >
                  <Settings className="h-4 w-4" />
                  <span>Admin</span>
                </button>
              ) : (
                <div className="flex items-center space-x-3">
                  <div className="flex items-center space-x-2 px-4 py-2 bg-emerald-500/20 backdrop-blur-sm border border-emerald-500/30 text-emerald-300 rounded-lg">
                    <UserCheck className="h-4 w-4" />
                    <span>Admin Panel</span>
                  </div>
                  <button
                    onClick={handleAdminLogout}
                    className="flex items-center space-x-2 px-4 py-2 bg-red-500/20 backdrop-blur-sm border border-red-500/30 text-red-300 rounded-lg hover:bg-red-500/30 transition-all duration-300"
                  >
                    <LogOut className="h-4 w-4" />
                    <span>Logout</span>
                  </button>
                </div>
              )}
            </div> */}
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-gray-400" />
              <input
                type="text"
                placeholder="Search courses, topics, or technologies..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-12 pr-4 py-4 bg-white/10 backdrop-blur-sm border border-white/20 rounded-xl text-white placeholder-gray-300 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:border-transparent"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Admin Login Modal */}
      {showAdminLogin && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Shield className="h-6 w-6 mr-2 text-cyan-600" />
                Admin Login
              </h2>
              <button
                onClick={() => setShowAdminLogin(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Username</label>
                <input
                  type="text"
                  value={adminCredentials.username}
                  onChange={(e) => setAdminCredentials({ ...adminCredentials, username: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  placeholder="Enter username"
                />
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Password</label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    value={adminCredentials.password}
                    onChange={(e) => setAdminCredentials({ ...adminCredentials, password: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500 pr-12"
                    placeholder="Enter password"
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400 hover:text-gray-600"
                  >
                    {showPassword ? <EyeOff className="h-5 w-5" /> : <Eye className="h-5 w-5" />}
                  </button>
                </div>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAdminLogin(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAdminLogin}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200"
                >
                  Login
                </button>
              </div>
            </div>

            {/* <div className="mt-6 p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-600 mb-2">Demo Credentials:</p>
              <p className="text-xs text-gray-500">Username: admin</p>
              <p className="text-xs text-gray-500">Password: ioschool2024</p>
            </div> */}
          </div>
        </div>
      )}

      {/* Filters and Content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Admin Controls */}
        {isAdminLoggedIn && (
          <div className="bg-gradient-to-r from-emerald-50 to-cyan-50 border border-emerald-200 rounded-xl p-6 mb-8">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-semibold text-gray-900 flex items-center">
                <Settings className="h-5 w-5 mr-2 text-emerald-600" />
                Admin Controls
              </h3>
            </div>

            <div className="flex flex-wrap gap-4">
              <button
                onClick={() => setShowAddProgram(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-300 shadow-lg"
              >
                <Plus className="h-4 w-4" />
                <span>Add New Program</span>
              </button>

              <button
                onClick={() => setShowAddCategory(true)}
                className="flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-300 shadow-lg"
              >
                <Plus className="h-4 w-4" />
                <span>Add Category</span>
              </button>
            </div>
          </div>
        )}

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-between mb-8">
          <div className="flex gap-2 mb-4 lg:mb-0 overflow-x-auto no-scrollbar">
            {filterTabs.map((tab) => (
              <button
                key={tab.key}
                onClick={() => setActiveFilter(tab.key)}
                className={`flex-shrink-0 px-6 py-3 rounded-xl font-medium transition-all duration-300 flex items-center space-x-2 ${activeFilter === tab.key
                    ? 'bg-gradient-to-r from-cyan-500 to-blue-600 text-white shadow-lg'
                    : 'bg-white text-gray-600 hover:bg-gray-50 border border-gray-200'
                  }`}
              >
                <span>{tab.label}</span>
                <span
                  className={`px-2 py-1 rounded-full text-xs ${activeFilter === tab.key
                      ? 'bg-white/20 text-white'
                      : 'bg-gray-100 text-gray-600'
                    }`}
                >
                  {tab.count}
                </span>
              </button>
            ))}
          </div>


          {/* Advanced Filters Toggle */}
          {/* <button
            onClick={() => setShowFilters(!showFilters)}
            className="flex items-center space-x-2 px-4 py-2 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all duration-300"
          >
            <Filter className="h-4 w-4" />
            <span>Filters</span>
            <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${showFilters ? 'rotate-180' : ''}`} />
          </button> */}
        </div>

        {/* Advanced Filters */}
        {showFilters && (
          <div className="bg-white rounded-xl border border-gray-200 p-6 mb-8 shadow-lg">
            <div className="flex flex-wrap items-center gap-6">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                <select
                  value={levelFilter}
                  onChange={(e) => setLevelFilter(e.target.value as ProgramLevel | 'all')}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="all">All Levels</option>
                  <option value="beginner">Beginner</option>
                  <option value="intermediate">Intermediate</option>
                  <option value="advanced">Advanced</option>
                </select>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                <select
                  value={formatFilter}
                  onChange={(e) => setFormatFilter(e.target.value as ProgramFormat | 'all')}
                  className="px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                >
                  <option value="all">All Formats</option>
                  <option value="live">Live</option>
                  <option value="self-paced">Self-Paced</option>
                  <option value="offline">Offline</option>
                  <option value="hybrid">Hybrid</option>
                </select>
              </div>

              <button
                onClick={clearFilters}
                className="flex items-center space-x-2 px-4 py-2 text-gray-600 hover:text-gray-800 transition-colors duration-300"
              >
                <X className="h-4 w-4" />
                <span>Clear Filters</span>
              </button>
            </div>
          </div>
        )}

        {/* Results Count */}
        <div className="mb-8">
          <p className="text-gray-600">
            Showing <span className="font-semibold text-gray-900">{filteredPrograms.length}</span> programs
            {searchQuery && (
              <span> for "<span className="font-semibold text-cyan-600">{searchQuery}</span>"</span>
            )}
          </p>
        </div>

        {/* Programs Grid */}
        {filteredPrograms.length > 0 ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {filteredPrograms.map(renderProgramCard)}
          </div>
        ) : (
          <div className="text-center py-16">
            <div className="w-24 h-24 bg-gradient-to-r from-gray-200 to-gray-300 rounded-full flex items-center justify-center mx-auto mb-6">
              <Search className="h-12 w-12 text-gray-400" />
            </div>
            <h3 className="text-xl font-semibold text-gray-900 mb-2">No programs found</h3>
            <p className="text-gray-600 mb-6">
              Try adjusting your search or filters to find what you're looking for.
            </p>
            <button
              onClick={clearFilters}
              className="inline-flex items-center px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-xl font-medium hover:from-cyan-400 hover:to-blue-500 transition-all duration-300"
            >
              <X className="mr-2 h-4 w-4" />
              Clear All Filters
            </button>
          </div>
        )}
      </div>

      {/* Add Program Modal */}
      {showAddProgram && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm overflow-y-auto">
          <div className="bg-white rounded-2xl p-8 max-w-4xl w-full mx-4 my-8 shadow-2xl max-h-[90vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Plus className="h-6 w-6 mr-2 text-cyan-600" />
                Add New Program
              </h2>
              <button
                onClick={() => setShowAddProgram(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* Basic Info */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Basic Information</h3>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Program Type *</label>
                  <select
                    value={newProgram.type}
                    onChange={(e) => setNewProgram({ ...newProgram, type: e.target.value as ProgramType })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                  >
                    {Object.entries(programCategories).map(([key, label]) => (
                      <option key={key} value={key}>{label}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Title *</label>
                  <input
                    type="text"
                    value={newProgram.title || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, title: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter program title"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Duration *</label>
                  <input
                    type="text"
                    value={newProgram.duration || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, duration: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="e.g., 8 weeks, 3 days"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Description *</label>
                  <textarea
                    value={newProgram.description || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, description: e.target.value })}
                    rows={3}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Enter program description"
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Level</label>
                    <select
                      value={newProgram.level}
                      onChange={(e) => setNewProgram({ ...newProgram, level: e.target.value as ProgramLevel })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="beginner">Beginner</option>
                      <option value="intermediate">Intermediate</option>
                      <option value="advanced">Advanced</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Format</label>
                    <select
                      value={newProgram.format}
                      onChange={(e) => setNewProgram({ ...newProgram, format: e.target.value as ProgramFormat })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      <option value="live">Live</option>
                      <option value="self-paced">Self-Paced</option>
                      <option value="offline">Offline</option>
                      <option value="hybrid">Hybrid</option>
                    </select>
                  </div>
                </div>
              </div>

              {/* Additional Details */}
              <div className="space-y-4">
                <h3 className="text-lg font-semibold text-gray-900 border-b pb-2">Additional Details</h3>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Price</label>
                    <input
                      type="text"
                      value={newProgram.price || ''}
                      onChange={(e) => setNewProgram({ ...newProgram, price: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g., ₹4,999"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Original Price</label>
                    <input
                      type="text"
                      value={newProgram.originalPrice || ''}
                      onChange={(e) => setNewProgram({ ...newProgram, originalPrice: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                      placeholder="e.g., ₹9,999"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Students/Seats</label>
                  <input
                    type="text"
                    value={newProgram.students || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, students: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="e.g., 2.5K+, 50 positions"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Rating</label>
                  <input
                    type="number"
                    min="1"
                    max="5"
                    step="0.1"
                    value={newProgram.rating || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, rating: parseFloat(e.target.value) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="e.g., 4.9"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Topics (comma-separated)</label>
                  <input
                    type="text"
                    value={newProgram.topics?.join(', ') || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, topics: e.target.value.split(',').map(t => t.trim()).filter(t => t) })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="React, Node.js, MongoDB"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Image URL</label>
                  <input
                    type="url"
                    value={newProgram.image || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, image: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="https://images.unsplash.com/..."
                  />
                </div>

                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Icon</label>
                    <select
                      value={iconOptions.find(opt => opt.component === newProgram.icon)?.name || 'Code'}
                      onChange={(e) => {
                        const selectedIcon = iconOptions.find(opt => opt.name === e.target.value);
                        setNewProgram({ ...newProgram, icon: selectedIcon?.component || Code });
                      }}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {iconOptions.map(option => (
                        <option key={option.name} value={option.name}>{option.name}</option>
                      ))}
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Gradient</label>
                    <select
                      value={newProgram.gradient}
                      onChange={(e) => setNewProgram({ ...newProgram, gradient: e.target.value })}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    >
                      {gradientOptions.map(gradient => (
                        <option key={gradient} value={gradient}>{gradient}</option>
                      ))}
                    </select>
                  </div>
                </div>
              </div>
            </div>

            {/* Optional Fields */}
            <div className="mt-6 pt-6 border-t border-gray-200">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Optional Fields</h3>
              <div className="grid md:grid-cols-3 gap-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Tag</label>
                  <input
                    type="text"
                    value={newProgram.tag || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, tag: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="Live, Project-Based"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Location</label>
                  <input
                    type="text"
                    value={newProgram.location || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, location: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="JNTU Kakinada"
                  />
                </div>

                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-2">Company</label>
                  <input
                    type="text"
                    value={newProgram.company || ''}
                    onChange={(e) => setNewProgram({ ...newProgram, company: e.target.value })}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-cyan-500"
                    placeholder="TechCorp Solutions"
                  />
                </div>
              </div>
            </div>

            <div className="flex space-x-3 pt-6 mt-6 border-t border-gray-200">
              <button
                onClick={() => setShowAddProgram(false)}
                className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
              >
                Cancel
              </button>
              <button
                onClick={handleAddProgram}
                className="flex-1 px-6 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 text-white rounded-lg hover:from-cyan-400 hover:to-blue-500 transition-all duration-200 flex items-center justify-center"
              >
                <Save className="h-4 w-4 mr-2" />
                Add Program
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Add Category Modal */}
      {showAddCategory && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
          <div className="bg-white rounded-2xl p-8 max-w-md w-full mx-4 shadow-2xl">
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold text-gray-900 flex items-center">
                <Plus className="h-6 w-6 mr-2 text-purple-600" />
                Add Category
              </h2>
              <button
                onClick={() => setShowAddCategory(false)}
                className="p-2 text-gray-400 hover:text-gray-600 transition-colors duration-200"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Key *</label>
                <input
                  type="text"
                  value={newCategory.key}
                  onChange={(e) => setNewCategory({ ...newCategory, key: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., workshop"
                />
                <p className="text-xs text-gray-500 mt-1">Used internally (lowercase, no spaces)</p>
              </div>

              <div>
                <label className="block text-sm font-medium text-gray-700 mb-2">Category Label *</label>
                <input
                  type="text"
                  value={newCategory.label}
                  onChange={(e) => setNewCategory({ ...newCategory, label: e.target.value })}
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
                  placeholder="e.g., Workshops"
                />
                <p className="text-xs text-gray-500 mt-1">Displayed to users</p>
              </div>

              <div className="flex space-x-3 pt-4">
                <button
                  onClick={() => setShowAddCategory(false)}
                  className="flex-1 px-4 py-3 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-50 transition-all duration-200"
                >
                  Cancel
                </button>
                <button
                  onClick={handleAddCategory}
                  className="flex-1 px-4 py-3 bg-gradient-to-r from-purple-500 to-pink-600 text-white rounded-lg hover:from-purple-400 hover:to-pink-500 transition-all duration-200 flex items-center justify-center"
                >
                  <Save className="h-4 w-4 mr-2" />
                  Add Category
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}