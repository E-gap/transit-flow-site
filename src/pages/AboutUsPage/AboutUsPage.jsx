import AboutUsMain from "../../components/AboutUsMain/AboutUsMain";
import AboutUsAboutUs from "../../components/AboutUsAboutUs/AboutUsAboutUs";
import AboutUsWeDo from "../../components/AboutUsWeDo/AboutUsWeDo";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import HomeTestimonial from "../../components/HomeTestimonial/HomeTestimonial";

const AboutUsPage = () => {
  return (
    <>
      <AboutUsMain />
      <AboutUsAboutUs />
      <AboutUsWeDo />
      <HomeTeam />
      <HomeTestimonial bg="grey" />
    </>
  );
};

export default AboutUsPage;
