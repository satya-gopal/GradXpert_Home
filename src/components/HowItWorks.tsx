import React from 'react';
import {
  ArrowRight,
  Brain,
  BookOpen,
  Briefcase,
  FileText,
  Award,
  TrendingUp,
  Workflow,
} from 'lucide-react';

const steps = [
  {
    icon: Brain,
    title: "Discover Your Career Path",
    description: "Use our Mentors & AI tools to map your interests",
    color: "from-blue-500 to-blue-600"
  },
  {
    icon: BookOpen,
    title: "Learn from Experts",
    description: "Take job-ready courses at I/O School",
    color: "from-purple-500 to-purple-600"
  },
  {
    icon: Briefcase,
    title: "Get Real Experience",
    description: "Join internships via Kickstack",
    color: "from-green-500 to-green-600"
  },
  {
    icon: FileText,
    title: "Build Public Proof",
    description: "Showcase on Powerfolio",
    color: "from-orange-500 to-orange-600"
  },
  {
    icon: Award,
    title: "Get Recognized",
    description: "Join the GradXpert Talent Pool",
    color: "from-red-500 to-red-600"
  },
  {
    icon: TrendingUp,
    title: "Level Up",
    description: "Apply to jobs, build your startup, or get mentorship",
    color: "from-teal-500 to-teal-600"
  }
];

const HowItWorks = () => {
  const [currentStep, setCurrentStep] = React.useState(0);

  // Auto-slide on mobile
  React.useEffect(() => {
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const interval = setInterval(() => {
      setCurrentStep((prev) => (prev + 1) % steps.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="py-20 md:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold text-gray-900 mb-4 text-left md:text-center">
            <div className="flex md:justify-center items-center space-x-4 mb-2">
              <Workflow className="h-10 w-10  text-blue-600" />
              <span>How It Works</span>
            </div>
          </h2>
          <p className="text-xl text-gray-600 mb-8 text-left md:text-center">
            From Confused to Career-Ready in 6 Steps
          </p>

          {/* Process Flow Pills */}
          <div className="flex flex-wrap justify-center items-center gap-2 text-sm font-semibold text-slate-700 mb-8">
            {[
              { label: "Clarity", color: "from-blue-100 to-blue-200", text: "text-blue-800", border: "border-blue-300" },
              { label: "Skilling", color: "from-purple-100 to-purple-200", text: "text-purple-800", border: "border-purple-300" },
              { label: "Projects", color: "from-green-100 to-green-200", text: "text-green-800", border: "border-green-300" },
              { label: "Internship", color: "from-emerald-100 to-emerald-200", text: "text-emerald-800", border: "border-emerald-300" },
              { label: "Portfolio", color: "from-orange-100 to-orange-200", text: "text-orange-800", border: "border-orange-300" },
              { label: "Jobs", color: "from-red-100 to-red-200", text: "text-red-800", border: "border-red-300" },
              { label: "Growth", color: "from-teal-100 to-teal-200", text: "text-teal-800", border: "border-teal-300" }
            ].map((item, idx) => (
              <React.Fragment key={item.label}>
                <span className={`bg-gradient-to-r ${item.color} px-3 py-2 rounded-lg border ${item.border} ${item.text}`}>
                  {item.label}
                </span>
                {idx < 6 && (
                  <ArrowRight className="h-4 w-4 text-blue-300" />
                )}
              </React.Fragment>
            ))}
          </div>

          {/* Mobile Slider with Controls */}
<div className="md:hidden">
  <div className="relative overflow-hidden rounded-xl">

    {/* Left & Right Buttons */}
    <button
      onClick={() => setCurrentStep((prev) => Math.max(prev - 1, 0))}
      className="absolute left-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md disabled:opacity-50"
      disabled={currentStep === 0}
    >
      <ArrowRight className="h-4 w-4 rotate-180 text-blue-600" />
    </button>

    <button
      onClick={() => setCurrentStep((prev) => Math.min(prev + 1, steps.length - 1))}
      className="absolute right-2 top-1/2 transform -translate-y-1/2 z-10 bg-white/70 backdrop-blur-md p-2 rounded-full shadow-md disabled:opacity-50"
      disabled={currentStep === steps.length - 1}
    >
      <ArrowRight className="h-4 w-4 text-blue-600" />
    </button>

    <div
      className="flex transition-transform duration-300 ease-in-out"
      style={{ transform: `translateX(-${currentStep * 100}%)` }}
    >
      {steps.map((step, index) => {
        const Icon = step.icon;
        return (
          <div key={index} className="w-full flex-shrink-0 px-6">
            <div className="bg-white/80 backdrop-blur-xl p-0 rounded-xl border border-slate-200 shadow-lg text-center">
              <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                <Icon className="h-6 w-6 text-white" />
              </div>
              <h3 className="font-bold text-slate-900 mb-2 text-base">{step.title}</h3>
              <p className="text-slate-600 text-xs leading-relaxed">{step.description}</p>
            </div>
          </div>
        );
      })}
    </div>

    {/* Dots */}
    <div className="flex justify-center space-x-2 mt-6">
      {steps.map((_, index) => (
        <button
          key={index}
          type="button"
          aria-label={`Go to step ${index + 1}`}
          onClick={() => setCurrentStep(index)}
          className={`w-3 h-3 rounded-full transition-all duration-300 ${
            index === currentStep
              ? 'bg-blue-600 scale-125'
              : 'bg-slate-300 hover:bg-slate-400'
          }`}
        ></button>
      ))}
    </div>
  </div>
</div>
        </div>

        {/* Desktop Grid */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div key={index} className="relative group">
                <div className="bg-white p-6 rounded-2xl shadow-sm hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border border-gray-100">
                  <div className={`w-12 h-12 bg-gradient-to-r ${step.color} rounded-xl flex items-center justify-center mb-4`}>
                    <Icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-gray-900 mb-2 text-base">{step.title}</h3>
                  <p className="text-gray-600 text-sm">{step.description}</p>
                </div>
                {index < steps.length - 1 && (
                  <div className="hidden lg:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                    <ArrowRight className="h-6 w-6 text-blue-300" />
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
