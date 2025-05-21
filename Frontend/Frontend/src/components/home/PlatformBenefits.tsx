import { Shield, Cloud, Lock, Mail, Database, FileText } from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

interface BenefitItemProps {
  icon: React.ReactNode;
  title: string;
  description: string;
  delay: number;
}

const BenefitItem = ({ icon, title, description, delay }: BenefitItemProps) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 20 }}
      animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
      transition={{ duration: 0.6, delay: delay * 0.1 }}
      className="bg-white rounded-xl p-6 shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
    >
      <div className="flex flex-col items-start">
        <div className="mb-4 p-3 bg-primary-50 text-primary-600 rounded-lg">
          {icon}
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-2">{title}</h3>
        <p className="text-gray-600">{description}</p>
      </div>
    </motion.div>
  );
};

const PlatformBenefits = () => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const benefits = [
    {
      icon: <Shield className="h-6 w-6" />,
      title: "AI-Powered Security",
      description: "Advanced threat detection and prevention using artificial intelligence and machine learning algorithms."
    },
    {
      icon: <Cloud className="h-6 w-6" />,
      title: "Cloud Security",
      description: "Protect your cloud infrastructure and applications with comprehensive security controls."
    },
    {
      icon: <Lock className="h-6 w-6" />,
      title: "Zero Trust Security",
      description: "Implement zero trust architecture to verify every user and device before granting access."
    },
    {
      icon: <Mail className="h-6 w-6" />,
      title: "Email Protection",
      description: "Block phishing attacks, malware, and other email-based threats before they reach your inbox."
    },
    {
      icon: <Database className="h-6 w-6" />,
      title: "Data Center Solutions",
      description: "Optimize infrastructure, enhance security, and ensure reliable data availability"
    },
    {
      icon: <FileText className="h-6 w-6" />,
      title: "IT Consulting & Auditing",
      description: "Improve IT efficiency through expert audits, strategy, and risk analysis."
    }
  ];

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-4">
            Comprehensive Protection Across Your Digital Estate
          </h2>
          <p className="text-gray-600 text-lg">
            Our platform provides unified security for all your assets - from cloud infrastructure to endpoints, networks, and mobile devices.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {benefits.map((benefit, index) => (
            <BenefitItem
              key={index}
              icon={benefit.icon}
              title={benefit.title}
              description={benefit.description}
              delay={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlatformBenefits;