import { useEffect } from 'react';

const ServicesPage = () => {
  useEffect(() => {
    document.title = 'Services - CheckPoint';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Services</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Expert services to help you implement, optimize, and manage your security infrastructure.
          </p>
        </div>
      </div>

      {/* Services Overview */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center mb-16">
            <div>
              <h2 className="text-3xl font-bold mb-4 text-primary-900">
                Expert Security Services
              </h2>
              <p className="text-gray-600 mb-6">
                Our team of security experts provides comprehensive services to help you implement,
                optimize, and manage your security infrastructure. From initial assessment to
                ongoing management, we're with you every step of the way.
              </p>
              <ul className="space-y-3">
                <ServiceBullet>
                  Comprehensive security assessments
                </ServiceBullet>
                <ServiceBullet>
                  Implementation and deployment services
                </ServiceBullet>
                <ServiceBullet>
                  24/7 monitoring and incident response
                </ServiceBullet>
                <ServiceBullet>
                  Training and certification programs
                </ServiceBullet>
                <ServiceBullet>
                  Policy development and compliance
                </ServiceBullet>
              </ul>
            </div>
            <div>
              <img
                src="https://images.pexels.com/photos/3183150/pexels-photo-3183150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                alt="Expert Security Services"
                className="rounded-xl shadow-lg"
              />
            </div>
          </div>

          {/* Service Categories */}
          <h2 className="text-3xl font-bold mb-8 text-primary-900">
            Our Services
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            <ServiceCard
              title="Managed Services"
              description="Let our experts manage your security infrastructure 24/7, providing monitoring, incident response, and optimization."
              link="/services/managed-services"
            />
            <ServiceCard
              title="Professional Services"
              description="Expert implementation, integration, and migration services to ensure your security solutions are optimally deployed."
              link="/services/professional-services"
            />
            <ServiceCard
              title="Consulting"
              description="Strategic security consulting to help you develop and implement a comprehensive security strategy."
              link="/services/consulting"
            />
            <ServiceCard
              title="Training & Certification"
              description="Comprehensive training programs to build your team's security expertise and certify their skills."
              link="/services/training"
            />
            <ServiceCard
              title="Technical Support"
              description="24/7 technical support to help you resolve issues quickly and keep your security solutions operating at peak performance."
              link="/services/support"
            />
            <ServiceCard
              title="Incident Response"
              description="Rapid response to security incidents, helping you contain, investigate, and recover from security breaches."
              link="/services/incident-response"
            />
          </div>

          {/* Service Process */}
          <h2 className="text-3xl font-bold mb-8 text-primary-900">
            Our Service Process
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-soft">
            <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
              <ProcessStep
                number="01"
                title="Assessment"
                description="We assess your current security posture and identify areas for improvement."
              />
              <ProcessStep
                number="02"
                title="Planning"
                description="We develop a tailored plan to address your security needs and objectives."
              />
              <ProcessStep
                number="03"
                title="Implementation"
                description="Our experts implement the plan, deploying and configuring solutions."
              />
              <ProcessStep
                number="04"
                title="Management"
                description="We provide ongoing management, monitoring, and optimization."
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceBullet = ({ children }: { children: React.ReactNode }) => {
  return (
    <li className="flex items-start">
      <div className="flex-shrink-0 h-5 w-5 text-accent-500 mt-1">
        <svg fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
        </svg>
      </div>
      <span className="ml-2 text-gray-700">{children}</span>
    </li>
  );
};

const ServiceCard = ({ title, description, link }: {
  title: string;
  description: string;
  link: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={link}
        className="text-accent-500 font-medium hover:text-accent-600 inline-flex items-center mt-auto"
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
      </a>
    </div>
  );
};

const ProcessStep = ({ number, title, description }: {
  number: string;
  title: string;
  description: string;
}) => {
  return (
    <div className="text-center">
      <div className="text-3xl font-bold text-accent-500 mb-2">{number}</div>
      <h3 className="text-xl font-semibold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600">{description}</p>
    </div>
  );
};

export default ServicesPage;