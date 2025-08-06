import React, { useState } from 'react';
import { ChevronDown, ChevronUp, HelpCircle, Sparkles, Users, BookOpen, Briefcase, Star, Crown, ChevronLeft, ChevronRight } from 'lucide-react';

const faqs = [
  {
    category: "General",
    icon: HelpCircle,
    color: "from-blue-500 to-indigo-500",
    questions: [
      {
        question: "What is GradXpert and how is it different from other platforms?",
        answer: "GradXpert is India's most comprehensive career ecosystem designed specifically for students. Unlike other platforms that offer just courses or just internships, we provide a complete integrated journey - from career clarity (StudentOS) to skill building (I/O School), real experience (Kickstack), portfolio building (Powerfolio), startup support (BoldtStartup), and elite recognition (Talent Pool). Everything works together to transform your career prospects."
      },
      {
        question: "Who can join GradXpert? Is it only for engineering students?",
        answer: "GradXpert is for ALL students - engineering, non-engineering, 1st year to final year, and even recent graduates. We have programs for Computer Science, Mechanical, Electrical, Civil, MBA, BBA, B.Com, and other streams. Our ecosystem is designed to help any student build a successful career regardless of their background."
      },
      {
        question: "How much does it cost to join GradXpert?",
        answer: "We offer multiple pricing options to suit different needs. Individual programs start from ₹2,999, while our comprehensive packages range from ₹9,999 to ₹49,999 for VIP Pro Elite. We also offer EMI options and scholarships for deserving students. The investment pays for itself through better job opportunities and higher packages."
      },
      {
        question: "Is GradXpert suitable for 1st and 2nd year students?",
        answer: "Absolutely! In fact, starting early gives you a huge advantage. 1st-2nd year students can use StudentOS for career clarity, begin with foundational I/O School courses, and start building their portfolio. Early starters often achieve the best outcomes because they have more time to build skills and experience."
      }
    ]
  },
  {
    category: "Programs",
    icon: BookOpen,
    color: "from-purple-500 to-pink-500",
    questions: [
      {
        question: "What is StudentOS and what tools does it include?",
        answer: "StudentOS is our AI-powered productivity suite with 15+ tools including Career Compass AI (career guidance), Resume Builder Pro, Interview Coach, Skill Gap Analyzer, Project Idea Generator, Study Planner AI, and more. These tools help you organize your career journey, save time, and make smarter decisions about your future."
      },
      {
        question: "How are I/O School courses different from YouTube or other online courses?",
        answer: "I/O School courses are job-focused, not just theory-focused. Every course includes real projects, live mentorship, industry workflows, and direct connection to internship opportunities. You get personalized feedback, peer learning, and most importantly - practical skills that employers actually want."
      },
      {
        question: "What kind of internships are available through Kickstack?",
        answer: "Kickstack offers 4-week intensive internships in Web Development, AI/ML, Product Management, Digital Marketing, Data Science, UI/UX Design, DevOps, and more. These aren't just certificates - you work on real projects with deadlines, teams, and industry mentors. You get both the experience and a verified portfolio project."
      },
      {
        question: "How does Powerfolio help with job applications?",
        answer: "Powerfolio creates a professional public portfolio that showcases all your projects, internships, certificates, and achievements in one place. Recruiters can see your actual work, not just your resume. Many students get interview calls directly through their Powerfolio links. It's like LinkedIn, but focused on proof of work."
      }
    ]
  },
  {
    category: "Outcomes & Success",
    icon: Star,
    color: "from-emerald-500 to-green-500",
    questions: [
      {
        question: "What kind of job packages do GradXpert students get?",
        answer: "Our students have landed packages ranging from ₹4 LPA to ₹25+ LPA at companies like Google, Microsoft, Amazon, TCS, Infosys, Flipkart, Zomato, and many startups. The average package improvement is 40-60% compared to their peers. More importantly, they get jobs they actually want, not just any job."
      },
      {
        question: "How many students have been successfully placed?",
        answer: "Over 2,500+ students have been placed in top companies, 150+ have launched their own startups (raising ₹25+ Cr total funding), and 5,000+ have completed successful internships. Our success rate is high because we focus on building real skills and providing actual experience, not just certificates."
      },
      {
        question: "Do you provide placement guarantee?",
        answer: "While we don't provide blanket placement guarantees, our VIP Pro members get dedicated placement support, interview preparation, and priority access to our company network. Our track record speaks for itself - students who complete the full ecosystem have significantly higher placement rates and better packages."
      },
      {
        question: "How long does it take to see results?",
        answer: "Most students start seeing results within 2-3 months - better clarity, improved skills, and increased confidence. Significant outcomes like internships and job offers typically happen within 6-12 months for students who actively engage with the ecosystem. The key is consistent participation and completing projects."
      }
    ]
  },
  {
    category: "VIP Pro & Premium",
    icon: Crown,
    color: "from-yellow-500 to-orange-500",
    questions: [
      {
        question: "What's included in VIP Pro and is it worth the investment?",
        answer: "VIP Pro includes premium access to all 6 ecosystem programs, personal career strategist, 1-on-1 mentorship, priority internship placement, exclusive company network access, and lifetime career support. If you're serious about transforming your career, VIP Pro provides the fastest path to success with guaranteed support."
      },
      {
        question: "How is VIP Pro Elite different from regular VIP Pro?",
        answer: "VIP Pro Elite is our most exclusive tier (limited to 100 members) with direct C-suite mentor access, guaranteed Talent Pool entry, investor network access for startups, global opportunity access, and white-glove career support. It's designed for students who want to be in the top 1% of their field."
      },
      {
        question: "Can I upgrade from individual programs to VIP Pro later?",
        answer: "Yes, you can upgrade anytime and we'll adjust the pricing based on what you've already paid. However, VIP Pro members get priority access to mentors, exclusive opportunities, and better support, so upgrading early maximizes your benefits."
      },
      {
        question: "What is the Talent Pool and how do I qualify?",
        answer: "The Talent Pool is our elite recognition program for top 10% performers. To qualify, you need to complete 2+ I/O School courses, 1+ Kickstack internship, maintain an active Powerfolio, and have a 4.5+ rating. Talent Pool members get featured in company dashboards, priority job access, and exclusive networking opportunities."
      }
    ]
  }
];

