import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ArrowRight } from 'lucide-react';
import { useState } from 'react';

// Dummy news data
const newsItems = [
  {
    id: 1,
    title: "CheckPoint Unveils New ThreatCloud AI 3.0 Technology",
    date: "May 15, 2025",
    category: "Product Announcement",
    excerpt: "The latest ThreatCloud AI technology uses advanced machine learning to detect and prevent sophisticated attacks in real-time.",
    image: "https://images.pexels.com/photos/2582937/pexels-photo-2582937.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 2,
    title: "Global Threat Intelligence Report 2025 Released",
    date: "April 28, 2025",
    category: "Research",
    excerpt: "Our annual report reveals a 43% increase in AI-powered attacks and provides insights on emerging threat vectors.",
    image: "https://images.pexels.com/photos/267350/pexels-photo-267350.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 3,
    title: "CheckPoint Recognized as Leader in Gartner Magic Quadrant",
    date: "April 10, 2025",
    category: "Award",
    excerpt: "For the 15th consecutive year, CheckPoint has been positioned as a Leader in the Gartner Magic Quadrant for Network Firewalls.",
    image: "https://images.pexels.com/photos/3184292/pexels-photo-3184292.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 4,
    title: "Join Us at CyberSec Summit 2025",
    date: "March 22, 2025",
    category: "Event",
    excerpt: "Meet our experts at the world's largest cybersecurity conference. Live demos, workshops, and networking opportunities await.",
    image: "https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  },
  {
    id: 5,
    title: "New Partnership with Global Financial Services Provider",
    date: "March 5, 2025",
    category: "Partnership",
    excerpt: "CheckPoint announces strategic partnership with one of the world's largest financial institutions to enhance security posture.",
    image: "https://images.pexels.com/photos/936137/pexels-photo-936137.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
  }
];

// Event data
const upcomingEvents = [
  {
    id: 1,
    title: "CyberSec Summit 2025",
    date: "June 15-17, 2025",
    location: "San Francisco, CA",
    type: "Conference"
  },
  {
    id: 2,
    title: "Preventing Ransomware Attacks",
    date: "May 28, 2025",
    location: "Virtual",
    type: "Webinar"
  },
  {
    id: 3,
    title: "Zero Trust Security Workshop",
    date: "June 5, 2025",
    location: "London, UK",
    type: "Workshop"
  }
];

const NewsEvents = () => {
  const [activeTab, setActiveTab] = useState('news');
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section className="py-20 bg-gray-50">
      <div className="container-custom">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
          className="flex flex-col md:flex-row md:items-center md:justify-between mb-12"
        >
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-primary-900 mb-2">
              News & Upcoming Events
            </h2>
            <p className="text-gray-600">
              Stay informed with the latest cybersecurity insights and events.
            </p>
          </div>
          <div className="mt-4 md:mt-0 flex space-x-2 bg-white rounded-lg p-1 shadow-sm">
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'news'
                  ? 'bg-primary-800 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('news')}
            >
              Latest News
            </button>
            <button
              className={`px-4 py-2 rounded-md text-sm font-medium transition-colors ${
                activeTab === 'events'
                  ? 'bg-primary-800 text-white'
                  : 'text-gray-700 hover:bg-gray-100'
              }`}
              onClick={() => setActiveTab('events')}
            >
              Upcoming Events
            </button>
          </div>
        </motion.div>

        {activeTab === 'news' ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {newsItems.slice(0, 3).map((item, index) => (
              <motion.div
                key={item.id}
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-white rounded-xl overflow-hidden shadow-soft border border-gray-100 hover:shadow-medium transition-shadow"
              >
                <div className="h-48 overflow-hidden">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-cover transform hover:scale-105 transition-transform duration-500"
                  />
                </div>
                <div className="p-6">
                  <div className="flex items-center mb-3">
                    <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                      {item.category}
                    </span>
                    <span className="ml-2 text-sm text-gray-500">{item.date}</span>
                  </div>
                  <h3 className="text-xl font-semibold text-primary-900 mb-2 hover:text-accent-500 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-gray-600 mb-4">{item.excerpt}</p>
                  <a href="#" className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600">
                    Read More
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </a>
                </div>
              </motion.div>
            ))}
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-2 bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden"
            >
              <div className="p-6">
                <h3 className="text-2xl font-bold text-primary-900 mb-6">
                  Featured Event: CyberSec Summit 2025
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <img
                      src="https://images.pexels.com/photos/2774556/pexels-photo-2774556.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
                      alt="CyberSec Summit 2025"
                      className="w-full h-48 object-cover rounded-lg"
                    />
                  </div>
                  <div>
                    <div className="flex items-center mb-3">
                      <span className="inline-block px-3 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                        Conference
                      </span>
                      <span className="ml-2 text-sm text-gray-500">June 15-17, 2025</span>
                    </div>
                    <p className="text-gray-600 mb-4">
                      Join us at the world's premier cybersecurity event. Meet with industry leaders,
                      attend workshops, and discover the latest in threat prevention technology.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-3">
                      <button className="btn-primary">Register Now</button>
                      <button className="btn-outline bg-transparent border-primary-800 text-primary-800 hover:bg-primary-800 hover:text-white">
                        View Agenda
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              <div className="bg-white rounded-xl shadow-soft border border-gray-100 overflow-hidden">
                <div className="p-6">
                  <h3 className="text-xl font-bold text-primary-900 mb-4">
                    Upcoming Events
                  </h3>
                  <div className="space-y-4">
                    {upcomingEvents.map((event) => (
                      <div key={event.id} className="border-b border-gray-100 pb-4 last:border-b-0 last:pb-0">
                        <div className="flex items-center mb-2">
                          <span className="inline-block px-2 py-1 text-xs font-medium bg-primary-100 text-primary-700 rounded-full">
                            {event.type}
                          </span>
                          <span className="ml-2 text-sm text-gray-500">{event.date}</span>
                        </div>
                        <h4 className="text-lg font-medium text-primary-900">{event.title}</h4>
                        <p className="text-gray-600 text-sm">{event.location}</p>
                      </div>
                    ))}
                  </div>
                  <div className="mt-4 pt-4 border-t border-gray-100">
                    <a href="#" className="inline-flex items-center text-accent-500 font-medium hover:text-accent-600">
                      View All Events
                      <ArrowRight className="ml-2 h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        )}
      </div>
    </section>
  );
};

export default NewsEvents;