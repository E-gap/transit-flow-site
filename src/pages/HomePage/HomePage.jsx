import HomeMain from "../../components/HomeMain/HomeMain";
import HomeWeDo from "../../components/HomeWeDo/HomeWeDo";
import HomeWhyUs from "../../components/HomeWhyUs/HomeWhyUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import HomeWhyChoose from "../../components/HomeWhyChoose/HomeWhyChoose";
import HomeTeam from "../../components/HomeTeam/HomeTeam";
import HomeContact from "../../components/HomeContact/HomeContact";
import HomeBlog from "../../components/HomeBlog/HomeBlog";

const HomePage = () => {
  return (
    <>
      <HomeMain />
      <HomeWeDo />
      <HomeWhyUs />
      <Testimonial bg="white" />
      <HomeWhyChoose />
      <HomeTeam />
      <HomeContact />
      <HomeBlog />
    </>
  );
};

export default HomePage;
