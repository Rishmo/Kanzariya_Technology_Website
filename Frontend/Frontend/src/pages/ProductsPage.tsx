import { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { Shield, Cloud, Laptop, Server, Brain } from 'lucide-react';

const ProductsPage = () => {
  useEffect(() => {
    document.title = 'Products - CheckPoint';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Our Products</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Comprehensive security solutions to protect your organization from evolving cyber threats.
          </p>
        </div>
      </div>
      
      {/* Main content */}
      <div className="container-custom py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <ProductCard
            icon={<Cloud className="h-8 w-8" />}
            title="CloudGuard"
            description="Cloud security and posture management for public and private clouds."
            link="/products/cloudguard"
          />
          <ProductCard
            icon={<Laptop className="h-8 w-8" />}
            title="Harmony"
            description="Secure remote workforce and endpoints with unified protection."
            link="/products/harmony"
          />
          <ProductCard
            icon={<Shield className="h-8 w-8" />}
            title="Quantum"
            description="Next-generation firewalls and network security solutions."
            link="/products/quantum"
          />
          <ProductCard
            icon={<Server className="h-8 w-8" />}
            title="Infinity Platform"
            description="Unified security architecture across all environments."
            link="/products/infinity"
          />
          <ProductCard
            icon={<Brain className="h-8 w-8" />}
            title="ThreatCloud AI"
            description="AI-powered threat intelligence for proactive security."
            link="/products/threatcloud"
          />
        </div>
      </div>
      
      <div className="bg-gray-50 py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-center">Infinity Platform Architecture</h2>
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <div className="aspect-w-16 aspect-h-9 mb-8">
              <img
                src="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Infinity Platform Architecture"
                className="rounded-lg object-cover w-full h-full"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <ArchitectureItem
                number="01"
                title="Prevention First"
                description="Stop attacks before they happen with real-time prevention capabilities."
              />
              <ArchitectureItem
                number="02"
                title="Unified Management"
                description="Single console to manage security across all environments."
              />
              <ArchitectureItem
                number="03"
                title="AI-Powered"
                description="Advanced machine learning algorithms to detect and prevent threats."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ProductCard = ({ icon, title, description, link }: {
  icon: React.ReactNode;
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 overflow-hidden">
      <div className="p-6">
        <div className="mb-4 p-3 bg-primary-50 text-primary-600 rounded-lg inline-block">
          {icon}
        </div>
        <h3 className="text-2xl font-bold text-primary-900 mb-2">{title}</h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <Link
          to={link}
          className="text-accent-500 font-medium hover:text-accent-600 inline-flex items-center"
        >
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
        </Link>
      </div>
    </div>
  );
};

const ArchitectureItem = ({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div>
      <div className="text-4xl font-bold text-accent-500 mb-2">{number}</div>
      <h3 className="text-xl font-semibold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ProductsPage;