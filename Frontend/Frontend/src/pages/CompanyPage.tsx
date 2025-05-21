import { useEffect } from 'react';
import { Shield, Zap, Users, Target } from 'lucide-react';
import { Link } from 'react-router-dom';

const CompanyPage = () => {
  useEffect(() => {
    document.title = 'Company - Kanzariya Technology';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Kanzariya Technology</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Securing Progress. Enabling Innovation.
          </p>
        </div>
      </div>

      {/* About Section */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-6 text-primary-900">
                About Kanzariya Technology
              </h2>
              <p className="text-gray-600 mb-6">
                Kanzariya Technology is a leading provider of advanced technology solutions, delivering intelligent systems and secure infrastructure that power business transformation. Our mission is to help organizations leverage cutting-edge technologies to drive growth, efficiency, and resilience in an increasingly connected world.
              </p>
              <p className="text-gray-600 mb-6">
                With a core focus on innovation, security, and scalability, we offer end-to-end services that span software development, IT consulting, cybersecurity, staffing solutions, and enterprise digitalization. As a part of the Kanzariya Group, our foundation is built on excellence, integrity, and results.
              </p>
              <Link to="/about" className="btn-primary inline-flex items-center">
                Learn More About Us
              </Link>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Kanzariya Technology Team"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Our Commitment */}
          <div className="bg-gray-50 p-8 rounded-xl mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-6">Our Commitment</h2>
            <p className="text-gray-600">
              We are committed to delivering reliable, secure, and future-ready technology. Our approach combines deep industry expertise with the agility of a modern tech firm, allowing our clients to scale with confidence and adapt to dynamic market environments.
            </p>
          </div>

          {/* Portfolio */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Our Portfolio</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {portfolioItems.map((item, index) => (
                <PortfolioCard key={index} {...item} />
              ))}
            </div>
          </div>

          {/* Vision */}
          <div className="bg-primary-900 text-white rounded-xl p-8 mb-16">
            <h2 className="text-3xl font-bold mb-6">Our Vision</h2>
            <p className="text-lg text-primary-100">
              To be a global technology leader delivering secure, intelligent, and adaptive solutions that shape the future of enterprise innovation.
            </p>
          </div>

          {/* Values */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold text-primary-900 mb-8">Our Values</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <ValueCard
                icon={<Shield className="h-8 w-8" />}
                title="Integrity in Execution"
                description="We maintain the highest standards of honesty and transparency."
              />
              <ValueCard
                icon={<Zap className="h-8 w-8" />}
                title="Innovation with Purpose"
                description="We drive meaningful innovation that creates real value."
              />
              <ValueCard
                icon={<Users className="h-8 w-8" />}
                title="Client-Centric Collaboration"
                description="We work closely with clients to meet their unique needs."
              />
              <ValueCard
                icon={<Target className="h-8 w-8" />}
                title="Security-First Approach"
                description="We prioritize security in every solution we deliver."
              />
            </div>
          </div>

          {/* Closing */}
          <div className="text-center max-w-3xl mx-auto">
            <p className="text-lg text-gray-600 mb-6">
              With Kanzariya Technology, organizations don't just adapt — they lead. We are trusted by businesses across industries to deliver secure, agile, and impactful digital solutions that stand the test of time.
            </p>
            <p className="text-xl font-semibold text-primary-900">
              Let's build the future securely — together.
            </p>
            <div className="mt-8">
              <Link to="/contact" className="btn-primary">
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const portfolioItems = [
  {
    title: "Enterprise Software Development",
    description: "Robust, customizable platforms engineered for performance and scalability."
  },
  {
    title: "Cybersecurity Solutions",
    description: "Comprehensive security frameworks and assessments to protect critical digital assets."
  },
  {
    title: "IT Infrastructure & Cloud Services",
    description: "Secure cloud integration and infrastructure optimization for digital agility."
  },
  {
    title: "Talent & Workforce Solutions",
    description: "End-to-end staffing and HR technology for efficient team building and management."
  },
  {
    title: "Digital Transformation Strategy",
    description: "Business consulting and execution to guide sustainable digital evolution."
  }
];

const PortfolioCard = ({ title, description }: { title: string; description: string }) => (
  <div className="bg-white rounded-xl shadow-soft p-6 hover:shadow-medium transition-shadow">
    <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

const ValueCard = ({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) => (
  <div className="bg-white rounded-xl shadow-soft p-6 text-center">
    <div className="inline-block p-3 bg-primary-50 text-primary-600 rounded-lg mb-4">
      {icon}
    </div>
    <h3 className="text-lg font-bold text-primary-900 mb-2">{title}</h3>
    <p className="text-gray-600">{description}</p>
  </div>
);

export default CompanyPage;