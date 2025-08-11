import React from 'react';
import { CreditCard, Mail, Globe, Clock, CheckCircle, XCircle, AlertTriangle, FileText, Shield, Users, Calendar } from 'lucide-react';

const RefundPolicy = () => {
  const sections = [
    { id: 'nature-products', title: '1. Nature of Products & Services', icon: <FileText size={20} /> },
    { id: 'eligibility', title: '2. Refund Eligibility', icon: <CheckCircle size={20} /> },
    { id: 'timeline', title: '3. Refund Request Timeline', icon: <Clock size={20} /> },
    { id: 'process', title: '4. Refund Process', icon: <CreditCard size={20} /> },
    { id: 'non-transferable', title: '5. Non-Transferable Rights', icon: <Shield size={20} /> },
    { id: 'legal-compliance', title: '6. Legal Compliance', icon: <AlertTriangle size={20} /> },
    { id: 'contact', title: '7. Contact Us', icon: <Mail size={20} /> },
  ];

  const scrollToSection = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <div className="max-w-4xl mx-auto px-6 py-12 bg-white">
      {/* Header */}
      <div className="text-center mb-12">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-green-100 rounded-full mb-6">
          <CreditCard className="w-8 h-8 text-green-600" />
        </div>
        <h1 className="text-4xl font-bold text-gray-900 mb-4">Refund Policy</h1>
        <p className="text-lg text-gray-600 mb-2">Last Updated: August 10, 2025</p>
        <div className="flex items-center justify-center space-x-4 text-sm text-gray-500 mb-4">
          <span className="flex items-center">
            <Globe className="w-4 h-4 mr-1" />
            https://gradxpert.com
          </span>
          <span className="flex items-center">
            <Mail className="w-4 h-4 mr-1" />
            Contact@gradxpert.com
          </span>
        </div>
        <div className="w-24 h-1 bg-green-600 mx-auto rounded"></div>
      </div>

      {/* Welcome Section */}
      <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 mb-12 border-l-4 border-green-500">
        <h2 className="text-2xl font-semibold text-gray-900 mb-4">GradXpert – Find the Expert in You</h2>
        <p className="text-gray-700 leading-relaxed mb-4">
          We are committed to providing high-quality educational experiences and resources that help students gain real-world, industry-relevant skills.
        </p>
        <p className="text-gray-700 leading-relaxed">
          We value transparency and want to ensure you understand our policies regarding refunds and returns.
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
              <div className="text-green-600 group-hover:text-green-700 transition-colors">
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
        <section id="nature-products" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <FileText className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">1. Nature of Products & Services</h2>
          </div>
          
          <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500 mb-6">
            <p className="text-gray-700 mb-4">GradXpert offers digital products and services, including but not limited to:</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-6">
            {[
              'Virtual Internship Programs (VIP)',
              'Digital Courses',
              'Webinars & Workshops',
              'Learning Materials',
              'Certifications',
              'Access to exclusive content and community platforms'
            ].map((item, index) => (
              <div key={index} className="bg-gradient-to-br from-blue-50 to-indigo-50 p-4 rounded-lg border border-blue-100">
                <div className="flex items-center space-x-3">
                  <CheckCircle className="w-5 h-5 text-blue-600 flex-shrink-0" />
                  <span className="text-gray-700 font-medium">{item}</span>
                </div>
              </div>
            ))}
          </div>

          <div className="bg-yellow-50 rounded-lg p-6 border-l-4 border-yellow-500">
            <p className="text-gray-700 font-medium">
              Since these are intangible, digital items, we follow a strict but fair refund policy.
            </p>
          </div>
        </section>

        {/* Section 2 */}
        <section id="eligibility" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CheckCircle className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">2. Refund Eligibility</h2>
          </div>
          
          <p className="text-gray-700 mb-6">You may be eligible for a refund under the following conditions:</p>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Eligible Scenarios */}
            <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <CheckCircle className="w-6 h-6 text-green-600 mr-2" />
                Eligible Scenarios
              </h3>
              <div className="space-y-4">
                {[
                  {
                    title: 'Duplicate Payment',
                    description: 'If you are charged more than once for the same service.'
                  },
                  {
                    title: 'Service Not Rendered',
                    description: 'You paid for a service or program that was not delivered at all.'
                  },
                  {
                    title: 'Technical Errors',
                    description: 'Due to platform error (e.g. payment went through but access not granted), upon verification.'
                  }
                ].map((item, index) => (
                  <div key={index} className="bg-white p-4 rounded-lg">
                    <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                    <p className="text-gray-600 text-sm">{item.description}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Not Eligible */}
            <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center">
                <XCircle className="w-6 h-6 text-red-600 mr-2" />
                Not Eligible for Refund
              </h3>
              <div className="space-y-3">
                {[
                  'You changed your mind after enrollment.',
                  'You did not complete the project or internship within the required time.',
                  'You failed to submit documentation necessary for verification.',
                  'Dissatisfaction based on subjective preferences once service has started.',
                  'Access to content has already been provided (i.e., digital delivery completed).'
                ].map((item, index) => (
                  <div key={index} className="flex items-start space-x-3 bg-white p-3 rounded-lg">
                    <XCircle className="w-4 h-4 text-red-600 mt-0.5 flex-shrink-0" />
                    <span className="text-gray-700 text-sm">{item}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Section 3 */}
        <section id="timeline" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Clock className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">3. Refund Request Timeline</h2>
          </div>
          
          <div className="bg-orange-50 rounded-lg p-8 border-l-4 border-orange-500">
            <div className="flex items-center space-x-4">
              <div className="w-16 h-16 bg-orange-100 rounded-full flex items-center justify-center">
                <Calendar className="w-8 h-8 text-orange-600" />
              </div>
              <div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">7 Calendar Days</h3>
                <p className="text-gray-700">
                  Refund requests must be submitted within <strong>7 calendar days</strong> from the date of payment or purchase. 
                  Any request beyond this window will not be accepted.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Section 4 */}
        <section id="process" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <CreditCard className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">4. Refund Process</h2>
          </div>
          
          <div className="space-y-6">
            <div className="bg-blue-50 rounded-lg p-6 border-l-4 border-blue-500">
              <h3 className="text-lg font-semibold text-gray-900 mb-4">Step 1: Submit Request</h3>
              <p className="text-gray-700 mb-4">
                Email your refund request to <a href="mailto:Contact@gradxpert.com" className="text-blue-600 hover:text-blue-700 font-medium">Contact@gradxpert.com</a> with:
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                {['Full Name', 'Transaction ID', 'Date of Purchase', 'Reason for Refund'].map((item, index) => (
                  <div key={index} className="flex items-center space-x-3 bg-white p-3 rounded-lg">
                    <CheckCircle className="w-5 h-5 text-blue-600" />
                    <span className="text-gray-700 font-medium">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 2: Verification</h3>
                <div className="flex items-center space-x-3">
                  <Clock className="w-6 h-6 text-purple-600" />
                  <span className="text-gray-700">Our support team will verify your request within <strong>5–7 business days</strong>.</span>
                </div>
              </div>

              <div className="bg-green-50 rounded-lg p-6 border-l-4 border-green-500">
                <h3 className="text-lg font-semibold text-gray-900 mb-3">Step 3: Processing</h3>
                <div className="flex items-center space-x-3">
                  <CreditCard className="w-6 h-6 text-green-600" />
                  <span className="text-gray-700">If approved, refund processed to original payment method within <strong>7–10 business days</strong>.</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Section 5 */}
        <section id="non-transferable" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Shield className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">5. Non-Transferable Rights</h2>
          </div>
          
          <div className="bg-red-50 rounded-lg p-6 border-l-4 border-red-500">
            <div className="flex items-start space-x-4">
              <Users className="w-6 h-6 text-red-600 mt-1 flex-shrink-0" />
              <p className="text-gray-700">
                Any access granted to GradXpert programs, materials, or certificates is <strong>strictly non-transferable</strong> and intended solely for the individual who purchased or enrolled.
              </p>
            </div>
          </div>
        </section>

        {/* Section 6 */}
        <section id="legal-compliance" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <AlertTriangle className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">6. Legal Compliance</h2>
          </div>
          
          <div className="bg-purple-50 rounded-lg p-6 border-l-4 border-purple-500">
            <p className="text-gray-700">
              This policy is governed by the applicable digital goods and consumer protection laws under <strong>Indian jurisdiction</strong>. 
              GradXpert reserves the right to update or revise this policy at any time to remain compliant with evolving legal and educational standards.
            </p>
          </div>
        </section>

        {/* Section 7 - Contact */}
        <section id="contact" className="scroll-mt-6">
          <div className="flex items-center space-x-3 mb-6">
            <div className="w-8 h-8 bg-green-100 rounded-lg flex items-center justify-center">
              <Mail className="w-5 h-5 text-green-600" />
            </div>
            <h2 className="text-2xl font-bold text-gray-900">7. Contact Us</h2>
          </div>
          
          <div className="bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl p-8 border-l-4 border-green-500">
            <p className="text-gray-700 mb-6">If you have any questions or concerns regarding this policy or your purchase, feel free to reach out:</p>
            <div className="space-y-4">
              <div className="flex items-center space-x-3">
                <Mail className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">Email:</span>
                <a href="mailto:Contact@gradxpert.com" className="text-green-600 hover:text-green-700 font-medium">
                  Contact@gradxpert.com
                </a>
              </div>
              <div className="flex items-center space-x-3">
                <Globe className="w-6 h-6 text-green-600" />
                <span className="text-gray-700 font-medium">Website:</span>
                <a href="https://gradxpert.com" className="text-green-600 hover:text-green-700 font-medium" target="_blank" rel="noopener noreferrer">
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

export default RefundPolicy;