import React from 'react';
import { ArrowRight, Search, Sparkles, Zap } from 'lucide-react';

const Hero = () => {
  return (
    // <section className="relative bg-white section-padding pt-32 md:pt-40 overflow-hidden">
      <section className="relative  bg-gradient-to-br from-gray-50/30 via-white to-indigo-50/20 pt-32 md:pt-40  overflow-hidden grid-pattern">

      {/* Animated background elements */}
      {/* <div className="absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_80%,rgba(59,130,246,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_80%_20%,rgba(147,51,234,0.1),transparent_50%)]"></div>
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_40%_40%,rgba(236,72,153,0.1),transparent_50%)]"></div>
      </div> */}
      
      {/* Floating particles */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400/60 rounded-full animate-ping"></div>
        <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400/60 rounded-full animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400/60 rounded-full animate-bounce"></div>
        <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400/60 rounded-full animate-ping"></div>
      </div>
      
      {/* Grid pattern overlay */}
      {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(59,130,246,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(59,130,246,0.03)_1px,transparent_1px)] bg-[size:50px_50px]"></div> */}
      
      <div className="container-2xl mx-auto px-6 lg:px-8 relative pt-12 md:pt-6 lg:pt-0 z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <div className="relative mb-10">
              <h1 className="text-4xl  lg:text-5xl font-bold text-slate-900 mb-4 md:mb-6 leading-tight tracking-tight">
                Career{' '}
                <span className="relative">
                  <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
                    Ecosystem
                  </span>
                  <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 blur-xl"></div>
                </span>
                <br />
                for{' '}
                <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
                  Students
                </span>
              </h1>
              <div className="absolute -top-4 md:-top-8 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0">
                <div className="flex space-x-2">
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-blue-500 animate-spin" />
                  <Zap className="h-4 w-4 md:h-5 md:w-5 text-purple-500 animate-pulse" />
                  <Sparkles className="h-4 w-4 md:h-5 md:w-5 text-pink-500 animate-bounce" />
                </div>
              </div>
            </div>
            
            <p className="text-lg  text-blue-700 mb-4 md:mb-5 font-semibold tracking-wide">
              Become the expert in you
            </p>
            <p className="text-sm md:text-base text-slate-600 mb-6 md:mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
              Get career clarity, master job-ready skills, build real projects, land internships, 
              and showcase proof — all in one sophisticated platform designed for the future.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3 md:gap-5 justify-center lg:justify-start items-center mb-8 md:mb-12">
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden transition-all duration-300">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center space-x-3  justify-center">
                  <span>Start Your Journey</span>
                  <ArrowRight className="h-4 w-4 md:h-5 md:w-5 group-hover:translate-x-1 transition-transform" />
                </div>
              </button>
              <button className="w-full sm:w-auto px-6 md:px-8 py-3 md:py-4 rounded-xl md:rounded-2xl font-bold text-sm md:text-base group border-2 border-blue-300 text-blue-700 hover:bg-blue-50 hover:border-blue-400 hover:shadow-lg hover:shadow-blue-400/25 backdrop-blur-sm flex items-center justify-center space-x-3 transition-all duration-300">
                <Search className="h-4 w-4 md:h-5 md:w-5" />
                <span>Explore Ecosystem</span>
              </button>
            </div>
            
            {/* Trust Indicators */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-4 text-center">
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-slate-200 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-1">10,000+</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">Students Impact</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-slate-200 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">100%</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">Student-Focused</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-slate-200 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">NEP 2020</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">Aligned</div>
              </div>
              <div className="bg-white/80 backdrop-blur-sm p-3 md:p-4 rounded-xl border border-slate-200 hover:scale-105 transition-all duration-300 shadow-sm hover:shadow-md">
                <div className="text-lg md:text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">Verified</div>
                <div className="text-xs md:text-sm text-slate-600 font-medium">Outcomes</div>
              </div>
            </div>
          </div>
          
          {/* Hero Image */}
          <div className="relative">
            <div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-purple-500/20">
              <img 
                src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
                alt="Students collaborating on futuristic technology"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-purple-900/60 via-transparent to-blue-900/20"></div>
              <div className="absolute inset-0 bg-gradient-to-r from-purple-500/10 to-blue-500/10"></div>
            </div>
            
            {/* Floating UI elements */}
            <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-purple-500 p-3 rounded-xl shadow-2xl animate-float">
              <div className="text-white text-center">
                <div className="text-sm font-bold">AI-Powered</div>
                <div className="text-xs opacity-90">Career Guidance</div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-pink-500 to-orange-500 p-3 rounded-xl shadow-2xl animate-float-delayed">
              <div className="text-white text-center">
                <div className="text-sm font-bold">Real Projects</div>
                <div className="text-xs opacity-90">Industry Ready</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Brands and Partners Section - Integrated */}
      {/* <div className="container-2xl mx-auto relative z-10 py-12">
  <div className="mb-8 overflow-hidden group">
    <div className="flex space-x-12 items-center motion-safe:animate-[scroll-left_5s_linear_infinite] lg:motion-safe:animate-[scroll-left_30s_linear_infinite] group-hover:[animation-play-state:paused]">
      {[
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
      ].concat([
        "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
        "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
        "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
      ]).map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-24 h-10 flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl border border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <img
            src={logo}
            alt="Partner brand"
            className="max-w-20 max-h-8  object-contain filter opacity-70 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>

  <div className="overflow-hidden group">
    <div className="flex space-x-12 items-center motion-safe:animate-[scroll-right_5s_linear_infinite] lg:motion-safe:animate-[scroll-right_30s_linear_infinite] group-hover:[animation-play-state:paused]">
      {[
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Uber_logo_2018.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Flipkart_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
      ].concat([
        "https://upload.wikimedia.org/wikipedia/commons/0/05/Facebook_Logo_%282019%29.png",
        "https://upload.wikimedia.org/wikipedia/commons/8/82/Telegram_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/4/4f/Twitter-logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/c/ca/LinkedIn_logo_initials.png",
        "https://upload.wikimedia.org/wikipedia/commons/9/95/Instagram_logo_2022.svg",
        "https://upload.wikimedia.org/wikipedia/commons/3/31/Uber_logo_2018.svg",
        "https://upload.wikimedia.org/wikipedia/commons/1/11/Flipkart_logo.svg",
        "https://upload.wikimedia.org/wikipedia/commons/2/24/Paytm_Logo_%28standalone%29.svg"
      ]).map((logo, index) => (
        <div
          key={index}
          className="flex-shrink-0 w-24 h-10  flex items-center justify-center bg-white/70 backdrop-blur-sm rounded-xl border border-white/40 hover:border-white/60 transition-all duration-300 hover:scale-105 shadow-lg"
        >
          <img
            src={logo}
            alt="Partner brand"
            className="max-w-20 max-h-8 object-contain filter opacity-70 hover:opacity-100 transition-all duration-300"
          />
        </div>
      ))}
    </div>
  </div>
</div> */}
<div className="relative z-10 pt-16 pb-12">
  <div className="overflow-hidden group">
    <div className="flex space-x-12 items-center motion-safe:animate-[scroll-left_8s_linear_infinite] md:motion-safe:animate-[scroll-left_15s_linear_infinite] lg:motion-safe:animate-[scroll-left_30s_linear_infinite] group-hover:[animation-play-state:paused]">
      {[
        "https://gradxpert.com/brand-logos/startup-india-logo.jpg",
        "https://gradxpert.com/brand-logos/iso-9001-logo.jpg",
        "https://gradxpert.com/brand-logos/msme-logo.jpg",
        "https://gradxpert.com/brand-logos/startup-andhra-pradesh-logo.jpg",
        "https://gradxpert.com/brand-logos/google-for-education-partner-logo.jpg",
        "https://gradxpert.com/brand-logos/aicte-logo.jpg",
        "https://gradxpert.com/brand-logos/apsche-logo.jpg",
        "https://gradxpert.com/brand-logos/apssdc-logo.jpg",
        "https://gradxpert.com/brand-logos/gem-logo.jpg",
        "https://gradxpert.com/brand-logos/nip-logo.jpg",
        "https://gradxpert.com/brand-logos/nvidia-inception-program-logo.jpg",
        "https://gradxpert.com/brand-logos/skill-india-logo.jpg",
        // duplicated again to make the scroll loop smoothly
        "https://gradxpert.com/brand-logos/startup-india-logo.jpg",
        "https://gradxpert.com/brand-logos/iso-9001-logo.jpg",
        "https://gradxpert.com/brand-logos/msme-logo.jpg",
        "https://gradxpert.com/brand-logos/startup-andhra-pradesh-logo.jpg",
        "https://gradxpert.com/brand-logos/google-for-education-partner-logo.jpg",
        "https://gradxpert.com/brand-logos/aicte-logo.jpg",
        "https://gradxpert.com/brand-logos/apsche-logo.jpg",
        "https://gradxpert.com/brand-logos/apssdc-logo.jpg",
        "https://gradxpert.com/brand-logos/gem-logo.jpg",
        "https://gradxpert.com/brand-logos/nip-logo.jpg",
        "https://gradxpert.com/brand-logos/nvidia-inception-program-logo.jpg",
        "https://gradxpert.com/brand-logos/skill-india-logo.jpg"
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
    </section>
  );
};

export default Hero;

// import React from 'react';
// import { ArrowRight, Search, Sparkles, Zap } from 'lucide-react';

// const Hero = () => {
//   return (
//     <section className="relative bg-white pt-28 pb-20 overflow-hidden grid-pattern">
//       {/* Animated background elements */}
//       <div className="absolute inset-0">
//         <div className="absolute inset-0 bg-gradient-to-b from-white via-slate-50/30 to-white"></div>
//       </div>
      
//       {/* Floating particles */}
//       <div className="absolute inset-0 overflow-hidden">
//         <div className="absolute top-1/4 left-1/4 w-2 h-2 bg-blue-400 rounded-full animate-ping"></div>
//         <div className="absolute top-3/4 right-1/4 w-1 h-1 bg-purple-400 rounded-full animate-pulse"></div>
//         <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-pink-400 rounded-full animate-bounce"></div>
//         <div className="absolute top-1/3 right-1/3 w-1 h-1 bg-emerald-400 rounded-full animate-ping"></div>
//       </div>
      
//       {/* Grid pattern overlay */}
//       {/* <div className="absolute inset-0 bg-[linear-gradient(rgba(71,85,105,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(71,85,105,0.08)_1px,transparent_1px)] bg-[size:50px_50px]"></div> */}
      
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
//         <div className="grid lg:grid-cols-2 gap-12 items-center">
//           <div className="text-center lg:text-left pt-8">
//             <div className="relative mb-8">
//               <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 mb-6 leading-tight tracking-tight">
//                 Career{' '}
//                 <span className="relative">
//                   <span className="bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
//                     Ecosystem
//                   </span>
//                   <div className="absolute -inset-1 bg-gradient-to-r from-blue-200/30 via-purple-200/30 to-pink-200/30 blur-xl"></div>
//                 </span>
//                 <br />
//                 for{' '}
//                 <span className="bg-gradient-to-r from-emerald-600 via-teal-600 to-cyan-600 bg-clip-text text-transparent">
//                   Students
//                 </span>
//               </h1>
//               <div className="absolute -top-6 left-1/2 lg:left-0 transform -translate-x-1/2 lg:translate-x-0">
//                 <div className="flex space-x-2">
//                   <Sparkles className="h-4 w-4 text-blue-500 animate-spin" />
//                   <Zap className="h-4 w-4 text-purple-500 animate-pulse" />
//                   <Sparkles className="h-4 w-4 text-pink-500 animate-bounce" />
//                 </div>
//               </div>
//             </div>
            
//             <p className="text-lg sm:text-xl text-blue-700 mb-4 font-medium tracking-wide">
//               Become the expert in you
//             </p>
//             <p className="text-base text-slate-700 mb-8 max-w-2xl mx-auto lg:mx-0 leading-relaxed">
//               Get career clarity, master job-ready skills, build real projects, land internships, 
//               and showcase proof — all in one sophisticated platform designed for the future.
//             </p>
            
//             <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start items-center mb-12">
//               <button className="group relative bg-gradient-to-r from-blue-600 via-purple-600 to-pink-600 text-white px-8 py-3 rounded-xl font-semibold text-sm transition-all duration-300 hover:scale-105 hover:shadow-xl hover:shadow-purple-500/25 overflow-hidden">
//                 <div className="absolute inset-0 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
//                 <div className="relative flex items-center space-x-3">
//                   <span>Start Your Journey</span>
//                   <ArrowRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
//                 </div>
//               </button>
//               <button className="group border-2 border-blue-300 text-blue-700 px-8 py-3 rounded-xl font-semibold text-sm hover:bg-blue-50 hover:border-blue-400 transition-all duration-300 hover:shadow-lg hover:shadow-blue-400/25 backdrop-blur-sm flex items-center space-x-3">
//                 <Search className="h-4 w-4" />
//                 <span>Explore Ecosystem</span>
//               </button>
//             </div>
            
//             {/* Trust Indicators */}
//             <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
//               <div className="group flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm">
//                 <div className="text-xl font-bold bg-gradient-to-r from-emerald-600 to-blue-600 bg-clip-text text-transparent mb-1">10,000+</div>
//                 <div className="text-xs text-slate-600 font-medium">Students Impacted</div>
//               </div>
//               <div className="group flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm">
//                 <div className="text-xl font-bold bg-gradient-to-r from-green-600 to-emerald-600 bg-clip-text text-transparent mb-1">100%</div>
//                 <div className="text-xs text-slate-600 font-medium">Student-Focused</div>
//               </div>
//               <div className="group flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm">
//                 <div className="text-xl font-bold bg-gradient-to-r from-purple-600 to-pink-600 bg-clip-text text-transparent mb-1">NEP 2020</div>
//                 <div className="text-xs text-slate-600 font-medium">Aligned</div>
//               </div>
//               <div className="group flex flex-col items-center p-4 rounded-xl bg-white/70 backdrop-blur-xl border border-slate-200 hover:bg-white/90 transition-all duration-300 hover:scale-105 shadow-sm">
//                 <div className="text-xl font-bold bg-gradient-to-r from-orange-600 to-red-600 bg-clip-text text-transparent mb-1">Verified</div>
//                 <div className="text-xs text-slate-600 font-medium">Outcomes</div>
//               </div>
//             </div>
//           </div>
          
//           {/* Hero Image */}
//           <div className="relative pt-8">
//           <div className="relative rounded-2xl overflow-hidden shadow-xl shadow-blue-500/20 aspect-video">
//   <img 
//     src="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=800" 
//     alt="Students collaborating on futuristic technology"
//     className="w-full h-full object-cover"
//   />
//   <div className="absolute inset-0 bg-gradient-to-t from-blue-900/60 via-transparent to-slate-900/20"></div>
//   <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-indigo-500/10"></div>
// </div>
            
//             {/* Floating UI elements */}
//             <div className="absolute -top-4 -right-4 bg-gradient-to-r from-blue-500 to-indigo-500 p-3 rounded-xl shadow-xl animate-float">
//               <div className="text-white text-center">
//                 <div className="text-sm font-bold">AI-Powered</div>
//                 <div className="text-xs opacity-90">Career Guidance</div>
//               </div>
//             </div>
            
//             <div className="absolute -bottom-4 -left-4 bg-gradient-to-r from-emerald-500 to-green-500 p-3 rounded-xl shadow-xl animate-float-delayed">
//               <div className="text-white text-center">
//                 <div className="text-sm font-bold">Real Projects</div>
//                 <div className="text-xs opacity-90">Industry Ready</div>
//               </div>
//             </div>
//           </div>
//         </div>
//       </div>
      
//       {/* Brands and Partners Section - Integrated */}
//        <div className="relative z-10 pt-16">
//          <div className="overflow-hidden group">
//            <div className="flex space-x-12 items-center motion-safe:animate-[scroll-left_5s_linear_infinite] lg:motion-safe:animate-[scroll-left_30s_linear_infinite] group-hover:[animation-play-state:paused]">
//              {[
//               "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//               "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//               "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
//              ].concat([
//                "https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/4/44/Microsoft_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/a/a9/Amazon_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/5/51/IBM_logo.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/2/26/Spotify_logo_with_text.svg",
//                "https://upload.wikimedia.org/wikipedia/commons/6/69/Airbnb_Logo_Bélo.svg"
//              ]).map((logo, index) => (
//                <div key={index} className="flex-shrink-0 w-32 h-16 flex items-center justify-center bg-white/60 backdrop-blur-sm rounded-xl border border-white/30 hover:border-white/50 transition-all duration-300 hover:scale-105 shadow-sm group hover:pause-animation">
//                  <img 
//                    src={logo} 
//                    alt="Partner brand" 
//                    className="max-w-24 max-h-10 object-contain opacity-80 group-hover:opacity-100 transition-all duration-300"
//                  />
//                </div>
//              ))}
//            </div>
//          </div>
//        </div>

//     </section>
//   );
// };

// export default Hero;