import React, { useState, useEffect, useRef } from 'react';
import { Target, MessageSquare, TrendingUp } from 'lucide-react';

const CaseStudies = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Intersection Observer to trigger animations when section comes into view
  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  const caseStudies = [
    {
      title: "eCommerce Churn Reduction",
      description: "Predictive Sales Model",
      metric: "32%",
      label: "Churn Reduction",
      icon: Target,
      bg: "bg-gradient-to-br from-red-50 to-pink-50"
    },
    {
      title: "Service Business Growth",
      description: "AI WhatsApp Chatbot",
      metric: "150%",
      label: "Response Rate",
      icon: MessageSquare,
      bg: "bg-gradient-to-br from-pink-50 to-red-50"
    },
    {
      title: "Political Analytics",
      description: "Sentiment Analysis Engine",
      metric: "95%",
      label: "Accuracy Rate",
      icon: TrendingUp,
      bg: "bg-gradient-to-br from-red-50 to-rose-50"
    }
  ];

  return (
    <section 
      id="case-studies" 
      ref={sectionRef}
      className="py-20 bg-white"
    >
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6">
            Proven <span className="text-red-600">Results</span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Real businesses, real impact. See how our AI solutions have transformed operations and boosted growth.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {caseStudies.map((study, index) => (
            <div 
              key={index}
              className={`group ${study.bg} p-8 rounded-2xl border border-red-100 hover:shadow-2xl transition-all duration-500 transform hover:-translate-y-2 ${
                isVisible 
                  ? 'opacity-100 translate-y-0' 
                  : 'opacity-0 translate-y-8'
              }`}
              style={{ 
                animationDelay: `${index * 200}ms`,
                transition: `all 0.6s ease-out ${index * 200}ms`
              }}
            >
              <div className="flex items-center justify-between mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-red-500 to-pink-500 rounded-xl flex items-center justify-center group-hover:scale-110 transition-transform">
                  <study.icon className="w-7 h-7 text-white" />
                </div>
                <div className="text-right">
                  <div className="text-3xl font-bold text-red-600">{study.metric}</div>
                  <div className="text-sm text-gray-600">{study.label}</div>
                </div>
              </div>
              <h3 className="text-xl font-bold mb-2 text-gray-900">{study.title}</h3>
              <p className="text-gray-600">{study.description}</p>
              
              {/* Additional visual enhancement */}
              <div className="mt-4 pt-4 border-t border-red-100">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-gray-500">Case Study</span>
                  <div className="flex space-x-1">
                    <div className="w-2 h-2 bg-red-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-pink-300 rounded-full"></div>
                    <div className="w-2 h-2 bg-rose-300 rounded-full"></div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CaseStudies;