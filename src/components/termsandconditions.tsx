import React from 'react';
import { FileText, Mail, Globe, Clock, Users, Shield, CreditCard, Award, AlertTriangle, Gavel, Settings, Phone } from 'lucide-react';

const TermsAndConditions = () => {
  const sections = [
    { id: 'acceptance', title: '1. Acceptance of Terms', icon: <FileText size={20} /> },
    { id: 'eligibility', title: '2. Eligibility', icon: <Users size={20} /> },
    { id: 'responsibilities', title: '3. User Responsibilities', icon: <Shield size={20} /> },
    { id: 'intellectual-property', title: '4. Intellectual Property', icon: <Award size={20} /> },
    { id: 'enrollment-payments', title: '5. Enrollment & Payments', icon: <CreditCard size={20} /> },
    { id: 'certificates', title: '6. Certificates & Project Validation', icon: <Award size={20} /> },
    { id: 'privacy-policy', title: '7. Privacy Policy', icon: <Shield size={20} /> },
    { id: 'third-party', title: '8. Third-Party Links', icon: <Globe size={20} /> },
    { id: 'liability', title: '9. Limitation of Liability', icon: <AlertTriangle size={20} /> },
    { id: 'termination', title: '10. Termination', icon: <Settings size={20} /> },
    { id: 'modifications', title: '11. Modifications', icon: <Clock size={20} /> },
    { id: 'governing-law', title: '12. Governing Law', icon: <Gavel size={20} /> },
    { id: 'contact', title: '13. Contact Us', icon: <Phone size={20} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 pb-12 pt-24 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-indigo-100 rounded-full mb-6">
          <FileText className="w-8 h-8 text-indigo-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Terms and Conditions</h1>
        <p className="text-lg text-gray-600 mb-2">Last Updated: August 10, 2025</p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Globe className="w-4 h-4 mr-1" />
            https://gradxpert.com
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            contact@gradxpert.com
          </span>
        </div>
        <div className="w-24 h-1 bg-indigo-600 mx-auto rounded"></div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 mb-12 border-l-4 border-indigo-500">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">Welcome to GradXpert</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          Please read these Terms and Conditions ("Terms") carefully before using our website or enrolling in any of our programs or services.
        </p>
        <p className="text-gray-700 leading-relaxed">
          By accessing this website or participating in any of our programs, you agree to be bound by these Terms.
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
              <div className="text-indigo-600 group-hover:text-indigo-700 transition-colors">
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
        <section id="acceptance" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Acceptance of Terms</h2>
          </div>
          
          <div className="bg-indigo-50 rounded-lg p-6 border-l-4 border-indigo-500">
            <p className="text-gray-700 leading-relaxed">
              By using our website or enrolling in our programs (including the Virtual Internship Program, University Programs, or becoming a Trainer), you confirm that you have read, understood, and agreed to these Terms.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="eligibility" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. Eligibility</h2>
          </div>
          
          <div className="space-y-4">
            <p className="text-gray-700">GradXpert services are intended for:</p>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {['Students', 'Job seekers', 'Individuals interested in upskilling'].map((item, index) => (
                <div key={index} className="bg-blue-50 p-4 rounded-lg text-center">
                  <Users className="w-6 h-6 text-blue-600 mx-auto mb-2" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              ))}
            </div>
            <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
              <p className="text-gray-700">
                <strong>Age Requirement:</strong> You must be 16 years or older or have parental/guardian consent to use our services.
              </p>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="responsibilities" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. User Responsibilities</h2>
          </div>
          
          <div className="space-y-4">
            {[
              'You agree to use the website and services in compliance with applicable laws and ethical practices.',
              'You must not misuse, copy, or distribute content from this site without permission.',
              'You are responsible for the confidentiality of your login credentials and account information.'
            ].map((item, index) => (
              <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                <Shield className="w-5 h-5 text-green-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-700">{item}</span>
              </div>
            ))}
          </div>
        </section>

        {/* Section 4 */}
        <section id="intellectual-property" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Intellectual Property</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Protected Materials</h3>
              <p className="text-gray-700 mb-4">
                All materials on this website are the intellectual property of GradXpert and may not be reproduced without explicit written permission:
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                {['Logos', 'Course content', 'Project ideas', 'Certificates', 'Videos', 'Graphics', 'Documentation', 'Templates'].map((item, index) => (
                  <div key={index} className="bg-white p-3 rounded-lg text-center">
                    <Award className="w-5 h-5 text-red-600 mx-auto mb-1" />
                    <span className="text-sm text-gray-700">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Project Submissions</h3>
              <p className="text-gray-700">
                Projects submitted as part of internships may be publicly showcased unless the student opts out during submission.
              </p>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="enrollment-payments" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">5. Enrollment & Payments</h2>
          </div>
          
          <div className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Payment Terms</h3>
                <p className="text-gray-700">
                  By enrolling in a paid program, you agree to provide accurate payment information and abide by the payment terms listed at checkout.
                </p>
              </div>
              
              <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Refund Policy</h3>
                <p className="text-gray-700">
                  All payments are final and non-refundable, except in cases of duplicate transactions or proven technical issues.
                </p>
              </div>
            </div>

            <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-3">Service Delivery</h3>
              <p className="text-gray-700">
                Certificates, resources, and premium services are only issued upon project validation and successful payment.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="certificates" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Award className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">6. Certificates & Project Validation</h2>
          </div>
          
          <div className="space-y-4">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <p className="text-gray-700 mb-4">
                GradXpert reserves the right to review and validate all submitted projects to maintain academic and professional integrity.
              </p>
              <p className="text-gray-700">
                Certificates are issued based on project quality, submission timing, and adherence to our guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* Section 7 */}
        <section id="privacy-policy" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">7. Privacy Policy</h2>
          </div>
          
          <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
            <p className="text-gray-700">
              Our Privacy Policy governs how we collect, use, and protect your personal data. By using GradXpert, you consent to the use of your data as outlined in the policy.
            </p>
          </div>
        </section>

        {/* Section 8 */}
        <section id="third-party" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Globe className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">8. Third-Party Links</h2>
          </div>
          
          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <p className="text-gray-700">
              Our website may contain links to third-party websites. We are not responsible for the content or policies of external sites and recommend reviewing their terms before use.
            </p>
          </div>
        </section>

        {/* Section 9 */}
        <section id="liability" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">9. Limitation of Liability</h2>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <p className="text-gray-700 mb-4">GradXpert is not liable for:</p>
            <div className="space-y-3">
              {[
                'Loss of data or content',
                'Delayed access or service interruptions',
                'Career or academic outcomes based on your participation'
              ].map((item, index) => (
                <div key={index} className="flex items-start space-x-3">
                  <AlertTriangle className="w-5 h-5 text-red-600 mt-0.5 flex-shrink-0" />
                  <span className="text-gray-700">{item}</span>
                </div>
              ))}
            </div>
            <p className="text-gray-700 mt-4 font-medium">
              Use of the platform is at your own discretion and risk.
            </p>
          </div>
        </section>

        {/* Section 10 */}
        <section id="termination" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Settings className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">10. Termination</h2>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-6 border-l-4 border-orange-500">
            <p className="text-gray-700">
              We reserve the right to suspend or terminate access to the website or programs at our sole discretion, without notice, for any behavior that violates these Terms.
            </p>
          </div>
        </section>

        {/* Section 11 */}
        <section id="modifications" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">11. Modifications</h2>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
            <p className="text-gray-700">
              GradXpert may update these Terms at any time. Any changes will be posted on this page with a revised "Last Updated" date. Continued use of the site after changes implies acceptance.
            </p>
          </div>
        </section>

        {/* Section 12 */}
        <section id="governing-law" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Gavel className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">12. Governing Law</h2>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <p className="text-gray-700">
              These Terms are governed by and construed in accordance with the laws of India. Any legal disputes shall be resolved in courts located in Andhra Pradesh, India.
            </p>
          </div>
        </section>

        {/* Section 13 - Contact */}
        <section id="contact" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-indigo-100 rounded-lg flex items-center justify-center">
              <Phone className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">13. Contact Us</h2>
          </div>
          
          <div className="bg-gradient-to-r from-indigo-50 to-purple-50 rounded-xl p-8 border-l-4 border-indigo-500">
            <p className="text-gray-700 mb-6">If you have any questions regarding these Terms, please reach out to us at:</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-indigo-600" />
                <span className="text-gray-700 font-medium">Email:</span>
                <a href="mailto:contact@gradxpert.com" className="text-indigo-600 hover:text-indigo-700 font-medium">
                  contact@gradxpert.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-indigo-600" />
                <span className="text-gray-700 font-medium">Website:</span>
                <a href="https://gradxpert.com" className="text-indigo-600 hover:text-indigo-700 font-medium" target="_blank" rel="noopener noreferrer">
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

export default TermsAndConditions;