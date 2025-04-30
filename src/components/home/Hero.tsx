
import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Search, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const Hero = () => {
  const [makeValue, setMakeValue] = useState("");
  const [modelValue, setModelValue] = useState("");
  const [yearValue, setYearValue] = useState("");

  return (
    <div className="relative bg-oneoffautos-blue text-white">
      <div 
        className="absolute inset-0 bg-black opacity-50"
        style={{ 
          backgroundImage: "url('https://images.unsplash.com/photo-1503376780353-7e6692767b70?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundBlendMode: "overlay",
          mixBlendMode: "overlay"
        }}
      ></div>
      
      <div className="container-custom py-16 md:py-24 lg:py-32 relative z-10">
        <div className="max-w-2xl">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 animate-fade-in">
            Find Your One-of-a-Kind Modified Ride
          </h1>
          <p className="text-lg md:text-xl mb-8 animate-fade-in" style={{ animationDelay: "0.2s" }}>
            The premier marketplace for enthusiasts buying and selling unique modified vehicles.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Link to="/listings" className="btn-primary text-center">
              Browse Listings
            </Link>
            <Link to="/sell-your-ride" className="btn-secondary text-center">
              Sell Your Ride
            </Link>
          </div>
          
          <div className="mt-12 bg-white/90 backdrop-blur-sm rounded-lg shadow-lg p-5 animate-fade-in" style={{ animationDelay: "0.4s" }}>
            <h3 className="text-gray-800 font-semibold mb-4">Quick Search</h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-4">
              <div>
                <Select value={makeValue} onValueChange={setMakeValue}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Make" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="bg-white">
                    <SelectItem value="honda">Honda</SelectItem>
                    <SelectItem value="toyota">Toyota</SelectItem>
                    <SelectItem value="nissan">Nissan</SelectItem>
                    <SelectItem value="ford">Ford</SelectItem>
                    <SelectItem value="chevrolet">Chevrolet</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={modelValue} onValueChange={setModelValue}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Model" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="bg-white">
                    <SelectItem value="civic">Civic</SelectItem>
                    <SelectItem value="corolla">Corolla</SelectItem>
                    <SelectItem value="mustang">Mustang</SelectItem>
                    <SelectItem value="350z">350Z</SelectItem>
                    <SelectItem value="camaro">Camaro</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <Select value={yearValue} onValueChange={setYearValue}>
                  <SelectTrigger className="w-full bg-white">
                    <SelectValue placeholder="Year" />
                  </SelectTrigger>
                  <SelectContent position="popper" className="bg-white">
                    <SelectItem value="2023">2023</SelectItem>
                    <SelectItem value="2022">2022</SelectItem>
                    <SelectItem value="2021">2021</SelectItem>
                    <SelectItem value="2020">2020</SelectItem>
                    <SelectItem value="2019">2019</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex items-center">
              <input 
                type="text" 
                placeholder="Search makes, models, or mods..." 
                className="w-full border border-gray-200 rounded-l-md p-2 focus:outline-none text-gray-800"
              />
              <Link to="/listings" className="bg-oneoffautos-red text-white px-4 py-2 rounded-r-md whitespace-nowrap hover:bg-red-600 transition-colors">
                <Search size={20} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
