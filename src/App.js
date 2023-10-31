import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
// import HomePage from "./pages/HomePage/HomePage";
// import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
/* import ServicesPage from "./pages/ServicesPage/ServicesPage"; */
import ServiceSinglePage from "./pages/ServiceSinglePage/ServiceSinglePage";

function App() {
  return (
    <div className="App">
      <Header />
      {/* <HomePage />
       <AboutUsPage /> */}
      {/* <ServicesPage /> */}
      <ServiceSinglePage />
      <Footer />
    </div>
  );
}

export default App;