const FAQ = () => {
  const [activeCategory, setActiveCategory] = useState(0);
  const [openQuestions, setOpenQuestions] = useState<{ [key: string]: boolean }>({});
  const [currentCategorySlide, setCurrentCategorySlide] = useState(0);

  const toggleQuestion = (categoryIndex: number, questionIndex: number) => {
    const key = `${categoryIndex}-${questionIndex}`;
    setOpenQuestions(prev => ({
      ...prev,
      [key]: !prev[key]
    }));
  };

  const nextCategory = () => {
    setCurrentCategorySlide((prev) => (prev + 1) % Math.ceil(faqs.length / 2));
  };

  const prevCategory = () => {
    setCurrentCategorySlide((prev) => (prev - 1 + Math.ceil(faqs.length / 2)) % Math.ceil(faqs.length / 2));
  };
  return (
    <section className="py-20 bg-gradient-to-br from-slate-50 via-blue-50 to-indigo-50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_30%,rgba(59,130,246,0.08),transparent_70%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_70%,rgba(99,102,241,0.08),transparent_70%)]"></div>
      </div>
      
      {/* Subtle grid */}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.02)_1px,transparent_1px)] bg-[size:60px_60px]"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-slate-900 mb-6 tracking-tight flex items-center justify-center md:justify-center space-x-4 text-left md:text-center">
            <HelpCircle className="h-8 w-8 text-blue-600" />
            <span>Frequently Asked{' '}
            <span className="bg-gradient-to-r from-blue-600 to-indigo-600 bg-clip-text text-transparent">
              Questions
            </span></span>
          </h2>
          <p className="text-xl text-slate-700 max-w-3xl mx-auto leading-relaxed">
            Everything you need to know about GradXpert and how it can transform your career
          </p>
        </div>

        {/* Categories Section - Horizontal on Desktop, Slider on Mobile/Tablet */}
        <div className="mb-12">
          {/* Desktop - Horizontal Categories */}
          <div className="hidden lg:flex justify-center space-x-4 mb-8">
            {faqs.map((category, index) => {
              const Icon = category.icon;
              return (
                <button
                  key={index}
                  onClick={() => setActiveCategory(index)}
                  className={`flex items-center space-x-3 px-6 py-4 rounded-2xl text-left transition-all duration-300 ${
                    activeCategory === index
                      ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
                      : 'bg-white/80 backdrop-blur-xl text-slate-700 hover:bg-white/90 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl hover:scale-105'
                  }`}
                >
                  <Icon className="h-6 w-6" />
                  <div>
                    <span className="font-bold text-base">{category.category}</span>
                    {/* <div className="text-xs opacity-80">{category.questions.length} questions</div> */}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Mobile/Tablet - Sliding Categories */}
          <div className="lg:hidden mb-8">
            <div className="relative">
              <div className="overflow-hidden rounded-2xl">
                <div 
                  className="flex transition-transform duration-300 ease-in-out"
                  style={{ transform: `translateX(-${currentCategorySlide * 100}%)` }}
                >
                  {Array.from({ length: Math.ceil(faqs.length / 2) }).map((_, slideIndex) => (
                    <div key={slideIndex} className="w-full flex-shrink-0 px-2">
                      <div className="grid grid-cols-2 gap-4">
                        {faqs.slice(slideIndex * 2, slideIndex * 2 + 2).map((category, index) => {
                          const Icon = category.icon;
                          const categoryIndex = slideIndex * 2 + index;
                          return (
                            <button
  key={categoryIndex}
  onClick={() => setActiveCategory(categoryIndex)}
  className={`flex items-center space-x-3 p-4 rounded-2xl text-left transition-all duration-300 ${
    activeCategory === categoryIndex
      ? `bg-gradient-to-r ${category.color} text-white shadow-xl scale-105`
      : 'bg-white/80 backdrop-blur-xl text-slate-700 hover:bg-white/90 border border-slate-200 hover:border-slate-300 shadow-lg hover:shadow-xl hover:scale-105'
  }`}
>
  <Icon className="h-6 w-6 flex-shrink-0" />
  <span className="font-bold text-sm">{category.category}</span>
</button>

                          );
                        })}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              
              {/* Navigation Buttons
              <button 
                type="button"
                aria-label="Previous category"
                onClick={prevCategory}
                className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-xl p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronLeft className="h-5 w-5 text-slate-600" />
              </button>
              <button 
                type="button"
                aria-label="Next category"
                onClick={nextCategory}
                className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-white/90 backdrop-blur-xl p-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300"
              >
                <ChevronRight className="h-5 w-5 text-slate-600" />
              </button> */}
              
              {/* Dots Indicator */}
              <div className="flex justify-center space-x-2 mt-6">
                {Array.from({ length: Math.ceil(faqs.length / 2) }).map((_, index) => (
                  <button
                    key={index}
                    type="button"
                    aria-label={`Go to slide ${index + 1}`}
                    onClick={() => setCurrentCategorySlide(index)}
                    className={`w-3 h-3 rounded-full transition-all duration-300 ${
                      index === currentCategorySlide 
                        ? 'bg-blue-600 scale-125' 
                        : 'bg-slate-300 hover:bg-slate-400'
                    }`}
                  ></button>
                ))}
              </div>
            </div>
          </div>
        </div>
        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
            <div className="bg-white/80 backdrop-blur-xl rounded-2xl border border-slate-200 shadow-lg overflow-hidden">
              {/* Category Header */}
              <div className={`bg-gradient-to-r ${faqs[activeCategory].color} p-6 text-white`}>
                <div className="flex items-center space-x-3">
                  {React.createElement(faqs[activeCategory].icon, { className: "h-6 w-6" })}
                  <h3 className="text-xl font-bold">{faqs[activeCategory].category} Questions</h3>
                </div>
                {/* <p className="text-white/90 mt-2">
                  {faqs[activeCategory].questions.length} questions in this category
                </p> */}
              </div>

              {/* Questions */}
              <div className="p-6">
                <div className="space-y-4">
                  {faqs[activeCategory].questions.map((faq, questionIndex) => {
                    const isOpen = openQuestions[`${activeCategory}-${questionIndex}`];
                    return (
                      <div
                        key={questionIndex}
                        className="border border-slate-200 rounded-xl overflow-hidden hover:border-blue-300 transition-all duration-300"
                      >
                        <button
                          onClick={() => toggleQuestion(activeCategory, questionIndex)}
                          className="w-full flex items-center justify-between p-4 text-left hover:bg-slate-50 transition-colors duration-300"
                        >
                          <span className="font-semibold text-slate-900 pr-4">
                            {faq.question}
                          </span>
                          <div className="flex-shrink-0">
                            {isOpen ? (
                              <ChevronUp className="h-5 w-5 text-slate-600" />
                            ) : (
                              <ChevronDown className="h-5 w-5 text-slate-600" />
                            )}
                          </div>
                        </button>
                        
                        {isOpen && (
                          <div className="px-4 pb-4 border-t border-slate-100">
                            <div className="pt-4">
                              <p className="text-slate-700 leading-relaxed">
                                {faq.answer}
                              </p>
                            </div>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
        </div>

      </div>
    </section>
  );
};

export default FAQ;