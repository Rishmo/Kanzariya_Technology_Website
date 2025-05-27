import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';

interface DropdownItem {
  key: string;
  label: string;
  path: string;
  description?: string;
}

interface NavDropdownProps {
  items: DropdownItem[];
}

const NavDropdown = ({ items }: NavDropdownProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: 10 }}
      transition={{ duration: 0.2 }}
      className="absolute top-full left-0 mt-1 w-64 bg-white rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none z-10"
    >
      <div className="py-1">
        {items.map((item) => (
          <Link
            key={item.key}
            to={item.path}
            className="block px-4 py-3 text-sm text-gray-700 hover:bg-gray-100 transition-colors"
          >
            <div className="font-medium text-primary-900">{item.label}</div>
            {item.description && (
              <div className="text-xs text-gray-500 mt-1">
                {item.description}
              </div>
            )}
          </Link>
        ))}
      </div>
    </motion.div>
  );
};

export default NavDropdown;