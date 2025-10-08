import { useState } from 'react';
import { Menu, X, } from 'lucide-react';
import { useLocation, useNavigate } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const handleNavigation = (path: string, section?: string) => {
    if (section && location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else if (section) {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    } else {
      navigate(path);
    }
    setIsOpen(false);
  };

  return (
    <nav className="bg-gradient-to-r from-pink-500 via-purple-500 to-blue-500 text-white shadow-xl fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-20">
          <div
  className="flex items-center space-x-3 cursor-pointer"
  onClick={() => navigate('/')}
>
  {/* Replace the Baby icon with your logo */}
  <img
    src="/logo.svg"
    alt="My Nursery "
    className="w-10 h-10 object-contain rounded-full animate-bounce"
  />
  <span className="text-3xl font-bold">My Nursery</span>
</div>


          <div className="hidden md:flex space-x-8">
            <button
              onClick={() => handleNavigation('/')}
              className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/classes')}
              className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold"
            >
              Classes
            </button>
            <button
              onClick={() => handleNavigation('/education')}
              className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold"
            >
              Education Programmes
            </button>
            <button
              onClick={() => handleNavigation('/', 'about')}
              className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="hover:text-yellow-300 transition-colors duration-300 text-lg font-semibold"
            >
              Contact
            </button>
          </div>

          <button
            className="md:hidden"
            onClick={() => setIsOpen(!isOpen)}
          >
            {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-purple-600">
          <div className="px-4 pt-2 pb-4 space-y-3">
            <button
              onClick={() => handleNavigation('/')}
              className="block w-full text-left px-4 py-3 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-lg font-semibold"
            >
              Home
            </button>
            <button
              onClick={() => handleNavigation('/classes')}
              className="block w-full text-left px-4 py-3 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-lg font-semibold"
            >
              Classes
            </button>
            <button
              onClick={() => handleNavigation('/education')}
              className="block w-full text-left px-4 py-3 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-lg font-semibold"
            >
              Education Programmes
            </button>
            <button
              onClick={() => handleNavigation('/', 'about')}
              className="block w-full text-left px-4 py-3 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-lg font-semibold"
            >
              About Us
            </button>
            <button
              onClick={() => handleNavigation('/', 'contact')}
              className="block w-full text-left px-4 py-3 hover:bg-purple-700 rounded-lg transition-colors duration-300 text-lg font-semibold"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
