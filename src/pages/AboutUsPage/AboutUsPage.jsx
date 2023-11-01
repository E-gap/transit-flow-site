import AboutUsMain from "../../components/AboutUsMain/AboutUsMain";
import AboutUsAboutUs from "../../components/AboutUsAboutUs/AboutUsAboutUs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import Testimonial from "../../components/Testimonial/Testimonial";
import AboutUsPricing from "../../components/AboutUsPricing/AboutUsPricing";
import FAQ from "../../components/FAQ/FAQ";
import AboutUsClients from "../../components/AboutUsClients/AboutUsClients";
import Team from "../../components/Team/Team";
import { team_homePage } from "../../assets/team";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsMain />
      <AboutUsAboutUs />
      <WhatWeDo bg="grey" />
      <Team members={team_homePage} bg="white" />
      <Testimonial bg="grey" />
      <AboutUsPricing />
      <FAQ />
      <AboutUsClients />
    </>
  );
};

export default AboutUsPage;
