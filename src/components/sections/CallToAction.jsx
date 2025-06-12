import React from 'react';
import { Mail, Phone } from 'lucide-react';

const CallToAction = () => {
  return (
    <section className="py-16 bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl md:text-4xl font-bold mb-6">
          Let's Build Something Amazing Together
        </h2>
        <p className="text-xl mb-8 opacity-90">
          Join 100+ businesses that trust Luadata for their AI transformation journey.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a 
            href="mailto:sales@luadata.net"
            className="inline-flex items-center px-8 py-3 bg-white text-red-600 rounded-full font-semibold hover:bg-gray-50 transition-all"
          >
            <Mail className="mr-2 w-5 h-5" />
            sales@luadata.net
          </a>
          <a 
            href="https://wa.me/message/ABCD123"
            className="inline-flex items-center px-8 py-3 border-2 border-white/50 text-white rounded-full font-semibold hover:bg-white/10 transition-all backdrop-blur-sm"
          >
            <Phone className="mr-2 w-5 h-5" />
            WhatsApp Business
          </a>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;