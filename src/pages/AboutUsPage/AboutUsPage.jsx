import AboutUsMain from "../../components/AboutUsMain/AboutUsMain";
import AboutUsAboutUs from "../../components/AboutUsAboutUs/AboutUsAboutUs";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import Testimonial from "../../components/Testimonial/Testimonial";
import AboutUsPricing from "../../components/AboutUsPricing/AboutUsPricing";
import AboutUsFAQ from "../../components/AboutUsFAQ/AboutUsFAQ";
import AboutUsClients from "../../components/AboutUsClients/AboutUsClients";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsMain />
      <AboutUsAboutUs />
      <WhatWeDo bg="grey" />
      <HomeTeam />
      <Testimonial bg="grey" />
      <AboutUsPricing />
      <AboutUsFAQ />
      <AboutUsClients />
    </>
  );
};

export default AboutUsPage;
