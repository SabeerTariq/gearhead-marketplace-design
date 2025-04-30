
import React from "react";
import { 
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const testimonials = [
  {
    quote: "I sold my custom Evo X in just 3 days. The buyer understood and valued all the mods I had done - something that never happened on general car sites.",
    name: "Alex R.",
    location: "Denver, CO",
    type: "Seller",
    avatar: "https://i.pravatar.cc/150?img=11"
  },
  {
    quote: "After months of searching for a properly modified S2000 elsewhere, I found exactly what I wanted on One Off Autos in my first week.",
    name: "Michelle T.",
    location: "Miami, FL",
    type: "Buyer",
    avatar: "https://i.pravatar.cc/150?img=25"
  },
  {
    quote: "The detailed mod filters saved me countless hours. I could specifically search for cars with the exact suspension setup I was looking for.",
    name: "James L.",
    location: "Seattle, WA",
    type: "Buyer",
    avatar: "https://i.pravatar.cc/150?img=53"
  },
  {
    quote: "Finally, a marketplace where my build's value is recognized. Sold my custom Tacoma for what it was truly worth.",
    name: "Sarah K.",
    location: "Austin, TX",
    type: "Seller",
    avatar: "https://i.pravatar.cc/150?img=44"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-oneoffautos-blue text-white">
      <div className="container-custom">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Community Success Stories</h2>
          <p className="text-lg max-w-2xl mx-auto">
            Hear from enthusiasts who've found their perfect rides and sellers who appreciate their builds.
          </p>
        </div>
        
        <div className="relative px-12">
          <Carousel className="w-full">
            <CarouselContent>
              {testimonials.map((testimonial, index) => (
                <CarouselItem key={index} className="md:basis-1/2 lg:basis-1/3">
                  <div className="bg-white text-gray-800 p-6 rounded-lg shadow-lg h-full flex flex-col relative pt-12">
                    {/* Avatar - Positioned above the card */}
                    <div className="absolute -top-10 left-1/2 transform -translate-x-1/2">
                      <Avatar className="h-20 w-20 border-4 border-oneoffautos-blue shadow-md">
                        <AvatarImage src={testimonial.avatar} alt={testimonial.name} />
                        <AvatarFallback className="bg-oneoffautos-red text-white text-xl">
                          {testimonial.name.charAt(0)}
                        </AvatarFallback>
                      </Avatar>
                    </div>
                    
                    <div className="mb-4 text-5xl text-oneoffautos-blue">"</div>
                    <p className="italic mb-6 flex-grow">{testimonial.quote}</p>
                    <div className="text-center">
                      <p className="font-bold">{testimonial.name}</p>
                      <p className="text-sm text-gray-600">{testimonial.location} • {testimonial.type}</p>
                    </div>
                  </div>
                </CarouselItem>
              ))}
            </CarouselContent>
            <CarouselPrevious className="left-0 bg-white" />
            <CarouselNext className="right-0 bg-white" />
          </Carousel>
        </div>
        
        <div className="text-center mt-12">
          <a 
            href="https://instagram.com" 
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center text-white hover:text-oneoffautos-red transition-colors"
          >
            See community builds on Instagram →
          </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
