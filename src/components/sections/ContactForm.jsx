import React from 'react';
import { Zap } from 'lucide-react';
import { useForm } from '../../hooks/useForm';
import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

const ContactForm = () => {
  const isVisible = useIntersectionObserver();
  const { formData, isSubmitting, handleSubmit, updateField } = useForm({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const onSubmit = async (data) => {
    // Add your form submission logic here
    await new Promise(resolve => setTimeout(resolve, 1500));
    alert('Thank you! We\'ll contact you within 24 hours.');
  };

  return (
    <section id="contact-form" data-animate className="py-20 bg-gray-50">
      <div className="max-w-4xl mx-auto px-6">
        <div className="text-center mb-12">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Ready to <span className="text-red-600">Transform</span> Your Business?
          </h2>
          <p className="text-xl text-gray-600">
            Get a free consultation and project brief within 24 hours.
          </p>
        </div>

        <div className={`bg-white rounded-3xl shadow-2xl p-8 md:p-12 border border-gray-100 ${isVisible['contact-form'] ? 'animate-fadeInUp' : 'opacity-0'}`}>
          <div className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Full Name *</label>
                <input
                  type="text"
                  value={formData.name}
                  onChange={(e) => updateField('name', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="name"
                />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-2">Email Address *</label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => updateField('email', e.target.value)}
                  className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                  placeholder="name@company.com"
                />
              </div>
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Phone Number</label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => updateField('phone', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all"
                placeholder="+12 300 1234567"
              />
            </div>
            
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-2">Project Details *</label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) => updateField('message', e.target.value)}
                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:outline-none focus:ring-2 focus:ring-red-500 focus:border-transparent transition-all resize-none"
                placeholder="Tell us about your project, challenges, and goals..."
              ></textarea>
            </div>
            
            <button
              onClick={() => handleSubmit(onSubmit)}
              disabled={isSubmitting}
              className="w-full py-4 bg-gradient-to-r from-red-600 to-pink-600 text-white font-semibold rounded-xl hover:from-red-700 hover:to-pink-700 transition-all duration-300 transform hover:scale-105 shadow-lg disabled:opacity-50 flex items-center justify-center"
            >
              {isSubmitting ? (
                <>
                  <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2"></div>
                  Processing...
                </>
              ) : (
                <>
                  <Zap className="mr-2 w-5 h-5" />
                  Get Free Consultation
                </>
              )}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;