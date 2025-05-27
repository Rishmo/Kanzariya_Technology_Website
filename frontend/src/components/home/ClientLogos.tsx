import { useRef, useEffect } from 'react';
import { motion } from 'framer-motion';

const ClientLogos = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // Companies that could use cybersecurity services
  const companies = [
    "Microsoft", "IBM", "Amazon", "Google", "Oracle", 
    "Salesforce", "Adobe", "Cisco", "Dell", "HP", 
    "Intel", "SAP", "VMware", "PayPal", "Mastercard"
  ];

  // Duplicate array for continuous scrolling effect
  const logoItems = [...companies, ...companies];

  return (
    <section className="py-14 bg-gray-50">
      <div className="container-custom">
        <motion.div
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-10"
        >
          <h2 className="text-2xl md:text-3xl font-bold text-primary-900 mb-3">
            Trusted by Leading Organizations Worldwide
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Protecting the digital assets of over 10,000 organizations with our advanced
            cybersecurity solutions and services.
          </p>
        </motion.div>
        
        <div className="relative overflow-hidden" ref={containerRef}>
          {/* Gradient overlay for fade effect on sides */}
          <div className="absolute left-0 top-0 h-full w-16 bg-gradient-to-r from-gray-50 to-transparent z-10"></div>
          <div className="absolute right-0 top-0 h-full w-16 bg-gradient-to-l from-gray-50 to-transparent z-10"></div>
          
          <motion.div 
            className="flex space-x-12 py-4"
            animate={{ x: "-50%" }}
            transition={{
              x: {
                repeat: Infinity,
                duration: 30,
                ease: "linear",
              }
            }}
          >
            {logoItems.map((company, index) => (
              <div 
                key={`${company}-${index}`} 
                className="flex-shrink-0 flex items-center justify-center h-16"
              >
                <div className="bg-white rounded-lg shadow-soft px-6 py-3">
                  <span className="text-xl font-medium text-primary-900">
                    {company}
                  </span>
                </div>
              </div>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ClientLogos;