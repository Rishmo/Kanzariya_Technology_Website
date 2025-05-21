import { useEffect } from 'react';
import { Search } from 'lucide-react';

const SupportPage = () => {
  useEffect(() => {
    document.title = 'Support - CheckPoint';
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Support</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Get the help you need to resolve issues and maximize the value of your security solutions.
          </p>
        </div>
      </div>

      {/* Search Section */}
      <div className="bg-primary-800 py-10">
        <div className="container-custom">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-2xl font-bold text-white mb-6 text-center">
              How can we help you today?
            </h2>
            <div className="flex">
              <div className="relative flex-grow">
                <input
                  type="text"
                  placeholder="Search for help topics..."
                  className="w-full px-5 py-4 rounded-l-lg text-gray-800 focus:outline-none focus:ring-2 focus:ring-accent-500"
                />
                <div className="absolute right-3 top-1/2 transform -translate-y-1/2 text-gray-400">
                  <Search className="h-5 w-5" />
                </div>
              </div>
              <button className="bg-accent-500 hover:bg-accent-600 text-white px-6 py-4 rounded-r-lg font-medium transition-colors">
                Search
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Support Options */}
      <div className="py-16">
        <div className="container-custom">
          <h2 className="text-3xl font-bold mb-10 text-primary-900 text-center">
            Support Options
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            <SupportCard
              title="Technical Support"
              description="Get technical assistance from our support engineers for resolving issues with your security solutions."
              link="/support/technical-support"
              linkText="Contact Support"
            />
            <SupportCard
              title="Documentation"
              description="Access product guides, technical documentation, and best practices for deploying and using our products."
              link="/support/documentation"
              linkText="Browse Documentation"
            />
            <SupportCard
              title="Knowledge Base"
              description="Search our knowledge base for answers to common questions and troubleshooting guides."
              link="/support/knowledge-base"
              linkText="Search Knowledge Base"
            />
          </div>

          {/* Downloads Section */}
          <h2 className="text-3xl font-bold mb-6 text-primary-900">
            Downloads
          </h2>
          <div className="bg-white p-8 rounded-xl shadow-soft mb-16">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
              <DownloadItem
                title="Software Updates"
                description="Download the latest updates for your security products."
              />
              <DownloadItem
                title="Agents & Clients"
                description="Download endpoint and mobile security clients."
              />
              <DownloadItem
                title="Management Tools"
                description="Download management and administration tools."
              />
              <DownloadItem
                title="Virtual Appliances"
                description="Download virtual appliance images for cloud deployments."
              />
            </div>
          </div>

          {/* FAQs */}
          <h2 className="text-3xl font-bold mb-8 text-primary-900">
            Frequently Asked Questions
          </h2>
          <div className="max-w-3xl mx-auto">
            <FaqItem
              question="How do I open a support case?"
              answer="To open a support case, log in to the support portal with your account credentials and click on 'Create Case'. Fill in the required information about your issue, including product details and a description of the problem you're experiencing."
            />
            <FaqItem
              question="What support plans are available?"
              answer="We offer several support plans to meet different needs, including Standard, Premium, and Elite. Each plan offers different levels of support, response times, and additional services. Contact our sales team for more information about which plan is right for your organization."
            />
            <FaqItem
              question="How do I download software updates?"
              answer="Software updates can be downloaded from the Downloads section of the support portal. Log in with your account credentials, select the product you want to update, and download the latest version."
            />
            <FaqItem
              question="How can I reset my support portal password?"
              answer="To reset your support portal password, click on the 'Forgot Password' link on the login page. Enter your email address, and you'll receive instructions for resetting your password."
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const SupportCard = ({ title, description, link, linkText }: {
  title: string;
  description: string;
  link: string;
  linkText: string;
}) => {
  return (
    <div className="bg-white rounded-xl shadow-soft hover:shadow-medium transition-shadow border border-gray-100 p-6 h-full flex flex-col">
      <h3 className="text-xl font-bold text-primary-900 mb-3">{title}</h3>
      <p className="text-gray-600 mb-4 flex-grow">{description}</p>
      <a
        href={link}
        className="btn-primary text-center mt-auto"
      >
        {linkText}
      </a>
    </div>
  );
};

const DownloadItem = ({ title, description }: {
  title: string;
  description: string;
}) => {
  return (
    <div className="bg-gray-50 rounded-lg p-4 hover:bg-gray-100 transition-colors">
      <h3 className="font-semibold text-primary-900 mb-2">{title}</h3>
      <p className="text-gray-600 text-sm mb-3">{description}</p>
      <a
        href="#"
        className="text-accent-500 font-medium hover:text-accent-600 inline-flex items-center text-sm"
      >
        View Downloads
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 ml-1"
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

const FaqItem = ({ question, answer }: {
  question: string;
  answer: string;
}) => {
  return (
    <div className="border-b border-gray-200 py-5">
      <h3 className="text-lg font-semibold text-primary-900 mb-3">
        {question}
      </h3>
      <p className="text-gray-600">
        {answer}
      </p>
    </div>
  );
};

export default SupportPage;