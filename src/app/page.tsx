import Hero from "@/components/home/Hero";
import WhatYouCanLearn from "@/components/home/WhatYouCanLearn";
import FeaturedCourses from "@/components/home/FeaturedCourses";
import WhyLearnWithMohan from "@/components/home/WhyLearnWithMohan";
import SelectedProjects from "@/components/home/SelectedProjects";
import FinalCTA from "@/components/home/FinalCTA";

export default function HomePage() {
  return (
    <>
      <Hero />
      <WhatYouCanLearn />
      <FeaturedCourses />
      <WhyLearnWithMohan />
      <SelectedProjects />
      <FinalCTA />
    </>
  );
}
