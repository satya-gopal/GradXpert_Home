import React from 'react';
import { Shield, Mail, Globe, Clock, Users, Lock, Eye, FileText, CheckCircle, AlertCircle } from 'lucide-react';

const PrivacyPolicy = () => {
  const sections = [
    { id: 'information-collect', title: '1. Information We Collect', icon: <FileText size={20} /> },
    { id: 'how-we-use', title: '2. How We Use Your Information', icon: <Eye size={20} /> },
    { id: 'sharing', title: '3. Sharing of Information', icon: <Users size={20} /> },
    { id: 'security', title: '4. Data Security', icon: <Lock size={20} /> },
    { id: 'cookies', title: '5. Cookies and Tracking', icon: <Globe size={20} /> },
    { id: 'rights', title: '6. Your Rights', icon: <CheckCircle size={20} /> },
    { id: 'retention', title: '7. Data Retention', icon: <Clock size={20} /> },
    { id: 'third-party', title: '8. Third-Party Links', icon: <Globe size={20} /> },
    { id: 'children', title: '9. Children\'s Privacy', icon: <Shield size={20} /> },
    { id: 'changes', title: '10. Changes to This Policy', icon: <AlertCircle size={20} /> },
    { id: 'contact', title: '11. Contact Us', icon: <Mail size={20} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pt-24 pb-12 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-blue-100 rounded-full mb-6">
          <Shield className="w-8 h-8 text-blue-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Privacy Policy</h1>
        <p className="text-lg text-gray-600 mb-2">Last Updated: December 01, 2024</p>
        <div className="w-24 h-1 bg-blue-600 mx-auto rounded"></div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 mb-12 border-l-4 border-blue-500">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to GradXpert!</h2>
        <p className="text-gray-700 leading-relaxed">
          Your privacy is important to us. This Privacy Policy outlines how we collect, use, store, and protect 
          your personal information when you interact with our website, programs, and services.
        </p>
        <p className="text-gray-700 leading-relaxed mt-4">
          By using <span className="font-medium text-blue-600">https://gradxpert.com</span>, you agree to the terms of this Privacy Policy.
        </p>
      </div>

      {/* Table of Contents */}
      <div className="bg-gray-50 rounded-xl p-6 mb-12">
        <h3 className="text-xl font-semibold text-gray-900 mb-6">Table of Contents</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
          {sections.map((section) => (
            <button
              key={section.id}
              onClick={() => scrollToSection(section.id)}
              className="flex items-center space-x-3 text-left p-3 rounded-lg hover:bg-white hover:shadow-sm transition-all duration-200 group"
            >
              <div className="text-blue-600 group-hover:text-blue-700 transition-colors">
                {section.icon}
              </div>
              <span className="text-gray-700 group-hover:text-gray-900 transition-colors">
                {section.title}
              </span>
            </button>
          ))}
        </div>
      </div>

      {/* Content Sections */}
      <div className="space-y-12">
        {/* Section 1 */}
        <section id="information-collect" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Information We Collect</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1.1 Personal Information</h3>
              <p className="text-gray-700 mb-4">When you register, apply for programs, fill out forms, or communicate with us, we may collect:</p>
              <ul className="space-y-2">
                {['Full name', 'Email address', 'Phone number', 'Educational background', 'Location (City, State, Country)', 'Uploaded documents (e.g., resume, project files)'].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-gray-50 rounded-lg p-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1.2 Technical Information</h3>
              <p className="text-gray-700 mb-4">Automatically collected via cookies, logs, and analytics tools:</p>
              <ul className="space-y-2">
                {['IP address', 'Browser type', 'Device information', 'Pages visited', 'Referring/exit pages', 'Time spent on the site'].map((item, index) => (
                  <li key={index} className="flex items-start space-x-3">
                    <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">1.3 Payment Information</h3>
              <p className="text-gray-700">
                We do not store or process payment card details directly. All payments are securely handled by our trusted third-party payment gateways.
              </p>
            </div>
          </div>
        </section>

        {/* Section 2 */}
        <section id="how-we-use" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Eye className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. How We Use Your Information</h2>
          </div>
          
          <p className="text-gray-700 mb-6">We use your information to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {[
              'Register and manage your account',
              'Deliver our programs, mentorship, and training services',
              'Process applications and submissions',
              'Send transactional and program-related emails',
              'Provide customer support',
              'Share certificates and project outcomes',
              'Improve our website, programs, and user experience',
              'Send marketing and promotional communications (you can opt-out anytime)'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 3 */}
        <section id="sharing" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Sharing of Information</h2>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500 mb-6">
            <p className="text-gray-900 font-semibold">We do not sell your personal information.</p>
          </div>

          <p className="text-gray-700 mb-4">We may share your data only with:</p>
          <div className="space-y-3">
            {[
              'Trusted service providers (e.g., email, analytics, payment processors)',
              'Academic or hiring partners (with your consent)',
              'Law enforcement or regulatory authorities (if required by law)'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="security" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Lock className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Data Security</h2>
          </div>
          
          <p className="text-gray-700 mb-6">We take data protection seriously and use:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              'SSL encryption',
              'Secure servers and firewalls',
              'Access controls and data minimization',
              'Regular security reviews and audits'
            ].map((item, index) => (
              <div key={index} className="flex items-center space-x-3 bg-blue-50 p-4 rounded-lg">
                <Lock className="w-5 h-5 text-blue-600" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <p className="text-gray-700">
              However, no method of transmission or storage is 100% secure. Use the site at your own risk.
            </p>
          </div>
        </section>

        {/* Section 5 */}
        <section id="cookies" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">5. Cookies and Tracking Technologies</h2>
          </div>
          
          <p className="text-gray-700 mb-4">We use cookies to:</p>
          <div className="space-y-3 mb-6">
            {[
              'Personalize your experience',
              'Understand user behavior',
              'Improve website performance'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700">You can control or disable cookies through your browser settings.</p>
        </section>

        {/* Section 6 */}
        <section id="rights" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">6. Your Rights</h2>
          </div>
          
          <p className="text-gray-700 mb-6">You have the right to:</p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
            {[
              'Access, update, or delete your personal data',
              'Withdraw consent at any time',
              'Request data portability',
              'Opt-out of marketing communications'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-green-50 p-4 rounded-lg">
                <CheckCircle className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
          <p className="text-gray-700">
            To exercise any of these rights, contact us at: 
            <a href="mailto:contact@gradxpert.com" className="text-blue-600 hover:text-blue-700 font-medium ml-1">
              contact@gradxpert.com
            </a>
          </p>
        </section>

        {/* Section 7 */}
        <section id="retention" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">7. Data Retention</h2>
          </div>
          
          <p className="text-gray-700 mb-4">We retain your data:</p>
          <div className="space-y-3">
            {[
              'As long as necessary to fulfill program purposes',
              'For legal or regulatory requirements',
              'Until you request its deletion (subject to compliance needs)'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3">
                <Clock className="w-5 h-5 text-blue-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 8 */}
        <section id="third-party" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">8. Third-Party Links</h2>
          </div>
          
          <p className="text-gray-700">
            Our website may contain links to other platforms. We are not responsible for their content or privacy practices. 
            Please review their privacy policies individually.
          </p>
        </section>

        {/* Section 9 */}
        <section id="children" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">9. Children's Privacy</h2>
          </div>
          
          <p className="text-gray-700">
            Our services are intended for individuals aged 16 and above. If we discover we've collected data from a minor 
            under 16 without parental consent, we will delete it immediately.
          </p>
        </section>

        {/* Section 10 */}
        <section id="changes" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <AlertCircle className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">10. Changes to This Policy</h2>
          </div>
          
          <p className="text-gray-700">
            We may update this Privacy Policy from time to time. We will notify you of major changes via email or website announcements.
          </p>
        </section>

        {/* Section 11 - Contact */}
        <section id="contact" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-blue-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">11. Contact Us</h2>
          </div>
          
          <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-8 border-l-4 border-blue-500">
            <p className="text-gray-700 mb-6">For questions, concerns, or to exercise your privacy rights:</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Email:</span>
                <a href="mailto:contact@gradxpert.com" className="text-blue-600 hover:text-blue-700 font-medium">
                  contact@gradxpert.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-blue-600" />
                <span className="text-gray-700 font-medium">Website:</span>
                <a href="https://gradxpert.com" className="text-blue-600 hover:text-blue-700 font-medium" target="_blank" rel="noopener noreferrer">
                  https://gradxpert.com
                </a>
              </div>
            </div>
          </div>
        </section>
      </div>

      {/* Footer */}
      <div className="mt-16 pt-8 border-t border-gray-200 text-center">
        <p className="text-gray-600">
          © 2025 GradXpert. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default PrivacyPolicy;