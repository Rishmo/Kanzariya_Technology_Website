import { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

const ResourcesPage = () => {
  useEffect(() => {
    document.title = 'Resources - Kanzariya Technology';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Resources</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Explore our library of cybersecurity resources, including research reports, whitepapers, webinars, and more.
          </p>
        </div>
      </div>

      {/* Featured Resources */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-8 text-primary-900">
            Featured Resources
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <ResourceCard
              title="2025 Cyber Security Report"
              type="Research Report"
              date="May 2025"
              image="https://images.pexels.com/photos/9822732/pexels-photo-9822732.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              description="Comprehensive analysis of the latest cyber threats and emerging attack vectors."
            />
            <ResourceCard
              title="Securing Your Cloud Infrastructure"
              type="Whitepaper"
              date="April 2025"
              image="https://images.pexels.com/photos/5380642/pexels-photo-5380642.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              description="Best practices for securing your cloud infrastructure and applications."
            />
            <ResourceCard
              title="Zero Trust Architecture Implementation"
              type="Guide"
              date="March 2025"
              image="https://images.pexels.com/photos/60504/security-protection-anti-virus-software-60504.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              description="Step-by-step guide to implementing a zero trust security model in your organization."
            />
          </div>

          {/* Resource Categories */}
          <h2 className="text-3xl font-bold mb-8 text-primary-900">
            Resource Library
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            <CategoryCard
              title="Blog"
              description="Latest cybersecurity insights and thought leadership articles."
              count={124}
            />
            <CategoryCard
              title="Whitepapers"
              description="In-depth research and technical analyses on security topics."
              count={45}
            />
            <CategoryCard
              title="Webinars"
              description="Live and on-demand educational webinars from our experts."
              count={37}
            />
            <CategoryCard
              title="Case Studies"
              description="Real-world examples of successful security implementations."
              count={28}
            />
          </div>

          {/* Upcoming Webinars */}
          <h2 className="text-3xl font-bold mb-8 text-primary-900">
            Upcoming Webinars
          </h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">
            <WebinarCard
              title="Preventing Ransomware Attacks in 2025"
              date="May 28, 2025 | 10:00 AM PDT"
              speakers={["Dr. Lisa Johnson", "Mark Anderson"]}
              description="Learn strategies to prevent and mitigate ransomware attacks in today's evolving threat landscape."
            />
            <WebinarCard
              title="AI-Powered Security: Separating Hype from Reality"
              date="June 12, 2025 | 11:00 AM PDT"
              speakers={["Dr. Michael Chen", "Sarah Williams"]}
              description="Discover how AI is transforming cybersecurity and what it means for your organization."
            />
          </div>

          {/* Threat Intelligence */}
          <div className="bg-gray-50 rounded-xl p-8 mb-16">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
              <div className="lg:w-1/2">
                <h2 className="text-3xl font-bold mb-4 text-primary-900">
                  Latest Threat Intelligence
                </h2>
                <p className="text-gray-600 mb-6">
                  Stay informed about the latest threats with our ThreatCloud Intelligence feed. Our researchers analyze global threat data to provide actionable intelligence.
                </p>
                <a href="#" className="btn-primary">
                  Access Threat Intelligence
                </a>
              </div>
              <div className="lg:w-1/2 grid grid-cols-1 gap-4">
                <ThreatItem
                  title="New Ransomware Variant Targeting Healthcare"
                  severity="High"
                  date="May 10, 2025"
                />
                <ThreatItem
                  title="Critical Vulnerability in Popular CMS"
                  severity="Critical"
                  date="May 5, 2025"
                />
                <ThreatItem
                  title="Phishing Campaign Impersonating Financial Institutions"
                  severity="Medium"
                  date="April 28, 2025"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ResourceCard = ({ title, type, date, image, description }: {
  title: string;
  type: string;
  date: string;
  image: string;
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 overflow-hidden group">
      <div className="h-48 overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center justify-between mb-3">
          <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
            {type}
          </span>
          <span className="text-sm text-gray-500">{date}</span>
        </div>
        <h3 className="text-xl font-semibold text-primary-900 mb-2 group-hover:text-accent-500 transition-colors">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">{description}</p>
        <a
          href="#"
          className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600"
        >
          Download
          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
        </a>
      </div>
    </div>
  );
};

const CategoryCard = ({ title, description, count }: {
  title: string;
  description: string;
  count: number;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 p-6 group">
      <div className="flex justify-between items-center mb-3">
        <h3 className="text-xl font-semibold text-primary-900 group-hover:text-accent-500 transition-colors">
          {title}
        </h3>
        <span className="bg-primary-100 text-primary-700 text-sm font-medium px-2.5 py-0.5 rounded-full">
          {count}
        </span>
      </div>
      <p className="text-gray-600 mb-4">{description}</p>
      <a
        href="#"
        className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600"
      >
        View All
        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
      </a>
    </div>
  );
};

const WebinarCard = ({ title, date, speakers, description }: {
  title: string;
  date: string;
  speakers: string[];
  description: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 p-6">
      <div className="mb-3">
        <span className="inline-block px-3 py-1 text-xs font-medium bg-accent-100 text-accent-700 rounded-full">
          Webinar
        </span>
        <span className="ml-2 text-sm text-primary-700 font-medium">{date}</span>
      </div>
      <h3 className="text-xl font-semibold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600 mb-4">{description}</p>
      <div className="mb-4">
        <h4 className="text-sm font-medium text-gray-500 mb-2">Speakers:</h4>
        <div className="flex flex-wrap gap-2">
          {speakers.map((speaker, index) => (
            <span
              key={index}
              className="inline-block px-3 py-1 text-xs font-medium bg-gray-100 text-gray-800 rounded-full"
            >
              {speaker}
            </span>
          ))}
        </div>
      </div>
      <button className="btn-primary w-full justify-center">
        Register Now
      </button>
    </div>
  );
};

const ThreatItem = ({ title, severity, date }: {
  title: string;
  severity: "Low" | "Medium" | "High" | "Critical";
  date: string;
}) => {
  const getSeverityColor = (severity: string) => {
    switch (severity) {
      case "Low":
        return "bg-green-100 text-green-800";
      case "Medium":
        return "bg-yellow-100 text-yellow-800";
      case "High":
        return "bg-orange-100 text-orange-800";
      case "Critical":
        return "bg-red-100 text-red-800";
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="bg-white p-4 rounded-lg border border-gray-200 hover:border-primary-300 transition-colors">
      <div className="flex justify-between items-center mb-2">
        <span className={`inline-block px-2.5 py-0.5 text-xs font-medium rounded-full ${getSeverityColor(severity)}`}>
          {severity}
        </span>
        <span className="text-xs text-gray-500">{date}</span>
      </div>
      <h3 className="font-medium text-primary-900">{title}</h3>
      <a
        href="#"
        className="mt-2 inline-flex items-center text-xs text-accent-500 font-medium hover:text-accent-600"
      >
        Read Analysis
        <ArrowRight className="ml-1 h-3 w-3" />
      </a>
    </div>
  );
};

export default ResourcesPage;