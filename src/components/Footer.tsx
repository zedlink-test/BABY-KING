import { Facebook, Instagram, MessageCircle, Music } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

export default function Footer() {
  const navigate = useNavigate();

  const scrollToSection = (section: string) => {
    if (window.location.pathname !== '/') {
      navigate('/');
      setTimeout(() => {
        const element = document.getElementById(section);
        element?.scrollIntoView({ behavior: 'smooth' });
      }, 100);
    } else {
      const element = document.getElementById(section);
      element?.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <footer className="bg-gradient-to-r from-purple-600 via-pink-600 to-blue-600 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-2xl font-bold mb-4">My Nursery</h3>
            <p className="text-white/90">
              Nurturing young minds with love, care, and quality education.
            </p>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              <li>
                <button
                  onClick={() => navigate('/')}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Home
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/classes')}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Classes
                </button>
              </li>
              <li>
                <button
                  onClick={() => navigate('/education')}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Education Programmes
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('about')}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  About Us
                </button>
              </li>
              <li>
                <button
                  onClick={() => scrollToSection('contact')}
                  className="hover:text-yellow-300 transition-colors duration-300"
                >
                  Contact
                </button>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-xl font-semibold mb-4">Follow Us</h4>
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Facebook className="w-6 h-6" />
              </a>
              <a
                href="https://www.instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Instagram className="w-6 h-6" />
              </a>
              <a
                href="https://tiktok.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <Music className="w-6 h-6" />
              </a>
              <a
                href="https://wa.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/20 hover:bg-white/30 p-3 rounded-full transition-all duration-300 hover:scale-110"
              >
                <MessageCircle className="w-6 h-6" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center">
          <p className="text-white/80">
            © 2025 My Nursery & Preschool. All rights reserved. | Created By <a href="https://zedlink.netlify.app/"> | <span className="font-bold text-x0.6">ZED-LINK Solution.</span></a>
          </p>
        </div>
      </div>
    </footer>
  );
}
