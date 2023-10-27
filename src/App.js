import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import HomeMain from "./components/HomeMain/HomeMain";
import HomeWeDo from "./components/HomeWeDo/HomeWeDo";
import HomeWhyUs from "./components/HomeWhyUs/HomeWhyUs";
import HomeTestimonial from "./components/HomeTestimonial/HomeTestimonial";

function App() {
  return (
    <div className="App">
      <Header />
      <HomeMain />
      <HomeWeDo />
      <HomeWhyUs />
      <HomeTestimonial />
      <Footer />
    </div>
  );
}

export default App;
