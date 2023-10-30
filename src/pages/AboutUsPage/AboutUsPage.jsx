import AboutUsMain from "../../components/AboutUsMain/AboutUsMain";
import AboutUsAboutUs from "../../components/AboutUsAboutUs/AboutUsAboutUs";
import AboutUsWeDo from "../../components/AboutUsWeDo/AboutUsWeDo";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import HomeTestimonial from "../../components/HomeTestimonial/HomeTestimonial";
import AboutUsPricing from "../../components/AboutUsPricing/AboutUsPricing";
import AboutUsFAQ from "../../components/AboutUsFAQ/AboutUsFAQ";
import AboutUsClients from "../../components/AboutUsClients/AboutUsClients";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsMain />
      <AboutUsAboutUs />
      <AboutUsWeDo />
      <HomeTeam />
      <HomeTestimonial bg="grey" />
      <AboutUsPricing />
      <AboutUsFAQ />
      <AboutUsClients />
    </>
  );
};

export default AboutUsPage;
