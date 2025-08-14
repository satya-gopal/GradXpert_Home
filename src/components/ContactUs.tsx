import React, { useState } from 'react';
import {
  Mail,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  Building,
  Handshake,
  Megaphone,
  Brain,
  Settings,
  BookOpen,
  Briefcase,
  FolderOpen,
  Rocket,
  MessageCircle,
  ExternalLink,
  Shield,
  FileText,
  Linkedin,
  Instagram,
  Youtube,
  MessageSquare,
  CheckCircle,
  AlertCircle,
  Globe,
  Star,
  Heart,
  Contact
} from 'lucide-react';
import { FaConnectdevelop } from 'react-icons/fa6';
import { Link } from 'react-router-dom';

const departments = [
  {
    icon: Users,
    title: "Student Support",
    purpose: "General queries, course help, internship issues",
    email: "support@gradxpert.in",
    color: "from-blue-500 to-indigo-500"
  },
  {
    icon: Building,
    title: "Campus Partnerships",
    purpose: "Onboarding, events, workshops",
    email: "campus@gradxpert.in",
    color: "from-purple-500 to-pink-500"
  },
  {
    icon: Handshake,
    title: "Mentorship / Hiring / Talent Pool Access",
    purpose: "Collaborate with our top students",
    email: "mentors@gradxpert.in",
    color: "from-emerald-500 to-green-500"
  },
  {
    icon: Megaphone,
    title: "PR & Media",
    purpose: "Interviews, features, press",
    email: "media@gradxpert.in",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Brain,
    title: "Founder's Office",
    purpose: "Strategic partnerships, funding, product",
    email: "founder@gradxpert.in",
    color: "from-yellow-500 to-amber-500"
  }
];

const subBrands = [
  {
    icon: Settings,
    name: "StudentOS",
    email: "tools@gradxpert.in",
    notes: "Feedback, bugs, suggestions",
    color: "from-slate-600 to-gray-700"
  },
  {
    icon: BookOpen,
    name: "I/O School",
    email: "ioschool@gradxpert.in",
    notes: "Course queries, roadmap help",
    color: "from-purple-600 to-indigo-600"
  },
  {
    icon: Briefcase,
    name: "Kickstack",
    email: "kickstack@gradxpert.in",
    notes: "Internship help, certificate issues",
    color: "from-emerald-500 to-green-600"
  },
  {
    icon: FolderOpen,
    name: "Powerfolio",
    email: "powerfolio@gradxpert.in",
    notes: "Project listing, profile issues",
    color: "from-orange-500 to-red-500"
  },
  {
    icon: Rocket,
    name: "BoldtStartup",
    email: "boldt@gradxpert.in",
    notes: "Startup mentorship, pitch queries",
    color: "from-red-500 to-pink-500"
  }
];

