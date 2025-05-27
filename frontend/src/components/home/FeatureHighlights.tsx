import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { useInView } from 'react-intersection-observer';

const features = [
  {
    id: 'cloudguard',
    title: 'KanCloud',
    description: 'Streamline cloud operations and enhance protection with unified security management.',
    image: 'https://images.pexels.com/photos/1181244/pexels-photo-1181244.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-blue-500 to-blue-700',
    benefits: ['Cloud infrastructure visibility', 'Threat detection & response', 'Compliance automation', 'DevSecOps integration']
  },
  {
    id: 'harmony',
    title: 'NevForce',
    description: 'Empower your teams with secure access, threat detection, and performance optimization tools.',
    image: 'https://images.pexels.com/photos/1181675/pexels-photo-1181675.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-purple-500 to-purple-700',
    benefits: ['Secure access control', 'Real-time monitoring', 'Network optimization', 'Threat prevention']
  },
  {
    id: 'quantum',
    title: 'KiwWall',
    description: 'Advanced perimeter defense and firewall technology to safeguard critical systems.',
    image: 'https://images.pexels.com/photos/5380643/pexels-photo-5380643.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2',
    color: 'from-green-500 to-green-700',
    benefits: ['Perimeter security', 'Access control', 'Firewall automation', 'Intrusion detection']
  }
];

const FeatureHighlights = () => {
  const [activeFeature, setActiveFeature] = useState(features[0].id);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-white">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Unified Security Solutions
          </h2>
          <p className="text-gray-600 text-lg">
            Prevent cyber threats before they impact your business with our integrated security portfolio.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          {features.map((feature, index) => (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              key={feature.id}
              className={`cursor-pointer relative rounded-xl overflow-hidden group ${
                activeFeature === feature.id ? 'ring-2 ring-accent-500' : ''
              }`}
              onClick={() => setActiveFeature(feature.id)}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${feature.color} opacity-90 group-hover:opacity-100 transition-opacity`}
              ></div>
              <div className="relative z-10 p-6 text-white h-full flex flex-col">
                <h3 className="text-2xl font-bold mb-2">{feature.title}</h3>
                <p className="text-white/80 mb-4">{feature.description}</p>
                <div className="mt-auto">
                  <button className="inline-flex items-center text-white font-medium">
                    Learn more
                    <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <AnimatePresence mode="wait">
          {features.map((feature) => {
            if (feature.id !== activeFeature) return null;
            
            return (
              <motion.div
                key={feature.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{ duration: 0.5 }}
                className="bg-gray-50 rounded-xl overflow-hidden shadow-soft"
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10 flex flex-col justify-center">
                    <h3 className="text-2xl md:text-3xl font-bold text-primary-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600 mb-6">{feature.description}</p>
                    <div className="mb-6">
                      <h4 className="text-lg font-medium text-primary-900 mb-3">Key Benefits:</h4>
                      <ul className="space-y-2">
                        {feature.benefits.map((benefit, index) => (
                          <li key={index} className="flex items-start">
                            <div className="flex-shrink-0 h-5 w-5 text-accent-500 mt-1">
                              <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                              </svg>
                            </div>
                            <span className="ml-2 text-gray-700">{benefit}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <button className="btn-primary">
                        Explore {feature.title}
                      </button>
                    </div>
                  </div>
                  <div className="h-64 md:h-auto relative">
                    <img
                      src={feature.image}
                      alt={feature.title}
                      className="absolute inset-0 h-full w-full object-cover"
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </AnimatePresence>
      </div>
    </section>
  );
};

export default FeatureHighlights;