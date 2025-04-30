
import React from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative bg-oneoffautos-blue text-white">
      <div 
        className="absolute inset-0 bg-black opacity-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlend: "overlay",
          mixBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container-custom py-16 md:py-24 lg:py-32 relative">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4">
            Find Your One-of-a-Kind Modified Ride
          </h1>
          <p className="text-lg md:text-xl mb-8">
            The premier marketplace for enthusiasts buying and selling unique modified vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Link to="/listings" className="btn-primary text-center">
              Browse Listings
            </Link>
            <Link to="/sell-your-ride" className="btn-secondary text-center">
              Sell Your Ride
            </Link>
          </div>
          
          <div className="mt-12 bg-white rounded-lg shadow-lg p-4 flex items-center">
            <Search className="text-gray-400 mr-2" size={20} />
            <input 
              type="text" 
              placeholder="Search makes, models, or mods..." 
              className="w-full border-none focus:outline-none text-gray-800"
            />
            <button className="bg-oneoffautos-red text-white px-4 py-2 rounded-md ml-2 whitespace-nowrap">
              Search
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
