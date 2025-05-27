import { useEffect, useState } from 'react';
// import { MapPin, Phone, Mail, CheckCircle } from 'lucide-react';
import { MapPin, Mail, CheckCircle } from 'lucide-react';

const ContactPage = () => {
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    country: '',
    message: '',
    reason: 'Sales Inquiry',
  });

  useEffect(() => {
    document.title = 'Contact Us - Kanzariya Technology';
    window.scrollTo(0, 0);
  }, []);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // In a real application, you would send the form data to your backend
    console.log('Form submitted:', formData);
    setFormSubmitted(true);
  };

  return (
    <div className="pt-24">
      {/* Header */}
      <div className="bg-primary-900 text-white py-16">
        <div className="container-custom">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h1>
          <p className="text-xl text-primary-100 max-w-3xl">
            Get in touch with our team to learn more about our products and services or to get support.
          </p>
        </div>
      </div>

      {/* Contact information and form */}
      <div className="py-16">
        <div className="container-custom">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Contact Information */}
            <div>
              <h2 className="text-2xl font-bold text-primary-900 mb-6">
                Get in Touch
              </h2>
              <div className="space-y-6">
                <ContactItem
                  icon={<MapPin className="h-6 w-6" />}
                  title="Global Headquarters"
                  details={[`Kanzariya Corporate House Kanzariya Lumina City`, `Near Lumina Circle`, `NW Highway, Dwarka – 361335`, `Gujarat, India`]}
                />
                {/* <ContactItem
                  icon={<Phone className="h-6 w-6" />}
                  title="Phone"
                  details={['(+91) 9426736321']}
                /> */}
                <ContactItem
                  icon={<Mail className="h-6 w-6" />}
                  title="Email"
                  details={['info.tech@kanzariya.com']}
                />
              </div>

              {/* Office Hours */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  Office Hours
                </h3>
                <div className="bg-gray-50 p-4 rounded-lg">
                  <p className="text-gray-700 mb-2">
                    <span className="font-medium">Monday - Saturday:</span> 10:00 AM - 6:00 PM
                  </p>
                  <p className="text-gray-700">
                    <span className="font-medium">Sunday:</span> Closed
                  </p>
                </div>
              </div>

              {/* Social Media */}
              <div className="mt-10">
                <h3 className="text-lg font-semibold text-primary-900 mb-3">
                  Follow Us
                </h3>
                <div className="flex space-x-4">
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-primary-900 transition-colors"
                    aria-label="Facebook"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-primary-900 transition-colors"
                    aria-label="Twitter"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.95 4.57a9.8 9.8 0 0 1-2.82.77 4.93 4.93 0 0 0 2.16-2.72 9.86 9.86 0 0 1-3.12 1.19 4.92 4.92 0 0 0-8.38 4.48A13.98 13.98 0 0 1 2.6 3.2a4.93 4.93 0 0 0 1.52 6.57 4.9 4.9 0 0 1-2.23-.61v.06a4.92 4.92 0 0 0 3.95 4.83 4.9 4.9 0 0 1-2.22.08 4.93 4.93 0 0 0 4.6 3.42 9.86 9.86 0 0 1-6.1 2.1c-.4 0-.79-.02-1.17-.07a13.9 13.9 0 0 0 7.5 2.2c9.02 0 13.96-7.5 13.96-13.96 0-.21 0-.42-.01-.63a9.94 9.94 0 0 0 2.44-2.53z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-primary-900 transition-colors"
                    aria-label="LinkedIn"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M20.45 20.45h-3.56v-5.57c0-1.33-.02-3.05-1.85-3.05-1.86 0-2.14 1.45-2.14 2.95v5.67H9.34V9h3.42v1.57h.05c.47-.9 1.63-1.85 3.36-1.85 3.6 0 4.27 2.37 4.27 5.46v6.27zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zm1.78 13.02H3.56V9h3.56v11.45z" />
                    </svg>
                  </a>
                  <a
                    href="#"
                    className="bg-gray-100 hover:bg-gray-200 p-3 rounded-full text-primary-900 transition-colors"
                    aria-label="YouTube"
                  >
                    <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23.5 6.2c-.3-1.1-1.1-1.9-2.1-2.1C19.3 3.6 12 3.6 12 3.6s-7.3 0-9.4.5c-1 .2-1.8 1-2.1 2.1C0 8.3 0 12 0 12s0 3.7.5 5.8c.3 1.1 1.1 1.9 2.1 2.1 2.1.5 9.4.5 9.4.5s7.3 0 9.4-.5c1-.2 1.8-1 2.1-2.1.5-2.1.5-5.8.5-5.8s0-3.7-.5-5.8z" />
                      <path d="M9.6 15.6V8.4l6.3 3.6z" fill="white" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-xl shadow-soft p-6 lg:p-8">
                {formSubmitted ? (
                  <div className="text-center py-8">
                    <div className="flex justify-center mb-4">
                      <CheckCircle className="h-16 w-16 text-green-500" />
                    </div>
                    <h2 className="text-2xl font-bold text-primary-900 mb-2">
                      Thank You for Contacting Us!
                    </h2>
                    <p className="text-gray-600 mb-4">
                      Your message has been received. One of our representatives will contact you shortly.
                    </p>
                    <button
                      onClick={() => {
                        setFormSubmitted(false);
                        setFormData({
                          firstName: '',
                          lastName: '',
                          email: '',
                          phone: '',
                          company: '',
                          jobTitle: '',
                          country: '',
                          message: '',
                          reason: 'Sales Inquiry',
                        });
                      }}
                      className="btn-primary"
                    >
                      Send Another Message
                    </button>
                  </div>
                ) : (
                  <>
                    <h2 className="text-2xl font-bold text-primary-900 mb-6">
                      Send Us a Message
                    </h2>
                    <form onSubmit={handleSubmit}>
                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-6">
                        <div>
                          <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-1">
                            First Name*
                          </label>
                          <input
                            type="text"
                            id="firstName"
                            name="firstName"
                            required
                            value={formData.firstName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-1">
                            Last Name*
                          </label>
                          <input
                            type="text"
                            id="lastName"
                            name="lastName"
                            required
                            value={formData.lastName}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                            Email Address*
                          </label>
                          <input
                            type="email"
                            id="email"
                            name="email"
                            required
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                            Phone Number
                          </label>
                          <input
                            type="tel"
                            id="phone"
                            name="phone"
                            value={formData.phone}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="company" className="block text-sm font-medium text-gray-700 mb-1">
                            Company*
                          </label>
                          <input
                            type="text"
                            id="company"
                            name="company"
                            required
                            value={formData.company}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="jobTitle" className="block text-sm font-medium text-gray-700 mb-1">
                            Job Title
                          </label>
                          <input
                            type="text"
                            id="jobTitle"
                            name="jobTitle"
                            value={formData.jobTitle}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="country" className="block text-sm font-medium text-gray-700 mb-1">
                            Country*
                          </label>
                          <input
                            type="text"
                            id="country"
                            name="country"
                            required
                            value={formData.country}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          />
                        </div>
                        <div>
                          <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
                            Reason for Contact*
                          </label>
                          <select
                            id="reason"
                            name="reason"
                            required
                            value={formData.reason}
                            onChange={handleChange}
                            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                          >
                            <option value="Sales Inquiry">Sales Inquiry</option>
                            <option value="Technical Support">Technical Support</option>
                            <option value="Partnership">Partnership</option>
                            <option value="Press Inquiry">Press Inquiry</option>
                            <option value="Other">Other</option>
                          </select>
                        </div>
                      </div>
                      <div className="mb-6">
                        <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                          Message*
                        </label>
                        <textarea
                          id="message"
                          name="message"
                          rows={5}
                          required
                          value={formData.message}
                          onChange={handleChange}
                          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500"
                        ></textarea>
                      </div>
                      <div className="mb-6">
                        <label className="flex items-start">
                          <input
                            type="checkbox"
                            required
                            className="mt-1 mr-2"
                          />
                          <span className="text-sm text-gray-600">
                            I agree to the <a href="#" className="text-accent-500 hover:underline">Privacy Policy</a> and consent to the processing of my personal data.
                          </span>
                        </label>
                      </div>
                      <div>
                        <button type="submit" className="btn-primary w-full justify-center py-3">
                          Send Message
                        </button>
                      </div>
                    </form>
                  </>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ContactItem = ({ icon, title, details }: {
  icon: React.ReactNode;
  title: string;
  details: string[];
}) => {
  return (
    <div className="flex">
      <div className="flex-shrink-0 mr-4 text-accent-500">
        {icon}
      </div>
      <div>
        <h3 className="text-lg font-medium text-primary-900">{title}</h3>
        <div className="mt-1 text-gray-600">
          {details.map((detail, index) => (
            <p key={index}>{detail}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ContactPage;