
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
    <section className="py-24 bg-gradient-to-br from-gray-900 to-oneoffautos-blue relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute h-64 w-64 rounded-full bg-oneoffautos-red opacity-10 blur-3xl -top-20 -left-20"></div>
        <div className="absolute h-64 w-64 rounded-full bg-oneoffautos-blue opacity-10 blur-3xl bottom-10 right-10"></div>
        
        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxwYXRoIGQ9Ik0wIDBoNjB2NjBIMHoiLz48cGF0aCBkPSJNMzAgMzBoMzB2MzBIMzB6IiBzdHJva2Utb3BhY2l0eT0iLjEiIHN0cm9rZT0iI2ZmZiIgZmlsbD0ibm9uZSIvPjwvZz48L3N2Zz4=')] opacity-5"></div>
      </div>
      
      <div className="container-custom relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 text-white">How One Off <span className="text-oneoffautos-red">Autos</span> Works</h2>
          <div className="h-1 w-20 bg-oneoffautos-red mx-auto rounded-full"></div>
          <p className="text-lg text-gray-300 max-w-2xl mx-auto mt-6">
            Finding or selling your next modified vehicle has never been easier.
          </p>
        </div>
        
        <div className="relative">
          {/* Connection line */}
          <div className="absolute top-1/2 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-oneoffautos-red to-transparent transform -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
            {steps.map((step, index) => (
              <div 
                key={index} 
                className="relative"
              >
                <div className="flex flex-col items-center">
                  {/* Step number */}
                  <div className="relative mb-8">
                    <div className="absolute inset-0 bg-oneoffautos-red blur-md rounded-full opacity-50"></div>
                    <div className="relative z-10 bg-oneoffautos-blue border-2 border-oneoffautos-red h-24 w-24 rounded-full flex items-center justify-center shadow-lg">
                      {step.icon}
                    </div>
                    <div className="absolute top-0 right-0 h-6 w-6 rounded-full bg-white text-oneoffautos-blue font-bold flex items-center justify-center shadow-md transform translate-x-1">
                      {index + 1}
                    </div>
                  </div>
                  
                  {/* Content */}
                  <div className="bg-white/10 backdrop-blur-sm p-6 rounded-xl border border-white/10 text-center h-full w-full hover:transform hover:scale-105 transition-transform">
                    <h3 className="text-xl font-bold mb-3 text-white">{step.title}</h3>
                    <p className="text-gray-300">{step.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
