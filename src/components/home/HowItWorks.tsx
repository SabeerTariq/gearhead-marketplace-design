
import React from "react";
import { Search, Filter, Phone, Upload } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-white" />,
      title: "Browse Listings",
      description: "Search through our curated selection of modified vehicles."
    },
    {
      icon: <Filter className="h-12 w-12 text-white" />,
      title: "Filter by Mods",
      description: "Use our specialized filters to find exactly what you're looking for."
    },
    {
      icon: <Phone className="h-12 w-12 text-white" />,
      title: "Contact Seller",
      description: "Connect directly with sellers who share your passion."
    },
    {
      icon: <Upload className="h-12 w-12 text-white" />,
      title: "List Your Ride",
      description: "Ready to sell? Create a listing to showcase your build."
    }
  ];

  return (
    <section className="py-24 bg-gradient-to-br from-gray-900 to-oneoffautos-blue">
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How One Off <span className="text-oneoffautos-red">Autos</span> Works</h2>
          <div className="h-1 w-20 bg-oneoffautos-red mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Finding or selling your next modified vehicle has never been easier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
          {/* Connection line */}
          <div className="absolute top-1/4 left-0 w-full h-0.5 bg-oneoffautos-red opacity-50 hidden lg:block"></div>
          
          {steps.map((step, index) => (
            <div key={index} className="flex flex-col items-center">
              {/* Step icon */}
              <div className="relative mb-6 z-10">
                <div className="absolute inset-0 bg-oneoffautos-red opacity-30 blur-md rounded-full"></div>
                <div className="bg-gradient-to-br from-oneoffautos-blue to-blue-900 h-24 w-24 rounded-full flex items-center justify-center shadow-lg relative z-10 border-2 border-oneoffautos-red">
                  {step.icon}
                </div>
                <div className="absolute -top-2 -right-2 bg-oneoffautos-red text-white h-8 w-8 rounded-full flex items-center justify-center font-bold shadow-lg">
                  {index + 1}
                </div>
              </div>
              
              {/* Step content */}
              <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/20 text-center w-full hover:transform hover:scale-105 transition-all duration-300 h-full shadow-lg">
                <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                <p className="text-gray-300">{step.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