const socialPlatforms = [
  {
    icon: Linkedin,
    name: "LinkedIn",
    handle: "linkedin.com/company/gradxpert",
    url: "https://linkedin.com/company/gradxpert",
    color: "from-blue-600 to-blue-700"
  },
  {
    icon: Instagram,
    name: "Instagram",
    handle: "instagram.com/gradxpert.in",
    url: "https://instagram.com/gradxpert.in",
    color: "from-pink-500 to-purple-600"
  },
  {
    icon: Youtube,
    name: "YouTube",
    handle: "youtube.com/@gradxpert",
    url: "https://youtube.com/@gradxpert",
    color: "from-red-500 to-red-600"
  },
  {
    icon: MessageSquare,
    name: "WhatsApp Channel",
    handle: "Join Here",
    url: "#",
    color: "from-green-500 to-green-600"
  }
];

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    purpose: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmitStatus('success');
      setFormData({ name: '', email: '', purpose: '', message: '' });

      // Reset status after 3 seconds
      setTimeout(() => setSubmitStatus('idle'), 3000);
    }, 1500);
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
              <MessageSquare className="h-12 w-12 text-blue-600 hidden md:block" />

              <h1 className="text-4xl lg:text-5xl font-bold text-slate-900 mb-2 tracking-tight">
                Contact{' '}
                <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                  GradXpert
                </span>
              </h1>
            </div>
            <p className="text-lg text-slate-700 mb-8 max-w-3xl mx-auto leading-relaxed">
              Whether you're a student, parent, campus, mentor, or partner — we're here to help.
            </p>
            <div className="bg-white/80 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 shadow-lg max-w-2xl mx-auto">
              <p className="text-slate-800 font-medium">
                India's most comprehensive career ecosystem is just a message away
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-16 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center md:justify-center space-x-3">
              <MessageCircle className="h-8 w-8 text-blue-600" />
              <span>Have Questions?</span>
            </h2>
            <p className="text-xl text-slate-700">Fill out this form and we'll get back to you within 24 hours</p>
          </div>

          <div className="bg-gradient-to-br from-blue-50 to-indigo-50 p-8 rounded-2xl border border-blue-200">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium text-slate-700 mb-2">
                    Full Name *
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your full name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium text-slate-700 mb-2">
                    Email Address *
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleInputChange}
                    required
                    className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                    placeholder="Enter your email address"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="purpose" className="block text-sm font-medium text-slate-700 mb-2">
                  Purpose of Contact *
                </label>
                <select
                  id="purpose"
                  name="purpose"
                  value={formData.purpose}
                  onChange={handleInputChange}
                  required
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300"
                >
                  <option value="">Select a purpose</option>
                  <option value="student-support">Student Support</option>
                  <option value="campus-partnership">Campus Partnership</option>
                  <option value="mentorship">Mentorship/Hiring</option>
                  <option value="media">Media/Press</option>
                  <option value="partnership">Strategic Partnership</option>
                  <option value="other">Other</option>
                </select>
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium text-slate-700 mb-2">
                  Message *
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleInputChange}
                  required
                  rows={5}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all duration-300 resize-none"
                  placeholder="Tell us how we can help you..."
                />
              </div>

              <div className="text-center">
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center space-x-3 mx-auto"
                >
                  {isSubmitting ? (
                    <>
                      <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white"></div>
                      <span>Sending...</span>
                    </>
                  ) : (
                    <>
                      <Send className="h-5 w-5" />
                      <span>Send Message</span>
                    </>
                  )}
                </button>

                {submitStatus === 'success' && (
                  <div className="mt-4 flex items-center justify-center space-x-2 text-emerald-600">
                    <CheckCircle className="h-5 w-5" />
                    <span className="font-medium">Message sent successfully! We'll get back to you within 24 hours.</span>
                  </div>
                )}

                {submitStatus === 'error' && (
                  <div className="mt-4 flex items-center justify-center space-x-2 text-red-600">
                    <AlertCircle className="h-5 w-5" />
                    <span className="font-medium">Something went wrong. Please try again.</span>
                  </div>
                )}
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* Trust & Privacy */}

      <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            {/* Heading */}
            <div className="flex items-center justify-center space-x-3 mb-4">
              <Shield className="h-6 w-6 text-slate-600" />
              <h3 className="text-lg font-bold text-slate-900">Trust & Privacy</h3>
            </div>

            {/* Subtitle */}
            <p className="text-slate-600 mb-6">We respect your data and privacy.</p>

            {/* Links */}
            <div className="flex flex-wrap justify-center gap-4">
              {/* Privacy Policy */}
              <Link
                to="/privacy-policy"
                className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300"
              >
                <FileText className="h-4 w-4" />
                <span>Privacy Policy</span>
              </Link>

              <span className="text-slate-400">|</span>

              {/* Terms & Conditions */}
              <Link
                to="/terms-and-conditions"
                className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-medium transition-colors duration-300"
              >
                <FileText className="h-4 w-4" />
                <span>Terms of Use</span>
              </Link>
            </div>
          </div>
        </div>
      </section>


      {/* Talk to the Right Team */}
      <section className="py-16 bg-white relative">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center md:justify-center space-x-3">
              <Mail className="h-8 w-8 text-blue-600" />
              <span>Talk to the Right Team</span>
            </h2>
            <p className="text-xl text-slate-700">Get connected with the right department for faster resolution</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {departments.map((dept, index) => {
              const Icon = dept.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-blue-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group">
                  <div className={`w-12 h-12 bg-gradient-to-r ${dept.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-3 text-lg">{dept.title}</h3>
                  <p className="text-slate-600 mb-4 text-sm leading-relaxed">{dept.purpose}</p>
                  <a
                    href={`mailto:${dept.email}`}
                    className="inline-flex items-center space-x-2 text-blue-600 hover:text-blue-700 font-medium text-sm transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{dept.email}</span>
                    <ExternalLink className="h-3 w-3" />
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

          <div className="bg-gradient-to-r from-purple-100 to-pink-100 p-8 rounded-2xl border border-purple-200 md:text-center">
            <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center md:justify-center space-x-2">
              <Mail className="h-5 w-5 text-purple-600" />
              <span>Newsletter Signup</span>
            </h3>
            <p className="text-slate-700 mb-6">Get the latest updates, success stories, and career insights</p>
            <div className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-xl border border-purple-300 focus:outline-none focus:ring-2 focus:ring-purple-500 focus:border-transparent"
              />
              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* our partners */}
      {/* <section className="py-12 bg-slate-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="md:text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center md:justify-center space-x-3">
              <Handshake className="h-8 w-8 text-green-600" />
              <span>Our Partners</span>
            </h2>
            <p className="text-lg text-slate-700">Trusted by leading organizations and platforms</p>
          </div>

          <div className="relative z-10 pb-12">
            <div className="overflow-hidden group">
              <div className="flex space-x-12 items-center motion-safe:animate-[scroll-left_8s_linear_infinite] md:motion-safe:animate-[scroll-left_15s_linear_infinite] lg:motion-safe:animate-[scroll-left_30s_linear_infinite] group-hover:[animation-play-state:paused]">
                {[
                  "https://gradxpert.com/brand-logos/startup-india-logo.jpg",
                  "https://gradxpert.com/brand-logos/iso-9001-logo.jpg",
                  "https://gradxpert.com/brand-logos/msme-logo.jpg",
                  "https://gradxpert.com/brand-logos/startup-andhra-pradesh-logo.jpg",
                  "https://gradxpert.com/brand-logos/google-for-education-partner-logo.jpg",
                  // "https://gradxpert.com/brand-logos/aicte-logo.jpg",
                  // "https://gradxpert.com/brand-logos/apsche-logo.jpg",
                  "https://gradxpert.com/brand-logos/apssdc-logo.jpg",
                  // "https://gradxpert.com/brand-logos/gem-logo.jpg",
                  // "https://gradxpert.com/brand-logos/nip-logo.jpg",
                  "https://gradxpert.com/brand-logos/nvidia-inception-program-logo.jpg",
                  // "https://gradxpert.com/brand-logos/skill-india-logo.jpg",
                  // duplicated again to make the scroll loop smoothly
                  "https://gradxpert.com/brand-logos/startup-india-logo.jpg",
                  "https://gradxpert.com/brand-logos/iso-9001-logo.jpg",
                  "https://gradxpert.com/brand-logos/msme-logo.jpg",
                  "https://gradxpert.com/brand-logos/startup-andhra-pradesh-logo.jpg",
                  "https://gradxpert.com/brand-logos/google-for-education-partner-logo.jpg",
                  // "https://gradxpert.com/brand-logos/aicte-logo.jpg",
                  // "https://gradxpert.com/brand-logos/apsche-logo.jpg",
                  "https://gradxpert.com/brand-logos/apssdc-logo.jpg",
                  // "https://gradxpert.com/brand-logos/gem-logo.jpg",
                  // "https://gradxpert.com/brand-logos/nip-logo.jpg",
                  "https://gradxpert.com/brand-logos/nvidia-inception-program-logo.jpg",
                  // "https://gradxpert.com/brand-logos/skill-india-logo.jpg"
                ].map((logo, index) => (
                  <div
                    key={index}
                    className="flex-shrink-0 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-sm"
                  >
                    <img
                      src={logo}
                      alt={`Partner logo ${index + 1}`}
                      className="w-full h-14 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section> */}

      {/* Social Media */}
      <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className=" md:text-center mb-12">
            {/* <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center md:justify-center space-x-3">
              <Globe className="h-12 w-12 md:h-8 md:w-8 text-purple-600" />
              <span>Follow Us & Stay Connected</span>
            </h2> */}
            <p className="text-xl text-slate-700">Join our community across all platforms</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {socialPlatforms.map((platform, index) => {
              const Icon = platform.icon;
              return (
                <a
                  key={index}
                  href={platform.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-purple-300 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1 group md:text-center"
                >
                  <div className={`w-12 h-12 bg-gradient-to-r ${platform.color} rounded-xl flex items-center justify-center md:mx-auto mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{platform.name}</h3>
                  <p className="text-slate-600 text-sm">{platform.handle}</p>
                </a>
              );
            })}
          </div>
        </div>
      </section>




      {/* Visit Our Office
      <section className="py-16 bg-gradient-to-br from-blue-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <MapPin className="h-8 w-8 text-emerald-600" />
                <span>Visit Our Office</span>
              </h2>

              <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-slate-200 shadow-lg">
                <h3 className="text-xl font-bold text-slate-900 mb-4 flex items-center space-x-2">
                  <Building className="h-5 w-5 text-emerald-600" />
                  <span>GradXpert HQ</span>
                </h3>

                <div className="space-y-4 mb-6">
                  <div className="flex items-start space-x-3">
                    <MapPin className="h-5 w-5 text-slate-600 mt-1 flex-shrink-0" />
                    <div>
                      <p className="text-slate-700 font-medium">Plot No. X, Startup Incubation Hub,</p>
                      <p className="text-slate-700">XYZ Tech Park, Gachibowli,</p>
                      <p className="text-slate-700">Hyderabad – 500032</p>
                    </div>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Clock className="h-5 w-5 text-slate-600" />
                    <span className="text-slate-700 font-medium">Mon–Sat: 10 AM – 6 PM IST</span>
                  </div>

                  <div className="flex items-center space-x-3">
                    <Phone className="h-5 w-5 text-slate-600" />
                    <a href="tel:+919812345612" className="text-blue-600 hover:text-blue-700 font-medium transition-colors">
                      +91-98XXXXXX12
                    </a>
                  </div>
                </div>

                <button className="w-full bg-gradient-to-r from-emerald-600 to-green-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <Globe className="h-5 w-5" />
                  <span>View on Google Maps</span>
                </button>
              </div>
            </div>

            <div className="relative">
              <div className="bg-gradient-to-br from-emerald-100 to-green-100 p-8 rounded-2xl border border-emerald-200">
                <div className="aspect-video bg-white rounded-xl shadow-lg flex items-center justify-center border border-slate-200">
                  <div className="text-center">
                    <MapPin className="h-12 w-12 text-emerald-600 mx-auto mb-4" />
                    <p className="text-slate-600 font-medium">Interactive Map</p>
                    <p className="text-slate-500 text-sm">Google Maps embed would go here</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      {/* Sub-Brands Directory */}
      {/* <section className="py-16 bg-gradient-to-br from-slate-50 to-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center justify-center space-x-3">
              <Settings className="h-8 w-8 text-slate-600" />
              <span>Quick Contact Directory</span>
            </h2>
            <p className="text-xl text-slate-700">Direct access to our ecosystem brands</p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {subBrands.map((brand, index) => {
              const Icon = brand.icon;
              return (
                <div key={index} className="bg-white/90 backdrop-blur-xl p-6 rounded-2xl border border-slate-200 hover:border-slate-300 transition-all duration-300 shadow-lg hover:shadow-xl group">
                  <div className={`w-10 h-10 bg-gradient-to-r ${brand.color} rounded-xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                    <Icon className="h-5 w-5 text-white" />
                  </div>
                  <h3 className="font-bold text-slate-900 mb-2">{brand.name}</h3>
                  <p className="text-slate-600 mb-3 text-sm">{brand.notes}</p>
                  <a
                    href={`mailto:${brand.email}`}
                    className="inline-flex items-center space-x-2 text-slate-700 hover:text-slate-900 font-medium text-sm transition-colors duration-300"
                  >
                    <Mail className="h-4 w-4" />
                    <span>{brand.email}</span>
                  </a>
                </div>
              );
            })}
          </div>
        </div>
      </section> */}



      {/* Community & Support */}
      {/* <section className="py-16 bg-gradient-to-br from-purple-50 to-pink-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 flex items-center space-x-3">
                <Users className="h-8 w-8 text-purple-600" />
                <span>Community & Support</span>
              </h2>
              <p className="text-xl text-slate-700 mb-8">
                Join our GradXpert Community to connect with peers and get support
              </p>

              <div className="space-y-4 mb-8">
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Get peer help and collaboration</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Ask career questions and get guidance</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-purple-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Find mentorship and collaboration opportunities</span>
                </div>
                <div className="flex items-center space-x-3">
                  <div className="w-2 h-2 bg-pink-500 rounded-full"></div>
                  <span className="text-slate-700 font-medium">Access exclusive resources and events</span>
                </div>
              </div>

              <button className="bg-gradient-to-r from-purple-600 to-pink-600 text-white px-8 py-4 rounded-xl font-bold text-lg hover:shadow-xl hover:shadow-purple-500/25 transition-all duration-300 hover:scale-105 flex items-center space-x-3">
                <MessageSquare className="h-5 w-5" />
                <span>Join Our Student Community</span>
              </button>
            </div>

            <div className="relative">
              <div className="bg-white/90 backdrop-blur-xl p-8 rounded-2xl border border-purple-200 shadow-lg">
                <div className="text-center mb-6">
                  <Heart className="h-12 w-12 text-purple-600 mx-auto mb-4" />
                  <h3 className="text-xl font-bold text-slate-900 mb-2">Careers at GradXpert</h3>
                  <p className="text-slate-600">Looking to build the future of education with us?</p>
                </div>
                <button className="w-full bg-gradient-to-r from-slate-800 to-black text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 hover:scale-105 flex items-center justify-center space-x-2">
                  <ExternalLink className="h-5 w-5" />
                  <a href="#careers">Visit Careers Page</a>
                </button>
              </div>
            </div>
          </div>
        </div>
      </section> */}



      {/* Footer CTA */}
      {/* <section className="py-16 bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-white/10 backdrop-blur-xl p-8 rounded-2xl border border-white/20">
            <h2 className="text-2xl sm:text-3xl font-bold text-white mb-6">Need Urgent Help?</h2>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
              <a
                href="tel:+919812345612"
                className="bg-white text-blue-600 px-6 py-3 rounded-xl font-bold hover:shadow-xl transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Phone className="h-5 w-5" />
                <span>Call +91-98XXXXXX12</span>
              </a>
              <span className="text-white/80 text-sm">or</span>
              <a
                href="mailto:support@gradxpert.in"
                className="border-2 border-white text-white px-6 py-3 rounded-xl font-bold hover:bg-white hover:text-blue-600 transition-all duration-300 hover:scale-105 flex items-center space-x-2"
              >
                <Mail className="h-5 w-5" />
                <span>Email Support</span>
              </a>
            </div>
            <p className="text-white/90 text-sm">
              📞 Mon–Sat, 10 AM – 6 PM IST | 📧 24/7 Email Support
            </p>
          </div>
        </div>
      </section> */}
    </div>
  );
};

export default ContactUs;