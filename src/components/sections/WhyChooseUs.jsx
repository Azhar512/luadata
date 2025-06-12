import React from 'react';
import { Users, Shield, Clock, Star } from 'lucide-react';

const WhyChooseUs = ({ isVisible = {} }) => {
  const features = [
    { icon: Shield, text: "NDA Protection Guaranteed" },
    { icon: Clock, text: "24-48 Hour Response Time" },
    { icon: Users, text: "Dedicated Project Team" },
    { icon: Star, text: "5-Star Client Satisfaction" }
  ];

  return (
    <section id="why-choose" data-animate className="py-20 bg-gradient-to-r from-red-600 to-pink-600 text-white">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Why Choose <span className="text-pink-200">Luadata</span>
          </h2>
          <p className="text-xl opacity-90 max-w-3xl mx-auto">
            We combine technical expertise with business acumen to deliver solutions that truly move the needle.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <div 
              key={index}
              className={`text-center p-6 ${isVisible?.['why-choose'] ? 'animate-fadeInUp' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 150}ms` }}
            >
              <div className="w-16 h-16 bg-white/20 backdrop-blur-sm rounded-2xl flex items-center justify-center mx-auto mb-4 hover:scale-110 transition-transform">
                <feature.icon className="w-8 h-8 text-white" />
              </div>
              <p className="font-semibold text-lg">{feature.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUs;
