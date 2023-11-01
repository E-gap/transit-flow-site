import HomeMain from "../../components/HomeMain/HomeMain";
import HomeWeDo from "../../components/HomeWeDo/HomeWeDo";
import HomeWhyUs from "../../components/HomeWhyUs/HomeWhyUs";
import Testimonial from "../../components/Testimonial/Testimonial";
import HomeWhyChoose from "../../components/HomeWhyChoose/HomeWhyChoose";
import Team from "../../components/Team/Team";
import HomeContact from "../../components/HomeContact/HomeContact";
import HomeBlog from "../../components/HomeBlog/HomeBlog";
import { team_homePage } from "../../assets/team";

const HomePage = () => {
  return (
    <>
      <HomeMain />
      <HomeWeDo />
      <HomeWhyUs />
      <Testimonial bg="white" />
      <HomeWhyChoose />
      <Team members={team_homePage} bg="white" />
      <HomeContact />
      <HomeBlog />
    </>
  );
};

export default HomePage;
