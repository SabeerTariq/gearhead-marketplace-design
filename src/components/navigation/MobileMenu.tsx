
import React from "react";
import { Link } from "react-router-dom";
import { Facebook, Instagram, Youtube } from "lucide-react";

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
}

const MobileMenu = ({ isOpen, onClose }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 bg-white md:hidden">
      <div className="container-custom py-4 flex flex-col h-full">
        <nav className="flex flex-col space-y-6 text-xl mt-12">
          <Link to="/" onClick={onClose} className="py-2 border-b border-gray-100">
            Home
          </Link>
          <Link to="/listings" onClick={onClose} className="py-2 border-b border-gray-100">
            Listings
          </Link>
          <Link to="/sell-your-ride" onClick={onClose} className="py-2 border-b border-gray-100">
            Sell Your Ride
          </Link>
          <Link to="/about" onClick={onClose} className="py-2 border-b border-gray-100">
            About
          </Link>
          <Link to="/contact" onClick={onClose} className="py-2 border-b border-gray-100">
            Contact
          </Link>
        </nav>

        <div className="mt-8">
          <Link to="/sell-your-ride" onClick={onClose} className="btn-secondary w-full text-center flex justify-center mb-6">
            Sell Your Ride
          </Link>
        </div>

        <div className="mt-auto mb-8">
          <div className="flex justify-center space-x-6">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-oneoffautos-blue"
              aria-label="Facebook"
            >
              <Facebook size={24} />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-oneoffautos-blue"
              aria-label="Instagram"
            >
              <Instagram size={24} />
            </a>
            <a
              href="https://tiktok.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-oneoffautos-blue"
              aria-label="TikTok"
            >
              <Youtube size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileMenu;
