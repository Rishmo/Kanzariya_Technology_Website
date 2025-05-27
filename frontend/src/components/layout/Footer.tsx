import { Link } from 'react-router-dom';
import { 
  Facebook, 
  Twitter, 
  Linkedin, 
  Youtube, 
  Instagram,
  ArrowRight
} from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-primary-900 text-white pt-16 pb-8">
      <div className="container-custom">
        {/* Newsletter Section */}
        <div className="mb-12 lg:mb-16 border-b border-primary-700 pb-12">
          <div className="flex flex-col lg:flex-row gap-8 justify-between">
            <div className="max-w-xl">
              <h3 className="text-2xl font-bold mb-3">Stay informed with our newsletter</h3>
              <p className="text-primary-200 mb-4">
                Get the latest cybersecurity insights, news and updates delivered to your inbox.
              </p>
            </div>
            <div className="w-full lg:w-auto">
              <form className="flex flex-col sm:flex-row gap-3">
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="flex-1 px-4 py-3 bg-primary-800 border border-primary-700 rounded-md focus:outline-none focus:ring-2 focus:ring-accent-500 text-white"
                  required
                />
                <button
                  type="submit"
                  className="btn-primary flex items-center justify-center"
                >
                  Subscribe
                  <ArrowRight className="ml-2 h-4 w-4" />
                </button>
              </form>
              <p className="text-xs text-primary-300 mt-3">
                By subscribing, you agree to our Privacy Policy and Terms of Service.
              </p>
            </div>
          </div>
        </div>

        {/* Main Footer Links */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
         

          <div>
            <h4 className="text-lg font-semibold mb-4">About Company</h4>
            <ul className="space-y-3">
              <li>
                <Link to="/company/about" className="text-primary-200 hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link to="/company/leadership" className="text-primary-200 hover:text-white transition-colors">
                  Leadership
                </Link>
              </li>
              <li>
                <Link to="/company/careers" className="text-primary-200 hover:text-white transition-colors">
                  Careers
                </Link>
              </li>
              <li>
                <Link to="/company/news" className="text-primary-200 hover:text-white transition-colors">
                  Press & News
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-primary-200 hover:text-white transition-colors">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-primary-700 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="flex items-center mb-4 md:mb-0">
              {/* <Shield className="h-8 w-auto text-accent-500" /> */}
              {/* <img
        src="https://i.postimg.cc/DyX8s0YS/Whats-App-Image-2025-05-03-at-17-35-17-fa5c2980.jpg" // Update this path accordingly
        alt="Kanzariya Technology Logo"
        className="h-8 w-8"
      /> */}
              <span className="ml-2 text-xl font-bold">Kanzariya Technology</span>
            </div>
            
            {/* Social Media */}
            <div className="flex space-x-4 mb-4 md:mb-0 mt-4 md:mt-0">
              <a href="#" className="p-2 hover:bg-primary-800 rounded-full transition-colors" aria-label="Facebook">
                <Facebook className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-800 rounded-full transition-colors" aria-label="Twitter">
                <Twitter className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-800 rounded-full transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-800 rounded-full transition-colors" aria-label="YouTube">
                <Youtube className="h-5 w-5" />
              </a>
              <a href="#" className="p-2 hover:bg-primary-800 rounded-full transition-colors" aria-label="Instagram">
                <Instagram className="h-5 w-5" />
              </a>
            </div>
          </div>
          
          {/* Copyright and Legal Links */}
          <div className="flex flex-col md:flex-row justify-between items-center mt-8">
            <div className="text-sm text-primary-300 mb-4 md:mb-0">
              &copy; {new Date().getFullYear()}  Kanzariya Technology LLP. All rights reserved.
            </div>
            <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm">
              <Link to="/legal/privacy" className="text-primary-300 hover:text-white transition-colors">
                Privacy Policy
              </Link>
              <Link to="/legal/terms" className="text-primary-300 hover:text-white transition-colors">
                Terms of Service
              </Link>
              <Link to="/legal/cookies" className="text-primary-300 hover:text-white transition-colors">
                Cookie Policy
              </Link>
              <Link to="/sitemap" className="text-primary-300 hover:text-white transition-colors">
                Sitemap
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

// Shield logo component
const Shield = ({ className }: { className?: string }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10" />
  </svg>
);

export default Footer;