import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeMain from "./components/HomeMain/HomeMain";
import HomeWeDo from "./components/HomeWeDo/HomeWeDo";
import HomeWhyUs from "./components/HomeWhyUs/HomeWhyUs";
import HomeTestimonial from "./components/HomeTestimonial/HomeTestimonial";
import HomeWhyChoose from "./components/HomeWhyChoose/HomeWhyChoose";
import HomeTeam from "./components/HomeTeam/HomeTeam";
import HomeContact from "./components/HomeContact/HomeContact";
import HomeBlog from "./components/HomeBlog/HomeBlog";
function App() {
  return (
    <div className="App">
      <Header />
      <HomeMain />
      <HomeWeDo />
      <HomeWhyUs />
      <HomeTestimonial />
      <HomeWhyChoose />
      <HomeTeam />
      <HomeContact />
      <HomeBlog />
      <Footer />
    </div>
  );
}

export default App;
