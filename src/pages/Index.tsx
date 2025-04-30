
import React from "react";
import MainLayout from "../components/layouts/MainLayout";
import Hero from "../components/home/Hero";
import FeaturedListings from "../components/home/FeaturedListings";
import ValueProps from "../components/home/ValueProps";

const Index = () => {
  return (
    <MainLayout>
      <Hero />
      <FeaturedListings />
      <ValueProps />
    </MainLayout>
  );
};

export default Index;
