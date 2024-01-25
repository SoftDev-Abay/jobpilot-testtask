import React from "react";
import Hero from "../sections/Hero";
import PopularVacancies from "../sections/PopularVacancies";
import Tutorial from "../sections/Tutorial";
import PopularCategories from "../sections/PopularCategories";
import FeaturedJob from "../sections/FeaturedJob";
import TopCompanies from "../sections/TopCompanies";
import Action from "../sections/Action";
import Testimonials from "../sections/Testimonials";

const Home = () => {
  return (
    <>
      <Hero />
      <PopularVacancies />
      <Tutorial />
      <PopularCategories />
      <FeaturedJob />
      <TopCompanies />
      <Testimonials />
      <Action />
    </>
  );
};

export default Home;
