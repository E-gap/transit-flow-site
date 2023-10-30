import ServicesMain from "../../components/ServicesMain/ServicesMain";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import ServicesWorks from "../../components/ServicesWorks/ServicesWorks";
/* import AboutUsAboutUs from "../../components/AboutUsAboutUs/AboutUsAboutUs";
import AboutUsWeDo from "../../components/AboutUsWeDo/AboutUsWeDo";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import HomeTestimonial from "../../components/HomeTestimonial/HomeTestimonial";
import AboutUsPricing from "../../components/AboutUsPricing/AboutUsPricing";
import AboutUsFAQ from "../../components/AboutUsFAQ/AboutUsFAQ";
import AboutUsClients from "../../components/AboutUsClients/AboutUsClients"; */

const ServicesPage = () => {
  return (
    <>
      <ServicesMain />
      <WhatWeDo bg="white" />
      <ServicesWorks />

      {/* <Testimonial bg="white" /> */}
    </>
  );
};

export default ServicesPage;
