import { useEffect } from 'react';

const SolutionsPage = () => {
  useEffect(() => {
    document.title = 'Solutions - Kanzariya Technology';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Solutions</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Industry-leading solutions designed to meet the specific security challenges of your business.
          </p>
        </div>
      </div>

      {/* Main content - sample for content structure */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8">Security Challenges We Solve</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-16">
            <SolutionCard
              title="Cloud Security"
              description="Protect your cloud infrastructure and workloads with automated security and compliance."
              image="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <SolutionCard
              title="Network Security"
              description="Secure your network infrastructure against advanced threats with next-generation security."
              image="https://images.pexels.com/photos/2881228/pexels-photo-2881228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <SolutionCard
              title="Endpoint Security"
              description="Protect all endpoint devices from malware, ransomware, and zero-day attacks."
              image="https://images.pexels.com/photos/3861969/pexels-photo-3861969.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
            <SolutionCard
              title="Zero Trust"
              description="Implement a zero trust security model to verify every user and device before granting access."
              image="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
            />
          </div>
          
          {/* Industry Solutions */}
          <h2 className="text-3xl font-bold mb-8">Industry Solutions</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <IndustryCard
              industry="Financial Services"
              description="Secure banking operations and protect sensitive financial data."
            />
            <IndustryCard
              industry="Healthcare"
              description="Protect patient data and ensure HIPAA compliance."
            />
            <IndustryCard
              industry="Government"
              description="Secure critical infrastructure and classified information."
            />
            <IndustryCard
              industry="Manufacturing"
              description="Protect intellectual property and operational technology."
            />
            <IndustryCard
              industry="Retail"
              description="Secure customer data and protect against payment fraud."
            />
            <IndustryCard
              industry="Education"
              description="Protect student data and research information."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SolutionCard = ({ title, description, image }: {
  title: string;
  description: string;
  image: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft overflow-hidden group hover:shadow-medium transition-shadow">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <h3 className="text-2xl font-bold text-primary-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a href="#" className="text-accent-500 font-medium hover:text-accent-600 inline-flex items-center">
          Explore solution
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 ml-1 group-hover:ml-2 transition-all"
            viewBox="0 0 20 20"
            fill="currentColor"
          >
            <path
              fillRule="evenodd"
              d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

const IndustryCard = ({ industry, description }: {
  industry: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow border border-gray-100">
      <h3 className="text-xl font-bold text-primary-900 mb-2">{industry}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <a href="#" className="text-accent-500 font-medium hover:text-accent-600 inline-flex items-center">
        Learn more
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5 ml-1"
          viewBox="0 0 20 20"
          fill="currentColor"
        >
          <path
            fillRule="evenodd"
            d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z"
            clipRule="evenodd"
          />
        </svg>
      </a>
    </div>
  );
};

export default SolutionsPage;