import { ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';

const HeroSection = () => {
  return (
    <section className="relative min-h-screen bg-primary-900 text-white overflow-hidden flex items-center">
      {/* Background gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary-900 via-primary-800 to-primary-900"></div>

      {/* Abstract background pattern */}
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full">
          {Array.from({ length: 5 }).map((_, i) => (
            <div 
              key={i}
              className="absolute rounded-full bg-white blur-3xl"
              style={{
                width: `${Math.random() * 40 + 10}rem`,
                height: `${Math.random() * 40 + 10}rem`,
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
                opacity: Math.random() * 0.3,
              }}
            ></div>
          ))}
        </div>
      </div>

      <div className="container-custom relative pt-32 pb-24 z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
                AI-Powered <br className="hidden sm:block" />
                <span className="text-accent-500">Cybersecurity</span> Platform
              </h1>
              <div className="mb-8 text-lg sm:text-xl text-primary-100 space-y-2">
                <p>Prevents GenAI attacks. Prevents phishing.</p>
                <p>Prevents threats. Prevents data loss.</p>
                <p className="font-medium">Powered by Kansec AI.</p>
              </div>
              <div className="flex">
                <button className="btn-outline group flex items-center">
                  Learn More
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          </div>
          <div className="lg:col-span-6">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative"
            >
              {/* Decorative elements */}
              <div className="absolute -bottom-4 -right-4 w-24 h-24 bg-accent-500/20 rounded-full blur-xl"></div>
              <div className="absolute -top-4 -left-4 w-20 h-20 bg-secondary-500/20 rounded-full blur-xl"></div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
