import ServicesMain from "../../components/ServicesMain/ServicesMain";
import WhatWeDo from "../../components/WhatWeDo/WhatWeDo";
import ServicesWorks from "../../components/ServicesWorks/ServicesWorks";
import Testimonial from "../../components/Testimonial/Testimonial";
import Indicators from "../../components/Indicators/Indicators";
import { indicators_services } from "../../assets/indicators";

const ServicesPage = () => {
  return (
    <>
      <ServicesMain />
      <WhatWeDo bg="white" />
      <ServicesWorks />
      <Testimonial bg="white" />
      <Indicators indicators={indicators_services} />
    </>
  );
};

export default ServicesPage;
