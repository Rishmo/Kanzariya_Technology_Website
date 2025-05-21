import { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

interface SearchOverlayProps {
  onClose: () => void;
}

const SearchOverlay = ({ onClose }: SearchOverlayProps) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [searchResults, setSearchResults] = useState<SearchResult[]>([]);
  const inputRef = useRef<HTMLInputElement>(null);

  // Focus input on mount
  useEffect(() => {
    if (inputRef.current) {
      inputRef.current.focus();
    }

    // Close on escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        onClose();
      }
    };

    document.addEventListener('keydown', handleEscape);
    return () => {
      document.removeEventListener('keydown', handleEscape);
    };
  }, [onClose]);

  // Simulated search functionality
  useEffect(() => {
    if (searchQuery.length > 2) {
      // Simulate search results (in a real app, this would be an API call)
      const results: SearchResult[] = [
        {
          id: '1',
          title: 'CloudGuard Network Security',
          category: 'Products',
          url: '/products/cloudguard',
          description: 'Comprehensive cloud security solutions to protect your infrastructure.',
        },
        {
          id: '2',
          title: 'Harmony Email & Office',
          category: 'Products',
          url: '/products/harmony-email',
          description: 'Secure your email and office applications from advanced threats.',
        },
        {
          id: '3',
          title: 'Quantum Security Gateway',
          category: 'Products',
          url: '/products/quantum',
          description: 'Next-generation security gateway for enterprise networks.',
        },
        {
          id: '4',
          title: 'ThreatCloud AI',
          category: 'Solutions',
          url: '/solutions/threatcloud-ai',
          description: 'AI-powered threat intelligence network.',
        },
      ].filter(item => 
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase())
      );
      
      setSearchResults(results);
    } else {
      setSearchResults([]);
    }
  }, [searchQuery]);

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-start justify-center pt-20 md:pt-32"
      onClick={onClose}
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: 0 }}
        className="bg-white rounded-lg shadow-xl w-full max-w-3xl mx-4 overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="p-4 flex items-center border-b border-gray-200">
          <Search className="w-5 h-5 text-gray-500 mr-3" />
          <input
            ref={inputRef}
            type="text"
            placeholder="Search for products, solutions, or resources..."
            className="flex-1 text-lg border-none outline-none"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
          />
          <button 
            onClick={onClose}
            className="ml-3 p-1 rounded-full hover:bg-gray-100"
          >
            <X className="w-5 h-5 text-gray-500" />
          </button>
        </div>
        
        <div className="max-h-[60vh] overflow-y-auto">
          {searchResults.length > 0 ? (
            <div className="p-4">
              <h3 className="text-sm font-medium text-gray-500 mb-3">Search Results</h3>
              <div className="space-y-3">
                {searchResults.map((result) => (
                  <Link
                    key={result.id}
                    to={result.url}
                    className="block p-3 hover:bg-gray-50 rounded-lg transition-colors"
                    onClick={onClose}
                  >
                    <div className="flex justify-between items-start">
                      <div>
                        <p className="text-xs font-medium text-accent-500 mb-1">{result.category}</p>
                        <h4 className="text-lg font-medium text-primary-900">{result.title}</h4>
                        <p className="text-sm text-gray-600 mt-1">{result.description}</p>
                      </div>
                      <ArrowRight className="w-4 h-4 text-gray-400 mt-1 flex-shrink-0" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          ) : searchQuery.length > 0 ? (
            <div className="p-8 text-center">
              <p className="text-gray-500">No results found for "{searchQuery}"</p>
              <p className="text-sm text-gray-400 mt-2">Try different keywords or browse our categories below</p>
            </div>
          ) : (
            <div className="p-5">
              <h3 className="text-sm font-medium text-gray-500 mb-4">Popular Searches</h3>
              <div className="flex flex-wrap gap-2">
                {['Cloud Security', 'Email Protection', 'Endpoint Security', 'Zero Trust', 'Ransomware Prevention'].map((term) => (
                  <button
                    key={term}
                    className="px-3 py-1.5 bg-gray-100 hover:bg-gray-200 rounded-full text-sm text-gray-800 transition-colors"
                    onClick={() => setSearchQuery(term)}
                  >
                    {term}
                  </button>
                ))}
              </div>
            </div>
          )}
        </div>
      </motion.div>
    </motion.div>
  );
};

interface SearchResult {
  id: string;
  title: string;
  category: string;
  url: string;
  description: string;
}

export default SearchOverlay;