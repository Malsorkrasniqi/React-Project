import React from "react";
import Hero from "../components/Hero";
import HeroCards from "../components/HomeCards";
import JobListings from "../components/JobListings";
import ViewAllJobs from "../components/ViewAllJobs";

const HomePages = () => {
  return (
    <>
      <Hero />
      <HeroCards />
      <JobListings isHome={true} />
      <ViewAllJobs />
    </>
  );
};

export default HomePages;
