
import React from "react";
import { Search, Filter, Phone, Upload } from "lucide-react";

const HowItWorks = () => {
  const steps = [
    {
      icon: <Search className="h-12 w-12 text-oneoffautos-blue" />,
      title: "Browse Listings",
      description: "Search through our curated selection of modified vehicles."
    },
    {
      icon: <Filter className="h-12 w-12 text-oneoffautos-blue" />,
      title: "Filter by Mods",
      description: "Use our specialized filters to find exactly what you're looking for."
    },
    {
      icon: <Phone className="h-12 w-12 text-oneoffautos-blue" />,
      title: "Contact Seller",
      description: "Connect directly with sellers who share your passion."
    },
    {
      icon: <Upload className="h-12 w-12 text-oneoffautos-blue" />,
      title: "List Your Ride",
      description: "Ready to sell? Create a listing to showcase your build."
    }
  ];

  return (
    <section className="py-16 bg-oneoffautos-lightgray">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">How One Off Autos Works</h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            Finding or selling your next modified vehicle has never been easier.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => (
            <div 
              key={index} 
              className="bg-white p-6 rounded-lg shadow-md flex flex-col items-center text-center hover-scale"
            >
              <div className="mb-4 bg-oneoffautos-lightgray p-4 rounded-full">{step.icon}</div>
              <h3 className="text-xl font-bold mb-2">{step.title}</h3>
              <p className="text-gray-600">{step.description}</p>
              <div className="hidden sm:block absolute right-0 top-1/2 transform -translate-y-1/2 -translate-x-1/2">
                {index < steps.length - 1 && (
                  <div className="text-gray-300 text-3xl">→</div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
